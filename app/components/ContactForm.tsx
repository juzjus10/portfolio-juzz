"use client";

import { FormEvent, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type ContactState = {
  name: string;
  email: string;
  message: string;
};

const initialState: ContactState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [form, setForm] = useState<ContactState>(initialState);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-kicker", {
        y: 18,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
        },
      });

      gsap.fromTo(
        ".contact-title span",
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
            trigger: ".contact-title",
            start: "top 95%",
            end: "top 20%",
            scrub: 2.8,
          },
        },
      );

      gsap.from(".contact-copy", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".contact-field", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 84%",
        },
      });

      const button = buttonRef.current;
      if (button && window.matchMedia("(pointer: fine)").matches) {
        const handleMove = (event: MouseEvent) => {
          const bounds = button.getBoundingClientRect();
          const x = event.clientX - (bounds.left + bounds.width / 2);
          const y = event.clientY - (bounds.top + bounds.height / 2);

          gsap.to(button, {
            x: x * 0.22,
            y: y * 0.28,
            duration: 0.45,
            ease: "power3.out",
            overwrite: true,
          });
        };

        const handleLeave = () => {
          gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.35)",
          });
        };

        button.addEventListener("mousemove", handleMove);
        button.addEventListener("mouseleave", handleLeave);

        return () => {
          button.removeEventListener("mousemove", handleMove);
          button.removeEventListener("mouseleave", handleLeave);
        };
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        "",
        form.message,
      ].join("\n"),
    );

    window.location.href = `mailto:juzjus10@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <aside className="lg:col-span-5">
            <p className="contact-kicker mb-4 font-mono text-[11px] uppercase tracking-[0.34em] text-rose-300/80">Contact</p>

            <h2 className="contact-title overflow-hidden text-4xl leading-[0.9] text-white md:text-5xl">
              {"Let us build your next operational advantage".split(" ").map((word, index) => (
                <span key={`${word}-${index}`} className="blur-reveal-word mr-[0.34ch] inline-block">
                  {word}
                </span>
              ))}
            </h2>

            <p className="contact-copy mt-6 max-w-lg text-sm leading-relaxed text-gray-400 md:text-base">
              I work with teams that need systems to perform under pressure. Share your challenge and I will map a build
              path that ships with reliability in mind.
            </p>

            <div className="mt-8 space-y-3 text-sm text-gray-300">
              <a
                href="mailto:juzjus10@gmail.com"
                className="contact-field ascii-card inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors duration-300 hover:border-rose-300/60"
              >
                <Mail className="h-4 w-4 text-rose-300/80" />
                juzjus10@gmail.com
              </a>

              <div className="contact-field ascii-card inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-3">
                <MapPin className="h-4 w-4 text-rose-300/80" />
                Manila, Philippines
              </div>
            </div>
          </aside>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="contact-form ascii-card space-y-4 border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <div className="contact-field grid gap-2">
                <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-[0.24em] text-gray-500">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(event) => setForm((previous) => ({ ...previous, name: event.target.value }))}
                  className="w-full border border-white/20 bg-black/20 px-4 py-3 text-sm text-white outline-none transition-colors duration-300 focus:border-rose-300/70"
                  placeholder="Your full name"
                />
              </div>

              <div className="contact-field grid gap-2">
                <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-[0.24em] text-gray-500">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(event) => setForm((previous) => ({ ...previous, email: event.target.value }))}
                  className="w-full border border-white/20 bg-black/20 px-4 py-3 text-sm text-white outline-none transition-colors duration-300 focus:border-rose-300/70"
                  placeholder="you@company.com"
                />
              </div>

              <div className="contact-field grid gap-2">
                <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-[0.24em] text-gray-500">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(event) => setForm((previous) => ({ ...previous, message: event.target.value }))}
                  className="w-full resize-none border border-white/20 bg-black/20 px-4 py-3 text-sm text-white outline-none transition-colors duration-300 focus:border-rose-300/70"
                  placeholder="Project goals, timeline, and constraints"
                />
              </div>

              <div className="contact-field flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <a
                    href="https://linkedin.com/in/juzjus10"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center border border-white/20 bg-black/30 text-gray-300 transition-colors duration-300 hover:border-rose-300/70 hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="https://github.com/juzjus10"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center border border-white/20 bg-black/30 text-gray-300 transition-colors duration-300 hover:border-rose-300/70 hover:text-white"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>

                <button
                  ref={buttonRef}
                  type="submit"
                  className="inline-flex items-center gap-2 border border-white/20 bg-white/[0.03] px-6 py-3 font-mono text-xs uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:border-rose-300/70 hover:bg-white/10"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
