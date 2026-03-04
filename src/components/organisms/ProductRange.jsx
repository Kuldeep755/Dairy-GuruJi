"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { categories } from "@/lib/data";

export default function ProductRange() {
  return (
    <section className="px-6 py-32 bg-bg-light relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-[800px] w-[800px] rounded-full bg-secondary/5 blur-[120px]" />
      <div className="pointer-events-none absolute top-0 left-0 h-[800px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-20 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Our Formulations
              </span>
            </div>
            <h2 className="text-5xl font-black text-text-dark md:text-6xl tracking-tight">
              Science-Backed{" "}
              <span className="bg-gradient-to-r from-primary to-green-700 bg-clip-text text-transparent">
                Nutrition
              </span>
            </h2>
            <p className="mt-6 text-xl text-text-dark/70 leading-relaxed font-medium">
              Products built around farm realities, not just lab theory.
              Designed for practical day-to-day dairy performance and animal longevity.
            </p>
          </div>
          <Link
            href="/products"
            className="group inline-flex items-center gap-3 rounded-full border-2 border-primary/20 bg-white px-8 py-4 font-bold text-primary transition-all hover:bg-primary hover:text-white hover:border-primary shadow-xl hover:shadow-primary/20"
          >
            Explore all products
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {categories.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col-reverse overflow-hidden rounded-[3rem] bg-white border border-primary/10 shadow-2xl shadow-primary/5 sm:flex-row h-full transition-all duration-500 hover:shadow-primary/10 hover:-translate-y-2"
            >
              <div className="flex flex-1 flex-col justify-center p-10 sm:p-12">
                <h3 className="text-3xl font-black text-text-dark leading-tight mb-4">
                  {item.title}
                </h3>
                <p className="text-lg text-text-dark/70 leading-relaxed mb-10">
                  {item.desc}
                </p>
                <ul className="mb-12 space-y-4">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-4 text-base font-bold text-text-dark/80"
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/products"
                  className="mt-auto inline-flex items-center gap-3 font-bold uppercase tracking-widest text-primary group-hover:text-green-700 transition-colors"
                >
                  <span className="border-b-2 border-primary/20 group-hover:border-green-700">View Details</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 group-hover:bg-green-700 group-hover:text-white transition-all">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </Link>
              </div>

              {/* Image Section */}
              <div className="relative flex items-center justify-center bg-gradient-to-br from-bg-light to-white p-12 sm:w-2/5 border-b sm:border-b-0 sm:border-l border-primary/10 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,167,69,0.1)_0,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <Image
                  src={item.image}
                  alt={item.title}
                  width={420}
                  height={480}
                  className="relative z-10 mx-auto h-72 w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-4 group-hover:rotate-3"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
