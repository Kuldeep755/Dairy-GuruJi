"use client";

import PageHero from "@/components/organisms/PageHero";
import { manufacturingHero, manufacturingVideo } from "@/lib/data";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const popIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

const getYoutubeEmbedUrl = (url) => {
  if (!url) return "";

  const buildEmbedUrl = (videoId) => {
    if (!videoId) return "";

    const params = new URLSearchParams({
      autoplay: "1",
      mute: "1",
      rel: "0",
      playsinline: "1",
    });

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  };

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      const videoId = parsedUrl.pathname.replace("/", "");
      return buildEmbedUrl(videoId);
    }

    if (parsedUrl.hostname.includes("youtube.com")) {
      const videoId = parsedUrl.searchParams.get("v");

      if (videoId) {
        return buildEmbedUrl(videoId);
      }

      const pathParts = parsedUrl.pathname.split("/").filter(Boolean);
      const embedId =
        pathParts[0] === "embed" || pathParts[0] === "shorts"
          ? pathParts[1]
          : "";

      return buildEmbedUrl(embedId);
    }
  } catch {
    return "";
  }

  return "";
};

export default function ManufacturingPage() {
  const manufacturingVideoEmbedUrl = getYoutubeEmbedUrl(manufacturingVideo.url);

  return (
    <div className="relative min-h-screen bg-[#fcfdfd] overflow-hidden pt-20">
      <PageHero
        image={manufacturingHero.image}
        title={manufacturingHero.title}
        subtitle={manufacturingHero.subtitle}
      />

      {manufacturingVideoEmbedUrl && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 tracking-wider uppercase">
              Watch The Video
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-text-dark mb-6 leading-[1.1]">
              {manufacturingVideo.title}
            </h2>
            <p className="text-xl text-text-dark/70 font-medium leading-relaxed max-w-3xl mx-auto">
              {manufacturingVideo.subtitle}
            </p>
          </motion.div>

          <div className="relative overflow-hidden rounded-4xl border border-black/5 bg-white shadow-2xl shadow-black/10">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={manufacturingVideoEmbedUrl}
                title={manufacturingVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
