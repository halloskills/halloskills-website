"use client";

import Link from "next/link";
import React from "react";

export function Logo3() {
  return (
    <section className="py-20 border-b border-[#e5e7eb]" style={{ background: "#f5f7f9" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span
              className="mb-5 block text-[0.75rem] font-semibold uppercase tracking-[0.12em]"
              style={{ color: "#D4AF37" }}
            >
              Dein Neustart
            </span>
            <h2
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                color: "#111827",
                lineHeight: 1.2,
              }}
            >
              Wir begleiten dich in{" "}
              <em style={{ fontStyle: "italic" }}>deine neue Karriere.</em>
            </h2>
          </div>
          <div>
            <p className="mb-8 leading-[1.8]" style={{ color: "#475467", fontSize: "1.05rem" }}>
              HalloSkills unterstützt dich bei deinem beruflichen Neustart: Wir beraten dich
              bei der Förderung, vermitteln dir zukunftsfähige Skills und begleiten dich beim
              Start in einen gut bezahlten Job mit Aufstiegschancen.
            </p>
            <Link
              href="/beratung-buchen"
              className="inline-block border-[1.5px] border-[#111827] px-7 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[#111827] transition-colors hover:bg-[#111827] hover:text-white"
            >
              Kostenlose Beratung buchen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
