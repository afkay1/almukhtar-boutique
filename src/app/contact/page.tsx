"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { BRANCHES_DATA } from "@/data/branches";
import { ContactForm } from "@/components/contact/ContactForm";
import { FaqAccordion } from "@/components/contact/FaqAccordion";
import {
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  Mail,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { createWhatsAppLink, WHATSAPP_DISPLAY } from "@/lib/utils";

export default function ContactPage() {
  const { t, locale, isRTL } = useLanguage();

  const hotlineMsg =
    locale === "ar"
      ? "مرحباً بكم في المختار (Top Choice). أود الاستفسار عن التشكيلات وخدمات البوتيك في الرياض."
      : "Hello Al-Mukhtar (Top Choice). I would like to make an inquiry regarding your collections and boutique services in Riyadh.";
  const waUrl = createWhatsAppLink(hotlineMsg);

  return (
    <div className="py-12 sm:py-16 bg-charcoal-500 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{locale === "ar" ? "قنوات التواصل المباشرة • الرياض" : "Direct Concierge & Boutique Hotlines"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="gold-gradient-text">{t.contact.title}</span>
          </h1>

          <p className="text-cream-400 text-base sm:text-lg leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* WhatsApp VIP Concierge Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-emerald-950/80 via-charcoal-400 to-emerald-950/80 border border-emerald-500/40 mb-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-emerald-600/30 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shrink-0 shadow-lg">
              <MessageCircle className="w-8 h-8 fill-current" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                {locale === "ar" ? "خدمة الرد السريع عبر واتساب" : "Instant WhatsApp VIP Hotline"}
              </span>
              <h3 className="text-2xl font-bold text-white mb-1">
                {WHATSAPP_DISPLAY}
              </h3>
              <p className="text-xs text-cream-300">
                {locale === "ar"
                  ? "تواصل فوري مع مستشار الأزياء في فرع العليا لأي استفسار حول المقاسات والأسعار والتوفر."
                  : "Direct line to our Al Olaya boutique stylists for instant sizing, pricing, and availability queries."}
              </p>
            </div>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-950/60 transition-all shrink-0 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{locale === "ar" ? "محادثة فورية الآن" : "Chat on WhatsApp"}</span>
          </a>
        </div>

        {/* Dual Branch Location Cards */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
            {t.contact.dualBranchesTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BRANCHES_DATA.map((branch) => {
              const name = locale === "ar" ? branch.nameAr : branch.nameEn;
              const address = locale === "ar" ? branch.addressAr : branch.addressEn;
              const hours = locale === "ar" ? branch.hoursAr : branch.hoursEn;

              return (
                <div
                  key={branch.id}
                  className="luxury-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-white">{name}</h4>
                      <span className="text-xs px-2.5 py-1 rounded bg-gold-500/15 text-gold-400 font-mono">
                        {branch.postalCode}
                      </span>
                    </div>

                    <p className="text-xs text-gold-400 font-medium mb-5">
                      {locale === "ar" ? branch.taglineAr : branch.taglineEn}
                    </p>

                    <div className="space-y-3 text-xs text-cream-300">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                        <span>{address}, {locale === "ar" ? branch.cityAr : branch.cityEn}</span>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                        <div>
                          <div>{hours.weekdays}</div>
                          <div className="text-cream-400 mt-0.5">{hours.friday}</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Phone className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                        <span>{WHATSAPP_DISPLAY}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-gold-500/15 flex items-center justify-between">
                    <a
                      href={branch.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gold-400 hover:text-gold-300 font-bold flex items-center gap-1"
                    >
                      <span>{t.common.getDirections}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={branch.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main 2-Column: Contact Form & FAQ Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left: Contact Form (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-1 block">
                Direct Form / المراسلة المباشرة
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                {t.contact.formHeading}
              </h3>
              <p className="text-xs text-cream-400 mb-6">
                {t.contact.formSubtitle}
              </p>
            </div>

            <ContactForm />
          </div>

          {/* Right: FAQs (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-1 block">
                Answers & Insights / الأسئلة الأكثر شيوعاً
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                {t.contact.faqTitle}
              </h3>
              <p className="text-xs text-cream-400 mb-6">
                {t.contact.faqSubtitle}
              </p>
            </div>

            <FaqAccordion />
          </div>
        </div>
      </div>
    </div>
  );
}
