"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TESTIMONIALS_DATA, REPUTATION_STATS } from "@/data/testimonials";
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const { t, locale, isRTL } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? TESTIMONIALS_DATA.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === TESTIMONIALS_DATA.length - 1 ? 0 : prevIdx + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-24 bg-charcoal-500 relative overflow-hidden">
      {/* Background ambient accent */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>{REPUTATION_STATS.rating} Google Rating • {REPUTATION_STATS.totalReviews}+ Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.home.testimonialsTitle}
          </h2>
          <p className="text-cream-400 text-base sm:text-lg">
            {t.home.testimonialsSubtitle}
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="luxury-card rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-gold-500/30 shadow-2xl">
            <Quote className="absolute top-6 right-6 rtl:left-6 rtl:right-auto w-20 h-20 text-gold-500/10 pointer-events-none" />

            <div className="relative z-10">
              {/* Rating & Verified Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-1.5 text-gold-400">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="text-xs text-cream-400 ml-2 rtl:mr-2 rtl:ml-0 font-medium">
                    {locale === "ar" ? current.dateAr : current.dateEn}
                  </span>
                </div>

                {current.verified ? (
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-semibold px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{locale === "ar" ? "تقييم موثق من Google" : "Verified Google Review"}</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs text-gold-400 font-semibold px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25">
                    <Quote className="w-3.5 h-3.5" />
                    <span>{locale === "ar" ? "تجربة عميل" : "Customer Experience"}</span>
                  </span>
                )}
              </div>

              {/* Comment Quote */}
              <p className="text-lg sm:text-2xl font-serif text-cream-200 leading-relaxed italic mb-8">
                &ldquo;{locale === "ar" ? current.commentAr : current.commentEn}&rdquo;
              </p>

              {/* Author & Service */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gold-500/15">
                <div>
                  <h4 className="text-base font-bold text-white">
                    {locale === "ar" ? current.authorAr : current.authorEn}
                  </h4>
                  <span className="text-xs text-gold-400 font-medium block mt-0.5">
                    {locale === "ar" ? current.serviceAr : current.serviceEn}
                  </span>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="p-2.5 rounded-full bg-charcoal-300 hover:bg-gold-500 hover:text-charcoal-500 text-cream-300 transition-all border border-gold-500/20"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
                  </button>

                  <span className="text-xs font-mono text-cream-400 px-2">
                    {currentIndex + 1} / {TESTIMONIALS_DATA.length}
                  </span>

                  <button
                    onClick={next}
                    className="p-2.5 rounded-full bg-charcoal-300 hover:bg-gold-500 hover:text-charcoal-500 text-cream-300 transition-all border border-gold-500/20"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
