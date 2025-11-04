import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  { year: '2019', title: 'Origins', desc: 'Founded to blend elegant design with rigorous engineering.' },
  { year: '2021', title: 'Expansion', desc: 'Launched AI and IoT divisions for connected, intelligent products.' },
  { year: '2023', title: 'Fortification', desc: 'Established cybersecurity practice to harden products end‑to‑end.' },
  { year: '2025', title: 'Premium Era', desc: 'Unified brand—polish, performance, and trust by default.' },
];

export default function Story() {
  const year = new Date().getFullYear();
  return (
    <section id="story" className="relative w-full bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-emerald-500/5" />
      <div className="mx-auto max-w-5xl px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold sm:text-4xl"
        >
          Background Story
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mt-3 max-w-2xl text-center text-white/65"
        >
          A journey from a small studio to a premium technology group.
        </motion.p>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-300/40 via-white/10 to-emerald-300/40 sm:left-1/2" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative sm:grid sm:grid-cols-2 sm:items-center"
              >
                <div className="relative sm:col-start-1 sm:pr-10">
                  <div className="mb-2 text-sm text-blue-300/90">{t.year}</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <div className="text-lg font-semibold">{t.title}</div>
                    <p className="mt-1 text-sm text-white/70">{t.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Elegant footer (elefan) */}
      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-lg">🐘</div>
            <div>
              <div className="text-sm font-semibold">DevNusantara Group</div>
              <div className="text-xs text-white/60">Futuristic • Premium • Indonesia</div>
            </div>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#hero" className="text-white/70 hover:text-white">Home</a>
            <a href="#companies" className="text-white/70 hover:text-white">Companies</a>
            <a href="#story" className="text-white/70 hover:text-white">Story</a>
          </nav>
          <p className="text-sm text-white/60">© {year} DevNusantara Group</p>
        </div>
      </footer>
    </section>
  );
}
