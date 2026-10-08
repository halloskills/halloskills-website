"use client";

import { useEffect } from "react";

const GTM_ID = "GTM-WJQK9TC8";
const SCRIPT_ID = "gtm-script";

type ConsentState = { analytics: boolean; marketing: boolean };

function hasAnalyticsConsent(): boolean {
  try {
    const raw = localStorage.getItem("halloskills_consent");
    const consent: ConsentState | null = raw ? JSON.parse(raw) : null;
    return consent?.analytics === true;
  } catch {
    return false;
  }
}

/** Lädt den Google Tag Manager erst nach Einwilligung für Statistik. Vorher gibt es keine Verbindung zu googletagmanager.com. */
function loadGtm() {
  if (document.getElementById(SCRIPT_ID)) return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}

export function GtmLoader() {
  useEffect(() => {
    if (hasAnalyticsConsent()) loadGtm();

    const handler = (e: Event) => {
      const detail = (e as CustomEvent<ConsentState>).detail;
      if (detail?.analytics) loadGtm();
    };
    window.addEventListener("halloskills:consent-saved", handler);
    return () => window.removeEventListener("halloskills:consent-saved", handler);
  }, []);

  return null;
}
