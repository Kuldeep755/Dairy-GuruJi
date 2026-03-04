"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Factory,
  CheckCircle,
  TrendingUp,
  Target,
  FlaskConical,
  Scale,
  ShieldCheck,
  PackageOpen,
  Users,
  ArrowRight,
  Sparkles,
  Lightbulb,
  Workflow,
  ClipboardCheck,
  Truck,
  Building2,
  Lock,
  Globe2,
  Sprout
} from "lucide-react";

import { Input, Textarea, Select, FormField } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const popIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export default function ThirdPartyManufacturingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "",
    volume: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Manufacturing inquiry submitted:", formData);
  };

  const services = [
    "Dairy Cattle Feed",
    "Calf Starter Feed",
    "Lactation Feed",
    "Mineral Mixtures",
    "Bypass Protein Feed",
    "Specialty Nutritional Supplements",
  ];

  const infrastructureFeatures = [
    {
      icon: <Factory className="h-6 w-6" />,
      title: "1. Modern Production Infrastructure",
      desc: "Automated mixing systems, precision batching, controlled blending, and standardized pellet/granule production ensure uniformity and consistent nutritional value.",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      icon: <FlaskConical className="h-6 w-6" />,
      title: "2. Strict Raw Material Selection",
      desc: "We procure high-quality protein sources, tested mineral blends, and verified grain ingredients. Every raw material is checked before entering production.",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "3. Multi-Level Quality Control",
      desc: "Raw material inspection, in-process monitoring, batch testing, and final product verification reduces rejection, complaints, and market risk.",
      color: "text-orange-600",
      bg: "bg-orange-100",
    },
    {
      icon: <PackageOpen className="h-6 w-6" />,
      title: "4. Hygienic & Controlled Storage",
      desc: "Moisture-controlled areas, proper ventilation, and organized inventory management protect product integrity and shelf life.",
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "5. Scalable Production Capacity",
      desc: "Whether you require small batches for a regional launch or bulk national supply, our facility scales production based on your growth.",
      color: "text-red-600",
      bg: "bg-red-100",
    }
  ];

  const journeySteps = [
    { step: "01", title: "The Dream", desc: "You want better profit margins, brand recognition, and market control. We listen to your goals and understand your target market." },
    { step: "02", title: "The Strategy", desc: "Every region is different. We help you decide product type, pricing segment, and positioning strategy. Your brand is planned carefully." },
    { step: "03", title: "The Formulation", desc: "Our team develops scientifically balanced formulations based on animal stage, regional needs, and cost-effectiveness." },
    { step: "04", title: "The Manufacturing", desc: "Inside our facility: strict checks, reliable sourcing, and standardized processes. We manufacture as if it were our own brand." },
    { step: "05", title: "Brand Comes Alive", desc: "Private label packaging, custom printed bags with your logo, and presentation support. Your product is now your brand identity." },
  ];

  const targetPartners = [
    "Dairy feed distributors who want their own brand",
    "Agri-input wholesalers",
    "Fertilizer & cattle feed dealers looking for higher margins",
    "Entrepreneurs entering dairy nutrition sector",
    "Companies wanting regional private label products"
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f8f9fa] via-[#e9ecef] to-[#dee2e6] overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -top-32 left-0 h-[40rem] w-[40rem] rounded-full bg-primary/20 blur-[100px]" />
      <div className="pointer-events-none absolute top-40 right-0 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-[100px]" />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.65 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-primary shadow-sm mb-6">
            <Sparkles className="h-4 w-4" />
            Third Party Manufacturing
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-text-dark tracking-tight">
            Build Your Own Dairy Feed Brand
            <span className="block text-primary mt-3">
              With Dairy Guru Ji
            </span>
          </h1>

          <p className="mt-8 mx-auto max-w-3xl text-xl md:text-2xl text-text-dark/80 font-medium leading-relaxed">
            Complete Private Label Manufacturing in India
          </p>

          <p className="mt-6 mx-auto max-w-4xl text-base md:text-lg text-text-dark/70 leading-relaxed">
            Looking for a trusted contract manufacturer? We provide complete private label solutions for distributors, dealers, and entrepreneurs who want to launch their own brand <strong className="text-primary font-bold">without investing in a factory</strong>.
            <br/><br/>
            We combine advanced manufacturing, scientific formulation, and strict quality control to help you build a profitable and trusted dairy nutrition brand.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#inquiry"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-extrabold text-white hover:bg-primary-dark hover:shadow-lg transition-all"
            >
              Start Your Brand
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="https://wa.me/918168048260"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border-2 border-primary/30 bg-white/50 backdrop-blur px-8 py-4 text-base font-bold text-primary hover:bg-primary/5 hover:border-primary/50 transition-all"
            >
              Consult on WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* Services Grid (What We Manufacture) */}
      <section className="relative max-w-7xl mx-auto px-6 py-16">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeUp}
           transition={{ duration: 0.6 }}
           className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-dark mb-4">
            Our Third Party Manufacturing Services
          </h2>
          <p className="text-lg text-text-dark/70 max-w-2xl mx-auto font-medium">
            All products can be developed under your brand name with customized formulations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={popIn}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 shadow-md hover:shadow-lg hover:border-primary/30 transition-all"
            >
               <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Sprout className="h-6 w-6 text-primary" />
               </div>
               <span className="text-xl font-bold text-text-dark">{service}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advanced Infrastructure Grid */}
      <section className="relative max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-4">
            Quality Manufacturing Builds Trust
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-text-dark">
            Why Our Manufacturing Facility Is Advanced
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infrastructureFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={popIn}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`h-16 w-16 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-4 leading-snug">
                {feature.title}
              </h3>
              <p className="text-text-dark/70 leading-relaxed font-medium text-base">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ROI & Profit Section */}
      <section className="relative max-w-5xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="bg-text-dark text-white rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Decorative shapes inside the card */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary/20 blur-2xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-primary/20 blur-2xl" />
          
          <TrendingUp className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
            Why Private Label Is More Profitable
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-10 relative z-10">
             <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-gray-300 mb-4 pb-4 border-b border-white/10">Standard Distribution</h3>
                <ul className="space-y-3 font-medium text-gray-400">
                   <li className="flex items-start gap-2">
                     <span className="text-red-400 font-bold">✗</span> You sell another company's brand.
                   </li>
                   <li className="flex items-start gap-2">
                     <span className="text-red-400 font-bold">✗</span> Limited margin (fixed by manufacturer).
                   </li>
                   <li className="flex items-start gap-2">
                     <span className="text-red-400 font-bold">✗</span> No brand control.
                   </li>
                   <li className="flex items-start gap-2">
                     <span className="text-red-400 font-bold">✗</span> Customer loyalty belongs to the manufacturer.
                   </li>
                </ul>
             </div>
             <div className="bg-primary/20 p-8 rounded-2xl border border-primary/50">
                <h3 className="text-xl font-bold text-white mb-4 pb-4 border-b border-white/20">Private Label (Dairy Guru Ji)</h3>
                <ul className="space-y-3 font-medium text-white/90">
                   <li className="flex items-start gap-2">
                     <CheckCircle className="h-5 w-5 text-primary shrink-0" /> You sell your own brand.
                   </li>
                   <li className="flex items-start gap-2">
                     <CheckCircle className="h-5 w-5 text-primary shrink-0" /> Higher margin per bag & pricing control.
                   </li>
                   <li className="flex items-start gap-2">
                     <CheckCircle className="h-5 w-5 text-primary shrink-0" /> Dealer network expansion.
                   </li>
                   <li className="flex items-start gap-2">
                     <CheckCircle className="h-5 w-5 text-primary shrink-0" /> Long-term brand equity & repeat customer loyalty.
                   </li>
                </ul>
             </div>
          </div>

          <p className="mt-12 text-lg md:text-xl font-medium text-white/80 max-w-2xl mx-auto relative z-10">
            If you sell 500 bags/month, the margin increase through private label gives a significant monthly profit boost. Scale that to 1,000–2,000 bags/month, and the distinction is undeniable.
          </p>
          <p className="mt-4 text-2xl font-bold text-white uppercase tracking-wider relative z-10">Private label = Higher long-term ROI.</p>
        </motion.div>
      </section>

      {/* From Idea to Brand Journey */}
      <section className="relative max-w-7xl mx-auto px-6 py-16 bg-white/50 backdrop-blur rounded-[3rem] my-16 border border-white">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeUp}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm mb-4">
             Your Idea. Our Manufacturing. Shared Success.
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-text-dark">
            From Idea to Profitable Brand
          </h2>
          <p className="mt-4 text-lg text-text-dark/70 font-medium">
            We help you convert your business idea into a professional, market-ready brand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={popIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center flex flex-col items-center hover:-translate-y-2 transition-transform"
            >
              <div className="h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-2xl mb-4">
                 {step.step}
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3">{step.title}</h3>
              <p className="text-sm font-medium text-text-dark/70">{step.desc}</p>

              {index !== journeySteps.length - 1 && (
                 <ArrowRight className="hidden lg:block absolute -right-5 top-1/2 transform -translate-y-1/2 text-gray-300 h-6 w-6 z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Target Audience & Competitive Advantages */}
      <section className="relative max-w-7xl mx-auto px-6 py-16">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Who is this for */}
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeUp}
               transition={{ duration: 0.6 }}
               className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl"
            >
               <h2 className="text-3xl font-extrabold text-text-dark mb-8 flex items-center gap-3">
                  <Users className="h-8 w-8 text-primary" />
                  Who Should Partner With Us?
               </h2>
               <div className="space-y-4">
                  {targetPartners.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                     <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle className="h-4 w-4 text-primary" />
                     </div>
                     <p className="text-lg text-text-dark/80 font-medium leading-relaxed">{item}</p>
                  </div>
                  ))}
               </div>
               <div className="mt-10 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                  <p className="text-lg font-bold text-primary text-center">
                     If you understand the market but lack manufacturing infrastructure — we are your solution.
                  </p>
               </div>
            </motion.div>

            {/* Competitive Edge */}
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeUp}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl"
            >
               <h2 className="text-3xl font-extrabold text-text-dark mb-8 flex items-center gap-3">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                  Why We Are Different
               </h2>
               <p className="text-text-dark/70 font-medium mb-6">Many manufacturers only produce feed. We provide:</p>
               <ul className="space-y-4">
                  {[
                     "Custom formulation support",
                     "Market positioning guidance",
                     "Transparent costing structure",
                     "Reliable long-term supply",
                     "Confidential brand protection"
                  ].map((item, i) => (
                     <li key={i} className="flex items-center gap-4 text-lg font-medium text-text-dark/80">
                        <Lock className="h-5 w-5 text-green-500 shrink-0" />
                        {item}
                     </li>
                  ))}
               </ul>
               <div className="mt-10 p-6 bg-green-50 rounded-2xl border border-green-100/50 text-center">
                  <p className="text-xl font-bold text-green-700">
                     We don't compete with your brand.<br/>We help you grow it.
                  </p>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Division of labor box */}
      <section className="relative max-w-4xl mx-auto px-6 py-10">
         <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={popIn}
            transition={{ duration: 0.6 }}
         >
            <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
               <div className="bg-primary/5 p-10 flex flex-col justify-center text-center">
                  <h3 className="text-2xl font-black text-text-dark mb-6">You Focus On:</h3>
                  <ul className="space-y-3 font-medium text-lg text-text-dark/80 inline-block text-left mx-auto">
                     <li className="flex items-center gap-2"><ArrowRight className="h-5 w-5 text-primary" /> Branding</li>
                     <li className="flex items-center gap-2"><ArrowRight className="h-5 w-5 text-primary" /> Marketing</li>
                     <li className="flex items-center gap-2"><ArrowRight className="h-5 w-5 text-primary" /> Distribution</li>
                     <li className="flex items-center gap-2"><ArrowRight className="h-5 w-5 text-primary" /> Market expansion</li>
                  </ul>
               </div>
               <div className="bg-primary text-white p-10 flex flex-col justify-center text-center">
                  <h3 className="text-2xl font-black mb-6">We Focus On:</h3>
                  <ul className="space-y-3 font-medium text-lg text-white/90 inline-block text-left mx-auto">
                     <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-yellow-300" /> Manufacturing</li>
                     <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-yellow-300" /> Quality</li>
                     <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-yellow-300" /> Timely dispatch</li>
                     <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-yellow-300" /> Consistency</li>
                  </ul>
               </div>
            </div>
         </motion.div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="relative max-w-7xl mx-auto px-6 py-16 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-[2.5rem] bg-white p-8 md:p-12 shadow-2xl border border-gray-100 relative z-10"
          >
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-text-dark mb-4">
                Let's Build Your Brand
              </h2>
              <p className="text-text-dark/70 text-lg font-medium">
                Fill out the inquiry form below and our manufacturing experts will connect with you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
              <FormField label="Full Name">
                <Input 
                  type="text" 
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </FormField>
              <FormField label="Phone Number">
                <Input 
                  type="tel" 
                  placeholder="Mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </FormField>
              <FormField label="Email Address">
                <Input 
                  type="email" 
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </FormField>
              <FormField label="Current Business">
                <Select
                  value={formData.businessType}
                  onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                >
                  <option value="">Select current business</option>
                  <option value="distributor">Feed Distributor</option>
                  <option value="dealer">Retail Dealer</option>
                  <option value="brand">Existing Brand Owner</option>
                  <option value="new">New Entrepreneur</option>
                </Select>
              </FormField>
              <div className="md:col-span-2">
                 <FormField label="Expected Volume (Monthly)">
                    <Input 
                      type="text" 
                      placeholder="E.g., 500 bags, 10 tons, etc."
                      value={formData.volume}
                      onChange={(e) => setFormData({...formData, volume: e.target.value})}
                      required
                    />
                 </FormField>
              </div>
              <div className="md:col-span-2">
                <FormField label="Additional Needs / Details">
                  <Textarea 
                    placeholder="Tell us about your brand vision, target market, or specific formulations required..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </FormField>
              </div>
              <div className="md:col-span-2 mt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full inline-flex items-center justify-center rounded-xl bg-primary px-8 py-5 text-lg font-extrabold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary-dark"
                >
                  Submit Inquiry
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Vision Box */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <div className="bg-primary/5 rounded-3xl p-8 md:p-10 border border-primary/20 h-full flex flex-col justify-center text-center">
              <h3 className="text-2xl font-black text-text-dark mb-6">Market Opportunity</h3>
              <Globe2 className="h-16 w-16 text-primary mx-auto mb-6" />
              <p className="text-text-dark/80 font-medium mb-8 leading-relaxed">
                India is one of the world's largest milk producers. Demand for balanced cattle nutrition is increasing rapidly due to rising milk consumption, commercial farming growth, and higher yield expectations.
              </p>
              
              <div className="mt-auto border-t border-primary/20 pt-8">
                <h4 className="text-xl font-bold text-text-dark mb-4">Start Strong With Us</h4>
                <p className="text-text-dark/70 font-medium mb-6">
                  Launching your own dairy feed brand now positions you in a high-growth industry with strong, long-term returns.
                </p>
                <div className="text-center font-black text-xl text-primary flex flex-col items-center gap-2">
                  <Image src="/images/logo-dairy-guruji.png" alt="Dairy Guru Ji Logo" width={80} height={80} className="rounded-full bg-[#131b23] p-2 shadow-sm mb-2" />
                  Your Brand. Our Expertise.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
