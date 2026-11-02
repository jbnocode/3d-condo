# 🏢 Plott - Interactive 3D Property Tours

**Mobile-first real estate presentation tool for Philippine agents**

Transform your property listings into interactive 3D experiences. Close more deals with virtual tours, automated lead tracking, and data-driven insights.

---

## ✨ Features

### Client-Facing (Mobile-Optimized)
- 🎨 **Interactive 3D Tours** - Full-screen WebGL canvas with touch controls
- 📱 **Mobile-First Design** - Optimized for on-site iPad/tablet presentations
- 🏠 **Checkpoint Navigation** - Swipeable room buttons (Living Room, Bedroom, Kitchen, Balcony)
- 📊 **Sample Computation Modal** - Lead capture + payment calculator
- 📄 **PDF Generator** - Personalized amortization schedules
- 👤 **Agent Header** - Contact buttons (WhatsApp, Call, Share)

### Agent Dashboard (Coming Soon)
- 📂 Listing management (5-step wizard)
- 📈 Lead tracking CRM
- 🔗 QR code generator
- 📊 Analytics dashboard

---

## 🚀 Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS (mobile-first)
- React Three Fiber (3D rendering)
- Framer Motion (animations)
- React Hook Form + Zod (forms)

**Backend (Planned):**
- Neon (PostgreSQL)
- Prisma ORM
- Cloudflare R2 (storage)
- PayMongo (payments)

**Hosting:**
- Vercel (Frontend + API)
- Cloudflare R2 (3D models + images)

---

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📱 Responsive Breakpoints

```
Mobile:  320px - 768px  (Primary use case)
Tablet:  768px - 1024px (iPad presentations)
Desktop: 1024px+        (Agent dashboard)
```

---

## 🎯 Routes

### Public Routes
- `/` - Landing page
- `/view/[listingId]` - Client-facing listing page (3D tour + lead capture)

### Coming Soon
- `/dashboard` - Agent dashboard
- `/dashboard/listings` - Manage listings
- `/dashboard/leads` - CRM
- `/scanning` - 3D scanning service request
- `/privacy-policy` - Data Privacy Act (RA 10173) compliance

---

## 🎨 Design Patterns (Mobbin Research)

Based on patterns from Zillow, Airbnb, Booking.com:

1. **3D Canvas Layout**
   - Mobile: Full-height canvas with sticky agent header (70px) + bottom CTA (60px)
   - Desktop: Split-screen (3D canvas 70% + sidebar 30%)

2. **Agent Header**
   - Mobile: Compact avatar + contact buttons (44px touch targets)
   - Desktop: Full profile with name, license, and contact options

3. **Bottom Sheet Modal**
   - Swipeable lead capture form (drag handle on mobile)
   - Centered modal on desktop (600px width)

4. **Touch Optimization**
   - 1-finger swipe: Rotate camera
   - 2-finger pinch: Zoom
   - Tap checkpoint: Fly to room

---

## 📊 Sample Data (Mock)

Current demo uses placeholder data:

```typescript
const mockAgent = {
  name: 'Jane Doe',
  prcLicense: '12345',
  phone: '+63 917 123 4567',
};

const mockProperty = {
  title: 'One Central, Makati City',
  price: 12500000, // ₱12.5M
  bedrooms: 2,
  bathrooms: 2,
  floorArea: 75, // sqm
  parkingSlots: 1,
};
```

---

## 🔐 Compliance (RA 10173 - Data Privacy Act)

### Implemented:
- ✅ Explicit consent checkbox (un-checked by default)
- ✅ Privacy policy link
- ✅ Clear data retention notice (12 months)

### TODO:
- [ ] Automated lead deletion cron job
- [ ] PRC license verification
- [ ] Disclaimer text on all pages
- [ ] Cookie consent banner

---

## 🗺️ Project Structure

```
/workspace
├── app/
│   ├── view/[listingId]/
│   │   └── page.tsx          # Client-facing listing page
│   ├── globals.css           # Tailwind + custom CSS
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Landing page
├── components/
│   ├── AgentHeader.tsx       # Sticky agent profile header
│   ├── PropertyTabs.tsx      # Photos | Floor Plan | 3D Tour
│   ├── CheckpointNavigation.tsx  # Horizontal swipeable pills
│   ├── PropertyDetails.tsx   # Property info section
│   ├── ComputationModal.tsx  # Lead capture + calculator
│   └── Scene3D.tsx           # React Three Fiber 3D canvas
├── public/
│   ├── models/
│   │   └── test.glb          # 3D apartment model (1.8 MB)
│   └── images/               # Property photos (placeholders)
├── lib/                      # Utilities (empty for now)
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🎬 3D Model

Currently using a test GLB model from Khronos samples (1.8 MB).

**TODO:** Replace with actual furnished apartment model:
- **Source:** Innerscene 2BHK Apartment
- **Format:** GLB (11.9 MB)
- **License:** CC0 Public Domain
- **URL:** https://www.innerscene.com/tools/library/3d-parts/2bhk-apartment-3d-model-f3cc8f95

---

## 💰 Pricing Model

### Pro Tier: ₱1,499/month
- 3 active units
- Unlimited shares (no watermark)
- Full CRM + analytics
- QR code generator
- 365-day lead retention

### Add-Ons:
- 3D Scanning Service: ₱6,999/unit
- Extra unit slot: +₱399/month

---

## 🚧 Roadmap

### Phase 1: Foundation (Week 1) ✅
- [x] Next.js 14 setup
- [x] Tailwind CSS + responsive design
- [x] Client-facing listing page (mobile-optimized)
- [x] 3D viewer with React Three Fiber
- [x] Lead capture modal + form validation
- [x] Agent header component

### Phase 2: Database & Backend (Week 2)
- [ ] Neon PostgreSQL setup
- [ ] Prisma schema + migrations
- [ ] Agent authentication (NextAuth)
- [ ] Listing CRUD API
- [ ] Lead storage + CRM

### Phase 3: Agent Dashboard (Week 3)
- [ ] Agent onboarding flow
- [ ] Listing creation wizard (5 steps)
- [ ] Photo upload (Cloudflare R2)
- [ ] QR code generator
- [ ] Share link generator
- [ ] Analytics dashboard

### Phase 4: Polish & Launch (Week 4)
- [ ] Landing page refinement
- [ ] 3D scanning service page
- [ ] Privacy policy page
- [ ] PayMongo integration
- [ ] Production deployment (Vercel)

---

## 📝 Environment Variables

Create `.env.local`:

```bash
# Database (Neon)
DATABASE_URL="postgresql://user:pass@ep-xxx.neon.tech/plott"

# Auth (NextAuth)
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"

# Storage (Cloudflare R2)
R2_ACCOUNT_ID="your-account-id"
R2_ACCESS_KEY_ID="your-access-key"
R2_SECRET_ACCESS_KEY="your-secret"
R2_BUCKET_NAME="plott-models"

# Payment (PayMongo)
PAYMONGO_SECRET_KEY="sk_test_xxx"
PAYMONGO_PUBLIC_KEY="pk_test_xxx"

# Analytics (PostHog)
NEXT_PUBLIC_POSTHOG_KEY="phc_xxx"
NEXT_PUBLIC_POSTHOG_HOST="https://app.posthog.com"
```

---

## 📚 Research Documents

- [`MVP_BUILD_PLAN.md`](./MVP_BUILD_PLAN.md) - Complete technical spec
- [`MOBBIN_RESPONSIVE_DESIGN_RESEARCH.md`](./MOBBIN_RESPONSIVE_DESIGN_RESEARCH.md) - Mobile UX patterns
- [`COMPLIANCE_CHECKLIST_MVP.md`](./COMPLIANCE_CHECKLIST_MVP.md) - Legal requirements
- [`EXECUTIVE_SUMMARY.md`](./EXECUTIVE_SUMMARY.md) - Business strategy
- [`PROJECT_ROADMAP.md`](./PROJECT_ROADMAP.md) - Product vision

---

## 🧪 Testing

### Manual Testing Checklist

**Mobile (375px):**
- [ ] Agent header sticky on scroll
- [ ] Tabs swipeable
- [ ] 3D canvas touch controls (rotate, pinch zoom)
- [ ] Checkpoint pills horizontal scroll
- [ ] CTA button always visible
- [ ] Modal swipeable to dismiss
- [ ] Form validation works
- [ ] Computation displays correctly

**Desktop (1280px):**
- [ ] Split-screen layout (3D + sidebar)
- [ ] Checkpoint buttons in sidebar
- [ ] Modal centered (600px width)
- [ ] All touch targets clickable

---

## 🤝 Contributing

This is a private project for Philippine real estate agents.

---

## 📄 License

Proprietary - All rights reserved

---

## 🇵🇭 Made for the Philippines

Built with Philippine real estate agents in mind:
- GCash & Maya payment support
- PRC license compliance
- Peso (₱) currency formatting
- Philippine phone number validation
- Data Privacy Act (RA 10173) compliant

---

**Status:** ✅ Phase 1 Complete - Mobile-responsive client-facing page is live!  
**Next:** Phase 2 - Database setup + Agent dashboard  
**Demo:** [http://localhost:3000/view/demo-unit-1](http://localhost:3000/view/demo-unit-1)
