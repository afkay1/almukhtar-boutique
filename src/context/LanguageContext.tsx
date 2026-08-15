"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Locale, TranslationDictionary, translations } from "@/data/translations";
import { formatPriceSAR } from "@/lib/utils";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: TranslationDictionary;
  dir: "ltr" | "rtl";
  isRTL: boolean;
  formatPrice: (price: number) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "almukhtar_preferred_locale";

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>("ar"); // Default Arabic for Riyadh audience, or switchable

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved === "en" || saved === "ar") {
        setLocaleState(saved);
      }
    } catch {
      // localStorage may be unavailable
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // ignore
    }
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  const toggleLocale = () => {
    setLocaleState((prev) => (prev === "en" ? "ar" : "en"));
  };

  const dir = locale === "ar" ? "rtl" : "ltr";
  const isRTL = locale === "ar";
  const t = translations[locale];

  const formatPrice = (price: number) => {
    return formatPriceSAR(price, locale);
  };

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        toggleLocale,
        t,
        dir,
        isRTL,
        formatPrice,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
