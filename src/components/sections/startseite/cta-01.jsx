"use client";

import Link from "next/link";
import React from "react";

export function Cta1() {
  return (
    <section className="py-24" style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span
              className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#D4AF37" }}
            >
              Kostenlos starten
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
              Bereit für deinen nächsten Karriereschritt?
            </h2>
            <p className="mb-10 leading-[1.7]" style={{ color: "#475467" }}>
              Wir hören dir zu, verstehen deine Situation und finden gemeinsam
              die Weiterbildung, die wirklich zu dir passt. Kostenlos.
              Unverbindlich. Persönlich.
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
                Weiterbildungen entdecken →
              </Link>
            </div>
          </div>

          {/* Right: image */}
          <div>
            <img
              src="/images/bilder/beraterin-orange-pullover-laptop.png"
              alt="Weiterbildung starten"
              className="w-full rounded-2xl object-cover"
              style={{ aspectRatio: "16/10" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
