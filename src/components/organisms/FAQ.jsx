"use client";

import { motion } from "framer-motion";
import { faqs } from "@/lib/data";

export default function FAQ() {
  return (
    <section className="px-4 sm:px-6 py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

      <div className="mx-auto max-w-4xl relative z-10">
        <div className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Got Questions?
            </span>
          </div>
          <h2 className="text-3xl font-black text-text-dark md:text-6xl tracking-tight">
            Frequently Asked <span className="text-primary italic">Questions</span>
          </h2>
          <p className="mt-6 text-lg text-text-dark/60 font-medium">
            Everything you need to know about Dairy Guru Ji products and partnerships.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((item, index) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-[2.5rem] border border-primary/10 bg-white/50 p-8 sm:p-12 shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:bg-white hover:-translate-y-1"
            >
              <h3 className="text-xl md:text-2xl font-black text-text-dark mb-6 flex items-start gap-6">
                <span className="flex mt-1 h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-primary text-lg font-black text-white shadow-lg shadow-primary/20 transition-transform group-hover:scale-110 group-hover:rotate-6">
                  Q
                </span>
                {item.q}
              </h3>
              <div className="pl-16">
                <p className="text-lg md:text-xl text-text-dark/70 leading-relaxed font-medium">
                  {item.a}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-lg text-text-dark/60 font-bold mb-8">
            Still have more questions?
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 text-primary font-black text-xl hover:text-green-700 transition-colors border-b-4 border-primary/20 hover:border-green-700 pb-1"
          >
            Chat with our experts
          </Link>
        </div>
      </div>
    </section>
  );
}

// Helper to provide Link if not imported globally in this thinking block, 
// though write_to_file creates a whole file. I need to import it.
import Link from "next/link";
