import Image from "next/image";
import Link from "next/link";

const highlights = [
  "No harmful shortcuts",
  "Practical farm guidance",
  "Long-term cattle wellness",
];

const categories = [
  {
    title: "Milk Let Down Support",
    desc: "Hormone-free support for smoother milking and better daily yield.",
    image: "/images/products/mld.png",
  },
  {
    title: "Mineral Balance",
    desc: "Complete mineral coverage for fertility, immunity and milk quality.",
    image: "/images/products/mineral.png",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg-light">
      <section className="relative overflow-hidden px-6 pb-20 pt-36">
        <div className="pointer-events-none absolute -top-24 left-[-8%] h-72 w-72 rounded-full bg-secondary/25 blur-3xl" />
        <div className="pointer-events-none absolute top-24 right-[-12%] h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                ISO 9001:2015 Certified Dairy Nutrition
              </span>
            </div>

            <h1 className="text-4xl font-black leading-tight text-text-dark md:text-7xl">
              व्यापार नहीं,
              <span className="mt-2 block text-primary">रिश्ते बनाते हैं</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-text-dark/75 md:text-xl">
              Not just selling products. We partner with dairy farmers for
              healthy cattle, safer milk and stable long-term profit.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/products" className="btn-primary text-center">
                Explore Products
              </Link>
              <Link href="/contact" className="btn-secondary text-center">
                Talk to Our Expert
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              {highlights.map((point) => (
                <div
                  key={point}
                  className="rounded-xl border border-primary/15 bg-[var(--surface)] px-4 py-3 text-sm font-bold text-text-dark/80"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-primary/15 shadow-2xl shadow-primary/20">
              <Image
                src="/images/about/hero.jpeg"
                alt="Dairy farm with healthy cows"
                width={900}
                height={700}
                priority
                className="h-[520px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 right-6 w-[210px] rounded-2xl border border-primary/10 bg-white p-3 shadow-xl">
              <Image
                src="/images/about/founder.jpg"
                alt="Dairy Guru Ji founder"
                width={300}
                height={260}
                className="h-32 w-full rounded-xl object-cover"
              />
              <p className="mt-3 text-xs font-semibold text-text-dark/70">
                Founder Message
              </p>
              <p className="text-sm font-black text-primary">
                किसान की तरक्की पहले
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-black text-text-dark md:text-5xl">
              Real Farms. Real Breeds. Real Results.
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-text-dark/70">
              Nutrition is never one-size-fits-all. We design support by breed,
              climate and farm conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { breed: "Sahiwal", image: "/images/breeds/sahiwal.png" },
              { breed: "Gir", image: "/images/breeds/gir.jpeg" },
              { breed: "HF", image: "/images/breeds/hf.jpeg" },
            ].map((item) => (
              <div
                key={item.breed}
                className="group overflow-hidden rounded-2xl border border-primary/10 bg-bg-light shadow-lg"
              >
                <Image
                  src={item.image}
                  alt={`${item.breed} cow breed`}
                  width={520}
                  height={380}
                  className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">
                    Breed Focus
                  </p>
                  <h3 className="mt-1 text-2xl font-black text-text-dark">
                    {item.breed}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl font-black text-text-dark md:text-5xl">
                Product Range
              </h2>
              <p className="mt-3 max-w-2xl text-text-dark/70">
                Science-backed products built for practical day-to-day dairy
                performance.
              </p>
            </div>
            <Link href="/products" className="hidden font-bold text-primary md:block">
              View all products →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {categories.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-3xl border border-primary/10 bg-[var(--surface)] shadow-lg"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="p-7">
                    <h3 className="text-2xl font-black text-text-dark">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-text-dark/70">{item.desc}</p>
                    <Link
                      href="/products"
                      className="mt-6 inline-flex font-bold text-primary"
                    >
                      Explore now →
                    </Link>
                  </div>
                  <div className="bg-gradient-to-br from-[#f8f5ec] to-[#ece4d1] p-5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={420}
                      height={480}
                      className="mx-auto h-64 w-auto object-contain drop-shadow-xl"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary p-12 text-center text-white">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10" />
          <h2 className="relative z-10 text-3xl font-black md:text-5xl">
            मुनाफा नहीं, सही पोषण चुनें।
          </h2>
          <p className="relative z-10 mx-auto mt-5 max-w-2xl text-white/85">
            Join farmers who trust Dairy Guru Ji for honest, practical guidance.
          </p>
          <div className="relative z-10 mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-secondary px-10 py-4 font-bold text-bg-dark"
            >
              Call Us Now
            </Link>
            <a
              href="https://wa.me/918168048260"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/30 bg-white/10 px-10 py-4 font-bold"
            >
              WhatsApp Enquire
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
