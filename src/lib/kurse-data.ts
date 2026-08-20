/**
 * Inhalte der drei Lehrgänge im Design System v1.0.
 *
 * Die Module sind eine eigene, sinngemäße Zusammenfassung der Positionen aus
 * den amtlichen Ausbildungsrahmenplänen (Anlage der jeweiligen Ausbildungs-
 * verordnung) — keine wörtliche Wiedergabe. Quellen (Stand August 2026):
 *
 *  - Büromanagement: BüroMKfAusbV 2025 (Neufassung Februar 2025)
 *    https://www.gesetze-im-internet.de/b_romkfausbv_2025/
 *  - Industriekaufmann/-frau: IndKflAusbV 2024
 *    https://www.gesetze-im-internet.de/indkflausbv/
 *  - Bankkaufmann/-frau: BankkflAusbV 2020
 *    https://www.gesetze-im-internet.de/bankkflausbv/
 *
 * Bewusst keine Aussage wie "identisch mit dem Rahmenplan" oder "staatlich
 * anerkannt" — der Abschluss ist ein HalloSkills-Zertifikat, keine IHK-
 * Prüfung. Siehe Memory rebrand-content-constraints und die Vergleichs-
 * Sektion (vergleich-v2.tsx) auf der Startseite.
 *
 * NAMENSGEBUNG (Stand: Zertifizierungsprozess läuft noch, Entscheidung der
 * Fachseite): `titel` heißt vorerst "Weiterbildung Bürokaufmann/-frau" /
 * "Weiterbildung Industriekaufmann/-frau" / "Weiterbildung Bankkaufmann/-frau".
 * Sobald die AZAV-Zertifizierung abgeschlossen ist, auf "Abschluss
 * Bürokaufmann/-frau (HS)" etc. umstellen (ebenso metaTitle).
 * Die Bezeichnungen sind nicht die geschützten Ausbildungsberufe selbst,
 * sondern kennzeichnen das eigene Weiterbildungs-/Zertifikatsangebot.
 * Trotzdem vor dem öffentlichen Launch juristisch prüfen lassen — diese
 * Einschätzung ist keine Rechtsberatung.
 */

export type KursModul = {
  titel: string;
  text: string;
};

export type Kurs = {
  slug: string;
  kategorie: string;
  titel: string;
  eyebrow: string;
  subline: string;
  bild: string;
  bildAlt: string;
  fuerWen: string[];
  module: KursModul[];
  faq: { frage: string; antwort: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const KURSE: Kurs[] = [
  {
    slug: "bueromanagement",
    kategorie: "Büromanagement",
    // Namensgebung auf Wunsch der Fachseite (Stand: Zertifizierungsprozess
    // läuft noch): "Weiterbildung X" bis zum Abschluss der AZAV-
    // Zertifizierung, danach "Abschluss X (HS)".
    titel: "Weiterbildung Bürokaufmann/-frau",
    eyebrow: "Umschulungsinhalte · 6 statt 24 Monate",
    subline:
      "Die Themen der beruflichen Umschulung zum Bürokaufmann/-frau — als Weiterbildung kompakt, online und mit persönlicher Begleitung bis zum HalloSkills-Abschlusszertifikat.",
    bild: "/images/bilder/managerin-gruener-rollkragen-tablet-schreibt.png",
    bildAlt: "Teilnehmerin arbeitet an ihrem Online-Lehrgang zum Büromanagement",
    fuerWen: [
      "Du willst im Büro, in der Verwaltung oder im Sekretariat arbeiten.",
      "Du organisierst gerne, behältst den Überblick und kommunizierst klar.",
      "Du möchtest ohne Pendeln zum Schulungsraum und Praxisbetrieb lernen.",
    ],
    module: [
      {
        titel: "Informationsmanagement & digitale Werkzeuge",
        text: "Kommunikationssysteme, Textverarbeitung, Präsentationen und Dokumentenmanagement sicher im Büroalltag einsetzen.",
      },
      {
        titel: "Bürowirtschaftliche Abläufe",
        text: "Büromaterial, Postbearbeitung und Dokumentenverwaltung organisieren.",
      },
      {
        titel: "Koordination & Terminmanagement",
        text: "Termine planen, Sitzungen vorbereiten und bei Projekten mitarbeiten.",
      },
      {
        titel: "Kundenbeziehungen & Auftragsbearbeitung",
        text: "Kundenanfragen, Auftragsabwicklung und Reklamationen kundenorientiert bearbeiten.",
      },
      {
        titel: "Beschaffung",
        text: "Bedarf ermitteln, Bezugsquellen vergleichen und Bestellungen auslösen.",
      },
      {
        titel: "Personalbezogene Aufgaben",
        text: "Einsatzplanung, Reisekostenabrechnung und Personalstatistiken führen.",
      },
      {
        titel: "Kaufmännische Steuerung",
        text: "Grundlagen aus Rechnungswesen, Investitionsrechnung und Kostenstrukturen.",
      },
      {
        titel: "Vertiefung nach Wahl",
        text: "Wie in der klassischen Ausbildung wählbar: Vertiefung in einem Schwerpunkt, etwa Assistenz, Einkauf oder Personalwirtschaft.",
      },
    ],
    faq: [
      {
        frage: "Ist das eine offizielle berufliche Umschulung?",
        antwort:
          "Nein. Du lernst die zentralen Themen der beruflichen Umschulung zum Bürokaufmann/-frau, schließt den Lehrgang aber mit einem HalloSkills-Zertifikat ab — nicht mit einer IHK-Prüfung. Ein offizieller Berufsabschluss wird dadurch nicht erworben.",
      },
      {
        frage: "Kann ich den Lehrgang über den Bildungsgutschein finanzieren?",
        antwort:
          "HalloSkills befindet sich aktuell im AZAV-Zertifizierungsprozess. Im kostenlosen Beratungsgespräch schauen wir gern gemeinsam, ob du grundsätzlich für einen Bildungsgutschein infrage kommst — die AZAV-geförderte Teilnahme an unseren Lehrgängen selbst ist erst nach Abschluss der Zertifizierung möglich.",
      },
      {
        frage: "Brauche ich Vorkenntnisse?",
        antwort:
          "Nein. Der Lehrgang ist so aufgebaut, dass du auch ohne kaufmännische Vorerfahrung einsteigen kannst.",
      },
    ],
    metaTitle: "Weiterbildung Bürokaufmann/-frau — online in 6 Monaten | HalloSkills",
    metaDescription:
      "Die Inhalte der beruflichen Umschulung zum Bürokaufmann/-frau — in 6 statt 24 Monaten, 100% online, mit HalloSkills-Zertifikat. Start Herbst 2026.",
  },
  {
    slug: "industriekaufmann",
    kategorie: "Industrie",
    titel: "Weiterbildung Industriekaufmann/-frau",
    eyebrow: "Umschulungsinhalte · 6 statt 24 Monate",
    subline:
      "Die Themen der beruflichen Umschulung zum Industriekaufmann/-frau — als Weiterbildung kompakt, online und mit persönlicher Begleitung bis zum HalloSkills-Abschlusszertifikat.",
    bild: "/images/bilder/mann-kopfhoerer-blauer-pulli-analytics-dashboard.png",
    bildAlt: "Teilnehmer arbeitet an seinem Online-Lehrgang zum Industriekaufmann",
    fuerWen: [
      "Du willst in Einkauf, Produktion, Vertrieb oder Controlling eines Industriebetriebs arbeiten.",
      "Du denkst gerne in Zahlen und Prozessen und behältst Lieferketten im Blick.",
      "Du möchtest ohne Pendeln zum Schulungsraum und Praxisbetrieb lernen.",
    ],
    module: [
      {
        titel: "Leistungserstellung planen & koordinieren",
        text: "Prozesse der Wertschöpfungskette verstehen und die Leistungserstellung dokumentieren.",
      },
      {
        titel: "Logistik & Lagerprozesse",
        text: "Logistikketten, Lagerkonzepte und Transportmittel planen und bewerten.",
      },
      {
        titel: "Beschaffung planen & steuern",
        text: "Bedarfsermittlung, Lieferantenmanagement und Bestellverwaltung.",
      },
      {
        titel: "Marketingmaßnahmen",
        text: "Marktanalyse, Marketing-Mix und die Kontrolle der Wirksamkeit von Maßnahmen.",
      },
      {
        titel: "Vertriebsprozesse",
        text: "Auftragserfassung und Terminkoordination mit internen und externen Stellen.",
      },
      {
        titel: "Personalprozesse",
        text: "Personalbedarf ermitteln, Rekrutierung begleiten und Entgeltabrechnung verstehen.",
      },
      {
        titel: "Kaufmännische Steuerung & Controlling",
        text: "Buchführung, Kosten-Leistungsrechnung, Controlling und Finanzierung.",
      },
      {
        titel: "Vertiefung im Einsatzgebiet",
        text: "Wie in der klassischen Ausbildung wählbar: Vertiefung z. B. in Vertrieb, Beschaffung, Logistik oder Personalwirtschaft.",
      },
    ],
    faq: [
      {
        frage: "Ist das eine offizielle berufliche Umschulung?",
        antwort:
          "Nein. Du lernst die zentralen Themen der beruflichen Umschulung zum Industriekaufmann/-frau, schließt den Lehrgang aber mit einem HalloSkills-Zertifikat ab — nicht mit einer IHK-Prüfung. Ein offizieller Berufsabschluss wird dadurch nicht erworben.",
      },
      {
        frage: "Kann ich den Lehrgang über den Bildungsgutschein finanzieren?",
        antwort:
          "HalloSkills befindet sich aktuell im AZAV-Zertifizierungsprozess. Im kostenlosen Beratungsgespräch schauen wir gern gemeinsam, ob du grundsätzlich für einen Bildungsgutschein infrage kommst — die AZAV-geförderte Teilnahme an unseren Lehrgängen selbst ist erst nach Abschluss der Zertifizierung möglich.",
      },
      {
        frage: "Brauche ich Vorkenntnisse?",
        antwort:
          "Nein. Der Lehrgang ist so aufgebaut, dass du auch ohne kaufmännische Vorerfahrung einsteigen kannst.",
      },
    ],
    metaTitle: "Weiterbildung Industriekaufmann/-frau — online in 6 Monaten | HalloSkills",
    metaDescription:
      "Die Inhalte der beruflichen Umschulung zum Industriekaufmann/-frau — in 6 statt 24 Monaten, 100% online, mit HalloSkills-Zertifikat. Start Herbst 2026.",
  },
  {
    slug: "bankkaufmann",
    kategorie: "Bankwesen",
    titel: "Weiterbildung Bankkaufmann/-frau",
    eyebrow: "Umschulungsinhalte · 6 statt 24 Monate",
    subline:
      "Die Themen der beruflichen Umschulung zum Bankkaufmann/-frau — als Weiterbildung kompakt, online und mit persönlicher Begleitung bis zum HalloSkills-Abschlusszertifikat.",
    bild: "/images/bilder/beraterin-orange-pullover-laptop.png",
    bildAlt: "Teilnehmerin arbeitet an ihrem Online-Lehrgang zum Bankwesen",
    fuerWen: [
      "Du willst Kund:innen bei Bank- und Finanzthemen beraten.",
      "Du gehst gerne sorgfältig mit Zahlen, Verträgen und Verantwortung um.",
      "Du möchtest ohne Pendeln zum Schulungsraum und Praxisbetrieb lernen.",
    ],
    module: [
      {
        titel: "Serviceleistungen & Kundenkommunikation",
        text: "Kundenorientiert kommunizieren, Reklamationen bearbeiten, Datenschutz beachten.",
      },
      {
        titel: "Kunden beraten & Kundenbeziehungen aufbauen",
        text: "Kundensituationen analysieren, passende Lösungen erarbeiten und neue Kund:innen gewinnen.",
      },
      {
        titel: "Zahlungsverkehr & Kontoführung",
        text: "Konten eröffnen und führen, Zahlungsverkehr im In- und Ausland abwickeln.",
      },
      {
        titel: "Geldanlage: Sparformen & Wertpapiere",
        text: "Anlagemöglichkeiten von klassischen Sparformen bis Aktien, Renten und Fonds erklären.",
      },
      {
        titel: "Vorsorge & Absicherung",
        text: "Soziale Sicherungssysteme und private Vorsorgeprodukte einordnen.",
      },
      {
        titel: "Kredit- & Finanzierungsgeschäft",
        text: "Konsumentenkredite, Kreditwürdigkeit und Sicherheiten bewerten.",
      },
      {
        titel: "Baufinanzierung & gewerbliche Finanzierungen",
        text: "Immobilienfinanzierung sowie Finanzierungsarten für Geschäftskund:innen verstehen.",
      },
      {
        titel: "Kaufmännische Steuerung & Projektarbeit",
        text: "Kosten-Leistungsrechnung anwenden und projektorientiert arbeiten.",
      },
    ],
    faq: [
      {
        frage: "Ist das eine offizielle berufliche Umschulung?",
        antwort:
          "Nein. Du lernst die zentralen Themen der beruflichen Umschulung zum Bankkaufmann/-frau, schließt den Lehrgang aber mit einem HalloSkills-Zertifikat ab — nicht mit einer IHK-Prüfung. Ein offizieller Berufsabschluss wird dadurch nicht erworben.",
      },
      {
        frage: "Kann ich den Lehrgang über den Bildungsgutschein finanzieren?",
        antwort:
          "HalloSkills befindet sich aktuell im AZAV-Zertifizierungsprozess. Im kostenlosen Beratungsgespräch schauen wir gern gemeinsam, ob du grundsätzlich für einen Bildungsgutschein infrage kommst — die AZAV-geförderte Teilnahme an unseren Lehrgängen selbst ist erst nach Abschluss der Zertifizierung möglich.",
      },
      {
        frage: "Brauche ich Vorkenntnisse?",
        antwort:
          "Nein. Der Lehrgang ist so aufgebaut, dass du auch ohne kaufmännische Vorerfahrung einsteigen kannst.",
      },
    ],
    metaTitle: "Weiterbildung Bankkaufmann/-frau — online in 6 Monaten | HalloSkills",
    metaDescription:
      "Die Inhalte der beruflichen Umschulung zum Bankkaufmann/-frau — in 6 statt 24 Monaten, 100% online, mit HalloSkills-Zertifikat. Start Herbst 2026.",
  },
];

export function findeKurs(slug: string): Kurs | undefined {
  return KURSE.find((k) => k.slug === slug);
}
