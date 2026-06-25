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
            Finden Sie antworten auf die wichtigsten fragen
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
                  Wer kann einen bildungsgutschein erhalten?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Arbeitssuchende und arbeitslose personen können einen
                  gutschein von der agentur für arbeit erhalten. Die agentur
                  prüft Ihre voraussetzungen und stellt den gutschein aus, wenn
                  die weiterbildung sinnvoll ist.
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
                  Wie lange dauern die kurse?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Die kursdauer variiert je nach thema. Projektmanagement kurse
                  dauern etwa vier wochen, während marketing kurse sechs wochen
                  in anspruch nehmen. Sie bestimmen das tempo selbst.
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
                  Kann ich die kurse unterbrechen?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Ja, Sie haben lebenslangen zugang zu allen kursmaterialien.
                  Sie können jederzeit pausieren und später weitermachen, ohne
                  zusätzliche kosten.
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
                  Erhalte ich ein zertifikat?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Alle kurse enden mit einem AZAV-zertifikat, das von
                  arbeitgebern anerkannt wird. Das zertifikat dokumentiert Ihre
                  neuen fähigkeiten und kompetenzen.
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
                  Wie funktioniert die jobvermittlung?
                </AccordionTrigger>
                <AccordionContent className="md:pb-6">
                  Nach kursabschluss unterstützen wir Sie aktiv bei der
                  jobsuche. Unser team verbindet Sie mit passenden arbeitgebern
                  und hilft bei bewerbungen.
                </AccordionContent>
              </AccordionItem>
            </Card>
          </div>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-h4 font-bold md:mb-4">Noch fragen offen?</h4>
          <p className="text-medium">
            Kontaktieren Sie unser team für weitere informationen
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
