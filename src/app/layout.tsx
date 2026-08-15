import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Al-Mukhtar (المختار) | Top Choice Luxury Menswear Boutique — Al Olaya, Riyadh",
  description:
    "Al-Mukhtar (Top Choice) is Riyadh's premier multi-brand menswear house in Al Olaya. Curated collections of Landini Milano, Pal Zileri, and Bugatti suiting, overcoats, knitwear, and in-house precision tailoring.",
  keywords: [
    "Al Mukhtar",
    "المختار",
    "Top Choice",
    "Menswear Riyadh",
    "Suits Riyadh",
    "Pal Zileri Saudi Arabia",
    "Landini Milano",
    "Bugatti menswear",
    "Al Olaya fashion",
    "Tuxedo fitting Riyadh",
    "خياطة بدلات الرياض",
    "ملابس رجالية العليا",
  ],
  authors: [{ name: "Al-Mukhtar Top Choice" }],
  creator: "Al-Mukhtar Boutique",
  openGraph: {
    title: "Al-Mukhtar (المختار) | Luxury Menswear Boutique — Al Olaya, Riyadh",
    description:
      "Curated European luxury tailoring, Landini Milano, Pal Zileri, Bugatti, and in-house fitting studio on Olaya Street, Riyadh.",
    url: "https://almukhtar-boutique.sa",
    siteName: "Al-Mukhtar Boutique",
    images: [
      {
        url: "/images/2.png",
        width: 1200,
        height: 630,
        alt: "Al-Mukhtar Luxury Menswear Boutique Flagship in Al Olaya, Riyadh",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#0b0c0e] text-[#f7f5f0] min-h-screen flex flex-col antialiased selection:bg-gold-500 selection:text-charcoal-500">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow pt-[72px] sm:pt-[80px]">{children}</main>
          <FloatingWhatsApp />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
