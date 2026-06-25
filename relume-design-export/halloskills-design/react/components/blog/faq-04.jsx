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
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-h2 font-bold md:mb-6">Fragen</h2>
          <p className="text-medium">
            Hier findest du Antworten auf die wichtigsten Fragen zum Blog.
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
                  Wer schreibt hier?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Unsere Autoren sind Experten aus Projektmanagement, Online
                  Marketing und Digitalisierung. Sie teilen praktisches Wissen
                  aus ihrer täglichen Arbeit. Jeder Artikel basiert auf echter
                  Erfahrung.
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
                  Wie oft erscheinen neue Artikel?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Wir veröffentlichen regelmäßig neue Inhalte zu aktuellen
                  Themen. Die Häufigkeit hängt von den saisonalen Schwerpunkten
                  ab. Abonniere unseren Newsletter, um keine Artikel zu
                  verpassen.
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
                  Kann ich ein Thema vorschlagen?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Ja, gerne. Schreib uns eine Nachricht mit deinem
                  Themenvorschlag. Wir berücksichtigen Ideen unserer Leser bei
                  der Planung.
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
                  Gibt es eine Kommentarfunktion?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Derzeit konzentrieren wir uns auf hochwertige Inhalte.
                  Feedback kannst du uns direkt über das Kontaktformular
                  zukommen lassen. Deine Meinung ist uns wichtig.
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
                  Sind die Artikel kostenlos?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Alle Artikel auf unserem Blog sind kostenlos zugänglich. Wie
                  unsere Kurse folgen sie unserem Ansatz der kostenlosen
                  Weiterbildung. Wissen sollte für alle erreichbar sein.
                </AccordionContent>
              </AccordionItem>
            </Card>
          </div>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-h4 font-bold md:mb-4">Noch mehr Fragen?</h4>
          <p className="text-medium">
            Kontaktiere uns direkt für weitere Informationen.
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
