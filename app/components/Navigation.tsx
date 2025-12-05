"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state: hidden below
      gsap.set(".nav-link", { clipPath: "inset(100% 0 0 0)" });

      // Animation: Reveal Upward with Stagger
      gsap.to(".nav-link", {
        clipPath: "inset(0% 0 0 0)",
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2,
        delay: 0.5,
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col items-end gap-2 z-50 mix-blend-difference"
    >
      {["WORK", "EDUCATION", "SERVICES", "CONTACT"].map((text, i) => (
        <a
          key={i}
          href="#"
          className="nav-link text-2xl font-bold text-gray-400 hover:text-white transition-colors duration-300 uppercase tracking-widest cursor-pointer"
        >
          {text}
        </a>
      ))}
    </nav>
  );
}
