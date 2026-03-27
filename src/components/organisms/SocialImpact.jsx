"use client";

import React from "react";
import Image from "next/image";
import { Leaf, HeartPulse, GraduationCap, ArrowRight } from "lucide-react";
import { socialImpact } from "@/lib/data";

const iconMap = {
  Leaf: Leaf,
  HeartPulse: HeartPulse,
  GraduationCap: GraduationCap,
};

export default function SocialImpact() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 py-12 bg-white">
      {/* Decorative background elements */}

      <div className="mx-auto max-w-7xl relative z-10 ">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 mb-6"
            >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Our Commitment
            </span>
          </div>

          <h2
            className="text-3xl md:text-3xl font-black text-text-dark tracking-tight mb-6"
          >
            We are not just building a company, we are building a new future for
            Indian dairy farmers.
          </h2>

          <p
            className="max-w-2xl mx-auto text-lg text-text-dark/70"
          >
            क्योंकि जब किसान आगे बढ़ता है, तभी उसका परिवार खुशहाल बनता है और देश
            का भविष्य मजबूत होता है — और हम इसी बदलाव का हिस्सा बनना चाहते हैं।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {socialImpact.map((item, index) => {
            return (
              <div
                key={item.id}
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
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-black text-text-dark mb-4 ">
                    {item.title}
                  </h3>
                  <p className="text-text-dark/70 leading-relaxed mb-8 font-bold">
                    {item.desc}
                  </p>

                  <div className="mt-auto">
                    <div
                      className={`inline-flex items-center gap-2 font-bold text-sm group/btn cursor-default`}
                    >
                      <span className={item.textColor}>Impact in Progress</span>
                      <div
                        className={`h-1 w-12 rounded-full bg-gray-100 relative overflow-hidden`}
                      >
                        <div
                          className={`absolute inset-0 bg-primary`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
