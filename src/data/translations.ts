export type Locale = "en" | "ar";

export interface TranslationDictionary {
  nav: {
    home: string;
    collections: string;
    tailoring: string;
    branches: string;
    story: string;
    gallery: string;
    contact: string;
    bookFitting: string;
    whatsappUs: string;
    tagline: string;
  };
  common: {
    brandName: string;
    brandNameEn: string;
    brandNameAr: string;
    topChoice: string;
    topChoiceAr: string;
    riyadhSaudiArabia: string;
    alOlaya: string;
    learnMore: string;
    exploreCollections: string;
    bookFittingSession: string;
    viewBranchDetails: string;
    getDirections: string;
    directWhatsApp: string;
    enquireOnWhatsApp: string;
    verifiedReviews: string;
    googleRating: string;
    stars: string;
    allRightsReserved: string;
    loading: string;
    close: string;
    viewAll: string;
    category: string;
    brand: string;
    price: string;
    fabric: string;
    inStock: string;
    outOfStock: string;
    phone: string;
    email: string;
    hours: string;
    address: string;
    share: string;
  };
  home: {
    heroBadge: string;
    heroTitle: string;
    heroSubtitle: string;
    heroCtaPrimary: string;
    heroCtaSecondary: string;
    heroStat1Val: string;
    heroStat1Label: string;
    heroStat2Val: string;
    heroStat2Label: string;
    heroStat3Val: string;
    heroStat3Label: string;
    
    whyChooseTitle: string;
    whyChooseSubtitle: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar4Title: string;
    pillar4Desc: string;

    curationTitle: string;
    curationSubtitle: string;
    curationDesc1: string;
    curationDesc2: string;
    brandLandiniTitle: string;
    brandLandiniDesc: string;
    brandPalZileriTitle: string;
    brandPalZileriDesc: string;
    brandBugattiTitle: string;
    brandBugattiDesc: string;

    featuredTitle: string;
    featuredSubtitle: string;
    featuredAll: string;

    tailoringTeaserTitle: string;
    tailoringTeaserSubtitle: string;
    tailoringTeaserDesc: string;
    tailoringTeaserPoint1: string;
    tailoringTeaserPoint2: string;
    tailoringTeaserPoint3: string;
    tailoringTeaserCta: string;

    branchesTeaserTitle: string;
    branchesTeaserSubtitle: string;

    testimonialsTitle: string;
    testimonialsSubtitle: string;
    testimonialsBasedOn: string;

    ctaTitle: string;
    ctaSubtitle: string;
    ctaButtonPrimary: string;
    ctaButtonSecondary: string;
  };
  collections: {
    title: string;
    subtitle: string;
    filterAll: string;
    filterSuits: string;
    filterShirts: string;
    filterCasual: string;
    filterOuterwear: string;
    filterShoes: string;
    filterBrands: string;
    allBrands: string;
    showingResults: string;
    noProductsFound: string;
    enquireProduct: string;
    viewProductDetails: string;
    modalTitle: string;
    modalFabricDetails: string;
    modalStylingNotes: string;
    modalWhatsAppPrompt: string;
  };
  tailoring: {
    title: string;
    subtitle: string;
    overviewTitle: string;
    overviewDesc: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;

    servicesHeading: string;
    service1Title: string;
    service1Desc: string;
    service2Title: string;
    service2Desc: string;
    service3Title: string;
    service3Desc: string;
    service4Title: string;
    service4Desc: string;

    bookingHeading: string;
    bookingSubtitle: string;
    formFullName: string;
    formFullNamePlaceholder: string;
    formPhone: string;
    formPhonePlaceholder: string;
    formEmail: string;
    formEmailPlaceholder: string;
    formBranch: string;
    formBranchSelect: string;
    formBranchFlagship: string;
    formBranchStudio: string;
    formServiceType: string;
    formServiceSelect: string;
    formServiceMTM: string;
    formServiceAlteration: string;
    formServiceBlazer: string;
    formServiceTrouser: string;
    formServiceStyling: string;
    formFabricPref: string;
    formFabricSelect: string;
    formFabricItalianWool: string;
    formFabricLinen: string;
    formFabricCashmere: string;
    formFabricInStore: string;
    formDate: string;
    formTime: string;
    formNotes: string;
    formNotesPlaceholder: string;
    formSubmit: string;
    formSubmitting: string;
    formSuccessTitle: string;
    formSuccessDesc: string;
    formSuccessWhatsAppButton: string;
    formErrorGeneral: string;
  };
  branches: {
    title: string;
    subtitle: string;
    flagshipBadge: string;
    studioBadge: string;
    walkInWelcome: string;
    byAppointment: string;
    openingHours: string;
    directContact: string;
    specialization: string;
    bookAtStudio: string;
    visitFlagship: string;
    locationFeaturesTitle: string;
    parkingInfo: string;
    valetService: string;
    privateLounge: string;
  };
  story: {
    title: string;
    subtitle: string;
    topChoiceSectionTitle: string;
    topChoiceDesc1: string;
    topChoiceDesc2: string;
    curationSectionTitle: string;
    curationDesc1: string;
    curationDesc2: string;
    storeAestheticTitle: string;
    storeAestheticDesc: string;
    reputationTitle: string;
    reputationDesc: string;
    quoteText: string;
    quoteAuthor: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    filterAll: string;
    filterStorefront: string;
    filterInterior: string;
    filterSuiting: string;
    filterCasual: string;
    filterAccessories: string;
    filterVideo: string;
    videoBadge: string;
    clickToEnlarge: string;
  };
  contact: {
    title: string;
    subtitle: string;
    formHeading: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submittingButton: string;
    successTitle: string;
    successDesc: string;
    dualBranchesTitle: string;
    faqTitle: string;
    faqSubtitle: string;
    faq1Q: string;
    faq1A: string;
    faq2Q: string;
    faq2A: string;
    faq3Q: string;
    faq3A: string;
    faq4Q: string;
    faq4A: string;
    faq5Q: string;
    faq5A: string;
    faq6Q: string;
    faq6A: string;
  };
}

export const translations: Record<Locale, TranslationDictionary> = {
  en: {
    nav: {
      home: "Home",
      collections: "Collections",
      tailoring: "Tailoring & Fit",
      branches: "Our Branches",
      story: "Our Story",
      gallery: "Gallery",
      contact: "Contact",
      bookFitting: "Book a Fitting",
      whatsappUs: "WhatsApp",
      tagline: "Top Choice Menswear",
    },
    common: {
      brandName: "Al-Mukhtar",
      brandNameEn: "Al-Mukhtar",
      brandNameAr: "المختار",
      topChoice: "Top Choice",
      topChoiceAr: "الاختيار الأول",
      riyadhSaudiArabia: "Al Olaya, Riyadh, Saudi Arabia",
      alOlaya: "Al Olaya District",
      learnMore: "Discover More",
      exploreCollections: "Explore Collections",
      bookFittingSession: "Book a Fitting Session",
      viewBranchDetails: "Branch Details & Hours",
      getDirections: "Get Directions",
      directWhatsApp: "Direct WhatsApp",
      enquireOnWhatsApp: "Inquire on WhatsApp",
      verifiedReviews: "Verified Google Reviews",
      googleRating: "4.9 Google Rating",
      stars: "Stars",
      allRightsReserved: "All rights reserved.",
      loading: "Loading...",
      close: "Close",
      viewAll: "View All",
      category: "Category",
      brand: "Brand",
      price: "Price",
      fabric: "Fabric & Composition",
      inStock: "Available in Boutique",
      outOfStock: "By Special Order",
      phone: "Phone",
      email: "Email",
      hours: "Hours",
      address: "Address",
      share: "Share",
    },
    home: {
      heroBadge: "The Gentleman's Destination in Al Olaya, Riyadh",
      heroTitle: "Elegance Defined by Distinction and Fit",
      heroSubtitle: "Al-Mukhtar — Top Choice menswear boutique. A curated edit of Landini Milano, Pal Zileri, and Bugatti tailored to the modern Saudi gentleman.",
      heroCtaPrimary: "Explore Collections",
      heroCtaSecondary: "Book Fitting Session",
      heroStat1Val: "4.9 ★",
      heroStat1Label: "1,489+ Verified Reviews",
      heroStat2Val: "3 Tier-1",
      heroStat2Label: "Curated European Labels",
      heroStat3Val: "2 Locations",
      heroStat3Label: "Flagship & Studio in Olaya",

      whyChooseTitle: "The Hallmarks of Al-Mukhtar",
      whyChooseSubtitle: "Four enduring pillars that make us Riyadh's trusted destination for sartorial excellence.",
      pillar1Title: "In-House Tailoring Mastery",
      pillar1Desc: "Precision ready-to-wear alterations and made-to-measure fittings calibrated to your unique anatomy with zero compromise on drape.",
      pillar2Title: "Curated Multi-Brand Edit",
      pillar2Desc: "A tightly selected portfolio: our own signature Landini Milano alongside Pal Zileri luxury Italian tailoring and Bugatti German outerwear.",
      pillar3Title: "4.9★ Customer Reputation",
      pillar3Desc: "Backed by 1,489+ real Google reviews celebrating our warm hospitality, sartorial expertise, and dependable turnaround time.",
      pillar4Title: "Dual Al Olaya Locations",
      pillar4Desc: "A bustling Flagship Boutique on Olaya Street for walk-in shopping and a dedicated Fitting Studio for private suiting consultations.",

      curationTitle: "The Art of Curation",
      curationSubtitle: "We don't stock everything under the sun. We present a disciplined edit of world-class menswear.",
      curationDesc1: "Founded on the philosophy of 'Top Choice' (المختار), our boutique rejects overwhelming volume in favor of hand-selected fabrics, impeccable cuts, and distinguished European aesthetics.",
      curationDesc2: "From boardrooms in the King Abdullah Financial District to grand celebrations across Riyadh, our collections deliver understated confidence.",
      brandLandiniTitle: "Landini Milano",
      brandLandiniDesc: "Our proprietary in-house label crafted in Italy. Renowned for pure silk jacquard ties, razor-sharp formal suits, and Egyptian cotton dress shirts.",
      brandPalZileriTitle: "Pal Zileri",
      brandPalZileriDesc: "Master Italian luxury tailoring from Quinto Vicentino. Super 150s wools, half-canvas construction, and unmatchable fluid drape.",
      brandBugattiTitle: "Bugatti",
      brandBugattiDesc: "Sophisticated German casual elegance, technical down puffer jackets, flex-stretch denim, and weather-resistant quilted vests.",

      featuredTitle: "Featured Collections",
      featuredSubtitle: "Explore a preview of our seasonal ready-to-wear arrivals and formalwear icons.",
      featuredAll: "Explore All 5 Categories",

      tailoringTeaserTitle: "In-House Tailoring & Fitting Studio",
      tailoringTeaserSubtitle: "A ready-to-wear suit only reaches its full potential when fitted to perfection.",
      tailoringTeaserDesc: "At our dedicated Al Olaya Fitting Studio, our master tailors adjust sleeve pitch, collar roll, waist suppression, and trouser break to give you a silhouette tailored exclusively to you.",
      tailoringTeaserPoint1: "Precision sleeve, shoulder, and trouser hem adjustments",
      tailoringTeaserPoint2: "Private fitting suites for relaxed, discreet consultations",
      tailoringTeaserPoint3: "Fast, dependable turnaround for upcoming Riyadh weddings & events",
      tailoringTeaserCta: "Discover Tailoring Services",

      branchesTeaserTitle: "Two Distinct Spaces in Al Olaya",
      branchesTeaserSubtitle: "Visit our Flagship Boutique for walk-ins or reserve a private session at our Fitting Studio.",

      testimonialsTitle: "Trusted by Discerning Gentlemen",
      testimonialsSubtitle: "A 4.9-star rating built on authentic relationships, honest styling advice, and precision fit.",
      testimonialsBasedOn: "Based on 1,489+ verified Google Reviews in Riyadh",

      ctaTitle: "Experience Sartorial Distinction",
      ctaSubtitle: "Connect directly with our stylists on WhatsApp or visit our Olaya Flagship today.",
      ctaButtonPrimary: "Chat on WhatsApp (+966 59 719 3831)",
      ctaButtonSecondary: "Explore All Collections",
    },
    collections: {
      title: "The Collections",
      subtitle: "A disciplined edit of European tailoring, casual sophistication, and handcrafted accessories.",
      filterAll: "All Categories",
      filterSuits: "Suits & Blazers",
      filterShirts: "Shirts & Knitwear",
      filterCasual: "Casual & Denim",
      filterOuterwear: "Outerwear",
      filterShoes: "Shoes & Accessories",
      filterBrands: "Brand Filter",
      allBrands: "All Brands",
      showingResults: "Showing",
      noProductsFound: "No items match your active filter selection. Please try selecting another category or brand.",
      enquireProduct: "Enquire on WhatsApp",
      viewProductDetails: "View Details",
      modalTitle: "Product Specifications",
      modalFabricDetails: "Fabric & Material Construction",
      modalStylingNotes: "Styling & Boutique Advice",
      modalWhatsAppPrompt: "Inquire about this piece, check size availability, or reserve at our Al Olaya boutique via WhatsApp:",
    },
    tailoring: {
      title: "In-House Tailoring & Fit Studio",
      subtitle: "Bridging ready-to-wear convenience with the personal precision of master alterations and made-to-measure suiting.",
      overviewTitle: "The Philosophy of the Perfect Cut",
      overviewDesc: "Al-Mukhtar is a premier multi-brand retailer equipped with a specialized in-house fitting service. We believe that true luxury lies in the balance of proportions — the way a shoulder sits, the natural drape across the chest, and the exact break of the trouser over your footwear.",
      step1Title: "1. Sartorial Consultation",
      step1Desc: "We assess your lifestyle, event requirements, posture, and preferred silhouette (classic, contemporary, or slim).",
      step2Title: "2. Precision Pinning",
      step2Desc: "Our master fitters pin your garment down to the millimeter, testing comfort and movement in real time.",
      step3Title: "3. Master Craftsmanship",
      step3Desc: "Every stitch is executed using time-honored techniques, maintaining garment integrity and factory-grade finishes.",
      step4Title: "4. Final Fitting & Delivery",
      step4Desc: "You try the adjusted garment in our private studio before final pressing and garment-bag packaging.",

      servicesHeading: "Our Tailoring & Fit Services",
      service1Title: "Ready-to-Wear Alterations",
      service1Desc: "Comprehensive sleeve shortening from the shoulder, jacket tapering, collar lowering, and trouser hemming.",
      service2Title: "Made-to-Measure Suiting",
      service2Desc: "Create a personalized suit from scratch, selecting Italian wool swatches, linings, horn buttons, and lapel widths.",
      service3Title: "Tuxedo & Gala Prep",
      service3Desc: "Urgent wedding and black-tie adjustments with satin trim alignment and vest synchronization.",
      service4Title: "Trouser & Denim Reconstruction",
      service4Desc: "Waist taking-in, seat adjustments, and chain-stitch hems that retain the original factory wash.",

      bookingHeading: "Reserve a Private Fitting Session",
      bookingSubtitle: "Schedule a one-on-one session at our Al Olaya Fitting Studio or Flagship Boutique.",
      formFullName: "Full Name *",
      formFullNamePlaceholder: "e.g. Faisal Al-Mansoor",
      formPhone: "Mobile Number (WhatsApp) *",
      formPhonePlaceholder: "059 719 3831",
      formEmail: "Email Address (Optional)",
      formEmailPlaceholder: "name@example.com",
      formBranch: "Preferred Boutique / Studio *",
      formBranchSelect: "Select location...",
      formBranchFlagship: "Flagship Boutique — Olaya Street (12214)",
      formBranchStudio: "Fitting Studio — Al Olaya Street (12222)",
      formServiceType: "Service Type *",
      formServiceSelect: "Select service...",
      formServiceMTM: "New Made-to-Measure Suit / Tuxedo",
      formServiceAlteration: "Ready-to-Wear Suit Alteration",
      formServiceBlazer: "Blazer & Sport Coat Fitting",
      formServiceTrouser: "Trouser & Denim Adjustment",
      formServiceStyling: "VIP Wardrobe & Styling Consultation",
      formFabricPref: "Fabric / Style Preference *",
      formFabricSelect: "Select fabric focus...",
      formFabricItalianWool: "Super 140s / 150s Italian Virgin Wool",
      formFabricLinen: "Pure Italian Linen & Silk Blends",
      formFabricCashmere: "Cashmere & Winter Wool Overcoats",
      formFabricInStore: "In-Store Swatch Consultation with Stylist",
      formDate: "Preferred Appointment Date *",
      formTime: "Preferred Time Slot *",
      formNotes: "Special Notes or Event Date (Optional)",
      formNotesPlaceholder: "e.g. Wedding on next Thursday, prefer classic cut...",
      formSubmit: "Confirm Fitting Appointment",
      formSubmitting: "Submitting Booking...",
      formSuccessTitle: "Appointment Request Received!",
      formSuccessDesc: "Thank you. Our master fitting coordinator will contact you via WhatsApp (+966 59 719 3831) to confirm your time slot and prepare your private suite.",
      formSuccessWhatsAppButton: "Open WhatsApp Confirmation",
      formErrorGeneral: "Please check all highlighted fields and try again.",
    },
    branches: {
      title: "Our Locations in Al Olaya, Riyadh",
      subtitle: "Two distinct spaces designed to serve your ready-to-wear and bespoke tailoring needs in the heart of Riyadh.",
      flagshipBadge: "Ready-to-Wear Flagship",
      studioBadge: "Dedicated Fitting Studio",
      walkInWelcome: "Walk-ins Welcome",
      byAppointment: "Appointment Recommended",
      openingHours: "Opening Hours",
      directContact: "Contact & WhatsApp",
      specialization: "Key Highlights & Services",
      bookAtStudio: "Book Studio Fitting",
      visitFlagship: "Get Directions to Flagship",
      locationFeaturesTitle: "Boutique Experience & Amenities",
      parkingInfo: "Convenient street and valet parking available along Olaya Street.",
      valetService: "Hospitality Lounge & Authentic Saudi Coffee provided during your visit.",
      privateLounge: "Private VIP Fitting Suites equipped with full-length multi-angle mirrors.",
    },
    story: {
      title: "Our Story",
      subtitle: "The pursuit of distinction: how Al-Mukhtar became Riyadh's definitive multi-brand menswear house.",
      topChoiceSectionTitle: "The Meaning of 'Al-Mukhtar' — Top Choice",
      topChoiceDesc1: "In Arabic, 'Al-Mukhtar' (المختار) translates directly to 'The Chosen' or 'The Top Choice.' It is both our official storefront name and our foundational philosophy. We exist to relieve the modern gentleman from the fatigue of endless, mediocre options.",
      topChoiceDesc2: "Rather than filling racks with hundreds of disparate labels, we curate a focused, cohesive wardrobe of pieces that satisfy our rigorous standards of fabric quality, cut, and longevity.",
      curationSectionTitle: "A Disciplined Multi-Brand Portfolio",
      curationDesc1: "We take immense pride in championing our proprietary label, Landini Milano — an in-house collection conceived to bring Italian fabric excellence, silk jacquard neckwear, and sharp tailoring to Riyadh at unmatched value.",
      curationDesc2: "To complement Landini, we carry world-renowned European partners: Pal Zileri for quintessential Quinto Vicentino sartorial prestige, and Bugatti for robust, weather-resistant German outerwear and casual wear.",
      storeAestheticTitle: "Architecture of Warmth & Polish",
      storeAestheticDesc: "Step into our Al Olaya boutique and you are greeted by warm walnut wood paneling, luminous travertine stone walls, minimalist black fixtures, and balanced track lighting. It is an elevated mall-retail sanctuary designed for effortless, civilized shopping.",
      reputationTitle: "Built on 1,489+ Customer Relationships",
      reputationDesc: "With an average rating of 4.9 stars across nearly 1,500 verified Google reviews, our reputation has not been built on hype, but on precision alterations, respectful Saudi hospitality, and clothes that make our clients look and feel commanding.",
      quoteText: "True style is not about having everything. It is about choosing the best.",
      quoteAuthor: "Al-Mukhtar (Top Choice) Philosophy",
    },
    gallery: {
      title: "Visual Gallery",
      subtitle: "Explore our Al Olaya boutique interiors, storefront architecture, seasonal styling, and tailoring details.",
      filterAll: "All Media",
      filterStorefront: "Storefront & Architecture",
      filterInterior: "Boutique Interiors",
      filterSuiting: "Suiting & Formal",
      filterCasual: "Casual & Outerwear",
      filterAccessories: "Shoes & Silk Accessories",
      filterVideo: "Cinematic Videos",
      videoBadge: "Cinematic Video",
      clickToEnlarge: "Click to view full screen",
    },
    contact: {
      title: "Contact & Inquiries",
      subtitle: "We are at your service for sizing inquiries, collection availability, and fitting consultations.",
      formHeading: "Send a Direct Message",
      formSubtitle: "Our boutique concierge typically responds within 1–2 business hours.",
      nameLabel: "Your Name *",
      namePlaceholder: "e.g. Abdullah Al-Otaibi",
      emailLabel: "Email Address *",
      emailPlaceholder: "name@domain.com",
      phoneLabel: "Phone / WhatsApp *",
      phonePlaceholder: "059 719 3831",
      subjectLabel: "Subject *",
      subjectPlaceholder: "e.g. Pal Zileri Suit Availability / Fitting Query",
      messageLabel: "Message *",
      messagePlaceholder: "How can we assist your sartorial needs today?",
      submitButton: "Send Inquiry",
      submittingButton: "Sending...",
      successTitle: "Message Delivered!",
      successDesc: "Thank you for reaching out to Al-Mukhtar. Our Olaya boutique team has received your message and will respond shortly.",
      dualBranchesTitle: "Direct Branch Hotlines",
      faqTitle: "Frequently Asked Questions",
      faqSubtitle: "Quick answers regarding our collections, fit services, and boutique visits.",
      faq1Q: "Do you offer traditional Saudi thobes?",
      faq1A: "No. Al-Mukhtar is a specialized European and contemporary menswear retailer. We focus exclusively on suits, tuxedos, blazers, dress shirts, knitwear, denim, outerwear, shoes, and luxury accessories.",
      faq2Q: "Do I need an appointment to visit the Flagship Boutique?",
      faq2A: "No appointment is necessary for our Flagship Boutique on Olaya Street (12214). You are welcome to browse all ready-to-wear collections anytime during open hours. For dedicated made-to-measure fitting sessions, we recommend booking a slot at our Fitting Studio.",
      faq3Q: "Can you alter a suit purchased elsewhere?",
      faq3A: "Our in-house master tailors primarily service garments from Al-Mukhtar, Landini Milano, Pal Zileri, and Bugatti to guarantee our signature standard. Subject to capacity, our Fitting Studio can evaluate external premium suits.",
      faq4Q: "What brands are carried at Al-Mukhtar?",
      faq4A: "We proudly carry Landini Milano (our in-house signature label for suits, ties, shirts, and accessories), Pal Zileri (Italian luxury tailoring), and Bugatti (German outerwear, casual wear, and knitwear).",
      faq5Q: "How fast can I get a suit altered for an upcoming wedding?",
      faq5A: "Standard alterations take between 24 to 48 hours. Urgent same-day adjustments are available upon request for gala and wedding emergencies.",
      faq6Q: "What are your payment options in the boutique?",
      faq6A: "We accept Mada, Visa, Mastercard, American Express, Apple Pay, and cash at both our Al Olaya locations.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      collections: "التشكيلات",
      tailoring: "الخياطة والقياس",
      branches: "فروعنا",
      story: "قصتنا",
      gallery: "معرض الصور",
      contact: "تواصل معنا",
      bookFitting: "حجز موعد قياس",
      whatsappUs: "واتساب",
      tagline: "المختار — الاختيار الأول للأزياء الرجالية",
    },
    common: {
      brandName: "المختار",
      brandNameEn: "Al-Mukhtar",
      brandNameAr: "المختار",
      topChoice: "Top Choice",
      topChoiceAr: "الاختيار الأول",
      riyadhSaudiArabia: "حي العليا، الرياض، المملكة العربية السعودية",
      alOlaya: "حي العليا",
      learnMore: "اكتشف المزيد",
      exploreCollections: "استكشف التشكيلات",
      bookFittingSession: "حجز جلسة قياس",
      viewBranchDetails: "تفاصيل الفرع وساعات العمل",
      getDirections: "الاتجاهات على الخريطة",
      directWhatsApp: "واتساب مباشر",
      enquireOnWhatsApp: "استفسار عبر واتساب",
      verifiedReviews: "تقييمات موثقة من Google",
      googleRating: "تقييم 4.9 على Google",
      stars: "نجوم",
      allRightsReserved: "جميع الحقوق محفوظة.",
      loading: "جاري التحميل...",
      close: "إغلاق",
      viewAll: "عرض الكل",
      category: "الفئة",
      brand: "العلامة التجارية",
      price: "السعر",
      fabric: "القماش والتركيب",
      inStock: "متوفر في البوتيك",
      outOfStock: "حسب الطلب الخاص",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      hours: "ساعات العمل",
      address: "العنوان",
      share: "مشاركة",
    },
    home: {
      heroBadge: "وجهة الرجل الأنيق في حي العليا، الرياض",
      heroTitle: "عنوان الفخامة والقصة المتقنة",
      heroSubtitle: "المختار (Top Choice) — بوتيك الأزياء الرجالية الفاخرة متعدد العلامات. تشكيلات حصرية من لانديني ميلانو، بال زيليري، وبوغاتي تلبي ذوق الرجل السعودي المعاصر.",
      heroCtaPrimary: "استكشف التشكيلات",
      heroCtaSecondary: "حجز موعد قياس",
      heroStat1Val: "4.9 ★",
      heroStat1Label: "أكثر من 1,489 تقييم حقيقي",
      heroStat2Val: "3 علامات",
      heroStat2Label: "علامات أوروبية منتقاة بعناية",
      heroStat3Val: "فرعان",
      heroStat3Label: "البوتيك الرئيسي واستوديو القياس بالعليا",

      whyChooseTitle: "ركائز التميز في المختار",
      whyChooseSubtitle: "أربعة مبادئ راسخة تجعلنا الوجهة الأولى الموثوقة لأناقة الرجل في الرياض.",
      pillar1Title: "حرفية الخياطة وتعديل المقاسات",
      pillar1Desc: "خدمة ضبط المقاسات وتفصيل الأزياء الجاهزة والتفصيل الخاص بدقة متناهية لتنسجم مع قوامك بانسيابية وراحة تامة.",
      pillar2Title: "انتقاء دقيق للعلامات الأوروبية",
      pillar2Desc: "مجموعة منتقاة بصرامة: علامتنا الخاصة لانديني ميلانو إلى جانب بال زيليري الإيطالية العريقة وأزياء بوغاتي الألمانية الفاخرة.",
      pillar3Title: "تقييم 4.9★ وثقة 1,489+ عميل",
      pillar3Desc: "سمعة بنيت على مدار سنوات من حسن الضيافة، والمشورة الصادقة، ودقة المواعيد الموثوقة.",
      pillar4Title: "موقعان مميزان في العليا",
      pillar4Desc: "بوتيك رئيسي على شارع العليا لتسوق الأزياء الجاهزة، واستوديو مخصص لجلسات القياس الخاصة والاستشارات الفردية.",

      curationTitle: "فن الانتقاء والذوق الرفيع",
      curationSubtitle: "نحن لا نجمع كل ما هب ودب، بل ننتقي لك النخبة فقط من عالم الأزياء الرجالية.",
      curationDesc1: "انطلاقاً من اسمنا 'المختار' (Top Choice)، نؤمن بأن الأناقة الحقيقية تكمن في الجودة وليس الكثرة، حيث نختار أرقى الأقمشة الإيطالية والقصات المتناسقة التي تناسب أسلوب حياة الرجل المعاصر.",
      curationDesc2: "من اجتماعات مركز الملك عبدالله المالي إلى أفخم مناسبات وأعراس الرياض، تمنحك تشكيلاتنا حضوراً واثقاً ومميزاً.",
      brandLandiniTitle: "لانديني ميلانو (Landini Milano)",
      brandLandiniDesc: "علامتنا الحصرية المصنوعة في إيطاليا. تشتهر بربطات العنق الحريرية، والبدلات الرسمية متقنة الحياكة، والقمصان القطنية الفاخرة.",
      brandPalZileriTitle: "بال زيليري (Pal Zileri)",
      brandPalZileriDesc: "قمة الخياطة الإيطالية الفاخرة من فيتشنزا. أقمشة صوف سوبر 150 وبنية هاف-كانفاس لثبات وأناقة لا تضاهى.",
      brandBugattiTitle: "بوغاتي (Bugatti)",
      brandBugattiDesc: "الأناقة الألمانية العصرية؛ جاكيتات منفوخة خفيفة الوزن، وبناطيل جينز مرنة، وصديريات شتوية مبطنة تقاوم تقلبات الطقس.",

      featuredTitle: "مختارات من التشكيلات",
      featuredSubtitle: "استعرض لمحة من أحدث وصولات الموسم والأيقونات الرسمية في بوتيكنا.",
      featuredAll: "استعراض كافة الفئات الـ 5",

      tailoringTeaserTitle: "استوديو الخياطة وضبط القياس",
      tailoringTeaserSubtitle: "البدلة الجاهزة لا تكتمل إلا عندما تضبط مقاساتها بدقة متناهية على قوامك.",
      tailoringTeaserDesc: "في استوديو القياس المخصص بشارع العليا، يقوم خياطونا بتعديل طول الأكمام، وتوازن الأكتاف، وتخصيص محيط الخصر وطول البنطال لتمنحك إطلالة فريدة ومريحة.",
      tailoringTeaserPoint1: "تعديل دقيق للأكمام، الأكتاف، وتطريز حواشي البنطال",
      tailoringTeaserPoint2: "أجنحة قياس خاصة لتجربة مريحة واستشارة هادئة",
      tailoringTeaserPoint3: "تسليم سريع ومضمون لأعراس ومناسبات الرياض المهمة",
      tailoringTeaserCta: "اكتشف خدمات الخياطة والقياس",

      branchesTeaserTitle: "فرعان راقيان في قلب العليا",
      branchesTeaserSubtitle: "تفضل بزيارة البوتيك الرئيسي بدون موعد مسبق أو احجز جلستك الخاصة في استوديو القياس.",

      testimonialsTitle: "شهادات عملاء المختار",
      testimonialsSubtitle: "تقييم 4.9 نجوم على Google مبني على ثقة متوارثة ونصائح ذوق صادقة.",
      testimonialsBasedOn: "مستند إلى أكثر من 1,489 تقييم حقيقي على Google في الرياض",

      ctaTitle: "جرّب الأناقة بمفهومها الأرقى",
      ctaSubtitle: "تواصل مباشرة مع مستشارينا عبر واتساب أو شرفنا بزيارة البوتيك في شارع العليا اليوم.",
      ctaButtonPrimary: "محادثة عبر واتساب (+966 59 719 3831)",
      ctaButtonSecondary: "استعراض جميع التشكيلات",
    },
    collections: {
      title: "التشكيلات الرجالية",
      subtitle: "مجموعة منتقاة بعناية تجمع بين الحياكة الإيطالية، والأناقة العصرية، والإكسسوارات الفاخرة.",
      filterAll: "كافة الفئات",
      filterSuits: "البدلات والبليزرات",
      filterShirts: "القمصان والتريكو",
      filterCasual: "الكاجوال والجينز",
      filterOuterwear: "الملابس الخارجية والمعاطف",
      filterShoes: "الأحذية والإكسسوارات",
      filterBrands: "تصفية حسب الماركة",
      allBrands: "كافة الماركات",
      showingResults: "عرض",
      noProductsFound: "لا توجد منتجات تطابق التصفية الحالية. يرجى تجربة اختيار فئة أو علامة تجارية أخرى.",
      enquireProduct: "استفسار عبر واتساب",
      viewProductDetails: "تفاصيل القطعة",
      modalTitle: "مواصفات القطعة",
      modalFabricDetails: "تفاصيل القماش وبلد الصنع",
      modalStylingNotes: "نصائح التنسيق والاستخدام",
      modalWhatsAppPrompt: "للاستفسار عن توفر المقاسات أو الحجز المباشر في بوتيك العليا عبر واتساب:",
    },
    tailoring: {
      title: "خدمات الخياطة وضبط القياس",
      subtitle: "نجمع بين راحة الأزياء الجاهزة وحرفية التعديلات الخاصة والتفصيل على المقاس.",
      overviewTitle: "فلسفة القصة المثالية",
      overviewDesc: "المختار هو بوتيك أزياء جاهزة فاخر مجهز باستوديو خياطة وتعديل متكامل. نحن نؤمن بأن الفخامة الحقيقية تظهر في توازن المقاس — كيفية استقرار السترة على الكتف، وانسيابية القماش على الصدر، ونهاية طول البنطال فوق الحذاء.",
      step1Title: "1. الاستشارة والمشورة",
      step1Desc: "نتعرف على طبيعة مناسبتك، وتفضيلات حركتك، والقصة التي تلائم قوامك (كلاسيكية، عصرية، أو ضيقة).",
      step2Title: "2. التثبيت وأخذ القياسات",
      step2Desc: "يقوم خبراؤنا بوزن القماش وتثبيت الدبابيس بالمليمتر لضمان أعلى مستويات الراحة والأناقة أثناء الوقوف والجلوس.",
      step3Title: "3. الحرفية والتعديل",
      step3Desc: "تُجرى كافة التعديلات بأيدي خياطين متمرسين مع الحفاظ على التشطيب الأصلي والغرز المخفية للقطعة.",
      step4Title: "4. البروفة النهائية والاستلام",
      step4Desc: "تجربة نهائية للقطعة في أجنحة القياس الخاصة قبل الكي بالبخار والتغليف الفاخر بالحقيبة الخاصة.",

      servicesHeading: "خدماتنا في استوديو القياس",
      service1Title: "تعديل الأزياء الجاهزة",
      service1Desc: "تقصير الأكمام من الكتف، تضييق وتجسيم السترة، ضبط توازن الياقة، وتعديل حواشي البنطال.",
      service2Title: "تفصيل البدلات على المقاس",
      service2Desc: "تفصيل بدلتك من الصفر مع اختيار أفخم الصوف الإيطالي، والبطانات الحريرية، ونوع الأزرار والياقات.",
      service3Title: "تجهيز بدلات التوكسيدو والأعراس",
      service3Desc: "خدمة سريعة ومتقنة لبدلات المناسبات الكبرى مع ضبط تناسق الصديري وفيونكة الساتان.",
      service4Title: "إعادة ضبط بناطيل الجينز والقماش",
      service4Desc: "تعديل محيط الخصر وقص الأطوال مع الحفاظ على الخياطة والغسيل الأصلي للجينز.",

      bookingHeading: "حجز موعد قياس خاص",
      bookingSubtitle: "احجز جلسة فردية في استوديو القياس أو البوتيك الرئيسي بشارع العليا.",
      formFullName: "الاسم الكامل *",
      formFullNamePlaceholder: "مثال: فيصل المنصور",
      formPhone: "رقم الجوال (واتساب) *",
      formPhonePlaceholder: "0597193831",
      formEmail: "البريد الإلكتروني (اختياري)",
      formEmailPlaceholder: "name@example.com",
      formBranch: "الفرع المفضل *",
      formBranchSelect: "اختر الفرع...",
      formBranchFlagship: "البوتيك الرئيسي — شارع العليا (12214)",
      formBranchStudio: "استوديو القياس — شارع العليا العام (12222)",
      formServiceType: "نوع الخدمة المطلوبة *",
      formServiceSelect: "اختر الخدمة...",
      formServiceMTM: "تفصيل بدلة / توكسيدو جديد على المقاس",
      formServiceAlteration: "تعديل مقاسات بدلة جاهزة",
      formServiceBlazer: "قياس وضبط بليزر / سبورت كوت",
      formServiceTrouser: "تعديل بنطال قماش أو جينز",
      formServiceStyling: "استشارة تنسيق وإطلالة خاصة VIP",
      formFabricPref: "تفضيل نوع القماش *",
      formFabricSelect: "اختر نوع القماش...",
      formFabricItalianWool: "صوف إيطالي بكر سوبر 140 / 150",
      formFabricLinen: "كتان إيطالي طبيعي ومزيج حرير",
      formFabricCashmere: "كشمير ومعاطف صوف شتوية",
      formFabricInStore: "استعراض الأقمشة مع المستشار في البوتيك",
      formDate: "التاريخ المفضل للزيارة *",
      formTime: "الوقت المفضل *",
      formNotes: "ملاحظات إضافية أو موعد المناسبة (اختياري)",
      formNotesPlaceholder: "مثال: موعد المناسبة الخميس القادم، أفضل القصة الكلاسيكية...",
      formSubmit: "تأكيد طلب موعد القياس",
      formSubmitting: "جاري إرسال الطلب...",
      formSuccessTitle: "تم استلام طلب الموعد بنجاح!",
      formSuccessDesc: "شكراً لك. سيتواصل معك منسق استوديو القياس عبر واتساب (+966 59 719 3831) لتأكيد التوقيت وتجهيز جناح القياس الخاص بك.",
      formSuccessWhatsAppButton: "فتح تأكيد الواتساب مباشرة",
      formErrorGeneral: "يرجى التأكد من تعبئة الحقول المطلوبة بشكل صحيح.",
    },
    branches: {
      title: "فروعنا في حي العليا، الرياض",
      subtitle: "مساحتان فاخرتان صُممتا لتلبية كافة احتياجاتك من الأزياء الجاهزة والتفصيل الدقيق في قلب العاصمة.",
      flagshipBadge: "البوتيك الرئيسي للأزياء الجاهزة",
      studioBadge: "استوديو القياس والتفصيل المخصص",
      walkInWelcome: "الزيارة متاحة بدون موعد",
      byAppointment: "يُفضل حجز موعد مسبق",
      openingHours: "ساعات العمل الرسمية",
      directContact: "الاتصال والواتساب",
      specialization: "أبرز الخدمات والتشكيلات",
      bookAtStudio: "حجز موعد في الاستوديو",
      visitFlagship: "الاتجاهات إلى البوتيك الرئيسي",
      locationFeaturesTitle: "مزايا وخدمات الضيافة في فروعنا",
      parkingInfo: "مواقف سيارات متوفرة وخدمة صف السيارات على امتداد شارع العليا.",
      valetService: "صالة ضيافة وتقديم القهوة السعودية الأصيلة طوال فترة تواجدك.",
      privateLounge: "أجنحة قياس خاصة VIP مزودة بمرايا ثلاثية الأبعاد وإضاءة مريحة.",
    },
    story: {
      title: "قصتنا",
      subtitle: "رحلة البحث عن التميز: كيف أصبح المختار الوجهة الأولى لأناقة الرجل في الرياض.",
      topChoiceSectionTitle: "معنى اسم 'المختار' — Top Choice",
      topChoiceDesc1: "اسمنا 'المختار' ليس مجرد لافتة، بل هو جوهر فلسفتنا التي تعني 'الاختيار الأول' (Top Choice). أردنا أن نجنب الرجل الأنيق عناء البحث بين مئات الخيارات المكررة وغير المتقنة.",
      topChoiceDesc2: "بدلاً من ملء الأرفف بماركات لا حصر لها، نقدم تشكيلة مدروسة بعناية فائقة تلتزم بأعلى معايير جودة الأقمشة، وانسيابية القصة، واستدامة الأناقة.",
      curationSectionTitle: "تشكيلة علامات أوروبية منتقاة",
      curationDesc1: "نفخر بتقديم علامتنا الخاصة لانديني ميلانو (Landini Milano) — مجموعة طُورت لتقدم فخامة الأقمشة الإيطالية وربطات الحرير الطبيعي والبدلات العصرية بقيمة استثنائية.",
      curationDesc2: "ولإكمال هذه المنظومة، نتعاون مع شركاء أوروبيين عريقين: بال زيليري (Pal Zileri) لأرقى درجات الخياطة الإيطالية، وبوغاتي (Bugatti) للأزياء الشتوية والكاجوال الألمانية التقنية.",
      storeAestheticTitle: "عمارة دافئة وفخامة هادئة",
      storeAestheticDesc: "عند دخولك إلى بوتيكنا في العليا، تستقبلك تفاصيل خشب الجوز الدافئ، وجدران حجر الترافرتين الطبيعي، والتركيبات المعدنية السوداء مع إضاءة مسارية هادئة. إنها بيئة تسوق راقية ومهيأة لتمنحك تجربة استثنائية.",
      reputationTitle: "سمعة بنيت على ثقة أكثر من 1,489 عميلاً",
      reputationDesc: "بتقييم 4.9 نجوم من قرابة 1,500 عميل على Google، لم تكن سمعتنا وليدة الدعاية، بل ثمرة تفانٍ في ضبط المقاسات، والضيافة السعودية الصادقة، وتقديم أزياء تمنحك الثقة في كل محفل.",
      quoteText: "الأناقة الحقيقية ليست في امتلاك كل شيء، بل في اختيار الأفضل دائماً.",
      quoteAuthor: "فلسفة المختار (Top Choice)",
    },
    gallery: {
      title: "معرض الصور والفيديو",
      subtitle: "استكشف أروقة بوتيك العليا، تفاصيل الواجهات، تنسيقات الموسم، ودقة اللمسات الإيطالية.",
      filterAll: "كافة الوسائط",
      filterStorefront: "الواجهات والعمارة",
      filterInterior: "التصميم الداخلي",
      filterSuiting: "البدلات والرسمي",
      filterCasual: "الكاجوال والشتوي",
      filterAccessories: "الأحذية وإكسسوارات الحرير",
      filterVideo: "فيديوهات سينمائية",
      videoBadge: "فيديو سينمائي",
      clickToEnlarge: "انقر للعرض بالحجم الكامل",
    },
    contact: {
      title: "تواصل معنا والاستفسارات",
      subtitle: "فريقنا في خدمتكم للاستفسار عن توفر القطع والمقاسات وحجوزات الخياطة.",
      formHeading: "أرسل رسالة مباشرة للبوتيك",
      formSubtitle: "يقوم مستشار الأناقة لدينا بالرد خلال ساعة إلى ساعتين أثناء أوقات العمل.",
      nameLabel: "الاسم الكريم *",
      namePlaceholder: "مثال: عبدالله العتيبي",
      emailLabel: "البريد الإلكتروني *",
      emailPlaceholder: "name@domain.com",
      phoneLabel: "رقم الجوال / واتساب *",
      phonePlaceholder: "0597193831",
      subjectLabel: "موضوع الاستفسار *",
      subjectPlaceholder: "مثال: استفسار عن بدلات بال زيليري / موعد قياس",
      messageLabel: "نص الرسالة *",
      messagePlaceholder: "كيف يمكننا خدمتك اليوم؟",
      submitButton: "إرسال الاستفسار",
      submittingButton: "جاري الإرسال...",
      successTitle: "تم إرسال رسالتك بنجاح!",
      successDesc: "شكراً لتواصلك مع المختار. استلم فريق بوتيك العليا رسالتك وسنعاود التواصل معك في أقرب وقت.",
      dualBranchesTitle: "أرقام الفروع المباشرة",
      faqTitle: "الأسئلة الشائعة",
      faqSubtitle: "إجابات سريعة حول تشكيلاتنا، خدمات ضبط المقاسات، وزيارة البوتيك.",
      faq1Q: "هل يقدم المختار الثياب السعودية التقليدية؟",
      faq1A: "لا. المختار هو بوتيك متخصص في الأزياء الرجالية الأوروبية والمعاصرة، ونركز حصرياً على البدلات، التوكسيدو، البليزرات، القمصان، التريكو، الجينز، المعاطف الشتوية، الأحذية الجلدية والإكسسوارات.",
      faq2Q: "هل أحتاج إلى موعد مسبق لزيارة البوتيك الرئيسي؟",
      faq2A: "لا يلزم أي موعد مسبق للبوتيك الرئيسي بشارع العليا (12214)، ويسعدنا استقبالكم في أي وقت خلال ساعات العمل. أما بالنسبة لجلسات التفصيل الخاص في استوديو القياس، فيُفضل حجز موعد لتخصيص جناح القياس لكم.",
      faq3Q: "هل تقومون بتعديل مقاسات بدلات تم شراؤها من خارج المختار؟",
      faq3A: "يخدم خياطونا في المقام الأول أزياء المختار، لانديني ميلانو، بال زيليري، وبوغاتي لضمان معاييرنا الخاصة. وبحسب الطاقة الاستيعابية، يمكن لاستوديو القياس تقييم البدلات الخارجية الفاخرة.",
      faq4Q: "ما هي العلامات التجارية المتوفرة لدى المختار؟",
      faq4A: "نوفر علامة لانديني ميلانو (علامتنا الحصرية للبدلات، ربطات العنق، القمصان، والإكسسوارات)، وبال زيليري (الخياطة الإيطالية الفاخرة)، وبوغاتي (الأزياء الألمانية الخارجية والكاجوال والتريكو).",
      faq5Q: "كم يستغرق تعديل مقاس البدلة لمناسبة قريبة؟",
      faq5A: "تستغرق التعديلات المعتادة من 24 إلى 48 ساعة. كما تتوفر خدمة التعديل الفوري المستعجل في نفس اليوم لحالات الطوارئ والأعراس.",
      faq6Q: "ما هي وسائل الدفع المقبولة في البوتيك؟",
      faq6A: "نقبل مدى، فيزا، ماستركارد، أمريكان إكسبريس، أبل باي، والدفع النقدي في كلا فرعينا بالعليا.",
    },
  },
};
