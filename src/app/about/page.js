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

import { aboutHero } from "@/lib/data";
import PageHero from "@/components/organisms/PageHero";

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
    <div className="relative pt-20">
      <PageHero
        image={aboutHero.image}
        title={aboutHero.title}
        subtitle={aboutHero.subtitle}
      />

      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-text-dark/75 mb-6 leading-relaxed">
              Dairy Guruji Company(Bijendera Group) भारत में cattle feed और
              nutritional supplements का निर्माण और supply करती है। लेकिन हमारी
              पहचान सिर्फ products से नहीं है — हमारी असली पहचान है किसानों के
              साथ खड़े रहना, उनके साथ चलना, और उनके साथ grow करना।
            </p>
            <p className="text-lg text-text-dark/75 mb-6 leading-relaxed">
              हम Dairy farms को adopt करके उनके साथ partner नहीं, परिवार की तरह
              जुड़ते हैं — उनका मुनाफा बढ़ाने और खर्च कम करने के लिए। Veterinary
              doctors और LSA के through हर पशुपालक तक सही जानकारी पहुँचाते हैं
              Affordable और effective cattle feed & supplements देते हैं — कम
              खर्च, ज्यादा फायदा आसान और practical knowledge देते हैं — जो सच
              में रोज़ काम आए और सबसे जरूरी — हम हर स्थिति में साथ खड़े रहते
              हैं, ताकि किसान कभी अकेला महसूस न करे।
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-primary">
            The Reason behind Dairy Guruji
          </h2>
          <p className="text-lg text-text-dark/75 max-w-5xl leading-relaxed">
            मैंने हमेशा एक ही चीज़ देखी है — भारत में पशुपालक भाई मेहनत में कभी
            पीछे नहीं रहते । फिर भी कई बार उसे वो परिणाम नहीं मिलता जिसका वो
            हकदार है। जब मुझे Australia में dairy farming systems, Cattle Breed
            और Higher Milk production को समझने का मौका मिला, तब मेरी सोच पूरी
            तरह बदल गई। उसी समय मैंने decide किया — अगर ये system विदेशों में
            काम कर सकता है, तो मेरे भारत देश में क्यों नहीं? हमारे किसानों में
            मेहनत की कमी नहीं है, उन्हें बस सही direction और support की जरूरत
            है। यहीं से Dairy Guruji की शुरुआत हुई
          </p>
          <p className="mt-5 text-lg font-semibold text-primary">
            “अगर किसान को सही जानकारी और सही पोषण मिले, तो क्या वह नुकसान से
            निकल सकता है?”
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Image
            src="/images/about/founder-two.jpeg"
            alt="Founder Dairy Guru Ji"
            width={500}
            height={500}
            className="rounded-xl shadow-xl w-full h-[85%] object-cover"
          />

          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-primary">
              Founder
            </h2>

            <p className="text-lg text-text-dark/75 leading-relaxed mb-6">
              मैं ऑस्ट्रेलिया से आपका भाई हिमांशु, जिसे भारतीय किसान व पशुपालक
              “Dairy Guruji” के नाम से जानते हैं
            </p>
            <p className="text-lg text-text-dark/75 leading-relaxed mb-6">
              मेरे प्यारे भारत देश के पशुपालक भाइयों, मैं हिमांशु — मेरा जन्म
              हरियाणा, भारत में हुआ। वर्तमान में मैं ऑस्ट्रेलिया में रहता हूँ।
              मैंने Hansraj College (Delhi University) से ग्रेजुएशन किया और उसके
              बाद उच्च शिक्षा के लिए ऑस्ट्रेलिया गया, जहाँ University of Western
              Australia में अध्ययन किया। इसके साथ ही मैंने कृत्रिम गर्भाधान (AI)
              और थनैला रोग रोकथाम में विशेषज्ञता हासिल की और ऑस्ट्रेलिया की
              प्रमुख संस्था Dairy Australia से डेयरी फार्मिंग में CERT 3 प्राप्त
              किया। वर्ष 2024 में मैंने animal feeding and nutrition तथा dairy
              feed formulation पर गहन अध्ययन किया।
            </p>

            <p className="text-lg text-text-dark/75 leading-relaxed mb-6">
              डेयरी इंडस्ट्री में मेरे काम और समर्पण को देखते हुए भारत ही नहीं,
              ऑस्ट्रेलिया के बड़े-बड़े डॉक्टरों, सीनियर एक्सपर्ट्स और संस्थाओं
              ने भी सराहना की है।
            </p>
            <p className="text-lg text-primary font-semibold italic leading-relaxed">
              “No Indian dairy farmer should suffer losses because of lack of
              nutrition guidance.”
            </p>
            <div className="mt-8 flex items-center gap-3">
              <CheckCircle className="text-primary" />
              <span className="font-bold tracking-wide text-text-dark">
                Himanshu, Founder - Dairy Guruji
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6">
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
      <section className="py-24 px-4 sm:px-6">
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
    </div>
  );
};

export default AboutPage;
