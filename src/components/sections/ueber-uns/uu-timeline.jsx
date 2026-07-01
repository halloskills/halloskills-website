"use client";

import React from "react";

const meilensteine = [
  { jahr: "2021", title: "Gründung von HalloSkills", body: "Gegründet mit einer klaren Idee: Arbeitssuchende verdienen bessere Chancen. Die ersten Teilnehmenden starteten ihre Weiterbildung." },
  { jahr: "2022", title: "AZAV-Zertifizierung erhalten", body: "Unsere Kurse wurden offiziell zertifiziert, damit sind Bildungsgutscheine bei uns vollständig einlösbar." },
  { jahr: "2023", title: "500 Absolvent:innen, 87% direkt in den Job", body: "Ein entscheidender Meilenstein: 87% unserer Absolvent:innen fanden nach der Weiterbildung eine neue Stelle." },
  { jahr: "2024", title: "KI & Digitalisierung als dritter Kursschwerpunkt", body: "Wir erweiterten unser Angebot um den Bereich KI & digitale Transformation, der Nachfrage entsprechend." },
  { jahr: "2025", title: "1.500+ erfolgreiche Absolvent:innen", body: "Über 1.500 Menschen haben mit HalloSkills ihre Karriere neu gestartet. Das Wachstum geht weiter." },
];

export function UeberUnsTimeline() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container max-w-lg">
        <div className="mb-12 text-center md:mb-18">
          <p className="mb-3 font-semibold md:mb-4">Geschichte</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">Unsere Geschichte</h2>
        </div>
        <div className="relative flex flex-col gap-8">
          <div className="absolute left-[1.625rem] top-0 h-full w-0.5 bg-neutral-lighter md:left-[2.375rem]" />
          {meilensteine.map((m, i) => (
            <div key={i} className="relative flex gap-6 md:gap-10">
              <div className="relative z-10 flex size-13 shrink-0 items-center justify-center rounded-full bg-regal-blue text-small font-bold text-white md:size-19">
                {m.jahr}
              </div>
              <div className="rounded-card bg-white p-6 shadow-sm flex-1">
                <h3 className="mb-2 text-h5 font-bold">{m.title}</h3>
                <p className="text-neutral-dark">{m.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
