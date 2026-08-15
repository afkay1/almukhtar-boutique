"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { GALLERY_ITEMS, GalleryCategory, GalleryItem } from "@/data/gallery";
import {
  Camera,
  Play,
  X,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

export default function GalleryPage() {
  const { t, locale, isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: "all", label: t.gallery.filterAll },
    { id: "storefront", label: t.gallery.filterStorefront },
    { id: "interior", label: t.gallery.filterInterior },
    { id: "suiting", label: t.gallery.filterSuiting },
    { id: "casual", label: t.gallery.filterCasual },
    { id: "accessories", label: t.gallery.filterAccessories },
    { id: "video", label: t.gallery.filterVideo },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  const openLightbox = (item: GalleryItem) => {
    setActiveItem(item);
  };

  const closeLightbox = () => {
    setActiveItem(null);
  };

  const nextLightbox = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveItem(filteredItems[nextIndex]);
  };

  const prevLightbox = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveItem(filteredItems[prevIndex]);
  };

  return (
    <div className="py-12 sm:py-16 bg-charcoal-500 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>{locale === "ar" ? "أروقة وتفاصيل البوتيك • الرياض" : "Visual Anthology • Al Olaya"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="gold-gradient-text">{t.gallery.title}</span>
          </h1>

          <p className="text-cream-400 text-base sm:text-lg leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Filter Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none justify-start lg:justify-center">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-gold-500 text-charcoal-500 font-bold shadow-gold-glow"
                    : "bg-charcoal-300/80 text-cream-300 hover:text-white hover:bg-charcoal-200 border border-gold-500/20"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const title = locale === "ar" ? item.titleAr : item.titleEn;
            const subtitle = locale === "ar" ? item.subtitleAr : item.subtitleEn;

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className="luxury-card rounded-2xl overflow-hidden cursor-pointer group flex flex-col justify-between"
              >
                {/* Media Container */}
                <div className="relative h-72 w-full bg-charcoal-300 overflow-hidden img-zoom-container">
                  {item.type === "video" ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={item.thumbnail || "/images/2.png"}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-gold-500/90 text-charcoal-500 flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 fill-current ml-1 rtl:mr-1 rtl:ml-0" />
                        </div>
                      </div>
                      <div className="absolute top-3 left-3 rtl:right-3 rtl:left-auto px-2.5 py-1 rounded-md bg-black/80 text-gold-400 text-[10px] font-bold border border-gold-500/40">
                        {t.gallery.videoBadge}
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={item.src}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-500/80 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity" />

                      <div className="absolute bottom-3 right-3 rtl:left-3 rtl:right-auto opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg bg-black/70 text-gold-400">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Captions */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-gold-300 transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs text-cream-400 line-clamp-2 leading-relaxed">
                    {subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-lg animate-fade-in"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl overflow-hidden glass-modal shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 rtl:left-4 rtl:right-auto z-30 p-2 rounded-full bg-black/70 hover:bg-gold-500 hover:text-charcoal-500 text-cream-200 transition-all border border-gold-500/30"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev/Next Buttons */}
            <button
              onClick={prevLightbox}
              className="absolute left-4 rtl:right-4 rtl:left-auto top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/70 hover:bg-gold-500 hover:text-charcoal-500 text-cream-200 transition-all border border-gold-500/30"
              aria-label="Previous Media"
            >
              <ChevronLeft className="w-6 h-6 rtl:rotate-180" />
            </button>

            <button
              onClick={nextLightbox}
              className="absolute right-4 rtl:left-4 rtl:right-auto top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/70 hover:bg-gold-500 hover:text-charcoal-500 text-cream-200 transition-all border border-gold-500/30"
              aria-label="Next Media"
            >
              <ChevronRight className="w-6 h-6 rtl:rotate-180" />
            </button>

            {/* Media Content */}
            <div className="relative min-h-[400px] sm:min-h-[550px] bg-black flex items-center justify-center">
              {activeItem.type === "video" ? (
                <video
                  src={activeItem.src}
                  controls
                  autoPlay
                  className="w-full max-h-[70vh] object-contain"
                />
              ) : (
                <div className="relative w-full h-[65vh]">
                  <Image
                    src={activeItem.src}
                    alt={locale === "ar" ? activeItem.titleAr : activeItem.titleEn}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
              )}
            </div>

            {/* Lightbox Footer Captions */}
            <div className="p-6 bg-charcoal-400 border-t border-gold-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold text-white">
                  {locale === "ar" ? activeItem.titleAr : activeItem.titleEn}
                </h4>
                <p className="text-xs text-cream-400 mt-1">
                  {locale === "ar" ? activeItem.subtitleAr : activeItem.subtitleEn}
                </p>
              </div>

              <span className="text-xs font-mono text-gold-400 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 shrink-0">
                {locale === "ar" ? "بوتيك المختار • العليا" : "Al-Mukhtar Boutique • Olaya"}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
