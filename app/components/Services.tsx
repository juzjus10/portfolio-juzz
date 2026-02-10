"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Activity, Boxes, Cable, Cog } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Full-Stack Application Engineering",
    copy: "Builds production-ready web platforms using Next.js, React, Laravel, and Node.js with scalable architecture.",
    stack: ["TypeScript", "Next.js", "Laravel", "MySQL", "Redis"],
    icon: Boxes,
  },
  {
    title: "Automation System Design",
    copy: "Transforms repetitive operations into resilient automation flows for recruiting, finance, and document pipelines.",
    stack: ["Python", "Selenium", "Puppeteer", "n8n", "Camoufox"],
    icon: Cog,
  },
  {
    title: "API and Real-Time Integration",
    copy: "Connects disconnected tools with secure APIs, event systems, and dependable recovery mechanisms.",
    stack: ["REST APIs", "WebSockets", "Pusher", "Auth Flows", "Error Recovery"],
    icon: Cable,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-kicker", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      });

      gsap.fromTo(
        ".services-headline span",
        {
          yPercent: 120,
          autoAlpha: 0,
          filter: "blur(22px)",
        },
        {
          yPercent: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          stagger: 0.05,
          duration: 1.35,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-headline",
            start: "top 95%",
            end: "top 20%",
            scrub: 2.8,
          },
        },
      );

      gsap.from(".services-intro", {
        y: 28,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.fromTo(
        ".services-progress-fill",
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 30%",
            end: "bottom 40%",
            scrub: true,
          },
        },
      );

      gsap.from(".service-card", {
        y: 70,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 82%",
          end: "top 42%",
          scrub: 0.8,
        },
      });

      gsap.to(".service-ambient", {
        xPercent: 14,
        yPercent: -10,
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
      <div className="service-ambient pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-gradient-to-tr from-white/5 via-white/0 to-transparent blur-2xl" />

      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="mb-12 lg:mb-14">
          <p className="services-kicker mb-4 font-mono text-[11px] uppercase tracking-[0.34em] text-rose-300/80">
            Services
          </p>

          <h2 className="services-headline overflow-hidden text-4xl leading-[0.9] text-white md:text-5xl">
            {"Systems that look sharp and work harder".split(" ").map((word, index) => (
                <span key={`${word}-${index}`} className="blur-reveal-word mr-[0.32ch] inline-block">
                {word}
              </span>
            ))}
          </h2>

          <p className="services-intro mt-6 max-w-3xl text-sm leading-relaxed text-gray-400 md:text-base">
            From architecture to deployment, each engagement is designed for measurable outcomes: faster operations,
            better reliability, and workflows teams can actually trust.
          </p>
        </div>

        <div className="mb-10 h-px w-full bg-white/10">
          <span className="services-progress-fill block h-full w-full bg-gradient-to-r from-rose-300/80 to-transparent" />
        </div>

        <div className="services-grid grid grid-cols-1 gap-4 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="service-card ascii-card group relative overflow-hidden border border-white/10 bg-white/[0.03] p-6 md:p-7"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_42%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <Icon className="h-7 w-7 text-rose-200/80" />
                    <span className="font-mono text-xs tracking-[0.22em] text-white/20">0{index + 1}</span>
                  </div>

                  <div>
                    <h3 className="text-xl leading-tight tracking-tight text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-400">{service.copy}</p>
                  </div>

                  <ul className="mt-auto flex flex-wrap gap-2">
                    {service.stack.map((item) => (
                      <li
                        key={item}
                        className="border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <div className="ascii-card mt-10 flex items-center gap-3 border border-white/10 bg-white/[0.02] px-4 py-3 text-xs uppercase tracking-[0.22em] text-gray-400 md:max-w-max">
          <Activity className="h-4 w-4 text-rose-300/80" />
          Docker + CI/CD + Coolify delivery with production-first mindset
        </div>
      </div>
    </section>
  );
}
