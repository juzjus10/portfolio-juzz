"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  title: string;
  meta: string;
  outcome: string;
  description: string;
  stack: string[];
  cta?: { label: string; href: string };
};

const projects: Project[] = [
  {
    title: "Applicant Screening Platform",
    meta: "NYK-FIL / 2024-2026",
    outcome: "1,000+ applications screened every month",
    description:
      "Replaced manual recruitment filtering with a real-time screening workflow for six technical officers.",
    stack: ["Laravel", "MySQL", "Redis", "WebSockets"],
    cta: {
      label: "View Live Platform",
      href: "https://production.nykfil.com.ph",
    },
  },
  {
    title: "Health Insurance Commission Automation",
    meta: "URMedicare LLC. / Automation",
    outcome: "Processing time reduced from days to hours",
    description:
      "Orchestrated multi-source commission computations into a resilient automated pipeline with audit-ready outputs.",
    stack: ["Python", "Node.js", "n8n", "API Integration"],
  },
  {
    title: "Special Education Contract Generator",
    meta: "Mini-Stack.com / Automation",
    outcome: "85% faster contract preparation",
    description:
      "Engineered a browser automation flow for high-volume student contracts with consistent formatting and validation.",
    stack: ["Python", "Selenium", "Workflow Automation"],
  },
  {
    title: "Scraping and Integration Pipelines",
    meta: "Upwork",
    outcome: "Up to 90% less manual data entry",
    description:
      "Built fault-tolerant extraction and delivery pipelines connected to client systems with retry logic and monitoring.",
    stack: ["Puppeteer", "Camoufox", "DigitalOcean", "REST APIs"],
  },
];

const metrics = [
  { label: "Projects Delivered", value: "10+" },
  { label: "Production Uptime", value: "99%+" },
  { label: "Years Building", value: "4+" },
];

export default function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fw-eyebrow", {
        y: 22,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      });

      gsap.fromTo(
        ".fw-headline span",
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
            trigger: ".fw-headline",
            start: "top 95%",
            end: "top 20%",
            scrub: 2.8,
          },
        },
      );

      gsap.from(".fw-intro", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".fw-metric", {
        y: 22,
        opacity: 0,
        stagger: 0.09,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".fw-stats",
          start: "top 84%",
        },
      });

      const cards = gsap.utils.toArray<HTMLElement>(".fw-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            y: 90,
            autoAlpha: 0,
            clipPath: "inset(18% 0% 22% 0%)",
          },
          {
            y: 0,
            autoAlpha: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 40%",
              scrub: 0.8,
            },
          },
        );

        const glow = card.querySelector<HTMLElement>(".fw-card-glow");
        if (glow) {
          gsap.fromTo(
            glow,
            { opacity: 0.15 },
            {
              opacity: 0.7,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 35%",
                scrub: true,
              },
            },
          );
        }
      });

      gsap.fromTo(
        ".fw-progress-fill",
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 20%",
            end: "bottom bottom",
            scrub: true,
          },
        },
      );

      gsap.to(".fw-ambient", {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      <div className="fw-ambient pointer-events-none absolute -top-32 right-[-15%] h-[480px] w-[480px] rounded-full bg-gradient-to-b from-white/10 via-white/0 to-transparent blur-3xl" />

      <div className="container mx-auto px-6 py-28 lg:py-36">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <aside className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
            <p className="fw-eyebrow mb-5 font-mono text-[11px] tracking-[0.35em] text-rose-300/80 uppercase">
              Selected Build Stories
            </p>

            <h2 className="fw-headline mb-6 overflow-hidden font-pixel text-4xl leading-[0.88] text-white md:text-5xl">
              {"From concept to production impact".split(" ").map((word, index) => (
                <span key={`${word}-${index}`} className="blur-reveal-word mr-[0.35ch] inline-block">
                  {word}
                </span>
              ))}
            </h2>

            <p className="fw-intro max-w-md text-sm leading-relaxed text-gray-400 md:text-base">
              I design operational systems that remove bottlenecks, collapse manual effort, and create measurable outcomes.
              This chapter shows the work behind those numbers.
            </p>

            <div className="fw-stats mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="fw-metric ascii-card border border-white/10 bg-white/[0.03] px-4 py-4 backdrop-blur-sm"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gray-500">{metric.label}</p>
                  <p className="mt-2 font-sans text-2xl tracking-tight text-white">{metric.value}</p>
                </div>
              ))}
            </div>
          </aside>

          <div className="relative lg:col-span-8">
            <div className="pointer-events-none absolute left-[-30px] top-0 hidden h-full items-start lg:flex">
              <span className="block h-full w-px bg-white/10" />
              <span className="fw-progress-fill absolute left-0 top-0 block h-full w-px bg-gradient-to-b from-rose-300/80 via-rose-300/30 to-transparent" />
            </div>

            <div className="space-y-9 lg:space-y-10">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="fw-card ascii-card group relative overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-7 md:p-8"
                >
                  <div className="fw-card-glow pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_46%)]" />

                  <div className="relative z-10 flex flex-col gap-7">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-rose-300/80">{project.meta}</p>
                        <h3 className="mt-2 text-2xl tracking-tight text-white md:text-3xl">{project.title}</h3>
                      </div>
                      <span className="text-5xl leading-none text-white/10 md:text-6xl">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                    </div>

                    <p className="max-w-xl text-sm leading-relaxed text-gray-300 md:text-base">{project.description}</p>

                    <div className="grid gap-6 md:grid-cols-[1.2fr_auto] md:items-end">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gray-500">Outcome</p>
                        <p className="mt-2 text-xl tracking-tight text-white">{project.outcome}</p>
                      </div>

                      {project.cta ? (
                        <a
                          href={project.cta.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 border border-white/20 bg-white/[0.02] px-4 py-2 text-xs tracking-[0.22em] text-white uppercase transition-all duration-300 hover:border-rose-300/60 hover:bg-white/10"
                        >
                          {project.cta.label}
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      ) : null}
                    </div>

                    <ul className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <li
                          key={item}
                          className="border border-white/10 bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
