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
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-h2 font-bold md:mb-6">Fragen</h2>
          <p className="text-medium">
            Alles, was du über diesen Kurs wissen musst, findest du hier
            beantwortet
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
                  Welche Voraussetzungen gibt es?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Du brauchst einen gültigen Bildungsgutschein von der Agentur
                  für Arbeit oder dem Jobcenter. Grundlegende Deutschkenntnisse
                  und ein stabiler Internetzugang sind erforderlich. Technische
                  Vorkenntnisse sind nicht notwendig.
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
                  Wie lange dauert der Kurs?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Der Kurs läuft über mehrere Wochen mit flexiblen Lernzeiten.
                  Du bestimmst dein eigenes Tempo und kannst jederzeit beginnen.
                  Die durchschnittliche Bearbeitungsdauer liegt bei vier bis
                  sechs Wochen.
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
                  Welche technischen Anforderungen?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Ein Computer oder Tablet mit Internetverbindung ist
                  ausreichend. Keine speziellen Programme müssen installiert
                  werden. Alle Inhalte sind über den Browser zugänglich.
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
                  Erhalte ich ein Zertifikat?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Ja, nach erfolgreichem Abschluss erhältst du ein
                  AZAV-zertifiziertes Abschlusszeugnis. Dieses ist bei
                  Arbeitgebern anerkannt und wertet deinen Lebenslauf auf. Das
                  Zertifikat wird dir digital und auf Wunsch auch in Papierform
                  zugesandt.
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
                  Kann ich den Kurs unterbrechen?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Ja, Pausen sind möglich und werden mit deinem Berater
                  abgestimmt. Du behältst Zugang zu allen Materialien während
                  der gesamten Kursdauer. Eine Unterbrechung beeinträchtigt
                  nicht deine Chancen auf Jobvermittlung.
                </AccordionContent>
              </AccordionItem>
            </Card>
          </div>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-h4 font-bold md:mb-4">Noch mehr Fragen?</h4>
          <p className="text-medium">
            Kontaktiere unser Team für persönliche Beratung
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Beratung buchen" variant="secondary">
              Beratung buchen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
