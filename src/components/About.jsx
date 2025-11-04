import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-semibold sm:text-4xl">Building with intent</h2>
            <p className="mt-4 text-white/70">
              We are a collective of engineers, designers, and security practitioners crafting products for the next decade. Our work is guided by a love for minimal aesthetics, robust systems, and meaningful experiences.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-400/80" />
                Human‑centered, privacy‑first design
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-400/80" />
                Elegant systems with measurable outcomes
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-400/80" />
                Secure by default, scalable by design
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-blue-300/5 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="grid grid-cols-2 gap-4 text-sm text-white/80 sm:text-base">
                <Stat label="Products shipped" value="50+" />
                <Stat label="Countries served" value="15+" />
                <Stat label="Uptime across fleets" value="99.95%" />
                <Stat label="Avg. response time" value="< 120ms" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
      <div className="text-2xl font-semibold text-blue-300">{value}</div>
      <div className="mt-1 text-xs text-white/60">{label}</div>
    </div>
  );
}
