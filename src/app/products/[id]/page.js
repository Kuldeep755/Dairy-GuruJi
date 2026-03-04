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

  const composition = product.composition || product.nutritionalValue;

  return (
    <div className="relative min-h-screen bg-[#fafaf8] pt-20 pb-12 md:pt-32 md:pb-20 font-sans">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/4 bg-primary/5 blur-[80px] md:blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-10 left-10 w-1/4 h-1/4 bg-secondary/10 blur-[60px] md:blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/products"
          className="group inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs mb-10 hover:text-text-dark transition-colors"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full border border-primary/20 group-hover:border-primary group-hover:-translate-x-1 transition-all">←</span>
          Back to All Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Image and Main Info */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6 md:space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl md:rounded-[3rem] blur-[40px] md:blur-[60px] opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="relative bg-white rounded-3xl md:rounded-[3rem] p-6 md:p-12 shadow-2xl border border-primary/5 overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 md:w-48 md:h-48 bg-secondary/5 rounded-full" />
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={700}
                  className="w-full h-auto object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.12)] relative z-10 transition-transform duration-700 group-hover:scale-[1.03]"
                  priority
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/contact"
                className="flex items-center justify-center bg-primary text-white text-base md:text-lg font-black py-4 md:py-5 rounded-xl md:rounded-2xl shadow-xl shadow-primary/20 hover:bg-text-dark hover:-translate-y-1 transition-all duration-300"
              >
                ENQUIRE NOW
              </Link>
              <a
                href={`https://wa.me/918168048260?text=I'm interested in ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#25D366] text-white text-base md:text-lg font-black py-4 md:py-5 rounded-xl md:rounded-2xl shadow-xl shadow-[#25D366]/20 hover:bg-[#128C7E] hover:-translate-y-1 transition-all duration-300 gap-3"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.747-2.874-2.512-2.96-2.626-.087-.115-.708-.941-.708-1.797 0-.856.448-1.277.608-1.441.16-.164.346-.205.461-.205s.23.003.33.005c.10.003.239-.038.374.287.144.345.477 1.165.518 1.25.041.085.068.184.011.303-.058.12-.088.195-.174.299-.087.103-.139.141-.237.255-.084.098-.173.205-.074.375.099.169.439.724.943 1.173.649.578 1.196.757 1.365.841.169.085.268.071.367-.042.099-.114.424-.493.538-.662.113-.17.227-.143.382-.086.155.057.982.463 1.151.547.169.085.282.127.324.201.041.074.041.428-.103.833z" />
                </svg>
                WHATSAPP
              </a>
            </div>
          </div>

          {/* Right Column: Detailed Info */}
          <div className="lg:col-span-7 space-y-12">
            {/* Header Content */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1.5 rounded-full bg-secondary text-text-dark text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">
                  {product.tag}
                </span>
                <span className="px-4 py-1.5 rounded-full bg-white border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">
                  Scientific Formula
                </span>
              </div>
              <h1 className="text-4xl md:text-7xl font-black text-text-dark leading-[1.05] tracking-tight">
                {product.name}
              </h1>
              <p className="text-base md:text-2xl text-text-dark/70 font-medium leading-relaxed max-w-2xl">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Composition Card - Modernized */}
              {composition && (
                <div className="bg-white rounded-3xl md:rounded-[2.5rem] p-6 md:p-10 border border-primary/10 shadow-xl shadow-primary/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-primary/5 rounded-full -mr-12 -mt-12 md:-mr-16 md:-mt-16" />
                  <h3 className="text-primary text-[10px] font-black uppercase tracking-[0.25em] mb-8 flex items-center gap-3">
                    <Beaker className="w-4 h-4" /> Composition Analysis
                  </h3>
                  <div className="space-y-3 md:space-y-4">
                    {composition.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-1.5 md:py-2 border-b border-primary/5 last:border-0 hover:bg-primary/5 px-2 rounded-lg transition-colors">
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-wider text-text-dark/60">{item.label}</span>
                        <span className="text-xs md:text-sm font-black text-text-dark">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits Section */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-primary text-[10px] font-black uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4" /> Proven Benefits
                  </h3>
                  
                  {product.benefitsHindi ? (
                    <div className="space-y-4">
                      {product.benefitsHindi.map((benefit, index) => (
                        <div key={index} className="flex gap-4 items-start group">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-xs group-hover:bg-primary group-hover:text-white transition-all">
                            ✓
                          </div>
                          <span className="text-base md:text-lg font-bold text-text-dark leading-snug">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {product.benefits.map((benefit, index) => (
                        <div key={index} className="flex gap-4 items-start group">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-xs group-hover:bg-primary group-hover:text-white transition-all">
                            ✓
                          </div>
                          <span className="text-base md:text-lg font-bold text-text-dark leading-snug">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Feeding and Instructions - Layout improved */}
            {(product.feedingInstructions || product.packaging) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {product.feedingInstructions && (
                  <div className="bg-[#fdfaf2] rounded-3xl md:rounded-[2.5rem] p-6 md:p-10 border border-secondary/20 h-full">
                    <h3 className="text-text-dark/60 text-[10px] font-black uppercase tracking-[0.25em] mb-6 md:mb-8 flex items-center gap-3">
                      <Clock3 className="w-4 h-4" /> Feeding Protocol
                    </h3>
                    <div className="space-y-4">
                      {product.feedingInstructions.items ? (
                        product.feedingInstructions.items.map((item, index) => (
                          <div key={index} className="flex flex-col gap-1 p-4 rounded-2xl bg-white/60 border border-secondary/10 shadow-sm">
                            <span className="text-xs font-black text-text-dark/40 uppercase tracking-widest">{item.label}</span>
                            <span className="text-lg font-black text-text-dark">{item.value}</span>
                          </div>
                        ))
                      ) : (
                        <>
                          {product.feedingInstructions.large && (
                            <div className="flex flex-col gap-1 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/60 border border-secondary/10 shadow-sm">
                              <span className="text-[10px] md:text-xs font-black text-text-dark/40 uppercase tracking-widest">बड़े पशु</span>
                              <span className="text-base md:text-lg font-black text-text-dark">{product.feedingInstructions.large}</span>
                            </div>
                          )}
                          {product.feedingInstructions.small && (
                            <div className="flex flex-col gap-1 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/60 border border-secondary/10 shadow-sm">
                              <span className="text-[10px] md:text-xs font-black text-text-dark/40 uppercase tracking-widest">छोटे पशु</span>
                              <span className="text-base md:text-lg font-black text-text-dark">{product.feedingInstructions.small}</span>
                            </div>
                          )}
                        </>
                      )}
                      {product.feedingInstructions.note && (
                        <div className="mt-4 p-4 rounded-2xl bg-white/40 border border-primary/5 italic text-sm font-bold text-text-dark/70">
                          Note: {product.feedingInstructions.note}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {product.packaging && (
                  <div className="bg-primary rounded-3xl md:rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center justify-center text-center text-white relative overflow-hidden group shadow-2xl shadow-primary/20">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                    <Package className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6 text-secondary animate-pulse" />
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-2">Available Packaging</p>
                    <p className="text-xl md:text-3xl font-black leading-tight" 
                       dangerouslySetInnerHTML={{ __html: product.packaging.replace(' : ', '<br className="hidden md:block"/>').replace(' में उपलब्ध', '') }} 
                    />
                    <div className="mt-4 md:mt-6 px-4 py-2 rounded-full border border-white/20 text-[10px] font-black uppercase tracking-widest">
                      Eco-Friendly Pack
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Special Note / Formulation - Premium Banner */}
            {product.specialNote && (
              <div className="relative p-1 rounded-3xl md:rounded-[2rem] bg-gradient-to-r from-primary via-secondary to-primary shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="relative bg-text-dark rounded-[1.4rem] md:rounded-[1.9rem] p-6 md:p-12 overflow-hidden flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full" />
                  <div className="relative z-10 flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                      <div className="h-1 w-12 bg-secondary" />
                      <span className="text-secondary text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">Australian Standard</span>
                    </div>
                    <p className="text-white text-lg md:text-2xl font-black leading-relaxed italic">
                      "{product.specialNote}"
                    </p>
                  </div>
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-secondary/30 flex items-center justify-center p-2">
                       <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center">
                          <svg className="w-8 h-8 md:w-10 md:h-10 text-text-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Standard Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Suitable For", icon: ShieldCheck, items: product.suitableFor },
                { title: "Key Ingredients", icon: Beaker, items: product.keyIngredients },
                { title: "Usage Tips", icon: Leaf, items: product.usageTips }
              ].map((section, idx) => (
                <div key={idx} className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-primary/5 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-primary font-black uppercase text-[10px] tracking-widest mb-4 md:6 flex items-center gap-3">
                    <section.icon className="w-4 h-4" /> {section.title}
                  </h4>
                  <ul className="space-y-2 md:space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-xs md:text-sm font-bold text-text-dark/60 leading-snug flex items-start gap-2">
                        <span className="text-primary/30 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-32 pt-20 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <h3 className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-4">You Might Also Need</h3>
              <h2 className="text-4xl md:text-5xl font-black text-text-dark tracking-tight">Complete Your Farm's Nutrition</h2>
            </div>
            <Link href="/products" className="text-sm font-black text-primary uppercase tracking-widest hover:underline">View All Products →</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map((related) => (
                <Link 
                  key={related.id} 
                  href={`/products/${related.id}`}
                  className="group bg-white rounded-3xl p-6 border border-primary/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#fdfcf8] to-[#f4f1e6] p-4 mb-6 overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-primary/60 mb-2 block">{related.tag}</span>
                  <h4 className="text-lg font-black text-text-dark leading-tight group-hover:text-primary transition-colors">{related.name}</h4>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
