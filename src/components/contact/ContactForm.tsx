"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema, ContactFormData } from "@/lib/validation";
import { useLanguage } from "@/context/LanguageContext";
import {
  User,
  Mail,
  Phone,
  HelpCircle,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
} from "lucide-react";

export const ContactForm: React.FC = () => {
  const { t, locale } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [successResponse, setSuccessResponse] = useState<{ whatsappUrl: string } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        setServerError(json.message || "Failed to submit / تعذر إرسال الرسالة");
      } else {
        setSuccessResponse({ whatsappUrl: json.whatsappUrl });
        reset();
      }
    } catch (err) {
      setServerError("An error occurred / حدث خطأ أثناء الإرسال");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="luxury-card rounded-3xl p-6 sm:p-10 border border-gold-500/30 relative">
      {/* Success Notification */}
      {successResponse && (
        <div className="mb-6 p-6 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-cream-200 animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">
                {t.contact.successTitle}
              </h4>
              <p className="text-xs text-cream-300 leading-relaxed">
                {t.contact.successDesc}
              </p>
              <div className="mt-4">
                <a
                  href={successResponse.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{t.contact.successWhatsAppButton}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Server Error */}
      {serverError && (
        <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 flex items-center gap-3 text-xs">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-2">
            {t.contact.nameLabel}
          </label>
          <div className="relative">
            <input
              type="text"
              {...register("name")}
              placeholder={t.contact.namePlaceholder}
              className="w-full px-4 py-3 rounded-xl bg-charcoal-300 border border-gold-500/20 text-white placeholder-cream-500/50 focus:border-gold-500 focus:outline-none text-sm"
            />
            <User className="absolute top-3.5 right-3.5 rtl:left-3.5 rtl:right-auto w-4 h-4 text-cream-500 pointer-events-none" />
          </div>
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-2">
              {t.contact.emailLabel}
            </label>
            <div className="relative">
              <input
                type="email"
                {...register("email")}
                placeholder={t.contact.emailPlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-charcoal-300 border border-gold-500/20 text-white placeholder-cream-500/50 focus:border-gold-500 focus:outline-none text-sm"
              />
              <Mail className="absolute top-3.5 right-3.5 rtl:left-3.5 rtl:right-auto w-4 h-4 text-cream-500 pointer-events-none" />
            </div>
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-2">
              {t.contact.phoneLabel}
            </label>
            <div className="relative">
              <input
                type="tel"
                {...register("phone")}
                placeholder={t.contact.phonePlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-charcoal-300 border border-gold-500/20 text-white placeholder-cream-500/50 focus:border-gold-500 focus:outline-none text-sm"
              />
              <Phone className="absolute top-3.5 right-3.5 rtl:left-3.5 rtl:right-auto w-4 h-4 text-cream-500 pointer-events-none" />
            </div>
            {errors.phone && (
              <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-2">
            {t.contact.subjectLabel}
          </label>
          <div className="relative">
            <input
              type="text"
              {...register("subject")}
              placeholder={t.contact.subjectPlaceholder}
              className="w-full px-4 py-3 rounded-xl bg-charcoal-300 border border-gold-500/20 text-white placeholder-cream-500/50 focus:border-gold-500 focus:outline-none text-sm"
            />
            <HelpCircle className="absolute top-3.5 right-3.5 rtl:left-3.5 rtl:right-auto w-4 h-4 text-cream-500 pointer-events-none" />
          </div>
          {errors.subject && (
            <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-2">
            {t.contact.messageLabel}
          </label>
          <div className="relative">
            <textarea
              {...register("message")}
              rows={4}
              placeholder={t.contact.messagePlaceholder}
              className="w-full px-4 py-3 rounded-xl bg-charcoal-300 border border-gold-500/20 text-white placeholder-cream-500/50 focus:border-gold-500 focus:outline-none text-sm resize-none"
            />
            <MessageSquare className="absolute top-3.5 right-3.5 rtl:left-3.5 rtl:right-auto w-4 h-4 text-cream-500 pointer-events-none" />
          </div>
          {errors.message && (
            <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-4 px-8 rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-brass text-charcoal-500 font-bold text-sm tracking-wider uppercase shadow-gold-glow hover:brightness-110 disabled:opacity-50 transition-all"
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? t.contact.submittingButton : t.contact.submitButton}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
