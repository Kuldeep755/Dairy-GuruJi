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
  Users,
  TrendingUp,
  Heart,
} from "lucide-react";
import { products } from "@/lib/productData";
import { ProductCardSkeleton } from "@/components/ui/skeleton";

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
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6">
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

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 mt-14">
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
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 mt-20 space-y-24">
        {filteredProducts.map((product, index) => (
          <motion.article
            key={product.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={popIn}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="group relative"
          >
            {/* Background decorative element for each card */}
            <div className={`absolute -inset-4 rounded-[4rem] bg-gradient-to-r ${index % 2 === 0 ? 'from-primary/5 to-transparent' : 'from-transparent to-primary/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image side */}
              <div className={`${index % 2 !== 0 ? "lg:order-2" : ""} relative`}>
                <Link
                  href={`/products/${product.id}`}
                  className="block group/img focus:outline-none"
                >
                  <div className="relative aspect-[4/5] md:aspect-[1/1] rounded-[3rem] bg-gradient-to-br from-white via-[#fdfcf8] to-[#f4f1e6] border border-primary/10 p-6 md:p-10 shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    {/* Animated glow background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={600}
                      height={700}
                      className="mx-auto h-full w-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] relative z-10 transition-transform duration-700 group-hover/img:scale-105"
                    />
                    
                    {/* Floating label */}
                    <div className="absolute top-6 left-6 z-20">
                      <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur shadow-sm text-[10px] font-black uppercase tracking-[0.2em] text-primary border border-primary/10">
                        Premium Quality
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Content side */}
              <div className={`${index % 2 !== 0 ? "lg:order-1" : ""} space-y-6 md:space-y-8`}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex rounded-full bg-secondary/30 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-text-dark border border-secondary/20">
                      {product.tag}
                    </span>
                    {product.problem && (
                      <span className="text-[10px] font-bold text-primary/70 uppercase tracking-widest flex items-center gap-1.5">
                        <TrendingUp className="h-3 w-3" /> Solves {product.problem.split(' ')[0]}
                      </span>
                    )}
                  </div>

                  <h2 className="text-4xl md:text-5xl font-black text-text-dark leading-[1.1] tracking-tight">
                    {product.name}
                  </h2>
                </div>

                {/* Refined Problem box */}
                <div className="relative overflow-hidden rounded-2xl bg-white border border-primary/10 p-5 shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
                  <p className="text-[10px] uppercase tracking-[0.2em] font-black text-primary mb-2">
                    Primary Solution
                  </p>
                  <p className="text-base md:text-lg font-bold text-text-dark leading-snug">
                    {product.problem}
                  </p>
                </div>

                <p className="text-lg text-text-dark/70 leading-relaxed font-medium">
                  {product.description}
                </p>

                {/* Farmer Success Story - Retained but improved visually */}
                {product.farmerStory && (
                  <div className="relative p-6 rounded-2xl bg-[#fdfaf2] border border-secondary/10 overflow-hidden">
                    <div className="absolute -top-4 -left-2 text-7xl text-secondary/10 font-serif leading-none">“</div>
                    <div className="relative z-10">
                      <p className="text-base font-bold text-text-dark italic leading-relaxed mb-4">
                        {product.farmerStory.quote}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="h-0.5 w-8 bg-primary/30" />
                        <div>
                          <p className="text-xs font-black text-text-dark uppercase tracking-wider">
                            {product.farmerStory.name}
                          </p>
                          <p className="text-[10px] font-bold text-text-dark/50 uppercase">
                            {product.farmerStory.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Key Benefits Grid - Cleaner */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.benefits.slice(0, 4).map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-2.5 py-1"
                    >
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <BadgeCheck className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-sm font-bold text-text-dark/80">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href={`/products/${product.id}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-base font-black text-white hover:bg-text-dark shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300 group/btn"
                  >
                    Product Details
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl border-2 border-primary/20 bg-white px-8 py-4 text-base font-black text-primary hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>
        ))}

        {filteredProducts.length === 0 && (
          <div className="rounded-[3rem] border-2 border-dashed border-primary/20 bg-white/50 p-16 text-center">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
              <Search className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-black text-text-dark">No Products Found</h3>
            <p className="mt-2 text-text-dark/60 max-w-sm mx-auto font-medium">
              We couldn't find any products matching your current filters. Try adjusting your search term or category.
            </p>
            <button 
              onClick={() => { setQuery(""); setActiveTag("All"); }}
              className="mt-8 text-primary font-black uppercase tracking-widest text-sm hover:underline"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 mt-24">
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
