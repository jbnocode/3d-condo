import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import TourClient from '@/components/TourClient';
import { agentFromParams } from '@/lib/agent';
import { getUnit } from '@/lib/units';

type Props = {
  params: { unitId: string };
  searchParams: { agent?: string; phone?: string; messenger?: string };
};

export function generateMetadata({ params, searchParams }: Props): Metadata {
  const unit = getUnit(params.unitId);
  const agent = agentFromParams(searchParams);
  if (!unit) return { title: 'Unit not found' };
  return {
    title: `${unit.title} · ${agent.name}`,
    description: `360° walkthrough of ${unit.title} (${unit.subtitle}), shared by ${agent.name}.`,
  };
}

export default function ViewPage({ params, searchParams }: Props) {
  const unit = getUnit(params.unitId);
  if (!unit) notFound();
  const agent = agentFromParams(searchParams);
  return <TourClient unit={unit} agent={agent} />;
}
