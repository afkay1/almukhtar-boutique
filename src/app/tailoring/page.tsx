"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { BookingForm } from "@/components/tailoring/BookingForm";
import {
  Scissors,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock,
  Ruler,
  Layers,
  Award,
} from "lucide-react";

export default function TailoringPage() {
  const { t, locale } = useLanguage();

  const steps = [
    {
      icon: Ruler,
      step: "01",
      title: t.tailoring.step1Title,
      desc: t.tailoring.step1Desc,
    },
    {
      icon: Scissors,
      step: "02",
      title: t.tailoring.step2Title,
      desc: t.tailoring.step2Desc,
    },
    {
      icon: Layers,
      step: "03",
      title: t.tailoring.step3Title,
      desc: t.tailoring.step3Desc,
    },
    {
      icon: Award,
      step: "04",
      title: t.tailoring.step4Title,
      desc: t.tailoring.step4Desc,
    },
  ];

  const services = [
    {
      title: t.tailoring.service1Title,
      desc: t.tailoring.service1Desc,
      turnaround: "24 – 48 Hours",
      turnaroundAr: "24 – 48 ساعة",
      tag: "Ready-to-Wear",
      tagAr: "أزياء جاهزة",
    },
    {
      title: t.tailoring.service2Title,
      desc: t.tailoring.service2Desc,
      turnaround: "2 – 3 Weeks",
      turnaroundAr: "2 – 3 أسابيع",
      tag: "Made-to-Measure",
      tagAr: "تفصيل على المقاس",
    },
    {
      title: t.tailoring.service3Title,
      desc: t.tailoring.service3Desc,
      turnaround: "Same-Day / 24h",
      turnaroundAr: "نفس اليوم / 24 ساعة",
      tag: "Gala & Weddings",
      tagAr: "أعراس ومناسبات",
    },
    {
      title: t.tailoring.service4Title,
      desc: t.tailoring.service4Desc,
      turnaround: "12 – 24 Hours",
      turnaroundAr: "12 – 24 ساعة",
      tag: "Trousers & Denim",
      tagAr: "بناطيل وجينز",
    },
  ];

  return (
    <div className="py-12 sm:py-16 bg-charcoal-500 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Scissors className="w-3.5 h-3.5" />
            <span>{locale === "ar" ? "خدمة القياس والتفصيل الخاص • العليا" : "In-House Tailoring & Alteration Studio"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="gold-gradient-text">{t.tailoring.title}</span>
          </h1>

          <p className="text-cream-400 text-base sm:text-lg leading-relaxed">
            {t.tailoring.subtitle}
          </p>
        </div>

        {/* Philosophy & Visual Banner */}
        <div className="luxury-card rounded-3xl p-8 sm:p-12 mb-20 border border-gold-500/25">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block">
                Sartorial Craftsmanship / فلسفة الخياطة
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {t.tailoring.overviewTitle}
              </h2>
              <p className="text-cream-300 text-sm sm:text-base leading-relaxed">
                {t.tailoring.overviewDesc}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 text-xs text-cream-400">
                <div className="p-3.5 rounded-xl bg-charcoal-300/70 border border-gold-500/15 flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{locale === "ar" ? "تعديلات فورية خلال 24 ساعة" : "Express 24h alteration available"}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-charcoal-300/70 border border-gold-500/15 flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{locale === "ar" ? "خياطون معتمدون للأقمشة الإيطالية" : "Master Italian-grade tailors"}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-gold-500/20">
              <Image
                src="/images/26.png"
                alt="Al-Mukhtar Master Tailoring Craft"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* 4-Step Process Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-2 block">
              Precision Workflow / خطوات الضبط والقياس
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {locale === "ar" ? "كيف نضمن لك القصة المثالية؟" : "The 4-Step Fitting Journey"}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-charcoal-400/80 border border-gold-500/20 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gold-500/15 text-gold-400 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-gold-400">
                        {s.step}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-2">
                      {s.title}
                    </h4>

                    <p className="text-xs text-cream-400 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-2 block">
              Services Menu / قائمة الخدمات
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {t.tailoring.servicesHeading}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="luxury-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full bg-gold-500/15 text-gold-400 text-xs font-bold border border-gold-500/30">
                      {locale === "ar" ? srv.tagAr : srv.tag}
                    </span>
                    <span className="text-xs text-cream-400 font-mono">
                      ⏱ {locale === "ar" ? srv.turnaroundAr : srv.turnaround}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-2">
                    {srv.title}
                  </h4>

                  <p className="text-sm text-cream-400 leading-relaxed mb-4">
                    {srv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Booking Form Section */}
        <div id="booking-form" className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-2 block">
              Private Reservation / حجز موعد خاص
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              {t.tailoring.bookingHeading}
            </h3>
            <p className="text-cream-400 text-sm sm:text-base">
              {t.tailoring.bookingSubtitle}
            </p>
          </div>

          <BookingForm />
        </div>
      </div>
    </div>
  );
}
