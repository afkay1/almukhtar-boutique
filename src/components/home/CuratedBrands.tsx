"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, ArrowLeft, Award, Sparkles } from "lucide-react";

export const CuratedBrands: React.FC = () => {
  const { t, locale, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const brands = [
    {
      name: "Landini Milano",
      nameAr: "لانديني ميلانو",
      origin: "In-House Label • Made in Italy",
      originAr: "علامتنا الخاصة • صناعة إيطالية",
      title: t.home.brandLandiniTitle,
      desc: t.home.brandLandiniDesc,
      image: "/images/24.png",
      href: "/collections?brand=Landini+Milano",
      tag: "Signature House Brand",
    },
    {
      name: "Pal Zileri",
      nameAr: "بال زيليري",
      origin: "Quinto Vicentino, Italy",
      originAr: "فيتشنزا، إيطاليا",
      title: t.home.brandPalZileriTitle,
      desc: t.home.brandPalZileriDesc,
      image: "/images/25.png",
      href: "/collections?brand=Pal+Zileri",
      tag: "Sartoriale Luxury Tailoring",
    },
    {
      name: "Bugatti",
      nameAr: "بوغاتي",
      origin: "Herford, Germany",
      originAr: "هيرفورد، ألمانيا",
      title: t.home.brandBugattiTitle,
      desc: t.home.brandBugattiDesc,
      image: "/images/28.png",
      href: "/collections?brand=Bugatti",
      tag: "Technical Outerwear & Casual",
    },
  ];

  return (
    <section className="py-24 bg-charcoal-500 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-3 block">
              Multi-Brand Portfolio / علامات مختارة
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t.home.curationTitle}
            </h2>
            <p className="text-cream-400 text-base sm:text-lg leading-relaxed">
              {t.home.curationSubtitle}
            </p>
          </div>

          <Link
            href="/story"
            className="inline-flex items-center gap-2 text-sm font-bold text-gold-400 hover:text-gold-300 transition-colors shrink-0"
          >
            <span>{locale === "ar" ? "تعرف على فلسفة الانتقاء" : "Learn Our Curation Philosophy"}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Brands Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {brands.map((b, idx) => (
            <div
              key={idx}
              className="luxury-card rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              {/* Image Container */}
              <div className="relative h-72 w-full bg-charcoal-300 overflow-hidden img-zoom-container">
                <Image
                  src={b.image}
                  alt={b.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-400 via-transparent to-black/30" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-bold text-gold-400 border border-gold-500/30">
                    {b.tag}
                  </span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-7 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-gold-300 transition-colors">
                      {locale === "ar" ? b.nameAr : b.name}
                    </h3>
                    <span className="text-xs text-cream-500 font-medium">
                      {locale === "ar" ? b.originAr : b.origin}
                    </span>
                  </div>

                  <p className="text-sm text-cream-400/90 leading-relaxed mt-3 mb-6">
                    {b.desc}
                  </p>
                </div>

                <Link
                  href={b.href}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-gold-500/15 text-sm font-semibold text-gold-400 group-hover:text-gold-300 transition-colors"
                >
                  <span>{locale === "ar" ? `استكشف تشكيلة ${b.nameAr}` : `Explore ${b.name}`}</span>
                  <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
