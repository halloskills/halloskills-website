"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useEffect, useState } from "react";
import { ChevronRight } from "relume-icons";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index) => {
    return `mx-[3px] inline-block size-2 rounded-full ${
      current === index + 1 ? "bg-scheme-text" : "bg-scheme-text/20"
    }`;
  };

  return { api, setApi, current, handleDotClick, dotClassName };
};

export function Blog68() {
  const carouselState = useCarousel();
  return (
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="md:mb-18 mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
          <div className="md:mr-12 lg:mr-0">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Artikel</p>
              <h2 className="text-h2 mb-3 font-bold md:mb-4">Alle Beiträge</h2>
              <p className="text-medium">
                Aktuelle Inhalte zu Weiterbildung und Karriere
              </p>
            </div>
          </div>
          <div className="hidden md:flex">
            <Button title="Mehr laden" variant="secondary">
              Mehr laden
            </Button>
          </div>
        </div>
        <Carousel
          setApi={carouselState.setApi}
          opts={{ loop: true, align: "start" }}
        >
          <CarouselContent className="ml-0">
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/3 md:pr-8">
              <Card>
                <a
                  href="#"
                  className="flex size-full flex-col items-center justify-start"
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-[3/2] size-full object-cover"
                  />
                  <div className="px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Projektmanagement</Badge>
                      <p className="text-small inline font-semibold">
                        10 Minuten Lesezeit
                      </p>
                    </div>
                    <h2 className="text-h5 mb-2 font-bold">
                      Risikomanagement in Projekten
                    </h2>
                    <p>Wie du Probleme früh erkennst und vermeidest</p>
                    <Button
                      title="Weiterlesen"
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                      className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                    >
                      Weiterlesen
                    </Button>
                  </div>
                </a>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/3 md:pr-8">
              <Card>
                <a
                  href="#"
                  className="flex size-full flex-col items-center justify-start"
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-[3/2] size-full object-cover"
                  />
                  <div className="px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Marketing</Badge>
                      <p className="text-small inline font-semibold">
                        7 Minuten Lesezeit
                      </p>
                    </div>
                    <h2 className="text-h5 mb-2 font-bold">
                      Content Marketing Strategie
                    </h2>
                    <p>Mit wertvollen Inhalten deine Zielgruppe erreichen</p>
                    <Button
                      title="Weiterlesen"
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                      className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                    >
                      Weiterlesen
                    </Button>
                  </div>
                </a>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/3 md:pr-8">
              <Card>
                <a
                  href="#"
                  className="flex size-full flex-col items-center justify-start"
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-[3/2] size-full object-cover"
                  />
                  <div className="px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Digitalisierung</Badge>
                      <p className="text-small inline font-semibold">
                        8 Minuten Lesezeit
                      </p>
                    </div>
                    <h2 className="text-h5 mb-2 font-bold">
                      Digitale Transformation im Mittelstand
                    </h2>
                    <p>Schritt für Schritt zur modernen Arbeitswelt</p>
                    <Button
                      title="Weiterlesen"
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                      className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                    >
                      Weiterlesen
                    </Button>
                  </div>
                </a>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/3 md:pr-8">
              <Card>
                <a
                  href="#"
                  className="flex size-full flex-col items-center justify-start"
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-[3/2] size-full object-cover"
                  />
                  <div className="px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Karriere</Badge>
                      <p className="text-small inline font-semibold">
                        6 Minuten Lesezeit
                      </p>
                    </div>
                    <h2 className="text-h5 mb-2 font-bold">
                      Soft Skills trainieren und verbessern
                    </h2>
                    <p>Diese Fähigkeiten machen dich unersetzbar</p>
                    <Button
                      title="Weiterlesen"
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                      className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                    >
                      Weiterlesen
                    </Button>
                  </div>
                </a>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/3 md:pr-8">
              <Card>
                <a
                  href="#"
                  className="flex size-full flex-col items-center justify-start"
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-[3/2] size-full object-cover"
                  />
                  <div className="px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">KI-Tools</Badge>
                      <p className="text-small inline font-semibold">
                        11 Minuten Lesezeit
                      </p>
                    </div>
                    <h2 className="text-h5 mb-2 font-bold">
                      Automatisierung mit KI-Tools
                    </h2>
                    <p>Effizienzsteigerung durch intelligente Systeme</p>
                    <Button
                      title="Weiterlesen"
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                      className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                    >
                      Weiterlesen
                    </Button>
                  </div>
                </a>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/3 md:pr-8">
              <Card>
                <a
                  href="#"
                  className="flex size-full flex-col items-center justify-start"
                >
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="aspect-[3/2] size-full object-cover"
                  />
                  <div className="px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Projektmanagement</Badge>
                      <p className="text-small inline font-semibold">
                        9 Minuten Lesezeit
                      </p>
                    </div>
                    <h2 className="text-h5 mb-2 font-bold">
                      Stakeholder Management meistern
                    </h2>
                    <p>Kommunikation, die Projekte zum Erfolg führt</p>
                    <Button
                      title="Weiterlesen"
                      variant="link"
                      size="link"
                      iconRight={<ChevronRight className="text-scheme-text" />}
                      className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                    >
                      Weiterlesen
                    </Button>
                  </div>
                </a>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <div className="mt-12 flex items-center justify-between md:mt-20">
            <div className="mt-5 flex w-full items-start justify-start">
              <button
                onClick={carouselState.handleDotClick(0)}
                className={carouselState.dotClassName(0)}
              />
              <button
                onClick={carouselState.handleDotClick(1)}
                className={carouselState.dotClassName(1)}
              />
              <button
                onClick={carouselState.handleDotClick(2)}
                className={carouselState.dotClassName(2)}
              />
              <button
                onClick={carouselState.handleDotClick(3)}
                className={carouselState.dotClassName(3)}
              />
              <button
                onClick={carouselState.handleDotClick(4)}
                className={carouselState.dotClassName(4)}
              />
              <button
                onClick={carouselState.handleDotClick(5)}
                className={carouselState.dotClassName(5)}
              />
            </div>
            <div className="flex items-end justify-end gap-2 md:gap-4">
              <CarouselPrevious className="static right-0 top-0 size-12 -translate-y-0" />
              <CarouselNext className="static right-0 top-0 size-12 -translate-y-0" />
            </div>
          </div>
        </Carousel>
        <div className="mt-12 flex justify-end md:hidden">
          <Button title="Mehr laden" variant="secondary">
            Mehr laden
          </Button>
        </div>
      </div>
    </section>
  );
}
