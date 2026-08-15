"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import {
  PRODUCTS_DATA,
  ProductCategory,
  ProductBrand,
  Product,
} from "@/data/products";
import { ProductCard } from "@/components/collections/ProductCard";
import { ProductModal } from "@/components/collections/ProductModal";
import { Filter, Sparkles, Tag, Check, RefreshCw } from "lucide-react";

function CollectionsContent() {
  const { t, locale } = useLanguage();
  const searchParams = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const brandParam = searchParams.get("brand");

    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    if (brandParam) {
      setSelectedBrand(brandParam);
    }
  }, [searchParams]);

  const categories = [
    { id: "all", label: t.collections.filterAll },
    { id: "suits-blazers", label: t.collections.filterSuits },
    { id: "shirts-knitwear", label: t.collections.filterShirts },
    { id: "casual-denim", label: t.collections.filterCasual },
    { id: "outerwear", label: t.collections.filterOuterwear },
    { id: "shoes-accessories", label: t.collections.filterShoes },
  ];

  const brands: { id: string; label: string }[] = [
    { id: "all", label: t.collections.allBrands },
    { id: "Landini Milano", label: "Landini Milano (In-House)" },
    { id: "Pal Zileri", label: "Pal Zileri (Italian Tailoring)" },
    { id: "Bugatti", label: "Bugatti (Outerwear & Casual)" },
  ];

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchBrand =
      selectedBrand === "all" || product.brand === selectedBrand;
    return matchCategory && matchBrand;
  });

  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedBrand("all");
  };

  return (
    <div className="py-12 sm:py-16 bg-charcoal-500 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{locale === "ar" ? "أزياء رجالية راقية • الرياض" : "Curated Menswear Catalog"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="gold-gradient-text">{t.collections.title}</span>
          </h1>

          <p className="text-cream-400 text-base sm:text-lg leading-relaxed">
            {t.collections.subtitle}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-charcoal-400/90 border border-gold-500/20 rounded-2xl p-5 mb-10 shadow-xl backdrop-blur-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? "bg-gold-500 text-charcoal-500 font-bold shadow-gold-glow"
                        : "bg-charcoal-300 text-cream-300 hover:text-white hover:bg-charcoal-200 border border-gold-500/15"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Brand Filter Selector & Reset */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-2 bg-charcoal-300 px-3 py-1.5 rounded-xl border border-gold-500/20">
                <Tag className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span className="text-xs text-cream-400 font-medium hidden sm:inline">
                  {t.collections.filterBrands}:
                </span>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="bg-transparent text-xs text-cream-200 font-semibold focus:outline-none cursor-pointer pr-4"
                >
                  {brands.map((b) => (
                    <option key={b.id} value={b.id} className="bg-charcoal-400 text-white">
                      {b.label}
                    </option>
                  ))}
                </select>
              </div>

              {(selectedCategory !== "all" || selectedBrand !== "all") && (
                <button
                  onClick={resetFilters}
                  className="p-2 rounded-xl bg-charcoal-300 hover:bg-charcoal-200 text-gold-400 hover:text-white border border-gold-500/20 transition-all text-xs flex items-center gap-1"
                  title="Reset Filters"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Results Count Bar */}
          <div className="pt-4 mt-4 border-t border-gold-500/10 flex items-center justify-between text-xs text-cream-400">
            <span>
              {t.collections.showingResults} <strong className="text-gold-400">{filteredProducts.length}</strong> {locale === "ar" ? "قطع معروضة" : "items in boutique"}
            </span>

            <span className="text-gold-400/80 font-medium">
              {locale === "ar" ? "تعديل المقاسات الفوري متوفر بالاستوديو" : "In-house tailoring available for all pieces"}
            </span>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(p) => setActiveProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-charcoal-400/60 border border-gold-500/20 max-w-xl mx-auto">
            <p className="text-cream-300 text-sm mb-4">
              {t.collections.noProductsFound}
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 rounded-xl bg-gold-500 text-charcoal-500 font-bold text-xs shadow-gold-glow"
            >
              {locale === "ar" ? "إعادة تعيين التصفية" : "Reset All Filters"}
            </button>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      <ProductModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
      />
    </div>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-charcoal-500 flex items-center justify-center text-gold-400">Loading Collections...</div>}>
      <CollectionsContent />
    </Suspense>
  );
}
