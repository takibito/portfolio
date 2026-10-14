import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { QiitaIcon } from "@/components/QiitaIcon";
import { GlowCard } from "@/components/GlowCard";
import { Reveal } from "@/components/Reveal";
import { Spotlight } from "@/components/Spotlight";
import { Terminal } from "@/components/Terminal";
import { about, education, experiences, profile, skills, works } from "@/data/profile";

const nav = [
  { href: "#about", label: "About" },
  { href: "#works", label: "Works" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const workSpan = {
  lg: "md:col-span-2 md:row-span-2",
  md: "md:col-span-2",
};

function SectionTitle({ id, kicker, title }: { id: string; kicker: string; title: string }) {
  return (
    <Reveal className="mb-10">
      <p id={id} className="scroll-mt-24 font-mono text-sm text-sky-600">{kicker}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">{title}</h2>
    </Reveal>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <Spotlight />
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[900px]" />
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-300/40 via-violet-300/30 to-pink-300/40 blur-3xl" />

      <header className="sticky top-0 z-30 border-b border-zinc-200/70 bg-white/70 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-mono text-sm text-zinc-700">~/{profile.handle}</a>
          <ul className="hidden gap-6 text-sm text-zinc-600 md:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-sky-600">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section className="grid items-center gap-12 pt-24 pb-28 lg:grid-cols-2 lg:pt-32">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs text-emerald-700">
              <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
              Open to opportunities
            </p>
            <h1 className="mt-6 text-5xl font-bold tracking-tight text-zinc-900 md:text-6xl">{profile.name}</h1>
            <p className="mt-2 text-sm tracking-widest text-zinc-600">{profile.reading}</p>
            <p className="mt-3 font-mono text-sm text-zinc-500">{profile.role} · {profile.location}</p>
            <p className="text-gradient mt-8 text-2xl font-bold leading-snug md:text-3xl">{profile.tagline}</p>
            <p className="mt-5 max-w-xl leading-relaxed text-zinc-600">{profile.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm text-zinc-700 transition hover:border-sky-400">
                <GithubIcon className="size-4" /> GitHub
              </a>
              <a href={profile.qiita} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm text-zinc-700 transition hover:border-[#55C500]">
                <QiitaIcon className="size-4" /> Qiita
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <Terminal />
          </Reveal>
        </section>

        {/* About */}
        <section className="pb-28">
          <SectionTitle id="about" kicker="01 / About" title="はじめまして" />
          <Reveal>
            <GlowCard className="md:p-10">
              <div className="space-y-5 text-[15px] leading-loose text-zinc-700">
                {about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-8 border-t border-zinc-200 pt-6">
                <p className="text-xs text-zinc-500">休日の過ごし方</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {about.hobbies.map((h) => (
                    <li key={h.label} className="rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-sm text-zinc-700 transition hover:-translate-y-0.5 hover:border-sky-300">
                      <span className="mr-1.5" aria-hidden>{h.emoji}</span>
                      {h.label}
                    </li>
                  ))}
                </ul>
              </div>
            </GlowCard>
          </Reveal>
        </section>

        {/* Works (Bento) */}
        <section className="pb-28">
          <SectionTitle id="works" kicker="02 / Works" title="個人開発" />
          <div className="grid auto-rows-[minmax(170px,auto)] gap-4 md:grid-cols-4">
            {works.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05} className={workSpan[w.size]}>
                <GlowCard className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className={`font-semibold break-all text-zinc-900 ${w.size === "lg" ? "text-2xl" : "text-lg"}`}>{w.title}</h3>
                    <div className="flex shrink-0 items-center gap-2">
                      {w.status && (
                        <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs text-amber-700">{w.status}</span>
                      )}
                      {w.href && (
                        <a href={w.href} target="_blank" rel="noreferrer" aria-label={`${w.title} を GitHub で開く`} className="text-zinc-600 hover:text-sky-600">
                          <ArrowUpRight className="size-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{w.description}</p>
                  {w.details && (
                    <ul className="mt-5 space-y-2 rounded-lg border border-zinc-200 bg-sky-50/60 p-4 font-mono text-xs text-zinc-700">
                      {w.details.map((d) => (
                        <li key={d} className="flex gap-2">
                          <span className="text-sky-500">›</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {w.tags.map((t) => (
                      <span key={t} className="font-mono text-xs text-zinc-500">#{t}</span>
                    ))}
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Experience（概要のみ） */}
        <section className="pb-28">
          <SectionTitle id="experience" kicker="03 / Experience" title="経歴" />
          <Reveal>
            <GlowCard className="p-0">
              <p className="px-6 pt-6 text-sm text-zinc-600">2024年4月〜 大学入試システムの自社パッケージ企業（京都）</p>
              <ol className="mt-4 divide-y divide-zinc-100">
                {experiences.map((e) => (
                  <li key={e.title} className="grid gap-2 px-6 py-5 md:grid-cols-[110px_1fr_auto] md:items-baseline md:gap-6">
                    <span className="font-mono text-xs text-zinc-500">{e.period}</span>
                    <div>
                      <h3 className="font-semibold text-zinc-900">{e.title}</h3>
                      <p className="mt-1 text-sm text-zinc-600">{e.body}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 md:justify-end">
                      {e.tech.map((t) => (
                        <span key={t} className="rounded-full bg-sky-100 px-2.5 py-0.5 font-mono text-[11px] text-sky-700">{t}</span>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>
            </GlowCard>
          </Reveal>

          <Reveal className="mt-6 grid gap-6 md:grid-cols-2">
            <GlowCard>
              <h3 className="font-mono text-sm text-sky-600">Skills</h3>
              <dl className="mt-4 space-y-4">
                {Object.entries(skills).map(([k, list]) => (
                  <div key={k}>
                    <dt className="text-xs text-zinc-500">{k}</dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {list.map((s) => (
                        <span key={s} className="rounded-md border border-zinc-200 px-2.5 py-1 text-sm text-zinc-700">{s}</span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </GlowCard>
            <GlowCard>
              <h3 className="font-mono text-sm text-sky-600">Education</h3>
              <ul className="mt-4 space-y-5">
                {education.map((ed) => (
                  <li key={ed.title}>
                    <p className="font-mono text-xs text-zinc-500">{ed.period}</p>
                    <p className="mt-1 text-zinc-700">{ed.title}</p>
                    <p className="mt-2 text-sm text-zinc-700">
                      <span className="mr-2 font-mono text-xs text-sky-700">論文</span>
                      {ed.thesis}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{ed.abstract}</p>
                    {ed.note && <p className="mt-1 text-sm text-zinc-600">{ed.note}</p>}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </Reveal>
        </section>

        {/* Contact */}
        <section className="pb-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-sky-100 via-violet-50 to-pink-100 p-10 text-center md:p-16">
              <p id="contact" className="scroll-mt-24 font-mono text-sm text-sky-700">04 / Contact</p>
              <h2 className="mt-3 text-3xl font-bold text-zinc-900 md:text-4xl">ご覧いただき、ありがとうございます。</h2>
              <p className="mx-auto mt-4 max-w-lg text-zinc-600">まだ学ぶことの多い身ですが、バックエンドの開発を通じて、少しずつでもチームに貢献できるエンジニアを目指しています。お気軽にご連絡ください。</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700">
                  <GithubIcon className="size-4" /> GitHub
                </a>
                <a href={profile.qiita} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#55C500] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4aab00]">
                  <QiitaIcon className="size-4" /> Qiita
                </a>
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm text-zinc-700 transition hover:border-sky-400">
                  <Mail className="size-4" /> {profile.email}
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="relative z-10 border-t border-zinc-200/70 py-8 text-center font-mono text-xs text-zinc-400">
        © 2026 {profile.name}
      </footer>
    </div>
  );
}
