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
            Hier findest du Antworten auf die wichtigsten Fragen zum
            Bildungsgutschein.
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
                  Wer hat Anspruch?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Arbeitssuchende und Arbeitslose können einen Bildungsgutschein
                  erhalten. Die Agentur für Arbeit oder das Jobcenter prüft
                  deine Situation und entscheidet über die Bewilligung.
                  Voraussetzung ist meist eine Beratung bei der zuständigen
                  Stelle.
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
                  Welche Unterlagen werden benötigt?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Du brauchst einen gültigen Personalausweis oder Reisepass.
                  Außerdem solltest du deine aktuelle Arbeitssituation
                  nachweisen können, etwa durch eine Arbeitslosmeldung oder
                  einen Leistungsbescheid. Weitere Dokumente können je nach Fall
                  erforderlich sein.
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
                  Wie lange dauert die Bewilligung?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Die Bearbeitungsdauer beträgt in der Regel zwei bis vier
                  Wochen. Nach deiner Beratung erhältst du den Gutschein
                  schriftlich. Du kannst ihn dann bei HalloSkills einlösen und
                  sofort mit deinem Kurs beginnen.
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
                  Sind alle Kurse kostenlos?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Ja, alle HalloSkills-Kurse sind über den Bildungsgutschein
                  vollständig kostenlos. Unsere Plattform ist AZAV-zertifiziert
                  und von der Agentur für Arbeit anerkannt. Du zahlst nichts,
                  weder für die Anmeldung noch für die Teilnahme.
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
                  Kann ich mehrere Kurse machen?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Das hängt von deinem Gutschein ab. Manche Gutscheine decken
                  mehrere Kurse ab, andere nur einen. Sprich mit deiner
                  Beraterin oder deinem Berater bei der Agentur für Arbeit über
                  deine Möglichkeiten.
                </AccordionContent>
              </AccordionItem>
            </Card>
          </div>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-h4 font-bold md:mb-4">Noch Fragen offen?</h4>
          <p className="text-medium">
            Buche eine kostenlose Beratung mit unserem Team.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Beratung" variant="secondary">
              Beratung
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
