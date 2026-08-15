"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  className?: string;
  variant?: "pill" | "minimal";
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  className = "",
  variant = "pill",
}) => {
  const { locale, toggleLocale, setLocale } = useLanguage();

  if (variant === "minimal") {
    return (
      <button
        onClick={toggleLocale}
        className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-md border border-gold-500/30 text-cream-300 hover:text-gold-400 hover:border-gold-500 transition-all ${className}`}
        aria-label="Switch Language"
      >
        <Globe className="w-3.5 h-3.5 text-gold-400" />
        <span>{locale === "en" ? "عربي" : "EN"}</span>
      </button>
    );
  }

  return (
    <div
      className={`inline-flex items-center bg-charcoal-200/90 p-1 rounded-full border border-gold-500/25 shadow-sm ${className}`}
      role="group"
      aria-label="Language Selector"
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
          locale === "en"
            ? "bg-gold-500 text-charcoal-500 shadow-sm font-bold"
            : "text-cream-400 hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale("ar")}
        className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
          locale === "ar"
            ? "bg-gold-500 text-charcoal-500 shadow-sm font-bold font-arabic"
            : "text-cream-400 hover:text-white font-arabic"
        }`}
      >
        عربي
      </button>
    </div>
  );
};
