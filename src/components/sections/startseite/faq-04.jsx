"use client";

import Link from "next/link";
import React, { useState } from "react";

const faqs = [
  {
    q: "Wer hat Anspruch auf einen Bildungsgutschein?",
    a: "Grundsätzlich haben alle Personen Anspruch auf einen Bildungsgutschein, die Arbeitslosengeld I oder II beziehen oder von Arbeitslosigkeit bedroht sind. Auch Beschäftigte können unter bestimmten Voraussetzungen einen Bildungsgutschein erhalten. Lass dich von uns kostenlos beraten, ob du einen Anspruch hast.",
  },
  {
    q: "Wie teuer ist eine berufliche Weiterbildung?",
    a: "Wenn die Maßnahme über einen Bildungsgutschein gefördert wird, ist die Maßnahme für den Teilnehmer oder die Teilnehmerin kostenlos. Die Agentur für Arbeit, das Jobcenter oder die Rentenversicherung übernehmen die vollen Kosten. Du zahlst keinen Eigenbeitrag und keine versteckten Gebühren.",
  },
  {
    q: "Kann eine berufliche Weiterbildung von zuhause durchgeführt werden?",
    a: "Ja, Kurse zur beruflichen Weiterbildung können komplett im Homeoffice stattfinden. Bei HalloSkills lernst du flexibel von zuhause. Du brauchst nur einen Computer mit Internetanschluss. Ohne Pendelzeiten und mit Lernen im eigenen Tempo.",
  },
  {
    q: "Wie lange dauern die Kurse für berufliche Weiterbildung?",
    a: "Lehrgänge in der beruflichen Weiterbildung haben eine Laufzeit von wenigen Wochen bis zu mehreren Monaten. Bei HalloSkills dauern die Kurse 12–28 Wochen (Projektmanagement), 24–36 Wochen (Online Marketing) oder 4 Wochen (KI & Digitalisierung). Gemeinsam finden wir den perfekten Kurs für dich!",
  },
  {
    q: "Hilft HalloSkills nach dem Kurs bei der Jobsuche?",
    a: "Ja, wir bieten dir Unterstützung, nach einer absolvierten Weiterbildung einen neuen Job zu finden. Du bekommst Bewerbungscoachings, Interview-Vorbereitung und Zugang zu unserem Arbeitgeber-Netzwerk.",
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
              Antworten auf deine Fragen
            </h2>
            <p className="mb-8 leading-[1.7]" style={{ color: "#475467" }}>
              Du brauchst noch Hilfe? Wir beraten dich kostenlos und unverbindlich.
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
