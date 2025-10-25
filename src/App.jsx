import React, { useEffect, useState } from 'react';
import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import FooterAboutContact from './components/FooterAboutContact';

export default function App() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('reducedMotion');
    if (stored) setReducedMotion(stored === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('reducedMotion', String(reducedMotion));
    if (reducedMotion) {
      document.documentElement.classList.add('motion-reduce');
    } else {
      document.documentElement.classList.remove('motion-reduce');
    }
  }, [reducedMotion]);

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 rounded bg-neutral-900 px-3 py-2 text-white">Skip to content</a>
      <HeaderNav reducedMotion={reducedMotion} onToggleReduced={() => setReducedMotion(v => !v)} />
      <main id="main">
        <Hero reducedMotion={reducedMotion} />
        <Portfolio reducedMotion={reducedMotion} />
      </main>
      <FooterAboutContact />
    </div>
  );
}
