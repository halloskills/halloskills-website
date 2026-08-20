import Image from "next/image";
import Link from "next/link";
import React from "react";
import { btnPrimary, btnWeiss } from "./hs-ui";

/**
 * Belegbare Fakten statt Kennzahlen — HalloSkills startet erst im
 * Herbst 2026, Absolvent:innen- und Bewertungszahlen gibt es noch nicht.
 */
/**
 * Sprachwelt „Hallo ___." — die Rotation endet auf „Skills.", damit der
 * Markenname den Zyklus abschliesst. Reihenfolge ist bewusst gewählt.
 * Der längste Begriff steckt zusätzlich im Sizer (siehe globals.css).
 */
const claimWoerter = ["Zukunft.", "Karriere.", "Möglichkeiten.", "Neustart.", "Skills."];
const CLAIM_LAENGSTES = "Möglichkeiten.";
const CLAIM_TAKT_SEKUNDEN = 2.8;

const fakten = [
  { titel: "6 Monate", text: "Statt 24 Monate" },
  { titel: "100% Online", text: "Lerne von zuhause" },
  { titel: "1:1 Betreuung", text: "Echte Expert:innen" },
];

function CheckKreis() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex size-[18px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-hs-violet/40 text-hs-violet"
    >
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
        <path
          d="M2.5 6.2l2.3 2.3L9.5 3.8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/** Illustration der Lernplattform — bewusst dekorativ, keine echten Daten. */
function FortschrittsKarte() {
  return (
    <div className="w-[176px] rounded-hs-glass border border-white/80 bg-gradient-to-br from-white/70 to-white/40 p-4 shadow-hs-float backdrop-blur-2xl sm:w-[215px] sm:p-5 lg:w-[240px]">
      <p className="text-[0.9rem] font-[600] leading-snug text-hs-navy">
        Deine Lernplattform
      </p>
      {/* hs-body statt hs-muted: die Karte liegt auf dem Foto, Grau hält
          den Kontrast dort nicht (gemessen 1,98:1 gegen 5,1:1). */}
      <p className="mt-0.5 text-[0.7rem] font-[500] text-hs-body">Vorschau</p>

      <svg
        viewBox="0 0 200 64"
        className="mt-4 h-14 w-full"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="hs-spark-linie" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7861FF" />
            <stop offset="100%" stopColor="#FF2D7A" />
          </linearGradient>
          <linearGradient id="hs-spark-flaeche" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7861FF" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#FF2D7A" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M2 58 C34 55, 52 50, 74 42 C98 33, 116 30, 140 20 C160 12, 178 8, 198 4 L198 64 L2 64 Z"
          fill="url(#hs-spark-flaeche)"
        />
        <path
          d="M2 58 C34 55, 52 50, 74 42 C98 33, 116 30, 140 20 C160 12, 178 8, 198 4"
          fill="none"
          stroke="url(#hs-spark-linie)"
          strokeWidth="2.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="198" cy="4" r="3.5" fill="#FF2D7A" stroke="#fff" strokeWidth="2" />
      </svg>

      <div className="mt-3 flex items-baseline justify-between">
        <span className="text-[0.72rem] font-[500] text-hs-body">Modul 4 von 6</span>
        <span className="text-[0.78rem] font-bold tabular-nums text-hs-navy">68%</span>
      </div>
      <div
        className="mt-2 h-[6px] w-full overflow-hidden rounded-full bg-hs-line"
        role="presentation"
      >
        <div
          className="h-full rounded-full"
          style={{
            width: "68%",
            background: "linear-gradient(90deg, #7861FF 0%, #FF2D7A 100%)",
          }}
        />
      </div>
    </div>
  );
}

export function HeroV2() {
  return (
    <section className="relative overflow-hidden">
      {/* Atmosphäre: weiche Blobs im Markenverlauf */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-hs-soft via-white to-hs-soft" />
        <div className="absolute -left-32 top-10 size-[420px] rounded-full bg-hs-violet/10 blur-3xl" />
        <div className="absolute -right-24 top-0 size-[520px] rounded-full bg-hs-pink/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 size-[380px] rounded-full bg-hs-lightblue/70 blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 pb-20 pt-14 md:px-10 lg:pb-28 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
          {/* ── Text ── */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-hs-pink/10 px-4 py-1.5 text-[0.75rem] font-[600] text-hs-pink">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M8 1.5l1.5 4.2 4.2 1.5-4.2 1.5L8 13l-1.5-4.3L2.3 7.2l4.2-1.5L8 1.5Z"
                  fill="currentColor"
                />
              </svg>
              Online-Umschulungsinhalte · in 6 statt 24 Monaten
            </span>

            <h1 className="mt-7 text-[clamp(2.5rem,5.8vw,4rem)] leading-[1.06]">
              {/* Zugänglicher Name bleibt stabil, während visuell rotiert wird */}
              <span className="sr-only">Hallo Zukunft.</span>
              <span aria-hidden="true">
                <span className="block">Hallo</span>
                <span className="hs-claim">
                  <span className="hs-claim-sizer">{CLAIM_LAENGSTES}</span>
                  {claimWoerter.map((wort, i) => (
                    <span
                      key={wort}
                      className="hs-claim-wort"
                      data-erstes={i === 0}
                      style={{ animationDelay: `${i * CLAIM_TAKT_SEKUNDEN}s` }}
                    >
                      {wort}
                    </span>
                  ))}
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-[440px] text-[1.0625rem] leading-[1.65] text-hs-body">
              Die Inhalte einer klassischen Umschulung — bei uns in 6 statt 24 Monaten,
              100% online und von zu Hause. Mit HalloSkills-Zertifikat. Start im
              Herbst 2026.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <Link href="/beratung-buchen" className={btnPrimary}>
                Beratung sichern
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="#so-funktioniert-es" className={btnWeiss}>
                <span
                  aria-hidden="true"
                  className="inline-flex size-6 items-center justify-center rounded-full bg-hs-lightblue text-hs-blue"
                >
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor">
                    <path d="M2 1l6 4-6 4V1Z" />
                  </svg>
                </span>
                So funktioniert&apos;s
              </Link>
            </div>

            <ul className="mt-11 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 sm:gap-x-5">
              {fakten.map((f) => (
                <li key={f.titel} className="leading-tight">
                  <span className="flex items-center gap-2">
                    <CheckKreis />
                    <span className="text-[0.9rem] font-bold text-hs-navy">{f.titel}</span>
                  </span>
                  <span className="mt-1.5 block text-[0.8rem] text-hs-muted">{f.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Bild mit Pill-Bildmaske ── */}
          <div className="relative">
            {/* Verlaufs-Sichel hinter dem Bild */}
            <div
              aria-hidden="true"
              className="absolute -right-6 -top-4 hidden h-[92%] w-[78%] opacity-70 md:block"
              style={{
                borderRadius: "999px 999px 260px 0",
                background:
                  "linear-gradient(150deg, rgba(120,97,255,0.30) 0%, rgba(255,45,122,0.22) 100%)",
              }}
            />

            <div
              className="relative overflow-hidden shadow-hs-float"
              style={{ borderRadius: "999px 999px 220px 48px" }}
            >
              <Image
                src="/images/bilder/managerin-schwarzer-pullover-imac.png"
                alt="Teilnehmerin arbeitet am Rechner an ihrem Online-Lehrgang"
                width={900}
                height={1000}
                preload
                sizes="(max-width: 992px) 90vw, 560px"
                className="aspect-[9/10] w-full object-cover"
              />
            </div>

            {/* Glass-Card — sitzt am oberen rechten Bildrand, halb überlappend.
                Der helle Fensterbereich dahinter lässt das Glas weiss statt grau
                wirken (siehe Kontrastmessung in der Karte selbst). */}
            <div className="absolute -right-4 top-[7%] sm:-right-6 lg:-right-10">
              <FortschrittsKarte />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
