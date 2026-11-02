interface FloorPlanOverlayProps {
  currentCheckpoint: string;
  onCheckpointChange: (checkpoint: string) => void;
  onClose: () => void;
}

const ROOM_POSITIONS: Record<string, { x: number; y: number; width: number; height: number }> = {
  living: { x: 20, y: 120, width: 160, height: 140 },
  kitchen: { x: 200, y: 120, width: 120, height: 140 },
  bedroom: { x: 20, y: 280, width: 140, height: 120 },
  bathroom: { x: 180, y: 280, width: 80, height: 120 },
  balcony: { x: 280, y: 280, width: 40, height: 120 },
};

export default function FloorPlanOverlay({
  currentCheckpoint,
  onCheckpointChange,
  onClose,
}: FloorPlanOverlayProps) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'white',
          borderRadius: '16px',
          padding: '32px',
          maxWidth: '90vw',
          maxHeight: '90vh',
          overflow: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
          }}
        >
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#1a1a1a', margin: 0 }}>
            Floor Plan
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: '28px',
              cursor: 'pointer',
              color: '#666',
              padding: '4px 8px',
            }}
          >
            ×
          </button>
        </div>

        {/* Floor plan SVG */}
        <svg
          width="340"
          height="420"
          viewBox="0 0 340 420"
          style={{
            border: '2px solid #e0e0e0',
            borderRadius: '8px',
            background: '#f5f5f5',
          }}
        >
          {/* Rooms */}
          {Object.entries(ROOM_POSITIONS).map(([room, pos]) => (
            <g key={room} onClick={() => onCheckpointChange(room)} style={{ cursor: 'pointer' }}>
              <rect
                x={pos.x}
                y={pos.y}
                width={pos.width}
                height={pos.height}
                fill={currentCheckpoint === room ? '#ffeb3b' : '#ffffff'}
                stroke={currentCheckpoint === room ? '#ffc107' : '#333'}
                strokeWidth="2"
                rx="4"
                style={{ transition: 'all 0.3s ease' }}
              />
              <text
                x={pos.x + pos.width / 2}
                y={pos.y + pos.height / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="14"
                fontWeight={currentCheckpoint === room ? '700' : '500'}
                fill={currentCheckpoint === room ? '#000' : '#666'}
              >
                {room === 'living' && '🛋️ Living'}
                {room === 'kitchen' && '🍳 Kitchen'}
                {room === 'bedroom' && '🛏️ Bedroom'}
                {room === 'bathroom' && '🚿 Bath'}
                {room === 'balcony' && '🌿 Balcony'}
              </text>
            </g>
          ))}

          {/* Walls */}
          <line x1="10" y1="110" x2="330" y2="110" stroke="#999" strokeWidth="3" />
          <line x1="10" y1="110" x2="10" y2="410" stroke="#999" strokeWidth="3" />
          <line x1="10" y1="410" x2="330" y2="410" stroke="#999" strokeWidth="3" />
          <line x1="330" y1="110" x2="330" y2="410" stroke="#999" strokeWidth="3" />
          <line x1="190" y1="110" x2="190" y2="270" stroke="#999" strokeWidth="2" />
          <line x1="10" y1="270" x2="330" y2="270" stroke="#999" strokeWidth="2" />
          <line x1="170" y1="270" x2="170" y2="410" stroke="#999" strokeWidth="2" />
          <line x1="270" y1="270" x2="270" y2="410" stroke="#999" strokeWidth="2" />

          {/* North arrow */}
          <g transform="translate(310, 30)">
            <circle cx="0" cy="0" r="15" fill="white" stroke="#333" strokeWidth="1" />
            <text x="0" y="5" textAnchor="middle" fontSize="12" fontWeight="700" fill="#333">
              N
            </text>
            <line x1="0" y1="-10" x2="0" y2="-20" stroke="#333" strokeWidth="2" />
            <polygon points="0,-20 -3,-15 3,-15" fill="#333" />
          </g>

          {/* Title */}
          <text x="170" y="30" textAnchor="middle" fontSize="18" fontWeight="700" fill="#333">
            Condo Unit Floor Plan
          </text>
          <text x="170" y="55" textAnchor="middle" fontSize="12" fill="#666">
            Click a room to navigate
          </text>

          {/* Current location marker */}
          {currentCheckpoint && ROOM_POSITIONS[currentCheckpoint] && (
            <circle
              cx={ROOM_POSITIONS[currentCheckpoint].x + ROOM_POSITIONS[currentCheckpoint].width / 2}
              cy={ROOM_POSITIONS[currentCheckpoint].y + ROOM_POSITIONS[currentCheckpoint].height / 2}
              r="8"
              fill="#ff5722"
              stroke="white"
              strokeWidth="2"
            >
              <animate
                attributeName="r"
                values="8;12;8"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </circle>
          )}
        </svg>

        {/* Legend */}
        <div style={{ marginTop: '16px', fontSize: '12px', color: '#666' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <div
              style={{
                width: '16px',
                height: '16px',
                background: '#ffeb3b',
                border: '2px solid #ffc107',
                borderRadius: '2px',
              }}
            />
            <span>Current Room</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '8px',
                height: '8px',
                background: '#ff5722',
                border: '2px solid white',
                borderRadius: '50%',
              }}
            />
            <span>Your Location</span>
          </div>
        </div>
      </div>
    </div>
  );
}
