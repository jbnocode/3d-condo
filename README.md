# 3D Condo Walkthrough MVP

An interactive 3D condominium visualization for Philippine real estate, featuring exterior-to-interior camera transitions, checkpoint-based navigation, and agent branding.

## 🏗️ Built Upon Open Source

This project adapts [Andrew Prifer's Camera Fly-Through Tutorial](https://github.com/andrewprifer/codropscameraflythroughtutorial) (MIT License), which demonstrates scroll-based camera animation using Theatre.js and React Three Fiber.

**Upstream credit:**
- Original tutorial: Copyright (c) 2009 - 2022 [Codrops](https://tympanus.net/codrops)
- Camera fly-through technique by Andrew Prifer
- MIT License (see LICENSE file)

## ✨ Features

- 🏢 **Exterior tower view** with floor selection UI
- 🎬 **Cinematic fly-in** from exterior into selected unit (inspired by architectural visualization)
- 📍 **Checkpoint navigation** - Smooth camera transitions between Living Room, Bedroom, Bath, Kitchen, and Balcony
- 🗺️ **Floor plan toggle** - Switch to top-down 2D view
- 🌓 **Day/night lighting** - Toggle between daytime and nighttime ambiance
- 📱 **Mobile-friendly** - Touch controls and responsive layout
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

### Modifying Checkpoints
Edit `src/components/CondoScene.tsx` and update the checkpoint positions in the Theatre.js sequence.

### Replacing the 3D Model
1. Export your GLTF/GLB model from Blender or other 3D software
2. Place it in the `public/` folder
3. Update the path in `src/components/CondoScene.tsx`

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
