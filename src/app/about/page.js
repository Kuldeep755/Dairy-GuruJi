"use client";

import Image from "next/image";
import {
  CheckCircle,
  CircleHelp,
  Droplet,
  Handshake,
  HeartPulse,
  Users,
  Microscope,
  Leaf,
  ShieldCheck,
  Sprout,
  TrendingUp,
} from "lucide-react";

const AboutPage = () => {
  const whyFarmersLose = [
    "Wrong feeding practices",
    "Over-promising products",
    "Lack of nutrition education",
    "Short-term solutions that damage animal health",
  ];

  const qualityPoints = [
    "ISO 9001:2015 Certified Manufacturing",
    "Carefully sourced raw materials",
    "Balanced vitamins & minerals",
    "No harmful steroids or banned substances",
    "Safe for animals & milk consumers",
  ];

  const breedCards = [
    {
      name: "Sahiwal",
      focus: "Heat tolerant but sensitive digestion",
      img: "/images/breeds/sahiwal.png",
    },
    {
      name: "Gir",
      focus: "High genetic potential, needs balanced minerals",
      img: "/images/breeds/gir.jpeg",
    },
    {
      name: "HF (Holstein Friesian)",
      focus: "High yield but stress-prone",
      img: "/images/breeds/hf.jpeg",
    },
    {
      name: "Jersey",
      focus: "High fat milk, needs energy-rich diet",
      img: "/images/breeds/jersey.jpeg",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-[#FAFAFA] via-[#F6FBF8] to-white pt-28">
      <section className="relative px-6 py-24 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight text-text-dark">
              ABOUT DAIRY GURU JI
            </h1>
            <p className="mt-4 text-lg md:text-2xl font-semibold text-primary">
              व्यापार नहीं, रिश्ते बनाते हैं
            </p>
            <div className="h-1 w-20 bg-primary my-7 rounded-full" />

            <p className="text-lg md:text-xl text-text-dark/75 leading-relaxed max-w-2xl">
              Dairy Guru Ji is not just a dairy nutrition brand. It is a
              movement for Indian dairy farmers built on correct nutrition,
              honest guidance, and scientific knowledge.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/about/hero.jpeg"
              alt="Indian Dairy Farm"
              width={700}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-text-dark mb-6">
              🌱 Who We Are <span className="text-primary">(हम कौन हैं)</span>
            </h2>
            <p className="text-lg text-text-dark/75 mb-6 leading-relaxed">
              In India, dairy farming is not only a business. It is a way of
              life, a family responsibility, and a daily struggle. Dairy Guru Ji
              exists to change that reality.
            </p>
            <p className="text-lg text-text-dark/75 mb-6 leading-relaxed">
              We help farmers grow sustainably, ethically, and profitably through
              science that works on the ground.
            </p>
          </div>

          <div className="bg-bg-light p-8 md:p-10 rounded-3xl border border-primary/10">
            <h3 className="text-2xl font-black text-text-dark mb-6">
              Why farmers lose money
            </h3>
            <div className="space-y-4">
              {whyFarmersLose.map((issue) => (
                <div key={issue} className="flex items-start gap-3">
                  <CircleHelp className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-text-dark/75">{issue}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-bg-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-text-dark">
            🎯 Our Purpose <span className="text-primary">(हम क्यों बने)</span>
          </h2>
          <p className="text-lg text-text-dark/75 max-w-5xl leading-relaxed">
            The Indian dairy industry has products, but it lacks guidance.
            Farmers were buying feed, but no one was solving their real
            problems. So we built Dairy Guru Ji around one belief: if farmers
            get the right knowledge with the right nutrition, they can move
            from loss to long-term profit.
          </p>
          <p className="mt-5 text-lg font-semibold text-primary">
            “अगर किसान को सही जानकारी और सही पोषण मिले, तो क्या वह नुकसान से
            निकल सकता है?”
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Microscope,
              title: "International Research",
              desc: "We follow Australian dairy nutrition standards for balanced feeding, long-term productivity, and ethical animal care.",
            },
            {
              icon: Sprout,
              title: "Indian Farm Reality",
              desc: "We adapt nutrition to Indian climate, local feeding practices, indigenous and crossbred cattle, and small to medium farms.",
            },
            {
              icon: Leaf,
              title: "Breed-Specific Nutrition",
              desc: "We never apply one formula to every animal. Nutrition is designed by breed, stage, and farm goal.",
            },
            {
              icon: Users,
              title: "Farmer-First Philosophy",
              desc: "Our first question is not how much we can sell. It is whether the farmer will be profitable in the next 6 to 12 months.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-bg-light p-8 rounded-2xl border border-primary/10"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
              <h3 className="text-xl font-black mb-3 text-text-dark">{item.title}</h3>
              <p className="text-text-dark/75 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-bg-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-14 text-center text-text-dark">
            🐄 Breed-Specific Nutrition{" "}
            <span className="text-primary">(हर नस्ल के लिए अलग सोच)</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {breedCards.map((breed) => (
              <div
                key={breed.name}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 transition"
              >
                <Image
                  src={breed.img}
                  alt={breed.name}
                  width={420}
                  height={280}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6">
                  <h4 className="font-black text-lg text-text-dark">{breed.name}</h4>
                  <p className="text-sm text-text-dark/70 mt-2">{breed.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-bg-light p-10 rounded-3xl border border-primary/10">
            <h3 className="text-primary font-black uppercase tracking-widest mb-5">
              Farmer-First
            </h3>
            <div className="space-y-4">
              {[
                "We avoid harmful hormones",
                "We avoid shortcuts like oxytocin",
                "We focus on fertility, immunity and longevity",
                "We give honest advice, even if it means selling less",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <HeartPulse className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-text-dark/75">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary to-green-700 text-white p-10 rounded-3xl">
            <h3 className="font-black uppercase tracking-widest mb-5">
              Our Belief
            </h3>
            <p className="text-xl leading-relaxed">
              Healthy animals = Safe milk = Strong families.
            </p>
            <p className="text-white/85 mt-5">
              Farmer trust is more valuable than short-term sales.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-text-dark">
              🧪 Quality & Ethics{" "}
              <span className="text-primary">(गुणवत्ता और ईमानदारी)</span>
            </h2>
            <div className="space-y-4">
              {qualityPoints.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-text-dark/75">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-bg-light p-10 rounded-3xl border border-primary/10">
            <h3 className="text-2xl font-black mb-4 text-text-dark">
              What this means on farm
            </h3>
            <p className="text-text-dark/75 leading-relaxed">
              Consistent health, better milk quality, and safer outcomes for
              animals, farmers, and milk consumers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-bg-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Image
            src="/images/about/founder.jpg"
            alt="Founder Dairy Guru Ji"
            width={500}
            height={500}
            className="rounded-3xl shadow-xl w-full h-full object-cover"
          />

          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-text-dark">
              👨‍🎓 Founder’s Vision <span className="text-primary">(संस्थापक की सोच)</span>
            </h2>

            <p className="text-lg text-text-dark/75 leading-relaxed mb-6">
              Himanshu, founder of Dairy Guru Ji, brings Indian farming
              understanding, international education in animal feeding and
              nutrition, and practical exposure to global dairy systems.
            </p>
            <p className="text-lg text-primary font-semibold italic leading-relaxed">
              “No Indian dairy farmer should suffer losses because of lack of
              nutrition guidance.”
            </p>
            <div className="mt-8 flex items-center gap-3">
              <CheckCircle className="text-primary" />
              <span className="font-bold tracking-wide text-text-dark">
                Himanshu, Founder - Dairy Guru Ji
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-text-dark">
              🌍 Our Vision <span className="text-primary">(हमारा सपना)</span>
            </h2>
            <p className="mt-5 text-lg text-text-dark/75 max-w-4xl mx-auto">
              To become India’s most trusted dairy nutrition brand known for
              honesty, scientific integrity, farmer prosperity, and ethical
              business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Handshake, title: "Honesty" },
              { icon: Microscope, title: "Scientific Integrity" },
              { icon: TrendingUp, title: "Farmer Prosperity" },
              { icon: Droplet, title: "Ethical Business" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-bg-light p-8 rounded-2xl border border-primary/10 text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-black text-text-dark">{item.title}</h3>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#0b3b24] to-[#15613d] text-white rounded-3xl p-10 md:p-14 text-center">
            <h3 className="text-2xl md:text-4xl font-black leading-snug">
              🤝 Join the Dairy Guru Ji Family
            </h3>
            <p className="mt-5 text-white/90 max-w-4xl mx-auto leading-relaxed">
              If you are a dairy farmer, distributor, sales professional, or a
              partner who believes in ethical growth, Dairy Guru Ji welcomes
              you.
            </p>
            <p className="mt-6 text-lg font-semibold text-secondary">
              👉 Because we don’t build business - we build relationships.
            </p>
            <p className="mt-4 text-white/85">
              “हाँ, यह ब्रांड हमारे साथ खड़ा है।”
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
