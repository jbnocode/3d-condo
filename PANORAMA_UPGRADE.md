# Matterport-Style Panorama Upgrade

This document describes the upgrade from procedural 3D geometry to a **Matterport-style 360° panorama viewer**.

## What Changed

### Before (MVP v1)
- Procedural Three.js geometry (boxes, simple meshes)
- WASD/scroll navigation through 3D space
- Basic materials with no textures

### After (Panorama Upgrade)
- **360° equirectangular panoramas** for each room
- **Mouse drag** to look around in each panorama
- **Hotspot teleportation** between rooms (like Matterport)
- **Smooth crossfade transitions** between panoramas
- Photorealistic interior views (when real panoramas are used)

## Features

### ✅ Implemented
1. **360° Panorama Viewer**
   - Equirectangular sphere mapping
   - Mouse drag (OrbitControls) to look around
   - Touch-friendly for mobile

2. **Hotspot Navigation**
   - Click room buttons to teleport between panoramas
   - Smooth 800ms crossfade transition
   - Active room highlighted

3. **Day/Night Mode**
   - Brightness overlay on panoramas
   - Toggles between full brightness (day) and 30% (night)

4. **Exterior → Interior Flow**
   - Kept floor selector UI
   - Kept fly-in animation from exterior
   - Transitions into first panorama (Living Room)

5. **Mobile Support**
   - Touch drag to look around
   - Responsive UI
   - Performance optimized

### 🎨 Panorama Sources (CC0 - Free)

All panoramas from **Poly Haven** (CC0 License):
- **Living Room**: Lythwood Lounge by Greg Zaal
- **Bedroom**: Lythwood Room by Greg Zaal
- **Bathroom**: Modern Bathroom by Adrian Kubasa
- **Kitchen**: Anniversary Lounge by Greg Zaal
- **Balcony**: Cayley Interior by Greg Zaal (has window/balcony view)

**License**: CC0 1.0 Universal (Public Domain)
- Free for any use (commercial, personal, modified)
- No attribution required (but we credit anyway)
- Source: https://polyhaven.com/

## Getting Panoramas

### Quick Start
```bash
# Option 1: Download Poly Haven panoramas
./scripts/download-panoramas.sh

# Convert HDR to JPG for web
for f in public/panoramas/*-temp.hdr; do
  convert "$f" -quality 85 "${f%-temp.hdr}.jpg"
done

# Option 2: Download JPG directly from Poly Haven website
# Visit https://polyhaven.com/hdris/interiors/residential
# Download 2K JPG versions and place in public/panoramas/
```

### File Naming
Place panoramas in `public/panoramas/`:
- `living-room.jpg` (2048x1024 or 4096x2048)
- `bedroom.jpg`
- `bathroom.jpg`
- `kitchen.jpg`
- `balcony.jpg`

## Technical Implementation

### Architecture
```
PanoramaScene.tsx
├── CondoTower (exterior view - unchanged)
├── PanoramaSphere (360° viewer per room)
│   └── Equirectangular texture mapping
├── PanoramaTransition (crossfade manager)
│   ├── Previous panorama (fade out)
│   └── Current panorama (fade in)
└── OrbitControls (mouse drag to look)
```

### Key Components

**PanoramaSphere**
- Uses Three.js `SphereGeometry` with `side: BackSide`
- Texture mapped with `EquirectangularReflectionMapping`
- Scale `[-1, 1, 1]` to flip inside-out for correct viewing

**PanoramaTransition**
- Manages crossfade between two panoramas
- 800ms transition duration with progress tracking
- Overlays both spheres during transition
- Eases opacity from 0 to 1

**OrbitControls**
- Enables mouse drag to rotate camera
- Disabled during fly-in animation
- Limited polar angle (prevent looking too far up/down)
- No zoom or pan (pure rotation)

### Camera Setup
```typescript
// Interior panorama viewing
position={[0, 0, 0]}  // Camera at center of sphere
fov={75}               // Standard field of view
near={0.1}
far={1000}

// OrbitControls
enableZoom={false}
enablePan={false}
rotateSpeed={-0.5}     // Negative for natural drag direction
minPolarAngle={Math.PI / 4}
maxPolarAngle={(3 * Math.PI) / 4}
```

## Day/Night Implementation

Overlay sphere with black transparent material:
```typescript
opacity = lightingMode === 'night' ? 0.7 : 0  // 70% dark at night
```

Simple but effective for adjusting panorama brightness.

## Performance

### Current Bundle Size
- Base: ~1MB (Three.js + React)
- Each 2K panorama: ~500KB - 1.5MB
- Total for 5 panoramas: ~3-8MB

### Optimization Tips
1. **Use 2K (2048x1024) for mobile**, 4K (4096x2048) for desktop
2. **Lazy load** panoramas (load on demand, not all at once)
3. **Progressive JPG** encoding for faster perceived load
4. **Compress** with quality 80-85 (minimal visual difference)

### Future Optimizations
- Implement lazy loading per panorama
- Add loading indicators
- Use WebP format for smaller files (with JPG fallback)
- Add LOD (Level of Detail) system

## Differences from Matterport

### What We Have (Similar)
✅ 360° panorama viewing
✅ Hotspot navigation between rooms
✅ Smooth transitions
✅ Mouse drag to look around
✅ Mobile-friendly

### What Matterport Has (Not Implemented)
❌ Dollhouse 3D view (would require 3D mesh + cameras)
❌ Floorplan measurements
❌ Depth sensing / 3D point cloud
❌ Mattertags (info hotspots within panoramas)
❌ Guided tours / auto-rotation

### Dollhouse View (Future)
To add a dollhouse/floorplan overview:
1. Create a simple 3D box model of the apartment
2. Position camera markers at each panorama location
3. Toggle between:
   - Panorama mode (current)
   - Dollhouse mode (third-person 3D view)
   - Floorplan mode (top-down 2D)

This requires architectural layout data.

## Custom Panoramas

To use your own 360° photos:

### Equipment
- 360° camera: Ricoh Theta, Insta360 ONE, GoPro Max, etc.
- Smartphone with panorama app (Google Street View app)

### Workflow
1. **Shoot** panoramas in each room
2. **Export** as equirectangular projection (2:1 ratio)
3. **Resize** to 2048x1024 or 4096x2048
4. **Optimize** with JPG quality 80-90
5. **Name** files: living-room.jpg, bedroom.jpg, etc.
6. **Place** in `public/panoramas/`

### Export from 360° Camera
Most 360° cameras export equirectangular by default.
- Ricoh Theta: Use Theta app → export
- Insta360: Use Studio → export as JPG
- GoPro Max: Use Player → export as equirectangular

## Attribution

We credit Poly Haven authors even though CC0 requires no attribution:

**Poly Haven** - https://polyhaven.com/  
**License**: CC0 1.0 Universal (Public Domain)

Individual photographers:
- **Greg Zaal** - Lythwood Room, Lythwood Lounge, Anniversary Lounge, Cayley Interior
- **Adrian Kubasa** - Modern Bathroom, Glasshouse Interior

## Testing

### Browser Testing
```bash
npm run dev
# Open http://localhost:5173?agent=Test&phone=12345
```

1. **Select a floor** → Should fly into living room panorama
2. **Drag mouse** → Should rotate view (look around)
3. **Click hotspots** → Should crossfade between panoramas
4. **Toggle day/night** → Should dim panoramas
5. **Mobile** → Touch drag should work

### Panorama Checklist
- [ ] Panoramas are 2:1 aspect ratio (equirectangular)
- [ ] File sizes under 2MB per panorama
- [ ] JPG quality 80-90 (good balance)
- [ ] Placed in `public/panoramas/`
- [ ] Named correctly (living-room.jpg, etc.)

## Known Issues

1. **Initial load** can be slow with 5x panoramas
   - Solution: Implement lazy loading
   
2. **No loading indicator** during panorama transition
   - Solution: Add spinner overlay during texture load

3. **Day/night is simple overlay** (not realistic)
   - Solution: Use actual night/dusk panoramas from Poly Haven

4. **No depth perception** (flat spheres)
   - Limitation of panorama approach vs full 3D

## Next Steps

### Immediate
1. **Download real Poly Haven panoramas**
2. **Test on mobile devices**
3. **Add loading indicators**

### Future Enhancements
1. **Dollhouse view** - Simple 3D box model with camera markers
2. **Mattertags** - Info hotspots within panoramas (using 3D sprites)
3. **Measurements** - Show room dimensions
4. **Auto-tour** - Automatic rotation through all rooms
5. **VR mode** - WebXR for VR headsets

## Resources

- **Poly Haven**: https://polyhaven.com/hdris/interiors/residential
- **Three.js Panorama Example**: https://threejs.org/examples/#webgl_panorama_equirectangular
- **Equirectangular Guide**: https://en.wikipedia.org/wiki/Equirectangular_projection
- **360° Camera Guide**: https://www.creativebloq.com/buying-guides/best-360-degree-cameras
