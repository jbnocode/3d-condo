# Philippines Legal & Regulatory Compliance Report
## Real Estate Agent SaaS Tool - Lead Capture System

**Prepared:** November 2, 2026  
**Purpose:** Compliance requirements for a SaaS platform collecting lead data (name, phone, email, income) from real estate agents in the Philippines

---

## Executive Summary

This report outlines the legal and regulatory requirements for a real estate agent tool operating in the Philippines. The tool must comply with:

1. **Data Privacy Act (RA 10173)** - Critical, affects all data collection and processing
2. **PRC Real Estate Service Act (RA 9646)** - Critical for real estate professional features
3. **DHSUD/HLURB Regulations** - Critical if property listings include subdivisions/condominiums
4. **Consumer Protection Laws** - Critical for advertising and transparency
5. **BSP Payment Regulations** - Applies if collecting subscription payments directly

---

## 1. Philippine Data Privacy Act (RA 10173) Requirements

### 1.1 Consent Requirements

#### **CRITICAL: Consent Must Be:**
- ✅ **Freely given** - No coercion, genuine choice to consent or refuse
- ✅ **Specific** - Clear about what data and for what purpose
- ✅ **Informed** - Full disclosure before collection
- ✅ **Indicated by clear assent** - Affirmative action (checkbox, signature, click)
- ✅ **Evidenced** - Written, electronic, or recorded proof retained

#### **Lawful Bases for Processing (Section 12):**
You can process personal data based on:
1. **Consent** (recommended for lead capture)
2. **Contract fulfillment** (for service delivery to agents)
3. **Legal obligation**
4. **Vital interests** (life/health protection)
5. **Public interest/official authority**
6. **Legitimate interest** (requires documented Legitimate Interest Assessment per NPC Circular 2023-07)

**Recommendation:** Use explicit consent for lead capture, contract basis for agent accounts.

#### **Income Data Classification:**
- Income data is **personal information** (not automatically sensitive)
- Becomes **sensitive personal information** only if it's a government-issued tax return or other government record
- For self-reported income estimates: treat as regular personal information with standard consent
- For sensitive data: requires **prior, purpose-specific consent** with stricter standards (Section 13)

### 1.2 Privacy Notice Requirements

**CRITICAL: Before or at time of collection, provide:**

1. **Description** of personal data collected (name, phone, email, income estimate)
2. **Purpose** of processing (lead generation, follow-up, property matching)
3. **Lawful basis** (consent, contract, etc.)
4. **Scope and method** of processing (how data is used, stored, analyzed)
5. **Recipients** or classes of recipients (real estate agent, third-party services)
6. **Controller identity** - Your company name and contact details
7. **Retention period** - How long data is kept
8. **Data subject rights** - Access, correction, deletion, portability, objection
9. **Automated processing** - If used for profiling/automated decisions
10. **Cross-border transfers** - If data goes outside Philippines (e.g., cloud servers abroad)

**Format:** Clear, plain language; layered approach for digital forms (brief overview + detailed policy link)

### 1.3 Data Storage & Retention

**Requirements:**
- Retain only as long as **necessary for the declared purpose**
- No indefinite retention for unspecified future use
- Common retention triggers:
  - Until purpose fulfilled (e.g., lead converted or abandoned)
  - For legal claims (3-year prescription period under Labor Code)
  - For legitimate business purposes (document and justify)

**Best Practice:** Document a data retention policy specifying:
- Retention period per data category
- Disposal procedures (secure deletion)
- Review schedule

**Example Retention Schedule:**
- Active leads: 12 months from last activity
- Converted clients: 3 years from transaction completion
- Archived/deleted leads: Immediate secure deletion after retention period

### 1.4 Data Subject Rights

**CRITICAL: Must provide mechanisms for:**

#### **Right to Access (Section 16)**
- Users can request copies of their data
- Include: data contents, sources, recipients, processing methods, retention period
- **Response time:** 30 working days (extendable by 15 days for complex requests)
- **Fee:** Generally free; reasonable fee only for excessive/repetitive requests

#### **Right to Correction (Section 16)**
- Users can request correction of inaccurate/incomplete data
- Must verify and correct within reasonable time

#### **Right to Erasure/Blocking (Section 16)**
- Users can request deletion when:
  - Data incomplete, outdated, false, or unlawfully obtained
  - Used for unauthorized purpose
  - No longer necessary
  - Consent withdrawn (and no other lawful basis exists)
  - Processing is unlawful
- **Action:** Delete from live and backup systems

#### **Right to Data Portability (Section 18)**
- Applies when:
  - Processing is electronic, structured, commonly used format
  - Based on consent or contract
- **Format:** Machine-readable (XML, JSON, CSV)
- **Scope:** Data actively provided + observed data (logs, transaction history)
- **NOT included:** Derived/inferred data (analytics, scores)

#### **Right to Object (Section 16)**
- Users can object to processing for direct marketing
- Must provide easy opt-out mechanism

### 1.5 Security Requirements

**CRITICAL: Organizational, Physical, and Technical Measures (Section 20, NPC Circular 2023-06):**

#### **Organizational:**
- Appoint Data Protection Officer (if ≥250 employees, ≥1,000 sensitive records, or high risk)
- Policies for access control, incident response, data breach notification
- Staff training on data privacy

#### **Technical:**
- Encryption in transit (HTTPS/TLS) and at rest
- Access controls (role-based, least privilege)
- Audit logging
- Regular security assessments
- Secure deletion mechanisms

#### **Physical:**
- Secure server locations (if self-hosted)
- Access controls to data centers

**Data Breach Notification (NPC Circular 2022-03):**
- Notify NPC within **72 hours** of breach awareness
- Notify affected individuals "as soon as reasonably possible" when high risk to rights/freedoms

### 1.6 Registration Requirements

**NPC Registration Required if ANY of:**
- ≥250 employees
- Processing sensitive personal information of ≥1,000 individuals
- Processing likely to pose risk to rights/freedoms

**If required:**
- Register Data Processing System via NPCRS
- Register Data Protection Officer
- Display NPC Seal of Registration (physical office + website)

### 1.7 Cross-Border Data Transfers

**For international cloud providers (AWS, Google Cloud, Azure):**

✅ **ALLOWED** - No data localization requirement for private sector
✅ **No NPC pre-approval** required
✅ **Accountability:** You remain responsible for data protection

**Requirements:**
- Document the transfer in privacy notice
- Ensure contract with processor includes Section 44 IRR requirements:
  - Processing scope, duration, purpose
  - Data types and subject categories
  - Process only on documented instructions
  - Confidentiality obligations
  - Security measures
  - No sub-processors without approval
  - Support for data subject rights
  - Deletion/return of data at end of service
  - Audit provisions

**Best Practice:** Use vendor's Data Processing Addendum (DPA) if it covers Section 44 requirements

**Reference:** NPC Advisory No. 2024-01 provides model contractual clauses (voluntary)

---

## 2. Real Estate Professional Requirements

### 2.1 PRC Licensing Display (RA 9646)

**CRITICAL: If your platform features agent profiles/listings:**

#### **Licensed Real Estate Brokers (REB):**
- Must display Certificate of Registration prominently
- Show: PRC license number, issuance date, validity period
- Required for all professional documents and advertisements

#### **Accredited Real Estate Salespersons (RES):**
- Must be supervised by a licensed REB
- RES must show supervising broker's information
- Cannot operate independently

**Platform Requirements:**
- Verify agent PRC credentials before activation
- Display license information on agent profiles
- Include disclaimer if non-licensed users exist: "This user is not a licensed real estate professional"

### 2.2 DHSUD Regulations (formerly HLURB)

**Applies if:** Property listings include subdivisions, condominiums, or other PD 957-covered projects

#### **License to Sell Requirement:**
- Developers must have DHSUD License to Sell (LS) before marketing
- **CRITICAL:** All ads must display LS number or Advertisement Approval Number
- No sales activity before LS issuance

#### **Advertisement Requirements (HLURB AO No. 01, s. 2015):**

**For subdivision/condo listings, ads must show:**
1. Developer/owner name
2. **Exact location** (street, barangay, city/municipality)
3. **License to Sell number**
4. **Advertisement Approval Number**
5. **Project completion date** (from License to Sell)
6. **Maximum selling price** (for economic/socialized housing)
7. **Agent registration numbers** (if dealer/broker named)

**Visual Requirements:**
- Images captioned: "Actual photographs" or "Architect's perspective"
- Amenities shown must match approved plans
- Distance in **kilometers** (not "minutes away")

**Prohibited:**
- Pre-license ads with sales contact info
- Misleading location claims
- Amenities not in approved plans

**Warranties:**
- All ad representations = enforceable warranty
- Developer liable for promised facilities/improvements

### 2.3 Real Estate Code of Ethics

**If platform facilitates agent-client interactions:**
- Agents must follow PRC Board Code of Ethics
- Agents must maintain Continuing Professional Education (CPE)
- Platform may require CPE certificate uploads

---

## 3. Consumer Protection Laws

### 3.1 Truth in Advertising (RA 7394 Consumer Act + PD 957)

**CRITICAL Requirements:**

#### **Truthfulness:**
- All property info must be accurate and current
- Cannot mislead about: location, amenities, pricing, terms
- Distance/travel time claims must be verifiable

#### **Disclosures:**
- Financial computations (monthly amortization, interest rates)
- Complete payment terms if mentioned
- Material facts affecting purchase decision

#### **Liability:**
- False/misleading ads = deceptive sales practice
- DTI Fair Trade Enforcement Bureau handles complaints
- Penalties: fines, imprisonment (up to 1 year)

### 3.2 Required Disclaimers

**Recommended disclaimers for platform:**

1. **Property Listings:**
   > "Property information provided by real estate professionals. Verify all details independently before purchase. [Platform Name] is not liable for inaccuracies."

2. **Financial Estimates:**
   > "Estimated monthly payments are for reference only and do not constitute a loan offer. Actual terms depend on lender approval and creditworthiness."

3. **Agent Relationship:**
   > "Independent real estate professionals use this platform. [Platform Name] does not employ these agents and is not responsible for their professional conduct."

4. **Licensed Status:**
   > "Only work with licensed real estate brokers (REB) for property transactions. Verify PRC license before engaging services."

---

## 4. Website Legal Requirements

### 4.1 Privacy Policy - MANDATORY

**Required when collecting ANY personal data**

**Must include:**
- Data collected (name, email, phone, income, cookies, analytics)
- Purpose of collection
- Lawful basis (consent, contract, legitimate interest)
- How data is used
- Third parties who receive data (cloud hosting, email services, analytics)
- Data retention periods
- User rights (access, correction, deletion, portability)
- Contact details for privacy inquiries
- How to exercise rights
- Cookie usage (if applicable)
- Cross-border transfers

**Best Practices:**
- Accessible from every page (footer link)
- Last updated date
- Plain language, not legal jargon
- Layered approach for long policies

### 4.2 Terms of Service - HIGHLY RECOMMENDED

**Should include:**
- Platform operator identity
- Eligibility to use service
- Account creation and responsibilities
- Subscription pricing and billing
- Cancellation and refund policy
- Acceptable use policy
- Intellectual property ownership
- Service limitations and disclaimers
- Suspension/termination conditions
- Dispute resolution process
- Governing law (Philippines)
- Jurisdiction (Philippine courts)

### 4.3 Cookie Consent

**Philippine Requirements:**

#### **Lawful Basis:**
- **Option 1: Consent** - Freely given, specific, informed, clear affirmative action
- **Option 2: Legitimate Interest** - Requires documented Legitimate Interest Assessment

#### **For Analytics/Tracking Cookies:**
- **Recommend:** Cookie consent banner before placing non-essential cookies
- **Content:** Description, purpose, duration, controller, rights
- **Mechanism:** Accept/Reject buttons (not just "Accept")
- **Easy withdrawal:** Settings page or cookie preference center

**Essential Cookies (no consent needed):**
- Authentication
- Security
- Load balancing
- Shopping cart (if applicable)

**Non-Essential Cookies (consent needed):**
- Google Analytics, Facebook Pixel, etc.
- A/B testing
- Marketing/retargeting

**Best Practice:** Use cookie management platform (OneTrust, Cookiebot, etc.)

---

## 5. Data Residency & Cloud Storage

### 5.1 Private Sector Data

✅ **No mandatory data localization** for private business data
✅ **Can use international cloud providers** (AWS, GCP, Azure, DigitalOcean, etc.)

**Requirements:**
- Maintain accountability for data security
- Ensure provider contract includes data protection clauses (IRR Section 44)
- Disclose international processing in privacy notice
- Select providers with ISO 27001, SOC 2, or equivalent certifications

**Recommended Cloud Providers for Philippines:**
- AWS Asia Pacific (Singapore)
- Google Cloud Asia (Singapore/Taiwan)
- Azure Southeast Asia (Singapore)
- DigitalOcean Singapore

### 5.2 Government Data (FYI Only)

**Executive Order 119 (2026)** - Applies ONLY to government agencies:
- Top Secret/Secret: Must remain in Philippines
- Confidential: Generally local, offshore with approval
- Restricted/Open: Can use cloud abroad with security controls

**Your SaaS tool:** This does NOT apply unless you process government agency data

---

## 6. Payment Processing Compliance

### 6.1 BSP Regulations

**If collecting subscription fees:**

#### **Option 1: Use Licensed Payment Service Provider (RECOMMENDED for MVP)**
- Partner with licensed PSP (PayMongo, Paymaya, GCash, Xendit, Stripe)
- PSP handles BSP compliance
- You handle: PCI-DSS if storing card data, AML/CFT, customer authentication

**Advantages:**
- No BSP licensing required
- Faster implementation
- Lower compliance burden

#### **Option 2: Direct Merchant Acquisition (Heavy Compliance)**
**Only if processing payments for OTHER merchants (agents collecting from clients)**

Requires:
- Operator of Payment Systems (OPS) registration with BSP
- Merchant Acquisition License (MAL)
- Minimum capitalization: ₱5M (Class A) or ₱10M (Class B)
- Compliance with:
  - Risk management (IT security, AML/CFT)
  - Settlement within 2 business days
  - Transparent pricing
  - Merchant due diligence
  - Dispute resolution mechanisms
  - Financial consumer protection (RA 11765)

**Recommendation:** Use Option 1 for MVP. Only pursue Option 2 if building a payment gateway business.

### 6.2 Subscription Billing Requirements

**If using third-party PSP for subscriptions:**
- Clear authorization for recurring billing
- Notify customers before each charge (best practice)
- Easy cancellation mechanism
- Refund policy clearly stated in Terms
- Secure customer data (PCI-DSS compliance if handling card data)

---

## 7. Penalties for Non-Compliance

### 7.1 Data Privacy Act Violations

#### **Criminal Penalties (Sections 25-33):**

| Violation | Imprisonment | Fine |
|-----------|--------------|------|
| Unauthorized processing (personal) | 1-3 years | ₱500,000 - ₱2,000,000 |
| Unauthorized processing (sensitive) | 3-6 years | ₱500,000 - ₱4,000,000 |
| Improper disposal (personal) | 6 months - 2 years | ₱100,000 - ₱500,000 |
| Improper disposal (sensitive) | 1-3 years | ₱100,000 - ₱1,000,000 |
| Unauthorized disclosure (personal) | 1.5-5 years | ₱500,000 - ₱1,000,000 |
| Unauthorized disclosure (sensitive) | 2-7 years | ₱500,000 - ₱2,000,000 |
| Unauthorized access | 1-3 years | ₱500,000 - ₱2,000,000 |
| Intentional breach | 1.5-5 years | ₱500,000 - ₱2,000,000 |

#### **Administrative Fines (NPC Circular 2022-01):**
- ₱50,000 - ₱5,000,000 per infraction
- For major/grave violations affecting >1,000 data subjects: 0.25% - 3% of annual gross income
- Factors: negligence vs. intentional, harm to data subjects, previous violations

### 7.2 Real Estate Law Violations

#### **RA 9646 (Real Estate Service Act):**
- Practicing without license: ₱50,000 - ₱100,000 fine + 6 months - 2 years imprisonment
- Suspension or revocation of license
- Civil liabilities for damages

#### **PD 957 (Subdivision/Condo):**
- Selling without License to Sell: Criminal liability
- False advertising: Criminal liability + civil damages
- Failure to deliver promised amenities: Breach of warranty

### 7.3 Consumer Protection Violations

#### **RA 7394 (Consumer Act):**
- Deceptive advertising: ₱50,000 - ₱300,000 fine + 3 months - 2 years imprisonment
- Unfair/unconscionable sales acts: Similar penalties
- Administrative sanctions by DTI

### 7.4 BSP Violations

- Operating without license: Cease and desist order + criminal penalties
- Fines up to ₱1,000,000 per day of violation
- Revocation of license
- Criminal prosecution

---

## 8. Compliance Checklist by Priority

### 🔴 CRITICAL (Must-Have for Launch)

#### Data Privacy:
- [ ] Implement consent mechanism on lead forms
- [ ] Create compliant Privacy Policy
- [ ] Display privacy notice before data collection
- [ ] Implement data security measures (HTTPS, encryption, access controls)
- [ ] Set up data retention policy and automated deletion
- [ ] Create process for data subject rights requests (access, deletion, portability)
- [ ] Document lawful basis for each processing activity
- [ ] If using international cloud: Ensure DPA with provider

#### Real Estate Compliance:
- [ ] Verify agent PRC licenses before activation
- [ ] Display agent license information on profiles
- [ ] Add disclaimer about independent contractor relationship

#### Website Legal:
- [ ] Publish Privacy Policy (accessible from all pages)
- [ ] Publish Terms of Service
- [ ] Add required disclaimers (property info, financial estimates)

#### Payments:
- [ ] Partner with licensed PSP for subscriptions (don't build own payment processing)
- [ ] Clear subscription terms and cancellation policy

### 🟡 RECOMMENDED (Post-MVP, High Priority)

#### Data Privacy:
- [ ] Appoint Data Protection Officer (if thresholds met)
- [ ] Register with NPC (if required: ≥250 employees, ≥1,000 SPI records, or high risk)
- [ ] Display NPC Seal of Registration (if registered)
- [ ] Implement cookie consent banner for analytics
- [ ] Document Legitimate Interest Assessment (if using legitimate interest basis)
- [ ] Set up data breach incident response plan
- [ ] Conduct Privacy Impact Assessment

#### Real Estate:
- [ ] For subdivision/condo listings: Verify DHSUD License to Sell
- [ ] Require developers to provide Advertisement Approval Numbers
- [ ] Implement listing review process for accuracy
- [ ] Distance claims in kilometers only

#### Website:
- [ ] Cookie Policy (separate or in Privacy Policy)
- [ ] Contact information for data privacy inquiries
- [ ] FAQ on data subject rights

### 🟢 OPTIONAL (Future Enhancement)

- [ ] ISO 27001 certification
- [ ] Third-party privacy audit
- [ ] Privacy by Design framework
- [ ] Enhanced security (penetration testing, bug bounty)
- [ ] Multilingual privacy notices (Filipino + English)
- [ ] Privacy preference center for users
- [ ] Automated data portability export tool

---

## 9. Template Documents

### 9.1 Lead Form Consent Language

**Short Form (on form):**

```
By submitting this form, I consent to [Company Name] and the assigned 
real estate professional collecting and processing my personal information 
(name, contact details, property preferences, income estimate) for the 
purpose of property matching and follow-up. I understand I can withdraw 
consent anytime by contacting [email/phone].

[ ] I agree to the Privacy Policy (link)
```

**Detailed Consent (in Privacy Policy):**

```
CONSENT FOR LEAD CAPTURE

What data we collect:
- Name, email address, phone number
- Property preferences (location, budget, type)
- Income estimate (for financing eligibility)
- Communication history with real estate agents

How we use it:
- Match you with suitable properties and agents
- Enable agents to contact you with property options
- Provide financing guidance and eligibility estimates
- Improve our service

Who sees your data:
- The real estate agent(s) assigned to your lead
- Our platform administrators (for support)
- Cloud hosting provider [Name] (data stored in Singapore)
- Email service provider [Name] (for notifications)

How long we keep it:
- Active leads: 12 months from last activity
- After 12 months of inactivity: Automatically deleted

Your rights:
- Access your data: Request a copy anytime
- Correct errors: Update your information
- Delete data: Request deletion (we'll delete within 30 days)
- Data portability: Request your data in CSV/JSON format
- Withdraw consent: Contact us to stop processing

Contact: [Data Protection Officer/Privacy Contact]
Email: privacy@[yourcompany].ph
Phone: [number]
```

### 9.2 Required Disclaimers

**Property Listing Disclaimer:**
```
IMPORTANT NOTICE

Property information is provided by independent real estate professionals. 
While we strive for accuracy, [Platform Name] does not verify property 
details independently. Buyers must conduct their own due diligence, 
including:

- Verifying property title with the Registry of Deeds
- Confirming lot size, boundaries, and zoning
- Checking for liens, encumbrances, or disputes
- Confirming all representations with the seller
- For subdivisions/condominiums: Verifying DHSUD License to Sell

[Platform Name] is not liable for inaccuracies, omissions, or 
misrepresentations in property listings.

For subdivision and condominium projects: All representations in 
advertisements form part of sales warranties enforceable against the 
developer under PD 957.
```

**Financial Computation Disclaimer:**
```
FINANCIAL ESTIMATES

Monthly payment and loan estimates are for reference purposes only and do 
not constitute:
- A loan offer or commitment
- Guaranteed financing terms
- Professional financial advice

Actual loan terms depend on:
- Lender approval and policies
- Your credit history and financial capacity
- Property appraisal value
- Current interest rates

Consult licensed banks or financing institutions for accurate quotes. 
Interest rates shown may not include: processing fees, insurance, taxes, 
or other charges.
```

**Agent Relationship Disclaimer:**
```
INDEPENDENT CONTRACTOR RELATIONSHIP

Real estate professionals on this platform are independent contractors, 
not employees or agents of [Platform Name]. We provide technology to 
connect buyers/sellers with licensed professionals but do not:

- Employ, supervise, or direct these professionals
- Guarantee their qualifications, conduct, or performance
- Assume liability for their actions or omissions
- Participate in commissions or fees (except platform subscription)

Always verify:
- PRC license status (www.prc.gov.ph)
- Professional standing and reputation
- Terms of engagement before signing contracts

Report concerns to: compliance@[yourcompany].ph
```

**Licensed Professional Notice:**
```
VERIFY PROFESSIONAL LICENSE

Under RA 9646, only licensed Real Estate Brokers (REB) can perform real 
estate services in the Philippines. Real Estate Salespersons (RES) must 
be supervised by a licensed broker.

Before engaging any professional:
✓ Verify PRC license at www.prc.gov.ph
✓ Confirm license is current and not suspended
✓ Request to see original Certificate of Registration

Practicing without a valid license is illegal and punishable by law.
```

### 9.3 Privacy Policy Table of Contents

**Comprehensive Privacy Policy Structure:**

```
1. Introduction
   - Controller identity and contact
   - Data Protection Officer contact
   - Scope of policy

2. Personal Data We Collect
   - Data from leads (name, contact, income)
   - Data from agents (account, profile, listings)
   - Automatically collected data (cookies, logs, analytics)

3. How We Use Your Data
   - Lead matching and agent connection
   - Service delivery and improvement
   - Communication and notifications
   - Analytics and research

4. Lawful Basis for Processing
   - Consent (lead capture)
   - Contract performance (agent accounts)
   - Legitimate interest (platform improvement, security)

5. Data Sharing and Disclosure
   - Real estate agents (for assigned leads)
   - Service providers (hosting, email, analytics)
   - Legal requirements
   - No sale of personal data

6. International Data Transfers
   - Cloud hosting in [Singapore/Country]
   - Data protection safeguards
   - Processor agreements

7. Data Retention
   - Retention periods by data type
   - Automated deletion processes

8. Your Privacy Rights
   - Right to access
   - Right to correction
   - Right to erasure
   - Right to data portability
   - Right to object
   - How to exercise rights

9. Data Security
   - Technical measures (encryption, access controls)
   - Organizational measures (staff training, policies)
   - Data breach notification

10. Cookies and Tracking
    - Types of cookies used
    - Cookie purposes
    - How to manage cookies

11. Children's Privacy
    - No collection from under 18 without parent consent

12. Changes to This Policy
    - How we notify of changes

13. Contact Us
    - Privacy inquiries
    - Data protection officer
    - Complaint mechanism

14. Regulatory Information
    - NPC Registration (if applicable)
    - Compliance certifications
```

### 9.4 Cookie Consent Banner

**Example Implementation:**

```html
<!-- First Visit -->
<div class="cookie-banner">
  <p>
    We use cookies to improve your experience, analyze site traffic, and for 
    marketing purposes. Essential cookies are required for the site to function.
    <a href="/cookie-policy">Learn more</a>
  </p>
  
  <button onclick="acceptAll()">Accept All</button>
  <button onclick="rejectNonEssential()">Reject Non-Essential</button>
  <button onclick="showPreferences()">Customize</button>
</div>

<!-- Preferences Panel -->
<div class="cookie-preferences">
  <h3>Cookie Preferences</h3>
  
  <div class="cookie-category">
    <h4>Essential Cookies (Always On)</h4>
    <p>Required for site functionality, security, and authentication.</p>
  </div>
  
  <div class="cookie-category">
    <h4>Analytics Cookies</h4>
    <input type="checkbox" id="analytics-cookies">
    <p>Help us understand how visitors use our site (Google Analytics).</p>
  </div>
  
  <div class="cookie-category">
    <h4>Marketing Cookies</h4>
    <input type="checkbox" id="marketing-cookies">
    <p>Used to show relevant ads and measure campaign effectiveness.</p>
  </div>
  
  <button onclick="savePreferences()">Save Preferences</button>
</div>
```

---

## 10. Recommended Compliance Roadmap

### Phase 1: MVP Launch (Weeks 1-4)
**Goal:** Minimum legal compliance for initial users

1. **Week 1: Data Privacy Foundation**
   - Draft Privacy Policy
   - Implement consent checkboxes on lead forms
   - Set up HTTPS (SSL certificate)
   - Choose cloud provider and review DPA

2. **Week 2: Terms & Disclaimers**
   - Draft Terms of Service
   - Add required disclaimers to listing pages
   - Create privacy contact email (privacy@domain.ph)

3. **Week 3: Security & Retention**
   - Implement password hashing (bcrypt/Argon2)
   - Set up automated data retention policy (12-month deletion)
   - Create manual process for data subject requests

4. **Week 4: Agent Compliance**
   - Add PRC license verification to agent onboarding
   - Display license info on agent profiles
   - Test end-to-end consent and privacy flow

### Phase 2: Post-MVP (Months 2-3)
**Goal:** Enhanced compliance and user trust

1. **Month 2: Cookie Consent & Analytics**
   - Implement cookie consent banner
   - Set up Google Analytics with consent mode
   - Create Cookie Policy page

2. **Month 2: Data Subject Rights**
   - Build self-service data access portal
   - Automate data portability exports (CSV/JSON)
   - Document data subject request procedures

3. **Month 3: NPC Registration (if required)**
   - Assess registration requirements (250 employees, 1,000 SPI, or risk)
   - Prepare registration documents
   - Register DPS and DPO with NPC
   - Display NPC Seal

### Phase 3: Scaling (Months 4-6)
**Goal:** Enterprise-grade compliance

1. **Month 4: Advanced Security**
   - Conduct security audit/penetration testing
   - Implement advanced logging and monitoring
   - Set up incident response playbook

2. **Month 5: Process Documentation**
   - Document all data flows (data map)
   - Create data processing records (ROPA)
   - Conduct Privacy Impact Assessment

3. **Month 6: Continuous Improvement**
   - Annual privacy policy review
   - Staff privacy training
   - Consider ISO 27001 certification path

---

## 11. Key Contacts & Resources

### Regulatory Bodies

**National Privacy Commission (NPC)**
- Website: https://privacy.gov.ph
- Email: info@privacy.gov.ph
- Tel: +63 (2) 8234-2228
- Registration: https://npcrs.privacy.gov.ph

**Professional Regulation Commission (PRC)**
- Website: https://www.prc.gov.ph
- License verification: https://online.prc.gov.ph/Verification
- Real Estate Service Board inquiries

**Department of Human Settlements and Urban Development (DHSUD)**
- Website: https://www.dhsud.gov.ph
- License to Sell verification
- Advertisement approval

**Bangko Sentral ng Pilipinas (BSP)**
- Website: https://www.bsp.gov.ph
- Payments regulation: paymentsandcurrency@bsp.gov.ph

**Department of Trade and Industry (DTI)**
- Fair Trade Enforcement Bureau: https://fairtrade.dti.gov.ph
- Consumer complaints

### Legal References

**Primary Laws:**
- Republic Act 10173 (Data Privacy Act of 2012)
- Republic Act 9646 (Real Estate Service Act of 2009)
- Presidential Decree 957 (Subdivision and Condominium Buyers' Protective Decree)
- Republic Act 7394 (Consumer Act of the Philippines)
- Republic Act 11127 (National Payment Systems Act)

**NPC Circulars (Key):**
- Circular 2022-01: Guidelines on Administrative Fines
- Circular 2022-03: Data Breach Notification
- Circular 2022-04: Registration Requirements
- Circular 2023-01: Deceptive Design Patterns
- Circular 2023-04: Guidelines on Consent
- Circular 2023-06: Security Measures
- Circular 2023-07: Legitimate Interest
- Advisory 2024-01: Cross-Border Contractual Clauses

**BSP Circulars:**
- Circular 1049: Payment System Operators
- Circular 1198: Merchant Payment Acceptance Activities

---

## 12. Compliance Cost Estimates

### Initial Setup Costs

| Item | Estimated Cost | Notes |
|------|---------------|-------|
| Legal consultation (privacy lawyer) | ₱50,000 - ₱150,000 | Policy review, compliance advice |
| Privacy policy drafting | ₱20,000 - ₱50,000 | If outsourced to legal |
| Terms of service drafting | ₱20,000 - ₱50,000 | If outsourced |
| SSL certificate (annual) | ₱5,000 - ₱20,000 | Free option: Let's Encrypt |
| Cookie consent tool (annual) | ₱0 - ₱50,000 | Free: CookieYes, OneTrust Lite |
| Cloud hosting (monthly) | ₱5,000 - ₱50,000 | AWS/GCP/Azure, varies by scale |
| **Total Initial** | **₱100,000 - ₱320,000** | |

### Ongoing Annual Costs

| Item | Estimated Cost | Notes |
|------|---------------|-------|
| Data Protection Officer (if required) | ₱600,000 - ₱1,200,000 | Full-time salary, or outsourced DPO service ₱200,000/year |
| NPC registration renewal | ₱1,000 - ₱5,000 | If registered |
| Legal compliance review | ₱50,000 - ₱100,000 | Annual policy updates |
| Security audit | ₱100,000 - ₱300,000 | Optional, recommended annually |
| Payment service provider fees | 2.5% - 3.5% per transaction | Stripe, PayMongo, etc. |
| **Total Annual** | **₱200,000 - ₱1,600,000** | Excluding DPO |

### Opportunity Cost of Non-Compliance

| Risk | Potential Cost |
|------|----------------|
| Data breach fines (administrative) | ₱50,000 - ₱5,000,000 per violation |
| Data breach fines (criminal) | ₱100,000 - ₱5,000,000 + imprisonment |
| Litigation costs | ₱500,000 - ₱5,000,000+ per case |
| Reputational damage | Immeasurable, potential business loss |
| Service suspension order | Lost revenue during downtime |

**Recommendation:** Invest in compliance upfront. Non-compliance penalties far exceed implementation costs.

---

## 13. FAQ: Common Compliance Questions

### Q1: Do we need a Data Protection Officer?
**A:** Required if you meet ANY of:
- ≥250 employees
- Processing sensitive personal information of ≥1,000 individuals
- Processing likely to pose risk to rights and freedoms

For MVP with <250 employees and <1,000 sensitive records: Not required initially, but recommended to designate a privacy contact person.

### Q2: Can we use Google Analytics without cookie consent?
**A:** Technically no. Google Analytics uses cookies that track users across sessions, requiring:
- **Option 1:** Cookie consent banner (clearest compliance)
- **Option 2:** Documented Legitimate Interest Assessment + privacy notice disclosure
- **Safest approach:** Implement consent banner

### Q3: Is income data "sensitive personal information"?
**A:** Not automatically. Income becomes SPI only if it's a **government-issued tax return** or official government record. Self-reported income estimates are regular personal information, but still require standard consent and protection.

### Q4: Must data be stored in the Philippines?
**A:** No. Private sector businesses can use international cloud servers (AWS Singapore, etc.). You remain accountable for data protection and must have a compliant processor agreement.

### Q5: Can we transfer leads to agents without user consent?
**A:** No. Transferring personal data to agents is "processing" requiring lawful basis. Best practice:
- Inform users in privacy notice that data will be shared with assigned agent
- Obtain consent at form submission
- Show agent name/photo before consent if possible

### Q6: How long can we keep lead data?
**A:** No fixed period, but must be justified and disclosed. Recommended:
- Active leads: 12 months from last activity
- After inactivity period: Delete automatically
- Document retention policy and inform users

### Q7: Do we need DHSUD License to Sell for our platform?
**A:** No. License to Sell is for property developers selling subdivisions/condos. Your platform doesn't need it, but:
- If listing subdivisions/condos, verify developer has License to Sell
- Display LS number on listings
- Not required for individual house/lot resales

### Q8: Can we charge fees for data access requests?
**A:** Generally no, except:
- Requests are excessive or repetitive
- Fee must be reasonable, cover administrative cost only
- Best practice: Provide first request free

### Q9: Do we need BSP license to collect subscriptions?
**A:** No, if using licensed payment service provider (PayMongo, Stripe, etc.). BSP license required only if you:
- Process payments directly (merchant acquirer)
- Operate as a payment gateway
- Use PSP for MVP to avoid licensing.

### Q10: What happens if we have a data breach?
**A:** Must:
1. Contain breach immediately
2. Assess scope and impact
3. Notify NPC within **72 hours** of awareness
4. Notify affected individuals "as soon as reasonably possible" if high risk
5. Document incident and response

Failure to notify = separate violation with fines.

---

## 14. Final Recommendations

### For MVP Launch:

✅ **DO:**
1. Implement consent checkboxes on all lead forms
2. Publish clear Privacy Policy and Terms of Service
3. Use HTTPS everywhere
4. Partner with licensed PSP for payments
5. Verify agent PRC licenses
6. Set up data retention with automated deletion
7. Create process for data subject requests
8. Add required disclaimers on listings
9. Use international cloud provider with proper DPA

❌ **DON'T:**
1. Assume consent (must be explicit)
2. Retain data indefinitely without justification
3. Build own payment processing (use PSP)
4. Copy-paste privacy policy templates without customization
5. Ignore cookie consent (especially if using Google Analytics)
6. Allow unverified agents to create profiles
7. Make unverifiable property claims
8. Store passwords in plain text
9. Skip HTTPS

### Success Criteria:

Your platform is compliant when:
- [ ] Every data collection point has clear consent mechanism
- [ ] Users understand what data is collected and why (privacy notice)
- [ ] Users can exercise their rights easily (access, delete, port)
- [ ] Data is secured in transit and at rest
- [ ] Retention policy automatically deletes old data
- [ ] Agent credentials are verified
- [ ] Disclaimers protect against liability
- [ ] Terms clearly define relationships and responsibilities
- [ ] Payment processing goes through licensed provider
- [ ] Team knows how to respond to privacy requests and breaches

---

## Appendix: Compliance Checklist Summary

### Critical Path to Launch

```
DATA PRIVACY ACT COMPLIANCE:
☐ Privacy Policy published
☐ Consent mechanism on lead forms
☐ Privacy notice before data collection
☐ Data subject rights request process
☐ Data retention policy (automated deletion)
☐ Security measures (HTTPS, encryption, access control)
☐ Cloud provider DPA signed
☐ Privacy contact email set up

REAL ESTATE COMPLIANCE:
☐ Agent PRC license verification
☐ License display on profiles
☐ Independent contractor disclaimer

WEBSITE LEGAL:
☐ Terms of Service published
☐ Property info disclaimer
☐ Financial estimate disclaimer
☐ Licensed professional notice

PAYMENT COMPLIANCE:
☐ Licensed PSP partnership
☐ Subscription terms clear
☐ Cancellation policy documented

POST-MVP ENHANCEMENTS:
☐ Cookie consent banner
☐ Cookie Policy
☐ NPC registration (if required)
☐ NPC Seal display
☐ Data Protection Officer appointed
☐ Privacy Impact Assessment
☐ Security audit
```

---

**Document Version:** 1.0  
**Last Updated:** November 2, 2026  
**Next Review:** February 2, 2027

**Disclaimer:** This report provides general guidance based on research of Philippine laws and regulations as of November 2026. It is not legal advice. Consult a licensed Philippine attorney specializing in data privacy and real estate law for advice specific to your situation.

---

## Sources & Citations

1. Republic Act No. 10173 (Data Privacy Act of 2012)
2. Data Privacy Act Implementing Rules and Regulations (IRR)
3. NPC Circulars: 2022-01, 2022-03, 2022-04, 2023-01, 2023-04, 2023-06, 2023-07
4. NPC Advisory Opinions: 2017-24, 2017-57, 2018-057, 2019-034, 2023-016
5. NPC Advisory No. 2021-01 (Data Subject Rights), 2024-01 (Cross-Border Transfers)
6. Republic Act No. 9646 (Real Estate Service Act of 2009)
7. Presidential Decree No. 957 (Subdivision and Condominium Buyers' Protective Decree)
8. HLURB Administrative Orders: No. 01 s. 2015 (Advertisements), No. 02 s. 2015 (Dealers/Brokers)
9. Republic Act No. 7394 (Consumer Act of the Philippines)
10. Republic Act No. 11127 (National Payment Systems Act)
11. BSP Circulars: 1049 (OPS Registration), 1198 (Merchant Payment Acceptance)
12. BSP Manual of Regulations on Payment Systems (MORPS)
13. Executive Order No. 119 (Government Data Classification Framework)
14. NPC Registration System (NPCRS) Guidelines
15. Privacy.gov.ph official resources and FAQs
16. PRC.gov.ph Real Estate Service Board guidelines
17. DHSUD.gov.ph regulatory framework
18. Legal analysis from CyberCode.ph, DivinaLaw, GorricetaLaw, ASG Law
