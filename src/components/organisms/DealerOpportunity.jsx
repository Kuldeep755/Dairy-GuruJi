"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Quote, TrendingUp, CheckCircle2 } from "lucide-react";
import { dealerTestimonials } from "@/lib/data";

export default function DealerOpportunity() {
  return (
    <section className="px-6 py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          <div className="flex flex-col justify-center">
            <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-secondary/15 text-secondary shadow-xl shadow-secondary/5 border border-secondary/20 transition-transform duration-500 hover:rotate-12">
              <TrendingUp className="h-10 w-10" />
            </div>
            
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 w-fit">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                Partner with us
              </span>
            </div>
            
            <h2 className="text-5xl font-black text-text-dark md:text-6xl leading-[1.1] tracking-tight mb-8">
              Golden Opportunity for{" "}
              <span className="text-secondary">Dealers</span>
            </h2>
            
            <p className="text-xl text-text-dark/70 mb-10 max-w-lg leading-relaxed font-medium">
              Join hands with us to scale your business, assist local
              farmers, and establish yourself as a trusted name in your
              region with high-performing products.
            </p>

            <div className="space-y-6 mb-12">
              {[
                "High Profit Margins & Incentives",
                "Marketing & Ground Training Support",
                "Exclusive Territory Rights & Protection",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-5 group">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-white shadow-lg shadow-secondary/20 transition-transform group-hover:scale-110">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <span className="text-xl font-bold text-text-dark/80 group-hover:text-text-dark transition-colors">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-full bg-secondary px-10 py-5 text-xl font-black text-text-dark shadow-2xl hover:bg-white border-2 border-secondary transition-all duration-300 hover:-translate-y-1 hover:shadow-secondary/20"
              >
                Become a Dealer Today
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/10 rounded-[3.5rem] blur-2xl opacity-50" />
            {dealerTestimonials.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-[3rem] bg-gradient-to-br from-[#fcfbf7] to-[#f4eee0] p-12 sm:p-16 shadow-2xl border border-white/50"
              >
                <Quote className="absolute right-12 top-12 h-24 w-24 text-text-dark/5" />
                <p className="mb-10 text-3xl font-bold leading-tight text-text-dark tracking-tight">
                  &ldquo;{item.quote}&rdquo;
                </p>
                
                <div className="mb-12 rounded-3xl bg-white/60 p-8 backdrop-blur-md border border-white shadow-inner">
                  <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">
                    Verified Performance
                  </p>
                  <p className="text-3xl font-black text-text-dark tracking-tighter">
                    {item.growth}
                  </p>
                </div>
                
                <div className="flex items-center gap-6">
                   <div className="h-20 w-20 overflow-hidden rounded-[2rem] bg-secondary/10 flex items-center justify-center border-2 border-secondary/20 shadow-lg">
                    <span className="text-3xl font-black text-secondary">
                      {item.name[0]}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-text-dark tracking-tight">
                      {item.name}
                    </h4>
                    <p className="text-lg font-bold text-text-dark/60">
                      {item.location} • <span className="text-secondary">{item.territory}</span>
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
