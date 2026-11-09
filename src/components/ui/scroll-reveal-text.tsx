"use client";

import { useEffect, useMemo, useRef } from "react";

type ScrollRevealTextProps = {
  text: string;
  className?: string;
  minOpacity?: number;
  start?: number;
  end?: number;
  softness?: number;
};

export function ScrollRevealText({
  text,
  className,
  minOpacity = 0.2,
  start = 0.85,
  end = 0.45,
  softness = 4,
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const charRefs = useRef<HTMLSpanElement[]>([]);

  const words = useMemo(() => text.split(" ").map((w) => Array.from(w)), [text]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = charRefs.current;
    const total = chars.length;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      chars.forEach((c) => (c.style.opacity = "1"));
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;

      const startY = vh * start;
      const endY = vh * end;
      const distance = startY - endY + rect.height;
      const traveled = startY - rect.top;
      const progress = Math.min(Math.max(traveled / distance, 0), 1);

      const head = progress * (total + softness);

      for (let i = 0; i < total; i++) {
        const t = Math.min(Math.max((head - i) / softness, 0), 1);
        chars[i].style.opacity = String(minOpacity + (1 - minOpacity) * t);
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [text, minOpacity, start, end, softness]);

  charRefs.current = [];
  let index = 0;

  return (
    <p ref={containerRef} className={className} aria-label={text}>
      {words.map((chars, wi) => (
        <span key={wi} aria-hidden="true" style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {chars.map((char, ci) => {
            const i = index++;
            return (
              <span
                key={ci}
                ref={(el) => {
                  if (el) charRefs.current[i] = el;
                }}
                style={{ opacity: minOpacity, transition: "opacity 0.1s linear" }}
              >
                {char}
              </span>
            );
          })}
          {wi < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </p>
  );
}