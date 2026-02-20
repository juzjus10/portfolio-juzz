"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import TextType from "./TypingText";
import AsciiShader from "./AsciiShader";
import AsciiImageShader from "./AsciiImageShader";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const textOneRef = useRef<HTMLDivElement>(null);
  const textTwoRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Initial State Setters
      gsap.set(imageRef.current, { clipPath: "inset(100% 0 0 0)" });
      gsap.set(textTwoRef.current, { clipPath: "inset(100% 0 0 0)" });

      // 2. Entrance Animations

      // Image: Static Reveal Upward
      tl.to(imageRef.current, {
        clipPath: "inset(0% 0 0 0)",
        duration: 2.5,
        ease: "power2.out",
      }, 0.2);

      // Text 2 (WEB DEVELOPER): Static Reveal Upward (synced with image)
      tl.to(textTwoRef.current, {
        clipPath: "inset(0% 0 0 0)",
        duration: 2.5,
        ease: "power4.out",
      }, 0.2);

      // Text 1 (I AM JUSTINE): Simple fade in
      gsap.from(textOneRef.current, {
        opacity: 0,
        duration: 2,
        ease: "power2.out",
      });


      // 3. Scroll Scrubbing (Parallax)
      // Text 1 (Background) moves slowly
      gsap.to(textOneRef.current, {
        yPercent: 20,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "bottom top",
          end: "top top",
          scrub: 1,
        },
      });

      // Image moves at medium speed
      gsap.to(imageRef.current, {
        yPercent: 10,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Text 2 (Foreground) moves faster
      gsap.to(textTwoRef.current, {
        yPercent: -200,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={heroRef}
      className="relative z-10 w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#0a0a0a]"
    >
      <AsciiShader />

      {/* 1. I AM JUSTINE (Background Text) */}
      <div
        ref={textOneRef}
        className="absolute w-full text-center font-sans text-white/20 whitespace-nowrap pointer-events-none"
        style={{
          fontWeight: 300,
          left: "50%",
          color: "#fff",
          margin: 0,
          top: "50%",
          transform: "translate(-50%, -54%) scaleY(2.5) scaleX(.74)",
          zIndex: 0,
          fontSize: "12vw", // Responsive large size
          lineHeight: 1,
          fontFamily: "Times New Roman",
        }}
      >
        <TextType
          text={["I AM JUSTINE."]}
          typingSpeed={150}
          pauseDuration={1500}
          showCursor={false}
          loop={false}
        />
      </div>

      {/* 2. Profile Image (Middle Layer) — rendered as ASCII via OGL */}
      <div
        ref={imageRef}
        className="relative z-10 w-full max-w-2xl aspect-[3/4] md:aspect-square flex items-center justify-center"
      >
        <AsciiImageShader src="/juzz_profile.png" />
      </div>

      {/* 3. WEB DEVELOPER (Foreground Text) */}
      <div
        ref={textTwoRef}
        className="absolute bottom-1 md:bottom-1 z-20"
      >
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white font-sans mix-blend-difference">
          WEB DEVELOPER
        </h2>
      </div>

      {/* Decorative Side Text */}

    </header>
  );
}
