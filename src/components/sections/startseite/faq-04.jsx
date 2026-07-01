"use client";

import Link from "next/link";
import React, { useState } from "react";

const faqs = [
  {
    q: "Wer hat Anspruch auf einen Bildungsgutschein?",
    a: "Grundsätzlich alle Personen, die Arbeitslosengeld I oder II beziehen oder von Arbeitslosigkeit bedroht sind. Auch Beschäftigte können unter bestimmten Voraussetzungen einen BGS erhalten. Lass dich kostenlos von uns beraten.",
  },
  {
    q: "Was kostet mich die Weiterbildung?",
    a: "Nichts. Wenn du den Bildungsgutschein erhältst, übernimmt die Agentur für Arbeit oder das Jobcenter alle Kurskosten vollständig. Kein Eigenbetrag, keine versteckten Gebühren.",
  },
  {
    q: "Kann ich die Kurse von zuhause aus machen?",
    a: "Ja, alle unsere Kurse finden zu 100% online statt. Du brauchst nur einen Computer mit Internetanschluss. Kein Pendeln, keine festen Anwesenheitspflichten – du lernst in deinem eigenen Tempo.",
  },
  {
    q: "Wie lange dauern die Kurse?",
    a: "Je nach Kurs und persönlichem Tempo: Projektmanagement 12–28 Wochen, Online Marketing 24–36 Wochen, KI & Digitalisierung 10–20 Wochen. Alle Kurse starten jeden Montag.",
  },
  {
    q: "Helft ihr mir auch nach dem Kurs bei der Jobsuche?",
    a: "Ja. Wir unterstützen dich aktiv mit Bewerbungscoaching, Interview-Vorbereitung und unserem Arbeitgeber-Netzwerk. Das ist bei HalloSkills inklusive – ohne Aufpreis.",
  },
];

export function Faq4() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24" style={{ background: "#f5f7f9" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[1fr_1.4fr]">
          {/* Left */}
          <div>
            <span
              className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#D4AF37" }}
            >
              FAQ
            </span>
            <h2
              className="mb-6"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#0f2744",
              }}
            >
              Häufige Fragen
            </h2>
            <p className="mb-8 leading-[1.7]" style={{ color: "#475467" }}>
              Du hast weitere Fragen? Wir beraten dich kostenlos und persönlich.
            </p>
            <Link
              href="/beratung-buchen"
              className="inline-block border-[1.5px] border-[#111827] px-7 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[#111827] transition-colors hover:bg-[#111827] hover:text-white"
            >
              Jetzt beraten lassen
            </Link>
          </div>

          {/* Right: accordion */}
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="border-b" style={{ borderColor: "#e5e7eb" }}>
                <button
                  className="flex w-full items-start justify-between gap-4 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "1.05rem",
                      fontWeight: 400,
                      color: "#0f2744",
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="shrink-0 text-xl leading-none transition-transform duration-200"
                    style={{
                      color: "#475467",
                      transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: open === i ? "300px" : "0", opacity: open === i ? 1 : 0 }}
                >
                  <p className="pb-5 leading-[1.7]" style={{ fontSize: "0.9rem", color: "#475467" }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
