"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Minus, Plus, Search, ShoppingCart } from "lucide-react";
import { products } from "@/lib/productData";

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
};

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const [quantities, setQuantities] = useState(() =>
    Object.fromEntries(products.map((product) => [product.id, 1])),
  );

  const tags = useMemo(
    () => ["All", ...new Set(products.map((product) => product.tag))],
    [],
  );

  const filteredProducts = useMemo(() => {
    const search = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesTag = activeTag === "All" || product.tag === activeTag;
      const matchesSearch =
        search.length === 0 ||
        product.name.toLowerCase().includes(search) ||
        product.problem.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search) ||
        product.tag.toLowerCase().includes(search);

      return matchesTag && matchesSearch;
    });
  }, [activeTag, query]);

  const updateQuantity = (id, type) => {
    setQuantities((prev) => {
      const current = prev[id] ?? 1;
      const next = type === "inc" ? current + 1 : Math.max(1, current - 1);
      return { ...prev, [id]: next };
    });
  };

  const compactBenefit = (benefit) =>
    benefit.replace(/[.,]/g, "").split(" ").slice(0, 2).join(" ");

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f7f4ea_0%,#faf8f1_42%,#fcfbf7_100%)] pb-20 pt-28">
      <div className="pointer-events-none absolute left-[-10%] top-12 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-12%] top-20 h-80 w-80 rounded-full bg-secondary/15 blur-3xl" />

      <section className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-[2.1rem] border border-primary/10 bg-white/90 px-6 py-8 shadow-[0_16px_45px_rgba(20,33,45,0.06)] backdrop-blur md:px-8 md:py-10">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">
            Product list
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-text-dark md:text-5xl">
            Shop products in a clean card layout.
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text-dark/70 md:text-base">
            Search by name, filter by category, and quickly adjust quantity
            before opening product details.
          </p>
        </div>
      </section>

      <section className="relative mx-auto mt-8 max-w-6xl px-4 sm:px-6">
        {/* <div className="rounded-[1.8rem] border border-primary/10 bg-white p-5 shadow-[0_14px_40px_rgba(20,33,45,0.05)] md:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-xl">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-dark/45" />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search product name, category, or problem"
                className="w-full rounded-2xl border border-primary/15 bg-bg-light px-11 py-3.5 text-sm text-text-dark placeholder:text-text-dark/45 focus:outline-none focus:ring-2 focus:ring-primary/30"
                aria-label="Search products"
              />
            </div>

            <p className="text-sm font-semibold text-text-dark/70">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2.5">
            {tags.map((tag) => {
              const isActive = tag === activeTag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.14em] transition ${
                    isActive
                      ? "bg-primary text-white"
                      : "border border-primary/15 bg-bg-light text-text-dark hover:bg-primary/5"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div> */}
      </section>

      <section className="relative mx-auto mt-8 max-w-6xl px-4 sm:px-6">
        {filteredProducts.length ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => {
              const cardImage =
                realProductImageMap[product.id] ?? product.image;
              const currentPrice = product.price ?? 1099;
              const currentMrp = product.mrp ?? currentPrice;
              const hasDiscount = currentMrp > currentPrice;
              const discountPercent = hasDiscount
                ? Math.round(((currentMrp - currentPrice) / currentMrp) * 100)
                : 0;

              return (
                <article
                  key={product.id}
                  className="rounded-[1.4rem] border border-primary/10 bg-white p-4 shadow-[0_14px_40px_rgba(20,33,45,0.05)]"
                >
                  <Link href={`/products/${product.id}`} className="block">
                    <div className="flex items-center justify-center  ">
                      <Image
                        src={cardImage}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="h-44 w-auto object-contain transition duration-300 hover:scale-[1.03]"
                      />
                    </div>
                  </Link>

                  <div className="mt-4">
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <h2 className="text-xl font-black tracking-tight text-text-dark">
                          {product.name}
                        </h2>
                        {product.pack ? (
                          <span className="shrink-0 rounded-full bg-secondary/25 px-3 py-1 text-[11px] font-bold text-text-dark">
                            {product.pack}
                          </span>
                        ) : null}
                      </div>

                      <p className="mt-2 text-sm font-semibold text-primary">
                        {product.problem}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {(product.benefits ?? []).slice(0, 3).map((benefit) => (
                          <span
                            key={benefit}
                            className="rounded-full bg-bg-light px-3 py-1 text-xs font-semibold text-text-dark/80"
                          >
                            {compactBenefit(benefit)}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 rounded-xl border border-primary/10 bg-bg-light/60 px-3 py-2">
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-black text-text-dark">
                            ₹{currentPrice.toLocaleString()}
                          </span>
                          {hasDiscount ? (
                            <>
                              <span className="text-sm text-text-dark/50 line-through">
                                ₹{currentMrp.toLocaleString()}
                              </span>
                              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary">
                                {discountPercent}% OFF
                              </span>
                            </>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                      {/* <Link
                        href={`/products/${product.id}`}
                        className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-primary/15 bg-white text-primary transition hover:bg-primary/5"
                        aria-label={`View ${product.name}`}
                      >
                        <ShoppingCart className="h-5 w-5" />
                      </Link> */}
                      <div className="flex-1">
                        <Link
                          href={`/contact?product=${encodeURIComponent(product.name)}`}
                          className="inline-flex h-12 w-full items-center justify-center rounded-md bg-primary px-4 text-base font-bold text-white shadow-[0_10px_24px_rgba(17,77,44,0.3)] transition hover:bg-primary/90"
                        >
                          Order now
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-[1.75rem] border border-primary/15 bg-white p-12 text-center shadow-[0_14px_40px_rgba(20,33,45,0.05)]">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-black text-text-dark">
              No products found
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-text-dark/60">
              Try a different search or clear the selected category to view the
              full product list again.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveTag("All");
              }}
              className="mt-6 rounded-full bg-primary px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-white"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
