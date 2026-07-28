"use client";

import Link from "next/link";
import React from "react";

export function BgsHeader() {
  return (
    <section
      className="relative flex min-h-[60vh] items-center overflow-hidden"
      style={{ backgroundColor: "#004B76" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bilder/prozess.png')", opacity: 0.3 }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 100%)" }}
      />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-[600px]">
          <span
            className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
            style={{ color: "#D4AF37" }}
          >
            Bildungsgutschein
          </span>
          <h1
            className="mb-6"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.2,
            }}
          >
            Weiterbildung mit{" "}
            <em style={{ fontStyle: "italic" }}>Bildungsgutschein.</em>
          </h1>
          <p
            className="mb-10 leading-[1.7]"
            style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem", maxWidth: 480 }}
          >
            Der Bildungsgutschein der Agentur für Arbeit kann Weiterbildungskosten übernehmen.
            Wir erklären dir, wer Anspruch haben kann und wie du ihn beantragst.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link
              href="/beratung-buchen"
              className="inline-block border-[1.5px] border-white px-7 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-[#111827]"
            >
              Kostenlose Beratung buchen
            </Link>
            <Link
              href="#bgs-ablauf"
              className="inline-flex items-center gap-1 border-b border-white/60 pb-0.5 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-white/80 transition-colors hover:border-white hover:text-white"
            >
              Wie es funktioniert →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
