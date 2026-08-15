"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BRANCHES_DATA, BranchInfo } from "@/data/branches";
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  ArrowUpRight,
  Car,
  Coffee,
  Sparkles,
  Scissors,
  CheckCircle2,
} from "lucide-react";
import { createWhatsAppLink, WHATSAPP_DISPLAY } from "@/lib/utils";

export default function BranchesPage() {
  const { t, locale, isRTL } = useLanguage();
  const [selectedBranchId, setSelectedBranchId] = useState<"flagship" | "fitting-studio">("flagship");

  const activeBranch =
    BRANCHES_DATA.find((b) => b.id === selectedBranchId) || BRANCHES_DATA[0];

  return (
    <div className="py-12 sm:py-16 bg-charcoal-500 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>{locale === "ar" ? "حي العليا • الرياض" : "Al Olaya District, Riyadh"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="gold-gradient-text">{t.branches.title}</span>
          </h1>

          <p className="text-cream-400 text-base sm:text-lg leading-relaxed">
            {t.branches.subtitle}
          </p>
        </div>

        {/* Both Branches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {BRANCHES_DATA.map((branch) => {
            const branchName = locale === "ar" ? branch.nameAr : branch.nameEn;
            const branchTagline = locale === "ar" ? branch.taglineAr : branch.taglineEn;
            const branchAddress = locale === "ar" ? branch.addressAr : branch.addressEn;
            const branchHours = locale === "ar" ? branch.hoursAr : branch.hoursEn;
            const branchServices = locale === "ar" ? branch.serviceFocusAr : branch.serviceFocusEn;

            return (
              <div
                key={branch.id}
                className="luxury-card rounded-3xl overflow-hidden flex flex-col justify-between border border-gold-500/25"
              >
                {/* Photo Gallery Grid */}
                <div className="relative h-80 sm:h-96 w-full bg-charcoal-300 overflow-hidden img-zoom-container">
                  <Image
                    src={branch.image}
                    alt={branchName}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-500 via-transparent to-black/30" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3.5 py-1.5 rounded-full bg-charcoal-500/90 text-gold-400 text-xs font-bold border border-gold-500/40 backdrop-blur-md">
                      {branch.walkIn
                        ? locale === "ar" ? "بوتيك رئيسي • تسوق حر" : "Flagship Boutique • Walk-ins Welcome"
                        : locale === "ar" ? "استوديو قياس • بموعد مسبق" : "Fitting Studio • By Appointment"}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-black/75 text-cream-300 text-xs font-mono">
                      {branch.postalCode}
                    </span>
                  </div>
                </div>

                {/* Branch Info */}
                <div className="p-7 sm:p-9 flex flex-col flex-grow justify-between space-y-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1.5">
                      {branchName}
                    </h2>
                    <p className="text-xs text-gold-400 font-semibold mb-6">
                      {branchTagline}
                    </p>

                    {/* Address & Hours Details */}
                    <div className="space-y-4 text-sm text-cream-300 bg-charcoal-300/60 p-5 rounded-2xl border border-gold-500/15 mb-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-white text-xs uppercase tracking-wider mb-0.5">
                            {t.common.address}
                          </strong>
                          <span>{branchAddress}, {locale === "ar" ? branch.cityAr : branch.cityEn} ({branch.postalCode})</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-white text-xs uppercase tracking-wider mb-0.5">
                            {t.branches.openingHours}
                          </strong>
                          <div>{branchHours.weekdays}</div>
                          <div className="text-cream-400 text-xs mt-0.5">{branchHours.friday}</div>
                          {branchHours.note && (
                            <div className="text-gold-400/90 text-xs mt-1 italic">
                              * {branchHours.note}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-white text-xs uppercase tracking-wider mb-0.5">
                            {t.common.phone} & WhatsApp
                          </strong>
                          <span>{WHATSAPP_DISPLAY}</span>
                        </div>
                      </div>
                    </div>

                    {/* Service Focus List */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-3">
                        {t.branches.specialization}
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-cream-300">
                        {branchServices.map((srv, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                            <span>{srv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions: Directions + WhatsApp + Book Fitting */}
                  <div className="pt-6 border-t border-gold-500/15 flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={branch.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-charcoal-200 hover:bg-charcoal-100 text-gold-400 text-xs font-bold border border-gold-500/30 transition-all"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{t.common.getDirections}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <div className="flex items-center gap-2">
                      <a
                        href={branch.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>

                      {!branch.walkIn && (
                        <Link
                          href="/tailoring#booking-form"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-charcoal-500 text-xs font-bold transition-all shadow-gold-glow"
                        >
                          <Scissors className="w-3.5 h-3.5" />
                          <span>{locale === "ar" ? "حجز موعد قياس" : "Book Fitting"}</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Amenities & Hospitality Banner */}
        <div className="luxury-card rounded-3xl p-8 sm:p-12 border border-gold-500/25">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">
              {t.branches.locationFeaturesTitle}
            </h3>
            <p className="text-sm text-cream-400">
              {locale === "ar"
                ? "صممنا فروعنا لتوفر لك تجربة تسوق راقية تجمع بين الراحة والخصوصية والضيافة السعودية الأصيلة."
                : "Designed to provide a comfortable, discreet, and civilized luxury shopping experience."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-charcoal-300/70 border border-gold-500/15 flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-gold-500/15 text-gold-400 flex items-center justify-center mb-4">
                <Car className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                {locale === "ar" ? "مواقف وخدمة صف السيارات" : "Valet & Street Parking"}
              </h4>
              <p className="text-xs text-cream-400 leading-relaxed">
                {t.branches.parkingInfo}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-charcoal-300/70 border border-gold-500/15 flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-gold-500/15 text-gold-400 flex items-center justify-center mb-4">
                <Coffee className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                {locale === "ar" ? "الضيافة والقهوة السعودية" : "Saudi Hospitality & Lounge"}
              </h4>
              <p className="text-xs text-cream-400 leading-relaxed">
                {t.branches.valetService}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-charcoal-300/70 border border-gold-500/15 flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-gold-500/15 text-gold-400 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                {locale === "ar" ? "أجنحة قياس خاصة VIP" : "Private VIP Fitting Suites"}
              </h4>
              <p className="text-xs text-cream-400 leading-relaxed">
                {t.branches.privateLounge}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
