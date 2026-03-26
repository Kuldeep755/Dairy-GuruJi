"use client";

import React from "react";
import Image from "next/image";

import { csrDetailSections } from "@/lib/data";

export default function CSRPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fffdf8] pt-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/impact/csr_hero.png"
            alt="Dairy Guruji Social Impact"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,32,20,0.92),rgba(11,59,36,0.82),rgba(19,93,58,0.58))]" />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            
            <h2 className="mt-4 text-3xl font-black md:text-5xl text-primary">
              A closer look at the social impact we create on the ground
            </h2>
          </div>

          <div className="space-y-12">
            {csrDetailSections.map((section, index) => {
              const reverse = index % 2 === 1;

              return (
                <div
                  key={section.id}
                  className="overflow-hidden rounded-[2.5rem]"
                >
                  <div
                    className={`grid gap-0 lg:grid-cols-2 ${
                      reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="relative min-h-[25rem] sm:min-h-[30rem] lg:min-h-full">
                      {section.video ? (
                        <video
                          src={section.video}
                          className="absolute inset-0 h-full w-full object-fit"
                          autoPlay
                          muted
                          loop
                          playsInline
                          controls
                        />
                      ) : (
                        <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>

                    <div className="p-8 md:p-10 ">
                      <h3 className="mt-6 text-3xl font-black leading-tight text-text-dark">
                        {section.title}
                      </h3>
                      <p className="mt-5 text-lg leading-relaxed text-text-dark/75">
                        {section.summary}
                      </p>

                      {section.details.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="mt-4 text-base leading-relaxed text-text-dark/70"
                        >
                          {paragraph}
                        </p>
                      ))}

                      {section.hindi ? (
                        <p className="mt-6 text-lg font-bold leading-relaxed text-primary">
                          {section.hindi}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
