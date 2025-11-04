import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Home, Building2, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-center">
      {/* Dynamic Island container */}
      <div
        className={`mx-auto mt-4 flex items-center justify-between gap-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white backdrop-blur transition-all duration-300 ${
          scrolled ? 'shadow-[0_10px_40px_rgba(59,130,246,0.15)]' : ''
        } ${open ? 'w-[92%] sm:w-[720px]' : 'w-[86%] sm:w-[640px]'}`}
        role="navigation"
        aria-label="Primary"
      >
        <a href="#top" className="flex items-center gap-2 rounded-full px-2 py-1">
          <Rocket className="h-5 w-5 text-blue-400" />
          <span className="text-sm font-semibold tracking-wide">DevNusantara</span>
        </a>
        <nav className="hidden items-center gap-2 sm:flex">
          <a href="#hero" className="rounded-full px-3 py-1.5 text-sm text-white/80 hover:bg-white/10 hover:text-white">
            <span className="inline-flex items-center gap-1"><Home className="h-4 w-4" /> Home</span>
          </a>
          <a href="#companies" className="rounded-full px-3 py-1.5 text-sm text-white/80 hover:bg-white/10 hover:text-white">
            <span className="inline-flex items-center gap-1"><Building2 className="h-4 w-4" /> Companies</span>
          </a>
          <a href="#story" className="rounded-full px-3 py-1.5 text-sm text-white/80 hover:bg-white/10 hover:text-white">
            <span className="inline-flex items-center gap-1"><BookOpen className="h-4 w-4" /> Story</span>
          </a>
        </nav>
        <button
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 p-2 text-white/90 hover:bg-white/15 sm:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-x-4 top-[76px] z-40 overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur transition-all duration-300 sm:hidden ${
          open ? 'max-h-[260px] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-3">
          <a onClick={() => setOpen(false)} href="#hero" className="rounded-xl px-3 py-3 text-white/80 hover:bg-white/10 hover:text-white">
            Home
          </a>
          <a onClick={() => setOpen(false)} href="#companies" className="rounded-xl px-3 py-3 text-white/80 hover:bg-white/10 hover:text-white">
            Companies
          </a>
          <a onClick={() => setOpen(false)} href="#story" className="rounded-xl px-3 py-3 text-white/80 hover:bg-white/10 hover:text-white">
            Story
          </a>
        </div>
      </div>
    </header>
  );
}
