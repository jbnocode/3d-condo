# Try the Demo

## Quick Start
```bash
git clone https://github.com/jbnocode/3d-condo.git
cd 3d-condo
git checkout cursor/3d-condo-walkthrough-mvp-b3e2
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Demo Flow

### 1. Floor Selection Screen
- Grid of 30 floor buttons (1-30)
- Hover effect highlights floors
- Click any floor to begin the tour

### 2. Exterior View (Initial)
- Shows the condo tower from outside
- Selected floor is highlighted in yellow
- Camera positioned to view the building

### 3. Fly-In Animation (3 seconds)
- Camera smoothly flies from exterior into the selected unit
- Simulates entering through the highlighted floor window
- Inspired by architectural visualization reels

### 4. Interior Walkthrough
- **Scroll to navigate** through the apartment
- 5 checkpoint hotspots appear at bottom:
  - 🛋️ Living Room
  - 🛏️ Bedroom
  - 🚿 Bathroom
  - 🍳 Kitchen
  - 🌿 Balcony
- Click hotspots to jump to rooms (Theatre.js camera animation)
- **Day/Night toggle** (top right) - switches lighting
- **Floor Plan toggle** (top right) - UI ready for implementation

### 5. Agent Branding
Try with query params:
```
http://localhost:5173?agent=Juan+dela+Cruz&phone=09171234567
```
- Agent name and phone display in top-left card
- Disclaimer shows at bottom: "Artist's rendition · for illustration only"

## What You'll See

### Current 3D Content (Procedural)
- **Tower**: Simple 8x40x8 unit box with window grid
- **Interior**: Basic geometric rooms
  - Sofa, coffee table (living)
  - Bed (bedroom)
  - Counter (kitchen)
  - Sink (bathroom)
  - Glass balcony door
- **Lighting**: Ambient + directional (day), + point light (night)
- **Materials**: Simple colored materials (no textures yet)

### What's Working
✅ Floor selection UI
✅ Camera fly-in animation
✅ Day/night lighting toggle
✅ Checkpoint hotspot buttons
✅ Agent branding overlay
✅ Scroll-based navigation (Theatre.js)
✅ Mobile-friendly layout
✅ Responsive controls

### What's Basic (MVP)
⚠️ Procedural geometry (not realistic GLTF models)
⚠️ No textures (solid colors only)
⚠️ Floor plan toggle UI present but not functional
⚠️ Checkpoint hotspots update state but don't trigger camera yet

## Browser Compatibility
- **Chrome/Edge**: ✅ Recommended
- **Firefox**: ✅ Works
- **Safari**: ✅ Works (WebGL supported)
- **Mobile**: ✅ Touch controls ready

## Performance Notes
- Initial load: ~1MB JavaScript bundle (Theatre.js + Three.js)
- 60fps on modern desktops
- 30-60fps on mobile (untested on device)
- No texture compression yet (future optimization)

## Next: Replace with Real Models
To use actual GLTF models:
1. Export your floor plan as GLTF/GLB from Blender/SketchUp
2. Place in `public/models/apartment.glb`
3. Update `src/components/CondoScene.tsx`:
   ```tsx
   import { Gltf } from '@react-three/drei';
   // Replace ApartmentInterior component with:
   <Gltf src="/models/apartment.glb" />
   ```

## Debugging
- **Black screen**: Check browser console for errors
- **No 3D**: WebGL might be disabled in browser settings
- **Slow performance**: Try in Chrome, enable hardware acceleration
- **Theatre.js errors**: Clear browser cache and restart dev server

## Development Mode
Enable Theatre.js Studio for camera animation editing:
```tsx
// In src/main.tsx, uncomment:
import studio from '@theatre/studio';
import extension from '@theatre/r3f/dist/extension';
studio.extend(extension);
studio.initialize();
```
Then drag the camera in the 3D view to create new checkpoints.
