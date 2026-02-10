"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const signature = useMemo(() => "JUSTINE MALAGAR / FULL-STACK DEVELOPER".split(""), []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-char", {
        yPercent: 120,
        opacity: 0,
        stagger: 0.016,
        duration: 0.9,
        ease: "power4.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 82%",
        },
      });

      gsap.fromTo(
        ".footer-line-fill",
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 84%",
            end: "bottom bottom",
            scrub: true,
          },
        },
      );

      gsap.to(".footer-star", {
        rotate: 280,
        ease: "none",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer ref={footerRef} className="relative w-full overflow-hidden pb-10">
      <div className="container mx-auto px-6">
        <div className="h-px w-full bg-white/10">
          <span className="footer-line-fill block h-full w-full bg-gradient-to-r from-rose-300/80 via-white/40 to-transparent" />
        </div>

        <div className="py-8 md:py-10">
          <p className="mb-4 overflow-hidden font-pixel text-xl leading-none text-white md:text-3xl">
            {signature.map((char, index) => (
              <span key={`${char}-${index}`} className="footer-char inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.22em] text-gray-500 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <span>© {year} Justine Malagar</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/20 md:inline-block" />
              <span className="text-gray-400">Built with Next.js + GSAP + OGL</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 border border-white/20 bg-white/[0.03] px-3 py-2 text-gray-300 transition-colors duration-300 hover:border-rose-300/70 hover:text-white"
              >
                Back To Top
                <ArrowUp className="h-3.5 w-3.5" />
              </a> 
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
