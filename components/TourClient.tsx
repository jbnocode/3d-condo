'use client';

import { useEffect, useMemo, useState } from 'react';
import { Map, X } from 'lucide-react';
import type { Agent } from '@/lib/agent';
import { getRoom, type RoomId, type TabId, type Unit } from '@/lib/units';
import AgentChip from './AgentChip';
import Disclaimer from './Disclaimer';
import FloorPlan from './FloorPlan';
import PanoramaViewer from './PanoramaViewer';
import PhotoGallery from './PhotoGallery';
import TopBar from './TopBar';

export default function TourClient({ unit, agent }: { unit: Unit; agent: Agent }) {
  const [tab, setTab] = useState<TabId>('tour');
  const [roomId, setRoomId] = useState<RoomId>(unit.startRoom);
  const [mapOpen, setMapOpen] = useState(false);
  const [hint, setHint] = useState(true);
  const room = useMemo(() => getRoom(unit, roomId), [unit, roomId]);

  useEffect(() => {
    const t = window.setTimeout(() => setHint(false), 3800);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    unit.rooms.forEach((r) => {
      const img = new Image();
      img.src = r.panorama;
    });
  }, [unit]);

  function jump(id: RoomId) {
    setRoomId(id);
    setTab('tour');
    setMapOpen(false);
  }

  return (
    <div className="relative h-[100dvh] w-screen overflow-hidden bg-ink-950 text-cream">
      {tab === 'tour' && <PanoramaViewer room={room} onJump={jump} />}

      {tab === 'photos' && <PhotoGallery rooms={unit.rooms} onOpenRoom={jump} />}

      {tab === 'floorplan' && (
        <div className="flex h-full flex-col bg-ink-950 pt-16">
          <div className="px-4 pb-3 pt-2 md:px-8">
            <p className="text-sm font-semibold text-cream">{unit.title}</p>
            <p className="text-xs text-white/55">
              {unit.subtitle} · tap a pin to open that room in 3D
            </p>
          </div>
          <div className="flex-1 overflow-auto px-3 pb-16 md:px-8">
            <FloorPlan
              image={unit.floorPlan}
              rooms={unit.rooms}
              currentId={roomId}
              onSelect={jump}
              variant="full"
            />
            <img
              src={unit.floorPlanFull}
              alt="Full drawing with legend"
              className="mx-auto mt-6 max-w-4xl rounded-lg bg-white"
            />
          </div>
        </div>
      )}

      <TopBar
        title={`${unit.title} · ${unit.subtitle}`}
        agent={agent}
        tab={tab}
        onTab={setTab}
      />

      {tab === 'tour' && (
        <>
          <div className="pointer-events-none absolute left-2 top-14 z-20 sm:left-3 sm:top-[4.25rem] md:left-4">
            <div className="pointer-events-auto">
              <AgentChip agent={agent} />
            </div>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-[6.75rem] z-20 -translate-x-1/2 sm:top-[4.4rem]">
            <p className="rounded-full bg-black/40 px-3 py-1 text-[13px] font-semibold text-white backdrop-blur-sm">
              {room.name}
            </p>
          </div>

          {hint && (
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-md">
              Drag to look around
            </div>
          )}

          <aside className="absolute bottom-10 right-3 top-[4.25rem] z-20 hidden w-[320px] flex-col overflow-hidden rounded-xl bg-ink-900/92 ring-1 ring-white/10 backdrop-blur-md lg:flex">
            <div className="border-b border-white/10 px-4 py-3">
              <p className="text-sm font-bold text-cream">{unit.title}</p>
              <p className="text-xs text-white/55">{unit.subtitle}</p>
              <p className="mt-2 text-[11px] text-white/45">
                Tap a pin — or a room below — to hop
              </p>
            </div>
            <div className="overflow-x-auto border-b border-white/10 p-3">
              <div className="min-w-[520px]">
                <FloorPlan
                  image={unit.floorPlan}
                  rooms={unit.rooms}
                  currentId={roomId}
                  onSelect={jump}
                />
              </div>
            </div>
            <div className="flex-1 overflow-auto p-2">
              {unit.rooms.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => jump(r.id)}
                  className={`mb-1 w-full rounded-lg px-3 py-2 text-left text-[13px] ${
                    r.id === roomId
                      ? 'bg-white/15 font-semibold text-white'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {r.name}
                </button>
              ))}
            </div>
          </aside>

          <div className="absolute inset-x-0 bottom-10 z-20 flex items-end gap-2 px-3 lg:hidden">
            <div className="flex flex-1 gap-2 overflow-x-auto scrollbar-hide pb-1">
              {unit.rooms.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => jump(r.id)}
                  className={`shrink-0 rounded-full px-3 py-2 text-xs font-semibold ${
                    r.id === roomId ? 'bg-gold text-ink-950' : 'bg-black/55 text-white ring-1 ring-white/15'
                  }`}
                >
                  {r.shortName}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setMapOpen(true)}
              className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full bg-ink-900/90 px-3 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur-md"
            >
              <Map className="h-4 w-4" />
              Plan
            </button>
          </div>
        </>
      )}

      {mapOpen && (
        <div className="absolute inset-0 z-40 bg-black/70 p-4 pt-16 lg:hidden">
          <div className="relative mx-auto max-w-lg rounded-2xl bg-ink-900 p-4 ring-1 ring-white/10">
            <button
              type="button"
              onClick={() => setMapOpen(false)}
              className="absolute right-3 top-3 rounded-full bg-white/10 p-1.5"
              aria-label="Close floor plan"
            >
              <X className="h-4 w-4" />
            </button>
            <p className="mb-3 pr-8 text-sm font-semibold">Jump to a room</p>
            <FloorPlan
              image={unit.floorPlan}
              rooms={unit.rooms}
              currentId={roomId}
              onSelect={jump}
            />
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-2 z-20 flex justify-center px-3 lg:bottom-3">
        <Disclaimer text={unit.credit} />
      </div>
    </div>
  );
}
