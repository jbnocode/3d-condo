# ✅ MVP Compliance Checklist - Real Estate Agent Tool

**Based on:** [Philippine Legal Compliance Research Report](bc-ad9301ca-be0c-5e7c-9b34-377b60224469)  
**Last Updated:** November 2, 2026

---

## 🚨 CRITICAL FINDINGS - Must Know

### ✅ GOOD NEWS:
1. **No mandatory data localization** - Can use AWS, Google Cloud, Vercel, etc. (just need proper Data Processing Agreement)
2. **Income is NOT sensitive data** (when self-reported) - Standard consent is sufficient
3. **No BSP license needed** - As long as we use licensed PSP (PayMongo, Stripe)
4. **No NPC registration required initially** - Only if processing sensitive data of ≥1,000 individuals OR ≥250 employees

### ⚠️ MUST COMPLY:
1. **Explicit consent required** - Pre-checked boxes = illegal
2. **30 working days response time** - For data subject requests (access, delete, port)
3. **72-hour breach notification** - To NPC if data breach occurs
4. **PRC license verification** - Must verify agent credentials before activation
5. **Retention limits** - Cannot keep data indefinitely; recommend 12 months max for inactive leads

### 💰 ESTIMATED COSTS:
- **Initial MVP:** ₱100,000 - ₱320,000 (lawyer review, policy drafting, SSL, PSP integration)
- **Annual:** ₱200,000 - ₱1,600,000 (renewals, audits, PSP fees)
- **Non-compliance penalties:** ₱100,000 - ₱5,000,000 + potential imprisonment

---

## 📋 CRITICAL PATH CHECKLIST

### Phase 1: Before Launch (MVP Blockers)

#### 1. DATA PRIVACY ACT COMPLIANCE

**1.1 Privacy Policy** ⏰ **2-3 days** | 💰 **₱20,000-₱50,000 (lawyer review)**
- [ ] Draft Privacy Policy with all 9 mandatory elements (see template below)
- [ ] Include: data collected, purpose, retention period, user rights, cookies
- [ ] Get lawyer review (recommended)
- [ ] Publish at `/privacy-policy` route
- [ ] Link in footer of all pages
- [ ] Effective date at top of policy

**Template Structure Required:**
```
1. Introduction (who we are, contact info)
2. Data we collect (name, phone, email, income estimate)
3. Why we collect it (lead generation, property matching)
4. How we use it (share with assigned agent, analytics)
5. Your rights (access, delete, port, object)
6. How to exercise rights (email form, 30-day response)
7. How long we keep data (12 months from last activity)
8. Security measures (HTTPS, encryption, access control)
9. Third parties (cloud provider, PSP, analytics)
10. International transfers (AWS/Vercel locations)
11. Cookies (Google Analytics, session cookies)
12. Updates to policy (notify via email)
13. How to contact us (privacy@yourdomain.com)
14. Effective date
```

---

**1.2 Terms of Service** ⏰ **1-2 days** | 💰 **₱15,000-₱30,000 (lawyer review)**
- [ ] Draft Terms of Service covering:
  - User eligibility (agents must have PRC license)
  - Service description
  - Intellectual property
  - Prohibited uses
  - Disclaimer of warranties
  - Limitation of liability
  - Dispute resolution (venue: Philippines)
  - Termination rights
- [ ] Get lawyer review
- [ ] Publish at `/terms` route
- [ ] Link in footer
- [ ] Require acceptance on signup

---

**1.3 Consent Mechanism on Lead Forms** ⏰ **1 day** | 💰 **Free (dev work)**
- [ ] Add **unchecked checkbox** (not pre-checked!) before submit button
- [ ] Checkbox label: "I consent to [Company Name] collecting and sharing my information with [Agent Name] for follow-up on this property inquiry. See our [Privacy Policy]."
- [ ] Link "Privacy Policy" to full policy page
- [ ] Disable submit button until checkbox is checked
- [ ] Store consent timestamp in database (evidence retention)
- [ ] Log consent in audit trail

**Example Implementation:**
```typescript
// Lead capture form validation
const formSchema = z.object({
  name: z.string().min(2),
  phone: z.string().regex(/^09\d{9}$/), // PH format
  email: z.string().email().optional(),
  monthlyIncome: z.number().positive().optional(),
  consentGiven: z.literal(true, {
    errorMap: () => ({ message: "You must consent to data processing" })
  }),
  consentTimestamp: z.date().default(() => new Date())
});
```

---

**1.4 Privacy Notice Before Collection** ⏰ **Half day** | 💰 **Free (dev work)**
- [ ] Add brief privacy notice above lead form:

```
🔒 Your privacy matters
We'll share your info with [Agent Name] to help you with this property.
We'll keep your data for 12 months. You can request deletion anytime.
See our Privacy Policy for details.
```

- [ ] Use "layered approach" - brief notice + link to full policy
- [ ] Mobile-friendly design

---

**1.5 Data Subject Rights Request Process** ⏰ **1 day** | 💰 **Free (manual process initially)**
- [ ] Create email: `privacy@yourdomain.com`
- [ ] Add "Your Data Rights" page at `/data-rights` with:
  - Right to access: "Request a copy of your data"
  - Right to delete: "Request deletion of your data"
  - Right to port: "Download your data in machine-readable format"
  - Right to correct: "Update inaccurate information"
  - Right to object: "Stop processing your data for certain purposes"
- [ ] Provide email form or direct email link
- [ ] Set calendar reminder: Respond within 30 working days
- [ ] Document process in internal wiki

**Manual MVP Process:**
1. User emails `privacy@yourdomain.com`
2. Verify identity (reply with verification code via registered phone/email)
3. Process request:
   - Access: Export data as JSON/PDF, email back
   - Delete: Mark record as deleted, notify agent, confirm to user
   - Port: Send JSON export
   - Correct: Update in database, confirm
   - Object: Stop specific processing, confirm
4. Log request + response in compliance spreadsheet

---

**1.6 Data Retention Policy (Automated Deletion)** ⏰ **1 day** | 💰 **Free (dev work)**
- [ ] Implement retention rules in database:
  - **Active leads:** Keep while agent status is "New/Contacted/Qualified"
  - **Inactive leads:** Auto-delete after 12 months of no activity (no status updates, no views)
  - **Converted leads:** Keep for 3 years from transaction date (then auto-delete)
  - **Agent accounts:** Keep while active; delete 30 days after account deactivation
- [ ] Create cron job / scheduled task:
  ```typescript
  // Daily cleanup job
  // Delete leads where lastActivity < 12 months ago AND status = inactive
  // Send deletion notice to user if email exists (courtesy)
  ```
- [ ] Document policy in Privacy Policy
- [ ] Log deletions in audit trail

---

**1.7 Security Measures** ⏰ **1 day** | 💰 **₱5,000/year (SSL cert via Vercel/Cloudflare)**
- [ ] **HTTPS everywhere** - No HTTP, redirect all traffic to HTTPS
- [ ] SSL/TLS certificate (Vercel provides free Let's Encrypt)
- [ ] Password hashing: Use bcrypt or Argon2 (NEVER plain text)
- [ ] Environment variables for secrets (not in git)
- [ ] Database encryption at rest (enabled by default on Supabase/Neon)
- [ ] Access control: Role-based permissions (agents can only see their own leads)
- [ ] Rate limiting on API endpoints (prevent brute force)
- [ ] Input validation (prevent SQL injection, XSS)

---

**1.8 Cloud Provider Data Processing Agreement** ⏰ **Half day** | 💰 **Free (sign agreement)**
- [ ] Review Vercel DPA: https://vercel.com/legal/dpa
- [ ] Review Supabase/Neon DPA
- [ ] Sign if required (Vercel has online signature flow)
- [ ] Store signed agreement in legal docs folder
- [ ] Note: No Philippines data residency required (confirmed by research)

---

#### 2. REAL ESTATE COMPLIANCE

**2.1 Agent PRC License Verification** ⏰ **2 days** | 💰 **Free (dev + manual verification)**
- [ ] Add license number field to agent signup form
- [ ] Make it **required** (cannot activate account without it)
- [ ] Implement manual verification process (for MVP):
  1. Agent submits license number + uploaded photo of PRC card
  2. Admin checks against PRC online registry: https://online.prc.gov.ph/Verification
  3. Mark as "Verified" or "Rejected"
  4. Only verified agents can create listings
- [ ] Display verified badge on agent profiles
- [ ] Display license number on agent card (client-facing page)

**Future Automation:** API integration with PRC if available

---

**2.2 License Display on Agent Profiles** ⏰ **Half day** | 💰 **Free (dev work)**
- [ ] Show on agent card (client-facing property page):
  ```
  Juan dela Cruz
  Licensed Real Estate Broker
  PRC License No. 123456 ✓ Verified
  ```
- [ ] Link "✓ Verified" to PRC verification page (optional transparency)

---

**2.3 Independent Contractor Disclaimer** ⏰ **10 minutes** | 💰 **Free**
- [ ] Add footer text on all pages:
  ```
  "Agents on this platform are independent professionals. 
  [Your Company] does not employ agents and is not liable for their actions."
  ```
- [ ] Include in Terms of Service

---

#### 3. WEBSITE LEGAL DISCLAIMERS

**3.1 Property Information Disclaimer** ⏰ **10 minutes** | 💰 **Free**
- [ ] Add above or below property listings:
  ```
  ⚠️ Property information provided by independent agent. 
  Buyer should verify all details with developer/seller. 
  [Company Name] is not responsible for inaccuracies.
  ```

---

**3.2 Financial Estimate Disclaimer** ⏰ **10 minutes** | 💰 **Free**
- [ ] Add above computation form:
  ```
  💰 For illustration purposes only
  Actual terms and rates may vary. Consult with agent and 
  financing institution for official quotation. This is not 
  a binding offer or loan pre-approval.
  ```

---

**3.3 Licensed Professional Notice (3D Tour)** ⏰ **5 minutes** | 💰 **Free**
- [ ] Already implemented! Keep existing disclaimer on 3D viewer:
  ```
  "Artist's rendition · for illustration only"
  ```

---

#### 4. PAYMENT COMPLIANCE

**4.1 Licensed PSP Partnership** ⏰ **1-2 days** | 💰 **2.5%-3.5% per transaction**
- [ ] Sign up for PayMongo (https://paymongo.com) OR Stripe (https://stripe.com/ph)
- [ ] Complete KYC verification (submit business documents)
- [ ] Integrate payment API into subscription flow
- [ ] Test sandbox environment
- [ ] **DO NOT** build own payment processing (avoid BSP licensing requirement)

**Recommended:** PayMongo (Filipino company, local support, same fees as Stripe)

---

**4.2 Subscription Terms** ⏰ **Half day** | 💰 **Free (document in ToS)**
- [ ] Add "Subscription Terms" section to Terms of Service:
  - Pricing tiers (Free, Pro, Team)
  - Billing cycle (monthly/annual)
  - Auto-renewal clause
  - Cancellation policy (cancel anytime, no refunds for partial months)
  - What happens to data after cancellation (retained for 30 days, then deleted)
- [ ] Display during checkout flow

---

**4.3 Cancellation Policy** ⏰ **10 minutes** | 💰 **Free**
- [ ] Document in ToS + Settings page:
  ```
  Cancel anytime from your Settings page. 
  Cancellation takes effect at end of current billing period.
  No refunds for partial months. Access continues until period ends.
  Data retained for 30 days after cancellation, then permanently deleted.
  ```

---

### Phase 2: Nice-to-Have (Post-MVP)

#### 5. COOKIE CONSENT & TRACKING

**5.1 Cookie Consent Banner** ⏰ **1 day** | 💰 **Free or ₱3,000-₱10,000 (CookieYes, OneTrust)**
- [ ] Add consent banner for Google Analytics, Facebook Pixel, etc.
- [ ] Options: "Accept All" / "Reject All" / "Customize"
- [ ] Block tracking scripts until consent given
- [ ] Store consent preference (12 months)
- [ ] **Note:** Technically required by DPA, but many sites skip; recommended for credibility

**Free Tool:** CookieYes free tier, or build custom React component

---

**5.2 Cookie Policy** ⏰ **Half day** | 💰 **Free**
- [ ] Create `/cookie-policy` page explaining:
  - What cookies we use (session, analytics, marketing)
  - Why we use them
  - How to disable (browser settings)
  - How long they last
- [ ] Link from Privacy Policy

---

#### 6. ADVANCED COMPLIANCE (Scaling Phase)

**6.1 NPC Registration** ⏰ **2-3 days** | 💰 **₱1,000-₱5,000**
- [ ] Register only if:
  - Processing **sensitive data** of ≥1,000 individuals, OR
  - ≥250 employees
- [ ] Submit online: https://npcrs.privacy.gov.ph
- [ ] Display NPC Seal on website footer
- [ ] Renew annually

---

**6.2 Data Protection Officer** ⏰ **Ongoing** | 💰 **₱600,000-₱1,200,000/year (full-time) OR ₱200,000/year (outsourced)**
- [ ] Appoint DPO only if required (see NPC registration triggers)
- [ ] For MVP: Designate founder/CTO as privacy contact person (no formal DPO needed)
- [ ] DPO duties:
  - Monitor compliance
  - Advise on privacy matters
  - Liaise with NPC
  - Handle data breach response

---

**6.3 Privacy Impact Assessment (PIA)** ⏰ **3-5 days** | 💰 **₱50,000-₱150,000 (consultant)**
- [ ] Required only for "high-risk" processing (large-scale sensitive data, automated profiling)
- [ ] For MVP lead capture: Not required initially
- [ ] Conduct if adding AI-based credit scoring or behavior profiling

---

**6.4 Security Audit** ⏰ **1-2 weeks** | 💰 **₱100,000-₱300,000**
- [ ] Optional for MVP
- [ ] Recommended annually after launch
- [ ] Hire penetration testing firm (local: CyberSecurity.ph, or international)
- [ ] Audit report shows compliance + builds trust

---

## 🚨 CRITICAL: Data Breach Response Plan

**IF breach occurs, MUST:**

1. **Contain immediately** (within hours)
   - Isolate affected systems
   - Stop further data leak
   - Document timeline

2. **Assess scope** (within 24 hours)
   - How many records affected?
   - What data was exposed?
   - Is it sensitive?

3. **Notify NPC** (within **72 hours** of awareness)
   - Email: info@privacy.gov.ph
   - Submit breach notification form
   - Include: nature of breach, data involved, likely consequences, measures taken

4. **Notify affected individuals** ("as soon as reasonably possible" if **high risk**)
   - Email/SMS notification
   - What happened, what data, what we're doing, what they should do
   - Do NOT wait for NPC approval to notify users

5. **Document everything**
   - Incident report
   - Timeline of events
   - Actions taken
   - Root cause analysis

**Penalties for failure to notify:** Separate violation, ₱50,000 - ₱5,000,000 fine

---

## 📋 Pre-Launch Verification (Final Checklist)

**Run through before going live:**

```
DATA PRIVACY:
☐ Privacy Policy live and linked everywhere
☐ Terms of Service live and linked
☐ Consent checkbox on lead forms (unchecked by default)
☐ Privacy notice visible before data collection
☐ Data rights request email set up (privacy@)
☐ Retention policy configured (12-month auto-delete)
☐ HTTPS everywhere (no HTTP)
☐ Passwords hashed (bcrypt/Argon2)
☐ Cloud provider DPA signed

REAL ESTATE:
☐ Agent PRC license verification workflow ready
☐ License display on agent profiles
☐ Independent contractor disclaimer in footer + ToS

DISCLAIMERS:
☐ Property info disclaimer on listings
☐ Financial estimate disclaimer on computation form
☐ 3D tour disclaimer ("for illustration only")

PAYMENT:
☐ Licensed PSP integrated (PayMongo/Stripe)
☐ Subscription terms documented
☐ Cancellation policy clear

TEST:
☐ Submit test lead form → verify consent stored
☐ Request data access → verify 30-day response plan works
☐ Request deletion → verify auto-delete works
☐ Test on mobile (90% of Philippine users)
☐ Verify SSL cert valid
☐ Check all disclaimer text visible
```

---

## 💡 QUICK WINS (Do These First)

**Top 5 compliance tasks for fastest launch:**

1. ✅ **Hire lawyer for 2-hour consultation** (₱10,000-₱20,000) - Get ToS + Privacy Policy templates customized
2. ✅ **Add consent checkbox to lead form** (1 hour dev work) - Blocks the biggest legal risk
3. ✅ **Set up privacy@ email** (5 minutes) - Required for data rights requests
4. ✅ **Configure HTTPS** (5 minutes via Vercel) - Already done if using Vercel
5. ✅ **Add 3 disclaimers** (30 minutes) - Property info, financial estimate, 3D tour

**After these 5, you can soft launch with acceptable risk.**

---

## 📞 Recommended Service Providers (Philippines)

### Legal
- **DivinaLaw** - Data privacy specialists: https://divinalaw.com
- **GorricetaLaw** - Corporate + tech: https://gorriceta.com
- **ASG Law** - Startup-friendly: https://www.asglawpartners.com

### Compliance Tools
- **CookieYes** - Cookie consent: https://www.cookieyes.com (free tier available)
- **OneTrust** - Enterprise compliance: https://www.onetrust.com (expensive, ₱500K+/year)
- **Iubenda** - Policy generator: https://www.iubenda.com (₱27/month for basic)

### Payment Service Providers
- **PayMongo** - Filipino, local support: https://paymongo.com (2.9% + ₱15)
- **Stripe** - International, more features: https://stripe.com/ph (2.9% + ₱15)
- **PayMaya Business** - GCash-friendly: https://paymaya.com

---

## 🎯 Compliance Status Tracker

**Update as you complete each item:**

| Area | Status | Completion Date | Notes |
|------|--------|-----------------|-------|
| Privacy Policy | ⏳ Not Started | - | Need lawyer review |
| Terms of Service | ⏳ Not Started | - | - |
| Consent Mechanism | ⏳ Not Started | - | - |
| Data Retention | ⏳ Not Started | - | - |
| HTTPS | ✅ Done | - | Vercel default |
| PSP Integration | ⏳ Not Started | - | Evaluating PayMongo vs Stripe |
| Agent Verification | ⏳ Not Started | - | - |
| Disclaimers | ⏳ Not Started | - | - |

---

**Next Update:** [Date]  
**Compliance Officer:** [Name]  
**Legal Counsel:** [Firm Name]

---

## ⚖️ Legal Disclaimer

This checklist is based on research of Philippine laws as of November 2026 and is provided for informational purposes only. It does not constitute legal advice. Consult a licensed Philippine attorney for advice specific to your situation.

**Research Source:** [Philippine Legal Compliance Report](bc-ad9301ca-be0c-5e7c-9b34-377b60224469)
