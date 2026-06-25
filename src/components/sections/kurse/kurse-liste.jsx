"use client";

import Link from "next/link";
import React from "react";

const kurse = [
  {
    slug: "projektmanagement",
    kategorie: "Projektmanagement",
    title: "Projektmanagement für Anfänger und Profis",
    body: "Klassisches & agiles Projektmanagement, Scrum, PRINCE2, digitale PM-Tools.",
    dauer: "12–28 Wochen",
    start: "Jeden Montag",
    abschluss: "Zertifikat + Scrum PSM",
    img: "/images/bilder/kurs-bueromanagement.png",
  },
  {
    slug: "online-marketing",
    kategorie: "Online Marketing",
    title: "Online Marketing Manager:in",
    body: "SEO, Social Media, Performance Marketing, Google Ads, KI-Tools im Marketing.",
    dauer: "24–36 Wochen",
    start: "Jeden Montag",
    abschluss: "Zertifikat + Google Ads",
    img: "/images/bilder/kurs-ecommerce.png",
  },
  {
    slug: "ki-digitalisierung",
    kategorie: "KI & Digitalisierung",
    title: "KI & digitale Transformation",
    body: "KI-Grundlagen, Automatisierung, Prompt Engineering, digitale Geschäftsprozesse.",
    dauer: "10–20 Wochen",
    start: "Jeden Montag",
    abschluss: "Zertifikat",
    img: "/images/bilder/kurs-gesundheitswesen.png",
  },
];

export function KurseListe() {
  return (
    <section id="kurse" className="py-24" style={{ background: "#f5f7f9" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="mb-16 text-center">
          <span
            className="mb-5 block text-[0.75rem] font-semibold uppercase tracking-[0.12em]"
            style={{ color: "#D4AF37" }}
          >
            Angebote
          </span>
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              color: "#111827",
            }}
          >
            Unsere Kurse
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {kurse.map((k) => (
            <Link key={k.slug} href={`/kurse/${k.slug}`} className="group relative block overflow-hidden rounded-xl">
              <img
                src={k.img}
                alt={k.title}
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-5">
                <p
                  className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.12em]"
                  style={{ color: "#004B76" }}
                >
                  {k.kategorie}
                </p>
                <h3
                  className="mb-1"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "1.05rem",
                    fontWeight: 400,
                    color: "#111827",
                  }}
                >
                  {k.title}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "#475467", marginBottom: "12px" }}>{k.body}</p>
                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ maxHeight: 0, opacity: 0 }}
                  ref={(el) => {
                    if (!el) return;
                    const parent = el.closest(".group");
                    if (!parent) return;
                    parent.addEventListener("mouseenter", () => {
                      el.style.maxHeight = "200px";
                      el.style.opacity = "1";
                    });
                    parent.addEventListener("mouseleave", () => {
                      el.style.maxHeight = "0";
                      el.style.opacity = "0";
                    });
                  }}
                >
                  {[
                    { label: "Dauer", value: k.dauer },
                    { label: "Start", value: k.start },
                    { label: "Abschluss", value: k.abschluss },
                    { label: "Förderung", value: "100% Bildungsgutschein" },
                  ].map((d, i) => (
                    <div
                      key={i}
                      className="grid border-t border-[#e5e7eb] py-2 text-sm"
                      style={{ gridTemplateColumns: "120px 1fr" }}
                    >
                      <span style={{ color: "#475467" }}>{d.label}</span>
                      <span style={{ color: "#111827" }}>{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[#e5e7eb] bg-white p-10 text-center">
          <span
            className="mb-3 block text-[0.75rem] font-semibold uppercase tracking-[0.12em]"
            style={{ color: "#D4AF37" }}
          >
            Förderung
          </span>
          <p
            className="mb-6"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "1.4rem",
              fontWeight: 400,
              color: "#111827",
            }}
          >
            Alle Kurse sind 100% über den Bildungsgutschein finanzierbar.
          </p>
          <Link
            href="/bildungsgutschein"
            className="inline-block border-[1.5px] border-[#111827] px-7 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[#111827] transition-colors hover:bg-[#111827] hover:text-white"
          >
            Mehr zum Bildungsgutschein
          </Link>
        </div>
      </div>
    </section>
  );
}
