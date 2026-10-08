import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import { SiteChrome } from "@/components/SiteChrome";
import { CookieBanner } from "@/components/CookieBanner";
import { HubSpotLoader } from "@/components/HubSpotLoader";
import { GtmLoader } from "@/components/GtmLoader";

// Lokal gehostet (next/font), kein Abruf bei Google. Wird vom alten Seitendesign als Fließtextschrift genutzt.
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
});

// Rebrand 2026 — als CSS-Variable, damit nur der .hs-v2 Scope sie nutzt
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.halloskills.de"),
  title: "HalloSkills | Kostenlose Weiterbildung mit Bildungsgutschein",
  description:
    "Online-Weiterbildungen für Arbeitssuchende in Projektmanagement, Online Marketing und KI & Digitalisierung. Jetzt Beratung buchen.",
  keywords: [
    "Bildungsgutschein",
    "geförderte Weiterbildung",

    "Projektmanagement Kurs",
    "Online Marketing Weiterbildung",
    "KI Digitalisierung",
    "Arbeitssuchende",
  ],
  openGraph: {
    title: "HalloSkills | Kostenlose Weiterbildung mit Bildungsgutschein",
    description:
      "100% geförderte Online-Weiterbildungen für Arbeitssuchende. Jetzt kostenlose Beratung buchen.",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/bilder/hero-og-ai-d.jpg",
        width: 1200,
        height: 630,
        alt: "HalloSkills – Kostenlose Weiterbildung mit Bildungsgutschein (KI-generiert)",
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
    <html lang="de" className={`h-full scroll-smooth ${montserrat.variable} ${dmSans.variable}`}>
      <head>
        {/* Consent-Status aus einem früheren Besuch schon vor GTM ins
            dataLayer schreiben, damit Tags mit Consent-Trigger den
            richtigen Stand sehen statt erst auf den nächsten Klick zu warten. */}
        <Script id="hs-consent-default" strategy="beforeInteractive">
          {`
            (function () {
              window.dataLayer = window.dataLayer || [];
              var stored = null;
              try {
                var raw = localStorage.getItem("halloskills_consent");
                stored = raw ? JSON.parse(raw) : null;
              } catch (e) {}
              window.dataLayer.push({
                event: "consent_update",
                consent: stored || { analytics: false, marketing: false },
              });
            })();
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {/* HubSpot-Tracking-Code — bewusst als type="text/plain" im HTML
            vorhanden (damit HubSpots eigener Install-Check das Skript im
            Quelltext findet), aber inaktiv. HubSpotLoader.tsx aktiviert es
            erst nach erteilter Marketing-Zustimmung. */}
        <script
          id="hs-script-loader"
          type="text/plain"
          data-consent="marketing"
          async
          defer
          src="//js-eu1.hs-scripts.com/148403220.js"
        />
        <SiteChrome>{children}</SiteChrome>
        <CookieBanner />
        <HubSpotLoader />
        {/* GTM lädt erst nach Einwilligung für Statistik (GtmLoader), nicht schon beim Seitenaufruf. */}
        <GtmLoader />
      </body>
    </html>
  );
}
