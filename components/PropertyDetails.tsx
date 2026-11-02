'use client';

import { Bed, Bath, Maximize2, Car, MapPin } from 'lucide-react';

interface PropertyDetailsProps {
  property: {
    title: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    floorArea: number;
    parkingSlots: number;
    floor?: number;
    monthlyDues?: number;
    features: string[];
    description: string;
  };
  compact?: boolean;
}

export default function PropertyDetails({ property, compact = false }: PropertyDetailsProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (compact) {
    return (
      <div className="bg-white border-t p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{formatPrice(property.price)}</h2>
            <p className="text-sm text-gray-600">{property.title}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span>{property.bedrooms} bed</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            <span>{property.bathrooms} bath</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize2 className="w-4 h-4" />
            <span>{property.floorArea} sqm</span>
          </div>
          {property.parkingSlots > 0 && (
            <div className="flex items-center gap-1">
              <Car className="w-4 h-4" />
              <span>{property.parkingSlots}</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 space-y-4">
      {/* Price and Location */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {formatPrice(property.price)}
        </h1>
        <div className="flex items-start gap-2 text-gray-600">
          <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p className="text-base">{property.title}</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y">
        <div>
          <div className="flex items-center gap-2 text-gray-600 mb-1">
            <Bed className="w-5 h-5" />
            <span className="text-sm">Bedrooms</span>
          </div>
          <p className="text-xl font-semibold">{property.bedrooms}</p>
        </div>

        <div>
          <div className="flex items-center gap-2 text-gray-600 mb-1">
            <Bath className="w-5 h-5" />
            <span className="text-sm">Bathrooms</span>
          </div>
          <p className="text-xl font-semibold">{property.bathrooms}</p>
        </div>

        <div>
          <div className="flex items-center gap-2 text-gray-600 mb-1">
            <Maximize2 className="w-5 h-5" />
            <span className="text-sm">Floor Area</span>
          </div>
          <p className="text-xl font-semibold">{property.floorArea} sqm</p>
        </div>

        <div>
          <div className="flex items-center gap-2 text-gray-600 mb-1">
            <Car className="w-5 h-5" />
            <span className="text-sm">Parking</span>
          </div>
          <p className="text-xl font-semibold">{property.parkingSlots}</p>
        </div>
      </div>

      {/* Additional Info */}
      {(property.floor || property.monthlyDues) && (
        <div className="space-y-2 text-sm">
          {property.floor && (
            <p className="text-gray-600">
              <span className="font-medium">Floor:</span> {property.floor}th floor
            </p>
          )}
          {property.monthlyDues && (
            <p className="text-gray-600">
              <span className="font-medium">Monthly Dues:</span> {formatPrice(property.monthlyDues)}
            </p>
          )}
        </div>
      )}

      {/* Features */}
      {property.features.length > 0 && (
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Features & Amenities</h3>
          <div className="flex flex-wrap gap-2">
            {property.features.map((feature, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Description */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">About this property</h3>
        <p className="text-gray-700 leading-relaxed">{property.description}</p>
      </div>
    </div>
  );
}
