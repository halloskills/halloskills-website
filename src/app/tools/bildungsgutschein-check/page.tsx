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
  Segmented,
  ToolCheckRow,
  ResultsCard,
  ToolFaq,
  ToolCta,
  toolBtnResult,
  DisclaimerNote,
} from "@/components/sections/tools-v2/tools-ui";

/**
 * Bildungsgutschein-Check, Stand 2026.
 *
 * Bewertungslogik 1:1 aus dem SharePoint-Prototyp "bildungsgutschein check
 * halloskills.html" übernommen und nach TypeScript portiert: Status,
 * Berufsziel und AZAV-Zertifizierung ergeben zusammen eine Einschätzung
 * ("gut" / "Vorbereitung nötig" / "eher unwahrscheinlich"), plus
 * Sonderfall-Zweig (Studium, Selbstständigkeit, Elternzeit, Ausländer:innen).
 * Keine Rechtsberatung, keine verbindliche Entscheidung — der Bildungs-
 * gutschein ist eine Ermessensleistung nach § 81 SGB III.
 */

type Status = "arbeitslos" | "buergergeld" | "bedroht" | "beschaeftigt" | "sonderfall";
type Berufsziel = "konkret" | "grob" | "unklar";
type Azav = "ja" | "unklar" | "nein";
type Sonderfall = "student" | "selbststaendig" | "elternzeit" | "auslaender";

const SONDERFALL_TEXT: Record<Sonderfall, string> = {
  student:
    "Als Student:in zählst du grundsätzlich nicht zum förderfähigen Personenkreis nach SGB III. Eine Ausnahme gilt bei Studienabbruch, wenn du dich anschließend arbeitsuchend meldest, dann kann ein Bildungsgutschein infrage kommen.",
  selbststaendig:
    "Solange du selbstständig tätig bist, greift die Förderung nach SGB III nicht. Erst nach Aufgabe der Selbstständigkeit und Meldung als arbeitsuchend kannst du einen Bildungsgutschein beantragen.",
  elternzeit:
    "Während der Elternzeit ist ein Bildungsgutschein möglich, wenn du dich arbeitsuchend meldest. Viele nutzen die Zeit gezielt für eine Weiterbildung, um mit besserer Qualifikation zurückzukehren.",
  auslaender:
    "Mit einem Aufenthaltstitel, der eine Erwerbstätigkeit erlaubt, bist du deutschen Staatsangehörigen gleichgestellt. EU-Bürger:innen sind ohnehin gleichgestellt, bei anderen Staatsangehörigkeiten prüft die Agentur für Arbeit die Arbeitserlaubnis.",
};

const TAG_STYLE: Record<"ok" | "mid" | "low", string> = {
  ok: "bg-[rgba(110,231,183,.16)] text-[#6ee7b7]",
  mid: "bg-[rgba(217,201,255,.16)] text-[#d9c9ff]",
  low: "bg-[rgba(252,165,165,.16)] text-[#fca5a5]",
};

function Tag({ ton, children }: { ton: "ok" | "mid" | "low"; children: React.ReactNode }) {
  return (
    <span className={`rounded-full px-2.5 py-1 text-[0.72rem] font-bold ${TAG_STYLE[ton]}`}>{children}</span>
  );
}

const FAQ = [
  {
    frage: "Wer bekommt einen Bildungsgutschein?",
    antwort:
      "In erster Linie Arbeitslose (ALG I) und Bürgergeld-Empfänger:innen sowie Menschen, denen Arbeitslosigkeit droht, zum Beispiel durch eine Kündigung, eine auslaufende Befristung oder die Insolvenz des Arbeitgebers. Auch Beschäftigte können unter bestimmten Voraussetzungen einen Bildungsgutschein erhalten, etwa ohne Berufsabschluss, mit einem seit über vier Jahren nicht mehr ausgeübten erlernten Beruf oder während Kurzarbeit.",
  },
  {
    frage: "Ist der Bildungsgutschein ein Rechtsanspruch?",
    antwort:
      "Nein. Grundlage ist § 81 SGB III, eine Ermessensleistung. Dein Berater oder deine Beraterin bei der Agentur für Arbeit entscheidet im Einzelfall, ob eine berufliche Weiterbildung notwendig ist, um deine Arbeitslosigkeit zu beenden oder eine drohende Arbeitslosigkeit abzuwenden.",
  },
  {
    frage: "Muss der Kurs AZAV-zertifiziert sein?",
    antwort:
      "Ja. Sowohl der Bildungsträger als auch die konkrete Maßnahme müssen nach der Akkreditierungs- und Zulassungsverordnung Arbeitsförderung (AZAV) zugelassen sein. Ohne diese Zertifizierung gibt es keine Förderung über den Bildungsgutschein, unabhängig davon, wie gut der Kurs sonst passt.",
  },
  {
    frage: "Was passiert, wenn mein Antrag abgelehnt wird?",
    antwort:
      "Du kannst innerhalb eines Monats nach Bekanntgabe der Entscheidung schriftlich Widerspruch einlegen. In der Praxis werden manche Ablehnungen danach doch noch bewilligt, wenn zusätzliche Argumente oder Nachweise nachgereicht werden.",
  },
  {
    frage: "Was hat eine Online-Umschulung mit diesem Check zu tun?",
    antwort:
      "Der Bildungsgutschein übernimmt Weiterbildungs- und Umschulungskosten zu 100 %, inklusive Weiterbildungsgeld bei abschlussorientierten Maßnahmen. HalloSkills befindet sich aktuell im AZAV-Zertifizierungsprozess; die AZAV-geförderte Teilnahme an unseren Lehrgängen ist erst nach Abschluss der Zertifizierung möglich. Im kostenlosen Beratungsgespräch schauen wir gern gemeinsam, ob ein Bildungsgutschein grundsätzlich für dich infrage kommen könnte.",
  },
];

export default function BildungsgutscheinCheckPage() {
  const [status, setStatus] = useState<Status>("arbeitslos");
  const [bedrohtKuendigung, setBedrohtKuendigung] = useState(false);
  const [bedrohtBefristet, setBedrohtBefristet] = useState(false);
  const [bedrohtInsolvenz, setBedrohtInsolvenz] = useState(false);
  const [beschOhneAbschluss, setBeschOhneAbschluss] = useState(false);
  const [beschWiederUngelernt, setBeschWiederUngelernt] = useState(false);
  const [beschKurzarbeit, setBeschKurzarbeit] = useState(false);
  const [sonderfallTyp, setSonderfallTyp] = useState<Sonderfall>("student");

  const [berufsziel, setBerufsziel] = useState<Berufsziel>("konkret");
  const [azav, setAzav] = useState<Azav>("ja");
  const [engpass, setEngpass] = useState(false);
  const [stellenanzeigen, setStellenanzeigen] = useState(false);
  const [beratungstermin, setBeratungstermin] = useState(false);
  const [beruehrt, setBeruehrt] = useState(false);

  const ergebnis = useMemo(() => {
    if (status === "sonderfall") {
      return {
        sonderfall: true as const,
        verdict: "Individuelle Prüfung nötig",
        verdictTon: "mid" as const,
        sub: "Sonderfälle bewertet die Agentur für Arbeit im Einzelfall",
        tip: SONDERFALL_TEXT[sonderfallTyp],
        tipTon: "info" as const,
      };
    }

    let statusOK = true;
    let statusLabel = "Erfüllt";
    let statusTon: "ok" | "low" = "ok";

    if (status === "bedroht") {
      statusOK = bedrohtKuendigung || bedrohtBefristet || bedrohtInsolvenz;
      statusLabel = statusOK ? "Erfüllt" : "Noch offen";
      statusTon = statusOK ? "ok" : "low";
    } else if (status === "beschaeftigt") {
      statusOK = beschOhneAbschluss || beschWiederUngelernt || beschKurzarbeit;
      statusLabel = statusOK ? "Erfüllt (Ausnahme)" : "Eher nicht erfüllt";
      statusTon = statusOK ? "ok" : "low";
    }

    const berufszielLabel = { konkret: "Konkret", grob: "Grobe Richtung", unklar: "Noch unklar" }[berufsziel];
    const berufszielTon: "ok" | "mid" | "low" =
      berufsziel === "konkret" ? "ok" : berufsziel === "grob" ? "mid" : "low";

    const azavLabel = { ja: "Geprüft", unklar: "Ungeklärt", nein: "Noch offen" }[azav];
    const azavTon: "ok" | "mid" | "low" = azav === "ja" ? "ok" : azav === "unklar" ? "mid" : "low";

    const bonusCount = [engpass, stellenanzeigen, beratungstermin].filter(Boolean).length;

    let verdict: string;
    let verdictTon: "ok" | "mid" | "low";
    let sub: string;
    let tip: string;
    let tipTon: "ok" | "warn" | "info";

    if (!statusOK || berufsziel === "unklar") {
      verdict = "Aktuell eher unwahrscheinlich";
      verdictTon = "low";
      sub = "Eine zentrale Voraussetzung fehlt noch";
      tipTon = "warn";
      if (berufsziel === "unklar") {
        tip = "Formuliere zuerst ein möglichst konkretes Berufsziel: ohne klaren Zielberuf wird ein Bildungsgutschein in der Regel nicht bewilligt.";
      } else if (status === "bedroht") {
        tip = "Ohne Kündigung, auslaufende Befristung oder Insolvenz des Arbeitgebers reicht „Arbeitslosigkeit droht“ allein meist nicht. Melde dich frühzeitig arbeitsuchend, sobald sich einer dieser Gründe konkretisiert.";
      } else if (status === "beschaeftigt") {
        tip = "Ohne fehlenden Abschluss, langjährige an-/ungelernte Tätigkeit oder Kurzarbeit ist der Bildungsgutschein für Beschäftigte unwahrscheinlich, sprich stattdessen mit deinem Arbeitgeber über das Qualifizierungschancengesetz.";
      } else {
        tip = "Kläre deinen Status möglichst früh mit deiner Agentur für Arbeit oder deinem Jobcenter, bevor du weiterplanst.";
      }
    } else if (berufsziel === "konkret" && azav === "ja") {
      verdict = "Deine Chancen stehen gut";
      verdictTon = "ok";
      sub = "Alle zentralen Kriterien sind erfüllt";
      tipTon = "ok";
      tip =
        bonusCount >= 2
          ? "Du bist gut vorbereitet. Vereinbare jetzt einen Beratungstermin bei deiner Agentur für Arbeit oder deinem Jobcenter und nimm deine Unterlagen mit."
          : "Bring zusätzlich ein paar aktuelle Stellenanzeigen für deinen Zielberuf mit ins Beratungsgespräch, das unterstreicht die Notwendigkeit der Weiterbildung.";
    } else {
      verdict = "Chancen vorhanden, etwas Vorbereitung nötig";
      verdictTon = "mid";
      sub = "Die Grundvoraussetzung ist erfüllt, Details fehlen noch";
      tipTon = "info";
      if (azav !== "ja") {
        tip = "Recherchiere jetzt gezielt nach AZAV-zertifizierten Kursen und Trägern für deinen Zielberuf, zum Beispiel über das Kursnet der Arbeitsagentur.";
      } else if (berufsziel === "grob") {
        tip = "Grenze deine grobe Richtung auf einen konkreten Zielberuf ein: je klarer, desto überzeugender im Beratungsgespräch.";
      } else {
        tip = "Vereinbare einen Beratungstermin und bring dein Kursangebot mit Maßnahmenummer mit.";
      }
    }

    return {
      sonderfall: false as const,
      statusLabel,
      statusTon,
      berufszielLabel,
      berufszielTon,
      azavLabel,
      azavTon,
      bonusCount,
      verdict,
      verdictTon,
      sub,
      tip,
      tipTon,
    };
  }, [
    status,
    bedrohtKuendigung,
    bedrohtBefristet,
    bedrohtInsolvenz,
    beschOhneAbschluss,
    beschWiederUngelernt,
    beschKurzarbeit,
    sonderfallTyp,
    berufsziel,
    azav,
    engpass,
    stellenanzeigen,
    beratungstermin,
  ]);

  const tipStyle =
    !ergebnis.sonderfall && ergebnis.tipTon === "warn"
      ? "bg-[#fdf1f1] text-[#b42323]"
      : !ergebnis.sonderfall && ergebnis.tipTon === "ok"
        ? "bg-[#ecfdf5] text-[#067a5a]"
        : "bg-hs-lightblue text-hs-blue";
  const finalTipStyle = ergebnis.sonderfall
    ? "bg-hs-lightblue text-hs-blue"
    : tipStyle;

  return (
    <div className="hs-v2 bg-white">
      <NavV2 />

      <ToolHero
        eyebrow="Ratgeber · Check"
        titel="Bildungsgutschein-Check"
        akzent="2026"
        intro="Drei kurze Fragen zu deiner Situation, deinem Berufsziel und dem Kurs, und du siehst sofort, wie realistisch ein Bildungsgutschein für dich aktuell ist und was dir noch fehlt."
        hinweis={
          <>
            <strong className="text-hs-navy">Der Bildungsgutschein ist eine Ermessensleistung:</strong>{" "}
            Es gibt keinen automatischen Rechtsanspruch (§ 81 SGB III). Dieser Check ersetzt
            kein Beratungsgespräch, sondern zeigt dir, worauf deine Agentur für Arbeit achtet.
            Beziehst du ALG I oder Bürgergeld? Unser{" "}
            <Link href="/tools/arbeitslosengeld-rechner" className="text-hs-blue underline">
              Arbeitslosengeld-Rechner
            </Link>{" "}
            und{" "}
            <Link href="/tools/buergergeld-rechner" className="text-hs-blue underline">
              Bürgergeld-Rechner
            </Link>{" "}
            zeigen dir, wie viel dir während einer geförderten Weiterbildung zusteht.
          </>
        }
      />

      <section className="px-6 py-14 md:px-10 lg:py-16">
        <div className="mx-auto grid max-w-[1080px] gap-6 lg:grid-cols-[1.35fr_1fr]">
          <ToolFormCard>
            <ToolFormSection nr={1} titel="Deine aktuelle Situation">
              <ToolField label="Was trifft aktuell zu?">
                <Segmented
                  value={status}
                  onChange={(v) => {
                    setStatus(v);
                    setBeruehrt(true);
                  }}
                  options={[
                    { value: "arbeitslos", label: "Arbeitslos (ALG I)" },
                    { value: "buergergeld", label: "Bürgergeld" },
                    { value: "bedroht", label: "Arbeitslosigkeit droht" },
                    { value: "beschaeftigt", label: "Beschäftigt" },
                    { value: "sonderfall", label: "Sonderfall" },
                  ]}
                />
              </ToolField>

              {status === "bedroht" && (
                <div className="mt-4 rounded-hs-input border border-hs-line bg-hs-soft p-4">
                  <p className="mb-2 text-[0.75rem] text-hs-muted">Welcher Grund trifft zu?</p>
                  <ToolCheckRow id="bedroht-1" checked={bedrohtKuendigung} onChange={setBedrohtKuendigung} label="Kündigung erhalten" />
                  <ToolCheckRow id="bedroht-2" checked={bedrohtBefristet} onChange={setBedrohtBefristet} label="Befristeter Vertrag läuft bald aus" />
                  <ToolCheckRow id="bedroht-3" checked={bedrohtInsolvenz} onChange={setBedrohtInsolvenz} label="Insolvenz meines Arbeitgebers" />
                </div>
              )}

              {status === "beschaeftigt" && (
                <div className="mt-4 rounded-hs-input border border-hs-line bg-hs-soft p-4">
                  <p className="mb-2 text-[0.75rem] text-hs-muted">
                    Beschäftigte werden nur unter bestimmten Voraussetzungen gefördert. Trifft mindestens
                    eine zu?
                  </p>
                  <ToolCheckRow id="besch-1" checked={beschOhneAbschluss} onChange={setBeschOhneAbschluss} label="Ich habe keinen Berufsabschluss (an- oder ungelernt)" />
                  <ToolCheckRow
                    id="besch-2"
                    checked={beschWiederUngelernt}
                    onChange={setBeschWiederUngelernt}
                    label="Mein Abschluss liegt über 4 Jahre zurück und ich arbeite seither an- oder ungelernt"
                  />
                  <ToolCheckRow id="besch-3" checked={beschKurzarbeit} onChange={setBeschKurzarbeit} label="Ich bin aktuell in Kurzarbeit" />
                </div>
              )}

              {status === "sonderfall" && (
                <div className="mt-4">
                  <ToolField label="Um welchen Sonderfall geht es?">
                    <select
                      value={sonderfallTyp}
                      onChange={(e) => setSonderfallTyp(e.target.value as Sonderfall)}
                      className="w-full rounded-hs-input border border-hs-border bg-white px-3.5 py-2.5 text-[0.9rem] text-hs-ink outline-none focus:border-hs-violet"
                    >
                      <option value="student">Student:in (Studienabbruch)</option>
                      <option value="selbststaendig">Selbstständig</option>
                      <option value="elternzeit">Elternzeit</option>
                      <option value="auslaender">Ausländische:r Staatsangehörige:r</option>
                    </select>
                  </ToolField>
                </div>
              )}
            </ToolFormSection>

            <ToolFormSection nr={2} titel="Berufsziel & Kurs">
              <ToolField
                label="Wie konkret ist dein Berufsziel?"
                hint={'Ein klar benannter Zielberuf ist eines der wichtigsten Argumente im Beratungsgespräch: „irgendwas mit IT" reicht in der Regel nicht.'}
              >
                <Segmented
                  value={berufsziel}
                  onChange={setBerufsziel}
                  options={[
                    { value: "konkret", label: "Konkret" },
                    { value: "grob", label: "Grobe Richtung" },
                    { value: "unklar", label: "Noch unklar" },
                  ]}
                />
              </ToolField>

              <div className="mt-4">
                <ToolField
                  label="Steht dein Kurs schon fest?"
                  hint="Ohne AZAV-Zertifizierung von Träger und Maßnahme gibt es keine Förderung, prüfbar z. B. über das Kursnet der Arbeitsagentur."
                >
                  <Segmented
                    value={azav}
                    onChange={setAzav}
                    options={[
                      { value: "ja", label: "Ja, AZAV-zertifiziert" },
                      { value: "unklar", label: "Kurs gewählt, AZAV ungeklärt" },
                      { value: "nein", label: "Noch nicht gesucht" },
                    ]}
                  />
                </ToolField>
              </div>

              <div className="mt-3">
                <ToolCheckRow
                  id="engpass"
                  checked={engpass}
                  onChange={setEngpass}
                  label="Mein Zielberuf zählt zu den Engpassberufen"
                  hint="Zum Beispiel IT, Pflege, Handwerk oder Erneuerbare Energien: hier fällt die Bewilligung erfahrungsgemäß leichter."
                />
              </div>
            </ToolFormSection>

            <ToolFormSection nr={3} titel="Vorbereitung fürs Beratungsgespräch" hint="Kein Muss, erhöht aber deine Chancen im Gespräch.">
              <ToolCheckRow
                id="stellenanzeigen"
                checked={stellenanzeigen}
                onChange={setStellenanzeigen}
                label="Ich habe schon aktuelle Stellenanzeigen für meinen Zielberuf gesammelt"
              />
              <ToolCheckRow
                id="beratungstermin"
                checked={beratungstermin}
                onChange={setBeratungstermin}
                label="Ich habe einen Beratungstermin bei der Agentur für Arbeit / dem Jobcenter vereinbart"
              />
            </ToolFormSection>
          </ToolFormCard>

          <ResultsCard>
            {!beruehrt && (
              <span className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.04em] text-white/75">
                Beispiel: trag deine Situation ein
              </span>
            )}
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.06em] text-white/55">
              Deine Förderchance
            </p>
            <p className="mt-2 text-[1.5rem] font-bold leading-[1.25]">{ergebnis.verdict}</p>
            <p className="mb-4 mt-1 text-[0.75rem] text-white/55">{ergebnis.sub}</p>

            {!ergebnis.sonderfall && (
              <div className="flex flex-col gap-2 border-t border-white/15 pt-3.5 text-[0.82rem] text-white/75">
                <div className="flex items-center justify-between">
                  <span>Grundvoraussetzung</span>
                  <Tag ton={ergebnis.statusTon}>{ergebnis.statusLabel}</Tag>
                </div>
                <div className="flex items-center justify-between">
                  <span>Berufsziel</span>
                  <Tag ton={ergebnis.berufszielTon}>{ergebnis.berufszielLabel}</Tag>
                </div>
                <div className="flex items-center justify-between">
                  <span>AZAV-Zertifizierung</span>
                  <Tag ton={ergebnis.azavTon}>{ergebnis.azavLabel}</Tag>
                </div>
                {ergebnis.bonusCount > 0 && (
                  <div className="flex items-center justify-between">
                    <span>Zusätzliche Pluspunkte</span>
                    <span className="font-[600] text-white">{ergebnis.bonusCount} von 3</span>
                  </div>
                )}
              </div>
            )}

            <div className="mt-4 flex flex-col gap-2.5">
              <Link href="/beratung-buchen" className={toolBtnResult}>
                Kostenlose Beratung sichern →
              </Link>
              <a
                href="https://www.arbeitsagentur.de/karriere-und-weiterbildung/bildungsgutschein"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-[0.875rem] font-[600] text-white transition-colors hover:border-white"
              >
                Offizielle Voraussetzungen (BA)
              </a>
            </div>

            <div className="mt-4 rounded-hs-card border border-white/15 bg-white/10 p-4">
              <h4 className="mb-2.5 text-[0.78rem] font-bold !text-white">Nächster sinnvoller Schritt</h4>
              <p className={`rounded-[10px] px-3 py-2 text-[0.8rem] font-[600] leading-[1.5] ${finalTipStyle}`}>
                {ergebnis.tip}
              </p>
            </div>

            <DisclaimerNote>
              Nur eine erste Orientierung, keine verbindliche Entscheidung. Deine Angaben
              bleiben in deinem Browser. Nichts wird gespeichert oder verschickt.
              Verbindlich entscheidet nur deine Agentur für Arbeit im persönlichen
              Beratungsgespräch.
            </DisclaimerNote>
          </ResultsCard>
        </div>
      </section>

      <section className="border-t border-hs-line bg-hs-soft px-6 py-14 md:px-10 lg:py-16">
        <div className="mx-auto max-w-[1080px]">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-hs-pink">Was übernommen wird</p>
          <h2 className="mt-2 text-[clamp(1.3rem,3vw,1.6rem)] leading-[1.2]">Der Förderumfang im Überblick</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="overflow-x-auto rounded-hs-card border border-hs-line bg-white p-5">
              <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.04em] text-hs-muted">Kosten &amp; Leistungen</p>
              <table className="w-full text-[0.82rem]">
                <tbody>
                  {[
                    ["Lehrgangs- & Prüfungskosten", "100 %"],
                    ["Fahrtkosten (Pendelfahrten)", "bis 588 € / Monat"],
                    ["Kinderbetreuung / Kind", "bis 160 € / Monat"],
                    ["Auswärtige Unterbringung", "bis 420 € / Monat"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="border-b border-hs-line py-2">{row[0]}</td>
                      <td className="border-b border-hs-line py-2 text-right font-[600] text-hs-navy">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto rounded-hs-card border border-hs-line bg-white p-5">
              <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.04em] text-hs-muted">Zusatzleistungen bei Umschulungen</p>
              <table className="w-full text-[0.82rem]">
                <tbody>
                  {[
                    ["ALG I / Bürgergeld", "läuft weiter"],
                    ["Weiterbildungsgeld", "150 € / Monat"],
                    ["Prämie Zwischenprüfung", "1.000 €"],
                    ["Prämie Abschlussprüfung", "1.500 €"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="border-b border-hs-line py-2">{row[0]}</td>
                      <td className="border-b border-hs-line py-2 text-right font-[600] text-hs-navy">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-6 max-w-[680px] text-[0.78rem] leading-[1.7] text-hs-muted">
            Die Prämien von zusammen bis zu 2.500 € gelten nur für abschlussorientierte
            Weiterbildungen wie Umschulungen. Das Weiterbildungsgeld ist gesetzlich in § 87a
            SGB III verankert.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 md:px-10 lg:py-16">
        <div className="mx-auto max-w-[1080px]">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-hs-pink">Häufige Fragen</p>
          <h2 className="mt-2 text-[clamp(1.3rem,3vw,1.6rem)] leading-[1.2]">
            Bildungsgutschein-Check: was du noch wissen solltest
          </h2>
          <div className="mt-8">
            <ToolFaq items={FAQ} />
          </div>
        </div>
      </section>

      <ToolCta
        titel="Der Bildungsgutschein ist Ermessenssache, deine Vorbereitung nicht."
        text="Eine Online-Umschulung ändert nichts an deiner aktuellen Situation von heute auf morgen. Aber sie kann der Anfang eines Weges sein, der sich unter Umständen über einen Bildungsgutschein fördern lässt."
      />

      <FooterV2 />
    </div>
  );
}
