import React from "react";
import type { KursNeu } from "@/lib/kurse-neu-data";
import { Eyebrow } from "@/components/sections/startseite-v2/hs-ui";

function CheckIkon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="M3 8.5l3.2 3.2L13 4.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function KursZielgruppeV2({ kurs }: { kurs: KursNeu }) {
  return (
    <section className="px-6 py-16 md:px-10 lg:py-20">
      <div className="mx-auto max-w-[720px] text-center">
        <Eyebrow ton="blau">Für wen ist der Lehrgang?</Eyebrow>
        <h2 className="mt-6 text-[clamp(1.5rem,3.4vw,2.1rem)] leading-[1.2] text-balance">
          {kurs.titel} — das passt zu dir, wenn...
        </h2>

        <ul className="mt-9 flex flex-col gap-4 text-left">
          {kurs.fuerWen.map((satz) => (
            <li
              key={satz}
              className="flex items-start gap-3 rounded-hs-card border border-hs-line bg-white px-5 py-4 shadow-hs-soft"
            >
              <span className="mt-0.5 text-hs-pink">
                <CheckIkon />
              </span>
              <span className="text-[0.9375rem] leading-[1.6] text-hs-body">{satz}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
