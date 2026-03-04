"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { farmerPainPoints } from "@/lib/data";

export default function PainPoints() {
  return (
    <section className="px-6 py-32 bg-gradient-to-b from-white to-bg-light relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-20 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Solving Farm Challenges
            </span>
          </div>
          <h2 className="text-3xl font-black text-text-dark md:text-6xl tracking-tight">
            Struggling with these{" "}
            <span className="text-primary">Challenges?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-dark/70 leading-relaxed font-medium">
            Don't worry. Dairy Guru Ji stands with you. We have developed
            scientific and safe solutions to tackle these common farming
            hurdles.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {farmerPainPoints.map((point, index) => (
            <motion.div
              key={point.problem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-[2.5rem] border border-primary/10 bg-white p-10 shadow-xl hover:shadow-[0_20px_50px_rgba(40,167,69,0.1)] transition-all duration-500 hover:-translate-y-3"
            >
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] transition-transform duration-500 group-hover:scale-150 group-hover:rotate-12">
                {point.icon}
              </div>
              
              <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-primary/10 text-primary shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {point.icon}
              </div>
              
              <h3 className="text-2xl font-black text-text-dark mb-4 leading-tight">
                {point.problem}
              </h3>
              
              <p className="text-text-dark/70 leading-relaxed text-lg mb-8">
                {point.solution}
              </p>
              
              <div className="mt-auto inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary group-hover:text-secondary transition-colors cursor-pointer">
                <span>Discover Solution</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 group-hover:bg-secondary/10 transition-colors">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
