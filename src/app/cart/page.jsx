"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Minus, Plus, Trash2 } from "lucide-react";
import { MAX_QUANTITY, useCart } from "@/context/CartContext";

function computeTotals(items) {
  const subtotal = items.reduce((sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1), 0);
  const delivery = subtotal > 500 ? 0 : 50;
  const total = subtotal + delivery;

  return { subtotal, delivery, total };
}

export default function CartPage() {
  const router = useRouter();
  const {
    isHydrated,
    cartItems,
    updateCartItemQuantity,
    removeFromCart,
  } = useCart();

  if (!isHydrated) {
    return (
      <div className="mx-auto min-h-screen max-w-6xl px-4 pb-16 pt-28 sm:px-6">
        <p className="text-sm text-text-dark/70">Loading cart...</p>
      </div>
    );
  }

  const { subtotal, delivery, total } = computeTotals(cartItems);

  const handleProceed = () => {
    if (cartItems.length === 0) {
      return;
    }

    router.push("/checkout?source=cart");
  };

  return (
    <div className="mx-auto min-h-screen max-w-6xl px-4 pb-16 pt-28 sm:px-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-text-dark">Your Cart</h1>
        <Link href="/products" className="text-sm font-semibold text-primary hover:underline">
          Continue Shopping
        </Link>
      </div>

      {cartItems.length === 0 ? (
        <div className="rounded-2xl border border-primary/10 bg-white p-8 text-center shadow-sm">
          <p className="text-lg font-semibold text-text-dark">Your cart is empty.</p>
          <Link
            href="/products"
            className="mt-4 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <section className="rounded-2xl border border-primary/10 bg-white p-4 shadow-sm sm:p-6">
            <div className="space-y-4">
              {cartItems.map((item) => {
                const quantity = Number(item.quantity || 1);
                const lineTotal = Number(item.price || 0) * quantity;

                return (
                  <article key={`${item.productId}-${item.variantLabel || "std"}`} className="rounded-xl border border-primary/10 p-3 sm:p-4">
                    <div className="flex gap-4">
                      <div className="relative h-20 w-20 overflow-hidden rounded-lg bg-bg-light">
                        <Image
                          src={item.image || "/images/products/mld.jpeg"}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </div>

                      <div className="flex-1">
                        <p className="font-semibold text-text-dark">{item.name}</p>
                        {item.variantLabel ? (
                          <p className="text-xs text-text-dark/60">Variant: {item.variantLabel}</p>
                        ) : null}
                        <p className="mt-1 text-sm font-semibold text-primary">
                          ₹{Number(item.price || 0).toLocaleString()} each
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-3">
                          <div className="inline-flex items-center rounded-md border border-primary/20">
                            <button
                              type="button"
                              onClick={() => updateCartItemQuantity(item.productId, item.variantLabel, Math.max(1, quantity - 1))}
                              className="px-2 py-1 text-text-dark hover:bg-bg-light"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="min-w-9 px-2 text-center text-sm font-semibold">{quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateCartItemQuantity(item.productId, item.variantLabel, Math.min(MAX_QUANTITY, quantity + 1))}
                              className="px-2 py-1 text-text-dark hover:bg-bg-light"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromCart(item.productId, item.variantLabel)}
                            className="inline-flex items-center gap-1 text-sm font-medium text-red-600 hover:underline"
                          >
                            <Trash2 className="h-4 w-4" /> Remove
                          </button>

                          <p className="ml-auto text-sm font-bold text-text-dark">
                            ₹{lineTotal.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <aside className="h-fit rounded-2xl border border-primary/10 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-text-dark">Order Summary</h2>
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
              onClick={handleProceed}
              disabled={cartItems.length === 0}
              className="mt-5 w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              Proceed to Checkout
            </button>
            {cartItems.length === 0 ? (
              <p className="mt-2 text-xs text-red-600">Add items to continue checkout.</p>
            ) : null}
          </aside>
        </div>
      )}
    </div>
  );
}
