"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export function HeroTitles() {
  const wrapperRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    const section = wrapperRef.current?.closest("section");
    if (!section) return;

    const onMove = (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      const nx = (e.clientX / w - 0.5) * 2;
      const ny = (e.clientY / h - 0.5) * 2;

      gsap.to(wrapperRef.current, {
        rotateY: nx * 10,
        rotateX: -ny * 6,
        x: nx * 7,
        y: ny * 4,
        duration: 1.2,
        ease: "power2.out",
        transformOrigin: "center center",
      });

      gsap.to(line1Ref.current, {
        rotateY: nx * 3,
        rotateX: -ny * 2,
        duration: 1.4,
        ease: "power2.out",
        transformOrigin: "center center",
      });

      gsap.to(line2Ref.current, {
        rotateY: nx * 1.5,
        rotateX: -ny * 1,
        duration: 1.7,
        ease: "power2.out",
        transformOrigin: "center center",
      });
    };

    const onLeave = () => {
      gsap.to([wrapperRef.current, line1Ref.current, line2Ref.current], {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.05,
      });
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div style={{ perspective: "1100px" }} className="-translate-y-10 max-md:translate-y-0">
      <p
        ref={wrapperRef}
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        className="relative z-[1] mb-[2%] font-display text-[clamp(100px,10vw,150px)] font-normal italic leading-[0.92] tracking-[-0.03em] text-flow-text max-xl:text-[clamp(110px,9vw,140px)] max-lg:text-[clamp(90px,8vw,120px)] max-md:mb-[var(--space-md)] max-md:text-[clamp(4.1rem,19vw,6rem)]"
        aria-hidden="true"
      >
        <span
          ref={line1Ref}
          className="animate-brand-in block"
          style={{ display: "block", willChange: "transform" }}
        >
          Flow Studio
        </span>
        <span
          ref={line2Ref}
          className="animate-brand-in-delay mt-[0.2em] block text-[clamp(60px,6vw,85px)] tracking-[-0.01em] max-xl:text-[clamp(65px,5.5vw,80px)] max-lg:text-[clamp(55px,5vw,70px)] max-md:text-[clamp(1.25rem,5.5vw,1.9rem)]"
          style={{ display: "block", willChange: "transform" }}
        >
          Agencia de Marketing e IA
        </span>
      </p>
    </div>
  );
}
