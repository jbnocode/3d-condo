'use client';

import type { Room, RoomId } from '@/lib/units';

export default function PhotoGallery({
  rooms,
  onOpenRoom,
}: {
  rooms: Room[];
  onOpenRoom: (id: RoomId) => void;
}) {
  return (
    <div className="h-full overflow-y-auto bg-ink-950">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-2 p-3 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <button
            key={room.id}
            type="button"
            onClick={() => onOpenRoom(room.id)}
            className="group relative aspect-[16/10] overflow-hidden rounded-xl bg-ink-800 text-left"
          >
            <img
              src={room.photo}
              alt={room.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-10">
              <p className="text-sm font-semibold text-white">{room.name}</p>
              <p className="text-[11px] text-white/70">Open 360° tour</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
