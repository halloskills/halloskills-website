import React from "react";
import { PfeilKnopf } from "./hs-ui";

function IkonBuch() {
  return (
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 8.5C13.8 6.6 11 5.8 7 5.8v17.4c4 0 6.8.8 9 2.7 2.2-1.9 5-2.7 9-2.7V5.8c-4 0-6.8.8-9 2.7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M16 8.5v17.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IkonHut() {
  return (
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 6.5 29 13l-13 6.5L3 13l13-6.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 15.8v6.4c0 1.8 3.4 3.3 7.5 3.3s7.5-1.5 7.5-3.3v-6.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IkonZertifikat() {
  return (
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect
        x="4.5"
        y="5.5"
        width="23"
        height="15"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M9 10.5h7M9 14.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="21.5" cy="21.5" r="4.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M19 25.5v4l2.5-1.6 2.5 1.6v-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Echte Reihenfolge — die Nummerierung trägt hier Information. */
const schritte = [
  {
    nr: "01",
    ikon: <IkonBuch />,
    ton: "bg-hs-pink/10 text-hs-pink",
    titel: "Kurs wählen",
    text: "Wähle die Weiterbildung, die zu deinen Zielen passt.",
  },
  {
    nr: "02",
    ikon: <IkonHut />,
    ton: "bg-hs-violet/10 text-hs-violet",
    titel: "Lernen & umsetzen",
    text: "Lerne flexibel online und setze das Wissen direkt in die Praxis um.",
  },
  {
    nr: "03",
    ikon: <IkonZertifikat />,
    ton: "bg-hs-lightblue text-hs-blue",
    titel: "Zertifikat erhalten",
    text: "Erhalte einen anerkannten Abschluss und bringe deine Karriere voran.",
  },
];

export function SchritteV2() {
  return (
    <section className="px-6 py-20 md:px-10 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Kopf */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div>
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-hs-pink">
              So einfach geht&apos;s
            </p>
            <h2 className="mt-4 max-w-[440px] text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.14]">
              In 3 Schritten zu deiner Zukunft.
            </h2>
          </div>
          <p className="max-w-[380px] text-[0.9375rem] leading-[1.7] text-hs-muted">
            Kein Rätselraten, kein Papierkram-Dschungel — ein klarer Weg von der
            Entscheidung bis zum Abschluss.
          </p>
        </div>

        {/* Schritte */}
        <ol className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-7">
          {schritte.map((s, i) => (
            <li key={s.nr} className="relative">
              {/* Gestrichelte Verbindung zum nächsten Schritt */}
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
                  <h3 className="mt-1.5 text-[1.0625rem] font-[600] leading-snug">
                    {s.titel}
                  </h3>
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
