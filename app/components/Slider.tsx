"use client";

import { useEffect, useRef, useState } from "react";

type Slide = { src: string; alt?: string };

export default function Slider({ slides = [] as Slide[] }: { slides?: Slide[] }) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  function start() {
    stop();
    timerRef.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
  }

  function stop() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }

  function go(i: number) {
    setIndex((prev) => {
      const next = (i + slides.length) % slides.length;
      return next;
    });
  }

  return (
    <div className="slider w-full rounded-xl shadow-lg bg-black/5">
      <div
        className="slider-track"
        ref={trackRef}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s, i) => (
          <div className="slider-slide" key={i} aria-hidden={i !== index}>
            <img src={s.src} alt={s.alt ?? `slide-${i}`} />
          </div>
        ))}
      </div>

      <button
        className="slider-button left"
        aria-label="Previous"
        onClick={() => go(index - 1)}
      >
        ‹
      </button>
      <button
        className="slider-button right"
        aria-label="Next"
        onClick={() => go(index + 1)}
      >
        ›
      </button>

      <div className="slider-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`slider-dot ${i === index ? "active" : ""}`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </div>
  );
}
