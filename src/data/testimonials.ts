export interface Testimonial {
  id: string;
  authorEn: string;
  authorAr: string;
  rating: number;
  dateEn: string;
  dateAr: string;
  source: string;
  commentEn: string;
  commentAr: string;
  serviceEn: string;
  serviceAr: string;
  verified: boolean;
}

export const REPUTATION_STATS = {
  rating: 4.9,
  totalReviews: 1489,
  location: "Al Olaya, Riyadh",
  satisfactionRate: "99.4%",
};

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "review-1",
    authorEn: "Faisal Al-Otaibi",
    authorAr: "فيصل العتيبي",
    rating: 5,
    dateEn: "2 weeks ago",
    dateAr: "منذ أسبوعين",
    source: "Google Review",
    commentEn: "Hands down the best menswear boutique in Riyadh. The fit service at their Olaya studio is unmatched — they altered my tuxedo to absolute perfection in 24 hours before my brother's wedding.",
    commentAr: "بلا منازع أفضل بوتيك للأزياء الرجالية والبدلات في الرياض. خدمة تعديل المقاسات في استوديو العليا لا يُعلى عليها، عدلوا لي بدلة التوكسيدو بدقة متناهية قبل زواج أخي.",
    serviceEn: "Tuxedo & Fitting Alteration",
    serviceAr: "بدلة توكسيدو وتعديل مقاسات",
    verified: true,
  },
  {
    id: "review-2",
    authorEn: "Dr. Tariq Al-Mansoor",
    authorAr: "د. طارق المنصور",
    rating: 5,
    dateEn: "1 month ago",
    dateAr: "منذ شهر",
    source: "Google Review",
    commentEn: "Al-Mukhtar has been my go-to for Pal Zileri and Landini Milano suits for years. Their showroom in Olaya is beautiful, the fabrics are authentic Italian, and the staff understand proportion and cut.",
    commentAr: "المختار هو وجهتي الدائمة لبدلات بال زيليري ولانديني ميلانو منذ سنوات. المعرض في شارع العليا فخم جداً والأقمشة إيطالية أصلية والمستشارين فاهمين تناسق القوام والقصات.",
    serviceEn: "Pal Zileri Sartorial Suiting",
    serviceAr: "بدلات بال زيليري الإيطالية",
    verified: true,
  },
  {
    id: "review-3",
    authorEn: "Saud Al-Shehri",
    authorAr: "سعود الشهري",
    rating: 5,
    dateEn: "3 weeks ago",
    dateAr: "منذ 3 أسابيع",
    source: "Google Review",
    commentEn: "Remarkable curation. You don't just get formal suits, their Bugatti outerwear and casual knitwear collections are exceptional. Outstanding hospitality every time I walk into the flagship store.",
    commentAr: "اختياراتهم في غاية الرقي. ليس فقط البدلات الرسمية، بل تشكيلة بوغاتي للملابس الشتوية والتريكو مميزة جداً، وحسن الاستقبال والضيافة عنوان البوتيك دائماً.",
    serviceEn: "Bugatti Outerwear & Knitwear",
    serviceAr: "أزياء بوغاتي وتريكو كاجوال",
    verified: true,
  },
  {
    id: "review-4",
    authorEn: "Abdullah Al-Ghamdi",
    authorAr: "عبدالله الغامدي",
    rating: 5,
    dateEn: "2 months ago",
    dateAr: "منذ شهرين",
    source: "Google Review",
    commentEn: "Their in-house brand Landini Milano offers exceptional value for money. Silk ties, shirts, and blazers that feel and look like they came straight from Via Montenapoleone in Milan.",
    commentAr: "علامتهم لانديني ميلانو تقدم قيمة استثنائية مقابل الجودة العالية. ربطات العنق الحريرية والقمصان والبليزرات بخامة وتشطيب تشعرك أنك في قلب ميلانو.",
    serviceEn: "Landini Milano Silk & Accessories",
    serviceAr: "إكسسوارات وحرير لانديني ميلانو",
    verified: true,
  },
  {
    id: "review-5",
    authorEn: "Majed Al-Subaie",
    authorAr: "ماجد السبيعي",
    rating: 5,
    dateEn: "1 month ago",
    dateAr: "منذ شهر",
    source: "Google Review",
    commentEn: "The 4.9 star rating with almost 1,500 reviews is completely well-deserved. True professionalism, honest styling advice, and impeccable attention to detail.",
    commentAr: "تقييم 4.9 من قرابة 1500 عميل مستحق بكل جدارة. احترافية عالية، نصائح ذوق صادقة، واهتمام دقيق بأصغر التفاصيل في مقاسات البدلة.",
    serviceEn: "Executive Suiting & Styling",
    serviceAr: "تنسيق بدلات رجال الأعمال",
    verified: true,
  },
];
