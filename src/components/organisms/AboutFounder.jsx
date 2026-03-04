"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { highlights } from "@/lib/data";

export default function AboutFounder() {
  return (
    <section className="relative overflow-hidden px-6 py-28 bg-white">
      {/* Soft Background */}
      <div className="absolute -top-32 left-[-10%] h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[140px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2 relative z-10">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-6xl font-black leading-tight text-text-dark mb-8">
            व्यापार नहीं,
            <span className="block text-primary italic">रिश्ते बनाते हैं</span>
          </h2>

          <p className="max-w-xl text-lg md:text-xl text-text-dark/70 leading-relaxed mb-12">
            We're not just selling products. We partner with dairy farmers to
            build healthier cattle, safer milk and long-term farm profitability
            built on trust.
          </p>

          {/* Feature Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
            {[
              "Farmer-first model",
              "Field-tested products",
              "Daily support team",
              "Scientific formulation",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="font-semibold text-text-dark">{item}</span>
              </div>
            ))}
          </div>

          {/* Highlight Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((point) => (
              <div
                key={point}
                className="rounded-xl border border-gray-200 bg-bg-light px-5 py-4 text-sm md:text-base font-semibold text-text-dark/80"
              >
                {point}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl h-[420px] md:h-[620px]">
            <Image
              src="/images/about/hero.jpeg"
              alt="Dairy farm"
              fill
              className="object-cover"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Founder Card */}
            <div className="absolute bottom-8 right-4 w-[260px] rounded-2xl bg-white p-1 shadow-xl ">
              <div className="relative h-38 w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/about/founder.jpg"
                  alt="Founder"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-xs uppercase tracking-widest text-gray-500 text-center mb-1">
                Founder Message
              </p>

              <p className="text-xl font-bold text-primary text-center">
                किसान की तरक्की पहले
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
