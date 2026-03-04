"use client";

import { motion } from "framer-motion";
import { whyChooseUs } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section className="px-6 py-32 bg-white relative">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">
              The Dairy Guru Ji Edge
            </span>
          </div>
          <h2 className="text-5xl font-black text-text-dark md:text-6xl tracking-tight">
            Why <span className="text-secondary">Choose Us?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-text-dark/70 leading-relaxed font-medium">
            The core reasons behind the unwavering trust of thousands of dairy
            farmers across India.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-[3rem] border border-primary/5 bg-bg-light p-10 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:bg-white hover:-translate-y-3"
            >
              <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white shadow-xl text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-text-dark mb-4 tracking-tight">
                {item.title}
              </h3>
              <p className="text-lg text-text-dark/70 leading-relaxed font-semibold">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
