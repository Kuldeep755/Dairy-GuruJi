import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Beaker, Clock3, Leaf, Package, ShieldCheck } from "lucide-react";
import { getProductById, products } from "@/lib/productData";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-bg-light pt-40 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <Link
          href="/products"
          className="text-primary font-bold mb-8 inline-block hover:underline"
        >
          ← Back to Products
        </Link>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-green-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-flex rounded-full bg-secondary/25 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-text-dark">
                {product.tag}
              </span>

              <h1 className="mt-4 text-3xl md:text-5xl font-black text-text-dark leading-tight">
                {product.name}
              </h1>

              <div className="mt-6 rounded-xl border-l-4 border-primary bg-primary/5 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.18em] font-bold text-text-dark/70">
                  Problem It Solves
                </p>
                <p className="mt-1 text-sm md:text-base font-semibold text-text-dark">
                  {product.problem}
                </p>
              </div>

              <p className="mt-6 text-sm md:text-base text-text-dark/75 leading-7">
                {product.description}
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <div className="rounded-xl border border-primary/15 bg-bg-light px-4 py-3">
                  <p className="text-[11px] uppercase tracking-wider font-extrabold text-text-dark/60">
                    Dosage
                  </p>
                  <p className="mt-1 font-semibold text-text-dark">
                    {product.dosage}
                  </p>
                </div>
                <div className="rounded-xl border border-primary/15 bg-bg-light px-4 py-3">
                  <p className="text-[11px] uppercase tracking-wider font-extrabold text-text-dark/60">
                    Pack Size
                  </p>
                  <p className="mt-1 font-semibold text-text-dark">
                    {product.pack}
                  </p>
                </div>
                <div className="rounded-xl border border-primary/15 bg-bg-light px-4 py-3">
                  <p className="text-[11px] uppercase tracking-wider font-extrabold text-text-dark/60">
                    Best Time To Use
                  </p>
                  <p className="mt-1 font-semibold text-text-dark">
                    {product.bestTimeToUse}
                  </p>
                </div>
              </div>

              <h2 className="mt-8 text-sm font-black text-primary uppercase tracking-widest">
                Key Benefits
              </h2>
              <ul className="mt-4 space-y-3">
                {product.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 items-start">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-text-dark/70 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-primary/15 bg-primary/5 p-4">
                  <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary">
                    <ShieldCheck className="h-4 w-4" />
                    Suitable For
                  </p>
                  <ul className="mt-3 space-y-2">
                    {product.suitableFor.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-text-dark/80 leading-6 font-medium"
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-primary/15 bg-primary/5 p-4">
                  <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary">
                    <Beaker className="h-4 w-4" />
                    Composition Highlights
                  </p>
                  <ul className="mt-3 space-y-2">
                    {product.keyIngredients.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-text-dark/80 leading-6 font-medium"
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-primary/15 bg-primary/5 p-4">
                  <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary">
                    <Leaf className="h-4 w-4" />
                    Usage Tips
                  </p>
                  <ul className="mt-3 space-y-2">
                    {product.usageTips.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-text-dark/80 leading-6 font-medium"
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-primary/15 bg-bg-light px-4 py-3">
                  <p className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-extrabold text-text-dark/60">
                    <Clock3 className="h-4 w-4" />
                    Expected Response Timeline
                  </p>
                  <p className="mt-2 text-text-dark/80 font-semibold leading-6">
                    {product.expectedTimeline}
                  </p>
                </div>
                <div className="rounded-xl border border-primary/15 bg-bg-light px-4 py-3">
                  <p className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-extrabold text-text-dark/60">
                    <Package className="h-4 w-4" />
                    Storage Guidance
                  </p>
                  <p className="mt-2 text-text-dark/80 font-semibold leading-6">
                    {product.storage}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="rounded-3xl bg-gradient-to-br from-white via-[#f9f7ef] to-[#efe8d7] border border-primary/10 p-4 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full bg-primary/10" />
                <Image
                  src={product.image}
                  alt={product.name}
                  width={460}
                  height={560}
                  className="mx-auto h-[300px] md:h-[440px] w-auto object-contain drop-shadow-2xl relative z-10 rounded-2xl"
                />
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-extrabold text-white hover:opacity-90 transition"
                >
                  Enquire Now
                </Link>
                <a
                  href="https://wa.me/918168048260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-primary/30 px-6 py-3 font-bold text-primary hover:bg-primary/5 transition"
                >
                  WhatsApp Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
