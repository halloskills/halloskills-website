"use client";

import Link from "next/link";
import React from "react";

const kurse = [
  {
    slug: "projektmanagement",
    tag: "Projektmanagement",
    title: "Projekte führen wie ein Profi",
    dauer: "12–28 Wochen",
    start: "Jeden Montag",
    img: "/images/bilder/kurs-bueromanagement.png",
    details: [
      { label: "Dauer", value: "12–28 Wochen" },
      { label: "Start", value: "Jeden Montag" },
      { label: "Abschluss", value: "Zertifikat + Scrum PSM" },
      { label: "Förderung", value: "100% Bildungsgutschein" },
    ],
  },
  {
    slug: "online-marketing",
    tag: "Online Marketing",
    title: "Online Marketing meistern",
    dauer: "24–36 Wochen",
    start: "Jeden Montag",
    img: "/images/bilder/kurs-ecommerce.png",
    details: [
      { label: "Dauer", value: "24–36 Wochen" },
      { label: "Start", value: "Jeden Montag" },
      { label: "Abschluss", value: "Zertifikat + Google Ads" },
      { label: "Förderung", value: "100% Bildungsgutschein" },
    ],
  },
  {
    slug: "ki-digitalisierung",
    tag: "KI & Digitalisierung",
    title: "KI und digitale Transformation",
    dauer: "10–20 Wochen",
    start: "Jeden Montag",
    img: "/images/bilder/kurs-gesundheitswesen.png",
    details: [
      { label: "Dauer", value: "10–20 Wochen" },
      { label: "Start", value: "Jeden Montag" },
      { label: "Abschluss", value: "Zertifikat" },
      { label: "Förderung", value: "100% Bildungsgutschein" },
    ],
  },
];

export function Layout395() {
  return (
    <section
      id="kurs-angebot"
      className="py-24"
      style={{ background: "#f5f7f9" }}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <span
            className="mb-5 block text-[0.75rem] font-semibold uppercase tracking-[0.12em]"
            style={{ color: "#D4AF37" }}
          >
            Unsere Weiterbildungen
          </span>
          <h2
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              color: "#111827",
            }}
          >
            Unsere Top-Weiterbildungen
          </h2>
        </div>

        {/* Course cards — photo with hover overlay */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {kurse.map((k) => (
            <Link key={k.slug} href={`/kurse/${k.slug}`} className="group relative block overflow-hidden rounded-xl">
              {/* Photo */}
              <img
                src={k.img}
                alt={k.title}
                className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              {/* Static overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-5">
                <p
                  className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.12em]"
                  style={{ color: "#004B76" }}
                >
                  {k.tag}
                </p>
                <h3
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    color: "#111827",
                  }}
                >
                  {k.title}
                </h3>
                {/* Hover detail rows */}
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
                      el.style.marginTop = "16px";
                    });
                    parent.addEventListener("mouseleave", () => {
                      el.style.maxHeight = "0";
                      el.style.opacity = "0";
                      el.style.marginTop = "0";
                    });
                  }}
                >
                  {k.details.map((d, i) => (
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

        {/* Banner */}
        <div className="mt-12 flex flex-col items-center justify-center gap-6 border-t border-[#e5e7eb] pt-10 md:flex-row">
          <p
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "1.4rem",
              fontWeight: 400,
              color: "#111827",
            }}
          >
            Alle Weiterbildungen sind 100% über den Bildungsgutschein finanzierbar.
          </p>
          <div className="hidden h-8 w-px bg-[#e5e7eb] md:block" />
          <Link
            href="/bildungsgutschein"
            className="border-b border-[#111827] pb-0.5 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[#111827] transition-colors hover:border-regal-blue hover:text-regal-blue"
          >
            So funktioniert die Förderung →
          </Link>
        </div>
      </div>
    </section>
  );
}
