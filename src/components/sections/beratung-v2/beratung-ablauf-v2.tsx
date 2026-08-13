import React from "react";
import { PfeilKnopf } from "@/components/sections/startseite-v2/hs-ui";

function IkonFormular() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="3.5" width="14" height="17" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IkonGlocke() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2.5h-15L6 16.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M10 21a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IkonSprechblase() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 5.5h16v10H9.5L5 19v-3.5H4v-10Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M8 9.5h8M8 12.5h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

const schritte = [
  {
    nr: "01",
    ikon: <IkonFormular />,
    ton: "bg-hs-pink/10 text-hs-pink",
    titel: "Formular ausfüllen",
    text: "Ein paar Angaben zu deiner Situation und deinem Wunschthema — dauert keine 2 Minuten.",
  },
  {
    nr: "02",
    ikon: <IkonGlocke />,
    ton: "bg-hs-violet/10 text-hs-violet",
    titel: "Rückmeldung innerhalb von 24h",
    text: "Wir melden uns bei dir und stimmen einen Termin ab, der zu deinem Alltag passt.",
  },
  {
    nr: "03",
    ikon: <IkonSprechblase />,
    ton: "bg-hs-lightblue text-hs-blue",
    titel: "Kostenloses Gespräch",
    text: "Per Telefon oder Video klären wir deine Möglichkeiten — unverbindlich und persönlich.",
  },
];

export function BeratungAblaufV2() {
  return (
    <section id="ablauf" className="scroll-mt-28 px-6 py-20 md:px-10 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div>
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-hs-pink">
              So läuft's ab
            </p>
            <h2 className="mt-4 max-w-[440px] text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.14]">
              In 3 Schritten zu deiner Beratung.
            </h2>
          </div>
          <p className="max-w-[380px] text-[0.9375rem] leading-[1.7] text-hs-muted">
            Kein Callcenter, kein Skript — ein persönliches Gespräch mit jemandem, der sich
            wirklich Zeit für deine Fragen nimmt.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-7">
          {schritte.map((s, i) => (
            <li key={s.nr} className="relative">
              {i < schritte.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-7 top-1/2 hidden w-7 border-t-2 border-dashed border-hs-border lg:block"
                />
              )}

              <div className="flex h-full items-start gap-5 rounded-hs-card border border-hs-line/70 bg-white p-6 shadow-hs-soft">
                <span
                  className={`inline-flex size-[60px] shrink-0 items-center justify-center rounded-[18px] ${s.ton}`}
                >
                  {s.ikon}
                </span>

                <div className="flex flex-col">
                  <span className="text-[0.75rem] font-bold tabular-nums tracking-[0.1em] text-hs-pink">
                    {s.nr}
                  </span>
                  <h3 className="mt-1.5 text-[1.0625rem] font-[600] leading-snug">{s.titel}</h3>
                  <p className="mt-2 text-[0.85rem] leading-[1.6] text-hs-muted">{s.text}</p>
                  <span className="mt-5 flex">
                    <PfeilKnopf />
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
