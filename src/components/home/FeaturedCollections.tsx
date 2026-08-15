"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { PRODUCTS_DATA, ProductCategory, Product } from "@/data/products";
import { ProductCard } from "@/components/collections/ProductCard";
import { ProductModal } from "@/components/collections/ProductModal";
import { ArrowRight, ArrowLeft, Layers } from "lucide-react";

export const FeaturedCollections: React.FC = () => {
  const { t, locale, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("suits-blazers");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories: { id: ProductCategory; label: string }[] = [
    { id: "suits-blazers", label: t.collections.filterSuits },
    { id: "shirts-knitwear", label: t.collections.filterShirts },
    { id: "casual-denim", label: t.collections.filterCasual },
    { id: "outerwear", label: t.collections.filterOuterwear },
    { id: "shoes-accessories", label: t.collections.filterShoes },
  ];

  const filteredProducts = PRODUCTS_DATA.filter((p) => p.category === activeCategory);
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-24 bg-charcoal-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-3 block">
              Seasonal Preview / إطلالات الموسم
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t.home.featuredTitle}
            </h2>
            <p className="text-cream-400 text-base sm:text-lg">
              {t.home.featuredSubtitle}
            </p>
          </div>

          <Link
            href="/collections"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-charcoal-300 border border-gold-500/30 text-gold-400 hover:text-white hover:bg-gold-500/20 font-bold text-sm transition-all shrink-0"
          >
            <span>{t.home.featuredAll}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
