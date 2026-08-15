"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown } from "lucide-react";

export const FaqAccordion: React.FC = () => {
  const { t, locale } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: t.contact.faq1Q, a: t.contact.faq1A },
    { q: t.contact.faq2Q, a: t.contact.faq2A },
    { q: t.contact.faq3Q, a: t.contact.faq3A },
    { q: t.contact.faq4Q, a: t.contact.faq4A },
    { q: t.contact.faq5Q, a: t.contact.faq5A },
    { q: t.contact.faq6Q, a: t.contact.faq6A },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className="rounded-2xl bg-charcoal-400/90 border border-gold-500/20 overflow-hidden transition-all"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full p-5 sm:p-6 text-left rtl:text-right flex items-center justify-between gap-4 text-white font-bold text-sm sm:text-base hover:text-gold-300 transition-colors"
            >
              <span>{faq.q}</span>
              <div
                className={`p-1.5 rounded-full bg-charcoal-300 text-gold-400 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-gold-500/20" : ""
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-cream-300/90 leading-relaxed border-t border-gold-500/10 pt-4 animate-fade-in">
                <p>{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
