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
 * Bürgergeld- / Grundsicherungsgeld-Rechner, Stand 2026.
 *
 * Formeln 1:1 aus dem SharePoint-Prototyp "buergergeld rechner
 * halloskills.html" übernommen und nach TypeScript portiert:
 *  - Regelsätze nach Haushaltstyp und Kinder-Altersstufen
 *  - Mehrbedarfe (Alleinerziehung, Schwangerschaft ab 13. Woche,
 *    Behinderung/Teilhabe, kostenaufwändige Ernährung), gedeckelt auf den
 *    eigenen Regelbedarf (§ 21 Abs. 6 S. 2 SGB II)
 *  - Kindersofortzuschlag 25 €/Kind
 *  - Gestaffelter Erwerbstätigenfreibetrag (§ 11b SGB II)
 *  - Schonvermögen nach Alter
 * Keine Rechtsberatung — verbindlich entscheidet nur das Jobcenter.
 */

const REGELSATZ_1 = 563; // Alleinstehend / Alleinerziehend
const REGELSATZ_2 = 506; // Partner:in
const REGELSATZ_3 = 451; // 18-24 im Haushalt der Eltern
const REGELSATZ_4 = 471; // 14-17 Jahre
const REGELSATZ_5 = 390; // 6-13 Jahre
const REGELSATZ_6 = 357; // 0-5 Jahre
const KINDERGELD = 259;
const KINDERSOFORTZUSCHLAG = 25;

function euro(n: number) {
  return Math.round(n).toLocaleString("de-DE") + " €";
}

function erwerbsfreibetrag(x: number, hatKinderInBG: boolean) {
  if (x <= 0) return 0;
  let fb = 0;
  fb += Math.min(x, 100);
  if (x > 100) fb += Math.min(x - 100, 420) * 0.2;
  if (x > 520) fb += Math.min(x - 520, 480) * 0.3;
  const obergrenze = hatKinderInBG ? 1500 : 1200;
  if (x > 1000) fb += Math.min(x - 1000, Math.max(0, obergrenze - 1000)) * 0.1;
  return fb;
}
function anrechenbaresErwerbseinkommen(x: number, hatKinderInBG: boolean) {
  return Math.max(0, x - erwerbsfreibetrag(x, hatKinderInBG));
}
function schonvermoegen(alter: number) {
  if (alter <= 30) return 5000;
  if (alter <= 40) return 10000;
  if (alter <= 50) return 12500;
  return 20000;
}

function Counter({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-hs-input border border-hs-border px-3.5 py-2.5">
      <span className="text-[0.82rem] font-[600] text-hs-navy">{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label={`${label} verringern`}
          onClick={() => onChange(Math.max(0, value - 1))}
          className="flex size-7 items-center justify-center rounded-full border border-hs-border text-hs-navy hover:border-hs-violet hover:text-hs-violet"
        >
          −
        </button>
        <span className="w-4 text-center text-[0.9rem] font-[600] tabular-nums text-hs-navy">{value}</span>
        <button
          type="button"
          aria-label={`${label} erhöhen`}
          onClick={() => onChange(Math.min(9, value + 1))}
          className="flex size-7 items-center justify-center rounded-full border border-hs-border text-hs-navy hover:border-hs-violet hover:text-hs-violet"
        >
          +
        </button>
      </div>
    </div>
  );
}

const FAQ = [
  {
    frage: "Wie genau ist der HalloSkills Bürgergeld-Rechner?",
    antwort:
      "Der Rechner bildet die zentralen Regeln der Grundsicherung 2026 ab: Regelsätze, Kindersofortzuschlag, die wichtigsten Mehrbedarfe, Wohnkosten und die Freibeträge beim Hinzuverdienst. Er rechnet vereinfacht mit deinem Netto- statt Brutto-Einkommen und ersetzt keine verbindliche Berechnung durch das Jobcenter, da Einzelfälle individuell geprüft werden.",
  },
  {
    frage: "Was ist der Unterschied zwischen Bürgergeld und Arbeitslosengeld 1?",
    antwort: (
      <>
        Bürgergeld ist eine bedürftigkeitsgeprüfte Grundsicherung ohne Vorleistung, dafür
        mit Vermögensprüfung. Arbeitslosengeld 1 ist dagegen eine Versicherungsleistung,
        die du bekommst, weil du vorher eingezahlt hast — unabhängig von deinem Vermögen.
        Eine Einschätzung dazu gibt unser{" "}
        <Link href="/tools/arbeitslosengeld-rechner" className="text-hs-blue underline">
          Arbeitslosengeld-Rechner
        </Link>
        .
      </>
    ),
  },
  {
    frage: "Wie wird mein Erwerbseinkommen angerechnet?",
    antwort:
      "Nicht dein komplettes Einkommen wird abgezogen. Die ersten 100 € bleiben komplett anrechnungsfrei, vom Bereich bis 520 € bleiben 20 %, vom Bereich bis 1.000 € bleiben 30 % und darüber, bis zu einer Obergrenze von 1.200 € (bzw. 1.500 € mit Kindern im Haushalt), bleiben nochmal 10 % anrechnungsfrei.",
  },
  {
    frage: "Wird mein Vermögen angerechnet?",
    antwort:
      "Es gibt ein Schonvermögen, das nach deinem Alter gestaffelt ist: 5.000 € bis 30 Jahre, 10.000 € bis 40 Jahre, 12.500 € bis 50 Jahre und 20.000 € darüber. Liegst du mit deinem Vermögen darunter, wird in der Regel nicht angerechnet.",
  },
  {
    frage: "Was hat eine Online-Umschulung mit Bürgergeld zu tun?",
    antwort:
      "Bürgergeld-Empfänger:innen können unter bestimmten Voraussetzungen über einen Bildungsgutschein gefördert werden. HalloSkills bietet Online-Weiterbildungen mit den Inhalten einer klassischen Umschulung im kaufmännischen Bereich – in 6 statt 24 Monaten.",
  },
];

export default function BuergergeldRechnerPage() {
  const [haushalt, setHaushalt] = useState<"alleinstehend" | "alleinerziehend" | "paar">(
    "alleinerziehend",
  );
  const [k05, setK05] = useState(0);
  const [k613, setK613] = useState(1);
  const [k1417, setK1417] = useState(0);
  const [k1824, setK1824] = useState(0);

  const [schwanger, setSchwanger] = useState(false);
  const [ssw, setSsw] = useState(13);
  const [behinderung, setBehinderung] = useState(false);
  const [ernaehrung, setErnaehrung] = useState(false);
  const [ernaehrungBetrag, setErnaehrungBetrag] = useState(0);

  const [miete, setMiete] = useState(500);
  const [nebenkosten, setNebenkosten] = useState(80);
  const [heizkosten, setHeizkosten] = useState(70);

  const [einkommenAntrag, setEinkommenAntrag] = useState(0);
  const [einkommenPartner, setEinkommenPartner] = useState(0);
  const [sonstiges, setSonstiges] = useState(0);

  const [alter, setAlter] = useState(29);
  const [partnerAlter, setPartnerAlter] = useState(29);
  const [vermoegen, setVermoegen] = useState(0);
  const [beruehrt, setBeruehrt] = useState(false);

  const isPaar = haushalt === "paar";
  const isAlleinerziehend = haushalt === "alleinerziehend";

  const r = useMemo(() => {
    const totalKinder = k05 + k613 + k1417 + k1824;
    const minderjaehrigeKinder = k05 + k613 + k1417;
    const hatKinderInBG = totalKinder > 0;

    const regelAntrag = isPaar ? REGELSATZ_2 : REGELSATZ_1;
    const regelPartner = isPaar ? REGELSATZ_2 : 0;
    const regelKinder = k05 * REGELSATZ_6 + k613 * REGELSATZ_5 + k1417 * REGELSATZ_4 + k1824 * REGELSATZ_3;
    const regelbedarf = regelAntrag + regelPartner + regelKinder;

    const eigenerRegelsatz = isPaar ? REGELSATZ_2 : REGELSATZ_1;
    let mehrbedarf = 0;
    const details: string[] = [];

    if (isAlleinerziehend && minderjaehrigeKinder > 0) {
      const proKind = 0.12 * minderjaehrigeKinder;
      const mindestbedingung = k05 > 0 || (k05 + k613 >= 2 && k05 + k613 <= 3);
      const anteil = Math.min(0.6, Math.max(proKind, mindestbedingung ? 0.36 : 0));
      const betrag = anteil * REGELSATZ_1;
      mehrbedarf += betrag;
      details.push(`Alleinerziehend (${Math.round(anteil * 100)} %): ${euro(betrag)}`);
    }
    if (schwanger && ssw >= 13) {
      const b = 0.17 * eigenerRegelsatz;
      mehrbedarf += b;
      details.push(`Schwangerschaft (17 %): ${euro(b)}`);
    }
    if (behinderung) {
      const b = 0.35 * eigenerRegelsatz;
      mehrbedarf += b;
      details.push(`Teilhabeleistung (35 %): ${euro(b)}`);
    }
    if (ernaehrung && ernaehrungBetrag > 0) {
      mehrbedarf += ernaehrungBetrag;
      details.push(`Kostenaufwändige Ernährung: ${euro(ernaehrungBetrag)}`);
    }
    mehrbedarf = Math.min(mehrbedarf, eigenerRegelsatz);

    const kindersofortzuschlag = totalKinder * KINDERSOFORTZUSCHLAG;
    const wohnkosten = miete + nebenkosten + heizkosten;
    const gesamtbedarf = regelbedarf + mehrbedarf + kindersofortzuschlag + wohnkosten;

    const anrechEinkAntrag = anrechenbaresErwerbseinkommen(einkommenAntrag, hatKinderInBG);
    const anrechEinkPartner = isPaar ? anrechenbaresErwerbseinkommen(einkommenPartner, hatKinderInBG) : 0;
    const erwerbAngerechnet = anrechEinkAntrag + anrechEinkPartner;

    const kindergeldGesamt = totalKinder * KINDERGELD;
    const sonstigesAngerechnet = Math.max(0, sonstiges - 30);
    const gesamtEinkommenAngerechnet = erwerbAngerechnet + kindergeldGesamt + sonstigesAngerechnet;

    const ergebnis = Math.max(0, gesamtbedarf - gesamtEinkommenAngerechnet);

    const schon = schonvermoegen(alter || 29) + (isPaar ? schonvermoegen(partnerAlter || alter || 29) : 0);
    const vermoegenOk = vermoegen <= schon;

    return {
      regelbedarf,
      mehrbedarf,
      mehrbedarfDetails: details,
      kindersofortzuschlag,
      wohnkosten,
      gesamtbedarf,
      erwerbAngerechnet,
      kindergeldGesamt,
      sonstigesAngerechnet,
      ergebnis,
      schon,
      vermoegenOk,
      totalKinder,
    };
  }, [
    k05,
    k613,
    k1417,
    k1824,
    isPaar,
    isAlleinerziehend,
    schwanger,
    ssw,
    behinderung,
    ernaehrung,
    ernaehrungBetrag,
    miete,
    nebenkosten,
    heizkosten,
    einkommenAntrag,
    einkommenPartner,
    sonstiges,
    alter,
    partnerAlter,
    vermoegen,
  ]);

  return (
    <div className="hs-v2 bg-white">
      <NavV2 />

      <ToolHero
        eyebrow="Ratgeber · Rechner"
        titel="Bürgergeld-Rechner"
        akzent="2026"
        intro="Drei kurze Blöcke zu deinem Haushalt, deinen Wohnkosten und deinem Einkommen — und du siehst sofort eine erste Einschätzung deines möglichen Bürgergeld- bzw. Grundsicherungsgeld-Anspruchs für 2026."
        hinweis={
          <>
            <strong className="text-hs-navy">Bürgergeld ist nicht dasselbe wie ALG 1:</strong>{" "}
            Bürgergeld ist eine bedürftigkeitsgeprüfte Grundsicherung mit Vermögensprüfung.
            Beziehst du eine Versicherungsleistung, nutze stattdessen unseren{" "}
            <Link href="/tools/arbeitslosengeld-rechner" className="text-hs-blue underline">
              Arbeitslosengeld-Rechner
            </Link>
            .
          </>
        }
      />

      <section className="px-6 py-14 md:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1080px] gap-6 lg:grid-cols-[1.35fr_1fr]">
          <ToolFormCard>
            <ToolFormSection nr={1} titel="Dein Haushalt">
              <ToolField label="Haushaltstyp">
                <Segmented
                  value={haushalt}
                  onChange={(v) => {
                    setHaushalt(v);
                    setBeruehrt(true);
                  }}
                  options={[
                    { value: "alleinstehend", label: "Alleinstehend" },
                    { value: "alleinerziehend", label: "Alleinerziehend" },
                    { value: "paar", label: "Paar" },
                  ]}
                />
              </ToolField>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Counter label="Kinder 0–5 Jahre" value={k05} onChange={setK05} />
                <Counter label="Kinder 6–13 Jahre" value={k613} onChange={setK613} />
                <Counter label="Kinder 14–17 Jahre" value={k1417} onChange={setK1417} />
                <Counter label="Junge Erwachsene 18–24 (im Haushalt)" value={k1824} onChange={setK1824} />
              </div>

              <div className="mt-4 grid gap-3.5 sm:grid-cols-2">
                <ToolField label="Dein Alter (für Schonvermögen)">
                  <input
                    type="number"
                    min={16}
                    max={99}
                    value={alter}
                    onChange={(e) => setAlter(Math.max(0, Number(e.target.value) || 0))}
                    className={toolInputClass}
                  />
                </ToolField>
                {isPaar && (
                  <ToolField label="Alter Partner:in">
                    <input
                      type="number"
                      min={16}
                      max={99}
                      value={partnerAlter}
                      onChange={(e) => setPartnerAlter(Math.max(0, Number(e.target.value) || 0))}
                      className={toolInputClass}
                    />
                  </ToolField>
                )}
              </div>

              <div className="mt-4 flex flex-col gap-1">
                <ToolCheckRow
                  id="schwanger"
                  checked={schwanger}
                  onChange={setSchwanger}
                  label="Ich bin schwanger (ab der 13. Woche)"
                />
                {schwanger && (
                  <ToolField label="Schwangerschaftswoche">
                    <input
                      type="number"
                      min={1}
                      max={42}
                      value={ssw}
                      onChange={(e) => setSsw(Math.max(0, Number(e.target.value) || 0))}
                      className={`${toolInputClass} max-w-[160px]`}
                    />
                  </ToolField>
                )}
                <ToolCheckRow
                  id="behinderung"
                  checked={behinderung}
                  onChange={setBehinderung}
                  label="Ich erhalte Leistungen zur Teilhabe am Arbeitsleben"
                />
                <ToolCheckRow
                  id="ernaehrung"
                  checked={ernaehrung}
                  onChange={setErnaehrung}
                  label="Ich habe einen ärztlich bestätigten Mehrbedarf für kostenaufwändige Ernährung"
                />
                {ernaehrung && (
                  <ToolField label="Betrag / Monat">
                    <input
                      type="number"
                      min={0}
                      step={5}
                      value={ernaehrungBetrag}
                      onChange={(e) => setErnaehrungBetrag(Math.max(0, Number(e.target.value) || 0))}
                      className={`${toolInputClass} max-w-[160px]`}
                    />
                  </ToolField>
                )}
              </div>
            </ToolFormSection>

            <ToolFormSection nr={2} titel="Wohnkosten">
              <div className="grid gap-3.5 sm:grid-cols-3">
                <ToolField label="Kaltmiete">
                  <input
                    type="number"
                    min={0}
                    step={10}
                    value={miete}
                    onChange={(e) => {
                      setMiete(Math.max(0, Number(e.target.value) || 0));
                      setBeruehrt(true);
                    }}
                    className={toolInputClass}
                  />
                </ToolField>
                <ToolField label="Nebenkosten">
                  <input
                    type="number"
                    min={0}
                    step={5}
                    value={nebenkosten}
                    onChange={(e) => setNebenkosten(Math.max(0, Number(e.target.value) || 0))}
                    className={toolInputClass}
                  />
                </ToolField>
                <ToolField label="Heizkosten">
                  <input
                    type="number"
                    min={0}
                    step={5}
                    value={heizkosten}
                    onChange={(e) => setHeizkosten(Math.max(0, Number(e.target.value) || 0))}
                    className={toolInputClass}
                  />
                </ToolField>
              </div>
              <p className="mt-3 text-[0.72rem] text-hs-muted">
                Angemessene Unterkunfts- und Heizkosten werden in der Regel vollständig
                übernommen. Was „angemessen" ist, legt dein Jobcenter lokal fest.
              </p>
            </ToolFormSection>

            <ToolFormSection nr={3} titel="Einkommen & Vermögen">
              <div className="grid gap-3.5 sm:grid-cols-2">
                <ToolField label="Dein Netto-Erwerbseinkommen / Monat">
                  <input
                    type="number"
                    min={0}
                    step={10}
                    value={einkommenAntrag}
                    onChange={(e) => {
                      setEinkommenAntrag(Math.max(0, Number(e.target.value) || 0));
                      setBeruehrt(true);
                    }}
                    className={toolInputClass}
                  />
                </ToolField>
                {isPaar && (
                  <ToolField label="Netto-Erwerbseinkommen Partner:in / Monat">
                    <input
                      type="number"
                      min={0}
                      step={10}
                      value={einkommenPartner}
                      onChange={(e) => setEinkommenPartner(Math.max(0, Number(e.target.value) || 0))}
                      className={toolInputClass}
                    />
                  </ToolField>
                )}
                <ToolField label="Sonstiges Einkommen / Monat" hint="z. B. Unterhalt (30 € Pauschale anrechnungsfrei)">
                  <input
                    type="number"
                    min={0}
                    step={10}
                    value={sonstiges}
                    onChange={(e) => setSonstiges(Math.max(0, Number(e.target.value) || 0))}
                    className={toolInputClass}
                  />
                </ToolField>
                <ToolField label="Vermögen gesamt" hint="Erspartes, Wertpapiere etc.">
                  <input
                    type="number"
                    min={0}
                    step={100}
                    value={vermoegen}
                    onChange={(e) => setVermoegen(Math.max(0, Number(e.target.value) || 0))}
                    className={toolInputClass}
                  />
                </ToolField>
              </div>
            </ToolFormSection>
          </ToolFormCard>

          <ResultsCard>
            {!beruehrt && (
              <span className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.04em] text-white/75">
                Beispielrechnung — trag deine Zahlen ein
              </span>
            )}
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.06em] text-white/55">
              Geschätztes Bürgergeld
            </p>
            <p className="mt-2 text-[2.5rem] font-bold leading-none tabular-nums">
              {Math.round(r.ergebnis).toLocaleString("de-DE")}
              <span className="ml-1 text-[1.2rem] font-[600]"> € / Monat</span>
            </p>
            <p className="mb-4 mt-1 text-[0.75rem] text-white/55">
              {r.ergebnis > 0 ? "auf Basis deiner Angaben" : "Dein Einkommen deckt euren Bedarf — kein Anspruch"}
            </p>

            <div className="border-t border-white/15 pt-3">
              <ResultRow label="Regelbedarf" value={euro(r.regelbedarf)} />
              <ResultRow label="Mehrbedarfe" value={euro(r.mehrbedarf)} hidden={r.mehrbedarf <= 0} />
              <ResultRow
                label="Kindersofortzuschlag"
                value={euro(r.kindersofortzuschlag)}
                hidden={r.kindersofortzuschlag <= 0}
              />
              <ResultRow label="Wohnkosten" value={euro(r.wohnkosten)} />
              <ResultRow label="= Gesamtbedarf" value={euro(r.gesamtbedarf)} strong />
              <ResultRow
                label="− Angerechnetes Erwerbseinkommen"
                value={"− " + euro(r.erwerbAngerechnet)}
                hidden={r.erwerbAngerechnet <= 0}
              />
              <ResultRow
                label="− Kindergeld"
                value={"− " + euro(r.kindergeldGesamt)}
                hidden={r.kindergeldGesamt <= 0}
              />
              <ResultRow
                label="− Sonstiges Einkommen"
                value={"− " + euro(r.sonstigesAngerechnet)}
                hidden={r.sonstigesAngerechnet <= 0}
              />
              <ResultRow label="= Bürgergeld / Monat" value={euro(r.ergebnis)} strong />
            </div>

            <div className="mt-4 flex flex-col gap-2.5">
              <Link href="/kurse" className={toolBtnResult}>
                Lehrgänge entdecken →
              </Link>
              <a
                href="https://www.arbeitsagentur.de/buergergeld-rechner"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-[0.875rem] font-[600] text-white transition-colors hover:border-white"
              >
                Offizielle Infos (BA)
              </a>
            </div>

            {vermoegen > 0 && (
              <div className="mt-4 rounded-hs-card border border-white/15 bg-white/10 p-4">
                <h4 className="mb-2.5 text-[0.78rem] font-bold !text-white">Vermögens-Check</h4>
                <p className="mb-2 text-[0.75rem] text-white/60">
                  Schonvermögen (Richtwert): {euro(r.schon)}
                </p>
                <p
                  className={`rounded-[10px] px-3 py-2 text-[0.8rem] font-[600] leading-[1.5] ${
                    r.vermoegenOk ? "bg-[#ecfdf5] text-[#067a5a]" : "bg-[#fdf1f1] text-[#b42323]"
                  }`}
                >
                  {r.vermoegenOk
                    ? "Dein angegebenes Vermögen liegt unter dem Freibetrag — es wird voraussichtlich nicht angerechnet."
                    : `Dein Vermögen liegt rund ${euro(vermoegen - r.schon)} über dem Freibetrag. Das kann den Anspruch mindern oder ausschließen.`}
                </p>
              </div>
            )}

            <DisclaimerNote>
              Nur eine erste Orientierung, keine verbindliche Berechnung. Deine Angaben
              bleiben in deinem Browser — nichts wird gespeichert oder verschickt.
              Verbindlich entscheidet nur dein Jobcenter.
            </DisclaimerNote>
          </ResultsCard>
        </div>
      </section>

      <section className="border-t border-hs-line bg-hs-soft px-6 py-14 md:px-10 lg:py-16">
        <div className="mx-auto max-w-[1080px]">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-hs-pink">Zahlen 2026</p>
          <h2 className="mt-2 text-[clamp(1.3rem,3vw,1.6rem)] leading-[1.2]">Regelsätze im Überblick</h2>
          <div className="mt-8 overflow-x-auto rounded-hs-card border border-hs-line bg-white p-5">
            <table className="w-full text-[0.82rem]">
              <thead>
                <tr className="text-left text-[0.68rem] uppercase tracking-[0.04em] text-hs-muted">
                  <th className="border-b border-hs-line pb-2">Personengruppe</th>
                  <th className="border-b border-hs-line pb-2 text-right">Regelsatz / Monat</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Alleinstehend / Alleinerziehend", euro(REGELSATZ_1)],
                  ["Partner:in in Bedarfsgemeinschaft", euro(REGELSATZ_2)],
                  ["18–24 Jahre, im Haushalt der Eltern", euro(REGELSATZ_3)],
                  ["14–17 Jahre", euro(REGELSATZ_4)],
                  ["6–13 Jahre", euro(REGELSATZ_5)],
                  ["0–5 Jahre", euro(REGELSATZ_6)],
                ].map((row) => (
                  <tr key={row[0]}>
                    <td className="border-b border-hs-line py-2">{row[0]}</td>
                    <td className="border-b border-hs-line py-2 text-right font-[600] text-hs-navy">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-[680px] text-[0.78rem] leading-[1.7] text-hs-muted">
            <strong className="text-hs-navy">Kindersofortzuschlag:</strong> 25 € pro Kind bzw.
            jungem Erwachsenen auf Regelbedarfsstufe 3–6, zusätzlich zum Regelsatz.{" "}
            <strong className="text-hs-navy">Kindergeld</strong> (259 €) wird auf den Bedarf
            der Kinder angerechnet.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 md:px-10 lg:py-16">
        <div className="mx-auto max-w-[1080px]">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-hs-pink">Häufige Fragen</p>
          <h2 className="mt-2 text-[clamp(1.3rem,3vw,1.6rem)] leading-[1.2]">
            Bürgergeld-Rechner: was du noch wissen solltest
          </h2>
          <div className="mt-8">
            <ToolFaq items={FAQ} />
          </div>
        </div>
      </section>

      <ToolCta
        titel="Hallo Zukunft. Bürgergeld ist eine Übergangslösung — deine nächste Richtung nicht."
        text="Eine Online-Weiterbildung ändert nichts an deiner aktuellen Situation von heute auf morgen. Aber sie kann der Anfang einer Richtung sein — mit den Inhalten einer klassischen Umschulung, komprimiert auf 6 statt 24 Monate."
      />

      <FooterV2 />
    </div>
  );
}
