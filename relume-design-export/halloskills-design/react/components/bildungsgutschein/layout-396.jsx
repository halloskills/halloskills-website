"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout396() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Vorteile</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">
            Vollständig kostenlos finanziert
          </h1>
          <p className="text-medium">
            Die Agentur für Arbeit übernimmt alle Kursgebühren
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <Card className="flex flex-col justify-center p-6 md:p-8">
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/percent.svg"
                />
              </div>
              <h2 className="mb-3 text-h4 font-bold md:mb-4">
                100% Kostenübernahme
              </h2>
              <p>Keine versteckten Gebühren oder Zusatzkosten</p>
            </div>
            <div className="mt-5 md:mt-6">
              <Button
                title="Mehr"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Mehr
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col justify-center p-6 md:p-8">
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/tsv.svg"
                />
              </div>
              <h2 className="mb-3 text-h4 font-bold md:mb-4">
                Bundesweit gültig
              </h2>
              <p>Dein Gutschein funktioniert überall in Deutschland</p>
            </div>
            <div className="mt-5 md:mt-6">
              <Button
                title="Mehr"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Mehr
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col justify-center p-6 md:p-8">
            <div>
              <div className="mb-5 md:mb-6">
                <img
                  className="size-12 text-scheme-text"
                  src="https://cdn.jsdelivr.net/npm/@material-symbols/svg-500@latest/rounded/online_prediction.svg"
                />
              </div>
              <h2 className="mb-3 text-h4 font-bold md:mb-4">
                Für viele Kursarten einsetzbar
              </h2>
              <p>Projektmanagement, Online Marketing, KI und Digitalisierung</p>
            </div>
            <div className="mt-5 md:mt-6">
              <Button
                title="Mehr"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Mehr
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
