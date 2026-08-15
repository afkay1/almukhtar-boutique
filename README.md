# Al-Mukhtar (المختار) — Top Choice Luxury Menswear Boutique

A complete, production-ready, bilingual (English & Arabic with full RTL mirroring) web application for **Al-Mukhtar (المختار) — "Top Choice"**, a premier multi-brand menswear boutique located in Al Olaya, Riyadh, Saudi Arabia.

---

## 🌟 Verified Business Details

- **Name**: Al-Mukhtar (المختار) — Storefront English: *"Top Choice"*.
- **Category**: Multi-brand European & contemporary menswear retailer (Suits, Tuxedos, Blazers, Sport Coats, Overcoats, Knitwear, Chinos, Bugatti Denim, Quilted Vests, Puffer Jackets, Handcrafted Silk Ties, Leather Shoes, Belts, and Cufflinks).
- **Brands Carried**: 
  - **Landini Milano** (In-house proprietary label — suits, ties, shirts, accessories)
  - **Pal Zileri** (Italian sartorial luxury suiting from Quinto Vicentino)
  - **Bugatti** (German technical outerwear, flex denim, and knitwear)
- **Reputation**: **4.9-star rating** backed by **1,489+ verified Google reviews**.
- **Dual Al Olaya Locations**:
  1. **Flagship Boutique**: Olaya Street, Al Olaya District, Riyadh 12214. (Ready-to-wear, walk-ins welcome. Sat–Thu 10:00 AM–11:00 PM, Fri 4:00 PM–11:00 PM).
  2. **Fitting Studio**: Al Olaya Street, Al Olaya District, Riyadh 12222. (Tailoring & made-to-measure fittings, by appointment. Sat–Thu 11:00 AM–10:00 PM, Fri by appointment).
- **VIP Contact Hotline**: WhatsApp `+966 59 719 3831`.

---

## 🏛️ Site Architecture (7 Full Pages)

1. **Home (`/`)**:
   - Full-bleed background video hero with static poster fallback and dark gradient overlay.
   - Dual CTAs ("Explore Collections" & "Book a Fitting").
   - 4 Pillars of Excellence ("Why Choose Us").
   - Brand Curation Showcase (Landini Milano, Pal Zileri, Bugatti).
   - Seasonal Collections Preview with interactive category tabs and quick-view modal.
   - In-House Tailoring & Fitting Studio highlight.
   - Dual Al Olaya Branches visual teaser.
   - Verified 4.9★ Google Reviews testimonial slider.
   - Closing VIP WhatsApp concierge banner.

2. **Collections (`/collections`)**:
   - Filterable product grid across **5 categories**:
     - *Suits & Blazers*
     - *Shirts & Knitwear*
     - *Casual & Denim*
     - *Outerwear*
     - *Shoes & Accessories*
   - Brand filtering (*All*, *Landini Milano*, *Pal Zileri*, *Bugatti*).
   - Product quick-view modal with fabric specifications and direct WhatsApp inquiry deep-links.

3. **Tailoring & Fit (`/tailoring`)**:
   - Explanation of in-house alterations and made-to-measure services.
   - 4-Step precision fitting journey.
   - Interactive Zod-validated fitting booking form with branch selection, service type, fabric preference, date, and time slot.
   - Immediate WhatsApp confirmation link generation.

4. **Our Branches (`/branches`)**:
   - Comprehensive profiles for both Al Olaya locations (Flagship Boutique & Fitting Studio).
   - Verified opening hours, Google Maps directions links, phone numbers, and WhatsApp links.
   - Storefront imagery and boutique hospitality features (valet parking, Saudi coffee, private VIP suites).

5. **Our Story (`/story`)**:
   - Brand origin and the meaning of "Al-Mukhtar" — *Top Choice*.
   - Curation philosophy (a disciplined edit of European labels, not everything under the sun).
   - Story of Landini Milano, Pal Zileri, and Bugatti partnerships.
   - Walnut wood and travertine stone architectural aesthetic.
   - 1,489+ reviews customer trust.

6. **Gallery (`/gallery`)**:
   - Filterable media grid (*Storefront*, *Interior Architecture*, *Suiting & Formal*, *Casual & Outerwear*, *Shoes & Silk Accessories*, *Cinematic Videos*).
   - Full-screen lightbox modal with high-res zoom and bilingual captions.

7. **Contact (`/contact`)**:
   - Direct WhatsApp VIP hotline banner (`+966 59 719 3831`).
   - Dual branch quick-contact cards.
   - Validated contact form (Name, Email, Phone, Subject, Message) with Zod API validation.
   - 6-item interactive FAQ accordion.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS (Bespoke luxury charcoal, antique gold `#c5a059`, travertine `#2a2723`, and cream `#f7f5f0` palette)
- **Typography**: Plus Jakarta Sans / Inter & Tajawal / Amiri for Arabic
- **Icons**: Lucide React
- **Validation**: Zod + React Hook Form
- **Server Endpoints**: `/api/booking` and `/api/contact`

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build & Run Production Server
```bash
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) (or configured port) in your browser.
