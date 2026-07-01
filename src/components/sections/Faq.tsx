"use client";

import { useState } from "react";
import FadeUp from "@/components/ui/FadeUp";

const faqs = [
  {
    frage: "Wer hat Anspruch auf einen Bildungsgutschein?",
    antwort: "Du hast Anspruch, wenn du arbeitslos oder arbeitssuchend bei der Agentur für Arbeit oder dem Jobcenter gemeldet bist, von Arbeitslosigkeit bedroht bist oder dich in Kurzarbeit befindest. In unserem kostenlosen Beratungsgespräch klären wir deine individuelle Situation.",
  },
  {
    frage: "Was kostet eine Weiterbildung bei HalloSkills?",
    antwort: "Für dich: nichts. Mit einem gültigen Bildungsgutschein (BGS) oder AVGS übernimmt die Agentur für Arbeit bzw. das Jobcenter die gesamten Kurskosten. Keine versteckten Gebühren, keine Zusatzkosten.",
  },
  {
    frage: "Wie läuft die Weiterbildung ab?",
    antwort: "Alle Kurse sind 100% online. Du lernst flexibel von zuhause, hast Zugriff auf Live-Sessions, aufgezeichnete Inhalte und persönliche Betreuung – alles auf einer Plattform. Kein Laptop? Wir leihen dir einen für die gesamte Weiterbildung.",
  },
  {
    frage: "Bekomme ich nach der Weiterbildung ein Zertifikat?",
    antwort: "Ja. Du erhältst ein bundesweit anerkanntes Abschlusszertifikat sowie Teilzertifikate für abgeschlossene Module – ideal für deinen Lebenslauf.",
  },
  {
    frage: "Wie schnell kann ich starten?",
    antwort: "Nach genehmigtem Bildungsgutschein starten neue Kurse jeden Montag. Zwischen Erstberatung und Kursstart vergehen meist 2–4 Wochen.",
  },
  {
    frage: "Kann ich die Weiterbildung auch neben einem Job machen?",
    antwort: "Ja. HalloSkills bietet Kurse in Vollzeit (37,5h/Woche) und Teilzeit an. Im Beratungsgespräch finden wir das passende Modell für dich. Dank lebenslangem Zugriff kannst du Inhalte jederzeit auffrischen.",
  },
];

function FaqItem({ frage, antwort }: { frage: string; antwort: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex items-center justify-between w-full py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 text-sm sm:text-base" style={{ fontFamily: "Georgia, serif" }}>
          {frage}
        </span>
        <svg
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="#004B76"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 text-sm leading-relaxed">{antwort}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#F5F7F9" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: "Georgia, serif", color: "#0f2744" }}
            >
              Häufige Fragen
            </h2>
            <p className="text-gray-600">
              Noch offen? Wir beantworten sie gerne in einem persönlichen Gespräch.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="bg-white rounded-xl border border-gray-200 px-6 sm:px-8">
            {faqs.map((faq) => (
              <FaqItem key={faq.frage} frage={faq.frage} antwort={faq.antwort} />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
