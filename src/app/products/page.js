"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Droplets,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { products } from "@/lib/productData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const popIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");

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
        product.description.toLowerCase().includes(search);
      return matchesTag && matchesSearch;
    });
  }, [activeTag, query]);

  return (
    <div className="relative overflow-hidden pt-28 pb-24 bg-gradient-to-b from-[#faf8f1] via-[#f6f3e9] to-[#efe9d8]">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 left-[-10%] h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute top-24 right-[-12%] h-[28rem] w-[28rem] rounded-full bg-secondary/25 blur-3xl" />

      {/* ================= HERO ================= */}
      <section className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.65 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-primary shadow-sm">
            <Sparkles className="h-4 w-4" />
            Farmer-First Product Line
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.1] text-text-dark">
            Products Built for
            <span className="block text-primary mt-2">
              Healthy Cattle, Better Yield
            </span>
          </h1>

          <p className="mt-6 mx-auto max-w-3xl text-base md:text-lg text-text-dark/70 leading-relaxed">
            Practical, science-backed nutrition solutions that improve milk
            performance, animal wellness, and long-term farm profitability.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            { title: "No Harmful Hormones", icon: ShieldCheck },
            { title: "Improves Daily Output", icon: Droplets },
            { title: "Trusted by Farmers", icon: BadgeCheck },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl px-5 py-4 bg-white/70 backdrop-blur border border-primary/10 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-3"
            >
              <div className="h-11 w-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                <item.icon className="h-5 w-5" />
              </div>
              <p className="text-sm md:text-base font-bold text-text-dark">
                {item.title}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 mt-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-primary/10 bg-white/70 backdrop-blur p-5 md:p-6"
        >
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search className="h-4 w-4 text-text-dark/45 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by product, problem, or use case"
                className="w-full rounded-xl border border-primary/15 bg-white px-10 py-3 text-sm text-text-dark placeholder:text-text-dark/45 focus:outline-none focus:ring-2 focus:ring-primary/35"
                aria-label="Search products"
              />
            </div>

            <p className="text-sm font-semibold text-text-dark/75">
              Showing{" "}
              <span className="text-primary font-extrabold">
                {filteredProducts.length}
              </span>{" "}
              of {products.length} products
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => {
              const isActive = tag === activeTag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  className={`rounded-full px-4 py-2 text-xs md:text-sm font-bold transition ${
                    isActive
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-text-dark border border-primary/15 hover:bg-primary/5"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="relative max-w-7xl mx-auto px-6 mt-20 space-y-16">
        {filteredProducts.map((product, index) => (
          <motion.article
            key={product.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={popIn}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-primary/10 bg-white/80 backdrop-blur shadow-lg hover:shadow-2xl transition-all duration-500 p-6 md:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <Link
                  href={`/products/${product.id}`}
                  className="block rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  <div className="rounded-3xl bg-gradient-to-br from-white via-[#f9f7ef] to-[#efe8d7] border border-primary/10 p-4 relative overflow-hidden">
                    <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full bg-primary/10" />
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={460}
                      height={560}
                      className="mx-auto h-[300px] md:h-[440px] w-auto object-contain drop-shadow-2xl relative z-10 rounded-2xl"
                    />
                  </div>
                </Link>
              </div>

              {/* Content */}
              <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                <span className="inline-flex rounded-full bg-secondary/25 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-text-dark">
                  {product.tag}
                </span>

                <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-text-dark leading-tight">
                  {product.name}
                </h2>

                {/* Problem */}
                <div className="mt-6 rounded-xl border-l-4 border-primary bg-primary/5 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.18em] font-bold text-text-dark/70">
                    Problem It Solves
                  </p>
                  <p className="mt-1 text-sm md:text-base font-semibold text-text-dark">
                    {product.problem}
                  </p>
                </div>

                <p className="mt-6 text-sm md:text-base text-text-dark/75 leading-7">
                  {product.description}
                </p>

                {/* Benefits */}
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="rounded-lg border border-primary/15 bg-primary/5 px-4 py-3 text-sm font-semibold hover:bg-primary/10 transition"
                    >
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs mr-2">
                        ✓
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* Dosage & Pack */}
                <div className="mt-7 flex flex-col sm:flex-row gap-3 text-sm">
                  <div className="rounded-xl border border-primary/15 bg-white px-4 py-3 shadow-sm">
                    <span className="font-extrabold text-text-dark">
                      Dosage:
                    </span>{" "}
                    {product.dosage}
                  </div>
                  <div className="rounded-xl border border-primary/15 bg-white px-4 py-3 shadow-sm">
                    <span className="font-extrabold text-text-dark">Pack:</span>{" "}
                    {product.pack}
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-extrabold text-white hover:opacity-90 transition"
                  >
                    View Product Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md border border-primary/30 px-6 py-3 text-sm font-bold text-primary hover:bg-primary/5 transition"
                  >
                    Ask for Recommendation
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>
        ))}

        {filteredProducts.length === 0 && (
          <div className="rounded-2xl border border-primary/10 bg-white/80 p-8 text-center">
            <p className="text-lg font-extrabold text-text-dark">
              No matching products found
            </p>
            <p className="mt-2 text-sm text-text-dark/70">
              Try another search or switch to a different category tag.
            </p>
          </div>
        )}
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative max-w-6xl mx-auto px-6 mt-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.65 }}
          className="rounded-3xl bg-gradient-to-br from-primary to-[#4b7c2f] text-white p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-white/10" />

          <h3 className="text-3xl md:text-4xl font-extrabold max-w-3xl leading-[1.15] relative z-10">
            Need Help Choosing the Right Product for Your Farm?
          </h3>

          <p className="mt-4 max-w-2xl text-white/85 relative z-10">
            Share your breed, milk yield, and current challenge. Our team will
            suggest the right product and dosage for practical on-farm results.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-secondary px-8 py-3.5 font-extrabold text-bg-dark hover:opacity-90 transition"
            >
              Talk to Dairy Expert
            </Link>
            <a
              href="https://wa.me/918168048260"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-white/40 px-8 py-3.5 font-bold text-white hover:bg-white/10 transition"
            >
              Get WhatsApp Advice
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
