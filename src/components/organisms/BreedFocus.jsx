"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { breeds } from "@/lib/data"

export default function BreedFocus() {
  return (
    <section className="relative overflow-hidden py-10">
      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 border border-primary/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-sm font-bold uppercase tracking-widest text-secondary">
                Breed-Specific Nutrition
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-text-dark mb-8">
              Real Farms. Real <span className="text-secondary">Breeds.</span><br />
              Scientific <span className="text-primary hover:text-green-700 transition">Results.</span>
            </h2>
            <p className="text-lg text-text-dark/70 leading-relaxed font-medium">
              Nutrition is never one-size-fits-all. We design support by breed,
              climate and farm conditions for maximum efficacy and livestock
              longevity.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {breeds.map((item, index) => (
            <motion.div
              key={item.breed}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[3rem] bg-white/5 border border-white/10 h-[550px] backdrop-blur-sm shadow-2xl"
            >
              {/* Image with overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={`${item.breed} cow breed`}
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1822] via-[#0f1822]/40 to-transparent opacity-90 transition-all duration-500" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-10">
                <div className="mb-6 flex items-center justify-between">
                  <div className="inline-flex h-10 px-5 items-center justify-center rounded-full bg-secondary/20 backdrop-blur-md border border-secondary/30 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                    Breed Focus
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </motion.div>
                </div>
                
                <h3 className="text-2xl md:text-4xl font-black tracking-tight mb-4 group-hover:text-secondary transition-colors duration-300">
                  {item.breed}
                </h3>
                
                <p className="text-lg text-white/70 font-medium leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {item.desc}
                </p>

                <div className="h-1 w-12 bg-secondary/50 group-hover:w-full transition-all duration-700 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
