export type RoomId =
  | 'hall'
  | 'dining'
  | 'kitchen'
  | 'living'
  | 'master'
  | 'master-bath'
  | 'bedroom-2'
  | 'bath-2'
  | 'guest-bath'
  | 'terrace-1'
  | 'terrace-2';

export type TabId = 'photos' | 'floorplan' | 'tour';

export type Hotspot = {
  to: RoomId;
  label: string;
  /** krpano ath, degrees. 0 = panorama center. */
  ath: number;
  /** Degrees below horizon. Higher = closer to the floor. */
  atv: number;
};

export type Room = {
  id: RoomId;
  name: string;
  shortName: string;
  panorama: string;
  photo: string;
  thumb: string;
  /** Initial yaw in degrees (from Conde Vega hlookat, wrapped). */
  yaw: number;
  hotspots: Hotspot[];
  /** Pin position on the cropped unit floor plan, percent. */
  plan: { x: number; y: number };
};

export type Unit = {
  id: string;
  title: string;
  subtitle: string;
  areaSqm: number;
  bedrooms: number;
  bathrooms: number;
  startRoom: RoomId;
  rooms: Room[];
  floorPlan: string;
  floorPlanFull: string;
  credit: string;
};

const rooms: Room[] = [
  {
    id: 'hall',
    name: 'Entrance Hall',
    shortName: 'Hall',
    panorama: '/panoramas/hall.jpg',
    photo: '/photos/hall.jpg',
    thumb: '/thumbs/hall.jpg',
    yaw: 0,
    hotspots: [{ to: 'dining', label: 'Living & Dining', ath: 85, atv: 16 }],
    plan: { x: 30, y: 86 },
  },
  {
    id: 'dining',
    name: 'Living & Dining',
    shortName: 'Dining',
    panorama: '/panoramas/dining.jpg',
    photo: '/photos/dining.jpg',
    thumb: '/thumbs/dining.jpg',
    yaw: 72,
    hotspots: [
      { to: 'hall', label: 'Hall', ath: 54, atv: 18 },
      { to: 'living', label: 'Family Room', ath: 60, atv: 14 },
      { to: 'kitchen', label: 'Kitchen', ath: 112, atv: 16 },
    ],
    plan: { x: 17, y: 58 },
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    shortName: 'Kitchen',
    panorama: '/panoramas/kitchen.jpg',
    photo: '/photos/kitchen.jpg',
    thumb: '/thumbs/kitchen.jpg',
    yaw: 75,
    hotspots: [
      { to: 'dining', label: 'Living & Dining', ath: 75, atv: 16 },
      { to: 'living', label: 'Family Room', ath: -128, atv: 16 },
    ],
    plan: { x: 32, y: 50 },
  },
  {
    id: 'living',
    name: 'Family Room',
    shortName: 'Family',
    panorama: '/panoramas/living.jpg',
    photo: '/photos/living.jpg',
    thumb: '/thumbs/living.jpg',
    yaw: 90,
    hotspots: [
      { to: 'dining', label: 'Living & Dining', ath: 94, atv: 14 },
      { to: 'kitchen', label: 'Kitchen', ath: 90, atv: 20 },
      { to: 'guest-bath', label: 'Guest Bath', ath: 100, atv: 12 },
      { to: 'bedroom-2', label: 'Bedroom 2', ath: -57, atv: 16 },
      { to: 'master', label: 'Master Bedroom', ath: -69, atv: 20 },
      { to: 'terrace-1', label: 'Terrace', ath: 2, atv: 16 },
    ],
    plan: { x: 58, y: 64 },
  },
  {
    id: 'master',
    name: 'Master Bedroom',
    shortName: 'Master',
    panorama: '/panoramas/master.jpg',
    photo: '/photos/master.jpg',
    thumb: '/thumbs/master.jpg',
    yaw: 40,
    hotspots: [
      { to: 'living', label: 'Family Room', ath: 88, atv: 16 },
      { to: 'master-bath', label: 'Master Bath', ath: 23, atv: 14 },
    ],
    plan: { x: 72, y: 80 },
  },
  {
    id: 'master-bath',
    name: 'Master Bath',
    shortName: 'Master Bath',
    panorama: '/panoramas/master-bath.jpg',
    photo: '/photos/master-bath.jpg',
    thumb: '/thumbs/master-bath.jpg',
    yaw: 50,
    hotspots: [{ to: 'master', label: 'Master Bedroom', ath: 59, atv: 16 }],
    plan: { x: 90, y: 78 },
  },
  {
    id: 'bedroom-2',
    name: 'Bedroom 2',
    shortName: 'Bedroom 2',
    panorama: '/panoramas/bedroom-2.jpg',
    photo: '/photos/bedroom-2.jpg',
    thumb: '/thumbs/bedroom-2.jpg',
    yaw: 121,
    hotspots: [
      { to: 'living', label: 'Family Room', ath: 121, atv: 16 },
      { to: 'bath-2', label: 'Bath 2', ath: -46, atv: 16 },
    ],
    plan: { x: 76, y: 48 },
  },
  {
    id: 'bath-2',
    name: 'Bath 2',
    shortName: 'Bath 2',
    panorama: '/panoramas/bath-2.jpg',
    photo: '/photos/bath-2.jpg',
    thumb: '/thumbs/bath-2.jpg',
    yaw: -80,
    hotspots: [{ to: 'bedroom-2', label: 'Bedroom 2', ath: -80, atv: 16 }],
    plan: { x: 82, y: 50 },
  },
  {
    id: 'guest-bath',
    name: 'Guest Bath',
    shortName: 'Guest Bath',
    panorama: '/panoramas/guest-bath.jpg',
    photo: '/photos/guest-bath.jpg',
    thumb: '/thumbs/guest-bath.jpg',
    yaw: -124,
    hotspots: [{ to: 'living', label: 'Family Room', ath: -124, atv: 16 }],
    plan: { x: 39, y: 90 },
  },
  {
    id: 'terrace-1',
    name: 'Terrace',
    shortName: 'Terrace',
    panorama: '/panoramas/terrace-1.jpg',
    photo: '/photos/terrace-1.jpg',
    thumb: '/thumbs/terrace-1.jpg',
    yaw: -20,
    hotspots: [{ to: 'terrace-2', label: 'Terrace 2', ath: -34, atv: 14 }],
    plan: { x: 9, y: 72 },
  },
  {
    id: 'terrace-2',
    name: 'Terrace 2',
    shortName: 'Terrace 2',
    panorama: '/panoramas/terrace-2.jpg',
    photo: '/photos/terrace-2.jpg',
    thumb: '/thumbs/terrace-2.jpg',
    yaw: 70,
    hotspots: [{ to: 'hall', label: 'Hall', ath: 81, atv: 16 }],
    plan: { x: 9, y: 38 },
  },
];

export const DEMO_UNIT: Unit = {
  id: 'demo',
  title: 'Unit 304',
  subtitle: '198 sqm · 3 bed · 3 bath',
  areaSqm: 198,
  bedrooms: 3,
  bathrooms: 3,
  startRoom: 'dining',
  rooms,
  floorPlan: '/plans/floor-plan-unit.jpg',
  floorPlanFull: '/plans/floor-plan.jpg',
  credit:
    "Artist's rendition · for illustration only. 360° pans: Conde de la Vega 304 (private demo) · Patrick Huijten / Grupo Chacarilla Sur",
};

export function getUnit(id: string): Unit | null {
  if (id === 'demo') return DEMO_UNIT;
  return null;
}

export function getRoom(unit: Unit, id: RoomId): Room {
  return unit.rooms.find((r) => r.id === id) ?? unit.rooms[0];
}

export const ROOM_ORDER: RoomId[] = rooms.map((r) => r.id);
