import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar2 } from "@/components/Navbar";
import { Footer4 } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.halloskills.de"),
  title: "HalloSkills | Kostenlose Weiterbildung mit Bildungsgutschein – AZAV-zertifiziert",
  description:
    "Geförderte Online-Weiterbildungen für Arbeitssuchende. Projektmanagement, Online Marketing, KI & Digitalisierung – 100% kostenlos mit Bildungsgutschein. Jetzt Beratung buchen.",
  keywords: [
    "Bildungsgutschein",
    "geförderte Weiterbildung",
    "AZAV zertifiziert",
    "Projektmanagement Kurs",
    "Online Marketing Weiterbildung",
    "KI Digitalisierung",
    "Arbeitssuchende",
  ],
  openGraph: {
    title: "HalloSkills | Kostenlose Weiterbildung mit Bildungsgutschein",
    description:
      "100% geförderte Online-Weiterbildungen für Arbeitssuchende. AZAV-zertifiziert. Jetzt kostenlose Beratung buchen.",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/bilder/hero.png",
        width: 1200,
        height: 630,
        alt: "HalloSkills – Kostenlose Weiterbildung mit Bildungsgutschein",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col antialiased">
        <Navbar2 />
        <main className="flex-1">{children}</main>
        <Footer4 />
        <CookieBanner />
      </body>
    </html>
  );
}
