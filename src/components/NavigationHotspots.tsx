interface Hotspot {
  id: string;
  name: string;
  icon: string;
}

const hotspots: Hotspot[] = [
  { id: 'living', name: 'Living Room', icon: '🛋️' },
  { id: 'bedroom', name: 'Bedroom', icon: '🛏️' },
  { id: 'bathroom', name: 'Bathroom', icon: '🚿' },
  { id: 'kitchen', name: 'Kitchen', icon: '🍳' },
  { id: 'balcony', name: 'Balcony', icon: '🌿' },
];

interface NavigationHotspotsProps {
  currentCheckpoint: string;
  onCheckpointChange: (checkpoint: string) => void;
}

export default function NavigationHotspots({
  currentCheckpoint,
  onCheckpointChange,
}: NavigationHotspotsProps) {
  const handleHotspotClick = (id: string) => {
    onCheckpointChange(id);
  };

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '80px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        maxWidth: '90%',
      }}
    >
      {hotspots.map((hotspot) => (
        <button
          key={hotspot.id}
          onClick={() => handleHotspotClick(hotspot.id)}
          style={{
            padding: '12px 20px',
            background: currentCheckpoint === hotspot.id
              ? 'rgba(255, 235, 59, 0.9)'
              : 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(10px)',
            border: `2px solid ${currentCheckpoint === hotspot.id ? '#ffeb3b' : 'rgba(255, 255, 255, 0.2)'}`,
            borderRadius: '24px',
            color: currentCheckpoint === hotspot.id ? '#000' : 'white',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.3s ease',
            fontFamily: 'inherit',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => {
            if (currentCheckpoint !== hotspot.id) {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }
          }}
          onMouseLeave={(e) => {
            if (currentCheckpoint !== hotspot.id) {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
              e.currentTarget.style.transform = 'translateY(0)';
            }
          }}
        >
          <span style={{ fontSize: '18px' }}>{hotspot.icon}</span>
          {hotspot.name}
        </button>
      ))}
    </div>
  );
}
