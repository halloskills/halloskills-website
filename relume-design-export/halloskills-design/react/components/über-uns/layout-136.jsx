"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout136() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container max-w-lg text-center">
        <div className="flex flex-col items-center justify-start">
          <div className="mb-5 md:mb-6">
            <img
              className="size-20 text-scheme-text"
              src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/hls.svg"
            />
          </div>
          <p className="mb-3 font-semibold md:mb-4">Unsere Geschichte</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">
            Wir glauben an die Kraft der Weiterbildung
          </h2>
          <p className="text-medium">
            HalloSkills wurde gegründet, um Arbeitssuchenden echte Chancen zu
            geben. Wir bieten kostenlose, hochwertige Kurse in
            Projektmanagement, Online Marketing und KI, damit jeder die
            Fähigkeiten entwickeln kann, die der Arbeitsmarkt heute verlangt.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            <Button title="Mehr" variant="secondary">
              Mehr
            </Button>
            <Button
              title="Video"
              variant="link"
              size="link"
              iconRight={<ChevronRight className="text-scheme-text" />}
            >
              Video
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
