'use client';

import { Phone, Share2, Check } from 'lucide-react';
import { useState } from 'react';
import type { Agent } from '@/lib/agent';
import { callHref, viberHref } from '@/lib/phone';
import type { TabId } from '@/lib/units';
import { MessengerIcon, ViberIcon } from './icons';

const TABS: { id: TabId; label: string; short?: string }[] = [
  { id: 'photos', label: 'Photos' },
  { id: 'floorplan', label: 'Floor Plan', short: 'Plan' },
  { id: 'tour', label: '3D Tour' },
];

export default function TopBar({
  title,
  agent,
  tab,
  onTab,
}: {
  title: string;
  agent: Agent;
  tab: TabId;
  onTab: (tab: TabId) => void;
}) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: `${title} · ${agent.name}`, url });
        return;
      }
    } catch {
      /* user cancelled or share failed — fall through to copy */
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  const phone = agent.phone;
  const callDisabled = !phone;
  const viberDisabled = !phone;

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-center justify-between gap-2 bg-gradient-to-b from-black/70 via-black/35 to-transparent px-2 pb-10 pt-2 sm:px-3 md:px-4 md:pt-3">
      <div className="pointer-events-auto hidden min-w-0 pt-1 md:block">
        <p className="truncate text-[13px] font-semibold text-white md:text-sm">{title}</p>
        <p className="text-[11px] text-white/60">Client walkthrough</p>
      </div>

      <div className="pointer-events-auto flex shrink-0 rounded-full bg-black/55 p-1 ring-1 ring-white/15 backdrop-blur-md">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => onTab(t.id)}
            className={`whitespace-nowrap rounded-full px-2.5 py-1.5 text-[11px] font-semibold transition sm:px-3 sm:text-[12px] md:px-4 ${
              tab === t.id ? 'bg-white text-ink-950' : 'text-white/75 hover:text-white'
            }`}
          >
            <span className="sm:hidden">{t.short ?? t.label}</span>
            <span className="hidden sm:inline">{t.label}</span>
          </button>
        ))}
      </div>

      <div className="pointer-events-auto flex items-center gap-1.5">
        <a
          href={phone ? callHref(phone) : undefined}
          aria-disabled={callDisabled}
          className={`inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-[12px] font-bold ${
            callDisabled
              ? 'cursor-not-allowed bg-white/15 text-white/40'
              : 'bg-gold text-ink-950 hover:bg-gold-dim'
          }`}
          onClick={(e) => {
            if (callDisabled) e.preventDefault();
          }}
        >
          <Phone className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Call</span>
        </a>
        <a
          href={phone ? viberHref(phone) : undefined}
          aria-disabled={viberDisabled}
          title="Viber"
          className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${
            viberDisabled ? 'cursor-not-allowed bg-white/15 text-white/40' : 'bg-viber text-white'
          }`}
          onClick={(e) => {
            if (viberDisabled) e.preventDefault();
          }}
        >
          <ViberIcon className="h-4 w-4" />
        </a>
        <a
          href={agent.messengerUrl}
          target="_blank"
          rel="noreferrer"
          title="Messenger"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-messenger text-white"
        >
          <MessengerIcon className="h-4 w-4" />
        </a>
        <button
          type="button"
          onClick={share}
          title="Share link"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-white ring-1 ring-white/15 hover:bg-white/20"
        >
          {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
        </button>
      </div>
    </header>
  );
}
