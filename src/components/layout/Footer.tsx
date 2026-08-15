"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BRANCHES_DATA } from "@/data/branches";
import { REPUTATION_STATS } from "@/data/testimonials";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Star,
  ShieldCheck,
  Scissors,
  ArrowUpRight,
} from "lucide-react";
import { createWhatsAppLink, WHATSAPP_DISPLAY } from "@/lib/utils";

export const Footer: React.FC = () => {
  const { t, locale, isRTL } = useLanguage();

  const footerWaMsg =
    locale === "ar"
      ? "مرحباً بكم في المختار (Top Choice). أود التواصل بخصوص التشكيلات والمواعيد في الرياض."
      : "Hello Al-Mukhtar (Top Choice). I would like to inquire regarding collections and fittings in Riyadh.";
  const waUrl = createWhatsAppLink(footerWaMsg);

  return (
    <footer className="bg-charcoal-500 border-t border-gold-500/20 text-cream-300 relative overflow-hidden">
      {/* Subtle background ambient gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gold-500/5 blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand & Manifesto (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <span className="font-arabic text-3xl font-bold text-white">
                  المختار
                </span>
                <span className="h-4 w-px bg-gold-500/40" />
                <span className="text-sm font-semibold tracking-widest uppercase text-gold-400">
                  TOP CHOICE
                </span>
              </div>
              <p className="text-xs text-cream-400 mt-1 uppercase tracking-wider">
                {locale === "ar"
                  ? "بوتيك الأزياء الرجالية الفاخرة • الرياض"
                  : "Luxury Menswear House • Al Olaya, Riyadh"}
              </p>
            </div>

            <p className="text-sm text-cream-400/90 leading-relaxed">
              {locale === "ar"
                ? "وجهة الرجل الأنيق في الرياض منذ سنوات. تشكيلة منتقاة من البدلات، التوكسيدو، المعاطف، الكاجوال، وإكسسوارات الحرير الإيطالي مع خدمة تعديل المقاسات الاحترافية."
                : "Riyadh's definitive multi-brand menswear house. A disciplined edit of Landini Milano, Pal Zileri, and Bugatti paired with master in-house tailoring."}
            </p>

            {/* Google Rating Trust Badge */}
            <div className="p-3.5 bg-charcoal-300/80 rounded-xl border border-gold-500/25 flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gold-500/15 text-gold-400">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-bold text-white">{REPUTATION_STATS.rating}</span>
                  <div className="flex text-gold-400 text-xs">
                    {"★".repeat(5)}
                  </div>
                </div>
                <span className="text-xs text-cream-400">
                  {locale === "ar"
                    ? `أكثر من ${REPUTATION_STATS.totalReviews} تقييم موثق على Google`
                    : `Based on ${REPUTATION_STATS.totalReviews}+ Google reviews`}
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links & Categories (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-gold-400">
              {locale === "ar" ? "التشكيلات والخدمات" : "Collections & Fit"}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/collections?category=suits-blazers"
                  className="text-cream-400 hover:text-gold-300 flex items-center gap-1 transition-colors"
                >
                  <span>{locale === "ar" ? "البدلات والتوكسيدو والبليزرات" : "Suits, Tuxedos & Blazers"}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/collections?category=shirts-knitwear"
                  className="text-cream-400 hover:text-gold-300 flex items-center gap-1 transition-colors"
                >
                  <span>{locale === "ar" ? "القمصان وتريكو الكشمير" : "Shirts & Cashmere Knitwear"}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/collections?category=casual-denim"
                  className="text-cream-400 hover:text-gold-300 flex items-center gap-1 transition-colors"
                >
                  <span>{locale === "ar" ? "الكاجوال وجينز بوغاتي" : "Casual Wear & Bugatti Denim"}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/collections?category=outerwear"
                  className="text-cream-400 hover:text-gold-300 flex items-center gap-1 transition-colors"
                >
                  <span>{locale === "ar" ? "المعاطف والجاكيتات الشتوية" : "Overcoats & Outerwear"}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/collections?category=shoes-accessories"
                  className="text-cream-400 hover:text-gold-300 flex items-center gap-1 transition-colors"
                >
                  <span>{locale === "ar" ? "الأحذية وربطات الحرير والكبكات" : "Shoes, Silk Ties & Accessories"}</span>
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href="/tailoring"
                  className="text-gold-400 font-semibold hover:text-gold-300 flex items-center gap-1.5 transition-colors"
                >
                  <Scissors className="w-3.5 h-3.5" />
                  <span>{locale === "ar" ? "حجز جلسة قياس خاصة" : "Book In-House Fitting"}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 & 4: Dual Branches Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-gold-400">
              {locale === "ar" ? "فروعنا في حي العليا، الرياض" : "Our Al Olaya Branches"}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BRANCHES_DATA.map((branch) => (
                <div
                  key={branch.id}
                  className="p-3.5 rounded-xl bg-charcoal-400/90 border border-gold-500/15 flex flex-col justify-between space-y-2.5"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h5 className="font-bold text-white text-xs">
                        {locale === "ar" ? branch.nameAr : branch.nameEn}
                      </h5>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-gold-500/20 text-gold-300 font-mono">
                        {branch.postalCode}
                      </span>
                    </div>

                    <p className="text-xs text-cream-400 mt-1 flex items-start gap-1.5">
                      <MapPin className="w-3 h-3 text-gold-400 shrink-0 mt-0.5" />
                      <span>{locale === "ar" ? branch.addressAr : branch.addressEn}</span>
                    </p>

                    <p className="text-[11px] text-cream-500 mt-1 flex items-start gap-1.5">
                      <Clock className="w-3 h-3 text-cream-400 shrink-0 mt-0.5" />
                      <span>
                        {locale === "ar" ? branch.hoursAr.weekdays : branch.hoursEn.weekdays}
                      </span>
                    </p>
                  </div>

                  <div className="pt-2 border-t border-gold-500/10 flex items-center justify-between">
                    <a
                      href={branch.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-gold-400 hover:text-gold-300 font-semibold flex items-center gap-0.5"
                    >
                      <span>{locale === "ar" ? "الخريطة" : "Map"}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>

                    <a
                      href={branch.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Contact Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-cream-400">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-400 hover:underline font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
              </a>
              <Link href="/contact" className="hover:text-gold-300">
                {locale === "ar" ? "صفحة التواصل الكاملة" : "Full Contact Page"} →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="mt-12 pt-6 border-t border-gold-500/15 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-500 gap-4">
          <div className="flex items-center gap-2">
            <span>
              © {new Date().getFullYear()} {locale === "ar" ? "المختار (Top Choice)" : "Al-Mukhtar (Top Choice)"}.{" "}
              {t.common.allRightsReserved}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/story" className="hover:text-gold-400 transition-colors">
              {t.nav.story}
            </Link>
            <Link href="/branches" className="hover:text-gold-400 transition-colors">
              {t.nav.branches}
            </Link>
            <Link href="/gallery" className="hover:text-gold-400 transition-colors">
              {t.nav.gallery}
            </Link>
            <Link href="/contact" className="hover:text-gold-400 transition-colors">
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
