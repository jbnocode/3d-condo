'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Copy, Check, ArrowRight } from 'lucide-react';
import { normalizePhPhone } from '@/lib/phone';

export default function ShareLinkBuilder() {
  const router = useRouter();
  const [name, setName] = useState('Maria Santos');
  const [phone, setPhone] = useState('09171234567');
  const [copied, setCopied] = useState(false);

  const parsed = useMemo(() => normalizePhPhone(phone), [phone]);
  const query = useMemo(() => {
    const p = new URLSearchParams();
    if (name.trim()) p.set('agent', name.trim());
    if (parsed) p.set('phone', parsed.local);
    return p.toString();
  }, [name, parsed]);

  const path = `/view/demo${query ? `?${query}` : ''}`;

  async function copy() {
    const url = `${window.location.origin}${path}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <form
      className="w-full max-w-md rounded-2xl bg-ink-800/90 p-5 ring-1 ring-white/10 backdrop-blur-md"
      onSubmit={(e) => {
        e.preventDefault();
        router.push(path);
      }}
    >
      <p className="text-sm font-semibold text-cream">Build your client link</p>
      <p className="mt-1 text-xs text-white/50">
        Name and mobile appear on the tour. Share the URL — no marketplace account.
      </p>
      <label className="mt-4 block text-[11px] font-semibold uppercase tracking-wider text-white/45">
        Agent name
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-lg border border-white/10 bg-ink-950 px-3 py-2.5 text-sm text-cream outline-none ring-gold/0 transition focus:ring-2"
          placeholder="Your name"
          autoComplete="name"
        />
      </label>
      <label className="mt-3 block text-[11px] font-semibold uppercase tracking-wider text-white/45">
        Mobile (PH)
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 w-full rounded-lg border border-white/10 bg-ink-950 px-3 py-2.5 text-sm text-cream outline-none focus:ring-2 focus:ring-gold"
          placeholder="0917 123 4567"
          inputMode="tel"
          autoComplete="tel"
        />
      </label>
      {!parsed && phone.trim() && (
        <p className="mt-1.5 text-xs text-here">Use a PH mobile like 0917 123 4567</p>
      )}
      <p className="mt-3 truncate rounded-md bg-black/40 px-3 py-2 font-mono text-[11px] text-white/60">
        {path}
      </p>
      <div className="mt-4 flex gap-2">
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-4 py-2.5 text-sm font-bold text-ink-950 hover:bg-gold-dim"
        >
          Open tour
          <ArrowRight className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={copy}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15"
          title="Copy client link"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
    </form>
  );
}
