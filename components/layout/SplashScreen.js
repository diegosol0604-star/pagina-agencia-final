"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const BORDER_COLOR = "#0d1a9e";
const BOX_START = 1.5;   // segundos — empieza justo después de que ambos textos están visibles
const SIDE_DUR = 0.18;   // duración de cada lado
const SIDE_GAP = 0.15;   // pausa entre lados

export function SplashScreen() {
  const [textVisible, setTextVisible] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Fase 1: ocultar texto a los 2.4s (deja tiempo para ver el cuadro completo)
    const textTimer = setTimeout(() => setTextVisible(false), 2400);
    // Fase 2: activar animaciones del Hero + cerrar overlay a los 2.9s
    const overlayTimer = setTimeout(() => {
      document.body.dataset.splashDone = "1";
      setVisible(false);
    }, 2900);
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
          style={{ backgroundColor: "#ffffff" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <AnimatePresence>
            {textVisible && (
              <motion.div
                className="relative z-[1] select-none text-center px-10 py-6"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeIn" }}
              >
                {/* Texto principal */}
                <motion.p
                  className="font-display font-normal italic tracking-[-0.03em]"
                  style={{
                    fontSize: "clamp(3.5rem, 8vw, 8rem)",
                    color: "#0a0d1f",
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
                    color: "#0a0d1f",
                    marginTop: "1rem",
                  }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                >
                  Marketing Digital &amp; IA
                </motion.p>

                {/* Cuadro animado — arriba */}
                <motion.span
                  className="absolute top-0 left-0 h-[1.5px]"
                  style={{ backgroundColor: BORDER_COLOR }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: SIDE_DUR, delay: BOX_START, ease: "easeOut" }}
                />
                {/* Derecha */}
                <motion.span
                  className="absolute top-0 right-0 w-[1.5px]"
                  style={{ backgroundColor: BORDER_COLOR }}
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  transition={{ duration: SIDE_DUR, delay: BOX_START + SIDE_GAP, ease: "easeOut" }}
                />
                {/* Abajo (de derecha a izquierda) */}
                <motion.span
                  className="absolute bottom-0 right-0 h-[1.5px]"
                  style={{ backgroundColor: BORDER_COLOR }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: SIDE_DUR, delay: BOX_START + SIDE_GAP * 2, ease: "easeOut" }}
                />
                {/* Izquierda (de abajo a arriba) */}
                <motion.span
                  className="absolute bottom-0 left-0 w-[1.5px]"
                  style={{ backgroundColor: BORDER_COLOR }}
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  transition={{ duration: SIDE_DUR, delay: BOX_START + SIDE_GAP * 3, ease: "easeOut" }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
