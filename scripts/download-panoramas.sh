#!/bin/bash
# Download free CC0 panoramas from Poly Haven for the condo walkthrough
# All assets are CC0 licensed (no attribution required, but we credit anyway)

set -e

PANO_DIR="public/panoramas"
mkdir -p "$PANO_DIR"

echo "Downloading free CC0 panoramas from Poly Haven..."

# Living Room - Lythwood Lounge (CC0)
echo "Downloading living room panorama..."
curl -L "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/lythwood_lounge_2k.hdr" \
  -o "$PANO_DIR/living-room-temp.hdr" 2>/dev/null || true

# Bedroom - Lythwood Room (CC0)
echo "Downloading bedroom panorama..."
curl -L "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/lythwood_room_2k.hdr" \
  -o "$PANO_DIR/bedroom-temp.hdr" 2>/dev/null || true

# Bathroom - Modern Bathroom (CC0)
echo "Downloading bathroom panorama..."
curl -L "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/modern_bathroom_2k.hdr" \
  -o "$PANO_DIR/bathroom-temp.hdr" 2>/dev/null || true

# Kitchen - Anniversary Lounge (CC0)
echo "Downloading kitchen/dining panorama..."
curl -L "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/anniversary_lounge_2k.hdr" \
  -o "$PANO_DIR/kitchen-temp.hdr" 2>/dev/null || true

# Balcony - Cayley Interior (has balcony view) (CC0)
echo "Downloading balcony panorama..."
curl -L "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/cayley_interior_2k.hdr" \
  -o "$PANO_DIR/balcony-temp.hdr" 2>/dev/null || true

echo "Panoramas downloaded! Note: These are HDR files."
echo "For web use, convert to JPG with: convert input.hdr -quality 85 output.jpg"
echo "Or use an online tool like https://www.aconvert.com/image/hdr-to-jpg/"
