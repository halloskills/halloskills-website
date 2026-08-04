import Image from "next/image";
import React from "react";

/**
 * Offizielles HalloSkills-Logo (Marke + Wortmarke) aus den Originaldateien.
 *
 *   variante="dunkel" — Navy #0E2841 + Blue #004B76, für HELLE Flächen
 *   variante="hell"   — Weiss, für DUNKLE Flächen
 *
 * Die SVGs werden unverändert eingebunden. Die Wortmarke steckt als Pfade
 * darin, deshalb steht kein separater Text daneben.
 *
 * NICHT verwenden: public/images/logo-primary.svg und logo-weiss.svg sind das
 * ALTE Logo und enthalten noch Gold #D4AF37.
 */
const LOGO_VARIANTEN = {
  dunkel: "/images/logo-hs-dunkel.svg",
  hell: "/images/logo-hs-hell.svg",
} as const;

// Seitenverhältnis der Originaldateien (648 × 169,5 bzw. 1227 × 319,5)
const LOGO_RATIO = 3.82;

export function Logo({
  variante = "dunkel",
  className = "h-8",
  preload = false,
}: {
  variante?: keyof typeof LOGO_VARIANTEN;
  className?: string;
  preload?: boolean;
}) {
  return (
    <Image
      src={LOGO_VARIANTEN[variante]}
      alt="HalloSkills"
      width={Math.round(64 * LOGO_RATIO)}
      height={64}
      preload={preload}
      className={`w-auto ${className}`}
    />
  );
}

/** Pill-Buttons — border-radius 999px ist im neuen System verbindlich. */
const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-full whitespace-nowrap text-[0.875rem] font-[600] transition-all duration-200 active:scale-[0.97]";

export const btnPrimary = `${btnBase} bg-hs-navy px-7 py-3.5 text-white hover:bg-hs-pink shadow-hs-soft`;

export const btnWeiss = `${btnBase} bg-white px-7 py-3.5 text-hs-navy border border-hs-line hover:border-hs-violet hover:text-hs-violet shadow-hs-soft`;

export const btnAkzent = `${btnBase} bg-hs-pink px-7 py-3.5 text-white hover:brightness-95 shadow-hs-soft`;

export const btnGlas = `${btnBase} px-7 py-3.5 text-white border border-white/30 bg-white/15 backdrop-blur-xl hover:bg-white/25`;

/** Runder Icon-Button, wie in den Feature- und Kurskarten. */
export function PfeilKnopf({
  className = "",
  hell = false,
}: {
  className?: string;
  hell?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex size-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${
        hell
          ? "border-white/40 text-white group-hover:bg-white group-hover:text-hs-navy"
          : "border-hs-line text-hs-navy group-hover:border-hs-navy group-hover:bg-hs-navy group-hover:text-white"
      } ${className}`}
    >
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/** Kleines Label über Headlines. */
export function Eyebrow({
  children,
  ton = "pink",
}: {
  children: React.ReactNode;
  ton?: "pink" | "blau";
}) {
  const toene = {
    pink: "bg-hs-pink/10 text-hs-pink",
    blau: "bg-hs-lightblue text-hs-blue",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.75rem] font-[600] ${toene[ton]}`}
    >
      {children}
    </span>
  );
}
