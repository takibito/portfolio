"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

type Line = { cmd: string; out: string[] };

const lines: Line[] = [
  { cmd: "whoami", out: ["unwissenheit — Backend Engineer @ Kyoto"] },
  { cmd: "ls ~/.config", out: ["karabiner/  nvim/  wezterm/"] },
  { cmd: "chezmoi apply", out: ["✔ dotfiles を適用しました"] },
];

// ヒーローのターミナル。動きを減らす設定ならすべて即表示
export function Terminal() {
  const reduce = useReducedMotion();
  const [lineIdx, setLineIdx] = useState(0);
  const [chars, setChars] = useState(0);
  const [showOut, setShowOut] = useState(false);

  useEffect(() => {
    if (reduce || lineIdx >= lines.length) return;
    const cmd = lines[lineIdx].cmd;
    let t: ReturnType<typeof setTimeout>;
    if (chars < cmd.length) {
      t = setTimeout(() => setChars((c) => c + 1), 45 + Math.random() * 60);
    } else if (!showOut) {
      t = setTimeout(() => setShowOut(true), 250);
    } else {
      t = setTimeout(() => {
        setLineIdx((i) => i + 1);
        setChars(0);
        setShowOut(false);
      }, 700);
    }
    return () => clearTimeout(t);
  }, [reduce, lineIdx, chars, showOut]);

  const done = reduce || lineIdx >= lines.length;

  return (
    <div className="w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl shadow-sky-300/40">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="size-3 rounded-full bg-red-400/80" />
        <span className="size-3 rounded-full bg-yellow-400/80" />
        <span className="size-3 rounded-full bg-green-400/80" />
        <span className="ml-3 font-mono text-xs text-zinc-500">~/portfolio — zsh</span>
      </div>
      <div className="min-h-64 space-y-3 p-5 font-mono text-sm leading-relaxed">
        {lines.map((line, i) => {
          if (!done && i > lineIdx) return null;
          const typing = !done && i === lineIdx;
          const cmd = typing ? line.cmd.slice(0, chars) : line.cmd;
          const out = !typing || showOut;
          return (
            <div key={line.cmd}>
              <p>
                <span className="text-emerald-400">❯</span> <span className="text-zinc-100">{cmd}</span>
                {typing && !showOut && <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-sky-400" />}
              </p>
              {out && line.out.map((o) => <p key={o} className="text-zinc-400">{o}</p>)}
            </div>
          );
        })}
        {done && (
          <p>
            <span className="text-emerald-400">❯</span>{" "}
            <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-sky-400" />
          </p>
        )}
      </div>
    </div>
  );
}
