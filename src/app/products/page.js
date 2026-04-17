"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpDown,
  CalendarDays,
  CheckCircle2,
  Minus,
  Plus,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Truck,
} from "lucide-react";
import { products } from "@/lib/productData";
import { MAX_QUANTITY, useCart } from "@/context/CartContext";

const realProductImageMap = {
  mld: "/images/products/mld/edited-photo.jpg",
  "mineral-mixture": "/images/products/minral/edited-photo.jpg",
  "calf-supplement": "/images/products/calf/edited-photo.jpg",
  "dairy-guruji-h": "/images/products/h/h-box-with-bottel.jpg",
  "bypass-fat": "/images/products/bypass/edited-photo.jpg",
  "dairy-guruji-gel": "/images/products/gel/edited-photo.jpg",
  calcium: "/images/products/calcium/calcium-can-5lt-1st.jpg",
  "liver-tonic": "/images/products/liver/edited-photo.jpg",
  "deworming-bolus": "/images/products/deworming/deworming-box-with-tab.jpg",
  "feed-6000-plus": "/images/products/feed-6000.png",
  "feed-8000-plus": "/images/products/feed-8000.jpeg",
};

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-low" },
  { label: "Price: High to Low", value: "price-high" },
  { label: "Best Discount", value: "discount" },
  { label: "Rating", value: "rating" },
  { label: "Newest", value: "name" },
];

const ITEMS_PER_PAGE = 6;

function getDefaultVariant(product) {
  if (!Array.isArray(product.variants) || product.variants.length === 0) {
    return null;
  }

  return (
    product.variants.find((variant) => variant.isDefault) || product.variants[0]
  );
}

export default function ProductsPage() {
  const router = useRouter();
  const { addToCart, cartItems, isHydrated, setBuyNowItem } = useCart();

  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [quickQuantity, setQuickQuantity] = useState({});
  const [toastMessage, setToastMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const preparedProducts = useMemo(
    () =>
      products.map((product) => {
        const selectedVariant = getDefaultVariant(product);
        const currentPrice = selectedVariant?.price ?? product.price ?? 1099;
        const currentMrp = selectedVariant?.mrp ?? product.mrp ?? currentPrice;
        const discountPercent =
          currentMrp > currentPrice
            ? Math.round(((currentMrp - currentPrice) / currentMrp) * 100)
            : 0;

        return {
          ...product,
          selectedVariant,
          currentPrice,
          currentMrp,
          discountPercent,
        };
      }),
    [],
  );

  const visibleProducts = useMemo(() => {
    const search = query.trim().toLowerCase();
    const searched = preparedProducts.filter((product) => {
      if (!search) {
        return true;
      }

      return (
        product.name.toLowerCase().includes(search) ||
        product.problem.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search) ||
        product.tag.toLowerCase().includes(search)
      );
    });

    if (sortBy === "price-low") {
      return [...searched].sort((a, b) => a.currentPrice - b.currentPrice);
    }

    if (sortBy === "price-high") {
      return [...searched].sort((a, b) => b.currentPrice - a.currentPrice);
    }

    if (sortBy === "discount") {
      return [...searched].sort(
        (a, b) => b.discountPercent - a.discountPercent,
      );
    }

    if (sortBy === "rating") {
      return [...searched].sort(
        (a, b) => Number(b.rating || 0) - Number(a.rating || 0),
      );
    }

    if (sortBy === "name") {
      return [...searched].sort((a, b) => b.id.localeCompare(a.id));
    }

    return searched;
  }, [preparedProducts, query, sortBy]);

  useEffect(() => {
    if (!toastMessage) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setToastMessage("");
    }, 2200);

    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [query, sortBy]);

  const compactBenefit = (benefit) =>
    benefit.replace(/[.,]/g, "").split(" ").slice(0, 3).join(" ");

  const totalPages = Math.max(
    1,
    Math.ceil(visibleProducts.length / ITEMS_PER_PAGE),
  );
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(
    startIndex + ITEMS_PER_PAGE,
    visibleProducts.length,
  );
  const paginatedProducts = visibleProducts.slice(startIndex, endIndex);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const getQuantity = (productId, maxAllowedQty) => {
    const storedQty = Number(quickQuantity[productId] || 1);
    return Math.max(1, Math.min(maxAllowedQty, storedQty));
  };

  const adjustQuantity = (productId, value, maxAllowedQty) => {
    setQuickQuantity((previous) => {
      const next = Math.max(1, Math.min(maxAllowedQty, value));
      return {
        ...previous,
        [productId]: next,
      };
    });
  };

  const getCartQuantity = (productId, variantLabel) =>
    cartItems.reduce((sum, item) => {
      const sameProduct = item.productId === productId;
      const sameVariant = (item.variantLabel || "") === (variantLabel || "");
      return sameProduct && sameVariant
        ? sum + Number(item.quantity || 0)
        : sum;
    }, 0);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f7f4ea_0%,#f9f7f0_45%,#fbfaf6_100%)] pb-20 pt-24">
      <div className="pointer-events-none absolute left-[-10%] top-12 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-12%] top-20 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />

      <section className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-[2rem] border border-primary/10 bg-white/90 p-6 shadow-[0_18px_45px_rgba(20,33,45,0.07)] backdrop-blur md:p-8">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">
            Product Marketplace
          </p>
          <h1 className="mt-2 text-2xl font-black tracking-tight text-text-dark md:text-3xl">
            Find, compare and order dairy products quickly.
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-dark/70 md:text-base">
            Browse products, sort as needed, and add to cart instantly.
          </p>
        </div>
      </section>

      <section className="relative mx-auto mt-8 max-w-7xl px-4 sm:px-6">
        {visibleProducts.length ? (
          <>
            <div className="mb-3 text-sm font-semibold text-text-dark/70">
              Showing {startIndex + 1}-{Math.max(startIndex + 1, endIndex)} of{" "}
              {visibleProducts.length} products
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {paginatedProducts.map((product) => {
                const cardImage =
                  realProductImageMap[product.id] ?? product.image;
                const isOutOfStock = Number(product.stock || 0) <= 0;
                const maxAllowedQty = Math.max(
                  1,
                  Math.min(MAX_QUANTITY, Number(product.stock || MAX_QUANTITY)),
                );
                const quantity = getQuantity(product.id, maxAllowedQty);
                const variantLabel = product.selectedVariant?.label || "";
                const cartQuantity = getCartQuantity(product.id, variantLabel);

                const selectedItem = {
                  productId: product.id,
                  name: product.name,
                  price: product.currentPrice,
                  quantity,
                  variantLabel,
                  image: cardImage,
                };

                return (
                  <article
                    key={product.id}
                    className="group rounded-[1.35rem] border border-primary/10 bg-white p-4 shadow-[0_14px_40px_rgba(20,33,45,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(20,33,45,0.08)]"
                  >
                    <Link href={`/products/${product.id}`} className="block">
                      <div className="relative flex items-center justify-center">
                        {product.discountPercent > 0 ? (
                          <span className="absolute left-2 top-2 rounded-full bg-primary px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-white">
                            {product.discountPercent}% OFF
                          </span>
                        ) : null}
                        <Image
                          src={cardImage}
                          alt={product.name}
                          width={280}
                          height={280}
                          className="h-40 w-auto object-contain transition duration-300 group-hover:scale-[1.04]"
                        />
                      </div>
                    </Link>

                    <div className="mt-4">
                      <div className="flex items-start justify-between gap-2">
                        <h2 className="line-clamp-2 text-lg font-black tracking-tight text-text-dark">
                          {product.name}
                        </h2>
                        {product.pack ? (
                          <span className="shrink-0 rounded-full bg-secondary/25 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-text-dark">
                            {product.pack}
                          </span>
                        ) : null}
                      </div>

                      <p className="mt-1 line-clamp-2 text-sm font-semibold text-primary">
                        {product.problem}
                      </p>

                      <div className="mt-3 flex items-center gap-1.5 text-xs text-text-dark/60">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Assured quality and farm-tested formula
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {(product.benefits ?? []).slice(0, 2).map((benefit) => (
                          <span
                            key={`${product.id}-${benefit}`}
                            className="rounded-full bg-bg-light px-2.5 py-1 text-[11px] font-semibold text-text-dark/75"
                          >
                            {compactBenefit(benefit)}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 rounded-xl border border-primary/10 bg-bg-light/70 px-3 py-2.5">
                        <div className="flex items-end gap-2">
                          <span className="text-xl font-black text-text-dark">
                            ₹{product.currentPrice.toLocaleString()}
                          </span>
                          {product.currentMrp > product.currentPrice ? (
                            <span className="pb-0.5 text-sm text-text-dark/50 line-through">
                              ₹{product.currentMrp.toLocaleString()}
                            </span>
                          ) : null}
                        </div>
                        <div className="mt-1 text-xs text-text-dark/55">
                          Free delivery on eligible orders
                        </div>
                        {variantLabel ? (
                          <div className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-text-dark/70">
                            Variant: {variantLabel}
                          </div>
                        ) : null}
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="inline-flex items-center rounded-lg border border-primary/20">
                          <button
                            type="button"
                            onClick={() =>
                              adjustQuantity(
                                product.id,
                                quantity - 1,
                                maxAllowedQty,
                              )
                            }
                            className="px-2.5 py-2 text-text-dark hover:bg-bg-light"
                            aria-label={`Decrease ${product.name} quantity`}
                            disabled={isOutOfStock}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-9 text-center text-sm font-bold">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              adjustQuantity(
                                product.id,
                                quantity + 1,
                                maxAllowedQty,
                              )
                            }
                            className="px-2.5 py-2 text-text-dark hover:bg-bg-light"
                            aria-label={`Increase ${product.name} quantity`}
                            disabled={isOutOfStock}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        {isHydrated && cartQuantity > 0 ? (
                          <span className="text-xs font-semibold text-primary">
                            In cart: {cartQuantity}
                          </span>
                        ) : (
                          <span className="text-xs text-text-dark/55">
                            Ready to add
                          </span>
                        )}
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          disabled={isOutOfStock}
                          onClick={() => {
                            addToCart(selectedItem, quantity);
                            setToastMessage(`${product.name} added to cart`);
                          }}
                          className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-primary bg-white px-3 text-sm font-bold text-primary transition hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          <ShoppingCart className="h-4 w-4" /> Add
                        </button>

                        <button
                          type="button"
                          disabled={isOutOfStock}
                          onClick={() => {
                            setBuyNowItem(selectedItem, quantity);
                            router.push("/checkout?source=buy-now");
                          }}
                          className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(17,77,44,0.24)] transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          Buy Now
                        </button>
                      </div>

                      <Link
                        href={`/products/${product.id}`}
                        className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-primary/15 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-text-dark/75 transition hover:bg-bg-light"
                      >
                        View Details
                      </Link>

                      {isOutOfStock ? (
                        <p className="mt-2 text-xs font-semibold text-red-600">
                          Currently out of stock
                        </p>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>

            {totalPages > 1 ? (
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-primary/10 bg-white p-4 shadow-sm">
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((previous) => Math.max(1, previous - 1))
                  }
                  disabled={safePage === 1}
                  className="rounded-lg border border-primary/20 px-3 py-2 text-sm font-semibold text-text-dark transition hover:bg-bg-light disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Previous
                </button>

                <div className="flex flex-wrap items-center gap-2">
                  {pageNumbers.map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={`h-9 min-w-9 rounded-lg px-3 text-sm font-bold transition ${
                        page === safePage
                          ? "bg-primary text-white"
                          : "border border-primary/20 bg-white text-text-dark hover:bg-bg-light"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((previous) =>
                      Math.min(totalPages, previous + 1),
                    )
                  }
                  disabled={safePage === totalPages}
                  className="rounded-lg border border-primary/20 px-3 py-2 text-sm font-semibold text-text-dark transition hover:bg-bg-light disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            ) : null}
          </>
        ) : (
          <div className="rounded-[1.75rem] border border-primary/15 bg-white p-12 text-center shadow-[0_14px_40px_rgba(20,33,45,0.05)]">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-black text-text-dark">
              No products found
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-text-dark/60">
              Try a different search keyword to view more products.
            </p>
          </div>
        )}
      </section>

      {toastMessage ? (
        <div className="fixed bottom-6 right-4 z-50 rounded-xl border border-primary/20 bg-white px-4 py-3 text-sm font-semibold text-text-dark shadow-lg sm:right-6">
          {toastMessage}
        </div>
      ) : null}
    </div>
  );
}
