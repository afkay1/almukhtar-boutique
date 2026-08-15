"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BRANCHES_DATA } from "@/data/branches";
import { MapPin, Clock, ArrowRight, ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";

export const BranchesTeaser: React.FC = () => {
  const { t, locale, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-24 bg-charcoal-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-3 block">
              Al Olaya, Riyadh / فرعان في قلب العليا
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t.home.branchesTeaserTitle}
            </h2>
            <p className="text-cream-400 text-base sm:text-lg">
              {t.home.branchesTeaserSubtitle}
            </p>
          </div>

          <Link
            href="/branches"
            className="inline-flex items-center gap-2 text-sm font-bold text-gold-400 hover:text-gold-300 transition-colors shrink-0"
          >
            <span>{locale === "ar" ? "تفاصيل الفروع وساعات العمل" : "View All Branch Details"}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* Dual Branch Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {BRANCHES_DATA.map((branch) => (
            <div
              key={branch.id}
              className="luxury-card rounded-3xl overflow-hidden flex flex-col justify-between group"
            >
              {/* Photo */}
              <div className="relative h-72 w-full bg-charcoal-300 overflow-hidden img-zoom-container">
                <Image
                  src={branch.image}
                  alt={locale === "ar" ? branch.nameAr : branch.nameEn}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-500 via-transparent to-black/30" />

                {/* Badge for Walk-in vs Appointment */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-charcoal-500/90 text-gold-400 text-xs font-bold border border-gold-500/40 backdrop-blur-md">
                    {branch.walkIn
                      ? locale === "ar" ? "تسوق حر بدون موعد" : "Walk-ins Welcome"
                      : locale === "ar" ? "استوديو خياطة بموعد" : "Fitting by Appointment"}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-black/70 text-cream-300 text-xs font-mono">
                    {branch.postalCode}
                  </span>
                </div>
              </div>

              {/* Info Body */}
              <div className="p-7 flex flex-col flex-grow justify-between space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                    {locale === "ar" ? branch.nameAr : branch.nameEn}
                  </h3>
                  <p className="text-xs text-gold-400 font-medium mb-4">
                    {locale === "ar" ? branch.taglineAr : branch.taglineEn}
                  </p>

                  {/* Address & Hours */}
                  <div className="space-y-2.5 text-sm text-cream-300">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <span>{locale === "ar" ? branch.addressAr : branch.addressEn}</span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <div>
                        <div>{locale === "ar" ? branch.hoursAr.weekdays : branch.hoursEn.weekdays}</div>
                        <div className="text-cream-400 text-xs mt-0.5">
                          {locale === "ar" ? branch.hoursAr.friday : branch.hoursEn.friday}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Bottom Links */}
                <div className="pt-5 border-t border-gold-500/15 flex items-center justify-between gap-3">
                  <a
                    href={branch.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    <span>{t.common.getDirections}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={branch.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 text-xs font-bold border border-emerald-500/30 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
