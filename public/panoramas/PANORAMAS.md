# 360° Panoramas

This directory contains equirectangular 360° panoramas for the Matterport-style walkthrough.

## Current Panoramas (Placeholders)

The included images are **placeholder gradients** for development. To get photorealistic panoramas:

### Option 1: Download from Poly Haven (CC0 - Free)

All Poly Haven assets are **CC0 (Public Domain)** - free for any use, no attribution required.

Run the download script:
```bash
cd /workspace
./scripts/download-panoramas.sh
```

This downloads 2K HDR panoramas:
- **Living Room**: Lythwood Lounge by Greg Zaal
- **Bedroom**: Lythwood Room by Greg Zaal  
- **Bathroom**: Modern Bathroom by Adrian Kubasa
- **Kitchen**: Anniversary Lounge by Greg Zaal
- **Balcony**: Cayley Interior by Greg Zaal (has balcony view)

Convert HDR to JPG for web:
```bash
# Using ImageMagick:
for f in public/panoramas/*-temp.hdr; do
  convert "$f" -quality 85 "${f%-temp.hdr}.jpg"
done

# Or use online: https://www.aconvert.com/image/hdr-to-jpg/
```

### Option 2: Browse Poly Haven Manually

Visit [Poly Haven Residential Interiors](https://polyhaven.com/hdris/interiors/residential) and download:
- Bedrooms: `lythwood_room`, `hotel_room`, `relax_inn_seaview_suite`
- Bathrooms: `modern_bathroom`, `bathroom`, `en_suite`
- Living: `lythwood_lounge`, `anniversary_lounge`, `kiara_interior`
- Kitchen/Dining: `anniversary_lounge`, `combination_room`

Download the **2K JPG** version for web use (smaller files, faster loading).

### Option 3: Custom Panoramas

Use your own 360° photos:
1. Shoot with a 360° camera (Ricoh Theta, Insta360, etc.)
2. Export as equirectangular projection (2:1 aspect ratio)
3. Resize to 4096x2048 or 2048x1024 for web
4. Save as JPG (quality 85-90)
5. Place in `public/panoramas/` with filenames:
   - `living-room.jpg`
   - `bedroom.jpg`
   - `bathroom.jpg`
   - `kitchen.jpg`
   - `balcony.jpg`

## Naming Convention

The code expects these exact filenames:
- `/panoramas/living-room.jpg` → Living Room
- `/panoramas/bedroom.jpg` → Bedroom
- `/panoramas/bathroom.jpg` → Bathroom
- `/panoramas/kitchen.jpg` → Kitchen
- `/panoramas/balcony.jpg` → Balcony

## Licenses

### Poly Haven Assets (CC0)
All Poly Haven HDRIs are **CC0 1.0 Universal (Public Domain)**:
- **Authors**: Greg Zaal, Adrian Kubasa, Sergej Majboroda, and others
- **Source**: https://polyhaven.com/
- **License**: CC0 - No attribution required, free for any use (commercial, personal, modified)
- **More info**: https://polyhaven.com/license

### Custom Panoramas
If you use your own 360° photos, ensure you have the rights to use them.

## Technical Specs

### Recommended Resolution
- **Development**: 2048x1024 (2K) - fast loading, good quality
- **Production**: 4096x2048 (4K) - high quality, larger files
- **Mobile-optimized**: 1024x512 (1K) - fastest loading

### Format
- **Projection**: Equirectangular (2:1 aspect ratio)
- **File type**: JPG (quality 80-90) or PNG
- **Color space**: sRGB

### File Size Targets
- 2K JPG (2048x1024): ~500KB - 2MB
- 4K JPG (4096x2048): ~1-4MB
- Keep under 2MB per panorama for fast mobile loading

## Optimization

For best performance:
```bash
# Resize and optimize with ImageMagick:
convert input.jpg -resize 2048x1024 -quality 85 -strip output.jpg

# Or use sharp/node:
npm install sharp
node -e "require('sharp')('input.jpg').resize(2048, 1024).jpeg({quality: 85}).toFile('output.jpg')"
```

## Attribution (Optional)

While CC0 requires no attribution, we choose to credit:
- Poly Haven - https://polyhaven.com/
- Individual photographers (Greg Zaal, Adrian Kubasa, etc.)

See the main README for full attribution.
