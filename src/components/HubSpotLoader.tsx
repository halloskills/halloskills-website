"use client";

import { useEffect } from "react";

const HUBSPOT_SCRIPT_SRC = "//js-eu1.hs-scripts.com/148403220.js";
const SCRIPT_ID = "hs-script-loader";

type ConsentState = { analytics: boolean; marketing: boolean };

function hasMarketingConsent(): boolean {
  try {
    const raw = localStorage.getItem("halloskills_consent");
    const consent: ConsentState | null = raw ? JSON.parse(raw) : null;
    return consent?.marketing === true;
  } catch {
    return false;
  }
}

function loadHubSpot() {
  if (document.getElementById(SCRIPT_ID)) return;
  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.type = "text/javascript";
  script.async = true;
  script.defer = true;
  script.src = HUBSPOT_SCRIPT_SRC;
  document.body.appendChild(script);
}

/**
 * Lädt den HubSpot-Tracking-Code nur, wenn Marketing-Cookies zugestimmt
 * wurde (siehe CookieBanner.tsx) — kein automatisches Laden ohne Consent.
 */
export function HubSpotLoader() {
  useEffect(() => {
    if (hasMarketingConsent()) loadHubSpot();

    const handler = (e: Event) => {
      const detail = (e as CustomEvent<ConsentState>).detail;
      if (detail?.marketing) loadHubSpot();
    };
    window.addEventListener("halloskills:consent-saved", handler);
    return () => window.removeEventListener("halloskills:consent-saved", handler);
  }, []);

  return null;
}
