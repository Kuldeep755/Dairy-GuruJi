"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Microscope,
  ShieldCheck,
  Linkedin,
  Award,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { teamMembers } from "@/lib/data";

const departmentColors = {
  Leadership: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    icon: Users,
  },
  "Science & R&D": {
    bg: "bg-purple-50",
    border: "border-purple-200",
    badge: "bg-purple-100 text-purple-700",
    icon: Microscope,
  },
  Operations: {
    bg: "bg-green-50",
    border: "border-green-200",
    badge: "bg-green-100 text-green-700",
    icon: ShieldCheck,
  },
  "Marketing & Education": {
    bg: "bg-orange-50",
    border: "border-orange-200",
    badge: "bg-orange-100 text-orange-700",
    icon: GraduationCap,
  },
  "Quality & Safety": {
    bg: "bg-red-50",
    border: "border-red-200",
    badge: "bg-red-100 text-red-700",
    icon: ShieldCheck,
  },
};

export default function TeamPage() {
  const [selectedDept, setSelectedDept] = useState(null);

  const founder = teamMembers.find((m) => m.isFounder);
  const ceo = teamMembers.find((m) => m.isCEO);
  const otherTeamMembers = teamMembers.filter((m) => !m.isFounder && !m.isCEO);

  const departments = Array.from(
    new Set(otherTeamMembers.map((m) => m.department)),
  );
  const filteredTeam = selectedDept
    ? otherTeamMembers.filter((m) => m.department === selectedDept)
    : otherTeamMembers;

  return (
    <main className="relative min-h-screen pt-20 bg-surface">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/team/team_hero.png"
          alt="Dairy Guru Ji Team Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight"
          >
            Meet The <span className="text-secondary italic">Experts</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 font-medium"
          >
            The passionate team behind Dairy Guru Ji innovation and farmer-first
            support.
          </motion.p>
        </div>
      </section>

      {/* Leadership Section - Founder & CEO */}
      {(founder || ceo) && (
        <section className="py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                <Sparkles size={16} className="text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Leadership
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-text-dark mb-4">
                Visionary <span className="text-primary">Leaders</span>
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-text-dark/70">
                Guiding Dairy Guru Ji mission to transform Indian dairy farming
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Founder */}
              {founder && (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100 shadow-xl mb-8">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      Founder
                    </span>
                    <h3 className="text-3xl font-black text-text-dark mb-2 mt-2">
                      {founder.name}
                    </h3>
                    <p className="text-lg font-bold text-primary uppercase tracking-widest mb-6">
                      {founder.role}
                    </p>

                    <p className="text-base text-text-dark/80 leading-relaxed mb-8">
                      {founder.bio}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-4 mb-8">
                      {founder.expertise.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2
                            size={20}
                            className="text-secondary shrink-0 mt-1"
                          />
                          <span className="text-text-dark/80 font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Highlight */}
                    {founder.highlight && (
                      <div className="bg-primary/5 border-l-4 border-primary pl-6 py-4">
                        <p className="font-bold text-text-dark mb-1">
                          Key Achievement
                        </p>
                        <p className="text-text-dark/70">{founder.highlight}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* CEO */}
              {ceo && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <div className="relative w-full aspect-3/4 rounded-3xl overflow-hidden bg-gray-100 shadow-xl mb-8">
                    <Image
                      src={ceo.image}
                      alt={ceo.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      Chief Executive Officer
                    </span>
                    <h3 className="text-3xl font-black text-text-dark mb-2 mt-2">
                      {ceo.name}
                    </h3>
                    <p className="text-lg font-bold text-primary uppercase tracking-widest mb-6">
                      {ceo.role}
                    </p>

                    <p className="text-base text-text-dark/80 leading-relaxed mb-8">
                      {ceo.bio}
                    </p>

                    <div className="space-y-4 mb-8">
                      {ceo.expertise.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2
                            size={20}
                            className="text-secondary shrink-0 mt-1"
                          />
                          <span className="text-text-dark/80 font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {ceo.highlight && (
                      <div className="bg-primary/5 border-l-4 border-primary pl-6 py-4">
                        <p className="font-bold text-text-dark mb-1">
                          Key Achievement
                        </p>
                        <p className="text-text-dark/70">{ceo.highlight}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredTeam.map((member, index) => {
              const deptConfig = departmentColors[member.department];
              const DeptIcon = deptConfig?.icon || Users;

              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group flex flex-col h-full rounded-[2.5rem] border transition-all duration-500 overflow-hidden hover:shadow-2xl ${deptConfig?.border} ${deptConfig?.bg}`}
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden">
                    <Image
                      src={member.image || "/images/about/hero.jpeg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Department Badge */}
                    <div className="absolute top-4 right-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm ${deptConfig?.badge}`}
                      >
                        <DeptIcon size={14} />
                        <span className="text-xs font-bold uppercase">
                          {member.department}
                        </span>
                      </motion.div>
                    </div>

                    {/* Achievement highlight on hover */}
                    {member.highlight && (
                      <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-4 bg-gradient-to-t from-black to-transparent">
                        <div className="flex items-start gap-2 text-white">
                          <Award
                            size={16}
                            className="mt-0.5 shrink-0 text-secondary"
                          />
                          <p className="text-xs font-medium leading-tight">
                            {member.highlight}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Info Container */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-black text-text-dark mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">
                      {member.role}
                    </p>

                    <p className="text-text-dark/70 text-sm leading-relaxed mb-6 flex-grow">
                      {member.bio}
                    </p>

                    {/* Expertise Badges */}
                    {member.expertise && (
                      <div className="mb-6 flex flex-wrap gap-2">
                        {member.expertise.map((exp) => (
                          <span
                            key={exp}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Social Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                      <motion.a
                        href={member.linkedin}
                        whileHover={{ scale: 1.1 }}
                        className="p-2 rounded-lg hover:bg-primary/10 text-primary transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-text-dark mb-8 leading-tight">
                Our Shared <span className="text-primary italic">Values</span>
              </h2>
              <p className="text-lg text-text-dark/70 leading-relaxed max-w-xl">
                Our team isn&apos;t just composed of experts; we are people who
                believe in the growth of Indian rural communities. We operate on
                a foundation of trust, scientific rigor, and farmer-first
                empathy.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Trust",
                  icon: Users,
                  desc: "Building long-term on-field partnerships.",
                },
                {
                  title: "Science",
                  icon: Microscope,
                  desc: "Evidence-backed nutritional formulations.",
                },
                {
                  title: "Integrity",
                  icon: ShieldCheck,
                  desc: "Never taking shortcuts with cattle health.",
                },
                {
                  title: "Growth",
                  icon: GraduationCap,
                  desc: "Empowering farmers for higher profitability.",
                },
              ].map((value) => (
                <motion.div
                  key={value.title}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-[2rem] bg-surface border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="text-primary mb-4">
                    <value.icon size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-text-dark mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-text-dark/70">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-text-dark mb-4">
            Join Our Mission
          </h2>
          <p className="text-lg text-text-dark/70 mb-8">
            Are you passionate about transforming Indian dairy farming?
            We&apos;re always looking for talented individuals to join our team.
          </p>
          <motion.a
            href="/careers"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold uppercase rounded-full hover:shadow-lg transition-shadow"
          >
            <CheckCircle2 size={20} />
            Explore Careers
          </motion.a>
        </div>
      </section>
    </main>
  );
}
