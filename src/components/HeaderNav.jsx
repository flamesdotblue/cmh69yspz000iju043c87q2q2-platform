import React from 'react';
import { Camera, Menu, X } from 'lucide-react';

export default function HeaderNav({ reducedMotion, onToggleReduced }) {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/85 border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2" aria-label="Dev Patel Home">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white"><Camera size={18} /></span>
          <span className="font-serif text-lg tracking-tight">Dev Patel</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#work" className="hover:underline underline-offset-4">Work</a>
          <a href="#categories" className="hover:underline underline-offset-4">Categories</a>
          <a href="#about" className="hover:underline underline-offset-4">About</a>
          <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
          <button aria-pressed={reducedMotion} onClick={onToggleReduced} className="rounded-full border border-neutral-300 px-3 py-1 text-xs hover:bg-neutral-100 transition-colors" title="Toggle reduced motion">{reducedMotion ? 'Reduced motion' : 'Motion on'}</button>
          <a href="#contact" className="rounded-full bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800 transition-colors">Book a Session</a>
        </nav>
        <button aria-label="Toggle Menu" className="md:hidden" onClick={() => setOpen(v => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-neutral-200">
          <div className="mx-auto max-w-6xl px-4 py-3 grid gap-3 text-sm">
            <a href="#work" onClick={() => setOpen(false)} className="py-2">Work</a>
            <a href="#categories" onClick={() => setOpen(false)} className="py-2">Categories</a>
            <a href="#about" onClick={() => setOpen(false)} className="py-2">About</a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-2">Contact</a>
            <button aria-pressed={reducedMotion} onClick={() => { onToggleReduced(); setOpen(false); }} className="rounded-full border border-neutral-300 px-3 py-2 text-xs w-max">{reducedMotion ? 'Reduced motion' : 'Motion on'}</button>
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-full bg-neutral-900 text-white px-4 py-2 text-sm w-max">Book a Session</a>
          </div>
        </div>
      )}
    </header>
  );
}
