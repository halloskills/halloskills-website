import React from "react";
import { Eyebrow, Logo } from "./hs-ui";

/* ── Mockup-Bausteine: komplett in HTML/CSS, keine Bilder ── */

function Fenster({ titel, children }: { titel: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-hs-line bg-white shadow-hs-soft">
      <div className="flex items-center gap-3 border-b border-hs-line px-4 py-2.5">
        <Logo className="h-4" />
        <span className="ml-auto truncate text-[0.7rem] font-[500] text-hs-muted">{titel}</span>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

function Pill({ children, ton = "blau" }: { children: React.ReactNode; ton?: "blau" | "pink" | "violett" }) {
  const toene = {
    blau: "bg-hs-lightblue text-hs-blue",
    pink: "bg-hs-pink/10 text-hs-pink",
    violett: "bg-hs-violet/10 text-hs-violet",
  };
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-[0.68rem] font-[600] ${toene[ton]}`}>
      {children}
    </span>
  );
}

function Haken() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8.5l3.2 3.2L13 4.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MockLernsituation() {
  return (
    <Fenster titel="Büromanagement · Lernsituation">
      <div className="flex flex-wrap items-center gap-2">
        <Pill ton="violett">Praxisfall</Pill>
        <span className="text-[0.7rem] text-hs-muted">Kundenservice im Büro</span>
      </div>
      <p className="mt-3 text-[0.8rem] leading-[1.55] text-hs-body">
        Du arbeitest im Kundenservice eines Büroausstatters. Eine bestellte Lieferung ist nicht
        vollständig angekommen.
      </p>
      <div className="mt-3 rounded-[14px] border border-hs-violet/25 bg-hs-violet/5 p-3.5">
        <p className="text-[0.66rem] font-[700] uppercase tracking-[0.1em] text-hs-violet">Handlungsauftrag</p>
        <p className="mt-1 text-[0.9rem] font-[600] leading-[1.4] text-hs-navy">
          Ein Kunde reklamiert eine Lieferung. Formuliere eine Antwort.
        </p>
      </div>
      <div className="mt-3 h-14 rounded-[12px] border border-hs-line bg-hs-soft px-3 py-2 text-[0.75rem] text-hs-muted">
        Deine Antwort an den Kunden
      </div>
    </Fenster>
  );
}

function MockFortschritt() {
  const schritte = [
    { art: "Video", titel: "Einführung Kundenkommunikation", status: "fertig" },
    { art: "Übung", titel: "Gesprächsnotiz formulieren", status: "fertig" },
    { art: "Video", titel: "Reklamationen bearbeiten", status: "aktuell" },
    { art: "Übung", titel: "Antwortschreiben aufsetzen", status: "offen" },
  ] as const;
  return (
    <Fenster titel="Dein Lernfortschritt">
      <div className="flex items-end justify-between gap-3">
        <p className="text-[0.85rem] font-[600] text-hs-navy">Modul 2: Kundenkommunikation</p>
        <span className="shrink-0 whitespace-nowrap text-[0.8rem] font-[700] text-hs-blue">50 %</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-hs-lightblue">
        <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-hs-violet to-hs-pink" />
      </div>
      <ul className="mt-4 space-y-2">
        {schritte.map((s) => (
          <li
            key={s.titel}
            className={`flex items-center gap-3 rounded-[12px] border px-3 py-2 ${
              s.status === "aktuell" ? "border-hs-violet/40 bg-hs-violet/5" : "border-hs-line bg-white"
            }`}
          >
            <span
              className={`flex size-6 shrink-0 items-center justify-center rounded-full ${
                s.status === "fertig"
                  ? "bg-hs-blue text-white"
                  : s.status === "aktuell"
                    ? "bg-hs-violet text-white"
                    : "border border-hs-line text-transparent"
              }`}
            >
              {s.status === "fertig" ? <Haken /> : s.status === "aktuell" ? <span className="size-1.5 rounded-full bg-white" /> : null}
            </span>
            <span className="min-w-0 flex-1 truncate text-[0.75rem] font-[500] text-hs-navy">{s.titel}</span>
            <Pill ton={s.art === "Video" ? "blau" : "pink"}>{s.art}</Pill>
          </li>
        ))}
      </ul>
    </Fenster>
  );
}

function MockUebung() {
  const zellen = [12, 18, 9, 21];
  return (
    <Fenster titel="Übung · Tabellenkalkulation">
      <div className="flex items-center gap-2">
        <Pill ton="pink">Übung</Pill>
        <span className="text-[0.7rem] text-hs-muted">Aufgabe 3 von 8</span>
      </div>
      <div className="mt-3 grid gap-4 sm:grid-cols-[auto_1fr]">
        <div className="w-28 overflow-hidden rounded-[10px] border border-hs-line text-[0.72rem]">
          <div className="bg-hs-soft px-3 py-1 text-center font-[600] text-hs-muted">A</div>
          {zellen.map((z, i) => (
            <div key={i} className="flex border-t border-hs-line">
              <span className="w-7 bg-hs-soft py-1 text-center text-hs-muted">{i + 1}</span>
              <span className="flex-1 px-3 py-1 text-right text-hs-navy">{z}</span>
            </div>
          ))}
        </div>
        <div>
          <p className="text-[0.9rem] font-[600] leading-[1.4] text-hs-navy">
            Welche Funktion berechnet den Mittelwert von A1 bis A4?
          </p>
          <div className="mt-3 flex h-10 items-center rounded-[12px] border-2 border-hs-violet/50 bg-white px-3 text-[0.78rem] text-hs-muted">
            Deine Antwort eingeben
          </div>
          <span className="mt-3 inline-flex rounded-full bg-hs-navy px-5 py-2 text-[0.75rem] font-[600] text-white">
            Weiter
          </span>
        </div>
      </div>
    </Fenster>
  );
}

function MockPruefung() {
  const simulationen = ["Büromanagement", "Industriekaufmann", "Bankkaufmann"];
  return (
    <Fenster titel="Prüfungsvorbereitung">
      <p className="text-[0.85rem] font-[600] text-hs-navy">Prüfungssimulationen</p>
      <ul className="mt-3 space-y-2">
        {simulationen.map((name, i) => (
          <li key={name} className="flex items-center gap-3 rounded-[14px] border border-hs-line bg-white px-3.5 py-3">
            <span
              className={`flex size-9 shrink-0 items-center justify-center rounded-[11px] text-[0.8rem] font-[700] ${
                ["bg-hs-violet/10 text-hs-violet", "bg-hs-pink/10 text-hs-pink", "bg-hs-lightblue text-hs-blue"][i]
              }`}
            >
              {name[0]}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[0.8rem] font-[600] text-hs-navy">{name}</span>
              <span className="block text-[0.68rem] text-hs-muted">Prüfungssimulation</span>
            </span>
            <span className="rounded-full border border-hs-line px-3.5 py-1.5 text-[0.7rem] font-[600] text-hs-navy">
              Starten
            </span>
          </li>
        ))}
      </ul>
    </Fenster>
  );
}

const karten = [
  {
    titel: "Lernsituationen aus dem Berufsalltag",
    text: "Du bekommst Praxisfälle mit einem konkreten Handlungsauftrag, so wie sie dir im Büro, in der Industrie oder bei der Bank begegnen.",
    mock: <MockLernsituation />,
  },
  {
    titel: "Dein Lernfortschritt im Blick",
    text: "Du siehst jederzeit, wo du stehst: Schritt für Schritt durch Videos und Übungen, mit einem Fortschrittsbalken für jedes Modul.",
    mock: <MockFortschritt />,
  },
  {
    titel: "Üben, bis es sitzt",
    text: "Zu den Themen gibt es Übungsaufgaben, die du direkt am Bildschirm beantwortest.",
    mock: <MockUebung />,
  },
  {
    titel: "Gut vorbereitet in die Prüfung",
    text: "Mit Prüfungssimulationen für Büromanagement, Industriekaufmann und Bankkaufmann übst du den Ernstfall.",
    mock: <MockPruefung />,
  },
];

/**
 * Sticky-Stapel: ab 768 px bleiben die Karten nacheinander oben stehen und
 * schieben sich übereinander. Darunter und bei "prefers-reduced-motion"
 * stehen sie einfach untereinander (md:motion-safe:).
 * Oberkante 7.5rem = fixierte Navigation (ca. 5.3rem) plus Luft.
 */
export function LernplattformV2() {
  return (
    <section id="so-lernst-du" className="scroll-mt-28 px-6 pt-10 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[640px] text-center">
          <Eyebrow ton="blau">Die Lernplattform</Eyebrow>
          <h2 className="mt-6 text-[clamp(1.75rem,4vw,2.6rem)] leading-[1.14]">
            So lernst du bei <span className="text-hs-pink">HalloSkills.</span>
          </h2>
          <p className="mt-5 text-[1rem] leading-[1.65] text-hs-body">
            Ein Blick in die Lernplattform: So sehen Praxisfälle, Übungen und die
            Prüfungsvorbereitung aus.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-[860px] flex-col gap-6 md:motion-safe:gap-[32vh]">
          {karten.map((k, i) => (
            <article
              key={k.titel}
              style={{ "--i": i } as React.CSSProperties}
              className="flex flex-col rounded-[32px] border border-white bg-white p-4 shadow-hs-float sm:p-6 md:min-h-[600px] md:motion-safe:sticky md:motion-safe:top-[calc(7.5rem+var(--i)*1rem)]"
            >
              <div
                className="rounded-[24px] p-4 sm:p-6"
                style={{ background: "linear-gradient(160deg, #f4f2ff 0%, #fbf5fb 45%, #f6f9fd 100%)" }}
              >
                <div aria-hidden="true" className="mx-auto max-w-[560px] select-none">
                  {k.mock}
                </div>
              </div>
              <div className="flex flex-1 flex-col px-2 pb-1 pt-6 sm:px-4">
                <h3 className="text-[1.125rem] font-[600] leading-snug">{k.titel}</h3>
                <p className="mt-2 max-w-[640px] text-[0.9rem] leading-[1.65] text-hs-body">{k.text}</p>
                <p className="mt-auto pt-4 text-[0.7rem] text-hs-muted">Beispielansicht der Lernplattform</p>
              </div>
            </article>
          ))}
          {/* Leerer Endpunkt: die Lücke (gap) davor hält den fertigen Stapel kurz stehen, bevor die Seite weiterscrollt. */}
          <div aria-hidden="true" className="hidden md:motion-safe:block" />
        </div>
      </div>
    </section>
  );
}
