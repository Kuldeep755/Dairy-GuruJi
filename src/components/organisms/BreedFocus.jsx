"use client";

import Image from "next/image";
import { breeds } from "@/lib/data";

export default function BreedFocus() {
  return (
    <section className="relative py-24">
      {/* Background Glow */}
      <div className="absolute -top-40 left-[-10%] h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[120px]" />
      <div className="absolute bottom-[-30%] right-[-10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">
              Breed-Specific Nutrition
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-text-dark leading-tight mb-6">
            Real Farms. Real <span className="text-secondary">Breeds.</span>
            <br />
            Scientific <span className="text-primary">Results.</span>
          </h2>

          <p className="text-lg text-text-dark/70 leading-relaxed">
            Nutrition is never one-size-fits-all. We design support by breed,
            climate and farm conditions for maximum efficacy and livestock
            longevity.
          </p>
        </div>

        {/* Breed Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {breeds.map((item) => (
            <div
              key={item.breed}
              className="group relative overflow-hidden rounded-3xl shadow-lg border border-gray-200"
            >
              {/* Image */}
              <div className="relative h-[260px] w-full">
                <Image
                  src={item.image}
                  alt={`${item.breed} cattle`}
                  fill
                  sizes="(max-width:768px)100vw,(max-width:1024px)50vw,33vw"
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {item.breed}
                </h3>

                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
