import { LightingMode, ViewMode } from '../types';

interface ControlsProps {
  lightingMode: LightingMode;
  setLightingMode: (mode: LightingMode) => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  onToggleFloorPlan: () => void;
}

export default function Controls({
  lightingMode,
  setLightingMode,
  onToggleFloorPlan,
}: ControlsProps) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Day/Night Toggle */}
      <button
        onClick={() => setLightingMode(lightingMode === 'day' ? 'night' : 'day')}
        style={{
          padding: '12px 20px',
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '8px',
          color: 'white',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.2s ease',
          fontFamily: 'inherit',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
        }}
      >
        <span style={{ fontSize: '18px' }}>
          {lightingMode === 'day' ? '☀️' : '🌙'}
        </span>
        {lightingMode === 'day' ? 'Day' : 'Night'}
      </button>

      {/* Floor Plan Toggle */}
      <button
        onClick={onToggleFloorPlan}
        style={{
          padding: '12px 20px',
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '8px',
          color: 'white',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.2s ease',
          fontFamily: 'inherit',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
        }}
      >
        <span style={{ fontSize: '18px' }}>
          🗺️
        </span>
        Floor Plan
      </button>
    </div>
  );
}
