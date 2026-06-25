"use client";

import React from "react";

const stats = [
  { value: "1.200+", label: "erfolgreiche Absolvent:innen" },
  { value: "87%", label: "finden danach einen Job" },
  { value: "100%", label: "staatlich gefördert" },
  { value: "4.9 / 5", label: "Kundenzufriedenheit" },
];

export function Logo3() {
  return (
    <section className="border-b border-[#e5e7eb] py-16" style={{ background: "#f5f7f9" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="text-center">
              <p
                className="mb-1 leading-none"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 400,
                  color: "#004B76",
                }}
              >
                {s.value}
              </p>
              <p className="text-sm" style={{ color: "#475467" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
