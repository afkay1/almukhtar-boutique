"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookingSchema, BookingFormData } from "@/lib/validation";
import { useLanguage } from "@/context/LanguageContext";
import {
  Calendar,
  Clock,
  MapPin,
  Scissors,
  User,
  Phone,
  Mail,
  FileText,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export const BookingForm: React.FC = () => {
  const { t, locale, isRTL } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [successResponse, setSuccessResponse] = useState<{
    bookingId: string;
    whatsappUrl: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(BookingSchema),
    defaultValues: {
      branch: "fitting-studio",
      serviceType: "made-to-measure-suit",
      fabricPreference: "italian-wool",
      preferredDate: "",
      preferredTime: "05:00 PM",
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        setServerError(json.message || t.tailoring.formErrorGeneral);
      } else {
        setSuccessResponse({
          bookingId: json.bookingId,
          whatsappUrl: json.whatsappUrl,
        });
        reset();
      }
    } catch (err) {
      setServerError(t.tailoring.formErrorGeneral);
    } finally {
      setIsSubmitting(false);
    }
  };

  const timeSlots = [
    "11:00 AM",
    "12:30 PM",
    "02:00 PM",
    "03:30 PM",
    "05:00 PM",
    "06:30 PM",
    "08:00 PM",
    "09:30 PM",
  ];

  return (
    <div className="luxury-card rounded-3xl p-6 sm:p-10 border border-gold-500/30 relative">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Success Modal */}
      {successResponse && (
        <div className="mb-8 p-6 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-cream-200 animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div className="flex-grow">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-white">
                  {t.tailoring.formSuccessTitle}
                </h4>
                <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-900/60">
                  {successResponse.bookingId}
                </span>
              </div>
              <p className="text-sm text-cream-300 mt-2 leading-relaxed">
                {t.tailoring.formSuccessDesc}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={successResponse.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{t.tailoring.formSuccessWhatsAppButton}</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSuccessResponse(null)}
                  className="px-4 py-2 text-xs text-cream-400 hover:text-white"
                >
                  {t.common.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Form Error Banner */}
      {serverError && (
        <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 flex items-center gap-3 text-sm">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Row 1: Full Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-2">
              {t.tailoring.formFullName}
            </label>
            <div className="relative">
              <input
                type="text"
                {...register("fullName")}
                placeholder={t.tailoring.formFullNamePlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-charcoal-300 border border-gold-500/20 text-white placeholder-cream-500/50 focus:border-gold-500 focus:outline-none text-sm transition-colors"
              />
              <User className="absolute top-3.5 right-3.5 rtl:left-3.5 rtl:right-auto w-4 h-4 text-cream-500 pointer-events-none" />
            </div>
            {errors.fullName && (
              <p className="text-red-400 text-xs mt-1.5">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-2">
              {t.tailoring.formPhone}
            </label>
            <div className="relative">
              <input
                type="tel"
                {...register("phone")}
                placeholder={t.tailoring.formPhonePlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-charcoal-300 border border-gold-500/20 text-white placeholder-cream-500/50 focus:border-gold-500 focus:outline-none text-sm transition-colors"
              />
              <Phone className="absolute top-3.5 right-3.5 rtl:left-3.5 rtl:right-auto w-4 h-4 text-cream-500 pointer-events-none" />
            </div>
            {errors.phone && (
              <p className="text-red-400 text-xs mt-1.5">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Row 2: Email & Preferred Branch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-2">
              {t.tailoring.formEmail}
            </label>
            <div className="relative">
              <input
                type="email"
                {...register("email")}
                placeholder={t.tailoring.formEmailPlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-charcoal-300 border border-gold-500/20 text-white placeholder-cream-500/50 focus:border-gold-500 focus:outline-none text-sm transition-colors"
              />
              <Mail className="absolute top-3.5 right-3.5 rtl:left-3.5 rtl:right-auto w-4 h-4 text-cream-500 pointer-events-none" />
            </div>
            {errors.email && (
              <p className="text-red-400 text-xs mt-1.5">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-2">
              {t.tailoring.formBranch}
            </label>
            <div className="relative">
              <select
                {...register("branch")}
                className="w-full px-4 py-3 rounded-xl bg-charcoal-300 border border-gold-500/20 text-white focus:border-gold-500 focus:outline-none text-sm cursor-pointer"
              >
                <option value="fitting-studio">{t.tailoring.formBranchStudio}</option>
                <option value="flagship">{t.tailoring.formBranchFlagship}</option>
              </select>
              <MapPin className="absolute top-3.5 right-3.5 rtl:left-3.5 rtl:right-auto w-4 h-4 text-cream-500 pointer-events-none" />
            </div>
            {errors.branch && (
              <p className="text-red-400 text-xs mt-1.5">{errors.branch.message}</p>
            )}
          </div>
        </div>

        {/* Row 3: Service Type & Fabric Preference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-2">
              {t.tailoring.formServiceType}
            </label>
            <div className="relative">
              <select
                {...register("serviceType")}
                className="w-full px-4 py-3 rounded-xl bg-charcoal-300 border border-gold-500/20 text-white focus:border-gold-500 focus:outline-none text-sm cursor-pointer"
              >
                <option value="made-to-measure-suit">{t.tailoring.formServiceMTM}</option>
                <option value="alteration">{t.tailoring.formServiceAlteration}</option>
                <option value="blazer-fitting">{t.tailoring.formServiceBlazer}</option>
                <option value="trouser-adjustment">{t.tailoring.formServiceTrouser}</option>
                <option value="vip-styling-consultation">{t.tailoring.formServiceStyling}</option>
              </select>
              <Scissors className="absolute top-3.5 right-3.5 rtl:left-3.5 rtl:right-auto w-4 h-4 text-cream-500 pointer-events-none" />
            </div>
            {errors.serviceType && (
              <p className="text-red-400 text-xs mt-1.5">{errors.serviceType.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-2">
              {t.tailoring.formFabricPref}
            </label>
            <div className="relative">
              <select
                {...register("fabricPreference")}
                className="w-full px-4 py-3 rounded-xl bg-charcoal-300 border border-gold-500/20 text-white focus:border-gold-500 focus:outline-none text-sm cursor-pointer"
              >
                <option value="Super 140s / 150s Italian Virgin Wool">{t.tailoring.formFabricItalianWool}</option>
                <option value="Pure Italian Linen & Silk Blends">{t.tailoring.formFabricLinen}</option>
                <option value="Cashmere & Winter Wool Overcoats">{t.tailoring.formFabricCashmere}</option>
                <option value="In-Store Swatch Consultation with Stylist">{t.tailoring.formFabricInStore}</option>
              </select>
              <Sparkles className="absolute top-3.5 right-3.5 rtl:left-3.5 rtl:right-auto w-4 h-4 text-cream-500 pointer-events-none" />
            </div>
            {errors.fabricPreference && (
              <p className="text-red-400 text-xs mt-1.5">{errors.fabricPreference.message}</p>
            )}
          </div>
        </div>

        {/* Row 4: Preferred Date & Preferred Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-2">
              {t.tailoring.formDate}
            </label>
            <div className="relative">
              <input
                type="date"
                {...register("preferredDate")}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-3 rounded-xl bg-charcoal-300 border border-gold-500/20 text-white focus:border-gold-500 focus:outline-none text-sm cursor-pointer"
              />
            </div>
            {errors.preferredDate && (
              <p className="text-red-400 text-xs mt-1.5">{errors.preferredDate.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-2">
              {t.tailoring.formTime}
            </label>
            <div className="relative">
              <select
                {...register("preferredTime")}
                className="w-full px-4 py-3 rounded-xl bg-charcoal-300 border border-gold-500/20 text-white focus:border-gold-500 focus:outline-none text-sm cursor-pointer"
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              <Clock className="absolute top-3.5 right-3.5 rtl:left-3.5 rtl:right-auto w-4 h-4 text-cream-500 pointer-events-none" />
            </div>
            {errors.preferredTime && (
              <p className="text-red-400 text-xs mt-1.5">{errors.preferredTime.message}</p>
            )}
          </div>
        </div>

        {/* Row 5: Notes */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-2">
            {t.tailoring.formNotes}
          </label>
          <div className="relative">
            <textarea
              {...register("notes")}
              rows={3}
              placeholder={t.tailoring.formNotesPlaceholder}
              className="w-full px-4 py-3 rounded-xl bg-charcoal-300 border border-gold-500/20 text-white placeholder-cream-500/50 focus:border-gold-500 focus:outline-none text-sm resize-none"
            />
            <FileText className="absolute top-3.5 right-3.5 rtl:left-3.5 rtl:right-auto w-4 h-4 text-cream-500 pointer-events-none" />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2.5 py-4 px-8 rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-brass text-charcoal-500 font-bold text-sm tracking-wider uppercase shadow-gold-glow hover:brightness-110 disabled:opacity-50 transition-all"
          >
            <Scissors className="w-4 h-4" />
            <span>{isSubmitting ? t.tailoring.formSubmitting : t.tailoring.formSubmit}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
