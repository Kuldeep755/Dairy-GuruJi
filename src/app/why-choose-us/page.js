"use client";

import PageHero from "@/components/organisms/PageHero";
import WhyChooseUs from "@/components/organisms/WhyChooseUs";

export default function WhyChooseUsPage() {
  return (
    <main className="min-h-screen">
      <PageHero 
        image="/images/hero/slide4.jpeg"
        title="Why Choose Dairy Guru Ji"
        subtitle="We don't just sell products — we adopt your farm and partner in your success through science, ethics, and relentless field execution."
      />
      <WhyChooseUs />
    </main>
  );
}
