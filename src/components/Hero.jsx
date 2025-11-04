import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle overlay gradients for contrast - doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-32 text-center sm:py-40">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-blue-300 backdrop-blur"
        >
          Next‑gen digital ventures
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl font-semibold leading-tight sm:text-6xl"
        >
          Elegance in black.
          <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-white bg-clip-text text-transparent"> Precision in code.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-balance text-sm text-white/70 sm:text-lg"
        >
          We craft human‑centered products infused with AI, IoT, and cyber expertise. Modern, immersive, and meticulously engineered.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#companies"
            className="group rounded-full border border-blue-500/40 bg-blue-500/10 px-6 py-3 text-sm font-medium text-blue-300 backdrop-blur transition hover:bg-blue-500/20"
          >
            Explore Divisions
          </a>
          <a
            href="#about"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/80 backdrop-blur transition hover:bg-white/10"
          >
            About Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
