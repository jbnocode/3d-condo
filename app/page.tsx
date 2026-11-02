import Link from 'next/link';
import BrandMark from '@/components/BrandMark';
import ShareLinkBuilder from '@/components/ShareLinkBuilder';

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink-950">
      <img
        src="/photos/dining.jpg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-5 py-8 md:px-8">
        <header className="flex items-center justify-between">
          <BrandMark className="text-lg text-cream" />
          <Link
            href="/view/demo?agent=Maria%20Santos&phone=09171234567"
            className="text-sm font-semibold text-gold hover:underline"
          >
            Open sample tour
          </Link>
        </header>

        <div className="mt-16 grid flex-1 items-center gap-12 md:mt-24 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Sales agent tool
            </p>
            <h1 className="mt-3 max-w-xl text-4xl font-extrabold leading-tight text-cream md:text-5xl">
              Send a branded 360° walkthrough — not a listing page.
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
              Your client gets a Matterport-style tour of the unit, with your photo, name, and
              Call / Viber / Messenger on every screen. No marketplace chrome. No “request a
              tour” funnel.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/75">
              <li>— Floor hotspots hop between rooms</li>
              <li>— Floor plan pins jump the camera</li>
              <li>— Share <code className="text-gold">/view/demo?agent=&amp;phone=</code></li>
            </ul>
          </div>
          <ShareLinkBuilder />
        </div>

        <p className="relative mt-10 text-[11px] text-white/40">
          Demo pans are an artist&apos;s rendition of Conde de la Vega 304 (private demo). Credit
          is on the tour footer. Swap files via docs/PANORAMA_SWAP.md.
        </p>
      </div>
    </main>
  );
}
