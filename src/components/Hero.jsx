import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero({ reducedMotion }) {
  return (
    <section id="top" className="relative isolate min-h-[70vh] md:min-h-[82vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-white/10" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl w-full px-4 py-24">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-6xl tracking-tight text-neutral-900">Moments Framed, Motion Captured</h1>
          <p className="mt-4 text-neutral-700">Photo-videography for brands and creators. 2 years, 15+ clients, product to events.</p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#work" className="rounded-full bg-neutral-900 text-white px-5 py-3 text-sm hover:bg-neutral-800 transition-colors">View Work</a>
            <a href="#contact" className="rounded-full border border-neutral-300 px-5 py-3 text-sm hover:bg-neutral-100 transition-colors">Book a Shoot</a>
          </div>
        </div>
      </div>
    </section>
  );
}
