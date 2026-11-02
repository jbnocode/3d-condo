'use client';

import { Phone, MessageCircle, Share2, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface AgentHeaderProps {
  agent: {
    id: string;
    name: string;
    prcLicense: string;
    avatar: string;
    phone: string;
    whatsapp: string;
  };
}

export default function AgentHeader({ agent }: AgentHeaderProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${agent.whatsapp.replace(/\D/g, '')}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${agent.phone}`;
  };

  const handleShareClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check out this property',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="h-14 md:h-20 px-4 md:px-8 flex items-center justify-between">
        {/* Agent Info */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Avatar */}
          <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg md:text-2xl">
            {agent.name.charAt(0)}
          </div>

          {/* Name and License */}
          <div className="flex flex-col">
            <h3 className="text-sm md:text-lg font-semibold text-gray-900">
              {agent.name}
            </h3>
            <p className="text-xs md:text-sm text-gray-600">
              PRC Lic #{agent.prcLicense}
            </p>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="flex items-center gap-2">
          {/* WhatsApp - Mobile: icon only, Desktop: with text */}
          <button
            onClick={handleWhatsAppClick}
            className="h-touch md:h-auto w-touch md:w-auto md:px-4 md:py-2 bg-green-500 hover:bg-green-600 text-white rounded-full md:rounded-lg flex items-center justify-center gap-2 transition-colors active:scale-95"
            aria-label="Contact via WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden md:inline font-medium">WhatsApp</span>
          </button>

          {/* Call */}
          <button
            onClick={handleCallClick}
            className="h-touch md:h-auto w-touch md:w-auto md:px-4 md:py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full md:rounded-lg flex items-center justify-center gap-2 transition-colors active:scale-95"
            aria-label="Call agent"
          >
            <Phone className="w-5 h-5" />
            <span className="hidden md:inline font-medium">Call</span>
          </button>

          {/* Share - Mobile only */}
          <button
            onClick={handleShareClick}
            className="md:hidden h-touch w-touch bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full flex items-center justify-center transition-colors active:scale-95"
            aria-label="Share listing"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Expandable details (mobile only) */}
      {isExpanded && (
        <div className="md:hidden px-4 py-3 border-t bg-gray-50 animate-in slide-in-from-top">
          <p className="text-sm text-gray-700 mb-2">
            <span className="font-medium">Phone:</span> {agent.phone}
          </p>
          <p className="text-xs text-gray-500">
            Licensed Real Estate Professional
          </p>
        </div>
      )}
    </header>
  );
}
