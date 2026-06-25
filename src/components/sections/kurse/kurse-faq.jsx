"use client";

import Link from "next/link";
import React, { useState } from "react";

const faqs = [
  {
    q: "Welche Voraussetzungen brauche ich für die Kurse?",
    a: "Du benötigst einen gültigen Bildungsgutschein und Deutschkenntnisse auf mindestens B2-Niveau sowie einen PC oder Laptop mit Internetzugang.",
  },
  {
    q: "Kann ich mehrere Kurse kombinieren?",
    a: "Ja. In deinem persönlichen Beratungsgespräch erstellen wir einen Lehrplan, der genau zu deinen Zielen und deiner bisherigen Erfahrung passt.",
  },
  {
    q: "Wann kann ich starten?",
    a: "Neue Kurse starten jeden Montag. Nach genehmigtem Bildungsgutschein bist du innerhalb weniger Tage startklar.",
  },
  {
    q: "Bekomme ich Unterstützung während des Kurses?",
    a: "Ja. Du hast einen festen Lernbegleiter, der dir bei Fragen hilft und dich durch die Inhalte führt – per Chat, Video-Call oder E-Mail.",
  },
];

export function KurseFaq() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24" style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <span
              className="mb-5 block text-[0.75rem] font-semibold uppercase tracking-[0.12em]"
              style={{ color: "#D4AF37" }}
            >
              FAQ
            </span>
            <h2
              className="mb-6"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.2rem)",
                fontWeight: 400,
                color: "#111827",
              }}
            >
              Häufige Fragen zu unseren Kursen
            </h2>
            <p className="mb-8 leading-[1.7]" style={{ color: "#475467" }}>
              Nicht sicher, welcher Kurs zu dir passt? In einem kostenlosen Erstgespräch finden wir gemeinsam die perfekte Weiterbildung.
            </p>
            <Link
              href="/beratung-buchen"
              className="inline-block border-[1.5px] border-[#111827] px-7 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[#111827] transition-colors hover:bg-[#111827] hover:text-white"
            >
              Jetzt Beratung buchen
            </Link>
          </div>

          <div>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid #e5e7eb" }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "1rem",
                      fontWeight: 400,
                      color: "#111827",
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="ml-4 shrink-0 text-xl font-light transition-transform duration-200"
                    style={{
                      color: "#475467",
                      transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                {open === i && (
                  <p className="pb-5 leading-[1.7]" style={{ fontSize: "0.9rem", color: "#475467" }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
