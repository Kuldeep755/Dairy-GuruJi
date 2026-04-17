"use client";

import Script from "next/script";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import {
  createAddress,
  createOnlineSession,
  fetchAddresses,
  placeCodOrder,
  verifyOnlinePayment,
} from "@/lib/checkout";

const initialAddressForm = {
  name: "",
  phone: "",
  pincode: "",
  address: "",
  city: "",
  state: "",
};

function computeTotals(items) {
  const subtotal = items.reduce((sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1), 0);
  const delivery = subtotal > 500 ? 0 : 50;
  const total = subtotal + delivery;

  return {
    subtotal,
    delivery,
    total,
  };
}

function validateAddressForm(address) {
  if (!address.name || !address.phone || !address.pincode || !address.address || !address.city || !address.state) {
    return "All address fields are required.";
  }

  if (!/^\d{10}$/.test(address.phone)) {
    return "Phone number must be 10 digits.";
  }

  if (!/^\d{6}$/.test(address.pincode)) {
    return "Pincode must be 6 digits.";
  }

  return "";
}

export default function CheckoutPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const source = searchParams.get("source");

  const {
    isHydrated,
    userId,
    cartItems,
    buyNowItem,
    clearCart,
    clearBuyNowItem,
  } = useCart();

  const checkoutItems = useMemo(() => {
    if (source === "buy-now" && buyNowItem) {
      return [buyNowItem];
    }

    if (source === "cart") {
      return cartItems;
    }

    if (buyNowItem) {
      return [buyNowItem];
    }

    return cartItems;
  }, [source, buyNowItem, cartItems]);

  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState("");
  const [addressForm, setAddressForm] = useState(initialAddressForm);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [isSavingAddress, setIsSavingAddress] = useState(false);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!isHydrated || !userId) {
      return;
    }

    let isMounted = true;

    const loadAddresses = async () => {
      try {
        const list = await fetchAddresses(userId);

        if (!isMounted) {
          return;
        }

        setAddresses(list);

        if (list.length > 0) {
          const defaultAddress = list.find((entry) => entry.isDefault) || list[0];
          setSelectedAddressId(String(defaultAddress.id));
        }
      } catch (error) {
        if (!isMounted) {
          return;
        }

        setErrorMessage(error.message || "Failed to load addresses.");
      }
    };

    loadAddresses();

    return () => {
      isMounted = false;
    };
  }, [isHydrated, userId]);

  useEffect(() => {
    if (isHydrated && checkoutItems.length === 0) {
      router.replace("/cart");
    }
  }, [isHydrated, checkoutItems.length, router]);

  if (!isHydrated) {
    return (
      <div className="mx-auto min-h-screen max-w-6xl px-4 pb-16 pt-28 sm:px-6">
        <p className="text-sm text-text-dark/70">Loading checkout...</p>
      </div>
    );
  }

  if (checkoutItems.length === 0) {
    return (
      <div className="mx-auto min-h-screen max-w-6xl px-4 pb-16 pt-28 sm:px-6">
        <p className="text-sm text-text-dark/70">Redirecting to cart...</p>
      </div>
    );
  }

  const { subtotal, delivery, total } = computeTotals(checkoutItems);

  const selectedAddress =
    addresses.find((entry) => String(entry.id) === String(selectedAddressId)) || null;

  const handleAddressInput = (event) => {
    const { name, value } = event.target;
    setAddressForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSaveAddress = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    const validationError = validateAddressForm(addressForm);
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setIsSavingAddress(true);

    try {
      const nextAddress = await createAddress(userId, addressForm);
      setAddresses((previous) => [nextAddress, ...previous]);
      setSelectedAddressId(String(nextAddress.id));
      setAddressForm(initialAddressForm);
    } catch (error) {
      setErrorMessage(error.message || "Failed to save address.");
    } finally {
      setIsSavingAddress(false);
    }
  };

  const clearPurchasedItemsFromState = () => {
    if (source === "buy-now") {
      clearBuyNowItem();
      return;
    }

    if (source === "cart") {
      clearCart();
      return;
    }

    if (buyNowItem) {
      clearBuyNowItem();
      return;
    }

    clearCart();
  };

  const redirectToSuccess = (order) => {
    const params = new URLSearchParams({
      orderNumber: order.orderNumber || "",
      paymentMethod: order.paymentMethod || paymentMethod,
      paymentStatus: order.paymentStatus || (paymentMethod === "COD" ? "Pending" : "Paid"),
      amount: String(total),
    });

    router.push(`/order-success?${params.toString()}`);
  };

  const handlePlaceOrder = async () => {
    setErrorMessage("");

    if (!selectedAddress) {
      setErrorMessage("Please select a delivery address.");
      return;
    }

    if (!["COD", "ONLINE"].includes(paymentMethod)) {
      setErrorMessage("Please select a payment method.");
      return;
    }

    setIsPlacingOrder(true);

    try {
      if (paymentMethod === "COD") {
        const order = await placeCodOrder({
          userId,
          items: checkoutItems,
          address: selectedAddress,
        });

        clearPurchasedItemsFromState();
        redirectToSuccess(order);
        return;
      }

      const paymentSession = await createOnlineSession({
        userId,
        items: checkoutItems,
        address: selectedAddress,
      });

      if (!window.Razorpay) {
        throw new Error("Razorpay SDK is not loaded. Please refresh and try again.");
      }

      const razorpay = new window.Razorpay({
        key: paymentSession.keyId,
        amount: paymentSession.amount,
        currency: paymentSession.currency,
        name: "Dairy Guruji",
        description: `Order ${paymentSession.orderNumber}`,
        order_id: paymentSession.razorpayOrderId,
        prefill: paymentSession.customer,
        notes: {
          orderNumber: paymentSession.orderNumber,
        },
        theme: {
          color: "#1f7d46",
        },
        modal: {
          ondismiss: () => {
            setIsPlacingOrder(false);
          },
        },
        handler: async (response) => {
          try {
            const order = await verifyOnlinePayment({
              orderDbId: paymentSession.orderDbId,
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            });

            clearPurchasedItemsFromState();
            redirectToSuccess(order);
          } catch (error) {
            setErrorMessage(error.message || "Payment verification failed.");
          } finally {
            setIsPlacingOrder(false);
          }
        },
      });

      razorpay.on("payment.failed", (event) => {
        setIsPlacingOrder(false);
        const message =
          event?.error?.description || event?.error?.reason || "Payment failed. Please try again.";
        setErrorMessage(message);
      });

      razorpay.open();
    } catch (error) {
      setErrorMessage(error.message || "Unable to place order.");
      setIsPlacingOrder(false);
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />

      <div className="mx-auto min-h-screen max-w-6xl px-4 pb-16 pt-28 sm:px-6">
        <h1 className="text-3xl font-bold text-text-dark">Checkout</h1>

        {errorMessage ? (
          <p className="mt-4 rounded-md border border-red-100 bg-red-50 px-3 py-2 text-sm text-red-700">
            {errorMessage}
          </p>
        ) : null}

        <div className="mt-6 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <section className="rounded-2xl border border-primary/10 bg-white p-4 shadow-sm sm:p-6">
              <h2 className="text-lg font-semibold text-text-dark">1. Order Summary</h2>
              <div className="mt-4 space-y-3">
                {checkoutItems.map((item) => (
                  <article key={`${item.productId}-${item.variantLabel || "std"}`} className="flex gap-3 rounded-xl border border-primary/10 p-3">
                    <div className="relative h-16 w-16 overflow-hidden rounded-md bg-bg-light">
                      <Image
                        src={item.image || "/images/products/mld.jpeg"}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-text-dark">{item.name}</p>
                      <p className="text-xs text-text-dark/60">
                        Qty: {item.quantity} {item.variantLabel ? `| ${item.variantLabel}` : ""}
                      </p>
                    </div>
                    <p className="text-sm font-bold text-text-dark">
                      ₹{(Number(item.price || 0) * Number(item.quantity || 1)).toLocaleString()}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-primary/10 bg-white p-4 shadow-sm sm:p-6">
              <h2 className="text-lg font-semibold text-text-dark">2. Delivery Address</h2>

              {addresses.length > 0 ? (
                <div className="mt-4 space-y-3">
                  {addresses.map((address) => (
                    <label key={address.id} className="flex cursor-pointer gap-3 rounded-xl border border-primary/10 p-3">
                      <input
                        type="radio"
                        name="selectedAddress"
                        value={address.id}
                        checked={String(selectedAddressId) === String(address.id)}
                        onChange={() => setSelectedAddressId(String(address.id))}
                        className="mt-1"
                      />
                      <div className="text-sm text-text-dark/85">
                        <p className="font-semibold text-text-dark">{address.name}</p>
                        <p>{address.phone}</p>
                        <p>{address.address}, {address.city}, {address.state} - {address.pincode}</p>
                      </div>
                    </label>
                  ))}
                </div>
              ) : (
                <p className="mt-3 text-sm text-text-dark/70">No saved address yet. Add one below.</p>
              )}

              <form onSubmit={handleSaveAddress} className="mt-5 grid gap-3 sm:grid-cols-2">
                <input
                  name="name"
                  value={addressForm.name}
                  onChange={handleAddressInput}
                  placeholder="Full Name"
                  className="rounded-md border border-primary/15 px-3 py-2 text-sm"
                />
                <input
                  name="phone"
                  value={addressForm.phone}
                  onChange={handleAddressInput}
                  placeholder="Mobile Number"
                  maxLength={10}
                  className="rounded-md border border-primary/15 px-3 py-2 text-sm"
                />
                <input
                  name="pincode"
                  value={addressForm.pincode}
                  onChange={handleAddressInput}
                  placeholder="Pincode"
                  maxLength={6}
                  className="rounded-md border border-primary/15 px-3 py-2 text-sm"
                />
                <input
                  name="city"
                  value={addressForm.city}
                  onChange={handleAddressInput}
                  placeholder="City"
                  className="rounded-md border border-primary/15 px-3 py-2 text-sm"
                />
                <input
                  name="state"
                  value={addressForm.state}
                  onChange={handleAddressInput}
                  placeholder="State"
                  className="rounded-md border border-primary/15 px-3 py-2 text-sm"
                />
                <input
                  name="address"
                  value={addressForm.address}
                  onChange={handleAddressInput}
                  placeholder="House No, Area, Street"
                  className="rounded-md border border-primary/15 px-3 py-2 text-sm sm:col-span-2"
                />
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSavingAddress}
                    className="rounded-md border border-primary px-4 py-2 text-sm font-semibold text-primary disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSavingAddress ? "Saving..." : "Add New Address"}
                  </button>
                </div>
              </form>
            </section>

            <section className="rounded-2xl border border-primary/10 bg-white p-4 shadow-sm sm:p-6">
              <h2 className="text-lg font-semibold text-text-dark">3. Payment Method</h2>
              <div className="mt-4 space-y-3 text-sm">
                <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-primary/10 p-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="COD"
                    checked={paymentMethod === "COD"}
                    onChange={() => setPaymentMethod("COD")}
                  />
                  <span>Cash on Delivery (COD)</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-primary/10 p-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="ONLINE"
                    checked={paymentMethod === "ONLINE"}
                    onChange={() => setPaymentMethod("ONLINE")}
                  />
                  <span>Online Payment (Razorpay)</span>
                </label>
              </div>
            </section>
          </div>

          <aside className="h-fit rounded-2xl border border-primary/10 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-text-dark">Price Details</h2>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center justify-between text-text-dark/80">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-text-dark/80">
                <span>Delivery</span>
                <span>{delivery === 0 ? "Free" : `₹${delivery.toLocaleString()}`}</span>
              </div>
              <div className="mt-2 flex items-center justify-between border-t border-primary/10 pt-3 text-base font-bold text-text-dark">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handlePlaceOrder}
              disabled={isPlacingOrder}
              className="mt-5 w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isPlacingOrder ? "Processing..." : "Place Order"}
            </button>
          </aside>
        </div>
      </div>
    </>
  );
}
