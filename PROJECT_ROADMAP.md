# 🏗️ Real Estate Agent Tool - Project Roadmap

**Product Name:** *TBD* (Options: PropView, CondoTour, UnitLink, ShowPH)

**Vision:** Empower Philippine real estate agents to close more deals with interactive 3D property presentations, automated lead tracking, and data-driven insights.

---

## 🎯 Product Positioning

**Core Value Proposition:**
"Transform your property listings into interactive 3D experiences and never lose a lead again."

**Target Market:**
- **Primary:** Individual real estate agents in Metro Manila
- **Secondary:** Small real estate brokerages (2-10 agents)
- **Future:** Consumer marketplace (agent tool → Zillow-style platform)

**Use Cases:**
1. **On-site demos** - Agent walks clients through iPad/tablet with 3D tour instead of paper brochures
2. **Remote sharing** - Agent sends WhatsApp/Facebook link for clients to explore at home
3. **Open house** - QR codes displayed for visitors to scan and explore later
4. **Social media** - Shareable links posted on Facebook/Instagram for lead generation

---

## 📊 Two-Sided Product

### SIDE A: Agent Dashboard (B2B SaaS)
**What:** Web application for agents to manage listings, track leads, generate shareable links

**Key Features:**
- Property listing management (add/edit units)
- Photo & 3D model upload
- Shareable link + QR code generator
- CRM: Lead capture and tracking
- Analytics: Views, engagement, conversion funnel
- Agent profile customization

### SIDE B: Client-Facing Page (B2C Viewing Experience)
**What:** Beautiful public property page with 3D tour that clients receive via link/QR

**Key Features:**
- Photo gallery + floor plan
- Interactive 3D walkthrough with checkpoints
- Agent branding (profile, contact button)
- Lead capture form ("Get Sample Computation")
- Mobile-optimized experience
- WhatsApp integration

---

## 🗺️ MVP Development Phases

### ✅ **Phase 0: Foundation (COMPLETED)**
- [x] 3D condo viewer with React Three Fiber
- [x] Checkpoint-based navigation
- [x] Day/night mode
- [x] Agent branding via query params
- [x] Floor selector UI
- [x] Mobile-friendly controls

**Current Status:** Basic 3D viewer works locally at `http://localhost:5173`

---

### 🚧 **Phase 1: Landing Page + 3D Scanning Service Page (CURRENT)**

**Goal:** Validate market interest before building full product

#### 1.1 Landing Page
**URL:** `/` (homepage)

**Sections:**
1. **Hero:**
   - Headline: "Close More Deals with Interactive 3D Property Tours"
   - Subheadline: "The complete sales tool for Philippine real estate agents"
   - CTA: "Start Free Trial" + "See Demo"
   - Hero image/video: Screen recording of 3D tour in action

2. **Problem/Solution:**
   - Problem: "Paper brochures don't engage. Leads get lost. No way to track interest."
   - Solution: 3-column value props with icons:
     - 📱 Interactive 3D Tours
     - 📊 Built-in CRM & Analytics
     - 🔗 Shareable Links + QR Codes

3. **Product Demo:**
   - Embedded live demo or video walkthrough
   - "Try it yourself" interactive preview

4. **Features Grid:**
   - 6 key features with screenshots:
     - Beautiful property pages
     - 3D checkpoint navigation
     - Lead capture forms
     - Real-time analytics
     - Agent branding
     - Mobile-optimized

5. **How It Works:**
   - 3-step process:
     1. "Upload your property photos"
     2. "Share the link or QR code"
     3. "Track leads and close deals"

6. **Pricing Preview:**
   - Simple 3-tier table (pricing TBD after research)
   - Free tier to hook agents
   - "Coming Soon" badge

7. **Social Proof:**
   - "Trusted by agents at [placeholder brokerage names]"
   - Testimonial placeholders (to be filled after beta)

8. **CTA Section:**
   - "Ready to transform your property presentations?"
   - Dual CTA: "Start Free Trial" + "Request a Demo"

9. **Footer:**
   - Links: About, Features, Pricing, Blog, Contact
   - Social media icons
   - Philippine address/contact

**Tech Stack for Landing:**
- Next.js 14 (App Router) - SEO-friendly
- Tailwind CSS + shadcn/ui components
- Framer Motion for animations
- Deploy: Vercel

---

#### 1.2 3D Scanning Service Page
**URL:** `/3d-scanning` or `/scanning-service`

**Purpose:** Offer professional 3D scanning as a value-added service while agents wait for DIY tools

**Sections:**
1. **Hero:**
   - "Professional 3D Scanning for Your Properties"
   - "We bring the equipment. You get stunning 3D tours."
   - CTA: "Request a Scan"

2. **Why Professional Scanning:**
   - Quality comparison: DIY phone vs professional scan
   - Side-by-side image/video comparison
   - "Photorealistic quality that closes deals"

3. **Scanning Process:**
   - 4-step workflow:
     1. "Book your session online"
     2. "We visit your property (2-3 hours)"
     3. "You receive 3D tour in 48 hours"
     4. "Share with clients immediately"

4. **Equipment Showcase:**
   - Photos of scanning equipment (DSLR 360 camera / LiDAR setup)
   - Technical specs that build trust

5. **Service Areas:**
   - "Metro Manila Coverage"
   - List covered cities: Makati, BGC, Quezon City, Pasig, Mandaluyong, etc.
   - "Request service in other areas"

6. **Pricing Table:**
   - Tiered by property size:
     - Studio/1BR: ₱X,XXX
     - 2BR/3BR: ₱X,XXX
     - 4BR+/Penthouse: ₱X,XXX
   - Add-ons: Rush delivery (+₱XXX), Floor plan generation (+₱XXX)

7. **Sample Work:**
   - Portfolio grid of 3-5 sample scans
   - "View Sample Tour" links

8. **Booking Form:**
   - Property details (type, size, location)
   - Preferred date/time
   - Contact info
   - Special requests (textarea)
   - "Submit Request" CTA

**Tech Notes:**
- Form submits to agent dashboard backend or Airtable/Notion temporarily
- Confirmation email via SendGrid/Resend
- Google Calendar integration for scheduling (future)

---

### 🎯 **Phase 2: Client-Facing Property Page (2 weeks)**

**Goal:** Build the beautiful shareable link that clients see

**Priority Features:**
1. ✅ 3D viewer integration (already exists)
2. Photo gallery with lightbox
3. Floor plan image display
4. Agent profile card (photo, name, license, contact buttons)
5. Property details section (price, specs, amenities)
6. Lead capture modal ("See Sample Computation")
7. PDF generation (computation breakdown)
8. Mobile responsive design
9. WhatsApp deep linking
10. Analytics tracking (PostHog/Mixpanel integration)

**URL Structure:**
```
https://yourtool.com/tour/[unique-id]
Example: https://yourtool.com/tour/abc123xyz
```

**Technical Requirements:**
- Static generation for fast loading (Next.js SSG)
- CDN delivery for 3D models (Cloudflare R2)
- Image optimization (Next/Image)
- SEO meta tags for social sharing
- QR code embedded in page metadata

**Success Metrics:**
- Page load time < 2s
- 3D viewer loads in < 3s
- 60fps on desktop, 30fps mobile
- < 5% bounce rate on mobile

---

### 🏢 **Phase 3: Agent Dashboard - Core (3 weeks)**

**Goal:** Give agents the tools to manage listings and capture leads

**Priority Features:**

#### 3.1 Authentication
- Email/password signup
- Google OAuth
- Email verification
- Password reset flow

#### 3.2 Property Listings
- "Add New Listing" form
- Required fields:
  - Property name
  - Price
  - Floor area (sqm)
  - Bedrooms, bathrooms
  - Building, city
  - Photo upload (drag-drop, 10 max initially)
  - Floor plan upload (1 image)
  - Description (rich text editor)
- Optional fields:
  - 3D model upload (.glb file)
  - Checkpoints/hotspots configuration
  - Amenities (multi-select checkboxes)
  - Parking slots, furnishing status
- "Save Draft" vs "Publish" states
- Listing card grid view
- Edit/delete actions

#### 3.3 Shareable Link Generation
- "Share" button per listing
- Modal with:
  - Auto-generated unique URL
  - QR code display (high-res PNG download)
  - Copy link button
  - Share to: WhatsApp, Facebook, Email
- Link settings:
  - Toggle active/inactive
  - Set expiration date (optional)
  - Password protection (optional, premium feature)

#### 3.4 CRM - Leads Table
- Table columns:
  - Name, Phone, Email
  - Property inquired
  - Date submitted
  - Status (New → Contacted → Qualified → Site Visit → Closed → Lost)
  - Actions (View, Call, WhatsApp)
- Filters:
  - By property
  - By status
  - By date range
- Lead detail page:
  - Contact info
  - Form submission data (income, payment terms)
  - Activity timeline (viewed page, clicked buttons, timestamp)
  - Agent notes (textarea)
  - Status update dropdown

#### 3.5 Notifications
- Browser notification when new lead arrives
- Email notification (optional toggle)
- In-app notification center (bell icon)

**Tech Stack:**
- Next.js 14 (App Router)
- PostgreSQL (Supabase or Neon)
- NextAuth.js (authentication)
- Prisma ORM
- React Hook Form + Zod validation
- Tailwind CSS + shadcn/ui
- AWS S3 / Cloudflare R2 (file storage)

---

### 📈 **Phase 4: Analytics Dashboard (2 weeks)**

**Goal:** Show agents which listings perform best and where leads come from

**Key Metrics:**

#### Overview Cards
- Total views (all listings)
- Unique visitors
- Avg time spent
- Total leads generated
- Conversion rate (views → leads)

#### Charts
1. **Views Over Time** (line chart, 7/30/90 day filters)
2. **Top Performing Properties** (bar chart by leads or views)
3. **Engagement Heatmap** (which 3D checkpoints clicked most)
4. **Conversion Funnel:**
   - Viewed listing
   - Explored 3D tour
   - Viewed photos
   - Clicked "Get Computation"
   - Submitted form

#### Per-Visitor Activity Log
```
Anonymous User #12345
├─ Nov 2, 3:42 PM - Opened link (from WhatsApp)
├─ Nov 2, 3:42 PM - Viewed photos (6 of 10)
├─ Nov 2, 3:43 PM - Explored 3D tour
│  └─ Checkpoints: Living Room (15s) → Bedroom (22s) → Balcony (8s)
├─ Nov 2, 3:45 PM - Clicked "See Computation"
└─ Nov 2, 3:46 PM - Submitted lead form → Became "Juan dela Cruz"
    Total time: 4m 12s
```

#### Traffic Sources
- Direct (typed URL)
- QR Scan (detected via URL param)
- WhatsApp
- Facebook
- Instagram
- Other

**Tech Stack:**
- PostHog (open-source analytics) or Mixpanel
- Recharts or Tremor (chart components)
- Real-time updates via Supabase Realtime

---

### 🎨 **Phase 5: Polish & Growth Features (Ongoing)**

#### 5.1 Agent Profile Customization
- Upload profile photo
- Bio/description
- PRC license number display
- Brokerage affiliation
- Custom brand colors (premium)
- Custom logo (premium)

#### 5.2 Team Features (Brokerage Tier)
- Team workspace
- Shared lead pool
- Role permissions (Admin, Agent, Viewer)
- Team analytics dashboard
- Bulk listing import

#### 5.3 Enhanced CRM
- Lead scoring (hot/warm/cold based on behavior)
- Automated follow-up reminders
- Email sequences (drip campaigns)
- SMS integration (Semaphore API)
- Call logging
- Deal pipeline stages

#### 5.4 Advanced Analytics
- A/B testing (different cover photos)
- Cohort analysis
- Retention reports
- Revenue attribution (if tracking closed deals)

#### 5.5 Payment Integration
- GCash checkout
- PayMaya integration
- Credit card (Stripe or PayMongo)
- Subscription management
- Billing history
- Invoice generation

#### 5.6 3D Scanning Workflow
- iPhone LiDAR guide (tutorial + app recommendation)
- Upload raw scan files
- Processing queue
- Quality check + approval flow
- Auto-publish to listing after processing

---

## 🔬 Research Agents (IN PROGRESS)

Currently running 5 parallel research agents:

### 1. iPhone LiDAR vs 360 Cameras
**Status:** 🔄 Running
**Questions:**
- Best equipment for agents to self-scan?
- Professional scanning service equipment recommendation?
- Quality vs cost tradeoff?
- Training requirements?

### 2. Pricing & Business Model ✅ COMPLETE
**Status:** ✅ Complete - [View Research](bc-fb9fef63-434f-505d-87cb-0cb1c5dc5861)

**RECOMMENDED PRICING:**
- **Free Tier:** 5 listings, basic features
- **Professional:** ₱1,499/month (₱1,299 for first 100 customers)
- **Team:** ₱3,999/month (launch month 6)

**3D SCANNING SERVICE:**
- Partner model (avoid ₱220k Matterport investment)
- ₱6,999 per medium property
- First scan FREE with Professional subscription

**PAYMENT:** PayMongo (covers GCash, Maya, cards)

**UNIT ECONOMICS:**
- CAC: ₱12,000 | LTV: ₱39,000+ | LTV:CAC: 3.25:1 ✅
- Target 500-1,000 customers by month 18
- ₱750K-₱1.5M MRR goal

### 3. Competition Analysis ✅ COMPLETE
**Status:** ✅ Complete - [View Analysis](bc-45be5cdd-3caa-58e0-b730-7c4d2bd5fb86)

**TOP COMPETITORS:**
- **Listing Platforms:** Lamudi (₱2,499-14,999/mo), PropertyGuru, ZipMatch
- **Local CRM:** iRealtee (new 2026), Flowloopa (₱4,000/mo)
- **International CRM:** HubSpot, Pipedrive, Salesforce (low PH adoption)

**#1 MARKET GAP (HIGHEST PRIORITY):**
Mobile-first CRM with Messenger/Viber integration for solo agents at ₱299-499/month

**WHY INTERNATIONAL TOOLS FAIL:**
❌ Email-first (PH leads on Messenger/Viber)
❌ USD pricing (too expensive)
❌ No Taglish AI or commission calculator
❌ Desktop-first (agents work in field)

**OUR DIFFERENTIATION:**
✅ 3D tours + CRM in one tool
✅ Filipino pricing (₱1,499 vs ₱4,000)
✅ Mobile-first + offline mode
✅ Built-in commission calculator
✅ Messenger/WhatsApp integration roadmap

### 4. Legal Compliance ✅ COMPLETE
**Status:** ✅ Complete - [View Full Report](bc-ad9301ca-be0c-5e7c-9b34-377b60224469)

**KEY FINDINGS:**
✅ **Good News:**
- No mandatory Philippine data localization (can use AWS, Vercel, etc.)
- Income is NOT sensitive data (when self-reported)
- No BSP license needed (if using PayMongo/Stripe)
- No NPC registration required initially (unless ≥1,000 sensitive records or ≥250 employees)

⚠️ **Must Comply:**
- Explicit consent required (unchecked checkboxes)
- 30 working days response time for data subject requests
- 72-hour breach notification to NPC
- PRC license verification for agents
- 12-month retention limit recommended for inactive leads

💰 **Costs:**
- Initial: ₱100K-₱320K (lawyer, SSL, PSP)
- Annual: ₱200K-₱1.6M (renewals, audits, fees)
- **See:** [MVP Compliance Checklist](/workspace/COMPLIANCE_CHECKLIST_MVP.md)

### 5. Listing Forms & Free 3D Models ✅ COMPLETE
**Status:** ✅ Complete - [View Research](bc-7aecbf24-6266-5722-afbe-c6b1326e0fff)

**FORM STRUCTURE:** 5-step wizard (based on Airbnb patterns)
1. Basic Info (Type, Price, Location, Beds/Baths)
2. Property Details (Area, Furnishing, Parking, Amenities)
3. Description & Features
4. Photos & Media (drag-drop, 2-20 photos)
5. Review & Publish

**FREE 3D MODEL FOUND:** 🏆
- **2BHK Apartment (Innerscene)** - PERFECT!
- License: CC0 Public Domain (no attribution!)
- Format: GLB, Size: 11.9 MB
- Contents: 99 sqm 2BR with living, kitchen, 2 baths, balcony, fully furnished
- URL: https://www.innerscene.com/tools/library/3d-parts/2bhk-apartment-3d-model-f3cc8f95
- **Action:** Download and integrate into demo ASAP

---

## 🛠️ Tech Stack Summary

### Client-Facing Page
- **Framework:** Next.js 14 (React 18 + TypeScript)
- **3D:** Three.js + React Three Fiber
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (Edge Network)

### Agent Dashboard
- **Framework:** Next.js 14 (App Router)
- **Database:** PostgreSQL (Supabase)
- **Auth:** NextAuth.js or Clerk
- **ORM:** Prisma
- **UI:** shadcn/ui + Radix UI
- **Forms:** React Hook Form + Zod
- **File Storage:** Cloudflare R2 or AWS S3
- **Analytics:** PostHog (self-hosted or cloud)
- **Email:** Resend or SendGrid
- **SMS:** Semaphore (PH-based)
- **Payments:** PayMongo or Stripe
- **Deployment:** Vercel

### Monitoring & DevOps
- **Error Tracking:** Sentry
- **Performance:** Vercel Analytics
- **Logging:** LogRocket or Highlight
- **CI/CD:** GitHub Actions

---

## 📊 Success Metrics

### Product Metrics
- **Week 1:** 10 agent signups
- **Month 1:** 50 active agents, 200 listings
- **Month 3:** 200 agents, 1000+ listings, 5000+ leads captured
- **Month 6:** 500 agents, $50K MRR

### User Engagement
- **Agent retention:** > 60% month-over-month
- **Listing creation:** Avg 2+ listings per agent
- **Share rate:** > 80% of listings shared at least once
- **Lead capture rate:** > 5% of views convert to leads

### Technical Metrics
- **Page load time:** < 2s (P95)
- **3D viewer load:** < 3s (P95)
- **Uptime:** > 99.9%
- **Mobile performance:** > 70 Lighthouse score

---

## 💰 Revenue Model (TBD - Pending Research)

### Hypothesis 1: Freemium SaaS
```
FREE TIER:
- 1 active listing
- Basic analytics (last 7 days)
- 10 leads/month
- Branding: "Powered by [Tool]"

PRO TIER: ₱999/month
- Unlimited listings
- Advanced analytics (all-time)
- Unlimited leads
- Remove branding
- Priority support

TEAM TIER: ₱4,999/month
- 5 agent seats
- Shared lead pool
- Team dashboard
- Custom domain (future)
```

### Hypothesis 2: 3D Scanning Service
```
Studio/1BR: ₱3,000 - ₱5,000
2BR/3BR: ₱6,000 - ₱8,000
4BR+: ₱10,000+

Add-ons:
- Rush (24hr): +₱2,000
- Floor plan generation: +₱1,000
- Video walkthrough: +₱3,000
```

### Hypothesis 3: Pay-Per-Lead
```
₱50 - ₱100 per qualified lead
Agent pays only when client submits form
Credits system (buy 100 leads upfront for discount)
```

**Decision:** Awaiting research agent results

---

## 🚀 Go-To-Market Strategy

### Phase 1: Beta Launch (Month 1-2)
1. **Target:** 10-20 friendly agents for feedback
2. **Channels:**
   - Direct outreach to agent networks
   - Facebook groups (PH real estate agents)
   - LinkedIn targeting
3. **Offer:** Free access for 3 months in exchange for feedback

### Phase 2: Public Launch (Month 3)
1. **Landing page goes live**
2. **Content marketing:**
   - Blog: "How to close more deals with virtual tours"
   - YouTube: Demo videos, agent testimonials
   - Facebook Ads targeting real estate keywords
3. **PR:** Press release to Philippine tech/real estate media

### Phase 3: Scale (Month 4-6)
1. **Brokerage partnerships** (white-label for top brokerages)
2. **Referral program** (agent invites = free month)
3. **Marketplace pivot** (if traction validates B2C demand)

---

## 🎯 Next Immediate Actions

### ✅ Research Phase COMPLETE
1. ✅ Philippine legal compliance → [Report](bc-ad9301ca-be0c-5e7c-9b34-377b60224469)
2. ✅ Pricing & business model → [Report](bc-fb9fef63-434f-505d-87cb-0cb1c5dc5861)
3. ✅ Property listing forms + free 3D models → [Report](bc-7aecbf24-6266-5722-afbe-c6b1326e0fff)
4. ✅ PropTech competition analysis → [Report](bc-45be5cdd-3caa-58e0-b730-7c4d2bd5fb86)
5. ✅ iPhone LiDAR vs 360 cameras → [Report](bc-1f319ae0-25a8-58e2-acff-e457ad9bd8fa)

**KEY DECISIONS MADE:**
- **Pricing:** ₱1,499/month Pro tier (3 active units, unlimited shares)
- **Free 3D Model:** Innerscene 2BHK Apartment (11.9 MB GLB, CC0 Public Domain)
- **Scanning:** iPhone LiDAR + Polycam Business (₱22,400/year)
- **Form Template:** Airbnb-style 5-step wizard (photos → details → location → pricing → review)
- **Compliance:** Data Privacy Act consent + 12-month retention + PRC license check

### This Week:
1. ⏳ Choose product name (PropView / CondoTour / UnitLink / ShowPH)
2. ⏳ Download 2BHK GLB model and integrate into React Three Fiber scene
3. ⏳ Design landing page (Figma mockup)
4. ⏳ Design 3D scanning service page
5. ⏳ Set up Next.js 14 App Router structure

### Next Week:
1. Build landing page (responsive)
2. Build 3D scanning service page + booking form
3. Set up analytics (PostHog installation)
4. Create demo video (screen recording of 3D tour)
5. Draft copy for both pages

### Week 3:
1. Deploy landing pages to production
2. Set up domain + SSL
3. Launch beta outreach campaign
4. Start building agent dashboard (Phase 3)

---

## 📝 Open Questions

1. **Product name?** (PropView / CondoTour / UnitLink / ShowPH / TourPH)
2. **Target brokerage tier first or individual agents?**
3. **Offer free 3D scanning for first 10 beta agents?**
4. **Should free tier have time limit (e.g., 30-day trial only)?**
5. **Focus on Metro Manila first or all Philippines?**
6. **B2B2C pivot: When to consider consumer marketplace?**

---

## 📚 Reference Links

### Inspiration (Mobbin Research)
- [Zillow 3D Home Tour](https://mobbin.com/screens/aaca7e7d-09fc-48c6-80c1-d4f1199644e9)
- [Pipedrive CRM](https://mobbin.com/screens/50b4d3a1-eba9-421e-a88b-bfd723726d6c)
- [Turo QR Share](https://mobbin.com/screens/6b423e78-f0e0-4174-b581-5fc4ffc04964)
- [Linktree Analytics](https://mobbin.com/screens/fd4b5a95-297d-4184-aef0-439b004a13cd)

### Tools & Platforms
- Matterport (competitor benchmark)
- Lamudi Philippines (listing platform)
- PropertyGuru Philippines (listing platform)

---

**Last Updated:** November 2, 2026 4:06 PM (UTC+8)
**Status:** Phase 1 in progress - Research agents running, landing page planning
