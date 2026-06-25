"use client";

import React from "react";

const testimonials = [
  {
    quote: "Ich habe viele Anbieter kontaktiert, aber bei HalloSkills wurde wirklich auf meine Situation eingegangen. Kein Standard-Pitch – echte Beratung.",
    name: "Fatima K.",
    role: "Online Marketing Managerin",
    photo: "/images/team/andrea.png",
  },
  {
    quote: "Was mich am meisten beeindruckt hat: Das Team war nicht nur während des Kurses da, sondern hat mich aktiv bei der Jobsuche unterstützt.",
    name: "Marcus T.",
    role: "Projektmanager",
    photo: "/images/team/christian.png",
  },
  {
    quote: "Ich hätte nicht gedacht, dass eine kostenlose Weiterbildung so hochwertig sein kann. Die Inhalte sind aktuell, praxisnah und sofort anwendbar.",
    name: "Sandra L.",
    role: "KI & Automatisierung",
    photo: "/images/team/konrad.png",
  },
];

export function Testimonial14() {
  return (
    <section className="py-24" style={{ background: "#004B76" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="mb-16 max-w-[600px]">
          <span
            className="mb-5 block text-[0.75rem] font-semibold uppercase tracking-[0.12em]"
            style={{ color: "#D4AF37" }}
          >
            Erfolgsgeschichten
          </span>
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              color: "#ffffff",
            }}
          >
            Was unsere Absolvent:innen sagen
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl p-8"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <p
                className="mb-8 flex-1 leading-[1.7]"
                style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem", fontStyle: "italic" }}
              >
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 border-t pt-6" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
                <img
                  src={t.photo}
                  alt={t.name}
                  className="size-12 rounded-full object-cover object-top"
                  style={{ border: "2px solid rgba(255,255,255,0.2)" }}
                />
                <div>
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.12em]" style={{ color: "#ffffff" }}>
                    {t.name}
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.65)" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
