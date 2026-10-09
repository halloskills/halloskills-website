import React from "react";
import { Eyebrow, Logo } from "./hs-ui";

/* ── Mockup-Bausteine: komplett in HTML/CSS, keine Bilder ── */

type Navi = "Home" | "Entdecken" | "Bibliothek" | "Tests";

function NaviIkon({ name }: { name: Navi }) {
  const p = { stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" } as const;
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      {name === "Home" && <path {...p} d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1v-9z" />}
      {name === "Entdecken" && (
        <>
          <circle {...p} cx="12" cy="12" r="9" />
          <path {...p} d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
        </>
      )}
      {name === "Bibliothek" && <path {...p} d="M5 4h4v16H5zM11 4h4v16h-4zM17.5 5l3 .8-3.6 14-3-.8z" />}
      {name === "Tests" && (
        <>
          <rect {...p} x="5" y="4" width="14" height="17" rx="2" />
          <path {...p} d="M9 4V3h6v1M9 11l2 2 4-4M9 17h6" />
        </>
      )}
    </svg>
  );
}

/**
 * App-Fenster der Lernplattform: dunkle Oberfläche in HalloSkills-Navy,
 * schmale Seitenleiste mit Navigation, leichter Leuchtrand, weiches
 * Ausblenden nach unten.
 */
function AppFenster({ aktiv, children }: { aktiv: Navi; children: React.ReactNode }) {
  const navi: Navi[] = ["Home", "Entdecken", "Bibliothek", "Tests"];
  return (
    <div
      className="flex h-[300px] overflow-hidden rounded-[20px] border border-white/15 bg-[#0b2036] text-white [mask-image:linear-gradient(to_bottom,black_80%,transparent)] sm:h-[300px]"
      style={{ boxShadow: "0 0 0 1px rgba(120,97,255,0.35), 0 0 36px rgba(120,97,255,0.28)" }}
    >
      <nav className="flex w-11 shrink-0 flex-col gap-1 border-r border-white/10 bg-white/[0.03] px-1.5 py-3 sm:w-[118px] sm:px-2.5">
        <Logo variante="hell" className="mb-3 hidden h-4 self-start sm:block" />
        <span className="mb-3 flex justify-center sm:hidden">
          <Logo variante="hell" className="h-3" />
        </span>
        {navi.map((n) => (
          <span
            key={n}
            className={`flex items-center justify-center gap-2 rounded-[10px] px-2 py-2 text-[0.72rem] font-[500] sm:justify-start ${
              n === aktiv ? "bg-hs-violet/25 text-white" : "text-white/55"
            }`}
          >
            <NaviIkon name={n} />
            <span className="hidden sm:inline">{n}</span>
          </span>
        ))}
      </nav>
      <div className="relative min-w-0 flex-1 p-3.5 sm:p-5">{children}</div>
    </div>
  );
}

function Reiter({ aktiv }: { aktiv: "Lernpläne" | "Karteikarten" | "Verlauf" }) {
  return (
    <div className="flex gap-4 border-b border-white/10 text-[0.72rem] font-[500]">
      {(["Lernpläne", "Karteikarten", "Verlauf"] as const).map((r) => (
        <span
          key={r}
          className={`-mb-px border-b-2 pb-2 ${
            r === aktiv ? "border-hs-pink text-white" : "border-transparent text-white/50"
          }`}
        >
          {r}
        </span>
      ))}
    </div>
  );
}

function MockUebungsfragen() {
  return (
    <AppFenster aktiv="Entdecken">
      <div className="flex items-center justify-between text-[0.7rem] text-white/60">
        <span className="font-[600] text-white">Frage 5 von 10</span>
        <span>Tabellenkalkulation</span>
      </div>
      <div className="mt-2 flex gap-1">
        {Array.from({ length: 10 }, (_, i) => (
          <span
            key={i}
            className={`h-1.5 flex-1 rounded-full ${i < 4 ? "bg-hs-violet" : i === 4 ? "bg-hs-pink" : "bg-white/15"}`}
          />
        ))}
      </div>
      <p className="mt-4 text-[0.85rem] font-[600] leading-[1.4] text-white">
        Berechne den Mittelwert der Zellen A1 bis A4.
      </p>
      <div className="mt-3 flex items-start gap-3">
        <div className="w-[88px] shrink-0 overflow-hidden rounded-[8px] border border-white/15 text-[0.68rem]">
          <div className="grid grid-cols-[22px_1fr] bg-white/10 text-white/60">
            <span />
            <span className="py-0.5 text-center">A</span>
          </div>
          {[12, 18, 9, 21].map((z, i) => (
            <div key={i} className="grid grid-cols-[22px_1fr] border-t border-white/10">
              <span className="bg-white/[0.06] py-0.5 text-center text-white/50">{i + 1}</span>
              <span className="px-2 py-0.5 text-right text-white">{z}</span>
            </div>
          ))}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex h-9 items-center gap-2 rounded-[10px] border border-hs-violet/60 bg-white/[0.06] px-3 text-[0.72rem] text-white/50">
            <span className="font-[600] italic text-hs-violet">fx</span>
            Funktion eintippen
          </div>
          <span className="mt-2.5 inline-flex rounded-full bg-hs-pink px-4 py-1.5 text-[0.7rem] font-[600] text-white">
            Prüfen
          </span>
        </div>
      </div>
    </AppFenster>
  );
}

function MockLernplan() {
  return (
    <AppFenster aktiv="Bibliothek">
      <Reiter aktiv="Lernpläne" />
      <div aria-hidden="true" className="mt-4 space-y-2 opacity-40">
        <div className="h-9 rounded-[10px] bg-white/10" />
        <div className="h-9 rounded-[10px] bg-white/10" />
      </div>
      <div className="absolute inset-x-3 top-14 rounded-[16px] border border-white/20 bg-[#10294a] p-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.45)] sm:inset-x-5 sm:top-16 sm:p-4">
        <p className="text-[0.82rem] font-[700] text-white">Lernplan erstellen</p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          <div className="rounded-[12px] border-2 border-hs-violet bg-hs-violet/15 p-3">
            <span className="inline-flex rounded-full bg-hs-pink px-2.5 py-0.5 text-[0.62rem] font-[700] text-white">
              Empfohlen
            </span>
            <p className="mt-2 text-[0.78rem] font-[600] text-white">Vorlage nutzen</p>
          </div>
          <div className="rounded-[12px] border border-white/20 bg-white/[0.04] p-3">
            <p className="text-[0.78rem] font-[600] text-white sm:mt-[1.35rem]">Eigenen Lernplan anlegen</p>
          </div>
        </div>
      </div>
    </AppFenster>
  );
}

function MockKarteikarten() {
  return (
    <AppFenster aktiv="Bibliothek">
      <Reiter aktiv="Karteikarten" />
      <div className="mx-auto mt-4 max-w-[300px] rounded-[16px] border border-white/20 bg-gradient-to-br from-[#16335c] to-[#10294a] px-4 py-5 text-center shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
        <p className="text-[0.62rem] font-[700] uppercase tracking-[0.12em] text-white/50">Fachbegriff</p>
        <p className="mt-2 text-[1.5rem] font-[700] leading-none text-white">Skonto</p>
        <p className="mt-3 text-[0.68rem] text-white/50">Tippe auf die Karte, um die Antwort zu sehen</p>
      </div>
      <div className="mx-auto mt-3 flex max-w-[300px] gap-2.5">
        <span className="flex-1 rounded-full border border-white/25 py-2 text-center text-[0.75rem] font-[600] text-white">
          Nochmal
        </span>
        <span className="flex-1 rounded-full bg-hs-violet py-2 text-center text-[0.75rem] font-[600] text-white">
          Gewusst
        </span>
      </div>
    </AppFenster>
  );
}

function MockPruefung() {
  const berufe = [
    { name: "Kaufmann/-frau für Büromanagement", wert: "w-[62%]" },
    { name: "Industriekaufmann/-frau", wert: "w-[38%]" },
    { name: "Bankkaufmann/-frau", wert: "w-[24%]" },
  ];
  return (
    <AppFenster aktiv="Tests">
      <p className="text-[0.62rem] font-[700] uppercase tracking-[0.12em] text-white/50">Tests</p>
      <p className="mt-1 text-[0.9rem] font-[700] leading-snug text-white">Prüfungsvorbereitung für deinen Beruf</p>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-[0.75rem] font-[600] text-white">Vollständige Prüfungssimulationen</p>
        <span className="text-[0.68rem] font-[600] text-hs-pink">Alle anzeigen</span>
      </div>
      <ul className="mt-2.5 space-y-2">
        {berufe.map((b) => (
          <li key={b.name} className="rounded-[12px] border border-white/15 bg-white/[0.05] px-3 py-2.5">
            <p className="truncate text-[0.74rem] font-[600] text-white">{b.name}</p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/15">
              <div className={`h-full rounded-full bg-gradient-to-r from-hs-violet to-hs-pink ${b.wert}`} />
            </div>
          </li>
        ))}
      </ul>
    </AppFenster>
  );
}

const karten = [
  {
    titel: "Üben mit echten Prüfungsfragen",
    text: "Du beantwortest die Aufgaben Schritt für Schritt und siehst an der Leiste, wie weit du schon bist.",
    mock: <MockUebungsfragen />,
  },
  {
    titel: "Dein eigener Lernplan",
    text: "Starte mit einer Vorlage oder lege deinen Lernplan selbst an, so wie es zu deinem Alltag passt.",
    mock: <MockLernplan />,
  },
  {
    titel: "Fachbegriffe mit Karteikarten lernen",
    text: "Du drehst die Karte um, markierst, ob du den Begriff gewusst hast, und wiederholst, was noch nicht sitzt.",
    mock: <MockKarteikarten />,
  },
  {
    titel: "Gezielt auf die Prüfung vorbereiten",
    text: "Mit vollständigen Prüfungssimulationen für Büromanagement, Industriekaufmann und Bankkaufmann übst du den Ernstfall.",
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
            Ein Blick in die Lernplattform: So sehen Übungen, Lernplan, Karteikarten und die
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
