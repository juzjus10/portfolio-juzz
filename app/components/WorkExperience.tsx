"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BriefcaseBusiness, Clock3, Radar } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  stack: string[];
};

const experience: ExperienceItem[] = [
  {
    role: "Full-Stack Developer",
    company: "NYK-FIL Ship Management Inc.",
    period: "Jan 2024 - Jan 2026",
    highlights: [
      "Led the official website rebuild and internal platform delivery.",
      "Built an applicant screening system handling 1,000+ applications monthly.",
      "Architected Laravel, MySQL, and Redis infrastructure with real-time synchronization.",
      "Maintained 99%+ uptime through Docker, CI/CD, and Coolify production workflows.",
    ],
    stack: ["Laravel", "MySQL", "Redis", "Docker", "CI/CD"],
  },
  {
    role: "Freelance Full-Stack Developer & Automation Specialist",
    company: "Upwork",
    period: "Nov 2021 - Present",
    highlights: [
      "Delivered custom systems and automation pipelines for US and Canadian clients.",
      "Completed 10+ automation implementations with up to 90% manual-work reduction.",
      "Built robust integrations across third-party APIs with resilient auth and recovery flows.",
      "Designed scraping and orchestration flows using Selenium, Puppeteer, and Camoufox.",
    ],
    stack: ["Next.js", "Python", "Selenium", "Puppeteer", "n8n"],
  },
];

const summary = [
  "10+ automation systems shipped",
  "90% manual entry reduction on key flows",
  "International clients across operations-heavy domains",
];

export default function WorkExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".we-kicker", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.fromTo(
        ".we-title span",
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
            trigger: ".we-title",
            start: "top 95%",
            end: "top 20%",
            scrub: 2.8,
          },
        },
      );

      const route = sectionRef.current?.querySelector<SVGPathElement>(".we-route");
      if (route) {
        const length = route.getTotalLength();
        gsap.set(route, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
        gsap.to(route, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 60%",
            scrub: true,
          },
        });
      }

      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          const section = sectionRef.current;
          const track = trackRef.current;
          if (!section || !track) return;

          const getTravelDistance = () => {
            const viewport = track.parentElement;
            if (!viewport) return 0;

            const viewportRect = viewport.getBoundingClientRect();
            const nav = document.querySelector<HTMLElement>("nav");

            let rightOverlap = 0;
            if (nav) {
              const navRect = nav.getBoundingClientRect();
              rightOverlap = Math.max(0, viewportRect.right - navRect.left + 16);
            }

            const visibleWidth = Math.max(viewport.clientWidth - rightOverlap, 320);
            return Math.max(track.scrollWidth - visibleWidth + 64, 0);
          };

          const horizontalTween = gsap.to(track, {
            x: () => -getTravelDistance(),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${getTravelDistance() + window.innerHeight * 0.75}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          const panels = gsap.utils.toArray<HTMLElement>(".we-panel");
          panels.forEach((panel) => {
            gsap.fromTo(
              panel,
              { autoAlpha: 0.3, y: 30, clipPath: "inset(10% 0% 18% 0%)" },
              {
                autoAlpha: 1,
                y: 0,
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                scrollTrigger: {
                  trigger: panel,
                  containerAnimation: horizontalTween,
                  start: "left 85%",
                  end: "left 45%",
                  scrub: true,
                },
              },
            );
          });

          gsap.fromTo(
            ".we-progress-fill",
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: section,
                  start: "top top",
                  end: () => `+=${getTravelDistance() + window.innerHeight * 0.75}`,
                  scrub: true,
                },
              },
            );
        },

        "(max-width: 1023px)": () => {
          gsap.from(".we-stack-card", {
            y: 70,
            opacity: 0,
            stagger: 0.16,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".we-mobile-stack",
              start: "top 82%",
              end: "top 45%",
              scrub: 0.8,
            },
          });

          gsap.fromTo(
            ".we-progress-fill-mobile",
            { scaleY: 0, transformOrigin: "top center" },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: ".we-mobile-stack",
                start: "top 80%",
                end: "bottom bottom",
                scrub: true,
              },
            },
          );
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <svg viewBox="0 0 1200 420" className="h-full w-full fill-none stroke-white/10">
          <path className="we-route" d="M40 290 C230 220, 370 360, 580 250 S960 150, 1160 220" />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-24 lg:py-0">
        <div className="relative z-10 mb-12 lg:mb-10 lg:pt-20">
          <p className="we-kicker mb-4 font-mono text-[11px] uppercase tracking-[0.34em] text-rose-300/80">Experience</p>
          <h2 className="we-title overflow-hidden pb-[0.12em] text-4xl leading-[0.9] text-white md:text-5xl lg:max-w-4xl">
            {"Scaling systems where reliability is non-negotiable".split(" ").map((word, index) => (
              <span key={`${word}-${index}`} className="blur-reveal-word mr-[0.34ch] inline-block">
                {word}
              </span>
            ))}
          </h2>
        </div>

        <div className="relative z-10 mb-8 hidden lg:block">
          <div className="h-px w-full bg-white/10">
            <span className="we-progress-fill block h-full w-full bg-gradient-to-r from-rose-300/80 via-white/40 to-transparent" />
          </div>
        </div>

        <div ref={trackRef} className="we-track relative z-10 hidden w-max gap-6 pb-24 pl-1 pr-52 xl:pr-60 lg:flex">
          {experience.map((item) => (
            <article
              key={item.company}
              className="we-panel ascii-card w-[78vw] max-w-[860px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm"
            >
              <div className="mb-8 flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-rose-300/80">{item.period}</p>
                  <h3 className="mt-2 text-3xl leading-tight text-white">{item.role}</h3>
                  <p className="mt-2 text-base text-gray-300">{item.company}</p>
                </div>
                <BriefcaseBusiness className="h-8 w-8 text-white/40" />
              </div>

              <ul className="space-y-3 text-sm leading-relaxed text-gray-300 md:text-base">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-300/80" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-8 flex flex-wrap gap-2">
                {item.stack.map((entry) => (
                  <li
                    key={entry}
                    className="border border-white/10 bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400"
                  >
                    {entry}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <aside className="we-panel ascii-card w-[62vw] max-w-[700px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-8">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-2xl text-white">Impact Summary</h3>
              <Radar className="h-8 w-8 text-rose-300/80" />
            </div>

            <ul className="space-y-4">
              {summary.map((item) => (
                <li key={item} className="ascii-card border border-white/10 bg-black/30 px-4 py-4 text-base text-gray-300">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="ascii-card border border-white/10 bg-black/30 px-4 py-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gray-500">Location</p>
                <p className="mt-2 text-white">Manila, Philippines</p>
              </div>
              <div className="ascii-card border border-white/10 bg-black/30 px-4 py-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gray-500">Current Focus</p>
                <p className="mt-2 text-white">Enterprise + Automation</p>
              </div>
            </div>
          </aside>
        </div>

        <div className="we-mobile-stack relative z-10 grid grid-cols-1 gap-5 lg:hidden">
          <div className="pointer-events-none absolute bottom-0 left-2 top-0">
            <span className="block h-full w-px bg-white/10" />
            <span className="we-progress-fill-mobile absolute left-0 top-0 block h-full w-px bg-gradient-to-b from-rose-300/80 to-transparent" />
          </div>

          {experience.map((item) => (
            <article
              key={item.company}
              className="we-stack-card ascii-card relative ml-6 border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="absolute -left-[27px] top-6 h-2.5 w-2.5 rounded-full border border-white/40 bg-brand-dark" />

              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-rose-300/80">{item.period}</p>
              <h3 className="mt-2 text-xl leading-tight text-white">{item.role}</h3>
              <p className="mt-1 text-sm text-gray-300">{item.company}</p>

              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                {item.highlights.slice(0, 3).map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <Clock3 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-rose-300/80" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
