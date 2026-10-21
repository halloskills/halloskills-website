import type { Metadata } from "next";
import Link from "next/link";
import { NavV2 } from "@/components/sections/startseite-v2/nav-v2";
import { Eyebrow, btnPrimary } from "@/components/sections/startseite-v2/hs-ui";
import { FooterV2 } from "@/components/sections/startseite-v2/footer-v2";

export const metadata: Metadata = {
  title: "Jobs: Dozent (m/w/d) für kaufmännische Weiterbildungen | HalloSkills",
  description:
    "Wir suchen Dozentinnen und Dozenten (m/w/d) für kaufmännische Weiterbildungen. Remote, Voll- oder Teilzeit, Unterricht in kleinen Gruppen per Microsoft Teams.",
};

const PERSONIO_URL = "https://halloskills-recruiting.jobs.personio.com/job/2849369";

const fakten = [
  { label: "Standort", wert: "Remote" },
  { label: "Anstellung", wert: "Voll- oder Teilzeit, auch freiberuflich möglich" },
  { label: "Unterricht", wert: "Kleine Gruppen per Microsoft Teams" },
];

const aufgaben = [
  "Unterricht in kleinen Gruppen per Microsoft Teams",
  "Methodischer Mix aus Input, Fallbeispielen, Gruppenarbeiten, Übungen und Lernkontrollen",
  "Start mit einer fertigen Lehrgangsstruktur, die ihr gemeinsam verbessern könnt",
  "Einsatz der simpleclub-Lernplattform für interaktives Lernen",
  "Kerninhalte wie Rechnungswesen, Controlling, Beschaffung, Personal, Finanzierung oder Bankgeschäft, oder Sonderthemen wie Microsoft 365, Excel, KI, Kommunikation oder Projektmanagement",
  "Ansprechperson für Teilnehmende bei der beruflichen Neuorientierung",
  "Dokumentation von Inhalten und Anwesenheit im digitalen Klassenbuch",
];

const anforderungen = [
  "Kaufmännisches Fachwissen aus Ausbildung, Studium, Weiterbildung oder vergleichbarer Berufspraxis",
  "Pädagogische Eignung, etwa durch AdA-Schein oder Erfahrung als Trainer, Ausbilder oder Lehrkraft",
  "Sicherer Umgang mit Teams und Microsoft 365",
  "Verlässlichkeit, klare Erklärungen und wertschätzender Umgang mit Lernenden",
  "Ruhiger Arbeitsplatz mit stabilem Internet, Webcam und Headset",
];

const benefits = [
  "Ortsunabhängiges Arbeiten",
  "Flexible Einsätze: festes Fach, Sonderthemen oder Vertretung, die Unterrichtszeiten richten sich nach dem Lehrgang",
  "Strukturiertes Onboarding und Unterstützung durch Teams aus Produktion, Qualitätsmanagement und IT",
  "Anstellung in Vollzeit, Teilzeit oder als Freiberufler",
];

export default function JobsPage() {
  return (
    <div className="hs-v2 bg-white">
      <NavV2 />

      <section className="px-6 pb-6 pt-14 md:px-10 lg:pt-20">
        <div className="mx-auto max-w-[760px]">
          <Eyebrow ton="blau">Jobs bei HalloSkills</Eyebrow>
          <h1 className="mt-6 text-[clamp(2rem,4vw,2.75rem)] leading-[1.15]">
            Dozent (m/w/d) für kaufmännische Weiterbildungen
          </h1>
          <p className="mt-5 text-[1.0625rem] leading-[1.7] text-hs-body">
            HalloSkills ist ein Hamburger Träger für berufliche Erwachsenenbildung. Unsere
            Kurse richten sich an Arbeitsuchende, Berufsrückkehrer und Quereinsteiger, die
            sich für den kaufmännischen Arbeitsmarkt qualifizieren wollen.
          </p>

          <dl className="mt-8 grid gap-3 sm:grid-cols-3">
            {fakten.map((f) => (
              <div key={f.label} className="rounded-2xl border border-hs-line bg-white p-4 shadow-hs-soft">
                <dt className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-hs-pink">
                  {f.label}
                </dt>
                <dd className="mt-1.5 text-[0.9375rem] font-[500] leading-snug text-hs-navy">
                  {f.wert}
                </dd>
              </div>
            ))}
          </dl>

          <Link href={PERSONIO_URL} target="_blank" rel="noopener" className={`${btnPrimary} mt-8`}>
            Jetzt bewerben
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="px-6 py-14 md:px-10">
        <div className="mx-auto max-w-[760px]">
          <div className="hs-legal">
            <h2>Deine Aufgaben</h2>
            <ul>
              {aufgaben.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <h2>Das bringst du mit</h2>
            <ul>
              {anforderungen.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <h2>Das bieten wir dir</h2>
            <ul>
              {benefits.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          <div className="mt-12 rounded-[28px] bg-hs-soft p-8 md:p-10">
            <h2 className="text-[1.5rem] leading-[1.2]">Klingt nach dir?</h2>
            <p className="mt-3 text-[0.9375rem] leading-[1.65] text-hs-body">
              Die Bewerbung läuft über unsere Karriereseite bei Personio.
            </p>
            <Link href={PERSONIO_URL} target="_blank" rel="noopener" className={`${btnPrimary} mt-6`}>
              Zur Stellenanzeige bei Personio
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <FooterV2 />
    </div>
  );
}
