"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function SplashScreen() {
  const [textVisible, setTextVisible] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Fase 1: ocultar texto a los 1.6s (deja el fondo vacío)
    const textTimer = setTimeout(() => setTextVisible(false), 1600);
    // Fase 2: activar animaciones del Hero + cerrar overlay a los 2.3s
    const overlayTimer = setTimeout(() => {
      document.body.dataset.splashDone = "1";
      setVisible(false);
    }, 2300);
    return () => {
      clearTimeout(textTimer);
      clearTimeout(overlayTimer);
    };
  }, []);

  useEffect(() => {
    if (visible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          data-splash
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ backgroundColor: "oklch(1 0 0)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <AnimatePresence>
            {textVisible && (
              <motion.div
                className="relative z-[1] select-none text-center overflow-hidden"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeIn" }}
              >
                <motion.p
                  className="font-display font-normal italic tracking-[-0.03em]"
                  style={{
                    fontSize: "clamp(3.5rem, 8vw, 8rem)",
                    color: "oklch(0.10 0.015 264)",
                    lineHeight: 1,
                  }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                >
                  Flow Studio
                </motion.p>
                <motion.p
                  className="font-heading font-medium uppercase"
                  style={{
                    fontSize: "clamp(0.65rem, 1.2vw, 0.9rem)",
                    letterSpacing: "0.28em",
                    color: "oklch(0.10 0.015 264)",
                    marginTop: "1rem",
                  }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                >
                  Marketing Digital &amp; IA
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
