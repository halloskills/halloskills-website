"use client";

import React from "react";
import { StarFull } from "relume-icons";

export function UeberUnsTestimonial() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container max-w-lg text-center">
        <div className="mb-6 flex justify-center gap-1">
          {[1,2,3,4,5].map(i => <StarFull key={i} className="size-6 text-old-gold" />)}
        </div>
        <p className="mb-6 text-h5 font-bold italic">
          "HalloSkills hat meine Erwartungen weit übertroffen. Die Inhalte sind
          aktuell, die Betreuung ist persönlich, und das alles komplett kostenlos.
          Eine der besten Entscheidungen meines Lebens."
        </p>
        <p className="font-semibold">Winda Ü.</p>
        <p className="text-neutral-dark">Marketing Managerin</p>
      </div>
    </section>
  );
}
