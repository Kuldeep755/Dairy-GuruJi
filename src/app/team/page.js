"use client";

import Image from "next/image";
import { CheckCircle2, Linkedin, Sparkles } from "lucide-react";
import { teamMembers } from "@/lib/data";

const ringStyles = [
  {
    ring: "from-primary to-primary/70",
    role: "text-primary",
    chip: "bg-primary/10 text-primary border-primary/15",
    icon: "text-primary",
  },
  {
    ring: "from-secondary to-secondary/70",
    role: "text-[#9b6a00]",
    chip: "bg-secondary/15 text-text-dark border-secondary/30",
    icon: "text-[#9b6a00]",
  },
  {
    ring: "from-accent to-primary/80",
    role: "text-primary",
    chip: "bg-accent/15 text-primary border-primary/15",
    icon: "text-primary",
  },
];

export default function TeamPage() {
  const founder = teamMembers.find((member) => member.isFounder);
  const ceo = teamMembers.find((member) => member.isCEO);
  const remainingMembers = teamMembers.filter(
    (member) => !member.isFounder && !member.isCEO,
  );

  const showcaseMembers = [founder, ceo, ...remainingMembers].filter(Boolean);

  return (
    <main className="relative overflow-hidden ">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden w-full ">
        <Image
          src="/images/team/team.jpeg"
          alt="Dairy Guru Ji Team Hero"
          fill
          className="object-cover w-full "
          priority
        />
      </section>
      <section className="relative px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-primary">
                Dairy Guru Ji Team
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-black uppercase leading-none text-text-dark md:text-6xl">
              Meet The Team
              <span className="mt-3 block text-primary">Our Professionals</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-dark/70 md:text-lg">
              The people behind Dairy Guru Ji who turn field knowledge,
              practical nutrition, and farmer-first support into daily action.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {showcaseMembers.map((member, index) => {
              const style = ringStyles[index % ringStyles.length];

              return (
                <article
                  key={member.name}
                  className="group mx-auto flex h-full w-full max-w-[22rem] flex-col rounded-[1.6rem] border border-primary/10 bg-white/80 px-5 py-6 text-center shadow-[0_14px_40px_rgba(23,36,50,0.07)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <div className="mx-auto flex w-full max-w-[15rem] justify-center">
                    <div
                      className={`relative h-48 w-48 rounded-full bg-gradient-to-br p-[6px] shadow-[0_14px_28px_rgba(31,125,70,0.12)] ${style.ring}`}
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-full border-[8px] border-white bg-[#f3efe4]">
                        <Image
                          src={member.image || "/images/about/hero.jpeg"}
                          alt={member.name}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-1 flex-col">
                    <p className="text-xs font-black uppercase tracking-[0.35em] text-text-dark/45">
                      {member.department}
                    </p>
                    <h2 className="mt-3 text-2xl font-black uppercase tracking-tight text-text-dark">
                      {member.name}
                    </h2>
                    <p
                      className={`mt-3 text-sm font-black uppercase tracking-[0.22em] ${style.role}`}
                    >
                      {member.role}
                    </p>

                    <p className="mt-5 text-sm leading-7 text-text-dark/72">
                      {member.bio}
                    </p>

                    {member.expertise?.length > 0 && (
                      <div className="mt-6 flex flex-wrap justify-center gap-2">
                        {member.expertise.slice(0, 4).map((item) => (
                          <span
                            key={item}
                            className={`rounded-full border px-3 py-1 text-[11px] font-bold ${style.chip}`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* <div className="mt-6 flex items-center justify-center border-t border-primary/10 pt-4">
                      <a
                        href={member.linkedin}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 bg-white text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-white"
                        title={`${member.name} on LinkedIn`}
                      >
                        <Linkedin size={16} />
                      </a>
                    </div> */}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
