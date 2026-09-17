import React from "react";
import type { Kurs } from "@/lib/kurse-data";
import { Eyebrow } from "@/components/sections/startseite-v2/hs-ui";

/**
 * Symbole je Zeile (Koffer, Checkliste, Laptop mit WLAN) — Bildvorlage
 * "Symbole.png" aus /Users/nina/Desktop/Bilder ersetzt hier den bisherigen
 * generischen Haken pro Zeile. Die drei Symbole werden für alle Lehrgänge
 * in derselben Reihenfolge verwendet (Beruf/Tätigkeit, Arbeitsweise,
 * ortsunabhängiges Online-Lernen), da die Bildvorlage für alle drei
 * Lehrgangs-Ordner identisch war.
 */
function IkonKoffer() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <rect x="3" y="8" width="18" height="11.5" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8.5 8V6.2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2V8" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="13.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

function IkonCheckliste() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <rect x="4.5" y="3.5" width="15" height="17" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 9h6M8 13h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M15.2 12.3l1.1 1.1 2-2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IkonLaptopWlan() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <rect x="4" y="6" width="16" height="10.5" rx="1.6" stroke="currentColor" strokeWidth="1.7" />
      <path d="M2.5 19.5h19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M9.6 12.5a3.4 3.4 0 0 1 4.8 0M11.2 14a1.2 1.2 0 0 1 1.6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const ZIELGRUPPE_IKONS = [<IkonKoffer key="koffer" />, <IkonCheckliste key="checkliste" />, <IkonLaptopWlan key="laptop" />];

export function KursZielgruppeV2({ kurs }: { kurs: Kurs }) {
  return (
    <section className="px-6 py-16 md:px-10 lg:py-20">
      <div className="mx-auto max-w-[720px] text-center">
        <Eyebrow ton="blau">Für wen ist der Lehrgang?</Eyebrow>
        <h2 className="mt-6 text-[clamp(1.5rem,3.4vw,2.1rem)] leading-[1.2] text-balance">
          {kurs.titel}: das passt zu dir, wenn...
        </h2>

        <ul className="mt-9 flex flex-col gap-4 text-left">
          {kurs.fuerWen.map((satz, i) => (
            <li
              key={satz}
              className="flex items-center gap-4 rounded-hs-card border border-hs-line bg-white px-5 py-4 shadow-hs-soft"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-hs-pink/10 text-hs-pink">
                {ZIELGRUPPE_IKONS[i % ZIELGRUPPE_IKONS.length]}
              </span>
              <span className="text-[0.9375rem] leading-[1.6] text-hs-body">{satz}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
