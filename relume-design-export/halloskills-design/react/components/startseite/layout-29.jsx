"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout29() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/hls.svg"
                  />
                </div>
                <h1 className="mb-3 text-h5 font-bold md:mb-4">
                  Flexibles lernen
                </h1>
                <p>Studieren Sie in ihrem eigenen tempo, wann immer es passt</p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/help_center.svg"
                  />
                </div>
                <h1 className="mb-3 text-h5 font-bold md:mb-4">
                  Persönliche unterstützung
                </h1>
                <p>Mentoren begleiten Sie durch jeden schritt des lernens</p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/start.svg"
                  />
                </div>
                <h1 className="mb-3 text-h5 font-bold md:mb-4">
                  Schnelle starts
                </h1>
                <p>Beginnen Sie kurse innerhalb weniger tage nach anmeldung</p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    className="size-12 text-scheme-text"
                    src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/av1.svg"
                  />
                </div>
                <h1 className="mb-3 text-h5 font-bold md:mb-4">
                  Anerkannte abschlüsse
                </h1>
                <p>AZAV-zertifizierte kurse, die arbeitgeber respektieren</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Mehr erfahren" variant="secondary">
                Mehr erfahren
              </Button>
              <Button
                title="Starten"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Starten
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="size-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
