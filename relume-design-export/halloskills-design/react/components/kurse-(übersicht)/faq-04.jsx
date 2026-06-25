"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { Add } from "relume-icons";

export function Faq4() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-h2 font-bold md:mb-6">Fragen</h2>
          <p className="text-medium">
            Finden Sie Antworten zu Kurswahl, Voraussetzungen und dem Ablauf
          </p>
        </div>
        <Accordion type="multiple">
          <div className="grid items-start justify-items-stretch gap-4">
            <Card>
              <AccordionItem
                value="item-0"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  Welche Voraussetzungen brauche ich?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Es gibt keine speziellen Voraussetzungen. Unsere Kurse richten
                  sich an Anfänger und Fortgeschrittene. Sie benötigen nur einen
                  Computer und eine Internetverbindung.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-1"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  Wie lange dauert ein Kurs?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Die Kursdauer variiert zwischen 6 und 10 Wochen. Sie können in
                  Ihrem eigenen Tempo lernen und haben lebenslangen Zugriff auf
                  die Materialien.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-2"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  Wann kann ich starten?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Sie können sofort nach der Anmeldung beginnen. Es gibt keine
                  festen Starttermine, Sie entscheiden selbst, wann es für Sie
                  passt.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-3"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  Ist das Zertifikat anerkannt?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Ja, alle unsere Kurse sind AZAV-zertifiziert und bundesweit
                  anerkannt. Das Zertifikat wird von Arbeitgebern und Behörden
                  akzeptiert.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-4"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                >
                  Wie funktioniert der Bildungsgutschein?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Der Bildungsgutschein AVGS wird von der Agentur für Arbeit
                  ausgestellt. Wir kümmern uns um die Abrechnung, Sie zahlen
                  nichts.
                </AccordionContent>
              </AccordionItem>
            </Card>
          </div>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-h4 font-bold md:mb-4">Noch Fragen offen?</h4>
          <p className="text-medium">
            Unsere Berater helfen Ihnen gerne weiter
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Kontakt aufnehmen" variant="secondary">
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
