"use client";

import { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function PageCarousel({ slides }) {
  const autoplay = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[autoplay.current]}
      className="w-full"
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.play}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover transition-transform duration-10000 hover:scale-110"
              />

              {/* Sophisticated Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="mx-auto max-w-7xl px-6 text-white w-full">
                  <div className="max-w-3xl">
                    <h1 className="text-3xl md:text-6xl font-black leading-[1.1] tracking-tight mb-4">
                      {slide.title}
                    </h1>

                    <p className="text-lg md:text-2xl text-white/90 max-w-xl leading-relaxed">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
