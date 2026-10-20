import React from "react";
import { Eyebrow } from "@/components/sections/startseite-v2/hs-ui";
import { BeratungHubspotFormularV2 } from "./beratung-hubspot-formular-v2";

const vorteile = [
  {
    titel: "Individuelle Lehrgangsberatung",
    text: "Kein Standard-Paket. Wir schauen gemeinsam, was zu dir, deinen Zielen und deiner Lebenssituation passt.",
  },
  {
    titel: "Passender Lehrgang",
    text: "Anhand deiner Antworten empfehlen wir dir den Lehrgang, der wirklich zu deiner Situation passt.",
  },
  {
    titel: "Persönliche Betreuung",
    text: "Dein fester Ansprechpartner von der ersten Beratung bis zum Lehrgangsabschluss und darüber hinaus.",
  },
];

export function BeratungFormularSektionV2() {
  return (
    <section className="px-6 py-20 md:px-10 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Überschrift & Formular */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <Eyebrow>Kostenlose Beratung</Eyebrow>
            <h2 className="mt-6 text-[clamp(1.75rem,3.6vw,2.5rem)] leading-[1.16] text-balance">
              In wenigen Klicks zu deiner Beratung.
            </h2>
            <p className="mt-5 max-w-[440px] text-[1rem] leading-[1.65] text-hs-body">
              Fülle das Kontaktformular aus. Danach bekommst du eine E-Mail, in der du dir
              deinen Wunschtermin für ein kostenloses, unverbindliches Gespräch per Telefon
              oder Videocall aussuchen kannst. Dort klären wir dann alle deine Fragen.
            </p>
          </div>

          <BeratungHubspotFormularV2 />
        </div>

        {/* Vorteile */}
        <div className="mt-16 grid gap-8 border-t border-hs-line pt-12 sm:grid-cols-3">
          {vorteile.map((v) => (
            <div key={v.titel}>
              <h3 className="text-[0.9375rem] font-[600] text-hs-navy">{v.titel}</h3>
              <p className="mt-1.5 text-[0.85rem] leading-[1.6] text-hs-muted">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
