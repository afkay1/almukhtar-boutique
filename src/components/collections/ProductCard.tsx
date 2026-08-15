"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle, Eye, Tag } from "lucide-react";
import { createWhatsAppLink } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const { t, locale, formatPrice } = useLanguage();

  const productName = locale === "ar" ? product.nameAr : product.nameEn;
  const productDesc = locale === "ar" ? product.descriptionAr : product.descriptionEn;

  const inquiryMsg =
    locale === "ar"
      ? `مرحباً بكم في المختار (Top Choice). أود الاستفسار عن توفر قطعة (${product.nameAr}) ماركة (${product.brand}) بسعر (${formatPrice(product.priceSAR)}) في فرع العليا.`
      : `Hello Al-Mukhtar (Top Choice). I would like to inquire about (${product.nameEn}) by (${product.brand}) priced at (${formatPrice(product.priceSAR)}) in Al Olaya.`;

  const waUrl = createWhatsAppLink(inquiryMsg);

  return (
    <div className="luxury-card rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300">
      {/* Image Container with Hover Action */}
      <div
        className="relative h-80 w-full bg-charcoal-300 overflow-hidden cursor-pointer img-zoom-container"
        onClick={() => onSelect(product)}
      >
        <Image
          src={product.image}
          alt={productName}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-500/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Brand Badge */}
        <div className="absolute top-3.5 left-3.5 rtl:right-3.5 rtl:left-auto z-10">
          <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-[11px] font-bold text-gold-400 border border-gold-500/30">
            {product.brand}
          </span>
        </div>

        {/* Hover Quick View Trigger */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
          <span className="px-4 py-2 rounded-lg bg-black/80 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-2 border border-gold-500/40 shadow-xl">
            <Eye className="w-3.5 h-3.5 text-gold-400" />
            <span>{t.collections.viewProductDetails}</span>
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Brand Subtitle */}
          <span className="text-[11px] font-medium tracking-wider uppercase text-gold-400/90 block mb-1">
            {product.brand}
          </span>

          {/* Product Title */}
          <h3
            onClick={() => onSelect(product)}
            className="text-base font-bold text-white mb-2 line-clamp-1 group-hover:text-gold-300 transition-colors cursor-pointer"
          >
            {productName}
          </h3>

          {/* Product Description */}
          <p className="text-xs text-cream-400 line-clamp-2 leading-relaxed mb-4">
            {productDesc}
          </p>
        </div>

        {/* Price & Action */}
        <div className="pt-3 border-t border-gold-500/15 flex items-center justify-between gap-2">
          <div>
            <span className="text-base font-bold text-gold-400">
              {formatPrice(product.priceSAR)}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => onSelect(product)}
              className="p-2 rounded-lg bg-charcoal-300 text-cream-300 hover:text-white hover:bg-charcoal-200 transition-all border border-gold-500/20"
              title={t.collections.viewProductDetails}
              aria-label="View Details"
            >
              <Eye className="w-4 h-4" />
            </button>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md flex items-center justify-center"
              title={t.collections.enquireProduct}
              aria-label="Enquire on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
