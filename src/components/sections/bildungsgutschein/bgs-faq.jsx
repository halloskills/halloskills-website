"use client";

import Link from "next/link";
import React, { useState } from "react";

const faqs = [
  {
    q: "Wer hat Anspruch auf einen Bildungsgutschein?",
    a: "Du hast Anspruch, wenn du arbeitslos oder arbeitssuchend bei der Agentur für Arbeit oder dem Jobcenter gemeldet bist, von Arbeitslosigkeit bedroht bist oder dich in Kurzarbeit befindest. Dein Sachbearbeiter entscheidet final, wir helfen dir, überzeugend aufzutreten.",
  },
  {
    q: "Wie lange ist der Bildungsgutschein gültig?",
    a: "Der Bildungsgutschein ist in der Regel 3 Monate gültig und muss in dieser Zeit bei einem zugelassenen Bildungsträger wie HalloSkills eingelöst werden.",
  },
  {
    q: "Was ist AVGS?",
    a: "Der Aktivierungs- und Vermittlungsgutschein (AVGS) ist eine weitere Förderform für Coaching- und Beratungsleistungen. Auch dieser wird vollständig vom Jobcenter finanziert.",
  },
  {
    q: "Bekomme ich einen Bildungsgutschein, wenn ich noch arbeite?",
    a: "Möglicherweise ja, wenn dein Job gefährdet ist oder du dich beruflich umorientieren musst. In unserem Beratungsgespräch klären wir deine individuelle Situation.",
  },
  {
    q: "Was passiert, wenn mein Antrag abgelehnt wird?",
    a: "Wir unterstützen dich beim Widerspruch und erarbeiten gemeinsam Argumente für eine Neubeantragung. Viele abgelehnte Erstanträge werden beim zweiten Versuch bewilligt.",
  },
];

export function BgsFaq() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24" style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[1fr_1.6fr]">
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
                fontSize: "clamp(1.8rem, 3vw, 2.2rem)",
                fontWeight: 400,
                color: "#0f2744",
              }}
            >
              Häufige Fragen zum Bildungsgutschein
            </h2>
            <p className="mb-8 leading-[1.7]" style={{ color: "#475467" }}>
              Lass uns gemeinsam deinen Bildungsgutschein beantragen. Kostenlose Erstberatung, wir bereiten dich Schritt für Schritt vor.
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
                      color: "#0f2744",
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
