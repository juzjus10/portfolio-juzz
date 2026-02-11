"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpenText, GraduationCap, PointerIcon, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const focusAreas = [
  "Software architecture fundamentals",
  "Systems analysis and database design",
  "Frontend and backend engineering principles",
  "Applied project delivery for real-world constraints",
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".edu-kicker", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
        },
      });

      gsap.fromTo(
        ".edu-title span",
        {
          yPercent: 120,
          autoAlpha: 0,
          filter: "blur(22px)",
        },
        {
          yPercent: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          stagger: 0.06,
          duration: 1.35,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".edu-title",
            start: "top 95%",
            end: "top 20%",
            scrub: 2.8,
          },
        },
      );

      gsap.fromTo(
        ".edu-card-main",
        {
          clipPath: "inset(14% 0% 20% 0%)",
          autoAlpha: 0,
          y: 60,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".edu-card-main",
            start: "top 84%",
            end: "top 44%",
            scrub: 0.7,
          },
        },
      );

      gsap.from(".edu-focus-item", {
        y: 24,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".edu-focus-list",
          start: "top 84%",
        },
      });

      gsap.to(".edu-scan", {
        yPercent: 110,
        repeat: -1,
        duration: 2.4,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <p className="edu-kicker mb-4 font-mono text-[11px] uppercase tracking-[0.34em] text-rose-300/80">Education</p>

        <h2 className="edu-title mb-10 overflow-hidden text-4xl leading-[0.9] text-white md:text-5xl">
          {"The technical foundation behind every build".split(" ").map((word, index) => (
            <span key={`${word}-${index}`} className="blur-reveal-word mr-[0.34ch] inline-block">
              {word}
            </span>
          ))}
        </h2>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <article className="edu-card-main ascii-card relative overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-8 md:p-10 lg:col-span-7">
            <div className="edu-scan pointer-events-none absolute inset-x-0 top-[-110%] h-24 bg-gradient-to-b from-transparent via-white/15 to-transparent" />

            <div className="relative z-10">
              <div className="mb-8 flex items-center justify-between">
                <GraduationCap className="h-9 w-9 text-rose-300/90" />
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-gray-500">2019 - 2023</span>
              </div>

              <h3 className="text-3xl leading-tight text-white md:text-4xl">Bachelor of Science in Information Technology</h3>
              <p className="mt-4 text-base text-gray-300">Universidad de Manila</p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="ascii-card border border-white/10 bg-black/30 px-4 py-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500">GPA</p>
                  <p className="mt-2 text-2xl text-white">3.25</p>
                </div>
                <div className="ascii-card border border-white/10 bg-black/30 px-4 py-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500">Degree Type</p>
                  <p className="mt-2 text-white">Bachelor's Degree</p>
                </div>
                <div className="ascii-card border border-white/10 bg-black/30 px-4 py-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500">Focus</p>
                  <p className="mt-2 text-white">Software Delivery</p>
                </div>
              </div>
            </div>
          </article>

          <aside className="ascii-card border border-white/10 bg-white/[0.03] p-6 md:p-8 lg:col-span-5">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl text-white">Core Focus Areas</h3>
              <BookOpenText className="h-6 w-6 text-white/50" />
            </div>

            <ul className="edu-focus-list space-y-3">
              {focusAreas.map((item) => (
                <li key={item} className="edu-focus-item ascii-card flex gap-3 border border-white/10 bg-black/25 px-3 py-3 text-sm text-gray-300">
                  <PointerIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-300/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 border-t border-white/10 pt-6 text-sm leading-relaxed text-gray-400">
              Built a strong foundation in systems thinking and applied engineering, now sharpened through enterprise and
              freelance production work.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
