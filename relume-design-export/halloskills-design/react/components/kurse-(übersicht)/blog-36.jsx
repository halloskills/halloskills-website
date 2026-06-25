"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Blog36() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Kurse</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Wähle deinen Kurs
            </h2>
            <p className="text-medium">
              Alle Kurse sind AZAV-zertifiziert und mit Bildungsgutschein
              kostenlos
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <Card className="flex size-full flex-col items-center justify-start">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                <Badge className="mr-4">Projektmanagement</Badge>
                <p className="inline text-small font-semibold">
                  8 Wochen Dauer
                </p>
              </div>
              <a className="mb-2 block max-w-full" href="#">
                <h2 className="text-h5 font-bold">
                  Projektmanagement von Grund auf lernen
                </h2>
              </a>
              <p>Starten Sie sofort mit unserem bewährten Kurs für Anfänger</p>
              <Button
                title="Mehr erfahren"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              >
                Mehr erfahren
              </Button>
            </div>
          </Card>
          <Card className="flex size-full flex-col items-center justify-start">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                <Badge className="mr-4">Online Marketing</Badge>
                <p className="inline text-small font-semibold">
                  6 Wochen Dauer
                </p>
              </div>
              <a className="mb-2 block max-w-full" href="#">
                <h2 className="text-h5 font-bold">
                  Digitales Marketing meistern und Kampagnen aufbauen
                </h2>
              </a>
              <p>
                Lernen Sie praktische Strategien für erfolgreiche Online-Präsenz
              </p>
              <Button
                title="Mehr erfahren"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              >
                Mehr erfahren
              </Button>
            </div>
          </Card>
          <Card className="flex size-full flex-col items-center justify-start">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                <Badge className="mr-4">KI & Digitalisierung</Badge>
                <p className="inline text-small font-semibold">
                  10 Wochen Dauer
                </p>
              </div>
              <a className="mb-2 block max-w-full" href="#">
                <h2 className="text-h5 font-bold">
                  Künstliche Intelligenz und digitale Transformation verstehen
                </h2>
              </a>
              <p>Bleiben Sie am Puls der technologischen Entwicklung</p>
              <Button
                title="Mehr erfahren"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
              >
                Mehr erfahren
              </Button>
            </div>
          </Card>
        </div>
        <div className="flex items-center justify-center">
          <Button
            title="Alle anzeigen"
            variant="secondary"
            className="mt-12 md:mt-18 lg:mt-20"
          >
            Alle anzeigen
          </Button>
        </div>
      </div>
    </section>
  );
}
