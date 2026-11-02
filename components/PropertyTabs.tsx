'use client';

interface PropertyTabsProps {
  activeTab: 'photos' | 'floorplan' | '3d';
  onTabChange: (tab: 'photos' | 'floorplan' | '3d') => void;
}

export default function PropertyTabs({ activeTab, onTabChange }: PropertyTabsProps) {
  const tabs = [
    { id: 'photos' as const, label: 'Photos', icon: '📷' },
    { id: 'floorplan' as const, label: 'Floor Plan', icon: '📐' },
    { id: '3d' as const, label: '3D Tour', icon: '🎨' },
  ];

  return (
    <div className="sticky top-14 md:top-20 z-40 bg-white border-b">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 h-12 md:h-14 flex items-center justify-center gap-2 text-sm md:text-base font-medium transition-colors ${
              activeTab === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <span className="text-lg">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
