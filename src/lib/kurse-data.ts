export type Kurs = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  dauer: string;
  inhalte: string[];
  vorteile: string[];
  faq: { q: string; a: string }[];
  testimonial: { text: string; author: string; role: string };
  metaTitle: string;
  metaDescription: string;
  img?: string;
};

export const KURSE: Record<string, Kurs> = {
  projektmanagement: {
    slug: "projektmanagement",
    title: "Projektmanagement - Klassisch, agil & digital",
    subtitle: "Projektmanagement",
    description:
      "Entwickle deine Fähigkeiten im klassischen und agilen Projektmanagement. Du lernst digitale Tools, die deinen Workflow auf das nächste Level heben - und verlässt den Kurs mit einem anerkannten Zertifikat.",
    dauer: "12–28 Wochen",
    inhalte: [
      "Klassisches Projektmanagement: Planung, Steuerung, Abschluss",
      "Agile Methoden: Scrum, Kanban, Design Thinking",
      "Digitale PM-Tools: Jira, Asana, MS Project, Trello",
      "Kommunikation & Führung in Projekten",
      "Praxisprojekte mit echtem Bezug zum Arbeitsmarkt",
    ],
    vorteile: [
      "100% online - lerne wann und wo du willst",
      "Persönliche Lernbegleitung inklusive",
      "Bundesweit anerkanntes AZAV-Zertifikat",
      "Flexible Zeiteinteilung: Vollzeit oder Teilzeit",
      "Kein Laptop? Wir leihen dir einen für die gesamte Weiterbildung",
    ],
    faq: [
      {
        q: "Brauche ich Vorkenntnisse im Projektmanagement?",
        a: "Nein. Der Kurs ist sowohl für Einsteiger als auch für Berufserfahrene konzipiert. Im Beratungsgespräch passen wir die Inhalte an dein Level an.",
      },
      {
        q: "Welches Zertifikat bekomme ich?",
        a: "Du erhältst ein AZAV-anerkanntes Abschlusszertifikat. Auf Wunsch kannst du zusätzlich die offizielle Scrum-Zertifizierung (PSM I) ablegen.",
      },
      {
        q: "Kann ich den Kurs neben einem Job machen?",
        a: "Ja. HalloSkills bietet den Kurs in Vollzeit (37,5h/Woche) und Teilzeit an. Im Beratungsgespräch finden wir das passende Modell für dich.",
      },
    ],
    testimonial: {
      text: "Dieser Kurs hat meinen Lebenslauf komplett verändert. Die Inhalte sind aktuell, praxisnah und direkt anwendbar.",
      author: "Thomas R.",
      role: "jetzt Projektmanager bei einem Berliner Start-up",
    },
    metaTitle: "Projektmanagement Weiterbildung - 100% kostenlos mit Bildungsgutschein | HalloSkills",
    metaDescription:
      "AZAV-zertifizierter Projektmanagement-Kurs - vollständig gefördert. Scrum, Kanban, digitale PM-Tools. Start jeden Montag. Jetzt kostenlose Beratung buchen.",
    img: "/images/bilder/kurs-bueromanagement.png",
  },
  "online-marketing": {
    slug: "online-marketing",
    title: "Online Marketing Manager:in",
    subtitle: "Online Marketing",
    description:
      "SEO, Social Media, Performance Marketing, Google Ads und KI-Tools im Marketing - vollständig online, vollständig gefördert. Starte deine Karriere im digitalen Marketing.",
    dauer: "24–36 Wochen",
    inhalte: [
      "SEO & Content Marketing",
      "Social Media Marketing & Community Management",
      "Performance Marketing & Google Ads",
      "KI-Tools im Marketing (ChatGPT, Midjourney & mehr)",
      "Analytics, Reporting & Conversion Optimierung",
    ],
    vorteile: [
      "100% online - lerne flexibel von zuhause",
      "Persönliche Lernbegleitung inklusive",
      "AZAV-Zertifikat + Google Ads Zertifizierung",
      "Inhalte werden quartalsweise aktualisiert",
      "Lebenslanger Zugriff auf alle Kursmaterialien",
    ],
    faq: [
      {
        q: "Brauche ich Marketing-Vorkenntnisse?",
        a: "Nein. Der Kurs startet bei den Grundlagen und baut systematisch auf. Auch Quereinsteiger starten erfolgreich.",
      },
      {
        q: "Welches Zertifikat bekomme ich?",
        a: "Du erhältst ein AZAV-anerkanntes Abschlusszertifikat sowie eine Google Ads Zertifizierung.",
      },
      {
        q: "Sind die Inhalte auf dem neuesten Stand?",
        a: "Ja. Wir aktualisieren die Inhalte quartalsweise - besonders im Bereich KI & Social Media.",
      },
    ],
    testimonial: {
      text: "Die Beratung hat mich sofort überzeugt. Kein Standard-Pitch - echte, individuelle Beratung.",
      author: "Fatima K.",
      role: "Online Marketing Managerin",
    },
    metaTitle: "Online Marketing Weiterbildung - 100% kostenlos mit Bildungsgutschein | HalloSkills",
    metaDescription:
      "AZAV-zertifizierter Online Marketing Kurs - vollständig gefördert. SEO, Social Media, Google Ads, KI-Tools. Start jeden Montag. Jetzt Beratung buchen.",
    img: "/images/bilder/kurs-ecommerce.png",
  },
  "ki-digitalisierung": {
    slug: "ki-digitalisierung",
    title: "KI & digitale Transformation",
    subtitle: "KI & Digitalisierung",
    description:
      "KI-Grundlagen, Automatisierung, Prompt Engineering und digitale Geschäftsprozesse - für alle, die in der digitalen Welt von morgen arbeiten wollen.",
    dauer: "10–20 Wochen",
    inhalte: [
      "KI-Grundlagen & Machine Learning Überblick",
      "Prompt Engineering & ChatGPT im Berufsalltag",
      "Automatisierung mit No-Code-Tools (Zapier, Make)",
      "Digitale Geschäftsprozesse analysieren & optimieren",
      "Datenschutz & Ethik in der KI",
    ],
    vorteile: [
      "Kein technisches Vorwissen nötig",
      "Sofort anwendbare Tools & Techniken",
      "Inhalte werden monatlich aktualisiert",
      "AZAV-Zertifikat für KI & Digitalisierung",
      "100% online - lerne in deinem eigenen Tempo",
    ],
    faq: [
      {
        q: "Brauche ich technische Vorkenntnisse?",
        a: "Nein. Grundlegende PC-Kenntnisse reichen völlig aus. Der Kurs erklärt alle Konzepte von Grund auf.",
      },
      {
        q: "Welches Zertifikat bekomme ich?",
        a: "Du erhältst ein AZAV-anerkanntes Abschlusszertifikat für KI & digitale Transformation.",
      },
      {
        q: "Wie aktuell sind die KI-Inhalte?",
        a: "Sehr aktuell - die Inhalte werden monatlich aktualisiert, da KI sich sehr schnell entwickelt.",
      },
    ],
    testimonial: {
      text: "100% gefördert und trotzdem Topqualität. Die Inhalte sind aktuell, praxisnah und sofort anwendbar.",
      author: "Sandra L.",
      role: "KI & Automatisierung",
    },
    metaTitle: "KI & Digitalisierung Weiterbildung - 100% kostenlos mit Bildungsgutschein | HalloSkills",
    metaDescription:
      "AZAV-zertifizierter KI & Digitalisierung Kurs - vollständig gefördert. Prompt Engineering, Automatisierung, digitale Transformation. Start jeden Montag.",
    img: "/images/bilder/kurs-gesundheitswesen.png",
  },
};

export const KURSE_LIST = Object.values(KURSE);
