import Image from "next/image";
import Link from "next/link";

const highlights = [
  "No harmful shortcuts",
  "Practical farm guidance",
  "Long-term cattle wellness",
  "Breed-wise nutrition plans",
];

const trustStats = [
  { label: "Villages reached", value: "240+" },
  { label: "Active farmer partners", value: "3,500+" },
  { label: "Average repeat purchase", value: "82%" },
  { label: "Field consultation days", value: "365" },
];

const impactPoints = [
  {
    title: "Milk Consistency",
    desc: "Reduce day-to-day fluctuation through stable mineral and digestion support.",
  },
  {
    title: "Reproductive Health",
    desc: "Targeted trace minerals and vitamins for better fertility and heat expression.",
  },
  {
    title: "Immunity Readiness",
    desc: "Feed strategies built for seasonal stress, heat load and infection pressure.",
  },
];

const categories = [
  {
    title: "Milk Let Down Support",
    desc: "Hormone-free support for smoother milking and better daily yield.",
    image: "/images/products/mld.png",
    points: ["Supports calm milking", "Helps reduce stress", "Daily-use friendly"],
  },
  {
    title: "Mineral Balance",
    desc: "Complete mineral coverage for fertility, immunity and milk quality.",
    image: "/images/products/mineral.png",
    points: ["Macro + trace support", "Palatable intake profile", "Year-round protocol"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Farm Assessment",
    desc: "We understand ration, breed mix, stage of lactation and current bottlenecks.",
  },
  {
    step: "02",
    title: "Nutrition Recommendation",
    desc: "A practical plan is prepared with clear quantity, timing and expected results.",
  },
  {
    step: "03",
    title: "On-Field Follow-up",
    desc: "Our team tracks changes in yield, body condition and reproductive indicators.",
  },
];

const testimonials = [
  {
    quote:
      "Milk yield became more stable within a month. The best part is consistent guidance, not just product selling.",
    name: "Rajveer Singh",
    location: "Dairy Farmer, Karnal",
  },
  {
    quote:
      "We saw better feed response and animal energy. Team support is practical and very farmer-friendly.",
    name: "Mahesh Yadav",
    location: "Farm Owner, Alwar",
  },
];

const faqs = [
  {
    q: "How quickly can I see results after starting a plan?",
    a: "Most farms observe visible stability in appetite and milk pattern within 2-4 weeks, depending on animal condition and baseline nutrition.",
  },
  {
    q: "Do you provide guidance for small farms too?",
    a: "Yes. We work with both small and medium farms and suggest affordable, stage-based feeding protocols.",
  },
  {
    q: "Can I combine your products with my current feed routine?",
    a: "In most cases, yes. We map the existing routine and then suggest additive support without unnecessary overlap.",
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

            <div className="mt-7 flex flex-wrap gap-2">
              {["Farmer-first model", "Field-tested products", "Daily support team"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/20 bg-[var(--surface)] px-4 py-2 text-xs font-bold tracking-wide text-primary"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>

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

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl rounded-3xl border border-primary/10 bg-[var(--surface)] p-6 shadow-xl md:p-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {trustStats.map((item) => (
              <div key={item.label} className="rounded-2xl bg-bg-light p-4 text-center">
                <p className="text-3xl font-black text-primary md:text-4xl">{item.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-text-dark/70">
                  {item.label}
                </p>
              </div>
            ))}
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
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-black text-text-dark md:text-5xl">
              What Improves On Ground
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-text-dark/70">
              We focus on practical outcomes that matter for farm economics,
              animal comfort and long-term sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {impactPoints.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-primary/10 bg-[var(--surface)] p-6 shadow-md"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  Performance Area
                </p>
                <h3 className="mt-2 text-2xl font-black text-text-dark">{item.title}</h3>
                <p className="mt-3 text-text-dark/70">{item.desc}</p>
              </article>
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
                    <div className="mt-4 space-y-2">
                      {item.points.map((point) => (
                        <p
                          key={point}
                          className="text-sm font-semibold text-text-dark/75"
                        >
                          • {point}
                        </p>
                      ))}
                    </div>
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

      <section className="px-6 py-24 bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-3 text-center">
            <h2 className="text-4xl font-black text-text-dark md:text-5xl">
              How We Work With Farmers
            </h2>
            <p className="mx-auto max-w-2xl text-text-dark/70">
              A structured process that keeps recommendations clear, measurable
              and easy to implement on daily routines.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {processSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-primary/10 bg-bg-light p-6"
              >
                <p className="text-sm font-black text-primary">{item.step}</p>
                <h3 className="mt-2 text-2xl font-black text-text-dark">{item.title}</h3>
                <p className="mt-3 text-text-dark/70">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-black text-text-dark md:text-5xl">
              Voices From The Field
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-text-dark/70">
              Direct feedback from farmers using our product protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-3xl border border-primary/10 bg-[var(--surface)] p-7 shadow-md"
              >
                <p className="text-lg leading-relaxed text-text-dark/80">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="mt-5 text-base font-black text-text-dark">{item.name}</p>
                <p className="text-sm font-semibold text-primary">{item.location}</p>
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
