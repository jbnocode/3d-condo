# 3D Condo Walkthrough MVP

An interactive 3D condominium visualization for Philippine real estate, featuring exterior-to-interior camera transitions, checkpoint-based navigation, and agent branding.

## 🏗️ Built Upon Open Source

This project adapts [Andrew Prifer's Camera Fly-Through Tutorial](https://github.com/andrewprifer/codropscameraflythroughtutorial) (MIT License) as a foundation, then adds Matterport-style 360° panorama viewing.

**Credits:**
- **Base project**: Andrew Prifer / Codrops (MIT License)
- **Panoramas**: [Poly Haven](https://polyhaven.com/) (CC0 - Public Domain)
  - Lythwood Room, Lythwood Lounge by Greg Zaal
  - Modern Bathroom by Adrian Kubasa
  - Anniversary Lounge, Cayley Interior by Greg Zaal
- **License**: MIT for code, CC0 for panoramas (see LICENSE file)

## ✨ Features

### 🎬 Matterport-Style Experience
- 🏢 **Exterior tower view** with 30-floor selection UI
- 🎬 **Cinematic fly-in** from exterior into selected unit
- 🌐 **360° panorama rooms** - Photorealistic equirectangular panoramas (free CC0 from Poly Haven)
- 🖱️ **Mouse drag to look around** - OrbitControls for intuitive navigation
- 📍 **Hotspot teleportation** - Click to jump between rooms with smooth crossfade transitions
- 🗺️ **Interactive floor plan** - SVG overlay with room layout, current location marker, and click-to-navigate
- ⏳ **Loading indicators** - Visual feedback during panorama transitions
- 🌓 **Day/night mode** - Toggle lighting ambiance
- 📱 **Mobile-friendly** - Touch drag navigation, responsive layout
- 🏷️ **Agent branding** - Customizable via URL query params (`?agent=Name&phone=09171234567`)
- ⚠️ **Disclaimer** - "Artist's rendition · for illustration only"

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
npm run preview
```

## 🎨 Customization

### Agent Branding
Add query parameters to the URL:
```
http://localhost:5173?agent=Juan+dela+Cruz&phone=09171234567
```

### Using Custom Panoramas
1. Shoot 360° photos with a 360° camera (Ricoh Theta, Insta360, etc.)
2. Export as equirectangular projection (2:1 aspect ratio)
3. Resize to 2048x1024 (2K) or 4096x2048 (4K)
4. Save as JPG (quality 80-90)
5. Place in `public/panoramas/` with names:
   - `living-room.jpg`
   - `bedroom.jpg`
   - `bathroom.jpg`
   - `kitchen.jpg`
   - `balcony.jpg`

Or download free CC0 panoramas from Poly Haven:
```bash
./scripts/download-panoramas.sh
# Then convert HDR to JPG
```

See `PANORAMA_UPGRADE.md` for detailed instructions.

## 📁 Project Structure

```
3d-condo/
├── src/
│   ├── components/
│   │   ├── CondoScene.tsx       # Main 3D scene with condo model
│   │   ├── FloorSelector.tsx    # UI for choosing floors
│   │   ├── NavigationHotspots.tsx # Room checkpoint navigation
│   │   ├── FloorPlan.tsx        # Top-down 2D view
│   │   └── AgentBranding.tsx    # Agent info overlay
│   ├── App.tsx                  # Root component
│   └── main.tsx                 # Entry point
├── public/
│   └── models/                  # 3D assets (GLTF/GLB)
└── package.json
```

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Three.js** - 3D rendering engine
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful R3F helpers
- **Theatre.js** - Animation and camera sequencing
- **Vite** - Fast build tool

## 📝 Next Steps for Production

1. **Replace placeholder 3D model** with actual PH condo floor plans
2. **Add more realistic materials** and textures
3. **Optimize for mobile** performance (texture compression, LOD)
4. **Integrate with CRM** for lead capture
5. **Add analytics** to track user engagement
6. **Deploy to CDN** (Vercel, Netlify, Cloudflare Pages)

## 📄 License

MIT License - See LICENSE file for details.

Original tutorial copyright retained as per upstream MIT license.
