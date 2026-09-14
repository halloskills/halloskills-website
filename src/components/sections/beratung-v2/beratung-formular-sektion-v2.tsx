import React from "react";
import { Eyebrow } from "@/components/sections/startseite-v2/hs-ui";
import { BeratungHubspotFormularV2 } from "./beratung-hubspot-formular-v2";

function CheckKreis() {
  return (
    <span
      aria-hidden="true"
      className="flex size-5 shrink-0 items-center justify-center rounded-full bg-hs-navy text-white"
    >
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
        <path
          d="M1 4l2.5 2.5L9 1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

const punkte = [
  "Keine Wartezeit: wir melden uns innerhalb von 24 h",
  "Kostenlos & unverbindlich",
  "Gespräch per Telefon oder Videocall",
];

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
        {/* Überschrift & Intro */}
        <div className="max-w-[640px]">
          <Eyebrow>Kostenlose Beratung</Eyebrow>
          <h2 className="mt-6 text-[clamp(1.75rem,3.6vw,2.5rem)] leading-[1.16] text-balance">
            Schreib uns, wir melden uns bei dir.
          </h2>
          <p className="mt-5 text-[1rem] leading-[1.65] text-hs-body">
            Teile ein paar Details mit uns und wir melden uns innerhalb von 24 Stunden mit
            den nächsten Schritten bei dir. Kostenlos. Unverbindlich. Persönlich.
          </p>
        </div>

        {/* Formular & Trust Points */}
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-4 text-[0.85rem] leading-[1.6] text-hs-muted">
              Du musst noch nicht wissen, welcher Lehrgang der richtige ist.
              Genau das finden wir gemeinsam heraus.
            </p>
            <BeratungHubspotFormularV2 />
          </div>

          <div className="flex flex-col gap-4 lg:pt-2">
            {punkte.map((p) => (
              <div key={p} className="flex items-center gap-3">
                <CheckKreis />
                <span className="text-[0.9rem] text-hs-body">{p}</span>
              </div>
            ))}
          </div>
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
