import { useState } from 'react';

interface FloorSelectorProps {
  onSelectFloor: (floor: number) => void;
  totalFloors: number;
}

export default function FloorSelector({ onSelectFloor, totalFloors }: FloorSelectorProps) {
  const [hoveredFloor, setHoveredFloor] = useState<number | null>(null);

  const floors = Array.from({ length: totalFloors }, (_, i) => totalFloors - i);

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(20px)',
        padding: '40px',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        maxHeight: '70vh',
        overflowY: 'auto',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <div
        style={{
          fontSize: '28px',
          fontWeight: '700',
          color: 'white',
          marginBottom: '24px',
          textAlign: 'center',
        }}
      >
        Choose Your Floor
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '12px',
        }}
      >
        {floors.map((floor) => (
          <button
            key={floor}
            onClick={() => onSelectFloor(floor)}
            onMouseEnter={() => setHoveredFloor(floor)}
            onMouseLeave={() => setHoveredFloor(null)}
            style={{
              width: '60px',
              height: '60px',
              border: 'none',
              borderRadius: '8px',
              background: hoveredFloor === floor ? '#ffeb3b' : 'rgba(255, 255, 255, 0.1)',
              color: hoveredFloor === floor ? '#000' : 'white',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'inherit',
            }}
          >
            {floor}
          </button>
        ))}
      </div>

      <div
        style={{
          marginTop: '24px',
          fontSize: '14px',
          color: 'rgba(255, 255, 255, 0.6)',
          textAlign: 'center',
        }}
      >
        Click on a floor number to begin your virtual tour
      </div>
    </div>
  );
}
