import React from "react";
import { Eyebrow, Logo } from "./hs-ui";

/* ── Mockup-Bausteine: komplett in HTML/CSS, keine Bilder ──
   Inhalte sind nur angedeutet (graue Platzhalter-Balken), keine konkreten Lerninhalte. */

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
 * Ausblenden nach unten (stark = unten angedeutete Inhalte).
 */
function AppFenster({
  aktiv,
  stark = false,
  children,
}: {
  aktiv: Navi;
  stark?: boolean;
  children: React.ReactNode;
}) {
  const navi: Navi[] = ["Home", "Entdecken", "Bibliothek", "Tests"];
  return (
    <div
      className={`flex h-[320px] overflow-hidden rounded-[20px] border border-white/15 bg-[#0b2036] text-white ${
        stark
          ? "[mask-image:linear-gradient(to_bottom,black_58%,transparent)]"
          : "[mask-image:linear-gradient(to_bottom,black_88%,transparent)]"
      }`}
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

function Reiter({ reiter, aktiv }: { reiter: string[]; aktiv: string }) {
  return (
    <div className="flex gap-4 border-b border-white/10 text-[0.72rem] font-[500]">
      {reiter.map((r) => (
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

/** Grauer, abgerundeter Platzhalter-Balken statt konkretem Inhalt. */
function Balken({ breite = "w-full", hoch = "h-2.5" }: { breite?: string; hoch?: string }) {
  return <span className={`block rounded-full bg-white/15 ${hoch} ${breite}`} />;
}

function PfeilRechts() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 text-white/60">
      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MockUebungsfragen() {
  return (
    <AppFenster aktiv="Entdecken">
      <div className="flex items-center justify-between text-[0.7rem] text-white/60">
        <span className="font-[600] text-white">Frage 5 von 10</span>
      </div>
      <div className="mt-2 flex gap-1">
        {Array.from({ length: 10 }, (_, i) => (
          <span
            key={i}
            className={`h-1.5 flex-1 rounded-full ${i < 4 ? "bg-hs-violet" : i === 4 ? "bg-hs-pink" : "bg-white/15"}`}
          />
        ))}
      </div>
      <div className="mt-5 space-y-2">
        <Balken />
        <Balken breite="w-3/4" />
      </div>
      <div className="mt-4 space-y-2">
        {[false, true, false].map((gewaehlt, i) => (
          <div
            key={i}
            className={`flex h-9 items-center gap-3 rounded-[12px] border px-3 ${
              gewaehlt ? "border-hs-violet bg-hs-violet/20" : "border-white/15 bg-white/[0.05]"
            }`}
          >
            <span
              className={`size-3.5 shrink-0 rounded-full border ${
                gewaehlt ? "border-hs-violet bg-hs-violet" : "border-white/30"
              }`}
            />
            <Balken breite={i === 1 ? "w-3/5" : i === 0 ? "w-1/2" : "w-2/3"} hoch="h-2" />
          </div>
        ))}
      </div>
      <div className="mt-3 flex justify-end">
        <span className="inline-flex rounded-full bg-hs-pink px-5 py-1.5 text-[0.72rem] font-[600] text-white">
          Prüfen
        </span>
      </div>
    </AppFenster>
  );
}

function MockLernplan() {
  const optionen = [
    {
      titel: "Mit Vorlage starten",
      text: "Nimm einen fertigen Plan und pass ihn an dich an.",
      markiert: true,
      ikon: <path d="M5 4h10l4 4v12H5zM15 4v4h4M8 12h8M8 16h5" />,
    },
    {
      titel: "Leeren Lernplan anlegen",
      text: "Wähle deine Themen selbst aus.",
      markiert: false,
      ikon: <path d="M12 5v14M5 12h14" />,
    },
  ];
  return (
    <AppFenster aktiv="Bibliothek">
      <Reiter reiter={["Lernpläne", "Karteikarten", "Verlauf"]} aktiv="Lernpläne" />
      <div aria-hidden="true" className="mt-4 space-y-2 opacity-40">
        <div className="h-9 rounded-[10px] bg-white/10" />
        <div className="h-9 rounded-[10px] bg-white/10" />
      </div>
      <div className="absolute inset-x-3 top-14 rounded-[16px] border border-white/20 bg-[#10294a] p-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.45)] sm:inset-x-5 sm:top-16 sm:p-4">
        <p className="text-[0.82rem] font-[700] text-white">Lernplan erstellen</p>
        <div className="mt-3 space-y-2">
          {optionen.map((o) => (
            <div
              key={o.titel}
              className={`relative flex items-center gap-3 rounded-[12px] p-3 ${
                o.markiert ? "border-2 border-hs-violet bg-hs-violet/15" : "border border-white/20 bg-white/[0.04]"
              }`}
            >
              {o.markiert && (
                <span className="absolute -top-2.5 right-3 rounded-full bg-hs-pink px-2.5 py-0.5 text-[0.62rem] font-[700] text-white">
                  Empfohlen
                </span>
              )}
              <span className="flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-white/10 text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {o.ikon}
                </svg>
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[0.78rem] font-[700] text-white">{o.titel}</span>
                <span className="mt-0.5 block text-[0.68rem] leading-snug text-white/55">{o.text}</span>
              </span>
              <PfeilRechts />
            </div>
          ))}
        </div>
      </div>
    </AppFenster>
  );
}

function TestKarte() {
  return (
    <div className="rounded-[12px] border border-white/15 bg-white/[0.05] p-3">
      <div className="flex items-start justify-between">
        <span className="flex size-7 items-center justify-center rounded-[9px] bg-hs-violet/25 text-white">
          <NaviIkon name="Tests" />
        </span>
        <span className="size-4 rounded-full border border-white/35" />
      </div>
      <div className="mt-3 space-y-1.5">
        <Balken breite="w-4/5" hoch="h-2" />
        <Balken breite="w-3/5" hoch="h-2" />
      </div>
    </div>
  );
}

function MockTests() {
  return (
    <AppFenster aktiv="Tests" stark>
      <p className="text-[0.9rem] font-[700] leading-snug text-white">Tests zu deinem Lehrgang</p>
      <div className="mt-3 flex items-center justify-between gap-3">
        <p className="min-w-0 flex-1 truncate text-[0.74rem] font-[600] text-white">Kaufmann/-frau für Büromanagement</p>
        <span className="shrink-0 text-[0.66rem] font-[600] text-hs-pink">Alle anzeigen</span>
      </div>
      <div className="mt-1.5 flex items-center gap-2">
        <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/15" />
        <span className="shrink-0 text-[0.64rem] text-white/60">0 %</span>
      </div>
      <div className="mt-2.5 grid grid-cols-2 gap-2.5">
        <TestKarte />
        <TestKarte />
      </div>
      <p className="mt-5 text-[0.74rem] font-[600] text-white/80">Industriekaufmann/-frau</p>
      <div className="mt-2.5 grid grid-cols-2 gap-2.5">
        <TestKarte />
        <TestKarte />
      </div>
    </AppFenster>
  );
}

function Sterne({ n }: { n: number }) {
  return (
    <span className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 20 20" className={i < n ? "text-hs-pink" : "text-white/20"}>
          <path fill="currentColor" d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6L10 15.1 4.7 18l1.1-6L1.4 7.8l6-.8L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

function MockLernbegleitung() {
  const zeilen = [
    { name: "Sandra K.", lehrgang: "Büromanagement", prozent: 72, sterne: 4, ton: "bg-hs-violet" },
    { name: "Mehmet A.", lehrgang: "Industriekaufmann", prozent: 45, sterne: 3, ton: "bg-hs-pink" },
    { name: "Jana W.", lehrgang: "Bankkaufmann", prozent: 88, sterne: 5, ton: "bg-[#217b83]" },
  ];
  const spalten = "grid-cols-[1fr_82px] sm:grid-cols-[1.2fr_1fr_82px]";
  return (
    <AppFenster aktiv="Home" stark>
      <p className="text-[0.9rem] font-[700] leading-snug text-white">Dein Lehrgang</p>
      <div className="mt-2">
        <Reiter reiter={["Lernpläne", "Tests"]} aktiv="Lernpläne" />
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {["Alle Lehrgänge", "Alle Gruppen"].map((f) => (
          <span key={f} className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-3 py-1 text-[0.66rem] font-[500] text-white/85">
            {f}
            <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        ))}
      </div>
      <div className={`mt-3 grid ${spalten} gap-3 border-b border-white/10 pb-1.5 text-[0.62rem] font-[600] uppercase tracking-[0.08em] text-white/45`}>
        <span>Name</span>
        <span className="hidden sm:block">Fortschritt</span>
        <span className="text-right sm:text-left">Verständnis</span>
      </div>
      {zeilen.map((z) => (
        <div key={z.name} className={`grid ${spalten} items-center gap-3 border-b border-white/[0.07] py-2`}>
          <span className="flex min-w-0 items-center gap-2">
            <span className={`flex size-7 shrink-0 items-center justify-center rounded-full text-[0.62rem] font-[700] text-white ${z.ton}`}>
              {z.name.split(" ").map((t) => t[0]).join("")}
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[0.74rem] font-[600] text-white">{z.name}</span>
              <span className="block truncate text-[0.62rem] text-white/50">{z.lehrgang}</span>
            </span>
          </span>
          <span className="hidden items-center gap-2 sm:flex">
            <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/15">
              <span className="block h-full rounded-full bg-gradient-to-r from-hs-violet to-hs-pink" style={{ width: `${z.prozent}%` }} />
            </span>
            <span className="w-8 text-right text-[0.64rem] text-white/70">{z.prozent} %</span>
          </span>
          <span className="flex justify-end sm:justify-start">
            <Sterne n={z.sterne} />
          </span>
        </div>
      ))}
      <div className={`grid ${spalten} items-center gap-3 py-2`}>
        <span className="flex items-center gap-2">
          <span className="size-7 rounded-full bg-white/15" />
          <span className="w-16"><Balken hoch="h-2" /></span>
        </span>
        <span className="hidden sm:block"><Balken hoch="h-1.5" /></span>
        <span><Balken hoch="h-2" /></span>
      </div>
    </AppFenster>
  );
}

const karten = [
  {
    titel: "Üben mit prüfungsnahen Aufgaben",
    text: "Du beantwortest die Aufgaben Schritt für Schritt und siehst an der Leiste, wie weit du schon bist.",
    mock: <MockUebungsfragen />,
  },
  {
    titel: "Dein eigener Lernplan",
    text: "Starte mit einer Vorlage oder lege deinen Lernplan selbst an, so wie es zu deinem Alltag passt.",
    mock: <MockLernplan />,
  },
  {
    titel: "Dein Wissen testen",
    text: "Mit Tests zu deinem Lehrgang siehst du, was schon sitzt und wo du noch üben solltest.",
    mock: <MockTests />,
  },
  {
    titel: "Deine Lernbegleitung behält den Überblick",
    text: "Deine Lernbegleiterinnen und Lernbegleiter sehen, wo du stehst, und unterstützen dich, wenn es mal hakt.",
    mock: <MockLernbegleitung />,
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
            Ein Blick in die Lernplattform: So sehen Übungen, Lernplan, Tests und die
            Lernbegleitung aus.
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
