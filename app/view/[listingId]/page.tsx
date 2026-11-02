'use client';

import { Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import AgentHeader from '@/components/AgentHeader';
import PropertyTabs from '@/components/PropertyTabs';
import PropertyDetails from '@/components/PropertyDetails';
import CheckpointNavigation from '@/components/CheckpointNavigation';
import ComputationModal from '@/components/ComputationModal';
import { Phone, MessageCircle, Share2 } from 'lucide-react';

// Dynamic import for 3D canvas (client-side only)
const Scene3D = dynamic(() => import('@/components/Scene3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-600">Loading 3D tour...</p>
      </div>
    </div>
  ),
});

// Mock data (will come from database)
const mockAgent = {
  id: '1',
  name: 'Jane Doe',
  prcLicense: '12345',
  avatar: '/images/agent-placeholder.jpg',
  phone: '+63 917 123 4567',
  whatsapp: '+639171234567',
};

const mockProperty = {
  id: '1',
  title: 'One Central, Makati City',
  price: 12500000,
  bedrooms: 2,
  bathrooms: 2,
  floorArea: 75,
  parkingSlots: 1,
  floor: 12,
  monthlyDues: 5800,
  features: ['Pool', 'Gym', '24/7 Security', 'Balcony'],
  description: 'Modern 2-bedroom condo in the heart of Makati CBD. Walking distance to Ayala Center and BGC. Fully furnished with contemporary design and smart home features.',
  images: [
    '/images/living-room.jpg',
    '/images/bedroom.jpg',
    '/images/kitchen.jpg',
  ],
  floorPlan: '/images/floor-plan.jpg',
};

const checkpoints = [
  { id: 'living', label: '🏠 Living Room', position: [0, 0, 0] },
  { id: 'bedroom1', label: '🛏️ Bedroom 1', position: [5, 0, 0] },
  { id: 'bedroom2', label: '🛏️ Bedroom 2', position: [-5, 0, 0] },
  { id: 'kitchen', label: '🍳 Kitchen', position: [0, 0, 5] },
  { id: 'balcony', label: '🌆 Balcony', position: [0, 0, -5] },
];

export default function ListingPage({ params }: { params: { listingId: string } }) {
  const [activeTab, setActiveTab] = useState<'photos' | 'floorplan' | '3d'>('3d');
  const [activeCheckpoint, setActiveCheckpoint] = useState('living');
  const [showComputationModal, setShowComputationModal] = useState(false);

  return (
    <div className="h-screen-safe flex flex-col overflow-hidden bg-white">
      {/* Agent Header - Sticky on mobile */}
      <AgentHeader agent={mockAgent} />

      {/* Tab Navigation */}
      <PropertyTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content Area */}
      <div className="flex-1 relative overflow-hidden">
        {activeTab === '3d' && (
          <>
            {/* 3D Canvas */}
            <div className="absolute inset-0">
              <Suspense fallback={<div className="w-full h-full bg-gray-100" />}>
                <Scene3D 
                  activeCheckpoint={activeCheckpoint}
                  onCheckpointClick={setActiveCheckpoint}
                />
              </Suspense>
            </div>

            {/* Checkpoint Navigation - Floating on mobile */}
            <div className="absolute bottom-20 left-0 right-0 px-4 z-10 md:hidden">
              <CheckpointNavigation
                checkpoints={checkpoints}
                activeCheckpoint={activeCheckpoint}
                onCheckpointClick={setActiveCheckpoint}
              />
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-80 bg-white border-l overflow-y-auto">
              <PropertyDetails property={mockProperty} />
              <div className="p-4 space-y-2">
                {checkpoints.map((checkpoint) => (
                  <button
                    key={checkpoint.id}
                    onClick={() => setActiveCheckpoint(checkpoint.id)}
                    className={`w-full px-4 py-3 rounded-lg text-left transition-colors ${
                      activeCheckpoint === checkpoint.id
                        ? 'bg-blue-100 text-blue-900 font-semibold'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    {checkpoint.label}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'photos' && (
          <div className="w-full h-full overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4">
              {mockProperty.images.map((img, idx) => (
                <div key={idx} className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Photo {idx + 1}</span>
                </div>
              ))}
            </div>
            <div className="md:hidden">
              <PropertyDetails property={mockProperty} />
            </div>
          </div>
        )}

        {activeTab === 'floorplan' && (
          <div className="w-full h-full flex items-center justify-center p-4 overflow-y-auto">
            <div className="max-w-2xl w-full aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Floor Plan</span>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Property Details Sheet (swipe up) */}
      <div className="md:hidden">
        <PropertyDetails property={mockProperty} compact />
      </div>

      {/* Sticky CTA Button - Mobile only */}
      <div className="md:hidden sticky bottom-0 z-50">
        <button
          onClick={() => setShowComputationModal(true)}
          className="w-full h-15 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-lg flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
        >
          📊 See Sample Computation →
        </button>
      </div>

      {/* Desktop CTA */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setShowComputationModal(true)}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-xl shadow-2xl flex items-center gap-2 transition-all"
        >
          📊 See Sample Computation
        </button>
      </div>

      {/* Computation Modal */}
      {showComputationModal && (
        <ComputationModal
          property={mockProperty}
          agent={mockAgent}
          onClose={() => setShowComputationModal(false)}
        />
      )}
    </div>
  );
}
