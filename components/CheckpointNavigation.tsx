'use client';

interface Checkpoint {
  id: string;
  label: string;
  position: number[];
}

interface CheckpointNavigationProps {
  checkpoints: Checkpoint[];
  activeCheckpoint: string;
  onCheckpointClick: (id: string) => void;
}

export default function CheckpointNavigation({
  checkpoints,
  activeCheckpoint,
  onCheckpointClick,
}: CheckpointNavigationProps) {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-safe">
      <div className="flex gap-2 mx-auto">
        {checkpoints.map((checkpoint) => (
          <button
            key={checkpoint.id}
            onClick={() => onCheckpointClick(checkpoint.id)}
            className={`
              px-4 py-2.5 rounded-full whitespace-nowrap font-medium text-sm
              backdrop-blur-lg transition-all active:scale-95
              ${
                activeCheckpoint === checkpoint.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white/90 text-gray-700 hover:bg-white shadow-md'
              }
            `}
          >
            {checkpoint.label}
          </button>
        ))}
      </div>
    </div>
  );
}
