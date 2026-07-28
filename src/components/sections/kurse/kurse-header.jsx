"use client";

import Link from "next/link";
import React from "react";

export function KurseHeader() {
  return (
    <section
      className="relative flex min-h-[60vh] items-center overflow-hidden"
      style={{ backgroundColor: "#004B76" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bilder/kurs-ecommerce.png')", opacity: 0.3 }}
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
            Unser Kursangebot
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
            Zertifizierte Online-Weiterbildungen,{" "}
            <em style={{ fontStyle: "italic" }}>gefördert & anerkannt.</em>
          </h1>
          <p
            className="mb-10 leading-[1.7]"
            style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem", maxWidth: 480 }}
          >
            Alle Weiterbildungen sind vollständig über den Bildungsgutschein finanzierbar.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link
              href="/beratung-buchen"
              className="inline-block border-[1.5px] border-white px-7 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-[#111827]"
            >
              Kostenlose Beratung buchen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
