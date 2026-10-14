"use client";

import { useEffect, useRef } from "react";

// カーソルを追う光（brittanychiang.com 風）
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      el.style.setProperty("--x", `${e.clientX}px`);
      el.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 transition-[background] duration-300"
      style={{
        background:
          "radial-gradient(600px circle at var(--x, 50%) var(--y, 20%), rgba(125,211,252,0.18), transparent 70%)",
      }}
    />
  );
}
