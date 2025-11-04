import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Brain, Cpu, Shield } from 'lucide-react';

const companies = [
  {
    key: 'devnusantara',
    name: 'DevNusantara',
    icon: Globe,
    desc: 'Cultural-grade software and scalable platforms inspired by the archipelago—built for global reach.',
    accent: 'from-blue-500/30 to-blue-300/20',
  },
  {
    key: 'devai',
    name: 'DevAI',
    icon: Brain,
    desc: 'Applied artificial intelligence—from data pipelines to production inference with measurable impact.',
    accent: 'from-blue-400/30 to-blue-200/20',
  },
  {
    key: 'deviot',
    name: 'DevIoT',
    icon: Cpu,
    desc: 'Edge-to-cloud IoT systems combining elegant hardware integration with secure device orchestration.',
    accent: 'from-blue-600/30 to-blue-300/20',
  },
  {
    key: 'devcyber',
    name: 'DevCyber',
    icon: Shield,
    desc: 'Offense-informed defense. Threat modeling, security engineering, and continuous hardening baked in.',
    accent: 'from-blue-500/30 to-blue-200/20',
  },
];

export default function Companies() {
  return (
    <section id="companies" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold sm:text-4xl"
        >
          Our Companies
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mt-3 max-w-2xl text-center text-white/60"
        >
          A portfolio of focused teams delivering excellence across software, AI, IoT, and cybersecurity.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {companies.map((c, i) => (
            <motion.div
              key={c.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 backdrop-blur transition hover:from-white/10 hover:to-white/[0.06]"
            >
              <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${c.accent} opacity-0 blur-xl transition group-hover:opacity-60`} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 text-blue-300">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{c.name}</h3>
                <p className="mt-2 text-sm text-white/70">{c.desc}</p>
                <div className="mt-6">
                  <a href="#" className="text-sm font-medium text-blue-300 hover:underline">
                    Learn more →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
