"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle, ArrowRight, ArrowLeft, Scissors, Sparkles, Phone } from "lucide-react";
import { createWhatsAppLink, WHATSAPP_DISPLAY } from "@/lib/utils";

export const ClosingCta: React.FC = () => {
  const { t, locale, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const ctaWaMsg =
    locale === "ar"
      ? "مرحباً بكم في المختار (Top Choice). أود التواصل مع مستشار الأناقة في فرع العليا."
      : "Hello Al-Mukhtar (Top Choice). I would like to consult with your stylist at the Al Olaya boutique.";
  const waUrl = createWhatsAppLink(ctaWaMsg);

  return (
    <section className="py-24 bg-gradient-to-b from-charcoal-400 to-[#0b0c0e] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-radial-gold opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="p-8 sm:p-14 rounded-3xl bg-charcoal-300/80 border border-gold-500/30 backdrop-blur-xl shadow-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/35 text-gold-300 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>{locale === "ar" ? "خدمة العملاء والاستشارات الخاصة" : "VIP Sartorial Concierge"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="gold-gradient-text block">
              {t.home.ctaTitle}
            </span>
          </h2>

          <p className="text-cream-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.home.ctaSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold tracking-wider uppercase rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-xl shadow-emerald-950/60 hover:scale-[1.02] transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{t.home.ctaButtonPrimary}</span>
            </a>

            <Link
              href="/collections"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wider uppercase rounded-xl bg-charcoal-200 border border-gold-500/30 text-cream-200 hover:text-white hover:border-gold-400 transition-all"
            >
              <span>{t.home.ctaButtonSecondary}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-gold-500/15 flex flex-wrap items-center justify-center gap-6 text-xs text-cream-400">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{WHATSAPP_DISPLAY}</span>
            </span>
            <span className="h-3 w-px bg-gold-500/30 hidden sm:block" />
            <span>{locale === "ar" ? "شارع العليا، الرياض 12214" : "Olaya Street, Riyadh 12214"}</span>
            <span className="h-3 w-px bg-gold-500/30 hidden sm:block" />
            <span>{locale === "ar" ? "السبت – الخميس: 10:00 ص – 11:00 م" : "Sat – Thu: 10:00 AM – 11:00 PM"}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
