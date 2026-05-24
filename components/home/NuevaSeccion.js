"use client";

import { LayoutGroup, motion } from "motion/react";
import { TextRotate } from "@/components/ui/TextRotate";

const WORDS = ["éxito.", "crecimiento.", "futuro.", "despegue."];

export function NuevaSeccion() {
  return (
    <section
      className="section-pad section-blue flex items-center justify-center"
      id="nueva-seccion"
      aria-label="Propuesta de valor"
    >
      <LayoutGroup>
        <motion.div
          layout
          className="flex flex-wrap items-baseline justify-center gap-x-7 text-center font-display text-[clamp(2.8rem,7vw,6rem)] font-normal italic leading-[1.1] tracking-[-0.02em] text-flow-text"
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", damping: 12, stiffness: 180, mass: 1.1 }}
        >
          <motion.span layout transition={{ type: "spring", damping: 30, stiffness: 400 }}>
            Tu negocio a un paso del
          </motion.span>
          <TextRotate
            texts={WORDS}
            mainClassName="text-[oklch(0.10_0.015_264)] px-4 py-1 bg-white overflow-hidden rounded-[4px] justify-center"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.03}
            splitLevelClassName="overflow-hidden pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2500}
          />
        </motion.div>
      </LayoutGroup>
    </section>
  );
}
