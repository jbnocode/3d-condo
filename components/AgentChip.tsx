import type { Agent } from '@/lib/agent';

export default function AgentChip({ agent }: { agent: Agent }) {
  return (
    <div className="flex items-center gap-2.5 rounded-full bg-black/55 px-2.5 py-1.5 pr-3.5 backdrop-blur-md ring-1 ring-white/10">
      <div
        className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-dim text-[11px] font-extrabold text-ink-950"
        aria-hidden
      >
        {agent.initials}
      </div>
      <div className="min-w-0 leading-tight">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/55">
          Your agent
        </p>
        <p className="truncate text-sm font-semibold text-white">{agent.name}</p>
      </div>
    </div>
  );
}
