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
  stepsImg?: string;
};

export const KURSE: Record<string, Kurs> = {
  projektmanagement: {
    slug: "projektmanagement",
    title: "Projektmanager/-in",
    subtitle: "Projektmanagement",
    description:
      "Von der digitalen Grundlage bis zum agilen Profi: Du lernst klassisches und agiles Projektmanagement, Microsoft Office und moderne PM-Tools. Inklusive Scrum-Zertifizierung (PSM I & II).",
    dauer: "28 Wochen",
    inhalte: [
      "Digitalisierung: Computer- und Internetgrundlagen, Automatisierung & KI-Einführung",
      "Microsoft Office: Word, Excel, Outlook, PowerPoint (Basis & Aufbau)",
      "Klassisches Projektmanagement: Initiierung, Planung, Steuerung & Abschluss",
      "Agiles Projektmanagement: Scrum, Kanban, agile Führung & Qualitätsmanagement",
      "Vorbereitung auf die offizielle Scrum-Zertifizierung (PSM I & II)",
      "Bonus: KI-Kurs für alle geförderten Teilnehmenden inklusive",
    ],
    vorteile: [
      "100% online",
      "Persönlicher Lernbegleiter während der gesamten Weiterbildung",
      "AZAV-zertifizierter Abschluss mit Zertifikat",
      "Inklusive Scrum PSM I & II Prüfungsvorbereitung",
      "Lebenslanger Zugriff auf alle Kursmaterialien mit Updates",
    ],
    faq: [
      {
        q: "Brauche ich Vorkenntnisse im Projektmanagement?",
        a: "Nein. Der Kurs startet mit den digitalen Grundlagen und baut systematisch auf. Er ist sowohl für Einsteiger als auch für Berufserfahrene geeignet.",
      },
      {
        q: "Welches Zertifikat bekomme ich?",
        a: "Du erhältst ein AZAV-anerkanntes Abschlusszertifikat. Zusätzlich bereitest du dich auf die offizielle Scrum-Zertifizierung PSM I & II vor.",
      },
      {
        q: "Kann ich den Kurs neben einem Job machen?",
        a: "Der Kurs ist als Vollzeit-Weiterbildung konzipiert (28 Wochen). Für eine Förderung durch den Bildungsgutschein ist in der Regel Vollzeit vorgesehen. Im Beratungsgespräch klären wir deine individuelle Situation.",
      },
    ],
    testimonial: {
      text: "Dieser Kurs hat meinen Lebenslauf komplett verändert. Die Inhalte sind aktuell, praxisnah und direkt anwendbar.",
      author: "Thomas R.",
      role: "jetzt Projektmanager bei einem Berliner Start-up",
    },
    metaTitle: "Projektmanager/-in Weiterbildung - 100% kostenlos mit Bildungsgutschein | HalloSkills",
    metaDescription:
      "AZAV-zertifizierte Projektmanagement-Weiterbildung, 28 Wochen, vollständig gefördert. Klassisches & agiles PM, Scrum PSM I & II. Jetzt kostenlose Beratung buchen.",
    img: "/images/bilder/projektmanagerin-whiteboard-postits.png",
    stepsImg: "/images/bilder/projektmanagerin-laptop-gantt.png",
  },
  "online-marketing": {
    slug: "online-marketing",
    title: "Online-Marketing Manager/-in",
    subtitle: "Online Marketing",
    description:
      "Von der Marketingstrategie bis zur Social-Media-Kampagne: Du lernst SEO, SEA, Content, E-Mail-Marketing, Analytics und KI-Tools. Mit Google-Zertifizierung und persönlichem Lernbegleiter.",
    dauer: "36 Wochen",
    inhalte: [
      "Strategisches Marketingmanagement: Ziele, Methoden & Marketing-Mix",
      "Online Marketing: SEO, SEA, E-Mail, Affiliate & Analytics",
      "Social Media Management: Strategie, Community, Content & Werbung",
      "Suchmaschinenmarketing: Keyword-Optimierung, Google Ads & Performance-Messung",
      "Digitale Medien: Content-Strategie, Video-Produktion & rechtliche Grundlagen",
      "Projektmanagement & Kommunikation: Projektgrundlagen & Präsentation",
      "Premium-KI-Modul inklusive",
    ],
    vorteile: [
      "100% online",
      "Persönlicher Lernbegleiter während der gesamten Weiterbildung",
      "AZAV-zertifizierter Abschluss",
      "Vorbereitung auf Google Ads Zertifizierung",
      "Lebenslanger Zugriff auf alle Kursmaterialien mit Updates",
    ],
    faq: [
      {
        q: "Brauche ich Marketing-Vorkenntnisse?",
        a: "Nein. Der Kurs startet bei den Grundlagen und baut systematisch auf. Auch Quereinsteiger starten erfolgreich.",
      },
      {
        q: "Welches Zertifikat bekomme ich?",
        a: "Du erhältst ein AZAV-anerkanntes Abschlusszertifikat sowie eine Vorbereitung auf die Google Ads Zertifizierung.",
      },
      {
        q: "Sind die Inhalte aktuell?",
        a: "Ja. Die Inhalte werden regelmäßig aktualisiert, besonders in den Bereichen KI, Social Media und Performance Marketing.",
      },
    ],
    testimonial: {
      text: "Die Beratung hat mich sofort überzeugt. Kein Standard-Pitch, echte, individuelle Beratung.",
      author: "Fatima K.",
      role: "Online Marketing Managerin",
    },
    metaTitle: "Online-Marketing Manager/-in Weiterbildung - 100% kostenlos mit Bildungsgutschein | HalloSkills",
    metaDescription:
      "AZAV-zertifizierte Online Marketing Weiterbildung, 36 Wochen, vollständig gefördert. SEO, Social Media, Google Ads, KI-Tools. Jetzt Beratung buchen.",
    img: "/images/bilder/managerin-schwarzer-pullover-imac.png",
    stepsImg: "/images/bilder/mann-kopfhoerer-blauer-pulli-analytics-dashboard.png",
  },
  "ki-digitalisierung": {
    slug: "ki-digitalisierung",
    title: "KI-Manager/-in",
    subtitle: "KI & Digitalisierung",
    description:
      "Lerne, wie du KI strategisch in Unternehmen einsetzt: von der KI-Strategie über Daten-Governance bis hin zu Change Management und Implementierung. Kompakt und praxisorientiert.",
    dauer: "4 Wochen",
    inhalte: [
      "KI-Strategie & Business Value: Prioritätsrahmen, generative KI-Anwendungsfälle & Stakeholder-Kommunikation",
      "KI-Architektur & Integration: Systemarchitekturen, ERP/CRM-Integration, Copilot vs. Agent",
      "Daten-Governance & DSGVO: Dateninfrastruktur, RAG-Architektur & KI-Act-Risikoklassifizierung",
      "KI-Implementierung & Change Management: Einführungsstrategien, KPI-Messung & Skalierung",
      "Bonus: Umfassender KI-Grundlagenkurs inklusive",
    ],
    vorteile: [
      "Kein technisches Vorwissen nötig",
      "100% online",
      "AZAV-zertifizierter Abschluss",
      "Lebenslanger Zugriff auf alle Kursmaterialien mit Updates",
      "Persönlicher Lernbegleiter inklusive",
    ],
    faq: [
      {
        q: "Brauche ich technische Vorkenntnisse?",
        a: "Nein. Grundlegende PC-Kenntnisse reichen aus. Der Kurs richtet sich an alle, die KI strategisch verstehen und einsetzen wollen.",
      },
      {
        q: "Welches Zertifikat bekomme ich?",
        a: "Du erhältst eine AZAV-anerkannte Teilnahmebescheinigung für den KI-Manager-Kurs.",
      },
      {
        q: "Wie aktuell sind die KI-Inhalte?",
        a: "Sehr aktuell. Die Inhalte werden laufend aktualisiert, da KI sich schnell weiterentwickelt. Du hast lebenslangen Zugriff auf alle Updates.",
      },
    ],
    testimonial: {
      text: "100% gefördert und trotzdem Topqualität. Die Inhalte sind aktuell, praxisnah und sofort anwendbar.",
      author: "Sandra L.",
      role: "KI & Automatisierung",
    },
    metaTitle: "KI-Manager/-in Weiterbildung - 100% kostenlos mit Bildungsgutschein | HalloSkills",
    metaDescription:
      "AZAV-zertifizierte KI-Manager Weiterbildung, 4 Wochen, vollständig gefördert. KI-Strategie, Daten-Governance, Change Management. Jetzt Beratung buchen.",
    img: "/images/bilder/mann-airpods-khaki-dual-monitor.png",
    stepsImg: "/images/bilder/online-marketing-managerin-gelbes-blazer.png",
  },
};

export const KURSE_LIST = Object.values(KURSE);
