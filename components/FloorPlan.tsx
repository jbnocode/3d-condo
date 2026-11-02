'use client';

import type { Room, RoomId } from '@/lib/units';

type Props = {
  image: string;
  rooms: Room[];
  currentId: RoomId;
  onSelect: (id: RoomId) => void;
  variant?: 'sidebar' | 'full';
};

export default function FloorPlan({
  image,
  rooms,
  currentId,
  onSelect,
  variant = 'sidebar',
}: Props) {
  return (
    <div className={variant === 'full' ? 'relative mx-auto w-full max-w-5xl' : 'relative w-full'}>
      <img
        src={image}
        alt="Unit floor plan"
        className={
          variant === 'full'
            ? 'w-full rounded-lg bg-white object-contain'
            : 'w-full rounded-md bg-white object-contain'
        }
        draggable={false}
      />
      {rooms.map((room) => {
        const here = room.id === currentId;
        return (
          <button
            key={room.id}
            type="button"
            onClick={() => onSelect(room.id)}
            style={{ left: `${room.plan.x}%`, top: `${room.plan.y}%` }}
            className="group absolute -translate-x-1/2 -translate-y-1/2"
            aria-label={`Jump to ${room.name}`}
            aria-current={here ? 'true' : undefined}
          >
            <span
              className={
                here
                  ? 'pin-here block h-3.5 w-3.5 rounded-full bg-here ring-[3px] ring-white'
                  : 'block h-2.5 w-2.5 rounded-full bg-pin ring-2 ring-white transition group-hover:h-3.5 group-hover:w-3.5'
              }
            />
            <span
              className={`pointer-events-none absolute left-1/2 top-full z-10 mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-black/80 px-1.5 py-0.5 text-[10px] font-semibold text-white shadow-overlay ${
                here ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}
            >
              {room.shortName}
            </span>
          </button>
        );
      })}
    </div>
  );
}
