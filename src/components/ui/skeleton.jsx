"use client";

import * as React from "react";

export function Skeleton({ className, ...props }) {
  return (
    <div
      className={`animate-pulse rounded-md bg-gradient-to-r from-gray-200/80 via-gray-300/60 to-gray-200/80 ${className}`}
      {...props}
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="rounded-3xl border border-primary/10 bg-white/80 backdrop-blur shadow-lg hover:shadow-2xl transition-all duration-500 p-6 md:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Skeleton */}
        <div className="animate-pulse">
          <div className="rounded-3xl bg-gradient-to-br from-white via-[#f9f7ef] to-[#efe8d7] border border-primary/10 p-4 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full bg-primary/10" />
            <div className="mx-auto h-[300px] md:h-[440px] w-auto bg-gray-200 rounded-2xl" />
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded w-24" />
          <div className="h-8 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
          
          {/* Benefits Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-10 bg-gray-200 rounded-lg" />
            ))}
          </div>

          {/* Dosage & Pack Skeleton */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="h-10 bg-gray-200 rounded-xl w-32" />
            <div className="h-10 bg-gray-200 rounded-xl w-24" />
          </div>

          {/* Buttons Skeleton */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="h-12 bg-gray-200 rounded-md w-48" />
            <div className="h-12 bg-gray-200 rounded-md w-40" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="relative overflow-hidden px-6 pb-20 pt-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="animate-pulse">
          <div className="mb-6 h-8 bg-gray-200 rounded w-64" />
          <div className="h-16 bg-gray-200 rounded w-full" />
          <div className="mt-6 h-6 bg-gray-200 rounded w-3/4" />
          <div className="mt-4 h-4 bg-gray-200 rounded w-1/2" />
          
          {/* Highlights Skeleton */}
          <div className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-12 bg-gray-200 rounded-xl" />
            ))}
          </div>
        </div>

        <div className="animate-pulse">
          <div className="overflow-hidden rounded-3xl border border-primary/15 shadow-2xl shadow-primary/20">
            <div className="h-[520px] w-full bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function StatsSkeleton() {
  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-7xl rounded-3xl border border-primary/10 bg-[var(--surface)] p-6 shadow-xl md:p-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse rounded-2xl bg-bg-light p-4 text-center">
              <div className="h-12 bg-gray-200 rounded w-full" />
              <div className="mt-2 h-4 bg-gray-200 rounded w-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}