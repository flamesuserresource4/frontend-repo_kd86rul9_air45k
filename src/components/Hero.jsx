import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  // Ensure smooth scroll globally
  useEffect(() => {
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = 'smooth';
    return () => {
      root.style.scrollBehavior = prev;
    };
  }, []);

  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden bg-black text-white">
      {/* Spline full-width cover (laser/barcode sci‑fi theme) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/OeOth5wO0fkZcys3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Readability gradients (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      {/* Laser sweep overlay (adds a striking vertical blue light pass) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[-30%] w-1/3"
        initial={{ x: '-10%' }}
        animate={{ x: '140%' }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'linear' }}
        style={{
          background:
            'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(56,189,248,0.05) 20%, rgba(59,130,246,0.22) 50%, rgba(56,189,248,0.05) 80%, rgba(0,0,0,0) 100%)',
          filter: 'blur(2px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Subtle barcode lines to enhance depth without blocking interactions */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, rgba(59,130,246,0.06) 0px, rgba(59,130,246,0.06) 1px, rgba(0,0,0,0) 1px, rgba(0,0,0,0) 8px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-32 text-center sm:py-44">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-blue-300 backdrop-blur"
        >
          Premium Technology Collective
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl font-semibold leading-tight sm:text-6xl"
        >
          Black. Elegant. <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-white bg-clip-text text-transparent">Limitless.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-balance text-sm text-white/70 sm:text-lg"
        >
          Fintech-grade polish meets deep engineering. Interactive, modern, and meticulously balanced.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#companies"
            className="group rounded-full border border-blue-500/40 bg-blue-500/10 px-6 py-3 text-sm font-medium text-blue-300 backdrop-blur transition duration-500 hover:scale-[1.02] hover:bg-blue-500/20"
          >
            Explore Divisions
          </a>
          <a
            href="#profile"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/80 backdrop-blur transition duration-500 hover:scale-[1.02] hover:bg-white/10"
          >
            Company Profile
          </a>
        </motion.div>

        <motion.a
          href="#companies"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, repeat: Infinity, repeatType: 'mirror' }}
          className="mt-16 inline-flex cursor-pointer items-center gap-2 text-sm text-white/60 hover:text-white/90"
        >
          <span className="h-6 w-6 rounded-full border border-white/20 bg-white/5" />
          Scroll
        </motion.a>
      </div>
    </section>
  );
}
