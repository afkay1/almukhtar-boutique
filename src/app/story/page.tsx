"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { REPUTATION_STATS } from "@/data/testimonials";
import {
  Sparkles,
  Quote,
  Layers,
  Star,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Compass,
} from "lucide-react";

export default function StoryPage() {
  const { t, locale, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="py-12 sm:py-16 bg-charcoal-500 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>{locale === "ar" ? "هوية البوتيك وفلسفة الانتقاء" : "Heritage & Curation Philosophy"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="gold-gradient-text">{t.story.title}</span>
          </h1>

          <p className="text-cream-400 text-base sm:text-lg leading-relaxed">
            {t.story.subtitle}
          </p>
        </div>

        {/* Section 1: The Meaning of 'Al-Mukhtar' / Top Choice */}
        <div className="luxury-card rounded-3xl p-8 sm:p-12 mb-16 border border-gold-500/25">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block">
                Brand Origin / جوهر الاسم
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                {t.story.topChoiceSectionTitle}
              </h2>
              <p className="text-cream-300 text-sm sm:text-base leading-relaxed">
                {t.story.topChoiceDesc1}
              </p>
              <p className="text-cream-400 text-sm sm:text-base leading-relaxed">
                {t.story.topChoiceDesc2}
              </p>
            </div>

            <div className="lg:col-span-6 relative h-80 sm:h-[400px] rounded-2xl overflow-hidden border border-gold-500/25 shadow-2xl">
              <Image
                src="/images/27.png"
                alt="Al-Mukhtar Top Choice Storefront Signage"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-500/70 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Philosophy Quote Banner */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-charcoal-400 via-charcoal-300 to-charcoal-400 border border-gold-500/30 text-center my-16 shadow-2xl overflow-hidden">
          <Quote className="absolute top-4 left-6 w-16 h-16 text-gold-500/10 pointer-events-none" />
          <Quote className="absolute bottom-4 right-6 w-16 h-16 text-gold-500/10 rotate-180 pointer-events-none" />

          <p className="text-xl sm:text-3xl font-serif text-cream-200 italic max-w-3xl mx-auto mb-4 relative z-10">
            &ldquo;{t.story.quoteText}&rdquo;
          </p>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gold-400">
            — {t.story.quoteAuthor}
          </span>
        </div>

        {/* Section 2: Multi-Brand Curation & Landini Milano */}
        <div className="luxury-card rounded-3xl p-8 sm:p-12 mb-16 border border-gold-500/25">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 relative h-80 sm:h-[400px] rounded-2xl overflow-hidden border border-gold-500/25 shadow-2xl">
              <Image
                src="/images/24.png"
                alt="Landini Milano In-House Label Silk Ties"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-500/70 via-transparent to-transparent" />
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block">
                Curation Over Volume / النخبة لا الكثرة
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                {t.story.curationSectionTitle}
              </h2>
              <p className="text-cream-300 text-sm sm:text-base leading-relaxed">
                {t.story.curationDesc1}
              </p>
              <p className="text-cream-400 text-sm sm:text-base leading-relaxed">
                {t.story.curationDesc2}
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Travertine Stone & Walnut Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="luxury-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-2 block">
                Storefront Architecture / الفخامة المعمارية
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {t.story.storeAestheticTitle}
              </h3>
              <p className="text-cream-300 text-sm sm:text-base leading-relaxed">
                {t.story.storeAestheticDesc}
              </p>
            </div>

            <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-gold-500/20">
              <Image
                src="/images/2.png"
                alt="Al-Mukhtar Travertine Interior Architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="luxury-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-2 block">
                Trust & Community / ثقة مجتمع الرياض
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {t.story.reputationTitle}
              </h3>
              <p className="text-cream-300 text-sm sm:text-base leading-relaxed">
                {t.story.reputationDesc}
              </p>
            </div>

            {/* Google Rating Showcase Box */}
            <div className="p-6 rounded-2xl bg-charcoal-300/80 border border-gold-500/30 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-3xl font-bold text-white">{REPUTATION_STATS.rating}</span>
                  <div className="flex text-gold-400 text-sm">
                    {"★".repeat(5)}
                  </div>
                </div>
                <span className="text-xs text-cream-400">
                  {locale === "ar"
                    ? `أكثر من ${REPUTATION_STATS.totalReviews} تقييم موثق على Google`
                    : `Based on ${REPUTATION_STATS.totalReviews}+ verified Google reviews`}
                </span>
              </div>

              <span className="px-3.5 py-1.5 rounded-full bg-gold-500/15 text-gold-400 text-xs font-bold border border-gold-500/30">
                {REPUTATION_STATS.satisfactionRate} {locale === "ar" ? "رضا العملاء" : "Satisfaction"}
              </span>
            </div>
          </div>
        </div>

        {/* CTA to Explore Collections & Book Fitting */}
        <div className="text-center pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-brass text-charcoal-500 font-bold text-sm uppercase tracking-wider shadow-gold-glow hover:brightness-110 transition-all"
            >
              <span>{t.common.exploreCollections}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>

            <Link
              href="/branches"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-charcoal-300 border border-gold-500/30 text-cream-200 hover:text-white text-sm font-semibold transition-all"
            >
              <span>{t.common.viewBranchDetails}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
