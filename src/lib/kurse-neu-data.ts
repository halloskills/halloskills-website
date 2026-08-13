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
 * NAMENSGEBUNG: `titel` verwendet bewusst NICHT die geschützten
 * Ausbildungsberufsbezeichnungen ("Kauffrau/Kaufmann für Büromanagement",
 * "Industriekauffrau/-mann", "Bankkauffrau/-mann") als eigenen Produktnamen,
 * sondern ein Themen-Substantiv ("Lehrgang Büromanagement" / "Lehrgang
 * Industriewirtschaft" / "Lehrgang Bankwesen") — analog zum Fernlehrinstitut
 * ILS, das ebenfalls "Fernstudium Büromanagement" statt der Berufsbe-
 * zeichnung als Produktnamen führt. Die echten Berufsbezeichnungen bleiben
 * im Fließtext erlaubt (Subline, fuerWen, FAQ), wo sie beschreibend und
 * vergleichend verwendet werden, nicht als Eigenname.
 * Trotzdem vor dem öffentlichen Launch juristisch prüfen lassen — diese
 * Einschätzung ist keine Rechtsberatung.
 */

export type KursModul = {
  titel: string;
  text: string;
};

export type KursNeu = {
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

export const KURSE_NEU: KursNeu[] = [
  {
    slug: "bueromanagement",
    kategorie: "Büromanagement",
    // Produktname bewusst ohne geschützte Ausbildungsberufsbezeichnung —
    // siehe OFFENE FRAGE oben. Themen-Substantiv statt Berufstitel, wie bei
    // ILS ("Fernstudium Büromanagement" statt "Kaufmann für Büromanagement").
    titel: "Lehrgang Büromanagement",
    eyebrow: "Umschulungsinhalte · 6 statt 24 Monate",
    subline:
      "Die zentralen Themen der IHK-Ausbildung zum Büromanagement — kompakt, online und mit persönlicher Begleitung bis zum HalloSkills-Zertifikat.",
    bild: "/images/bilder/managerin-gruener-rollkragen-tablet-schreibt.png",
    bildAlt: "Teilnehmerin arbeitet an ihrem Online-Lehrgang zum Büromanagement",
    fuerWen: [
      "Du willst im Büro, in der Verwaltung oder im Sekretariat arbeiten.",
      "Du organisierst gerne, behältst den Überblick und kommunizierst klar.",
      "Du möchtest ohne Berufsschule und ohne Pendeln zum Ausbildungsbetrieb lernen.",
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
        frage: "Ist das eine offizielle IHK-Ausbildung?",
        antwort:
          "Nein. Du lernst die zentralen Themen der klassischen IHK-Ausbildung zum Büromanagement, schließt den Lehrgang aber mit einem HalloSkills-Zertifikat ab — nicht mit einer IHK-Prüfung.",
      },
      {
        frage: "Kann ich den Lehrgang über den Bildungsgutschein finanzieren?",
        antwort:
          "Das prüfen wir gemeinsam im kostenlosen Beratungsgespräch — je nach deiner persönlichen Situation.",
      },
      {
        frage: "Brauche ich Vorkenntnisse?",
        antwort:
          "Nein. Der Lehrgang ist so aufgebaut, dass du auch ohne kaufmännische Vorerfahrung einsteigen kannst.",
      },
    ],
    metaTitle: "Lehrgang Büromanagement — online in 6 Monaten | HalloSkills",
    metaDescription:
      "Die Inhalte der IHK-Ausbildung zum Büromanagement — in 6 statt 24 Monaten, 100% online, mit HalloSkills-Zertifikat. Start Herbst 2026.",
  },
  {
    slug: "industriekaufmann",
    kategorie: "Industrie",
    titel: "Lehrgang Industriewirtschaft",
    eyebrow: "Umschulungsinhalte · 6 statt 24 Monate",
    subline:
      "Die zentralen Themen der IHK-Ausbildung zum Industriekaufmann — kompakt, online und mit persönlicher Begleitung bis zum HalloSkills-Zertifikat.",
    bild: "/images/bilder/mann-kopfhoerer-blauer-pulli-analytics-dashboard.png",
    bildAlt: "Teilnehmer arbeitet an seinem Online-Lehrgang zum Industriekaufmann",
    fuerWen: [
      "Du willst in Einkauf, Produktion, Vertrieb oder Controlling eines Industriebetriebs arbeiten.",
      "Du denkst gerne in Zahlen und Prozessen und behältst Lieferketten im Blick.",
      "Du möchtest ohne Berufsschule und ohne Pendeln zum Ausbildungsbetrieb lernen.",
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
        frage: "Ist das eine offizielle IHK-Ausbildung?",
        antwort:
          "Nein. Du lernst die zentralen Themen der klassischen IHK-Ausbildung zum Industriekaufmann, schließt den Lehrgang aber mit einem HalloSkills-Zertifikat ab — nicht mit einer IHK-Prüfung.",
      },
      {
        frage: "Kann ich den Lehrgang über den Bildungsgutschein finanzieren?",
        antwort:
          "Das prüfen wir gemeinsam im kostenlosen Beratungsgespräch — je nach deiner persönlichen Situation.",
      },
      {
        frage: "Brauche ich Vorkenntnisse?",
        antwort:
          "Nein. Der Lehrgang ist so aufgebaut, dass du auch ohne kaufmännische Vorerfahrung einsteigen kannst.",
      },
    ],
    metaTitle: "Lehrgang Industriewirtschaft — online in 6 Monaten | HalloSkills",
    metaDescription:
      "Die Inhalte der IHK-Ausbildung zum Industriekaufmann — in 6 statt 24 Monaten, 100% online, mit HalloSkills-Zertifikat. Start Herbst 2026.",
  },
  {
    slug: "bankkaufmann",
    kategorie: "Bankwesen",
    titel: "Lehrgang Bankwesen",
    eyebrow: "Umschulungsinhalte · 6 statt 24 Monate",
    subline:
      "Die zentralen Themen der IHK-Ausbildung zum Bankkaufmann — kompakt, online und mit persönlicher Begleitung bis zum HalloSkills-Zertifikat.",
    bild: "/images/bilder/beraterin-orange-pullover-laptop.png",
    bildAlt: "Teilnehmerin arbeitet an ihrem Online-Lehrgang zum Bankwesen",
    fuerWen: [
      "Du willst Kund:innen bei Bank- und Finanzthemen beraten.",
      "Du gehst gerne sorgfältig mit Zahlen, Verträgen und Verantwortung um.",
      "Du möchtest ohne Berufsschule und ohne Pendeln zum Ausbildungsbetrieb lernen.",
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
        frage: "Ist das eine offizielle IHK-Ausbildung?",
        antwort:
          "Nein. Du lernst die zentralen Themen der klassischen IHK-Ausbildung zum Bankkaufmann, schließt den Lehrgang aber mit einem HalloSkills-Zertifikat ab — nicht mit einer IHK-Prüfung.",
      },
      {
        frage: "Kann ich den Lehrgang über den Bildungsgutschein finanzieren?",
        antwort:
          "Das prüfen wir gemeinsam im kostenlosen Beratungsgespräch — je nach deiner persönlichen Situation.",
      },
      {
        frage: "Brauche ich Vorkenntnisse?",
        antwort:
          "Nein. Der Lehrgang ist so aufgebaut, dass du auch ohne kaufmännische Vorerfahrung einsteigen kannst.",
      },
    ],
    metaTitle: "Lehrgang Bankwesen — online in 6 Monaten | HalloSkills",
    metaDescription:
      "Die Inhalte der IHK-Ausbildung zum Bankkaufmann — in 6 statt 24 Monaten, 100% online, mit HalloSkills-Zertifikat. Start Herbst 2026.",
  },
];

export function findeKursNeu(slug: string): KursNeu | undefined {
  return KURSE_NEU.find((k) => k.slug === slug);
}
