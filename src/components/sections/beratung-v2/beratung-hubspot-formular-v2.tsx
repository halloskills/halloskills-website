"use client";

import Script from "next/script";

/**
 * Schritt-für-Schritt-Formular aus HubSpot (Formular-ID
 * b8265562-370e-4acf-a95a-f3db89a1244b, Portal 148403220, Region eu1) —
 * ersetzt das vorherige, selbstgebaute Quiz-Formular. Einbindung exakt
 * nach HubSpots eigenem Embed-Snippet.
 */
export function BeratungHubspotFormularV2() {
  return (
    <div id="formular" className="scroll-mt-28">
      <Script src="https://js-eu1.hsforms.net/forms/embed/148403220.js" strategy="afterInteractive" />
      <div
        className="hs-form-frame"
        data-region="eu1"
        data-form-id="b8265562-370e-4acf-a95a-f3db89a1244b"
        data-portal-id="148403220"
      />
    </div>
  );
}
