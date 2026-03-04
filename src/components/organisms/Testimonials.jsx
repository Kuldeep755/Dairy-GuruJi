"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { farmerTestimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="px-6 py-32 bg-gradient-to-b from-bg-light to-white overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 md:flex md:items-end md:justify-between text-center md:text-left">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Trusted by 3,500+ Farmers
              </span>
            </div>
            <h2 className="text-3xl font-black text-text-dark md:text-6xl leading-tight tracking-tight">
              Farmer{" "}
              <span className="bg-gradient-to-r from-primary to-green-700 bg-clip-text text-transparent">
                Success
              </span>{" "}
              Stories
            </h2>
            <p className="mt-6 text-lg text-text-dark/70 leading-relaxed font-medium">
              Farmers associated with us have seen a massive shift in their
              livelihood and farm economics.
            </p>
          </div>
          <div className="mt-8 hidden items-center gap-2 md:flex">
            <div className="h-16 w-16 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary/40 animate-bounce">
              <Quote className="h-8 w-8" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {farmerTestimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-[3rem] border border-primary/10 bg-white p-10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
            >
              <Quote className="absolute right-10 top-10 h-16 w-16 text-primary/5 rotate-180 transition-transform duration-500 group-hover:scale-110" />
              
              <div className="mb-8 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-6 w-6 text-secondary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="mb-10 text-lg md:text-xl font-medium leading-relaxed text-text-dark/80 italic">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="mb-10 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent p-6 border-l-8 border-primary shadow-inner">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Key Impact
                </p>
                <p className="text-lg md:text-xl font-black text-text-dark">{item.beforeAfter}</p>
              </div>

              <div className="flex items-center gap-5 mt-auto">
                <div className="h-16 w-16 overflow-hidden rounded-[1.25rem] bg-primary/10 flex items-center justify-center border-2 border-primary/20 shadow-lg">
                  <span className="text-2xl font-black text-primary">
                    {item.name[0]}
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-black text-text-dark tracking-tight">
                    {item.name}
                  </h4>
                  <p className="text-base font-bold text-text-dark/60">
                    {item.location} • <span className="text-primary/70">{item.farmSize}</span>
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
