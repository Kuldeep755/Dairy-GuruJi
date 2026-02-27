"use client";
import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarClock,
  CircleDollarSign,
  FileText,
  GraduationCap,
  HeartHandshake,
  MapPin,
  PhoneCall,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

const CareersPage = () => {
  const whyJoin = [
    {
      title: "Farmer-First Mission",
      desc: "Your work directly supports dairy families and real farm outcomes.",
      icon: HeartHandshake,
    },
    {
      title: "Fast Career Growth",
      desc: "Take ownership early and grow with a rapidly expanding team.",
      icon: TrendingUp,
    },
    {
      title: "Learning Culture",
      desc: "Build practical field understanding with structured technical mentorship.",
      icon: GraduationCap,
    },
    {
      title: "Strong Team Support",
      desc: "Collaborate with honest, execution-focused people across functions.",
      icon: Users,
    },
  ];

  const openings = [
    {
      role: "Area Sales Officer",
      type: "Full-time",
      location: "Punjab & Haryana",
      department: "Sales",
    },
    {
      role: "Technical Dairy Advisor",
      type: "Full-time",
      location: "Rajasthan",
      department: "Technical",
    },
    {
      role: "Marketing Executive",
      type: "Full-time",
      location: "Jaipur (Hybrid)",
      department: "Marketing",
    },
    {
      role: "Operations Coordinator",
      type: "Full-time",
      location: "Delhi NCR",
      department: "Operations",
    },
  ];

  const process = [
    {
      step: "Application Review",
      detail: "We evaluate your profile for role-fit and field relevance.",
      icon: FileText,
    },
    {
      step: "Discussion Round",
      detail: "A practical discussion with the hiring team on experience and approach.",
      icon: Users,
    },
    {
      step: "Final Evaluation",
      detail: "Role expectations, growth path, and compensation alignment.",
      icon: BadgeCheck,
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#f7f4ea] via-[#f3efdf] to-[#f8f6ee] pb-24 pt-28">
      <div className="pointer-events-none absolute -top-24 left-[-10%] h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute top-10 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-secondary/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <section className="relative overflow-hidden rounded-3xl border border-primary/15 bg-white p-8 shadow-xl md:p-12">
          <div className="absolute -right-24 -top-20 h-64 w-64 rounded-full bg-primary/10" />
          <div className="absolute -bottom-28 left-20 h-56 w-56 rounded-full bg-secondary/20" />

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-primary">
                <Sparkles className="h-4 w-4" />
                Careers at Dairy Guru Ji
              </span>
              <h1 className="mt-5 text-4xl font-black leading-tight text-text-dark md:text-6xl">
                Grow Your Career With
                <span className="mt-2 block text-primary">Real On-Ground Impact</span>
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-dark/75 md:text-lg">
                Join a team focused on farmer prosperity, scientific nutrition,
                and ethical growth. If you are ownership-driven and serious
                about execution, we would like to hear from you.
              </p>

              <div className="mt-7 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
                {[
                  "High ownership",
                  "Field-driven work",
                  "Learning support",
                  "Growth path",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-primary/10 bg-bg-light px-3 py-3 text-center text-xs font-bold text-text-dark/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-primary/15 bg-bg-light p-6 shadow-sm">
              <h2 className="text-lg font-black uppercase tracking-wider text-text-dark">
                Quick Apply Details
              </h2>
              <div className="mt-4 space-y-4 text-sm">
                <div>
                  <p className="font-bold text-text-dark">Email Resume</p>
                  <p className="text-text-dark/70">dairyguruji@gmail.com</p>
                </div>
                <div>
                  <p className="font-bold text-text-dark">Phone</p>
                  <p className="text-text-dark/70">+91 81680-48260</p>
                </div>
                <div>
                  <p className="font-bold text-text-dark">Mode</p>
                  <p className="text-text-dark/70">Field / Hybrid (Role dependent)</p>
                </div>
              </div>
              <a
                href="tel:+918168048260"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-text-dark px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
              >
                <PhoneCall className="h-4 w-4" />
                Talk to Hiring Team
              </a>
            </div>
          </div>
        </section>

        <section className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div>
              <h2 className="text-3xl font-black text-text-dark md:text-4xl">
                Why Join Us
              </h2>
              <p className="mt-2 text-text-dark/70">
                A mission-led workplace with clear accountability and long-term growth.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {whyJoin.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-primary/12 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-black text-text-dark">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-dark/70">{item.desc}</p>
                </article>
              ))}
            </div>

            <div className="rounded-2xl border border-primary/12 bg-white p-6 shadow-sm md:p-8">
              <h3 className="text-2xl font-black text-text-dark">Open Positions</h3>
              <div className="mt-5 space-y-3">
                {openings.map((job) => (
                  <div
                    key={job.role}
                    className="rounded-xl border border-primary/10 bg-bg-light p-4"
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="font-black text-text-dark">{job.role}</p>
                        <p className="mt-0.5 text-sm text-text-dark/70">
                          {job.department} • {job.type}
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="rounded-3xl border border-primary/20 bg-white p-7 shadow-xl md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-text-dark">
              <BriefcaseBusiness className="h-4 w-4" />
              Application Form
            </div>
            <h3 className="mt-5 text-3xl font-black text-text-dark">Apply Now</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-dark/70">
              Submit your details and resume. If your profile matches, our team
              will contact you quickly.
            </p>

            <form className="mt-6 space-y-4">
              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-widest text-text-dark/50">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-lg border border-primary/15 bg-bg-light px-4 py-3 text-sm placeholder:text-text-dark/45 focus:outline-none focus:ring-2 focus:ring-primary/35"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-widest text-text-dark/50">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@email.com"
                  required
                  className="w-full rounded-lg border border-primary/15 bg-bg-light px-4 py-3 text-sm placeholder:text-text-dark/45 focus:outline-none focus:ring-2 focus:ring-primary/35"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-widest text-text-dark/50">
                  Role Interested In
                </label>
                <select className="w-full rounded-lg border border-primary/15 bg-bg-light px-4 py-3 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/35">
                  <option>Area Sales Officer</option>
                  <option>Technical Dairy Advisor</option>
                  <option>Marketing Executive</option>
                  <option>Operations Coordinator</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-widest text-text-dark/50">
                  Expected CTC (Optional)
                </label>
                <div className="relative">
                  <CircleDollarSign className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-dark/45" />
                  <input
                    type="text"
                    placeholder="Enter annual CTC"
                    className="w-full rounded-lg border border-primary/15 bg-bg-light py-3 pl-9 pr-4 text-sm placeholder:text-text-dark/45 focus:outline-none focus:ring-2 focus:ring-primary/35"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-widest text-text-dark/50">
                  Upload Resume (PDF)
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  required
                  className="w-full rounded-lg border border-dashed border-primary/25 bg-primary/5 px-4 py-3 text-sm text-text-dark/80 file:mr-4 file:rounded-md file:border-0 file:bg-secondary file:px-3 file:py-1.5 file:font-bold file:text-text-dark"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3.5 text-sm font-black uppercase tracking-wider text-white transition hover:translate-y-[-1px]"
              >
                Submit Application
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </aside>
        </section>

        <section className="mt-14 rounded-3xl border border-primary/15 bg-white p-8 shadow-lg md:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-black text-text-dark">Hiring Process</h2>
              <p className="mt-2 text-sm text-text-dark/70">
                Transparent and practical process with fast communication.
              </p>
            </div>

            <div className="space-y-4 lg:col-span-2">
              {process.map((item, index) => (
                <div
                  key={item.step}
                  className="flex gap-4 rounded-xl border border-primary/10 bg-bg-light p-4"
                >
                  <div className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-primary">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-1 font-black text-text-dark">{item.step}</h3>
                    <p className="mt-1 text-sm text-text-dark/70">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-primary/12 bg-white p-5">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <CalendarClock className="h-5 w-5" />
            </div>
            <h3 className="mt-3 font-black text-text-dark">Timely Process</h3>
            <p className="mt-1 text-sm text-text-dark/70">Shortlisting and updates shared quickly.</p>
          </div>
          <div className="rounded-2xl border border-primary/12 bg-white p-5">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h3 className="mt-3 font-black text-text-dark">Growth Focused</h3>
            <p className="mt-1 text-sm text-text-dark/70">Role clarity, metrics, and performance-based progression.</p>
          </div>
          <div className="rounded-2xl border border-primary/12 bg-white p-5">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <BriefcaseBusiness className="h-5 w-5" />
            </div>
            <h3 className="mt-3 font-black text-text-dark">Meaningful Work</h3>
            <p className="mt-1 text-sm text-text-dark/70">Contribute to business outcomes that help farmers scale sustainably.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CareersPage;
