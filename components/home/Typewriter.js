"use client";

import { useEffect, useState } from "react";
import { TYPEWRITER_WORDS } from "@/lib/site";

const SPEED_TYPE = 90;
const SPEED_DEL = 55;
const PAUSE = 2000;

export function Typewriter() {
  const [text, setText] = useState(TYPEWRITER_WORDS[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(TYPEWRITER_WORDS[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TYPEWRITER_WORDS[wordIndex];
    let timeout;

    if (!deleting) {
      if (charIndex < word.length) {
        timeout = setTimeout(() => {
          const next = charIndex + 1;
          setCharIndex(next);
          setText(word.slice(0, next));
        }, SPEED_TYPE);
      } else {
        timeout = setTimeout(() => setDeleting(true), PAUSE);
      }
    } else if (charIndex > 0) {
      timeout = setTimeout(() => {
        const next = charIndex - 1;
        setCharIndex(next);
        setText(word.slice(0, next));
      }, SPEED_DEL);
    } else {
      const nextWord = (wordIndex + 1) % TYPEWRITER_WORDS.length;
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex(nextWord);
        setCharIndex(0);
      }, SPEED_TYPE);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <span className="inline-block min-w-[8ch] whitespace-nowrap text-accent max-md:min-w-[7ch]" aria-live="polite">
      <span>{text}</span>
      <span
        className="ml-0.5 inline-block h-[0.8em] w-0.5 translate-y-[-1px] bg-accent align-middle animate-cursor-blink"
        aria-hidden="true"
      />
    </span>
  );
}
