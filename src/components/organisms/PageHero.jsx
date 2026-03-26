"use client";

import Image from "next/image";

export default function PageHero({ image, title, subtitle }) {
  return (
    <div className="relative h-[59vh] min-h-95 md:h-[60vh] md:min-h-0 w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover duration-10000 object-"
      />

      {/* Sophisticated Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-black/10" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-white w-full">
          <p
            className="text-xl sm:text-5xl md:text-5xl font-black space-[1em] leading-15
"
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
