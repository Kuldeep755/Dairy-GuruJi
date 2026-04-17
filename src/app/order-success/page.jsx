"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function OrderSuccessContent() {
  const searchParams = useSearchParams();

  const orderNumber = searchParams.get("orderNumber") || "-";
  const paymentMethod = searchParams.get("paymentMethod") || "COD";
  const paymentStatus = searchParams.get("paymentStatus") || "Pending";
  const amount = Number(searchParams.get("amount") || 0);

  return (
    <div className="mx-auto min-h-screen max-w-3xl px-4 pb-16 pt-28 sm:px-6">
      <div className="rounded-2xl border border-green-100 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-green-700">Order Placed Successfully</h1>
        <p className="mt-3 text-sm text-text-dark/75">
          Thank you for your order. We received your request and will start processing it soon.
        </p>

        <div className="mt-6 rounded-xl border border-primary/10 bg-bg-light/50 p-4 text-sm">
          <div className="flex items-center justify-between py-1">
            <span className="text-text-dark/70">Order Number</span>
            <span className="font-semibold text-text-dark">{orderNumber}</span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="text-text-dark/70">Payment Method</span>
            <span className="font-semibold text-text-dark">{paymentMethod}</span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="text-text-dark/70">Payment Status</span>
            <span className="font-semibold text-text-dark">{paymentStatus}</span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="text-text-dark/70">Total Amount</span>
            <span className="font-semibold text-text-dark">₹{amount.toLocaleString()}</span>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/products" className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white">
            Continue Shopping
          </Link>
          <Link href="/" className="rounded-md border border-primary px-4 py-2 text-sm font-semibold text-primary">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={
      <div className="mx-auto min-h-screen max-w-3xl px-4 pb-16 pt-28 sm:px-6">
        <p className="text-sm text-text-dark/70">Loading order details...</p>
      </div>
    }>
      <OrderSuccessContent />
    </Suspense>
  );
}
