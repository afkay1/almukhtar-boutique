export interface BranchInfo {
  id: "flagship" | "fitting-studio";
  nameEn: string;
  nameAr: string;
  taglineEn: string;
  taglineAr: string;
  addressEn: string;
  addressAr: string;
  postalCode: string;
  neighborhoodEn: string;
  neighborhoodAr: string;
  cityEn: string;
  cityAr: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappLink: string;
  googleMapsUrl: string;
  hoursEn: {
    weekdays: string;
    friday: string;
    note?: string;
  };
  hoursAr: {
    weekdays: string;
    friday: string;
    note?: string;
  };
  serviceFocusEn: string[];
  serviceFocusAr: string[];
  image: string;
  galleryImages: string[];
  walkIn: boolean;
  appointmentRecommended: boolean;
}

export const BRANCHES_DATA: BranchInfo[] = [
  {
    id: "flagship",
    nameEn: "Flagship Boutique",
    nameAr: "البوتيك الرئيسي",
    taglineEn: "Ready-to-wear Collections & Contemporary Styling",
    taglineAr: "تشكيلات الأزياء الجاهزة والتنسيقات المعاصرة",
    addressEn: "Olaya Street, Al Olaya District",
    addressAr: "شارع العليا، حي العليا",
    postalCode: "12214",
    neighborhoodEn: "Al Olaya District",
    neighborhoodAr: "حي العليا",
    cityEn: "Riyadh, Saudi Arabia",
    cityAr: "الرياض، المملكة العربية السعودية",
    phone: "+966597193831",
    phoneDisplay: "+966 59 719 3831",
    whatsapp: "966597193831",
    whatsappLink: "https://wa.me/966597193831?text=Hello%20Al-Mukhtar,%20I%20would%20like%20to%20inquire%20about%20the%20Flagship%20Boutique%20in%20Al%20Olaya",
    googleMapsUrl: "https://maps.google.com/?q=Al+Mukhtar+Menswear+Olaya+Street+Riyadh+12214",
    hoursEn: {
      weekdays: "Sat – Thu: 10:00 AM – 11:00 PM",
      friday: "Friday: 4:00 PM – 11:00 PM",
      note: "Walk-ins warmly welcome. Full ready-to-wear collection on display.",
    },
    hoursAr: {
      weekdays: "السبت – الخميس: 10:00 صباحاً – 11:00 مساءً",
      friday: "الجمعة: 4:00 عصراً – 11:00 مساءً",
      note: "نرحب بزيارتكم دون موعد مسبق. التشكيلة الجاهزة متوفرة بالكامل.",
    },
    serviceFocusEn: [
      "Full Ready-to-Wear Collections",
      "Landini Milano & Pal Zileri Showrooms",
      "Bugatti Outerwear & Knitwear",
      "Shoes, Belts & Silk Accessories Counter",
      "Immediate Sizing & Trial Rooms",
    ],
    serviceFocusAr: [
      "مجموعات الأزياء الجاهزة الكاملة",
      "أجنحة لانديني ميلانو وبال زيليري",
      "أزياء بوغاتي الخارجية والتريكو",
      "ركن الأحذية الجلدية والأحزمة وإكسسوارات الحرير",
      "غرف قياس وتجربة فورية",
    ],
    image: "/images/5.png",
    galleryImages: ["/images/5.png", "/images/2.png", "/images/4.png", "/images/12.png"],
    walkIn: true,
    appointmentRecommended: false,
  },
  {
    id: "fitting-studio",
    nameEn: "Fitting Studio & Made-to-Measure",
    nameAr: "استوديو القياس والتفصيل الخاص",
    taglineEn: "Master Alterations & Made-to-Measure Fittings",
    taglineAr: "تعديلات الخياطة المتقنة ومقاسات التفصيل الخاص",
    addressEn: "Al Olaya Street, Al Olaya District",
    addressAr: "شارع العليا العام، حي العليا",
    postalCode: "12222",
    neighborhoodEn: "Al Olaya District",
    neighborhoodAr: "حي العليا",
    cityEn: "Riyadh, Saudi Arabia",
    cityAr: "الرياض، المملكة العربية السعودية",
    phone: "+966597193831",
    phoneDisplay: "+966 59 719 3831",
    whatsapp: "966597193831",
    whatsappLink: "https://wa.me/966597193831?text=Hello%20Al-Mukhtar,%20I%20would%20like%20to%20book%20a%20fitting%20session%20at%20the%20Fitting%20Studio%20in%20Al%20Olaya",
    googleMapsUrl: "https://maps.google.com/?q=Al+Mukhtar+Fitting+Studio+Al+Olaya+Street+Riyadh+12222",
    hoursEn: {
      weekdays: "Sat – Thu: 11:00 AM – 10:00 PM",
      friday: "Friday: By Appointment Only",
      note: "By appointment for dedicated private fitting & precision alterations.",
    },
    hoursAr: {
      weekdays: "السبت – الخميس: 11:00 صباحاً – 10:00 مساءً",
      friday: "الجمعة: بموعد مسبق فقط",
      note: "يُفضل حجز موعد لجلسات القياس الخاصة والتعديلات الدقيقة.",
    },
    serviceFocusEn: [
      "In-House Precision Alterations",
      "Made-to-Measure Suiting & Tuxedo Fittings",
      "Silhouette & Shoulder Adjustment Consultations",
      "Private VIP Fitting Suites",
      "Fabric & Lining Swatch Selection",
    ],
    serviceFocusAr: [
      "تعديلات خياطة متقنة وفورية",
      "قياسات البدلات الرسمية والتوكسيدو الخاصة",
      "استشارات تعديل القوام وتوازن الأكتاف",
      "أجنحة قياس خاصة للعملاء المميزين",
      "كتالوجات أفخم الأقمشة والبطانات الإيطالية",
    ],
    image: "/images/21.png",
    galleryImages: ["/images/21.png", "/images/1.png", "/images/26.png", "/images/25.png"],
    walkIn: false,
    appointmentRecommended: true,
  },
];
