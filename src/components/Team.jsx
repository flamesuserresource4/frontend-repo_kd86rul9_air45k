import React from 'react';
import { motion } from 'framer-motion';

const people = [
  { name: 'Alya Prameswari', role: 'Head of Product', color: 'from-blue-500 to-blue-300' },
  { name: 'Rafi Arya', role: 'Lead AI Engineer', color: 'from-blue-400 to-blue-200' },
  { name: 'Nadya Putri', role: 'Design Director', color: 'from-blue-600 to-blue-400' },
  { name: 'Bagas Wirawan', role: 'Security Architect', color: 'from-blue-500 to-blue-300' },
  { name: 'Satria Wibowo', role: 'IoT Systems Lead', color: 'from-blue-400 to-blue-200' },
  { name: 'Dewi Paramita', role: 'Program Manager', color: 'from-blue-600 to-blue-400' },
];

function Avatar({ initials, color }) {
  return (
    <div className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${color} text-black font-semibold`}>{initials}</div>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold sm:text-4xl"
        >
          Core Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mt-3 max-w-2xl text-center text-white/65"
        >
          Multidisciplinary experts crafting premium experiences, systems, and security.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-500 hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="flex items-center gap-4">
                <Avatar initials={p.name.split(' ').map(n=>n[0]).slice(0,2).join('')} color={p.color} />
                <div>
                  <div className="text-lg font-semibold">{p.name}</div>
                  <div className="text-sm text-white/70">{p.role}</div>
                </div>
              </div>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <p className="mt-4 text-sm text-white/70">
                Focused on impact, obsessed with detail, and relentless about quality.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
