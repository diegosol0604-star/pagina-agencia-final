"use client";
import { useEffect, useRef } from "react";

// Suma offsetLeft por toda la cadena de offsetParent — no se ve afectado por CSS transforms
function getAbsoluteLeft(el) {
  let left = 0;
  let node = el;
  while (node) {
    left += node.offsetLeft;
    node = node.offsetParent;
  }
  return left;
}

export function HeroScrollPhrase({ children, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 768) return;

    // Centro natural del elemento en coords absolutas del documento
    const elLeft = getAbsoluteLeft(el);
    const elCenter = elLeft + el.offsetWidth / 2;

    // Target: centro del viewport (donde están Flow Studio y los botones)
    const targetX = window.innerWidth / 2 - elCenter;

    // La clase -translate-y-[30px] se pierde cuando el style inline pisa el transform.
    // Lo preservamos explícitamente en cada frame.
    const Y = -30;

    const DELTA_NEEDED = 700;
    let accumulated = 0;
    let done = false;
    let touchY = null;

    function normalizeDelta(e) {
      if (e.deltaMode === 1) return Math.abs(e.deltaY) * 16;
      if (e.deltaMode === 2) return Math.abs(e.deltaY) * window.innerHeight;
      return Math.abs(e.deltaY);
    }

    function drive(delta) {
      accumulated = Math.min(accumulated + delta, DELTA_NEEDED);
      const p = accumulated / DELTA_NEEDED;
      el.style.transform = `translate(${p * targetX}px, ${Y}px)`;
      if (accumulated >= DELTA_NEEDED) finish();
    }

    function finish() {
      done = true;
      el.style.transform = `translate(${targetX}px, ${Y}px)`;
      removeListeners();
    }

    function onWheel(e) {
      if (done) return;
      e.preventDefault();
      drive(normalizeDelta(e));
    }

    function onKeyDown(e) {
      if (done) return;
      if (["ArrowDown", " ", "PageDown"].includes(e.key)) {
        e.preventDefault();
        drive(60);
      }
    }

    function onTouchStart(e) {
      touchY = e.touches[0].clientY;
    }

    function onTouchMove(e) {
      if (done || touchY === null) return;
      const dy = touchY - e.touches[0].clientY;
      touchY = e.touches[0].clientY;
      if (dy > 0) {
        e.preventDefault();
        drive(dy * 2.5);
      }
    }

    function removeListeners() {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    return removeListeners;
  }, []);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
