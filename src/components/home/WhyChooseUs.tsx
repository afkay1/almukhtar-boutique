"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Scissors, Layers, Star, Store } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Scissors,
      title: t.home.pillar1Title,
      desc: t.home.pillar1Desc,
      tag: "Craftsmanship / الحرفية",
    },
    {
      icon: Layers,
      title: t.home.pillar2Title,
      desc: t.home.pillar2Desc,
      tag: "Curation / الانتقاء",
    },
    {
      icon: Star,
      title: t.home.pillar3Title,
      desc: t.home.pillar3Desc,
      tag: "Reputation / الثقة",
    },
    {
      icon: Store,
      title: t.home.pillar4Title,
      desc: t.home.pillar4Desc,
      tag: "Presence / المواقع",
    },
  ];

  return (
    <section className="py-24 bg-charcoal-400 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-3 block">
            Al-Mukhtar Standard / معايير المختار
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.home.whyChooseTitle}
          </h2>
          <p className="text-cream-400 text-base sm:text-lg">
            {t.home.whyChooseSubtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="luxury-card rounded-2xl p-7 flex flex-col justify-between relative group overflow-hidden"
              >
                {/* Ambient hover glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl group-hover:bg-gold-500/20 transition-all pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-gold-500/80 tracking-widest uppercase">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gold-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-cream-400/90 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gold-500/10 flex items-center justify-between text-[11px] text-cream-500">
                  <span>{pillar.tag}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
