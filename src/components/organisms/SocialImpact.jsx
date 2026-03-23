"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, HeartPulse, GraduationCap, ArrowRight } from "lucide-react";
import { socialImpact } from "@/lib/data";

const iconMap = {
  Leaf: Leaf,
  HeartPulse: HeartPulse,
  GraduationCap: GraduationCap,
};

export default function SocialImpact() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 py-24 md:py-32 bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Our Commitment
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-text-dark tracking-tight mb-6"
          >
            Growing Together, <br />
            <span className="text-primary italic">Giving Back.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-text-dark/70"
          >
            Our mission goes beyond business. We are dedicated to creating a self-sustaining
            dairy ecosystem that empowers farmers and protects our local environment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {socialImpact.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col h-full bg-surface border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Image Section */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  
                  <div className={`absolute top-6 left-6 p-3 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg ${item.textColor}`}>
                    <Icon size={24} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-1">
                  <span className={`text-xs font-bold uppercase tracking-widest mb-3 ${item.textColor}`}>
                    {item.subtitle}
                  </span>
                  <h3 className="text-2xl font-black text-text-dark mb-4">
                    {item.title}
                  </h3>
                  <p className="text-text-dark/70 leading-relaxed mb-8">
                    {item.desc}
                  </p>

                  <div className="mt-auto">
                    <div className={`inline-flex items-center gap-2 font-bold text-sm group/btn cursor-default`}>
                      <span className={item.textColor}>Impact in Progress</span>
                      <div className={`h-1 w-12 rounded-full bg-gray-100 relative overflow-hidden`}>
                        <motion.div 
                          className={`absolute inset-0 bg-primary`}
                          initial={{ x: "-100%" }}
                          whileInView={{ x: "0%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
