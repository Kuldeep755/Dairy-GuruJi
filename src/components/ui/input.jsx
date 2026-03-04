"use client";

import * as React from "react";

export function Input({ className, type = "text", ...props }) {
  return (
    <input
      type={type}
      className={`flex h-10 w-full rounded-md border border-primary/15 bg-white px-3 py-2 text-sm text-text-dark placeholder:text-text-dark/45 focus:outline-none focus:ring-2 focus:ring-primary/35 focus:border-transparent transition-all duration-200 ${
        className || ""
      }`}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={`flex min-h-[80px] w-full rounded-md border border-primary/15 bg-white px-3 py-2 text-sm text-text-dark placeholder:text-text-dark/45 focus:outline-none focus:ring-2 focus:ring-primary/35 focus:border-transparent transition-all duration-200 ${
        className || ""
      }`}
      {...props}
    />
  );
}

export function Select({ className, children, ...props }) {
  return (
    <select
      className={`flex h-10 w-full rounded-md border border-primary/15 bg-white px-3 py-2 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/35 focus:border-transparent transition-all duration-200 ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </select>
  );
}

export function FormField({ label, error, children }) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-semibold text-text-dark/70">
          {label}
        </label>
      )}
      {children}
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <span className="w-2 h-2 bg-red-600 rounded-full" />
          {error}
        </p>
      )}
    </div>
  );
}