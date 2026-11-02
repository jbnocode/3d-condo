# 📱 Mobbin Responsive Design Research for Plott
**Mobile-First Real Estate 3D Presentation Tool**  
**Research Date:** November 2, 2026 4:50 PM (UTC+8)

---

## 🎯 Research Goal

Design Plott as a **fully responsive web app** that works seamlessly on:
1. **Mobile (320px-768px)** - Primary use case: on-site iPad/phone presentations
2. **Tablet (768px-1024px)** - iPad flyering/open house demos
3. **Desktop (1024px+)** - Agent dashboard management

---

## 📊 Key Findings from Mobbin

### 1️⃣ **3D Property Tour Patterns** (Zillow, Krea AI, TravelPerk)

#### Desktop Layout (Zillow 3D Home)
**Reference:** [Zillow 3D Tour](https://mobbin.com/screens/aaca7e7d-09fc-48c6-80c1-d4f1199644e9)

```
┌──────────────────────────────────────────────────────────┐
│ [Agent Header] Photos Floor Plan [3D Home] Request Tour  │
├─────────────────────┬────────────────────────────────────┤
│                     │ Total: 4236 sqft                   │
│                     │ Price: $1,350,000                  │
│   3D CANVAS         │                                     │
│   (Full height)     │ ┌──────────────────────┐          │
│                     │ │  Floor 1  [Mini Map] │          │
│   • Room labels     │ │  [Blue dots]         │          │
│   • Checkpoint dots │ └──────────────────────┘          │
│   • OrbitControls   │                                     │
│                     │ ┌──────────────────────┐          │
│                     │ │  Floor 2  [Mini Map] │          │
│                     │ │  [Blue dots]         │          │
│                     │ └──────────────────────┘          │
└─────────────────────┴────────────────────────────────────┘
```

**Key Patterns:**
- ✅ **Split-screen layout:** 3D canvas (70%) + sidebar (30%)
- ✅ **Persistent tabs:** Photos, Floor Plan, 3D Home stay visible
- ✅ **Mini floor plan navigation:** Interactive dots for checkpoints
- ✅ **Sticky header:** Agent info + CTA buttons always accessible

---

#### Mobile Adaptation Strategy

**Challenge:** 3D canvas needs full screen on mobile, but agent header + CTA must stay accessible.

**Solution (Inspired by Zillow + Airbnb):**

```
MOBILE LAYOUT (Portrait 375px):

┌─────────────────────────────┐
│ ← Bedroom            ✕  ⋯  │ ← Sticky top bar (70px)
│ [Agent Avatar] Jane Doe     │
├─────────────────────────────┤
│                             │
│                             │
│     3D CANVAS               │ ← Full height canvas
│     (Touch controls)        │   (calc(100vh - 70px - 120px))
│                             │
│     • Pinch to zoom         │
│     • Swipe to rotate       │
│     • Tap checkpoint        │
│                             │
│                             │
├─────────────────────────────┤
│  🏠 Living  🛏 Bed  🍳 Kit   │ ← Bottom checkpoint nav (60px)
│  See Computation →           │ ← CTA button (60px)
└─────────────────────────────┘
```

**Key Mobile Optimizations:**
- ✅ **Collapsible top bar:** Tap to expand agent details, auto-hide on scroll down
- ✅ **Horizontal checkpoint scroll:** Swipeable room tabs at bottom
- ✅ **Persistent CTA:** "See Sample Computation" button always visible
- ✅ **Touch-optimized 3D controls:**
  - 1-finger swipe: Rotate camera (OrbitControls)
  - 2-finger pinch: Zoom in/out
  - Tap checkpoint: Fly to that room (Theatre.js animation)

---

### 2️⃣ **Property Listing Responsive Layouts** (Zillow, Airbnb, Booking.com)

#### Desktop: Image Gallery + Details Side-by-Side
**Reference:** [Zillow Listing](https://mobbin.com/screens/d5f8bb0a-fa13-4584-8ab1-b690aea56262)

```
┌────────────────────────────────────────────────────┐
│  [Hero Image 2/3 width]   │  $1,395,000           │
│  ┌─┬─┬─┐                   │  4 bed 3 bath 4,113   │
│  │1│2│3│                   │                       │
│  └─┴─┴─┘                   │  [Request Tour]       │
│                            │  [Contact Agent]      │
│                            │                       │
│  What's special...         │  ✓ Built 1942         │
└────────────────────────────────────────────────────┘
```

#### Mobile: Stacked Vertical Layout
**Reference:** [Realtor.com Mobile](https://mobbin.com/screens/4eeaa2b1-f439-4846-97cf-36bdfe84f46a)

```
MOBILE (375px):

┌─────────────────────────┐
│ ← Back            ↑  ⋯  │
├─────────────────────────┤
│ [Exterior 6] [Bedroom]  │ ← Horizontal scroll chips
│ [Living Room 4]         │
├─────────────────────────┤
│ ● Sold on Jun 02, 2025  │
│ $848,000                │
│ 3 bed · 2 bath · 1,836  │
│ 1978 E 27th St, Brooklyn│
├─────────────────────────┤
│ □ Single Family  🏠 1940│
│ □ $461 Price per sqft   │
├─────────────────────────┤
│ Track home value        │
│                         │
│ Charming Brick 1-Family │
│ Home with Endless...    │
│ [Show more ▼]           │
├─────────────────────────┤
│  [Show more details]    │
└─────────────────────────┘
```

**Plott Mobile Listing Page:**

```
┌─────────────────────────┐
│ ← Back            ↑  ⋯  │
├─────────────────────────┤
│ [Photos] [Floor Plan]   │ ← Tab switcher
│ [🎨 3D Tour]             │
├─────────────────────────┤
│ One Central, Makati     │
│ ₱12,500,000             │
│ 2 bed · 2 bath · 75 sqm │
│ 🚗 1 Parking · 🏊 Pool   │
├─────────────────────────┤
│ [Agent Avatar]          │
│ Jane Doe, PRC #12345    │
│ [📱 WhatsApp] [☎ Call]  │
├─────────────────────────┤
│ Description...          │
│ [Read more ▼]           │
├─────────────────────────┤
│ 📊 See Sample           │
│    Computation →         │ ← CTA button (full width)
└─────────────────────────┘
```

---

### 3️⃣ **Agent Profile Header Patterns** (Delphi, Polywork, X)

#### Desktop: Sidebar Profile Card
**Reference:** [Delphi Profile](https://mobbin.com/screens/81081e5e-bc1b-448b-8f1b-7f57f894bc01)

```
┌───────────────────┐
│   [Avatar 120px]  │
│   Alex Smith      │
│   Product Designer│
│                   │
│   [Call] [Share]  │
│                   │
│   Ask me about    │
│   • Design tools  │
│   • Roadmaps      │
└───────────────────┘
```

#### Mobile: Compact Top Header
**Reference:** [Lightfield Contact](https://mobbin.com/screens/5e9a8331-a3be-4546-9a6c-734f5d47da67)

```
MOBILE (375px):

┌─────────────────────────┐
│ [Avatar] Robert Choi    │
│ 40px   Product Manager  │
│        +1 650-213-7379  │
│  [📞 Call] [✉ Email]    │
└─────────────────────────┘
```

**Plott Agent Header (Mobile):**

```
┌─────────────────────────┐
│ [Avatar] Jane Doe       │ ← 50px height, sticky on scroll
│ 40px   PRC Lic #12345   │
│  [WhatsApp] [Call] [⋯]  │ ← Icon buttons (44px touch targets)
└─────────────────────────┘
```

**Desktop:**
```
┌────────────────────────────────────────────────────┐
│ [Avatar] Jane Doe  PRC #12345  [WhatsApp] [Call]  │ ← 70px height
└────────────────────────────────────────────────────┘
```

---

### 4️⃣ **Bottom Sheet Modal Forms** (Airwallex, AllTrails, Mesh, Perplexity)

**Reference:** [AllTrails Add Waypoint](https://mobbin.com/screens/4325e508-4e4e-43e4-b3af-1e14d85a2049)

```
MOBILE (375px):

┌─────────────────────────┐
│                         │
│  (Background dimmed)    │
│                         │
│  ┌───────────────────┐  │
│  │ ──                │  │ ← Drag handle
│  │ Add a waypoint    │  │
│  │                   │  │
│  │ [Input] Title     │  │
│  │ [Input] Desc      │  │
│  │                   │  │
│  │ [Save Button]     │  │
│  └───────────────────┘  │
└─────────────────────────┘
```

**Plott "See Sample Computation" Modal (Mobile):**

```
USER TAPS "See Computation" BUTTON

┌─────────────────────────┐
│  (3D Tour dimmed)       │
│                         │
│  ┌───────────────────┐  │
│  │ ──                │  │ ← Swipe down to dismiss
│  │ Get Your Payment  │  │
│  │ Estimate          │  │
│  │                   │  │
│  │ Full Name         │  │
│  │ [Input field]     │  │
│  │                   │  │
│  │ Phone Number      │  │
│  │ [Input +63]       │  │
│  │                   │  │
│  │ Monthly Income (₱)│  │
│  │ [Input]           │  │
│  │                   │  │
│  │ Loan Term         │  │
│  │ [5y 10y 15y 20y]  │  │ ← Segmented control
│  │                   │  │
│  │ Down Payment      │  │
│  │ [Slider 10%-30%]  │  │
│  │                   │  │
│  │ ☐ I consent to... │  │ ← Checkbox (44px touch)
│  │ [Privacy Policy]  │  │
│  │                   │  │
│  │ [Generate ₱]      │  │ ← Full-width button
│  └───────────────────┘  │
└─────────────────────────┘
```

**Desktop: Centered Modal (600px width)**

```
┌────────────────────────────────────────────────────┐
│  (Background overlay)                              │
│                                                    │
│      ┌──────────────────────────────┐             │
│      │ ✕  Get Your Payment Estimate  │            │
│      │                               │            │
│      │  [Name]     [Phone]           │            │
│      │                               │            │
│      │  [Monthly Income ₱]           │            │
│      │                               │            │
│      │  Loan: [5y 10y 15y 20y 25y]   │            │
│      │  Down: [■■■■░░░░░░] 20%       │            │
│      │                               │            │
│      │  ☐ I consent to RA 10173...   │            │
│      │                               │            │
│      │  [Generate Computation]       │            │
│      └──────────────────────────────┘             │
└────────────────────────────────────────────────────┘
```

---

### 5️⃣ **Floating Action Button (FAB) Patterns** (Pangea, Airwallex, Rodeo, Jobber, Starbucks)

**Reference:** [Jobber FAB Menu](https://mobbin.com/screens/85be30de-6c55-4b32-a446-5caff51d4595)

```
MOBILE (375px):

┌─────────────────────────┐
│                         │
│  Content area           │
│                         │
│                         │
│              Request ⓘ  │ ← FAB expands to menu
│                 Task 📋  │
│              Expense 💵  │
│              Invoice 📄  │
│                Quote 🔍  │
│                  Job 🔧  │
│               Client 👤  │ ← Primary action (60px)
└─────────────────────────┘
```

**Plott Agent Dashboard FAB (Mobile):**

```
┌─────────────────────────┐
│  My Listings            │
│  ┌─────┐ ┌─────┐        │
│  │ Unit│ │ Unit│        │
│  │  #1 │ │  #2 │        │
│  └─────┘ └─────┘        │
│                         │
│           [+ Add Unit]  │ ← FAB (56px, bottom-right)
│                         │   Sticky position
└─────────────────────────┘
```

---

### 6️⃣ **Sticky Bottom CTA Bar** (Booking.com, Swiggy, Shopee, Starbucks)

**Reference:** [Booking.com Room Selection](https://mobbin.com/screens/efe87b20-f19b-4264-872b-3433a4f71001)
**Reference:** [Starbucks Store Details](https://mobbin.com/screens/4c101449-0fa9-499d-8ab5-ee2cc26f1f34)

```
MOBILE (375px):

┌─────────────────────────┐
│  Property Details       │
│  (Scrollable content)   │
│  ...                    │
│  ...                    │
├─────────────────────────┤
│  [Order here] ─────────→│ ← Sticky bottom bar (60px)
│                         │   Green background
└─────────────────────────┘   Fixed position
```

**Plott Client Listing Page (Mobile):**

```
┌─────────────────────────┐
│  [3D Tour]              │
│  Property Details       │
│  (Scrollable)           │
│  ...                    │
├─────────────────────────┤
│  📊 See Sample          │ ← Sticky bottom CTA (60px)
│     Computation →        │   Blue gradient
└─────────────────────────┘   z-index: 50
```

---

### 7️⃣ **Horizontal Tab Navigation** (Noom, Monday.com, Otter AI, Substack)

**Reference:** [Monday.com Tabs](https://mobbin.com/screens/7c5d8065-66e0-4b6d-950d-da59222f4b73)

```
MOBILE (375px):

┌─────────────────────────┐
│  Team Planning      ⋯  │
├─────────────────────────┤
│ Main Table       ▼  +  │ ← Dropdown + Action button
├─────────────────────────┤
│  Group Title    Status  │
│  + Add Column           │
│                         │
│  Item 1         [□]     │
│  Item 2         [□]     │
└─────────────────────────┘
```

**Plott Client Listing Tabs (Mobile):**

```
┌─────────────────────────┐
│  ← One Central, Makati  │
├─────────────────────────┤
│ [Photos] [Floor] [3D]   │ ← Sticky tabs (50px)
│  ●       Plan     Tour  │   Swipeable
├─────────────────────────┤
│                         │
│  [Active Tab Content]   │
│                         │
│                         │
└─────────────────────────┘
```

**Desktop: Full-width tabs**
```
┌────────────────────────────────────────────────────┐
│  [Photos] [Floor Plan] [3D Tour] [Street View]     │
│  ───────                                            │
└────────────────────────────────────────────────────┘
```

---

### 8️⃣ **Image Gallery Patterns** (Zillow, Airbnb, KAYAK, Klook)

**Reference:** [Zillow Virtual Staging](https://mobbin.com/screens/00a62e2c-8bfc-4699-8e25-0a78891cf000)

```
MOBILE (375px):

┌─────────────────────────┐
│  ← Back          ↑  ⋯   │
│                         │
│  [Large Photo]          │ ← Full-width hero (60% height)
│   1 / 58                │   Swipeable
│                         │
├─────────────────────────┤
│ 🪑 Midcentury           │ ← Style selector chips
│ 💎 Luxury               │   (Virtual staging options)
│ 🏡 Farmhouse            │
├─────────────────────────┤
│  [Continue]             │
└─────────────────────────┘
```

**Plott Photo Gallery (Mobile):**

```
┌─────────────────────────┐
│  ✕ One Central           │ ← Lightbox overlay
│                         │
│  [Hero Photo]           │ ← Full screen (80vh)
│   3 / 12                │   Pinch to zoom
│   ●●○○○○○○              │   Dot indicators
│                         │
├─────────────────────────┤
│ [Thumb] [Thumb] [Thumb] │ ← Horizontal thumbnails
└─────────────────────────┘   Swipeable
```

---

## 🎨 Plott Responsive Design System

### Breakpoints (Tailwind CSS)

```typescript
// tailwind.config.ts
export default {
  theme: {
    screens: {
      'sm': '640px',   // Mobile landscape
      'md': '768px',   // Tablet portrait
      'lg': '1024px',  // Desktop
      'xl': '1280px',  // Large desktop
      '2xl': '1536px'  // Extra large
    }
  }
}
```

### Mobile-First Component Architecture

```tsx
// Example: Responsive Agent Header
<header className="
  sticky top-0 z-50 bg-white border-b
  h-14 md:h-20
  px-4 md:px-8
  flex items-center justify-between
">
  {/* Mobile: Compact avatar + name */}
  <div className="flex items-center gap-2 md:gap-4">
    <img 
      src={agent.avatar} 
      className="w-10 h-10 md:w-14 md:h-14 rounded-full"
    />
    <div className="flex flex-col">
      <h3 className="text-sm md:text-lg font-semibold">
        {agent.name}
      </h3>
      <p className="text-xs md:text-sm text-gray-600">
        PRC Lic #{agent.prcLicense}
      </p>
    </div>
  </div>

  {/* Contact buttons */}
  <div className="flex gap-2">
    <button className="
      w-10 h-10 md:w-auto md:h-auto
      md:px-4 md:py-2
      bg-green-500 text-white rounded-full md:rounded-lg
      flex items-center justify-center gap-2
    ">
      <WhatsAppIcon className="w-5 h-5" />
      <span className="hidden md:inline">WhatsApp</span>
    </button>
    <button className="
      w-10 h-10 md:w-auto md:h-auto
      md:px-4 md:py-2
      bg-blue-500 text-white rounded-full md:rounded-lg
      flex items-center justify-center gap-2
    ">
      <PhoneIcon className="w-5 h-5" />
      <span className="hidden md:inline">Call</span>
    </button>
  </div>
</header>
```

---

## 📐 Mobile Touch Targets (44px minimum)

### iOS Human Interface Guidelines Compliance

```
✅ CORRECT (44px × 44px minimum):

┌─────┐ ┌─────┐ ┌─────┐
│ [✓] │ │ [✓] │ │ [✓] │  44px height
└─────┘ └─────┘ └─────┘
  8px gap  8px gap

❌ WRONG (Too small):

[✓][✓][✓]  32px height, no gap
```

**Plott Button Sizes:**
```css
/* tailwind.config.ts */
{
  spacing: {
    'touch': '44px',  /* iOS minimum touch target */
    'touch-lg': '56px' /* Comfortable tap area */
  }
}
```

```tsx
// Primary CTA button
<button className="
  w-full h-touch md:h-auto md:py-3
  bg-blue-600 text-white rounded-lg
  text-base md:text-lg font-semibold
">
  See Sample Computation
</button>

// Icon-only button
<button className="
  w-touch h-touch
  flex items-center justify-center
  rounded-full bg-gray-100
">
  <ShareIcon className="w-6 h-6" />
</button>
```

---

## 🎬 3D Canvas Responsive Strategy

### Desktop (1024px+):
```tsx
<div className="flex h-screen">
  {/* 3D Canvas: 70% width */}
  <div className="w-[70%] h-full">
    <Canvas>
      <CondoModel />
      <OrbitControls />
    </Canvas>
  </div>

  {/* Sidebar: 30% width */}
  <aside className="w-[30%] overflow-y-auto">
    <PropertyDetails />
    <CheckpointNavigation />
  </aside>
</div>
```

### Mobile (< 768px):
```tsx
<div className="h-screen flex flex-col">
  {/* Sticky top bar: 70px */}
  <header className="h-14 sticky top-0 z-50">
    <AgentHeader />
  </header>

  {/* 3D Canvas: calc(100vh - 70px - 120px) */}
  <div className="flex-1 relative">
    <Canvas>
      <CondoModel />
      {/* Mobile: No OrbitControls, use touch events */}
      <MobileTouchControls />
    </Canvas>

    {/* Floating checkpoint pills */}
    <div className="absolute bottom-4 left-0 right-0 px-4">
      <div className="flex gap-2 overflow-x-auto">
        <button className="px-4 py-2 bg-white/90 backdrop-blur rounded-full">
          🏠 Living Room
        </button>
        <button className="px-4 py-2 bg-white/90 backdrop-blur rounded-full">
          🛏️ Bedroom 1
        </button>
        {/* ... */}
      </div>
    </div>
  </div>

  {/* Sticky bottom CTA: 60px */}
  <footer className="h-15 sticky bottom-0 z-50">
    <button className="w-full h-full bg-blue-600 text-white">
      📊 See Sample Computation →
    </button>
  </footer>
</div>
```

---

## 🚀 Next Steps: Implementation Priority

### Phase 1: Mobile Client-Facing Page (Week 1)
1. ✅ Agent header component (sticky, 70px)
2. ✅ 3D canvas with touch controls (full height)
3. ✅ Horizontal checkpoint navigation (bottom, swipeable)
4. ✅ Sticky CTA button ("See Computation")
5. ✅ Bottom sheet modal (lead capture form)

### Phase 2: Desktop Adaptation (Week 1-2)
1. ✅ Split-screen layout (3D canvas 70% + sidebar 30%)
2. ✅ Tabbed navigation (Photos / Floor Plan / 3D Tour)
3. ✅ Centered modal (600px width)

### Phase 3: Agent Dashboard (Week 2-3)
1. ✅ Responsive card grid (1 col mobile, 2 col tablet, 3 col desktop)
2. ✅ FAB button for "Add New Listing"
3. ✅ Sticky header with search + filter

---

## 📚 Mobbin References (Saved for Design Phase)

### 3D/Virtual Tours:
- [Zillow 3D Home Tour](https://mobbin.com/screens/aaca7e7d-09fc-48c6-80c1-d4f1199644e9) - Desktop layout
- [Zillow Floor Plan View](https://mobbin.com/screens/cc16c8d3-a3a1-4651-90f3-6c571e0a1570) - Interactive mini-maps

### Property Listings:
- [Zillow Mobile Listing](https://mobbin.com/screens/d5f8bb0a-fa13-4584-8ab1-b690aea56262) - Image gallery + details
- [Airbnb Listing](https://mobbin.com/screens/908dec75-1f32-4b3a-b0e1-bee0953b91b7) - Tab navigation
- [Realtor.com Mobile](https://mobbin.com/screens/4eeaa2b1-f439-4846-97cf-36bdfe84f46a) - Compact mobile layout

### Agent Profiles:
- [Delphi Profile](https://mobbin.com/screens/81081e5e-bc1b-448b-8f1b-7f57f894bc01) - Desktop sidebar
- [Lightfield Contact](https://mobbin.com/screens/5e9a8331-a3be-4546-9a6c-734f5d47da67) - Mobile header

### Bottom Sheet Modals:
- [AllTrails Add Form](https://mobbin.com/screens/4325e508-4e4e-43e4-b3af-1e14d85a2049) - Simple input form
- [Perplexity Input](https://mobbin.com/screens/5218ddad-eb93-4088-884d-e37337a48521) - Keyboard handling

### FAB Patterns:
- [Jobber Action Menu](https://mobbin.com/screens/85be30de-6c55-4b32-a446-5caff51d4595) - Expandable FAB
- [Starbucks Store CTA](https://mobbin.com/screens/4c101449-0fa9-499d-8ab5-ee2cc26f1f34) - Sticky bottom button

---

**Status:** ✅ Research complete - Ready for design + development  
**Next Action:** Download 2BHK GLB model → Set up Next.js project → Build mobile-first 3D viewer
