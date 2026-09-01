import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { SiteChrome } from "@/components/SiteChrome";
import { CookieBanner } from "@/components/CookieBanner";

const GTM_ID = "GTM-WJQK9TC8";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
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
    <html lang="de" className={`h-full scroll-smooth ${montserrat.variable}`}>
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
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <SiteChrome>{children}</SiteChrome>
        <CookieBanner />
      </body>
    </html>
  );
}
