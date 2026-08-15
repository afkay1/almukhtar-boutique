"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { X, MessageCircle, CheckCircle2, Shield, Sparkles, Tag } from "lucide-react";
import { createWhatsAppLink } from "@/lib/utils";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { t, locale, formatPrice, isRTL } = useLanguage();

  if (!product) return null;

  const productName = locale === "ar" ? product.nameAr : product.nameEn;
  const productDesc = locale === "ar" ? product.descriptionAr : product.descriptionEn;
  const productFabric = locale === "ar" ? product.fabricAr : product.fabricEn;

  const inquiryMsg =
    locale === "ar"
      ? `مرحباً بكم في المختار (Top Choice). أود الاستفسار عن توفر المقاسات وتجربة القطعة:\n\n*القطعة:* ${product.nameAr}\n*الماركة:* ${product.brand}\n*السعر:* ${formatPrice(product.priceSAR)}\n\nفي فرع العليا، الرياض.`
      : `Hello Al-Mukhtar (Top Choice). I would like to inquire about size availability and trial for:\n\n*Product:* ${product.nameEn}\n*Brand:* ${product.brand}\n*Price:* ${formatPrice(product.priceSAR)}\n\nat your Al Olaya boutique in Riyadh.`;

  const waUrl = createWhatsAppLink(inquiryMsg);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="glass-modal relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl my-auto text-cream-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rtl:left-4 rtl:right-auto z-20 p-2 rounded-full bg-black/60 hover:bg-gold-500 hover:text-charcoal-500 text-cream-300 transition-all border border-gold-500/30"
          aria-label="Close product modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Showcase */}
          <div className="relative min-h-[350px] md:min-h-[480px] bg-charcoal-400">
            <Image
              src={product.image}
              alt={productName}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-500/80 via-transparent to-transparent md:hidden" />

            {/* Brand Badge */}
            <div className="absolute top-4 left-4 rtl:right-4 rtl:left-auto z-10">
              <span className="px-3 py-1 rounded-full bg-charcoal-400/90 text-gold-400 text-xs font-bold border border-gold-500/40 backdrop-blur-md">
                {product.brand}
              </span>
            </div>
          </div>

          {/* Details & WhatsApp Deep Link */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Status */}
              <div className="flex items-center justify-between mb-2 text-xs text-cream-400">
                <span className="font-semibold uppercase tracking-wider text-gold-400/90">
                  {product.brand}
                </span>
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t.common.inStock}</span>
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {productName}
              </h3>

              {/* Price */}
              <div className="mb-5">
                <span className="text-2xl font-bold text-gold-400">
                  {formatPrice(product.priceSAR)}
                </span>
                <span className="text-xs text-cream-400 block mt-0.5">
                  {locale === "ar" ? "شامل ضريبة القيمة المضافة • متاح في فرع العليا" : "Inclusive of VAT • In boutique at Al Olaya"}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-cream-300 leading-relaxed mb-6">
                {productDesc}
              </p>

              {/* Fabric Specs */}
              <div className="p-4 rounded-xl bg-charcoal-300/80 border border-gold-500/20 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-1.5 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  <span>{t.collections.modalFabricDetails}</span>
                </h4>
                <p className="text-xs text-cream-300 font-medium">
                  {productFabric}
                </p>
              </div>

              {/* Tailoring perk */}
              <div className="flex items-center gap-2 text-xs text-cream-400 mb-6">
                <Shield className="w-4 h-4 text-gold-400 shrink-0" />
                <span>
                  {locale === "ar"
                    ? "تتوفر خدمة تعديل المقاسات الفورية في استوديو خياطة المختار بالعليا."
                    : "Complimentary sizing consultation & in-house alterations available at Olaya studio."}
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="pt-4 border-t border-gold-500/15">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm shadow-xl shadow-emerald-950/50 hover:scale-[1.01] transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{t.collections.enquireProduct} (+966 59 719 3831)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
