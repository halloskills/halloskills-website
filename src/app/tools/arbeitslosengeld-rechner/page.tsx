"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import { NavV2 } from "@/components/sections/startseite-v2/nav-v2";
import { FooterV2 } from "@/components/sections/startseite-v2/footer-v2";
import {
  ToolHero,
  ToolFormCard,
  ToolFormSection,
  ToolField,
  toolInputClass,
  Segmented,
  ToolCheckRow,
  ResultsCard,
  ResultRow,
  ToolFaq,
  ToolCta,
  toolBtnResult,
  DisclaimerNote,
} from "@/components/sections/tools-v2/tools-ui";

/**
 * Arbeitslosengeld-1-Rechner (vereinfachte Orientierungsrechnung, Stand 2026).
 *
 * Formeln 1:1 aus dem SharePoint-Prototyp "arbeitslosengeld rechner
 * halloskills.html" übernommen und nach TypeScript portiert:
 *  - Leistungssatz 60 % (67 % mit Kind) vom Netto, gedeckelt auf einen
 *    vereinfachten Höchstbetrag von 2.940 €/Monat.
 *  - Anspruchsdauer nach Versicherungsmonaten + Mindestalter-Staffel.
 *  - Nebenverdienst: 165 € Freibetrag, Rest 1:1 angerechnet.
 * Keine Rechtsberatung — verbindlich rechnet nur die Agentur für Arbeit.
 */

const HOECHSTBETRAG = 2940;
const NEBEN_FREIBETRAG = 165;
const BRUTTO_NETTO_PROXY = 0.8;

const DAUER_STUFEN: { monate: number; dauer: number; minAlter?: number }[] = [
  { monate: 12, dauer: 6 },
  { monate: 16, dauer: 8 },
  { monate: 20, dauer: 10 },
  { monate: 24, dauer: 12 },
  { monate: 30, dauer: 15, minAlter: 50 },
  { monate: 36, dauer: 18, minAlter: 55 },
  { monate: 48, dauer: 24, minAlter: 58 },
];

function anspruchsdauer(versichertMonate: number, alter: number) {
  let best = 0;
  for (const s of DAUER_STUFEN) {
    if (versichertMonate >= s.monate && (!s.minAlter || alter >= s.minAlter)) {
      best = Math.max(best, s.dauer);
    }
  }
  return best;
}

function euro(n: number) {
  return Math.round(n).toLocaleString("de-DE") + " €";
}

const FAQ = [
  {
    frage: "Wie viel Arbeitslosengeld bekomme ich 2026?",
    antwort:
      "In der Regel 60 % deines bisherigen Nettoeinkommens, beziehungsweise 67 %, wenn mindestens ein Kind auf deiner Lohnsteuerkarte berücksichtigt wird. Nach oben gedeckelt ist der Betrag durch die Beitragsbemessungsgrenze der Arbeitslosenversicherung, was 2026 vereinfacht einem Höchstbetrag von rund 2.940 € im Monat entspricht. Verbindlich rechnet nur die Agentur für Arbeit.",
  },
  {
    frage: "Was ist der Unterschied zwischen Arbeitslosengeld 1 und Bürgergeld?",
    antwort: (
      <>
        Arbeitslosengeld 1 ist eine Versicherungsleistung: Du bekommst es, weil du
        vorher in die Arbeitslosenversicherung eingezahlt hast, unabhängig von deinem
        Vermögen. Bürgergeld ist dagegen eine bedürftigkeitsgeprüfte Grundsicherung
        ohne Vorleistung, dafür mit Vermögensprüfung. Läuft dein ALG-1-Anspruch aus,
        kann im Anschluss Bürgergeld infrage kommen. Eine Einschätzung dazu gibt
        unser{" "}
        <Link href="/tools/buergergeld-rechner" className="text-hs-blue underline">
          Bürgergeld-Rechner
        </Link>
        .
      </>
    ),
  },
  {
    frage: "Wie lange bekomme ich Arbeitslosengeld 1?",
    antwort:
      "Zwischen 6 und 24 Monaten, abhängig davon, wie viele Monate du versicherungspflichtig warst und wie alt du bist. Unter 50 Jahren liegt die maximale Dauer bei 12 Monaten. Ab 50, 55 und 58 Jahren kann sich die Dauer auf bis zu 15, 18 oder 24 Monate verlängern, wenn genug Versicherungsmonate vorliegen.",
  },
  {
    frage: "Wer hat überhaupt Anspruch auf Arbeitslosengeld 1?",
    antwort:
      "Grundsätzlich brauchst du mindestens 12 Monate versicherungspflichtige Beschäftigung innerhalb der letzten 30 Monate vor deiner Arbeitslosmeldung, musst dich rechtzeitig arbeitslos gemeldet haben und der Vermittlung zur Verfügung stehen. Bei häufigen kurzen Befristungen kann unter bestimmten Voraussetzungen bereits eine kürzere Anwartschaftszeit von 6 Monaten ausreichen.",
  },
  {
    frage: "Darf ich neben dem Arbeitslosengeld etwas dazuverdienen?",
    antwort:
      "Ja, solange die Nebenbeschäftigung unter 15 Wochenstunden bleibt und du sie der Agentur für Arbeit meldest. Von deinem Nebenverdienst bleiben 165 € im Monat anrechnungsfrei. Der Betrag darüber wird eins zu eins von deinem Arbeitslosengeld abgezogen, nicht nur anteilig.",
  },
  {
    frage: "Was hat eine Online-Weiterbildung mit diesem Rechner zu tun?",
    antwort:
      "Arbeitslosengeld 1 ist zeitlich begrenzt. Viele nutzen die Zeit deshalb nicht nur für die Jobsuche, sondern auch für eine neue berufliche Richtung. HalloSkills bietet Online-Weiterbildungen mit den Inhalten einer klassischen Umschulung im kaufmännischen Bereich – in 6 statt 24 Monaten.",
  },
];

export default function ArbeitslosengeldRechnerPage() {
  const [einkommenTyp, setEinkommenTyp] = useState<"netto" | "brutto">("netto");
  const [einkommen, setEinkommen] = useState(2200);
  const [kind, setKind] = useState(false);
  const [anwartschaft, setAnwartschaft] = useState(24);
  const [versichertMonate, setVersichertMonate] = useState(24);
  const [alter, setAlter] = useState(34);
  const [nebenverdienst, setNebenverdienst] = useState(0);
  const [beruehrt, setBeruehrt] = useState(false);

  const r = useMemo(() => {
    const netto = einkommenTyp === "brutto" ? einkommen * BRUTTO_NETTO_PROXY : einkommen;
    const satz = kind ? 0.67 : 0.6;
    const algVorDeckel = netto * satz;
    const alg = Math.min(algVorDeckel, HOECHSTBETRAG);
    const gedeckelt = algVorDeckel > HOECHSTBETRAG;
    const nebenAngerechnet = Math.max(0, nebenverdienst - NEBEN_FREIBETRAG);
    const algNachNeben = Math.max(0, alg - nebenAngerechnet);
    const dauer = anspruchsdauer(versichertMonate, alter || 0);
    const luecke = Math.max(0, netto - algNachNeben);
    return { netto, satz, algVorDeckel, alg, gedeckelt, nebenAngerechnet, algNachNeben, dauer, luecke };
  }, [einkommenTyp, einkommen, kind, versichertMonate, alter, nebenverdienst]);

  let anwartschaftStatus: { ton: "ok" | "warn"; text: string };
  if (anwartschaft >= 12) {
    anwartschaftStatus = {
      ton: "ok",
      text: `Mit ${anwartschaft} von 30 Monaten erfüllst du die reguläre Anwartschaftszeit.`,
    };
  } else if (anwartschaft >= 6) {
    anwartschaftStatus = {
      ton: "warn",
      text: "Unter 12 Monaten reicht es nur, wenn die Ausnahme für häufige kurze Befristungen greift (mind. 6 Monate).",
    };
  } else {
    anwartschaftStatus = {
      ton: "warn",
      text: `Mit ${anwartschaft} Monaten reicht die Anwartschaftszeit in der Regel noch nicht aus.`,
    };
  }

  return (
    <div className="hs-v2 bg-white">
      <NavV2 />

      <ToolHero
        eyebrow="Ratgeber · Rechner"
        titel="Arbeitslosengeld-Rechner"
        akzent="2026"
        intro="Trag deine Situation ein und du siehst sofort eine erste Einschätzung deines möglichen Arbeitslosengeld-1-Anspruchs (ALG 1) für 2026, mit Leistungssatz, Anspruchsdauer und dem Effekt von Nebenverdienst."
        hinweis={
          <>
            <strong className="text-hs-navy">ALG 1 ist nicht dasselbe wie Bürgergeld:</strong>{" "}
            Arbeitslosengeld 1 ist eine Versicherungsleistung ohne Vermögensprüfung. Suchst
            du stattdessen eine Einschätzung zur Grundsicherung, nutze unseren{" "}
            <Link href="/tools/buergergeld-rechner" className="text-hs-blue underline">
              Bürgergeld-Rechner
            </Link>
            .
          </>
        }
      />

      <section className="px-6 py-14 md:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1080px] gap-6 lg:grid-cols-[1.35fr_1fr]">
          <ToolFormCard>
            <ToolFormSection nr={1} titel="Dein bisheriges Einkommen">
              <div className="mb-4">
                <ToolField label="Eingabe als">
                  <Segmented
                    value={einkommenTyp}
                    onChange={setEinkommenTyp}
                    options={[
                      { value: "netto", label: "Netto" },
                      { value: "brutto", label: "Brutto" },
                    ]}
                  />
                </ToolField>
              </div>
              <ToolField
                label={einkommenTyp === "brutto" ? "Monatliches Bruttoeinkommen" : "Monatliches Nettoeinkommen"}
                hint={
                  einkommenTyp === "brutto"
                    ? "Bei Brutto-Eingabe rechnen wir mit einer groben 80-%-Faustregel auf ein Netto um."
                    : undefined
                }
              >
                <input
                  type="number"
                  min={0}
                  step={10}
                  value={einkommen}
                  onChange={(e) => setEinkommen(Math.max(0, Number(e.target.value) || 0))}
                  className={toolInputClass}
                />
              </ToolField>
            </ToolFormSection>

            <ToolFormSection nr={2} titel="Kind im Haushalt">
              <ToolCheckRow
                id="kind"
                checked={kind}
                onChange={setKind}
                label="Mindestens ein Kind wird bei mir steuerlich berücksichtigt"
                hint="Dann gilt der erhöhte Leistungssatz von 67 % statt 60 %. Entscheidend ist der Kinderfreibetrag auf deiner Lohnsteuerkarte (ELStAM)."
              />
            </ToolFormSection>

            <ToolFormSection
              nr={3}
              titel="Beschäftigung in der Arbeitslosenversicherung & Alter"
              hint="Gemeint sind Monate mit sozialversicherungspflichtiger Beschäftigung — nicht Kranken- oder Rentenversicherung."
            >
              <div className="grid gap-3.5 sm:grid-cols-3">
                <ToolField label="Monate in der ALV (letzte 30 Monate)">
                  <input
                    type="number"
                    min={0}
                    max={30}
                    value={anwartschaft}
                    onChange={(e) => setAnwartschaft(Math.max(0, Number(e.target.value) || 0))}
                    className={toolInputClass}
                  />
                </ToolField>
                <ToolField label="Monate in der ALV insgesamt (bis 5 Jahre)">
                  <input
                    type="number"
                    min={0}
                    max={60}
                    value={versichertMonate}
                    onChange={(e) => setVersichertMonate(Math.max(0, Number(e.target.value) || 0))}
                    className={toolInputClass}
                  />
                </ToolField>
                <ToolField label="Dein Alter">
                  <input
                    type="number"
                    min={16}
                    max={99}
                    value={alter}
                    onChange={(e) => setAlter(Math.max(0, Number(e.target.value) || 0))}
                    className={toolInputClass}
                  />
                </ToolField>
              </div>
              <p className="mt-3 text-[0.72rem] text-hs-muted">
                Die ersten 30 Monate entscheiden über deinen grundsätzlichen Anspruch
                (Anwartschaftszeit), die zweite Zahl zusammen mit deinem Alter über die
                Anspruchsdauer.
              </p>
            </ToolFormSection>

            <ToolFormSection nr={4} titel="Nebenverdienst (optional)">
              <ToolField label="Netto-Nebenverdienst / Monat" hint="Nur relevant, wenn die Nebenbeschäftigung unter 15 Wochenstunden bleibt.">
                <input
                  type="number"
                  min={0}
                  step={10}
                  value={nebenverdienst}
                  onChange={(e) => {
                    setNebenverdienst(Math.max(0, Number(e.target.value) || 0));
                    setBeruehrt(true);
                  }}
                  className={toolInputClass}
                />
              </ToolField>
            </ToolFormSection>
          </ToolFormCard>

          <ResultsCard>
            {!beruehrt && (
              <span className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.04em] text-white/75">
                Beispielrechnung — trag deine Zahlen ein
              </span>
            )}
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.06em] text-white/55">
              Geschätztes Arbeitslosengeld 1
            </p>
            <p className="mt-2 text-[2.5rem] font-bold leading-none tabular-nums">
              {Math.round(r.algNachNeben).toLocaleString("de-DE")}
              <span className="ml-1 text-[1.2rem] font-[600]"> € / Monat</span>
            </p>
            <p className="mb-4 mt-1 text-[0.75rem] text-white/55">
              {r.algNachNeben > 0 ? "auf Basis deiner Angaben" : "Mit diesen Angaben ergibt sich kein Zahlbetrag"}
            </p>

            <div className="border-t border-white/15 pt-3">
              <ResultRow label={`${Math.round(r.satz * 100)} % × ${euro(r.netto)}`} value={euro(r.algVorDeckel)} />
              <ResultRow label="Gedeckelt auf Höchstbetrag" value={euro(r.alg)} hidden={!r.gedeckelt} />
              <ResultRow label="− Nebenverdienst-Anrechnung" value={"− " + euro(r.nebenAngerechnet)} hidden={r.nebenAngerechnet <= 0} />
              <ResultRow label="= ALG 1 / Monat" value={euro(r.algNachNeben)} strong />
              <ResultRow label="Anspruchsdauer" value={r.dauer > 0 ? `${r.dauer} Monate` : "noch nicht erfüllt"} />
              <ResultRow label="Abstand zu deinem bisherigen Netto" value={euro(r.luecke) + " / Monat"} />
            </div>

            <div className="mt-4 flex flex-col gap-2.5">
              <Link href="/kurse" className={toolBtnResult}>
                Lehrgänge entdecken →
              </Link>
              <a
                href="https://www.pub.arbeitsagentur.de/start.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-[0.875rem] font-[600] text-white transition-colors hover:border-white"
              >
                Offizieller BA-Rechner
              </a>
            </div>

            <div className="mt-4 rounded-hs-card border border-white/15 bg-white/10 p-4">
              <h4 className="mb-2.5 text-[0.78rem] font-bold !text-white">Anwartschaft-Check</h4>
              <p
                className={`rounded-[10px] px-3 py-2 text-[0.8rem] font-[600] leading-[1.5] ${
                  anwartschaftStatus.ton === "ok" ? "bg-[#ecfdf5] text-[#067a5a]" : "bg-[#fdf1f1] text-[#b42323]"
                }`}
              >
                {anwartschaftStatus.text}
              </p>
            </div>

            <DisclaimerNote>
              Nur eine erste Orientierung, keine verbindliche Berechnung. Deine Angaben
              bleiben in deinem Browser — nichts wird gespeichert oder verschickt.
              Verbindlich rechnet nur die Agentur für Arbeit.
            </DisclaimerNote>
          </ResultsCard>
        </div>
      </section>

      <section className="border-t border-hs-line bg-hs-soft px-6 py-14 md:px-10 lg:py-16">
        <div className="mx-auto max-w-[1080px]">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-hs-pink">Zahlen 2026</p>
          <h2 className="mt-2 text-[clamp(1.3rem,3vw,1.6rem)] leading-[1.2]">
            Leistungssatz, Höchstbetrag &amp; Anspruchsdauer im Überblick
          </h2>
          <p className="mt-2 max-w-[640px] text-[0.9rem] leading-[1.65] text-hs-muted">
            Diese Werte stecken hinter dem Rechner oben. Verbindlich für deinen Einzelfall
            bleibt immer der Bescheid der Agentur für Arbeit.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="overflow-x-auto rounded-hs-card border border-hs-line bg-white p-5">
              <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.04em] text-hs-muted">
                Beispielrechnungen 2026
              </p>
              <table className="w-full text-[0.82rem]">
                <thead>
                  <tr className="text-left text-[0.68rem] uppercase tracking-[0.04em] text-hs-muted">
                    <th className="border-b border-hs-line pb-2">Netto / Monat</th>
                    <th className="border-b border-hs-line pb-2 text-right">60 % (o. Kind)</th>
                    <th className="border-b border-hs-line pb-2 text-right">67 % (mit Kind)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1.400 €", "840 €", "938 €"],
                    ["1.900 €", "1.140 €", "1.273 €"],
                    ["2.600 €", "1.560 €", "1.742 €"],
                    ["3.400 €", "2.040 €", "2.278 €"],
                    ["ab ca. 4.900 €", "ca. 2.940 € (Deckel)", "ca. 2.940 € (Deckel)"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="border-b border-hs-line py-2">{row[0]}</td>
                      <td className="border-b border-hs-line py-2 text-right font-[600] text-hs-navy">{row[1]}</td>
                      <td className="border-b border-hs-line py-2 text-right font-[600] text-hs-navy">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto rounded-hs-card border border-hs-line bg-white p-5">
              <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.04em] text-hs-muted">
                Anspruchsdauer nach Versicherungsmonaten &amp; Alter
              </p>
              <table className="w-full text-[0.82rem]">
                <thead>
                  <tr className="text-left text-[0.68rem] uppercase tracking-[0.04em] text-hs-muted">
                    <th className="border-b border-hs-line pb-2">Versicherungsmonate</th>
                    <th className="border-b border-hs-line pb-2 text-right">Ab Alter</th>
                    <th className="border-b border-hs-line pb-2 text-right">Dauer</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["12", "–", "6 Monate"],
                    ["16", "–", "8 Monate"],
                    ["20", "–", "10 Monate"],
                    ["24", "–", "12 Monate"],
                    ["30", "50", "15 Monate"],
                    ["36", "55", "18 Monate"],
                    ["48", "58", "24 Monate"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="border-b border-hs-line py-2">{row[0]}</td>
                      <td className="border-b border-hs-line py-2 text-right">{row[1]}</td>
                      <td className="border-b border-hs-line py-2 text-right font-[600] text-hs-navy">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-6 max-w-[680px] text-[0.78rem] leading-[1.7] text-hs-muted">
            <strong className="text-hs-navy">Höchstbetrag 2026:</strong> Dieser Rechner
            arbeitet vereinfacht mit einem Höchstbetrag von rund 2.940 € im Monat. Die
            tatsächliche BA-Höchstgrenze hängt zusätzlich von deiner Steuerklasse ab — für
            einen verbindlichen Wert nutze das{" "}
            <a
              href="https://www.pub.arbeitsagentur.de/start.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hs-blue underline"
            >
              Selbstberechnungsprogramm der Agentur für Arbeit
            </a>
            .
          </p>
        </div>
      </section>

      <section className="px-6 py-14 md:px-10 lg:py-16">
        <div className="mx-auto max-w-[1080px]">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-hs-pink">Häufige Fragen</p>
          <h2 className="mt-2 text-[clamp(1.3rem,3vw,1.6rem)] leading-[1.2]">
            Arbeitslosengeld-Rechner: was du noch wissen solltest
          </h2>
          <div className="mt-8">
            <ToolFaq items={FAQ} />
          </div>
        </div>
      </section>

      <ToolCta
        titel="Hallo Zukunft. Die Zeit im Arbeitslosengeld-Bezug ist begrenzt — deine nächste Richtung nicht."
        text="Eine Online-Weiterbildung ändert nichts an deiner aktuellen Situation von heute auf morgen. Aber sie kann der Anfang einer Richtung sein — mit den Inhalten einer klassischen Umschulung, komprimiert auf 6 statt 24 Monate."
      />

      <FooterV2 />
    </div>
  );
}
