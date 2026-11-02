import Link from 'next/link';
import BrandMark from '@/components/BrandMark';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-ink-950 px-6 text-center">
      <BrandMark className="text-xl text-cream" />
      <p className="text-white/70">That walkthrough is not available.</p>
      <Link href="/" className="rounded-full bg-gold px-5 py-2 text-sm font-bold text-ink-950">
        Back to ShowUnit
      </Link>
    </main>
  );
}
