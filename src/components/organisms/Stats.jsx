"use client";

import { motion } from "framer-motion";
import { trustStats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="px-6 py-20 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {trustStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-[2rem] bg-white/60 backdrop-blur-md border border-gray-200/60 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="text-3xl md:text-5xl font-black text-primary mb-3 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-bold uppercase tracking-widest text-text-dark/80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
