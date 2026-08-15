"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Scissors, CheckCircle2, ArrowRight, ArrowLeft, Clock, ShieldCheck } from "lucide-react";

export const TailoringTeaser: React.FC = () => {
  const { t, locale, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-24 bg-charcoal-500 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Imagery Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[460px] sm:h-[540px] rounded-3xl overflow-hidden border border-gold-500/25 shadow-2xl">
              <Image
                src="/images/26.png"
                alt="Al-Mukhtar Master Tailoring and Fitting Craft"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-500 via-transparent to-black/20" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-charcoal-400/90 backdrop-blur-md border border-gold-500/30 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
                  <Scissors className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    {locale === "ar" ? "استوديو القياس المخصص — شارع العليا" : "Dedicated Fitting Studio — Olaya"}
                  </span>
                  <span className="text-[11px] text-gold-400/90 font-medium">
                    {locale === "ar" ? "تعديل فوري واحترافي لجميع البدلات" : "Precision Alterations & Custom Fittings"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-3 block">
                In-House Fit Service / خدمة القياس والخياطة
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {t.home.tailoringTeaserTitle}
              </h2>
              <p className="text-lg text-gold-300 font-medium mb-3">
                {t.home.tailoringTeaserSubtitle}
              </p>
              <p className="text-cream-400 leading-relaxed text-sm sm:text-base">
                {t.home.tailoringTeaserDesc}
              </p>
            </div>

            {/* 3 Key Points */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-cream-300">
                  {t.home.tailoringTeaserPoint1}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-cream-300">
                  {t.home.tailoringTeaserPoint2}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-cream-300">
                  {t.home.tailoringTeaserPoint3}
                </span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/tailoring"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold tracking-wider uppercase rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-brass text-charcoal-500 hover:brightness-110 shadow-gold-glow transition-all"
              >
                <Scissors className="w-4 h-4" />
                <span>{t.home.tailoringTeaserCta}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>

              <Link
                href="/branches"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-cream-300 hover:text-white transition-colors"
              >
                <span>{locale === "ar" ? "موقع استوديو القياس بالعليا" : "Fitting Studio Location"}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
