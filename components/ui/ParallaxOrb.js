"use client";
import { useEffect, useRef } from "react";

export function ParallaxOrb({ className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId;
    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        const rect = el.parentElement?.getBoundingClientRect();
        if (!rect) return;
        const centerY = rect.top + rect.height / 2;
        const ratio = (window.innerHeight / 2 - centerY) / window.innerHeight;
        el.style.transform = `translateY(${ratio * 40}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-[80px] will-change-transform ${className}`}
    />
  );
}
