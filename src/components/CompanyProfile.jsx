import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Briefcase, Star, Users } from 'lucide-react';

export default function CompanyProfile() {
  const features = [
    { icon: Building2, title: 'Enterprise-grade', desc: 'Standards-aligned architecture, security-first posture, and battle-tested reliability.' },
    { icon: Users, title: 'Human-centered', desc: 'Design systems that respect attention, accessibility, and cultural nuance.' },
    { icon: Briefcase, title: 'Outcome-driven', desc: 'We measure what matters—business value, sustainability, and maintainability.' },
    { icon: Star, title: 'Premium polish', desc: 'Refined motion, elegant details, and cohesive brand expression in every flow.' },
  ];

  return (
    <section id="profile" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold sm:text-4xl"
          >
            DevNusantara Group
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mx-auto mt-3 max-w-2xl text-white/65"
          >
            A premium technology collective operating at the intersection of software, AI, IoT, and cybersecurity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 backdrop-blur transition duration-500 hover:-translate-y-1 hover:from-white/10 hover:to-white/[0.07]"
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue-500/10 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 text-blue-300 transition-colors duration-500 group-hover:border-blue-400/40 group-hover:bg-blue-400/10">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
