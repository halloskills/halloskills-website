"use client";

import { useEffect } from "react";

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

/**
 * Aktiviert den inerten HubSpot-Platzhalter aus layout.tsx (type="text/plain")
 * durch Ersetzen mit einem echten, ausführbaren <script>-Tag. Der Platzhalter
 * bleibt beim ersten Laden im Quelltext stehen, damit HubSpots eigener
 * Install-Check das Skript findet, auch ohne Consent.
 */
function loadHubSpot() {
  const placeholder = document.getElementById(SCRIPT_ID);
  if (!placeholder || placeholder.getAttribute("type") !== "text/plain") return;

  const real = document.createElement("script");
  real.id = SCRIPT_ID;
  real.type = "text/javascript";
  real.async = true;
  real.defer = true;
  real.src = placeholder.getAttribute("src") || "";
  placeholder.replaceWith(real);
}

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
