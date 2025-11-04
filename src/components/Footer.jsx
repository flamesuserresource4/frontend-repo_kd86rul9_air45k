import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-white/10 bg-black py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-white/60">© {year} DevNusantara Group. All rights reserved.</p>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#about" className="text-white/70 hover:text-white">About</a>
          <a href="#companies" className="text-white/70 hover:text-white">Companies</a>
          <a href="#" className="text-white/70 hover:text-white">Careers</a>
          <a href="#" className="text-white/70 hover:text-white">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
