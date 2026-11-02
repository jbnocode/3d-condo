# Property Listing Form Research & 3D Model Evaluation

**Research Date:** November 2, 2026  
**Focus:** Philippine Condo Listings + Free 3D Models for Demo

---

## Part 1: Property Listing Form Research

### 1. Platform Analysis Summary

#### **Zillow** (US Market Leader)
**Required Fields:**
- Property type
- Complete address (street, city, state, ZIP, unit number when applicable)
- Contact email and phone
- Price
- Bedrooms (when applicable)
- Bathrooms (when applicable)
- At least 1 photo

**Optional but Recommended:**
- GPS coordinates (6 decimal precision)
- MLS/Provider ID
- Property description
- Square footage
- Virtual tour URL
- Videos and floor plans
- Year built, heating/cooling, parking
- Pet policy for rentals

**Key Insight:** Zillow uses a comprehensive feed format (ZIF) with extensive optional fields. More information = better visibility. Custom branded listings add highlights, icons, and facts & features sections.

---

#### **Airbnb** (Global Short-term Rental Leader)
**Flow Structure:** Multi-step wizard (10 main steps)

1. Property type selection
2. Property subtype
3. Guest privacy level (entire place, private room, shared room)
4. Location entry & map confirmation
5. Guest capacity, beds, bathrooms
6. Amenities selection
7. Photo upload & organization
8. Title creation
9. Description writing
10. Nightly rate setting

**UX Patterns:**
- Progress indicators throughout
- Back/Next navigation on every step
- Address autocomplete with manual override fallback
- Map preview for location validation
- Photo upload with drag-drop and system picker
- Photo organization with AI-powered room detection (auto-sorts by Living Room, Bedroom, etc.)
- Resumable flow - can save and return
- Guide slides with contextual tips
- Real-time validation with inline errors
- Preview before publishing

**Photo Requirements:**
- Drag-and-drop or system file picker
- Supports photo reordering after upload
- Shows upload progress states

---

#### **Lamudi Philippines** (Local Real Estate Platform)
**Required Fields:**
- Offer type (Sale or Rent)
- Property type (House, Condo, Apartment, Land, Commercial, Foreclosure)
- Title (concise, under 70 characters recommended)
- Description (200+ words recommended)
- Price (PHP, total selling price or monthly rental)
- Bedrooms
- Bathrooms
- Floor area (sqm)
- Location (Province, City, Barangay)
- GPS coordinates (latitude/longitude)
- Photos (minimum 2 for condos)

**Condo-Specific Photo Recommendations:**
- Living room
- Bedroom(s)
- Kitchen
- Bathroom(s)
- Facade
- Amenities

**Key Guidelines:**
- Title format: "Stylish 2-bedroom condo for sale in Makati City near Greenbelt Mall"
- Avoid contact details in title/description
- Use at least 12 high-quality images (recommended)
- Resolution: 675x450px horizontal / 450x675px vertical
- No watermarks allowed
- Arrange photos room-by-room in logical order
- Complete amenities list

**Content Quality Tips:**
- Be accurate with offer and property type
- Include key features: bedrooms, bathrooms, lot/floor area
- Mention nearby establishments
- Include payment schemes and association fees
- Show exact location on map

---

#### **PropertyGuru Philippines**
**General Requirements** (Philippines-specific documentation limited):
- Must be genuine, accurate, currently available property
- Owner's permission or signed authority required
- Property-specific, high-resolution, clear photos
- No duplicate listings
- At least 1 photo of actual property

**Headline Requirements:**
- 10-70 characters
- Only first letter capitalized (except acronyms like MRT/LRT)
- Maximum 2 consecutive punctuation marks
- Maximum 6 consecutive digits (use abbreviations: "₱2.5M" not "₱2,500,000")
- No radical/racist content

**Photo Requirements:**
- High resolution and clear
- Must show actual property (or building/neighboring buildings for condos/apartments)
- No broken or opaque images
- No watermarks from competitors
- Can include video content (must focus on property, transparent watermark allowed)

---

#### **Carousell Philippines**
**Property Listing Details:**
- Category: Property (up to 20 photos allowed)
- Free quota: 2 Property listings per 30 days
- Listing validity: 30 days
- Auto-renewal available if quota remains

**Required Fields:**
- Title (concise, clear, no phone numbers or links)
- Price (accurate, not fake/unreasonable)
- Location
- Description (detailed, accurate)
- Photos (minimum 1, maximum 20 for Property)

**Best Practices:**
- Clear cover photo with good lighting
- Concise title (long titles get cut off in search)
- Complete all optional category fields
- Detailed description with condition, measurements
- Avoid keyword spamming
- Use relevant keywords only
- No external contact links in description

---

### 2. Must-Have Fields for Philippine Condo Listings

Based on platform analysis, here are the **essential fields** for a Philippine condo listing form:

#### **Basic Information**
- **Listing Type:** For Sale / For Rent
- **Property Title:** (50-70 characters, descriptive)
- **Price:** PHP amount (with currency formatting)
  - For Rent: Specify per month
- **Property Name/Building:** (e.g., "The Fort Residences", "Avida Towers")
- **Unit Number:** (optional but helpful)

#### **Property Details**
- **Bedrooms:** Numeric (0.5 for studio, 1, 2, 3, 4+)
- **Bathrooms:** Numeric (1, 1.5, 2, 2.5, 3+)
- **Floor Area:** Square meters (sqm)
- **Furnishing Status:** 
  - Bare/Unfurnished
  - Semi-Furnished
  - Fully Furnished
- **Parking Slots:** Numeric (0, 1, 2+)
- **Floor Level:** Numeric or range

#### **Location**
- **City/Municipality:** (e.g., Makati, Taguig, Quezon City)
- **Barangay/District:** (e.g., Bonifacio Global City, Poblacion)
- **Complete Address:** (optional for privacy, but recommended for map)
- **GPS Coordinates:** Latitude/Longitude (auto-populated from address)
- **Show exact location:** Yes/No toggle

#### **Amenities** (Multi-select checkboxes)
Common condo amenities in Metro Manila:
- Swimming Pool
- Gym/Fitness Center
- Function Room
- Playground/Play Area
- 24/7 Security
- CCTV
- Parking (covered/open)
- Elevator
- Backup Generator
- Jogging Path
- Basketball Court
- Sky Garden/Roof Deck
- Business Center
- Concierge Service

#### **Property Features** (Conditional based on furnishing)
- Balcony
- Walk-in Closet
- Storage/Maid's Room
- Washer/Dryer
- Aircon (number of units)
- Hot Water Heater
- Kitchen Appliances (if furnished)

#### **Description**
- **Long-form text:** 200-500 words recommended
- Rich text editor (bold, italic, bullets, numbered lists)
- Should include:
  - Key selling points
  - Nearby establishments (malls, schools, hospitals)
  - Transportation access (MRT/LRT stations, major roads)
  - Building facilities
  - Payment terms/schemes

#### **Photos & Media**
- **Minimum:** 2-3 photos
- **Recommended:** 8-15 photos
- **Maximum:** 20 photos
- **Formats:** JPEG, PNG, WebP
- **File size limit:** 5-10MB per image
- **Suggested shots:**
  1. Living room
  2. Master bedroom
  3. Kitchen
  4. Bathroom
  5. Balcony/view
  6. Building facade
  7. Amenities
  8. Floor plan (if available)

**Optional:**
- Virtual tour link (360° or video)
- Floor plan upload

#### **Contact Information**
- **Agent/Owner Name:** Text
- **Phone Number:** With country code (+63)
- **Email:** Validated format
- **Preferred Contact Method:** Phone/Email/Chat

#### **Additional Metadata**
- **Year Built/Turnover:** (for newer properties)
- **Property ID:** Auto-generated
- **Date Listed:** Auto-populated
- **Last Updated:** Auto-updated on edits

---

### 3. Smart Defaults & Templates for Common Condo Types

#### **Template 1: Studio Condo (18-25 sqm)**
```
Bedrooms: 0 (Studio)
Bathrooms: 1
Parking: 0-1
Typical Price Range: ₱2.5M - ₱5M (sale) / ₱15K - ₱25K (rent)
Furnishing: Semi-furnished or Fully furnished
Common Locations: Makati, BGC, Ortigas, Quezon City

Pre-filled Amenities:
✓ Swimming Pool
✓ Gym
✓ 24/7 Security
✓ Elevator

Suggested Title Template: 
"Modern Studio Condo for [Sale/Rent] in [Building Name], [City]"
```

#### **Template 2: 1BR Condo (25-35 sqm)**
```
Bedrooms: 1
Bathrooms: 1
Parking: 0-1
Typical Price Range: ₱3.5M - ₱7M (sale) / ₱20K - ₱35K (rent)
Furnishing: Varies (often semi-furnished)
Common Locations: Makati, Mandaluyong, Pasig, Taguig

Pre-filled Amenities:
✓ Swimming Pool
✓ Gym
✓ Function Room
✓ 24/7 Security
✓ Elevator

Suggested Title Template:
"Cozy 1BR Condo with [Balcony/City View] in [Building], [City]"
```

#### **Template 3: 2BR Condo (50-70 sqm)**
```
Bedrooms: 2
Bathrooms: 1-2
Parking: 1
Typical Price Range: ₱6M - ₱12M (sale) / ₱30K - ₱55K (rent)
Furnishing: Semi-furnished (kitchen, bathrooms fitted)
Common Locations: BGC, Makati, Alabang, Quezon City

Pre-filled Amenities:
✓ Swimming Pool
✓ Gym
✓ Function Room
✓ Playground
✓ 24/7 Security
✓ Parking (covered)
✓ Elevator
✓ Jogging Path

Suggested Title Template:
"Spacious 2BR Condo with Parking in [Building], [City]"
```

#### **Template 4: 3BR Condo (80-120 sqm)**
```
Bedrooms: 3
Bathrooms: 2-3
Parking: 1-2
Typical Price Range: ₱10M - ₱20M+ (sale) / ₱50K - ₱100K (rent)
Furnishing: Varies (higher-end often semi/fully furnished)
Common Locations: BGC, Makati CBD, Alabang, Rockwell

Pre-filled Amenities:
✓ Swimming Pool
✓ Gym
✓ Function Room
✓ Playground
✓ 24/7 Security
✓ Parking (2 slots)
✓ Elevator
✓ Concierge
✓ Jogging Path
✓ Sky Garden

Suggested Title Template:
"Premium 3BR Family Condo with [Feature] in [Building], [City]"
```

#### **Smart Defaults by Location (Metro Manila)**

**Makati CBD:**
- Typical floor area: Smaller (premium per sqm)
- Parking: Often 1 slot even for larger units
- Amenities: Business center, function rooms
- Price: Higher end

**BGC (Bonifacio Global City), Taguig:**
- Typical floor area: Mid to large
- Parking: 1-2 slots standard for 2BR+
- Amenities: Full range (pool, gym, sky garden, jogging paths)
- Price: Premium

**Quezon City (Eastwood, UP Area):**
- Typical floor area: More spacious per peso
- Parking: Standard for all units
- Amenities: Standard set
- Price: Mid-range to affordable

**Ortigas, Pasig:**
- Typical floor area: Mid-sized
- Parking: 1 slot standard
- Amenities: Standard corporate-focused
- Price: Mid-range

**Alabang, Muntinlupa:**
- Typical floor area: Larger units
- Parking: 2+ slots common
- Amenities: Family-focused (playgrounds, larger pools)
- Price: High-end

---

### 4. UX Best Practices for Listing Forms

#### **A. Form Flow: Multi-Step Wizard vs Single-Page**

**Use Multi-Step Wizard When:**
- Form has 20+ fields
- Naturally divides into logical sections (Basic Info → Details → Photos → Preview)
- User needs to complete in stages (save & resume important)
- Complex conditional logic requires different paths
- Want to reduce perceived complexity

**Use Single-Page When:**
- Form has fewer than 15 fields
- User needs overview of entire task
- Quick edits expected after submission
- All fields are closely related
- Performance/speed is critical

**Recommendation for Condo Listings:** 
**Multi-step wizard (4-5 steps)** to reduce cognitive load and improve completion rates.

**Suggested Steps:**
1. **Basic Info** (Type, Price, Location, Bedrooms/Bathrooms)
2. **Property Details** (Floor area, Furnishing, Parking, Amenities)
3. **Description & Features** (Long-form text, special features)
4. **Photos & Media** (Upload, organize, captions)
5. **Review & Publish** (Preview, contact info, submit)

**Key Wizard UX Principles:**
- ✓ Show progress indicator (1 of 5, 2 of 5, etc.)
- ✓ Allow back navigation on every step
- ✓ Preserve entered data when going back
- ✓ Validate step-by-step (catch errors early)
- ✓ Clear, descriptive step labels
- ✓ Don't disable future steps in navigation (show them as "incomplete")
- ✓ Provide "Save Draft" option
- ✓ Mobile-responsive design

---

#### **B. Photo Upload UX Best Practices**

**1. Upload Mechanisms (Provide Both):**
- **Primary:** Large "Add photos" button with system file picker
- **Secondary:** Drag-and-drop zone (never the only option)
  - Must work on desktop only (hide on mobile)
  - Show clear visual feedback on hover/drag-over
  - Display accepted formats and size limits

**2. Before Upload:**
- ✓ Clearly state accepted formats: "JPEG, PNG, WebP"
- ✓ Show file size limit: "Max 10MB per image"
- ✓ Show quantity limits: "Minimum 2, Maximum 20 photos"
- ✓ Provide guidelines: "Show living room, bedrooms, kitchen, bathrooms, amenities"

**3. During Upload:**
- ✓ Show progress bar for each file
- ✓ Display file name and size
- ✓ Allow cancellation of in-progress uploads
- ✓ Show overall progress if bulk uploading
- ✓ Handle errors gracefully (file too large, wrong format)
- ✓ Don't block form submission while uploading

**4. After Upload (Thumbnails):**
- ✓ Display as grid of thumbnails (3-4 columns on desktop, 2-3 on mobile)
- ✓ Show preview on hover/tap
- ✓ Individual "Remove" (X) button on each thumbnail
- ✓ "Remove all" option for bulk deletion
- ✓ Clearly indicate cover/first photo (special border or "Cover" badge)

**5. Photo Reordering:**
- ✓ **Primary method:** Drag-and-drop with visible handles
  - Show grab handle icon (⋮⋮ or ≡)
  - Display ghost/placeholder while dragging
  - Show insertion indicator (line between thumbnails)
  - Snap to grid positions
- ✓ **Alternative method (Accessibility):** "Move left" / "Move right" buttons
  - Or: "Earlier" / "Later" buttons
  - Or: Dropdown with position numbers
- ✓ Label order: "Photo 1 of 12", "Photo 2 of 12", etc.
- ✓ Auto-save new order immediately
- ✓ Provide undo option

**6. Advanced Features:**
- ✓ Optional: Add caption/description per photo
- ✓ Optional: Room type selector (Living Room, Bedroom 1, Kitchen, etc.)
- ✓ Optional: Auto-detect room type with AI
- ✓ Crop/rotate tools (simple)
- ✓ Preview as carousel (as users will see it)

**7. Mobile-Specific:**
- ✓ Large "Choose photos" button (at least 48x48px tap target)
- ✓ Open native gallery/camera picker
- ✓ Support multi-select in gallery
- ✓ Hide drag-drop instructions
- ✓ Use larger thumbnails (easier to tap)
- ✓ Swipe to reorder (alternative to drag-drop)

**8. Validation & Errors:**
- ✓ Validate format and size client-side before upload
- ✓ Show specific error message: "photo-5.heic is in an unsupported format. Please use JPEG or PNG."
- ✓ Allow user to remove failed upload and try again
- ✓ Don't clear successfully uploaded photos on error

---

#### **C. Required vs Optional Field Balance**

**Principle:** Minimize required fields to reduce friction, but guide users to complete optional fields that improve listing quality.

**Required Fields (Bare Minimum for Publication):**
- Listing Type (Sale/Rent)
- Property Type (Condo)
- Price
- Location (City at minimum)
- Bedrooms
- Bathrooms
- Minimum 1 photo
- Contact information

**Recommended Optional Fields (Show Benefits):**
- Floor area → "Listings with floor area get 40% more inquiries"
- Full address → "Exact location increases buyer confidence"
- More photos → "Listings with 8+ photos receive 2x more views"
- Amenities → "Highlighting amenities attracts qualified buyers"
- Virtual tour → "360° tours generate 3x more engagement"

**UX Techniques:**
- Use asterisk (*) or "Required" badge for mandatory fields
- Show completion percentage: "Your listing is 60% complete"
- Use subtle prompts: "Add 3 more photos to stand out"
- Progressive disclosure: Expand "Additional details" section on click

---

#### **D. Form Validation & Error Handling**

**Inline Validation (Real-time):**
- ✓ Validate format on blur (when user leaves field)
- ✓ Show green checkmark for valid input
- ✓ Show red error icon + message for invalid input
- ✓ Place error message directly below field
- ✓ Don't validate on every keystroke (annoying)

**Examples:**
- Email: "Please enter a valid email address"
- Phone: "Phone number must be 10-11 digits"
- Price: "Price must be a positive number"
- Floor area: "Floor area must be between 10-500 sqm"

**Error Summary (On Submit):**
- ✓ If multiple errors, show summary at top
- ✓ Link to each error field (focus on click)
- ✓ Use clear language: "Please fix 3 errors before publishing"
- ✓ Scroll to first error field automatically

**Success Feedback:**
- ✓ Show confirmation message: "Your listing has been published!"
- ✓ Provide link to view listing
- ✓ Option to share on social media
- ✓ Suggest next steps: "Add more photos" or "Share your listing"

---

#### **E. Progressive Disclosure Patterns**

**Use Progressive Disclosure to:**
- Reduce cognitive load by hiding irrelevant fields
- Show conditional fields based on previous selections
- Organize complex forms into manageable chunks

**Implementation Principles:**
1. **Reveal related content immediately after trigger field (in DOM order)**
2. **Don't move focus automatically** (except for user-requested actions like "Add another item")
3. **Place revealed content below the trigger control**
4. **Use smooth transitions (slide-down animation, 200-300ms)**
5. **Clearly label revealed sections**
6. **Limit reveals to one related set per trigger**

**Examples for Condo Listing Form:**

**1. Furnishing Status → Appliances List**
```
Furnishing Status: [Dropdown]
├─ Bare/Unfurnished
├─ Semi-Furnished → REVEALS: "What's included?"
│   └─ Checkboxes: Kitchen cabinets, Aircon, Curtains, Light fixtures
└─ Fully Furnished → REVEALS: "What's included?"
    └─ Checkboxes: All the above + Sofa, Bed, Dining table, Appliances
```

**2. Listing Type → Lease Terms (for Rent)**
```
Listing Type: 
○ For Sale
○ For Rent → REVEALS:
    - Monthly Rent: [Input]
    - Minimum Lease Term: [Dropdown: 6 months, 1 year, 2 years]
    - Security Deposit: [Input] months
    - Advance Payment: [Input] months
```

**3. "Other" Selection → Text Input**
```
Property Features:
☑ Balcony
☑ Walk-in Closet
☐ Other → REVEALS: [Text input: "Please specify"]
```

**4. Show Advanced Filters (Collapsed by Default)**
```
[+ Show Advanced Filters] → EXPANDS:
- Property ID/MLS Number
- Year Built
- Building Classification (Residential, Mixed-use)
- HOA/Assoc. Dues: ₱_____ per month
```

**Accessibility Notes:**
- Revealed content must be keyboard-accessible (next in tab order)
- Use aria-expanded and aria-controls for screen readers
- Announce changes with aria-live="polite" regions (only if unexpected)
- Provide visible focus indicators

---

### 5. Additional UX Best Practices

#### **Address & Location Input**
- ✓ Use address autocomplete API (Google Places, Mapbox)
- ✓ Provide manual override if autocomplete fails
- ✓ Show map preview to confirm location
- ✓ Allow map pin dragging for fine-tuning
- ✓ Toggle: "Show exact location" or "Show approximate area only"
- ✓ Auto-populate GPS coordinates from map

#### **Price Input**
- ✓ Use currency formatting (₱ symbol, thousands separators)
- ✓ Format as user types: "5000000" → "₱5,000,000"
- ✓ For rentals, clarify: "Monthly Rent: ₱_____ per month"
- ✓ Optional: Price range slider for quick input

#### **Dropdown vs Radio vs Checkboxes**
- **Dropdowns:** Use for 5+ options (City, Bedrooms, Bathrooms)
- **Radio buttons:** Use for 2-4 mutually exclusive options (Listing Type, Furnishing Status)
- **Checkboxes:** Use for multi-select (Amenities, Features)

#### **Mobile Optimization**
- ✓ Stack fields vertically (1 column on mobile, 2-3 on desktop)
- ✓ Large tap targets (minimum 44x44px)
- ✓ Native date/number pickers
- ✓ Minimize scrolling within steps
- ✓ Sticky "Next" button at bottom
- ✓ Save draft automatically (don't rely on manual save)

#### **Save & Resume**
- ✓ Auto-save draft every 30 seconds
- ✓ Show "Draft saved" indicator
- ✓ "Resume listing" button on dashboard for incomplete listings
- ✓ Email reminder after 24 hours if draft not published

#### **Preview Before Publishing**
- ✓ Show exactly how listing will appear to buyers
- ✓ Allow edits from preview screen
- ✓ Toggle between mobile and desktop preview

---

## Form Flow Diagram

```
┌─────────────────────────────────────────────────┐
│         STEP 1: Basic Information               │
├─────────────────────────────────────────────────┤
│ • Listing Type (Sale/Rent)                      │
│ • Property Type (Auto: Condo)                   │
│ • Property Name/Building *                      │
│ • Unit Number (optional)                        │
│ • Price *                                       │
│ • Location (City, Barangay, Address)            │
│   └─> Map picker with autocomplete              │
│                                                 │
│           [Save Draft]  [Next Step →]           │
└─────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────┐
│         STEP 2: Property Details                │
├─────────────────────────────────────────────────┤
│ • Bedrooms * (0.5, 1, 2, 3, 4+)                 │
│ • Bathrooms * (1, 1.5, 2, 2.5, 3+)              │
│ • Floor Area (sqm)                              │
│ • Floor Level                                   │
│ • Parking Slots (0, 1, 2+)                      │
│ • Furnishing Status *                           │
│   ├─ Semi-Furnished → Reveals included items    │
│   └─ Fully Furnished → Reveals included items   │
│                                                 │
│ • Amenities (Multi-select checkboxes)           │
│   ☑ Pool ☑ Gym ☑ Security ☑ Parking ...        │
│                                                 │
│        [← Back]  [Save Draft]  [Next →]        │
└─────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────┐
│    STEP 3: Description & Features               │
├─────────────────────────────────────────────────┤
│ • Property Title * (50-70 chars)                │
│   Suggestion: "Modern 2BR Condo in BGC..."      │
│                                                 │
│ • Description * (Rich text, 200+ words)         │
│   Tips: Mention nearby landmarks, transport     │
│                                                 │
│ • Special Features (optional)                   │
│   ☑ Balcony ☑ Walk-in Closet ☑ View ...        │
│                                                 │
│        [← Back]  [Save Draft]  [Next →]        │
└─────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────┐
│        STEP 4: Photos & Media                   │
├─────────────────────────────────────────────────┤
│ Upload Photos * (Min 2, Max 20)                 │
│ ┌───────────────────────────────────────────┐   │
│ │  [+ Add Photos]  or  Drag & Drop Here     │   │
│ │  JPEG, PNG, WebP • Max 10MB each          │   │
│ └───────────────────────────────────────────┘   │
│                                                 │
│ Uploaded Photos:                                │
│ ┌────┬────┬────┬────┐                           │
│ │ 1  │ 2  │ 3  │ 4  │  [⋮⋮ Drag to reorder]     │
│ │[X] │[X] │[X] │[X] │  [← →] Move buttons       │
│ └────┴────┴────┴────┘                           │
│                                                 │
│ Virtual Tour URL (optional)                     │
│ Floor Plan (optional upload)                    │
│                                                 │
│        [← Back]  [Save Draft]  [Next →]        │
└─────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────┐
│       STEP 5: Review & Publish                  │
├─────────────────────────────────────────────────┤
│ Preview Your Listing:                           │
│ ┌───────────────────────────────────────────┐   │
│ │  [Photo Carousel]                         │   │
│ │                                           │   │
│ │  Modern 2BR Condo in BGC                  │   │
│ │  ₱8,500,000                               │   │
│ │  2 BD • 2 BA • 65 sqm • 1 Parking         │   │
│ │                                           │   │
│ │  Description: ...                         │   │
│ │  Amenities: Pool, Gym, Security...        │   │
│ └───────────────────────────────────────────┘   │
│                                                 │
│ Contact Information:                            │
│ • Name * [Input]                                │
│ • Phone * [+63__________]                       │
│ • Email * [Input]                               │
│                                                 │
│ ☑ I confirm this information is accurate        │
│                                                 │
│     [← Back]  [Save as Draft]  [Publish]       │
└─────────────────────────────────────────────────┘
```

---

## Part 2: Free 3D Model Evaluation

### Evaluation Criteria
1. **Visual Quality:** Textures, realism, modern design suitable for demo
2. **File Size:** Must be <20MB for web delivery (preferably <10MB)
3. **Format:** GLB or GLTF preferred (web-native, Three.js compatible)
4. **License:** Free for commercial use (CC0, royalty-free, or similar)
5. **Completeness:** Furnished interior with multiple rooms, not just empty space
6. **Poly Count:** Reasonable for real-time rendering (<500k triangles)

---

### Top 5 Recommended Models

#### **1. 2BHK Apartment 3D Model (Innerscene) ⭐ BEST OVERALL**
- **URL:** https://www.innerscene.com/tools/library/3d-parts/2bhk-apartment-3d-model-f3cc8f95
- **Source:** Innerscene - Original model
- **License:** CC0 (Public Domain) ✓
- **Format:** GLB
- **File Size:** 11.9 MB ✓
- **Dimensions:** 11m x 9m x 3m (99 sqm gross floor area)
- **Contents:** 
  - Entrance with front door
  - Living/Dining area (32.3 sqm)
  - Kitchen (12.3 sqm) with counters
  - 2 Bedrooms
  - 2 Bathrooms with fixtures
  - Balcony
  - Window frames, glazing, doors, floors
  - Basic furniture: beds, wardrobes
- **Poly Count:** Not specified (but file size suggests reasonable)
- **Scale:** Real-world meters, Y-up

**Pros:**
- Perfect for 2BR condo demo
- Complete layout with realistic proportions
- Free CC0 license (no attribution required)
- Web-ready GLB format
- Includes basic furnishing
- Real-world scale

**Cons:**
- Basic furnishing (may need additional props)
- No exterior/building context

**Rating:** 9/10 - Ideal for property listing demo

---

#### **2. Modern Apartment Interior (Katydid - Sketchfab) ⭐ HIGH QUALITY**
- **URL:** https://sketchfab.com/3d-models/modern-apartment-interior-400c9069181a4342a7142433dfa3466e
- **Creator:** Katydid
- **License:** CC Attribution (free with credit) ✓
- **Format:** Downloadable (likely FBX/OBJ, may include GLB)
- **File Size:** Unknown (preview suggests <15MB)
- **Contents:**
  - Modern furnished apartment interior
  - Living room with sofa, TV, plants
  - Kitchen area
  - High-quality textures (mentioned as "realistic")
  - Game-ready
  - PBR materials

**Pros:**
- Realistic, modern aesthetic
- Game-ready optimization
- Free download
- Good textures (4K mentioned)
- Furnished and decorated

**Cons:**
- May need format conversion to GLB
- Requires attribution
- Poly count unknown (preview suggests moderate)

**Rating:** 8/10 - Great alternative if format works

---

#### **3. Apartment Interior (Blender Studio - Sketchfab)**
- **URL:** https://sketchfab.com/3d-models/apertment-interior-76d1760de40d439c84171ca42ee7bcaf
- **Creator:** Blender Studio (Blend_GUY)
- **License:** CC Attribution ✓
- **Format:** Downloadable from Sketchfab
- **Poly Count:** 685.7k triangles, 346.7k vertices
- **Contents:**
  - Modern and cozy apartment interior
  - Realistic furniture and lighting
  - Wall finishes and decor
  - Designed for archviz

**Pros:**
- Professional archviz quality
- Realistic lighting setup
- Complete furnished space
- Free with attribution

**Cons:**
- Higher poly count (685k triangles)
- File size may exceed 20MB
- May need optimization for web

**Rating:** 7/10 - Beautiful but may need optimization

---

#### **4. Fully Furnished Apartment (CGTrader)**
- **URL:** https://www.cgtrader.com/free-3d-models/interior/living-room/fully-furnished-apartment
- **Creator:** kbulsara13
- **License:** Royalty Free (no AI) ✓
- **Formats:** SKP (SketchUp native), OBJ, FBX, 3DS, DAE, STL
- **File Size:** ~500-900 KB (very lightweight)
- **Contents:**
  - Large bedroom
  - Bathroom
  - Spacious living area
  - Cherry wood kitchen

**Pros:**
- Very lightweight
- Multiple format options (can convert to GLB)
- Complete apartment layout
- Free for commercial use

**Cons:**
- Older model (2015)
- May need format conversion
- SketchUp native (textures may need work)
- Lower poly detail expected given small file size

**Rating:** 7/10 - Good backup option

---

#### **5. Cozy Low Poly Interior Scene (Sketchfab) ⭐ LIGHTWEIGHT**
- **URL:** https://sketchfab.com/3d-models/cozy-low-poly-interior-scene-2575c7a819fe4bd5b02dfb1d03257b64
- **Creator:** ksmfff
- **License:** Free download (check Sketchfab license)
- **Format:** GLB ✓
- **Poly Count:** 11.7k triangles (very low) ✓
- **File Size:** Estimated <2MB ✓
- **Contents:**
  - Stylized isometric living room
  - Cozy armchair
  - Floating stairs
  - Ambient lighting
  - Warm aesthetic

**Pros:**
- Extremely lightweight (perfect for web)
- GLB format ready
- Stylized modern design
- Immediate download

**Cons:**
- Only living room (not full apartment)
- Stylized low-poly (not photorealistic)
- Limited to one room

**Rating:** 6/10 - Good for performance testing or stylized demo

---

### Additional Options

#### **6. Apartment Building Exterior (Grab3D)**
- **URL:** https://grab3d.com/models/buildings/apartment-building/
- **License:** CC0 (Public Domain) ✓
- **Format:** GLB, FBX, BLEND, USDZ, OBJ
- **File Size:** 2.0 MB GLB (lightweight version: 1.1 MB)
- **Poly Count:** 33,542 triangles (light: 19,178 triangles)
- **Contents:** Five-storey apartment building exterior with balconies, roof terrace

**Use Case:** Building facade/exterior context, not interior

---

#### **7. 3 Bedroom Apartment (CGTrader)**
- **URL:** https://www.cgtrader.com/free-3d-models/interior/house-interior/3-bedroom-apartment
- **License:** Royalty Free (no AI) ✓
- **Formats:** OBJ, FBX, GLTF, MAX
- **File Size:** 450 MB - 1.12 GB (VERY LARGE) ✗
- **Poly Count:** 14.3 million polygons ✗
- **Contents:** Fully furnished 3BR apartment with kitchen, living room, bathroom

**Rating:** 3/10 - Too heavy for web use (would require significant optimization)

---

### Backup Plan: If No Suitable Free Models

If free models don't meet quality standards, here are alternatives:

#### **Option A: Paid High-Quality Model**
- **Modern 1 Bedroom Condo Interior** (CGTrader - $40)
- URL: https://www.cgtrader.com/3d-models/interior/house-interior/modern-1-bedroom-condo-interior-full-apartment-pbr
- 38,244 triangles, 75,256 vertices
- GLB format, PBR textures
- Complete 1BR condo (101 sqm)
- Game-ready, web-optimized
- **Best investment if budget allows**

#### **Option B: Use Multiple Free Room Models**
Combine separate free room models:
- Living room from one source
- Bedroom from another
- Kitchen from a third
- Stitch together in Blender or Unity

#### **Option C: Simplified Placeholder**
Use the lightweight models (#5 Cozy Low Poly) as placeholder while:
- Commissioning a custom model
- Or building simple geometry in Blender with free texture assets

#### **Option D: 3D Scanning Services**
If you have access to an actual condo unit:
- Use Polycam, Luma AI, or similar photogrammetry app
- Scan the actual space
- Export to GLB
- **Most realistic result** but requires physical access

---

## Summary & Recommendations

### Property Listing Form

**Recommended Approach:** Multi-step wizard (5 steps)

1. Basic Info (Type, Price, Location, Beds/Baths)
2. Details (Area, Parking, Furnishing, Amenities)
3. Description & Features (Title, Long-form text)
4. Photos (Upload, organize, reorder)
5. Review & Publish (Preview, contact info)

**Key Features:**
- Progress indicator on all steps
- Address autocomplete with map
- Photo drag-drop + reordering
- Progressive disclosure for conditional fields
- Inline validation with clear error messages
- Save draft & resume functionality
- Mobile-responsive design
- Preview before publish

### 3D Model Selection

**Top Pick:** **2BHK Apartment 3D Model (Innerscene)**
- CC0 license, 11.9 MB GLB, real-world scale
- Perfect size and layout for 2BR condo demo
- Ready for web use

**Alternative:** **Modern Apartment Interior (Sketchfab - Katydid)**
- High visual quality, may need format conversion
- Free with attribution

**If Budget Allows:** **Modern 1 Bedroom Condo Interior ($40)**
- Professional quality, web-optimized, GLB native

---

## Implementation Notes

### For Developers:
- Use React Hook Form or Formik for form state management
- Implement file upload with react-dropzone
- Use react-beautiful-dnd for photo reordering
- Integrate Google Maps API for location (or Mapbox)
- Use Three.js or React Three Fiber for 3D model viewer
- Optimize images with WebP format and lazy loading
- Implement progressive JPEG loading for photos

### For Designers:
- Design mobile-first, scale up for desktop
- Use system fonts for performance (SF Pro, Roboto, Segoe UI)
- Maintain WCAG 2.1 AA accessibility standards
- Test with screen readers (NVDA, VoiceOver)
- Provide high-contrast mode for form fields
- Use 8px grid system for consistent spacing

---

**Research Completed:** November 2, 2026  
**Total Sources Analyzed:** 25+ platforms, UX patterns, and 3D model libraries
