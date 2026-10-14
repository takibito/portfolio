"use client";

import type { PointerEvent, ReactNode } from "react";

// カーソル位置に合わせて枠と背景が光るカード（Aceternity の Card Spotlight 風）
export function GlowCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div
      onPointerMove={onMove}
      className={`group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/80 shadow-sm shadow-zinc-200/60 p-6 transition-colors hover:border-sky-300 ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(350px circle at var(--mx) var(--my), rgba(56,189,248,0.12), transparent 60%)" }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
