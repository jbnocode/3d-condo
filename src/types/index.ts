export interface AgentInfo {
  name: string;
  phone: string;
}

export interface Checkpoint {
  id: string;
  name: string;
  position: [number, number, number];
  target: [number, number, number];
}

export type ViewMode = 'walkthrough' | 'floorplan';
export type LightingMode = 'day' | 'night';
