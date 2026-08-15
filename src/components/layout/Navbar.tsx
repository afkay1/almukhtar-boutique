"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { Menu, X, Scissors, MessageCircle, MapPin, Sparkles } from "lucide-react";
import { createWhatsAppLink } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const { t, locale, isRTL } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/collections", label: t.nav.collections },
    { href: "/tailoring", label: t.nav.tailoring },
    { href: "/branches", label: t.nav.branches },
    { href: "/story", label: t.nav.story },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/contact", label: t.nav.contact },
  ];

  const quickWaMsg =
    locale === "ar"
      ? "مرحباً بكم في المختار (Top Choice). أود التواصل مع مستشار الأناقة في فرع العليا."
      : "Hello Al-Mukhtar (Top Choice). I would like to connect with a stylist at your Al Olaya boutique.";
  const waUrl = createWhatsAppLink(quickWaMsg);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b0c0e]/95 backdrop-blur-md border-b border-gold-500/20 shadow-2xl py-3.5"
          : "bg-gradient-to-b from-[#0b0c0e]/90 via-[#0b0c0e]/50 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Al-Mukhtar Home"
          >
            <div className="relative flex flex-col items-start">
              <div className="flex items-center gap-2">
                <span className="font-arabic text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-gold-400 transition-colors">
                  المختار
                </span>
                <span className="h-4 w-px bg-gold-500/40 hidden sm:block" />
                <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-gold-400/90 hidden sm:block">
                  TOP CHOICE
                </span>
              </div>
              <span className="text-[10px] tracking-widest uppercase text-cream-400/70 font-medium">
                {locale === "ar" ? "أزياء رجالية فاخرة • الرياض" : "Luxury Menswear • Al Olaya, Riyadh"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-md relative ${
                    isActive
                      ? "text-gold-400 font-semibold"
                      : "text-cream-300 hover:text-white hover:bg-charcoal-300/60"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-gold-500 to-brass rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Lang Toggle + WhatsApp + Fitting Button */}
          <div className="hidden sm:flex items-center gap-3">
            <LanguageToggle />

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gold-500/30 text-cream-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-charcoal-200 transition-all"
              title={t.nav.whatsappUs}
              aria-label="Direct WhatsApp Link"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <Link
              href="/tailoring"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-gold-600 via-gold-500 to-brass-light text-charcoal-500 rounded-lg hover:brightness-110 shadow-gold-glow transition-all"
            >
              <Scissors className="w-3.5 h-3.5" />
              <span>{t.nav.bookFitting}</span>
            </Link>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <LanguageToggle variant="minimal" />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-charcoal-200 border border-gold-500/30 text-cream-200 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-charcoal-400/98 backdrop-blur-2xl border-b border-gold-500/25 shadow-2xl p-5 animate-fade-in">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive
                      ? "bg-gold-500/15 text-gold-400 font-bold border-r-2 border-gold-500"
                      : "text-cream-300 hover:bg-charcoal-200 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-gold-500/20 flex flex-col gap-3">
              <Link
                href="/tailoring"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-gold-600 to-gold-400 text-charcoal-500 rounded-lg shadow-gold-glow"
              >
                <Scissors className="w-4 h-4" />
                <span>{t.nav.bookFitting}</span>
              </Link>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold rounded-lg border border-emerald-500/40 text-emerald-400 hover:bg-emerald-950/30 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.nav.whatsappUs} (+966 59 719 3831)</span>
              </a>

              <div className="flex items-center justify-center gap-2 text-xs text-cream-400/80 pt-1">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <span>{locale === "ar" ? "شارع العليا، الرياض" : "Olaya Street, Riyadh"}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
