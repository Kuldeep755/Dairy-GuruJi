"use client";
import React from "react";
import {
  PhoneCall,
  MessageCircle,
  Mail,
  MapPin,
  Clock3,
  Globe,
  Building2,
} from "lucide-react";

const ContactPage = () => {
  return (
    <div className="relative min-h-screen bg-bg-light pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <header className="mb-12 overflow-hidden rounded-3xl border border-primary/20 bg-white shadow-xl shadow-green-900/10">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2 p-8 md:p-12">
              <p className="mb-4 inline-flex items-center rounded-full bg-secondary/20 px-4 py-2 text-xs font-black uppercase tracking-widest text-text-dark">
                संपर्क करें | Get Expert Guidance
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-text-dark leading-tight">
                Contact
                <span className="block text-primary">Dairy Guru Ji</span>
              </h1>
              <p className="mt-5 max-w-2xl text-text-dark/70 text-lg leading-relaxed">
                Need advice on dairy nutrition, product selection, or
                dealership opportunities? Our team is ready to support you.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:+918168048260"
                  className="inline-flex items-center gap-2 rounded-md bg-text-dark px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
                >
                  <PhoneCall size={16} />
                  Call +91 81680-48260
                </a>
                <a
                  href="https://wa.me/918168048260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-text-dark/15 bg-white px-5 py-3 text-sm font-bold text-text-dark transition hover:-translate-y-0.5"
                >
                  <MessageCircle size={16} />
                  WhatsApp Support
                </a>
              </div>
            </div>

            <div className="bg-text-dark p-8 md:p-10 text-white">
              <h2 className="text-xl font-black uppercase tracking-wide text-secondary">
                Updated Contact Details
              </h2>
              <div className="mt-6 space-y-5 text-sm">
                <div className="flex gap-3">
                  <Building2 size={18} className="mt-0.5 text-secondary" />
                  <div>
                    <p className="font-bold">Head Office</p>
                    <p className="text-white/75">South, WA (Australia)</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin size={18} className="mt-0.5 text-secondary" />
                  <div>
                    <p className="font-bold">Branch Office</p>
                    <p className="text-white/75">Sonipat, Haryana, India</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <PhoneCall size={18} className="mt-0.5 text-secondary" />
                  <div>
                    <p className="font-bold">Phone / WhatsApp</p>
                    <p className="text-white/75">+91 81680-48260</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail size={18} className="mt-0.5 text-secondary" />
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-white/75">dairyguruji@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Globe size={18} className="mt-0.5 text-secondary" />
                  <div>
                    <p className="font-bold">Website</p>
                    <a
                      href="https://www.dairyguruji.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/75 underline decoration-white/30 hover:text-white"
                    >
                      www.dairyguruji.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock3 size={18} className="mt-0.5 text-secondary" />
                  <div>
                    <p className="font-bold">Support Hours</p>
                    <p className="text-white/75">Monday to Saturday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-4 lg:col-span-1">
            <div className="rounded-2xl border border-primary/15 bg-white p-6 shadow-lg shadow-green-900/5">
              <p className="text-xs font-black uppercase tracking-widest text-primary">
                Quick Reach
              </p>
              <h3 className="mt-2 text-2xl font-black text-text-dark">
                Speak To Our Team
              </h3>
              <p className="mt-2 text-sm text-text-dark/70">
                For urgent enquiry, call or WhatsApp directly and get faster
                response from our team.
              </p>
              <div className="mt-5 grid gap-3">
                <a
                  href="tel:+918168048260"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-bold text-white transition hover:bg-primary/90"
                >
                  Call Expert Now
                </a>
                <a
                  href="https://wa.me/918168048260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-text-dark/15 bg-white px-4 py-3 text-sm font-bold text-text-dark transition hover:bg-bg-light"
                >
                  Start WhatsApp Chat
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 rounded-2xl border border-green-100 bg-white p-8 md:p-10 shadow-xl shadow-green-900/5">
            <h2 className="text-3xl font-black text-text-dark uppercase tracking-tight">
              Send an Enquiry
            </h2>
            <p className="mt-2 text-sm text-text-dark/65">
              Fill in your details and our team will connect with you shortly.
            </p>

            <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-widest text-text-dark/40">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-green-100 bg-bg-light/60 px-4 py-3 focus:border-primary focus:outline-none"
                  placeholder="Enter full name"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-widest text-text-dark/40">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full rounded-md border border-green-100 bg-bg-light/60 px-4 py-3 focus:border-primary focus:outline-none"
                  placeholder="Enter mobile number"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-xs font-black uppercase tracking-widest text-text-dark/40">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full rounded-md border border-green-100 bg-bg-light/60 px-4 py-3 focus:border-primary focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-xs font-black uppercase tracking-widest text-text-dark/40">
                  I Am A...
                </label>
                <select className="w-full rounded-md border border-green-100 bg-bg-light/60 px-4 py-3 focus:border-primary focus:outline-none">
                  <option>Dairy Farmer</option>
                  <option>Distributor / Wholesaler</option>
                  <option>Feed Manufacturing Partner</option>
                  <option>Sales Officer Aspirant</option>
                  <option>General Business Enquiry</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-xs font-black uppercase tracking-widest text-text-dark/40">
                  Your Message
                </label>
                <textarea
                  className="h-32 w-full rounded-md border border-green-100 bg-bg-light/60 px-4 py-4 focus:border-primary focus:outline-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full btn-primary uppercase tracking-widest">
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
