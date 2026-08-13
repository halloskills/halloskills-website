import React from "react";
import { Eyebrow } from "./hs-ui";

/**
 * Vergleich Umschulung vs. HalloSkills-Lehrgang.
 *
 * Rechtlich bewusst so formuliert: "Inhalte einer Umschulung" statt
 * "die gleiche Umschulung" — der Abschluss ist ein HalloSkills-Zertifikat,
 * keine IHK-Prüfung. Dieser Unterschied steht in der Tabelle selbst und im
 * Hinweis darunter, nicht im Kleingedruckten. Siehe Memory
 * rebrand-content-constraints: Werbeaussagen müssen belegbar/zutreffend sein.
 */
const zeilen = [
  { label: "Dauer", umschulung: "24 Monate", hs: "6 Monate" },
  { label: "Format", umschulung: "Meist vor Ort", hs: "100% online" },
  { label: "Inhalte", umschulung: "IHK-Lehrplan", hs: "Gleiche Praxisinhalte" },
  { label: "Abschluss", umschulung: "IHK-Zertifizierung", hs: "HalloSkills-Zertifikat" },
];

function CheckIkon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
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

export function VergleichV2() {
  return (
    <section className="px-6 py-20 md:px-10 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Kopf */}
        <div className="mx-auto max-w-[640px] text-center">
          <Eyebrow>Hallo Abkürzung.</Eyebrow>
          <h2 className="mt-6 text-[clamp(1.75rem,4vw,2.6rem)] leading-[1.16] text-balance">
            Die Inhalte einer Umschulung. In einem Viertel der Zeit.
          </h2>
          <p className="mt-5 text-[1rem] leading-[1.7] text-hs-body">
            Eine klassische Umschulung dauert dir zu lange oder passt nicht in deinen
            Alltag? Bei HalloSkills lernst du die gleichen Praxisinhalte — kompakt,
            online und von zu Hause.
          </p>
        </div>

        {/* Vergleichstabelle */}
        <div className="mt-12 overflow-hidden rounded-hs-card border border-hs-line shadow-hs-soft">
          {/* Kopfzeile */}
          <div className="grid grid-cols-[1fr_1.2fr_1.2fr] bg-hs-soft">
            <div className="px-5 py-4 sm:px-7" />
            <div className="px-4 py-4 text-center text-[0.8rem] font-[600] text-hs-muted sm:px-6">
              Klassische Umschulung
            </div>
            <div className="relative px-4 py-4 text-center text-[0.8rem] font-[700] text-hs-navy sm:px-6">
              <span className="absolute inset-x-3 inset-y-1.5 -z-10 rounded-xl bg-white shadow-hs-soft sm:inset-x-4" />
              HalloSkills
            </div>
          </div>

          {/* Zeilen */}
          {zeilen.map((z, i) => (
            <div
              key={z.label}
              className={`grid grid-cols-[1fr_1.2fr_1.2fr] items-center ${
                i < zeilen.length - 1 ? "border-b border-hs-line" : ""
              }`}
            >
              <div className="px-5 py-4 text-[0.8rem] font-[600] text-hs-navy sm:px-7 sm:text-[0.875rem]">
                {z.label}
              </div>
              <div className="px-4 py-4 text-center text-[0.8rem] text-hs-muted sm:px-6 sm:text-[0.9rem]">
                {z.umschulung}
              </div>
              <div className="relative px-4 py-4 sm:px-6">
                <span className="absolute inset-x-3 inset-y-0.5 -z-10 bg-white sm:inset-x-4" />
                <span className="flex items-center justify-center gap-1.5 text-center text-[0.8rem] font-[600] text-hs-navy sm:text-[0.9rem]">
                  <span className="text-hs-pink">
                    <CheckIkon />
                  </span>
                  {z.hs}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Der Unterschied bleibt sichtbar, nicht im Kleingedruckten */}
        <p className="mx-auto mt-6 max-w-[640px] text-center text-[0.85rem] leading-[1.7] text-hs-muted">
          Der Unterschied: Am Ende deines Lehrgangs erhältst du ein
          HalloSkills-Zertifikat statt einer IHK-Prüfung. Die Lerninhalte sind die
          gleichen.
        </p>
      </div>
    </section>
  );
}
