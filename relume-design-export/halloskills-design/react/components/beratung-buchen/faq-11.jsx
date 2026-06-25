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

export function Faq11() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <h2 className="mb-5 text-h2 font-bold md:mb-6">Fragen</h2>
            <p className="text-medium">
              Alles, was du über deine Beratung wissen musst.
            </p>
          </div>
        </div>
        <Accordion type="multiple">
          <div className="grid w-full grid-cols-1 items-start gap-x-8 gap-y-4 md:grid-cols-2">
            <Card>
              <AccordionItem
                value="item-faq11_accordion"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                >
                  Wie lange dauert das Gespräch?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Die Beratung dauert etwa 30 Minuten. Wir nehmen uns Zeit für
                  deine Fragen und finden gemeinsam den passenden Kurs für dich.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-faq11_accordion-2"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                >
                  Welche Unterlagen muss ich mitbringen?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Bring deinen Lebenslauf und deine Ausweisdaten mit. Wenn du
                  bereits einen Bildungsgutschein hast, nimm diesen auch mit –
                  ansonsten helfen wir dir dabei.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-faq11_accordion-3"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                >
                  Kann ich die Beratung online führen?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Ja, alle Beratungen finden online statt. Du erhältst den
                  Zoom-Link nach der Buchung per E-Mail.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-faq11_accordion-4"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                >
                  Was kostet die Beratung?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Die Beratung ist vollständig kostenlos. Es gibt keine
                  versteckten Gebühren oder Verpflichtungen.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-faq11_accordion-5"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                >
                  Kann ich meinen Termin verschieben?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Selbstverständlich. Schreib uns einfach eine E-Mail oder buche
                  einen neuen Termin über unser Kalender-System.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-faq11_accordion-6"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                >
                  Was passiert nach der Beratung?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Du erhältst eine persönliche Empfehlung für deinen Kurs und
                  konkrete nächste Schritte. Wir begleiten dich auch beim Antrag
                  für deinen Bildungsgutschein.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-faq11_accordion-7"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                >
                  Bin ich verpflichtet, einen Kurs zu buchen?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Nein. Die Beratung ist unverbindlich. Du entscheidest selbst,
                  ob und welcher Kurs zu dir passt.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-faq11_accordion-8"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                >
                  Wie schnell kann ich mit einem Kurs starten?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Das hängt von deinem Bildungsgutschein ab. Manche Kurse
                  starten bereits eine Woche nach der Genehmigung.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-faq11_accordion-9"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                >
                  Wer führt die Beratung durch?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Unsere erfahrenen Berater kennen alle Kurse und den Prozess
                  des Bildungsgutscheins genau. Sie unterstützen dich
                  persönlich.
                </AccordionContent>
              </AccordionItem>
            </Card>
            <Card>
              <AccordionItem
                value="item-faq11_accordion-10"
                className="border-none px-5 md:px-6"
              >
                <AccordionTrigger
                  className="text-medium md:py-5 [&[data-state=open]>svg]:rotate-45"
                  icon={
                    <Add className="size-7 shrink-0 text-scheme-text transition-transform duration-300 md:size-8" />
                  }
                >
                  Gibt es eine Altersgrenze?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Nein. HalloSkills ist für Arbeitssuchende aller Altersgruppen
                  offen. Jeder kann sich beraten lassen.
                </AccordionContent>
              </AccordionItem>
            </Card>
          </div>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-h4 font-bold md:mb-4">Noch Fragen offen?</h4>
          <p className="text-medium">Kontaktiere uns direkt per E-Mail.</p>
          <div className="mt-6 md:mt-8">
            <Button title="Schreib uns" variant="secondary">
              Schreib uns
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
