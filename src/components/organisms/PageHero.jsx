"use client";

import Image from "next/image";

export default function PageHero({ image, title, subtitle }) {
  return (
    <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover transition-transform duration-10000 hover:scale-105"
      />

      {/* Sophisticated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-6 text-white w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-7xl font-black leading-[1.1] tracking-tight mb-4">
              {title}
            </h1>

            <p className="text-lg md:text-2xl text-white/90 max-w-2xl leading-relaxed font-medium">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
