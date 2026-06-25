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
            Alles, was du über unsere Jobvermittlung wissen musst
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
                  Wie funktioniert die Vermittlung?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Nach deinem Kurs arbeiten wir aktiv daran, dich mit passenden
                  Arbeitgebern zu verbinden. Unser Netzwerk umfasst hunderte
                  Unternehmen, die gezielt nach qualifizierten Absolventen
                  suchen. Der Prozess ist persönlich und orientiert sich an
                  deinen Zielen.
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
                  Entstehen mir Kosten dafür?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Nein, die Jobvermittlung ist vollständig kostenlos. Du zahlst
                  nichts für unsere Unterstützung, weder während noch nach dem
                  Vermittlungsprozess. Das ist Teil unseres Angebots für alle
                  Kursteilnehmer.
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
                  Wie lange dauert eine Vermittlung?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Das hängt von deinem Profil und deinen Anforderungen ab.
                  Manche Absolvent:innen finden innerhalb weniger Wochen einen
                  Job, andere benötigen mehr Zeit. Wir bleiben an deiner Seite,
                  bis es passt.
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
                  Kann ich selbst Stellen ablehnen?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Ja, selbstverständlich. Wir vermitteln nur in Positionen, die
                  zu dir passen. Deine Zufriedenheit und die richtige Passung
                  sind uns wichtig, nicht die Anzahl der Vermittlungen.
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
                  Was ist mit Unternehmen außerhalb Deutschlands?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Unser Fokus liegt auf dem deutschen Arbeitsmarkt. Wir haben
                  starke Kontakte zu Unternehmen in ganz Deutschland und können
                  auch internationale Positionen vermitteln, wenn sie relevant
                  sind.
                </AccordionContent>
              </AccordionItem>
            </Card>
          </div>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-h4 font-bold md:mb-4">Noch Fragen offen?</h4>
          <p className="text-medium">
            Buche ein kostenloses Beratungsgespräch mit uns
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Kontakt" variant="secondary">
              Kontakt
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
