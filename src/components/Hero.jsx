import React, { useEffect, useRef, useState } from 'react';

export default function Hero({ reducedMotion }) {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reducedMotion) {
      v.pause();
      setPaused(true);
    } else if (!paused) {
      const play = async () => {
        try { await v.play(); } catch (_) {}
      };
      play();
    }
  }, [reducedMotion, paused]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPaused(false); } else { v.pause(); setPaused(true); }
  };

  return (
    <section id="top" className="relative isolate min-h-[70vh] md:min-h-[82vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          poster="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop"
          muted
          loop
          playsInline
          preload="metadata"
          autoPlay={!reducedMotion}
          aria-label="Hero background video"
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-white/10" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl w-full px-4 py-24">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-6xl tracking-tight text-neutral-900">Moments Framed, Motion Captured</h1>
          <p className="mt-4 text-neutral-700">Photo-videography for brands and creators. 2 years, 15+ clients, product to events.</p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#work" className="rounded-full bg-neutral-900 text-white px-5 py-3 text-sm hover:bg-neutral-800 transition-colors">View Work</a>
            <a href="#contact" className="rounded-full border border-neutral-300 px-5 py-3 text-sm hover:bg-neutral-100 transition-colors">Book a Shoot</a>
            <button onClick={togglePlay} className="rounded-full border border-neutral-300 px-4 py-3 text-xs hover:bg-neutral-100 transition-colors" aria-pressed={paused}>{paused ? 'Play Hero' : 'Pause Hero'}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
