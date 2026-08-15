import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_PHONE = "+966597193831";
export const WHATSAPP_DISPLAY = "+966 59 719 3831";

export function createWhatsAppLink(message: string): string {
  const cleanPhone = "966597193831";
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

export function formatPriceSAR(price: number, locale: "en" | "ar" = "en"): string {
  if (locale === "ar") {
    return `${price.toLocaleString("ar-SA")} ر.س`;
  }
  return `${price.toLocaleString("en-US")} SAR`;
}
