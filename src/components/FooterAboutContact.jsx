import React from 'react';

const focusAccent = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A66B]';

export default function FooterAboutContact() {
  return (
    <footer className="border-t border-neutral-200 bg-white" id="about">
      <div className="mx-auto max-w-6xl px-4 py-16 grid gap-12 md:grid-cols-2">
        <section>
          <h3 className="font-serif text-2xl tracking-tight">About</h3>
          <div className="mt-4 flex items-start gap-4">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" alt="Dev Patel headshot" className="h-20 w-20 rounded-full object-cover" />
            <div>
              <p className="text-neutral-700">I’m Dev Patel, a photo-videographer blending visual storytelling with technical craft. I specialize in product, model, food, and event work for brands and creators. Available for commissions and collaborations.</p>
              <ul className="mt-3 text-sm text-neutral-600 space-y-1 list-disc pl-5">
                <li>2 years experience • 15+ clients</li>
                <li>Specialties: Photography & Videography</li>
                <li>Clients: Nova, Atelier, Greens&Co, Pulse Events</li>
              </ul>
              <div className="mt-4 flex items-center gap-3">
                <a href="#" className={`rounded-full border border-neutral-300 px-3 py-2 text-sm hover:bg-neutral-100 inline-flex items-center gap-2 ${focusAccent}`}>Download CV</a>
                <a href="#contact" className="rounded-full bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800">Request Pricing</a>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h4 className="font-serif text-xl tracking-tight">Clients & Testimonials</h4>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-neutral-700">
              <blockquote className="border-l-2 pl-3 border-neutral-300">“Clean, on-brief visuals that elevated our launch.” — Nova</blockquote>
              <blockquote className="border-l-2 pl-3 border-neutral-300">“Fast, professional, and detail-focused.” — Greens&Co</blockquote>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 opacity-80">
              <span className="text-xs border px-2 py-1 rounded">Nova</span>
              <span className="text-xs border px-2 py-1 rounded">Atelier</span>
              <span className="text-xs border px-2 py-1 rounded">Greens&Co</span>
              <span className="text-xs border px-2 py-1 rounded">Pulse Events</span>
            </div>
          </div>
        </section>

        <section id="contact">
          <h3 className="font-serif text-2xl tracking-tight">Contact & Booking</h3>
          <p className="mt-2 text-neutral-700">Share a few details and I’ll respond within 48 hours. Your information stays private and is only used to reply to your inquiry.</p>
          <form onSubmit={(e) => { e.preventDefault(); const form = e.currentTarget; if (form.company && form.company.value) return; form.reset(); alert('Thanks—we’ll respond within 48 hours.'); }} className="mt-6 grid gap-3" aria-describedby="privacy-note">
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-neutral-700" htmlFor="name">Name</label>
                <input id="name" required name="name" type="text" className={`mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#C9A66B]/60 ${focusAccent}`} />
              </div>
              <div>
                <label className="block text-sm text-neutral-700" htmlFor="email">Email</label>
                <input id="email" required name="email" type="email" className={`mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#C9A66B]/60 ${focusAccent}`} />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-neutral-700" htmlFor="type">Project Type</label>
                <select id="type" name="type" className={`mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#C9A66B]/60 ${focusAccent}`}>
                  <option>Photography — Product</option>
                  <option>Photography — Model</option>
                  <option>Photography — Food</option>
                  <option>Photography — Event</option>
                  <option>Videography — Wedding</option>
                  <option>Videography — Event</option>
                  <option>Videography — Social</option>
                  <option>Videography — Restaurant</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-neutral-700" htmlFor="dates">Preferred Dates</label>
                <input id="dates" name="dates" type="text" placeholder="e.g., June 5–8 or flexible" className={`mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#C9A66B]/60 ${focusAccent}`} />
              </div>
            </div>
            <div className="hidden">
              <label htmlFor="company">Leave this empty</label>
              <input id="company" type="text" name="company" tabIndex={-1} autoComplete="off" />
            </div>
            <div>
              <label className="block text-sm text-neutral-700" htmlFor="message">Short Message</label>
              <textarea id="message" name="message" rows={4} className={`mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#C9A66B]/60 ${focusAccent}`}></textarea>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button type="submit" className="rounded-full bg-neutral-900 text-white px-5 py-2 text-sm hover:bg-neutral-800">Send</button>
              <a href="mailto:hello@devpatel.studio" className="text-sm underline underline-offset-4">hello@devpatel.studio</a>
              <a href="#" className="text-sm underline underline-offset-4">Book via Calendly</a>
            </div>
            <p id="privacy-note" className="sr-only">We respect your privacy and only use this information to reply.</p>
          </form>
        </section>
      </div>

      <div className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Dev Patel. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline underline-offset-4">Client Login</a>
            <a href="#" className="hover:underline underline-offset-4">Privacy</a>
            <a href="#" className="hover:underline underline-offset-4">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
