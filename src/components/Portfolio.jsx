import React, { useMemo, useRef, useState, useEffect } from 'react';

const accent = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A66B]';

const mediaItems = [
  // Selected Works (mix of images and videos)
  {
    id: 'w1', type: 'image', src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop',
    alt: 'Sleek product close-up with dramatic lighting', title: 'Product Noir', year: 2024, format: 'Photo', category: 'photo', subcategory: 'Product'
  },
  {
    id: 'w2', type: 'video', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    poster: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    alt: 'Macro nature loop preview', title: 'Petals in Motion', year: 2024, format: 'Video', category: 'video', subcategory: 'Social'
  },
  {
    id: 'w3', type: 'image', src: 'https://images.unsplash.com/photo-1532634896-26909d0d4b6a?q=80&w=1600&auto=format&fit=crop',
    alt: 'Model portrait with soft natural light', title: 'Muse', year: 2023, format: 'Photo', category: 'photo', subcategory: 'Model'
  },
  {
    id: 'w4', type: 'video', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
    poster: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
    alt: 'Gourmet food b-roll', title: 'Plated', year: 2023, format: 'Video', category: 'video', subcategory: 'Restaurant'
  },
  {
    id: 'w5', type: 'image', src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    alt: 'Event crowd with warm mood lighting', title: 'Pulse', year: 2024, format: 'Photo', category: 'photo', subcategory: 'Event'
  },
];

const catalog = [
  // Photography categories
  { id: 'p1', type: 'image', src: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop', alt: 'Product studio still', title: 'Glass & Steel', year: 2024, format: 'Photo', category: 'photo', subcategory: 'Product' },
  { id: 'p2', type: 'image', src: 'https://images.unsplash.com/photo-1516571137133-1be29e37143b?q=80&w=1600&auto=format&fit=crop', alt: 'Model portrait studio', title: 'Studio Muse', year: 2023, format: 'Photo', category: 'photo', subcategory: 'Model' },
  { id: 'p3', type: 'image', src: 'https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80&w=1600&auto=format&fit=crop', alt: 'Food still life', title: 'Citrus Pop', year: 2023, format: 'Photo', category: 'photo', subcategory: 'Food' },
  { id: 'p4', type: 'image', src: 'https://images.unsplash.com/photo-1501577316686-a5cbf6c1df7e?q=80&w=1600&auto=format&fit=crop', alt: 'Event hands in air', title: 'Night Energy', year: 2024, format: 'Photo', category: 'photo', subcategory: 'Event' },
  // Videography categories
  { id: 'v1', type: 'video', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', poster: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop', alt: 'Wedding couple walk', title: 'Eternal', year: 2024, format: 'Video', category: 'video', subcategory: 'Wedding' },
  { id: 'v2', type: 'video', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm', poster: 'https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?q=80&w=1600&auto=format&fit=crop', alt: 'Event highlight', title: 'Launch Night', year: 2023, format: 'Video', category: 'video', subcategory: 'Event' },
  { id: 'v3', type: 'video', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', poster: 'https://images.unsplash.com/photo-1515165562835-c3b8c2e92690?q=80&w=1600&auto=format&fit=crop', alt: 'Social short edit', title: 'Seconds', year: 2024, format: 'Video', category: 'video', subcategory: 'Social' },
  { id: 'v4', type: 'video', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm', poster: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop', alt: 'Restaurant promo', title: 'Sizzle', year: 2023, format: 'Video', category: 'video', subcategory: 'Restaurant' },
];

function MediaCard({ item, onOpen, reducedMotion }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={() => onOpen(item)}
      className={`group relative overflow-hidden rounded-lg bg-neutral-100 ${accent}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={`${item.title} ${item.format}`}
    >
      {item.type === 'image' ? (
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className="h-64 w-full object-cover transition duration-200 ease-out group-hover:scale-[1.03] grayscale group-hover:grayscale-0"
        />
      ) : (
        <div className="relative h-64 w-full">
          <video
            src={item.src}
            poster={item.poster}
            muted
            playsInline
            preload="none"
            className="h-full w-full object-cover transition duration-200 ease-out group-hover:scale-[1.03]"
            {...(hover && !reducedMotion ? { autoPlay: true, loop: true } : {})}
          />
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-3 text-left text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="text-sm font-medium">{item.title}</div>
        <div className="text-xs/5 text-white/80">{item.year} • {item.format}</div>
      </div>
    </button>
  );
}

function Lightbox({ items, index, onClose, setIndex }) {
  const ref = useRef(null);
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(items.length - 1, i + 1));
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(0, i - 1));
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [items.length, onClose, setIndex]);

  const item = items[index];
  if (!item) return null;

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={onClose}>
      <div ref={ref} className="relative max-h-[92vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <button aria-label="Close" onClick={onClose} className={`absolute right-3 top-3 z-10 rounded bg-white/90 px-3 py-1 text-sm ${accent}`}>Close</button>
        {item.type === 'image' ? (
          <img src={item.src} alt={item.alt} className="max-h-[92vh] w-full object-contain" />
        ) : (
          <video src={item.src} poster={item.poster} controls className="max-h-[92vh] w-full object-contain" />
        )}
        <div className="mt-3 text-white/90">
          <div className="text-base font-medium">{item.title}</div>
          <p className="text-sm/6 text-white/70">{item.year} • {item.format} • {item.subcategory}
            <span className="ml-2">— Project Notes: Brief objective, role, tools.</span>
          </p>
        </div>
        <div className="mt-2 flex items-center justify-between text-white/70 text-xs">
          <button onClick={() => setIndex((i) => Math.max(0, i - 1))} className={`rounded border border-white/30 px-3 py-1 ${accent}`}>Prev</button>
          <span>{index + 1} / {items.length}</span>
          <button onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))} className={`rounded border border-white/30 px-3 py-1 ${accent}`}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio({ reducedMotion }) {
  const [lbOpen, setLbOpen] = useState(false);
  const [lbItems, setLbItems] = useState([]);
  const [lbIndex, setLbIndex] = useState(0);

  const [mode, setMode] = useState('photo'); // 'photo' | 'video'
  const [filter, setFilter] = useState('All');

  const photoFilters = ['All', 'Product', 'Model', 'Food', 'Event'];
  const videoFilters = ['All', 'Wedding', 'Event', 'Social', 'Restaurant'];

  const filtered = useMemo(() => {
    return catalog.filter(i => i.category === (mode === 'photo' ? 'photo' : 'video'))
      .filter(i => filter === 'All' ? true : i.subcategory === filter);
  }, [mode, filter]);

  const openLightbox = (item, items) => {
    setLbItems(items);
    const idx = items.findIndex((i) => i.id === item.id);
    setLbIndex(idx === -1 ? 0 : idx);
    setLbOpen(true);
  };

  const stripRef = useRef(null);

  return (
    <section aria-labelledby="work-heading" id="work" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 id="work-heading" className="font-serif text-3xl md:text-4xl tracking-tight">Selected Works</h2>
        <p className="mt-2 text-neutral-600">Curated highlights across photography and video.</p>

        <div className="mt-8 relative">
          <div ref={stripRef} className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2" aria-label="Selected works carousel">
            {mediaItems.map((item) => (
              <div key={item.id} className="min-w-[280px] md:min-w-[360px] snap-start">
                <MediaCard item={item} reducedMotion={reducedMotion} onOpen={(it) => openLightbox(it, mediaItems)} />
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2">
            <button onClick={() => stripRef.current?.scrollBy({ left: -400, behavior: 'smooth' })} className={`rounded-full border border-neutral-300 px-3 py-1 text-sm hover:bg-neutral-100 ${accent}`}>Prev</button>
            <button onClick={() => stripRef.current?.scrollBy({ left: 400, behavior: 'smooth' })} className={`rounded-full border border-neutral-300 px-3 py-1 text-sm hover:bg-neutral-100 ${accent}`}>Next</button>
          </div>
        </div>
      </div>

      <div id="categories" className="mx-auto max-w-6xl px-4 pb-20">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-serif text-2xl tracking-tight">Project Categories</h3>
          <div className="inline-flex rounded-full border border-neutral-300 p-1">
            <button onClick={() => { setMode('photo'); setFilter('All'); }} className={`px-3 py-1 text-sm rounded-full ${mode==='photo' ? 'bg-neutral-900 text-white' : ''}`}>Photography</button>
            <button onClick={() => { setMode('video'); setFilter('All'); }} className={`px-3 py-1 text-sm rounded-full ${mode==='video' ? 'bg-neutral-900 text-white' : ''}`}>Videography</button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {(mode==='photo'?photoFilters:videoFilters).map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`rounded-full border border-neutral-300 px-3 py-1 text-sm hover:bg-neutral-100 ${accent} ${filter===f?'bg-neutral-900 text-white border-neutral-900':''}`}>{f}</button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <MediaCard key={item.id} item={item} reducedMotion={reducedMotion} onOpen={(it) => openLightbox(it, filtered)} />
          ))}
        </div>
      </div>

      {lbOpen && (
        <Lightbox items={lbItems} index={lbIndex} setIndex={setLbIndex} onClose={() => setLbOpen(false)} />
      )}
    </section>
  );
}
