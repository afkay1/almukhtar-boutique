"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { REPUTATION_STATS } from "@/data/testimonials";
import { Scissors, Sparkles, ArrowRight, ArrowLeft, Star, ShieldCheck, MapPin } from "lucide-react";

export const HeroSection: React.FC = () => {
  const { t, locale, isRTL } = useLanguage();
  const [videoLoaded, setVideoLoaded] = useState(false);

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center justify-center overflow-hidden bg-charcoal-500">
      {/* Background Video with Dark Gradient & Poster Fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/2.png"
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover object-center scale-105 transition-opacity duration-1000 ${
            videoLoaded ? "opacity-45" : "opacity-35"
          }`}
        >
          <source src="/videos/hero-promo.mp4" type="video/mp4" />
          <source src="/videos/Creating_promotional_video_for_b._202608152006.mp4" type="video/mp4" />
        </video>

        {/* Multi-layered cinematic gradient overlays for high readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/80 to-[#0b0c0e]/60" />
        <div className="absolute inset-0 bg-radial-gold opacity-30 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-200/90 border border-gold-500/40 text-gold-300 text-xs font-semibold tracking-wider uppercase shadow-gold-glow mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>{t.home.heroBadge}</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-[1.15]">
          <span className="block font-arabic text-gold-400 mb-2">المختار</span>
          <span className="gold-gradient-text block">
            {t.home.heroTitle}
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-cream-300/90 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          {t.home.heroSubtitle}
        </p>

        {/* Dual Primary Call-to-Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <Link
            href="/collections"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold tracking-wider uppercase rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-brass text-charcoal-500 hover:brightness-110 shadow-gold-glow hover:scale-[1.02] transition-all duration-200"
          >
            <span>{t.home.heroCtaPrimary}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>

          <Link
            href="/tailoring"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wider uppercase rounded-xl bg-charcoal-300/80 hover:bg-charcoal-200 border border-gold-500/40 text-cream-200 hover:text-white hover:border-gold-400 transition-all duration-200 backdrop-blur-sm"
          >
            <Scissors className="w-4 h-4 text-gold-400" />
            <span>{t.home.heroCtaSecondary}</span>
          </Link>
        </div>

        {/* Live Reputation & Location Stats Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 w-full max-w-3xl pt-8 border-t border-gold-500/20">
          <div className="p-3.5 rounded-xl bg-charcoal-300/60 border border-gold-500/15 backdrop-blur-md flex flex-col items-center">
            <div className="flex items-center gap-1 text-gold-400 mb-1">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-lg font-bold text-white">{t.home.heroStat1Val}</span>
            </div>
            <span className="text-xs text-cream-400">{t.home.heroStat1Label}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-charcoal-300/60 border border-gold-500/15 backdrop-blur-md flex flex-col items-center">
            <div className="flex items-center gap-1 text-gold-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-lg font-bold text-white">{t.home.heroStat2Val}</span>
            </div>
            <span className="text-xs text-cream-400">{t.home.heroStat2Label}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-charcoal-300/60 border border-gold-500/15 backdrop-blur-md flex flex-col items-center">
            <div className="flex items-center gap-1 text-gold-400 mb-1">
              <MapPin className="w-4 h-4" />
              <span className="text-lg font-bold text-white">{t.home.heroStat3Val}</span>
            </div>
            <span className="text-xs text-cream-400">{t.home.heroStat3Label}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
