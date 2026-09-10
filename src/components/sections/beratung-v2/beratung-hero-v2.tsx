import Image from "next/image";
import Link from "next/link";
import React from "react";
import { btnPrimary, btnWeiss } from "@/components/sections/startseite-v2/hs-ui";

const fakten = [
  { titel: "Kostenlos", text: "& unverbindlich" },
  { titel: "24 h Rückmeldung", text: "Kein Warten" },
  { titel: "Telefon oder Video", text: "Wie es dir passt" },
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

/** Kleine Glass-Card, analog zur "Deine Lernplattform"-Karte im Startseiten-Hero. */
function BeratungsKarte() {
  return (
    <div className="w-[186px] rounded-hs-glass border border-white/80 bg-gradient-to-br from-white/70 to-white/40 p-4 shadow-hs-float backdrop-blur-2xl sm:w-[215px] sm:p-5">
      <p className="text-[0.9rem] font-[600] leading-snug text-hs-navy">
        Dein Beratungsgespräch
      </p>
      <p className="mt-0.5 text-[0.7rem] font-[500] text-hs-body">Kostenlos & unverbindlich</p>

      <div className="mt-4 flex flex-col gap-2.5">
        {["Situation klären", "Passenden Lehrgang finden", "Bildungsgutschein prüfen"].map(
          (schritt) => (
            <span key={schritt} className="flex items-center gap-2">
              <CheckKreis />
              <span className="text-[0.75rem] font-[500] text-hs-body">{schritt}</span>
            </span>
          ),
        )}
      </div>
    </div>
  );
}

export function BeratungHeroV2() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-hs-soft via-white to-hs-soft" />
        <div className="absolute -left-32 top-10 size-[420px] rounded-full bg-hs-violet/10 blur-3xl" />
        <div className="absolute -right-24 top-0 size-[520px] rounded-full bg-hs-pink/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-14 md:px-10 lg:pb-20 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-hs-pink/10 px-4 py-1.5 text-[0.75rem] font-[600] text-hs-pink">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M8 1.5l1.5 4.2 4.2 1.5-4.2 1.5L8 13l-1.5-4.3L2.3 7.2l4.2-1.5L8 1.5Z"
                  fill="currentColor"
                />
              </svg>
              Kostenlose Erstberatung
            </span>

            <h1 className="mt-6 text-[clamp(2.2rem,5vw,3.25rem)] leading-[1.1] text-balance">
              Jetzt kostenlose Beratung sichern.
            </h1>

            <p className="mt-6 max-w-[460px] text-[1.0625rem] leading-[1.65] text-hs-body">
              In einem persönlichen Gespräch finden wir gemeinsam heraus, welcher Lehrgang
              zu dir passt — und ob du grundsätzlich für einen Bildungsgutschein infrage
              kommst.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <Link href="#formular" className={btnPrimary}>
                Zum Formular
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="#ablauf" className={btnWeiss}>
                <span
                  aria-hidden="true"
                  className="inline-flex size-6 items-center justify-center rounded-full bg-hs-lightblue text-hs-blue"
                >
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor">
                    <path d="M2 1l6 4-6 4V1Z" />
                  </svg>
                </span>
                So läuft's ab
              </Link>
            </div>

            <ul className="mt-11 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-3 sm:gap-x-5">
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

          <div className="relative">
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
                src="/images/bilder/mann-airpods-khaki-dual-monitor.png"
                alt="Teilnehmer im Beratungsgespräch per Videocall"
                width={900}
                height={1000}
                preload
                sizes="(max-width: 992px) 90vw, 560px"
                className="aspect-[9/10] w-full object-cover"
              />
            </div>

            <div className="absolute -right-4 top-[7%] sm:-right-6">
              <BeratungsKarte />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
