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
    <div
      id="formular"
      className="scroll-mt-28 min-h-[560px] rounded-hs-card border border-hs-line bg-white p-8 shadow-hs-soft"
    >
      <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-hs-pink">
        Kontaktformular
      </p>
      <h3 className="mt-3 text-[1.25rem] font-[600] leading-[1.3] text-hs-navy">
        Erste Infos zu dir
      </h3>
      <p className="mt-2 mb-6 text-[0.9rem] leading-[1.6] text-hs-body">
        Gib uns ein paar Infos über dich: vier kurze Fragen zum Anklicken, das dauert nur
        etwa 20 bis 30 Sekunden. Zum Schluss trägst du deine Kontaktdaten ein.
      </p>
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
