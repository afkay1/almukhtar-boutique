"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { createWhatsAppLink, WHATSAPP_DISPLAY } from "@/lib/utils";

export const FloatingWhatsApp: React.FC = () => {
  const { locale, isRTL } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const defaultMsg =
    locale === "ar"
      ? "مرحباً بكم في المختار (Top Choice). أود الاستفسار عن التشكيلات وخدمات القياس في بوتيك العليا."
      : "Hello Al-Mukhtar (Top Choice). I would like to inquire about your collections and tailoring services in Al Olaya.";

  const waUrl = createWhatsAppLink(defaultMsg);

  return (
    <div
      className={`fixed bottom-6 ${
        isRTL ? "left-6" : "right-6"
      } z-50 flex items-center gap-3`}
    >
      {showTooltip && (
        <div
          className={`relative hidden sm:flex items-center gap-2 bg-charcoal-200/95 border border-gold-500/40 text-cream-200 text-xs px-3.5 py-2.5 rounded-xl shadow-2xl backdrop-blur-md animate-fade-in`}
        >
          <div className="flex flex-col">
            <span className="font-bold text-gold-400">
              {locale === "ar" ? "خدمة العملاء المباشرة" : "VIP Boutique Concierge"}
            </span>
            <span className="text-[11px] text-cream-400">
              {locale === "ar" ? "تواصل معنا مباشرة عبر واتساب" : "Chat with our stylists on WhatsApp"}
            </span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-cream-400 hover:text-white p-0.5 rounded-full"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-emerald-700 via-emerald-600 to-emerald-500 rounded-full text-white shadow-2xl shadow-emerald-950/60 hover:scale-110 transition-all duration-300 border-2 border-gold-400/50"
        aria-label="Chat with Al-Mukhtar on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-gold-500 border border-charcoal-500"></span>
        </span>
        <MessageCircle className="w-7 h-7 text-white fill-current" />
      </a>
    </div>
  );
};
