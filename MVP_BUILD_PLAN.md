# 🏗️ MVP Build Plan - Interactive 3D Condo Presentation Tool
**Philippine Real Estate Market**  
**Last Updated:** November 2, 2026 4:20 PM (UTC+8)

---

## ✅ RESEARCH COMPLETE - ALL 5 AGENTS FINISHED

### 1️⃣ Legal Compliance ✅
**Agent:** [Philippine Legal Research](bc-ad9301ca-be0c-5e7c-9b34-377b60224469)

**Key Findings:**
- ✅ **Data Privacy Act (RA 10173):** Explicit consent required, 12-month retention policy
- ✅ **PRC Licensing (RA 9646):** Must verify broker accreditation, include disclaimers
- ✅ **Cloud Hosting:** International (AWS/Vercel) is LEGAL without local data residency
- ✅ **Payment Processing:** PayMongo supports GCash, Maya, credit cards

**Implementation Checklist:** [COMPLIANCE_CHECKLIST_MVP.md](./COMPLIANCE_CHECKLIST_MVP.md)

---

### 2️⃣ Pricing & Business Model ✅
**Agent:** [Pricing Research](bc-fb9fef63-434f-505d-87cb-0cb1c5dc5861)

**RECOMMENDED PRICING:**
```
FREE TIER
├─ 1 active unit
├─ Unlimited shares (with watermark)
├─ 7-day lead retention
└─ Basic analytics

PRO TIER: ₱1,499/month
├─ 3 active units
├─ Unlimited shares (no watermark)
├─ 365-day lead retention
├─ Full CRM + analytics
├─ QR code generator
├─ Email export
└─ Priority support

TEAM TIER: ₱4,999/month
├─ 15 active units
├─ 5 team seats
├─ White-label branding
├─ API access
└─ Dedicated onboarding
```

**ADD-ONS:**
- 3D Scanning Service: ₱6,999/unit
- Extra unit slot: +₱399/month

**UNIT ECONOMICS (at 100 users):**
- MRR: ₱149,900
- CAC: ₱1,200 (Facebook Ads)
- LTV: ₱3,898 (13-month avg retention)
- **LTV:CAC = 3.25:1** ✅ (Target: >3.0)

---

### 3️⃣ Property Listing Forms + 3D Model ✅
**Agent:** [Listing Forms & 3D Assets](bc-7aecbf24-6266-5722-afbe-c6b1326e0fff)

**RECOMMENDED FORM TEMPLATE:**
Airbnb-style 5-step wizard (research-backed for completion rates):

**Step 1: Photos & Media**
- Hero image upload (drag-drop + mobile camera)
- Photo gallery (up to 20 images)
- 3D model upload (.glb) OR request scanning service
- Floor plan upload (optional)

**Step 2: Property Details**
- Property type (dropdown: Studio / 1BR / 2BR / 3BR / 4BR+ / Penthouse)
- Floor area (sqm)
- Floor number
- Parking slots (0-5+)
- Bedrooms / Bathrooms (steppers)
- Key features (multi-select: Pool / Gym / 24/7 Security / Balcony / Pet-friendly)

**Step 3: Location & Building**
- Building name (autocomplete from pre-seeded list)
- Address (Google Maps integration)
- Nearby landmarks (e.g., "5 min to BGC", "Walking distance to SM")

**Step 4: Pricing & Terms**
- Listing price (₱)
- Monthly association dues (₱)
- Turnover date
- Financing options (In-house / Bank / Pag-IBIG / Cash only)

**Step 5: Review & Publish**
- Preview of listing page
- Generate shareable link + QR code
- Set lead notification preferences

**FREE 3D MODEL FOR MVP DEMO:**
**Innerscene 2BHK Apartment**
- **Format:** GLB (web-ready)
- **Size:** 11.9 MB
- **License:** CC0 Public Domain (commercial use OK)
- **Quality:** Fully furnished, modern design, PBR materials
- **Download:** https://www.innerscene.com/tools/library/3d-parts/2bhk-apartment-3d-model-f3cc8f95
- **Why this one:** Best quality, realistic furniture, matches PH condo aesthetic

---

### 4️⃣ PropTech Competition Analysis ✅
**Agent:** [PropTech Competition](bc-45be5cdd-3caa-58e0-b730-7c4d2bd5fb86)

**MARKET GAPS IDENTIFIED:**
1. ✅ **No agent-first CRM tool** (MyProperty is consumer-focused)
2. ✅ **No self-service 3D scanning** (Lamudi/Property24 require photographer)
3. ✅ **No lead analytics** (Carousell/OLX have zero tracking)
4. ✅ **No shareable QR codes** (all platforms force login to share)
5. ✅ **No sample computation tool** (agents use Excel/Google Sheets manually)

**COMPETITORS:**
- **Lamudi Philippines:** Consumer marketplace, no agent tools
- **Property24 PH:** Basic listings, outdated UX
- **MyProperty.ph:** Good consumer app, weak agent dashboard
- **Carousell/OLX:** Generic classifieds, no real estate features
- **Matterport:** Premium pricing (₱58,464/year), US-focused

**OUR EDGE:**
- Agent-centric design (vs consumer-first competitors)
- DIY 3D scanning (vs outsourced photography)
- Embedded lead capture + CRM (vs external integrations)
- Philippine payment methods (GCash, Maya, Pag-IBIG)
- Shareable links with NO login required

---

### 5️⃣ iPhone LiDAR vs 360 Cameras ✅
**Agent:** [3D Scanning Equipment](bc-1f319ae0-25a8-58e2-acff-e457ad9bd8fa)

**RECOMMENDATION: iPhone LiDAR + Polycam Business**

**Why iPhone LiDAR Wins for MVP:**
- ✅ **Lowest cost:** ₱22,400/year (vs ₱87,854 for Insta360 X4 + Matterport)
- ✅ **Fastest:** 10-15 min total (vs 75-105 min for 360 camera)
- ✅ **Easiest to learn:** 2-3 practice scans (vs 1-2 weeks for 360 workflow)
- ✅ **Professional quality:** 0.5-inch accuracy, perfect for 90% of condos
- ✅ **Break-even:** 3-5 listings vs outsourcing (₱8,000/scan)

**Cost Per Listing (50 listings/year):**
| Method | Year 1 Total | Per Listing | vs Outsource |
|--------|-------------|-------------|--------------|
| **iPhone (owned) + Polycam** | **₱22,400** | **₱448** | **Save ₱377,600 (94%)** |
| iPhone (new 15 Pro) + Polycam | ₱75,290 | ₱1,506 | Save ₱324,710 (81%) |
| Insta360 X4 + Matterport | ₱87,854 | ₱1,757 | Save ₱312,146 (78%) |
| Outsource all | ₱400,000 | ₱8,000 | Baseline |

**Where to Buy (Philippines):**
- **iPhone 15 Pro:** Beyond the Box (₱52,890+)
- **Polycam Business:** $400/year (₱22,400) via https://poly.cam/pricing
- **Insta360 X4 (optional):** ₱26,390 via official Shopee/Lazada store

**Hybrid Strategy for Scale:**
- 80% of listings: iPhone LiDAR (standard 1-3BR condos)
- 20% premium: Insta360 X4 + Matterport (luxury penthouses, show units)

---

## 🎯 MVP ARCHITECTURE

### Tech Stack (CONFIRMED)

**Frontend:**
- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS + shadcn/ui
- Three.js + React Three Fiber + Drei
- Theatre.js (camera animations)
- Framer Motion (page transitions)

**Backend:**
- PostgreSQL (Supabase or Neon)
- Prisma ORM
- NextAuth.js (agent authentication)
- Cloudflare R2 (3D model storage)

**Payment:**
- PayMongo (GCash, Maya, credit cards)

**Analytics:**
- PostHog (lead tracking, heatmaps)

**Deployment:**
- Vercel (Next.js hosting)
- Domain: TBD (e.g., condotour.ph, propview.ph)

---

## 📱 MVP PAGES & FEATURES

### 1️⃣ Landing Page (`/`)
**Goal:** Convert agents to sign up for free trial

**Sections:**
1. **Hero:** "Close more deals with interactive 3D tours" + CTA (Start Free Trial)
2. **Demo Video:** 30-sec screen recording of 3D tour + lead capture
3. **Features Grid:**
   - 🏢 3D Virtual Tours
   - 📊 Lead Tracking CRM
   - 🔗 Shareable Links + QR Codes
   - 📄 Sample Computation Generator
   - 📱 Mobile-Optimized
4. **Pricing Table:** Free / Pro (₱1,499/mo) / Team (₱4,999/mo)
5. **Social Proof:** "Trusted by 50+ agents in Metro Manila" (placeholder)
6. **FAQ:** Common questions
7. **CTA Footer:** "Start your 7-day free trial"

**Mobbin Inspiration:**
- Zillow homepage layout
- Linktree pricing page
- Airbnb trust signals

---

### 2️⃣ 3D Scanning Service Page (`/scanning`)
**Goal:** Upsell 3D scanning service (₱6,999/unit)

**Sections:**
1. **Hero:** "Professional 3D Scanning for Your Listings"
2. **How It Works:**
   - Step 1: Book online
   - Step 2: We scan on-site (30-60 min)
   - Step 3: Get .glb file + floor plan in 48 hours
3. **Pricing:**
   - Studio/1BR: ₱3,000
   - 2BR/3BR: ₱6,999
   - 4BR+/Penthouse: ₱12,000
   - Rush (24hr): +₱2,000
4. **Before/After Examples:** Show difference between photos vs 3D tour
5. **Booking Form:**
   - Agent name
   - Property address
   - Unit type (dropdown)
   - Preferred date (calendar picker)
   - Phone number
   - Special requests (textarea)
6. **CTA:** "Book Now" → Confirmation email

---

### 3️⃣ Agent Dashboard (`/dashboard`)
**Goal:** Manage listings, view leads, generate links/QR codes

**Sections:**
1. **Top Navigation:**
   - Logo
   - My Listings
   - Leads
   - Settings
   - Upgrade (if Free tier)
   - Profile menu

2. **My Listings View:**
   - Card grid of active units (thumbnail, address, status)
   - "+ Add New Listing" button
   - Actions per listing:
     - Edit
     - View Analytics
     - Generate QR Code
     - Copy Share Link
     - Archive

3. **Add New Listing Flow:**
   - 5-step wizard (see form template above)
   - Upload 3D model OR "Request Scanning Service" CTA
   - Preview before publishing

4. **Leads View (CRM):**
   - Table: Lead Name | Phone | Property | Date Submitted | Status
   - Filters: Date range, property, status (New / Contacted / Qualified / Closed / Lost)
   - Export to CSV
   - Click row → Lead detail modal:
     - Contact info
     - Computation details (monthly income, down payment, loan terms)
     - Activity log (time spent, checkpoints visited, PDF downloads)

5. **Settings:**
   - Agent profile (photo, name, PRC license number, phone, WhatsApp)
   - Branding (header color for client-facing pages)
   - Notification preferences
   - Payment method (PayMongo)
   - Account status (Free / Pro)

---

### 4️⃣ Client-Facing Listing Page (`/view/[listingId]`)
**Goal:** Capture leads via sample computation form

**Layout:**

**Header:**
```
┌──────────────────────────────────────────────┐
│ [Agent Photo] Jane Doe, PRC #12345           │
│ [WhatsApp] [Call] [Email]                    │
└──────────────────────────────────────────────┘
```

**Tabs:**
```
[ Photos ] [ Floor Plan ] [ 3D Tour ]
```

**Photos Tab:**
- Lightbox gallery (Zillow-style)
- Hero image + grid of thumbnails

**Floor Plan Tab:**
- Zoomable floor plan image
- Dimensions labeled

**3D Tour Tab:**
- Full-screen Three.js canvas
- OrbitControls + Theatre.js camera animations
- Checkpoint buttons: "Living Room" / "Bedroom 1" / "Kitchen" / "Balcony"
- Day/Night toggle
- Mini-map (top-right corner showing current camera position)

**Property Details Section:**
```
📍 One Central, Makati City, 12th Floor
🛏️ 2 Bedrooms | 🛁 2 Bathrooms | 🚗 1 Parking
📏 75 sqm | 🏊 Pool, Gym, 24/7 Security
💰 ₱12,500,000 | ₱5,800/month dues
```

**CTA Section:**
```
┌──────────────────────────────────────────────┐
│ 📊 See Sample Computation                    │
│ Get personalized monthly payment estimate    │
│ [Button: Calculate Now]                      │
└──────────────────────────────────────────────┘
```

---

### 5️⃣ Sample Computation Modal + Lead Capture
**Trigger:** Click "Calculate Now" button

**Modal Form:**
```
┌─────────────────────────────────────────────────┐
│ Get Your Personalized Payment Estimate         │
│                                                 │
│ [Input] Full Name                               │
│ [Input] Phone Number                            │
│ [Input] Monthly Gross Income (₱)                │
│                                                 │
│ Loan Terms:                                     │
│ [ Dropdown ] 5 / 10 / 15 / 20 / 25 years        │
│                                                 │
│ Down Payment:                                   │
│ [ Slider ] 10% - 30% (default 20%)              │
│                                                 │
│ [ ] I consent to the processing of my personal  │
│     data in accordance with RA 10173.           │
│     (MUST be un-checked by default)             │
│                                                 │
│ [Button: Generate Computation]                  │
│ [Link: Privacy Policy]                          │
└─────────────────────────────────────────────────┘
```

**After Submit → Show Computation:**
```
┌─────────────────────────────────────────────────┐
│ Your Monthly Payment Estimate                   │
│                                                 │
│ Property Price:        ₱12,500,000              │
│ Down Payment (20%):    ₱2,500,000               │
│ Loan Amount:           ₱10,000,000              │
│ Interest Rate:         6.5% p.a.                │
│ Loan Term:             20 years                 │
│                                                 │
│ Monthly Amortization:  ₱74,557                  │
│ Monthly Dues:          ₱5,800                   │
│ ───────────────────────────────────             │
│ Total Monthly:         ₱80,357                  │
│                                                 │
│ [Button: Download PDF]                          │
│ [Button: Contact Jane Doe]                      │
│                                                 │
│ Note: This is an estimate. Actual rates may     │
│ vary depending on bank approval.                │
└─────────────────────────────────────────────────┘
```

**Lead Saved to CRM:**
- Name, phone, monthly income, loan term, down payment %
- Timestamp
- Property viewed
- Activity log (time spent on page, checkpoints visited)

---

## 🔐 COMPLIANCE IMPLEMENTATION

### Data Privacy Act (RA 10173)
**Form Consent Checkbox:**
```tsx
<label>
  <input type="checkbox" required />
  I consent to the processing of my personal data 
  (name, phone, financial info) for the purpose of 
  generating a personalized property computation and 
  being contacted by the real estate agent. 
  I understand my data will be stored for 12 months 
  and deleted thereafter unless I request otherwise.
  <a href="/privacy-policy">Privacy Policy</a>
</label>
```

**Privacy Policy Page (`/privacy-policy`):**
- Who collects data (agent + platform)
- What data is collected (name, phone, monthly income)
- Purpose (lead generation, computation)
- Retention period (12 months)
- Right to access, correct, delete
- Contact: privacy@[yourdomain].ph

**Auto-Deletion Cron Job:**
```typescript
// Runs daily via Vercel Cron
// Delete leads older than 12 months
await prisma.lead.deleteMany({
  where: {
    createdAt: {
      lt: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000)
    }
  }
});
```

---

### PRC License Verification (RA 9646)
**Agent Onboarding:**
- Input field: "PRC License Number" (required)
- Manual verification (admin reviews and approves)
- Unverified agents: Show banner "Pending PRC Verification"

**Client-Facing Disclaimer:**
```
IMPORTANT: This is a private listing. For inquiries, 
contact the licensed real estate professional listed 
above. This platform does not provide legal, financial, 
or investment advice. All computations are estimates only.
```

---

### Payment Processing (PayMongo)
**Supported Methods:**
- GCash
- Maya (formerly PayMaya)
- Credit/Debit Cards (Visa, Mastercard)
- Bank transfer

**Webhook Integration:**
- Payment success → Activate Pro subscription
- Payment failed → Email notification + retry

---

## 🗓️ 4-WEEK LAUNCH TIMELINE

### Week 1: Foundation ✅ (Research Complete)
- ✅ Research complete (all 5 agents)
- ⏳ Choose product name
- ⏳ Download 2BHK GLB model
- ⏳ Set up Next.js 14 project structure
- ⏳ Design landing page mockup (Figma)

### Week 2: Landing Pages + 3D Demo
- Build landing page (`/`)
- Build 3D scanning service page (`/scanning`)
- Integrate 2BHK GLB into React Three Fiber scene
- Add checkpoint camera animations (Theatre.js)
- Record demo video (screen capture + voiceover)
- Set up Vercel deployment

### Week 3: Compliance + Domain
- Build Privacy Policy page
- Implement consent checkbox
- Set up PayMongo sandbox
- Register domain (e.g., condotour.ph)
- SSL + DNS setup
- Deploy to production

### Week 4: Beta Launch
- Build agent onboarding form
- Build "Add Listing" wizard (5 steps)
- Build client-facing listing page (`/view/[id]`)
- Implement sample computation modal + PDF generator
- Launch to 10 beta agents (Facebook outreach)
- Collect feedback

---

## 📊 SUCCESS METRICS (MVP)

### Week 1-4 (Beta):
- ✅ 10 agent signups
- ✅ 5 listings created with 3D tours
- ✅ 20+ leads captured via computation form
- ✅ <3 sec page load time
- ✅ Zero data privacy complaints

### Month 2-3 (Public Launch):
- 50 agent signups
- 100+ listings
- 500+ leads captured
- 10 Pro subscriptions (₱14,990 MRR)
- 5 3D scanning service bookings (₱34,995 revenue)

### Month 4-6 (Growth):
- 200 agent signups
- 500+ listings
- 2,000+ leads
- 30 Pro subscriptions (₱44,970 MRR)
- 20 scanning bookings (₱139,980 revenue)
- ₱184,950 total MRR

---

## 🚀 NEXT STEPS (Awaiting User Confirmation)

### ❓ Decision Required:
**1. Product Name?**
- Option A: **PropView** (clear, professional)
- Option B: **CondoTour** (descriptive, SEO-friendly)
- Option C: **UnitLink** (modern, shareable-focused)
- Option D: **ShowPH** (local, catchy)
- Option E: Custom name?

**2. Ready to Build?**
Once you choose a name, I will:
1. Download the 2BHK GLB model to `/workspace/public/models/`
2. Update React Three Fiber scene to load realistic apartment
3. Set up Next.js 14 App Router structure
4. Build landing page + 3D demo

**3. Prioritization:**
- Option A: Start with landing pages (faster to launch, validate demand)
- Option B: Start with agent dashboard (longer build, full MVP experience)

---

## 📚 Reference Documents

### Research Outputs:
- [Legal Compliance Checklist](./COMPLIANCE_CHECKLIST_MVP.md)
- [4-Week Action Plan](./IMMEDIATE_ACTION_PLAN.md)
- [Executive Summary](./EXECUTIVE_SUMMARY.md)
- [Project Roadmap](./PROJECT_ROADMAP.md)

### Research Agent Reports (Full Transcripts):
1. [Philippine Legal Compliance](bc-ad9301ca-be0c-5e7c-9b34-377b60224469) - 89 pages
2. [Pricing & Business Model](bc-fb9fef63-434f-505d-87cb-0cb1c5dc5861) - 12,500 words
3. [Listing Forms + 3D Models](bc-7aecbf24-6266-5722-afbe-c6b1326e0fff) - 18,000 words
4. [PropTech Competition](bc-45be5cdd-3caa-58e0-b730-7c4d2bd5fb86) - 15,000 words
5. [3D Scanning Equipment](bc-1f319ae0-25a8-58e2-acff-e457ad9bd8fa) - 25,000+ words

---

**Status:** ✅ ALL RESEARCH COMPLETE - READY TO BUILD  
**Last Updated:** November 2, 2026 4:20 PM (UTC+8)
