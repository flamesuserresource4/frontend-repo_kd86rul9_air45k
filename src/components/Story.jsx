import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  { year: '2019', title: 'Origins', desc: 'Founded with a vision to blend elegant design with rigorous engineering.' },
  { year: '2021', title: 'Expansion', desc: 'Launched AI and IoT divisions to power connected, intelligent products.' },
  { year: '2023', title: 'Fortification', desc: 'Established cybersecurity practice to harden products and fleets end‑to‑end.' },
  { year: '2025', title: 'Premium Era', desc: 'Unified brand and platform—polish, performance, and trust by default.' },
];

export default function Story() {
  return (
    <section id="story" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-blue-500/5" />
      <div className="mx-auto max-w-5xl px-6">
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
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-300/40 via-white/10 to-blue-300/40 sm:left-1/2" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative sm:grid sm:grid-cols-2 sm:items-center ${i % 2 === 0 ? '' : ''}`}
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
    </section>
  );
}
