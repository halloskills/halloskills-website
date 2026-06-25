"use client";

import Link from "next/link";
import React from "react";

export function UeberUnsCta() {
  return (
    <section className="py-24" style={{ background: "#f5f7f9" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <div>
            <span
              className="mb-5 block text-[0.75rem] font-semibold uppercase tracking-[0.12em]"
              style={{ color: "#D4AF37" }}
            >
              Jetzt starten
            </span>
            <h2
              className="mb-6"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#111827",
              }}
            >
              Lern uns persönlich kennen.
            </h2>
            <p className="mb-10 leading-[1.7]" style={{ color: "#475467" }}>
              In einem kostenlosen Erstgespräch zeigen wir dir, wie wir dich auf
              deinem Weg zum neuen Job begleiten können.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link
                href="/beratung-buchen"
                className="inline-block border-[1.5px] border-[#111827] px-7 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[#111827] transition-colors hover:bg-[#111827] hover:text-white"
              >
                Kostenlose Beratung buchen
              </Link>
              <Link
                href="/kurse"
                className="inline-flex items-center gap-1 border-b border-[#111827] pb-0.5 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[#111827] transition-colors hover:border-regal-blue hover:text-regal-blue"
              >
                Kurse entdecken →
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/images/bilder/hero.png"
              alt="Beratung bei HalloSkills"
              className="w-full rounded-2xl object-cover"
              style={{ aspectRatio: "16/10" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
