"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Marco tipo navegador para las capturas del portafolio.
 * Si la imagen todavía no existe en public/, cae a un placeholder con el giro.
 */
export function ScreenshotFrame({ src, alt, label }) {
  const [failed, setFailed] = useState(!src);

  return (
    <div className="overflow-hidden rounded-[var(--radius)] border border-flow-border bg-surface-2">
      <div className="flex items-center gap-1.5 border-b border-flow-border bg-surface-2 px-3 py-2" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-border-dark" />
        <span className="h-2 w-2 rounded-full bg-border-dark" />
        <span className="h-2 w-2 rounded-full bg-border-dark" />
      </div>

      <div className="relative aspect-[16/10] w-full">
        {failed ? (
          <div
            className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,var(--surface-2)_0%,var(--surface)_100%)] px-4 text-center"
            aria-hidden="true"
          >
            <span className="font-heading text-[0.7rem] font-bold uppercase tracking-[0.14em] text-flow-muted">
              {label}
            </span>
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  );
}
