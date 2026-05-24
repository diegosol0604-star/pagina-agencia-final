"use client";

import { useEffect, useState } from "react";

const FULL_TEXT = "Diseño y automatización\nque generan resultados.";
const SPEED = 42; // ms por carácter — suave y legible

export function HeroPhrase() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let startTimeout;
    let typeTimeout;
    let i = 0;

    const type = () => {
      if (i < FULL_TEXT.length) {
        i++;
        setDisplayed(FULL_TEXT.slice(0, i));
        typeTimeout = setTimeout(type, SPEED);
      } else {
        setDone(true);
      }
    };

    // Inicia el tipeo: espera splash + animación de entrada de la card (~1.5s)
    const startTyping = () => {
      startTimeout = setTimeout(type, 700);
    };

    if (document.body.dataset.splashDone === "1") {
      startTyping();
    } else {
      // Observa cuando el splash termina y luego arranca
      const observer = new MutationObserver(() => {
        if (document.body.dataset.splashDone === "1") {
          observer.disconnect();
          startTyping();
        }
      });
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ["data-splash-done"],
      });
      return () => {
        observer.disconnect();
        clearTimeout(startTimeout);
        clearTimeout(typeTimeout);
      };
    }

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(typeTimeout);
    };
  }, []);

  // Renderiza el texto respetando el salto de línea (\n)
  const parts = displayed.split("\n");

  return (
    <span aria-label={FULL_TEXT.replace("\n", " ")}>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && <br />}
        </span>
      ))}
      {/* Cursor parpadeante que desaparece al terminar */}
      {!done && (
        <span
          className="ml-[2px] inline-block h-[0.8em] w-[1.5px] translate-y-[-2px] bg-flow-text align-middle animate-cursor-blink"
          aria-hidden="true"
        />
      )}
    </span>
  );
}
