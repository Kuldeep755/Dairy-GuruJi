import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutFounder() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 py-24 bg-white">
      {/* Background Glow */}
      <div className="absolute -top-32 left-[-10%] h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
            <CheckCircle2 className="h-4 w-4" />
            Founder Message
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-text-dark mb-6">
            व्यापार नहीं,
            <span className="block text-primary italic mt-2">
              रिश्ते बनाते हैं
            </span>
          </h2>

          {/* Quote */}
          <p className="text-lg md:text-xl text-text-dark/70 leading-relaxed mb-8 max-w-xl border-l-4 border-primary pl-4 italic">
            “मेरा सपना है मेरे भारत देश में दूसरी श्वेत क्रांति लाना, ताकि मेरे
            सभी पशुपालक भाई सफल बने और उनकी आय कई गुना बढ़े।”
          </p>

          <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-lg text-text-dark/80 leading-relaxed text-[15px] md:text-base">
            <p className="mb-4">
              Dairy Guruji सिर्फ एक कंपनी नहीं है — ये हर पशुपालक के सपनों,
              मेहनत और उम्मीदों का साथी है। हम जानते हैं कि एक किसान अपने पशुओं
              को सिर्फ जानवर नहीं, अपने बच्चों की तरह पालता है… उनकी देखभाल में
              अपना दिन-रात लगा देता है… और उसी से उसके परिवार का भविष्य जुड़ा
              होता है
            </p>

            <p className="mb-4">
              इसीलिए हम सिर्फ Cattle Feed और Supplements बेचने नहीं आए — हम आपकी
              डेयरी की जिम्मेदारी अपने कंधों पर लेने आए हैं। Dairy Farm Adoption
              के जरिए हम आपके साथ ऐसे खड़े रहते हैं जैसे परिवार का कोई अपना
              सदस्य… हर दिन, हर समस्या में, हर फैसले में। जब आप सुबह जल्दी उठकर
              अपने पशुओं की सेवा करते हैं, तब Dairy Guruji भी आपके साथ खड़ा होता
              है — सही पोषण, वैज्ञानिक feeding और लगातार मार्गदर्शन देकर… ताकि
              आपका दूध बढ़े, खर्च कम हो और आपकी मेहनत का सही फल आपको मिले।
            </p>

            <p className="mb-4">
              हमारे डॉक्टर हर हफ्ते आपके पशुओं की जांच करते हैं, ताकि बीमारी आने
              से पहले ही उसे रोका जा सके — क्योंकि हम जानते हैं कि एक पशु बीमार
              पड़ता है, तो सिर्फ दूध ही नहीं, पूरे घर की चिंता बढ़ जाती है। आज
              हमारे बेहतर पशु आहार, supplements और सही जानकारी ने लाखों
              पशुपालकों की जिंदगी में बदलाव लाना शुरू कर दिया है — उनके चेहरे पर
              भरोसा और संतोष वापस ला दिया है। और हमने 200+ युवा भाइयो को गांव
              में ही रोजगार दिया ह ,जिससे सिर्फ उनकी ही नहीं, पूरे गांव की
              तस्वीर बदलने लगी है.
            </p>

            <p className="mb-4">
              Dairy Guruji के साथ, आप अकेले नहीं हैं — हम आपके साथ हैं… आपके
              पशुओं के साथ हैं… और आपके परिवार के बेहतर कल के साथ ह ।
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl h-[400px] sm:h-[520px] md:h-[600px]">
            <Image
              src="/images/about/founder.jpeg"
              alt="Founder - Dairy Guruji"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover  ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
