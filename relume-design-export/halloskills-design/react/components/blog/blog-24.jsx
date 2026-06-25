"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { ChevronRight } from "relume-icons";

const useRelume = ({ defaultValue }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const isActive = (tabValue) => {
    return activeTab === tabValue ? 1 : 0;
  };

  return {
    activeTab,
    setActiveTab,
    isActive,
  };
};

export function Blog24() {
  const useActive = useRelume({ defaultValue: "view-all" });
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Artikel</p>
            <h1 className="mb-5 text-h1 font-bold md:mb-6">
              Wissen aus der Praxis
            </h1>
            <p className="text-medium">Lerne von Experten, die es wissen</p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <Card className="mb-12 grid grid-cols-1 items-center md:mb-18 md:mb-20 md:grid-cols-2">
            <a href="#" className="size-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[8/6] size-full object-cover"
              />
            </a>
            <div className="flex h-full flex-col items-start justify-between px-5 py-6 md:p-8 lg:p-12">
              <div className="flex h-full flex-col items-start justify-start">
                <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                  <Badge className="mr-4">Projektmanagement</Badge>
                  <p className="inline text-small font-semibold">
                    8 Minuten Lesezeit
                  </p>
                </div>
                <a className="mb-4 block" href="#">
                  <h3 className="text-h4 font-bold">
                    Agile Methoden im echten Projekt
                  </h3>
                </a>
                <p>Wie du Scrum erfolgreich in deinem Team umsetzt</p>
              </div>
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
          </Card>
          <Tabs
            defaultValue="view-all"
            value={useActive.activeTab}
            onValueChange={useActive.setActiveTab}
            className="flex flex-col justify-start"
          >
            <TabsList className="mb-12 ml-[-5vw] scrollbar-none flex w-screen items-center overflow-auto pl-[5vw] md:mb-16 md:ml-0 md:w-full md:overflow-hidden md:pl-0">
              <TabsTrigger
                value="view-all"
                className="px-4 py-2 data-[state=active]:border data-[state=active]:border-scheme-border data-[state=inactive]:border-transparent"
              >
                Alle anzeigen
              </TabsTrigger>
              <TabsTrigger
                value="category-one"
                className="px-4 py-2 data-[state=active]:border data-[state=active]:border-scheme-border data-[state=inactive]:border-transparent"
              >
                Marketing
              </TabsTrigger>
              <TabsTrigger
                value="category-two"
                className="px-4 py-2 data-[state=active]:border data-[state=active]:border-scheme-border data-[state=inactive]:border-transparent"
              >
                Digitalisierung
              </TabsTrigger>
              <TabsTrigger
                value="category-three"
                className="px-4 py-2 data-[state=active]:border data-[state=active]:border-scheme-border data-[state=inactive]:border-transparent"
              >
                Karriere
              </TabsTrigger>
              <TabsTrigger
                value="category-four"
                className="px-4 py-2 data-[state=active]:border data-[state=active]:border-scheme-border data-[state=inactive]:border-transparent"
              >
                KI-Tools
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="view-all"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2">
                <Card className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Marketing</Badge>
                      <p className="inline text-small font-semibold">
                        6 Minuten Lesezeit
                      </p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h2 className="text-h5 font-bold">
                        SEO-Grundlagen für Anfänger
                      </h2>
                    </a>
                    <p>Deine Website findet niemand? Wir zeigen dir den Weg</p>
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
                </Card>
                <Card className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Digitalisierung</Badge>
                      <p className="inline text-small font-semibold">
                        7 Minuten Lesezeit
                      </p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h2 className="text-h5 font-bold">
                        KI verändert die Arbeitswelt
                      </h2>
                    </a>
                    <p>Was du über künstliche Intelligenz wissen musst</p>
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
                </Card>
                <Card className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Karriere</Badge>
                      <p className="inline text-small font-semibold">
                        5 Minuten Lesezeit
                      </p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h2 className="text-h5 font-bold">
                        Bewerbung schreiben, die wirkt
                      </h2>
                    </a>
                    <p>Tipps für eine Bewerbung, die Aufmerksamkeit erregt</p>
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
                </Card>
                <Card className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">KI-Tools</Badge>
                      <p className="inline text-small font-semibold">
                        9 Minuten Lesezeit
                      </p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h2 className="text-h5 font-bold">
                        ChatGPT für deine tägliche Arbeit
                      </h2>
                    </a>
                    <p>Praktische Anwendungen, die dir Zeit sparen</p>
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
                </Card>
              </div>
            </TabsContent>
            <TabsContent
              value="category-one"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2">
                <Card className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Marketing</Badge>
                      <p className="inline text-small font-semibold">
                        6 Minuten Lesezeit
                      </p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h2 className="text-h5 font-bold">
                        SEO-Grundlagen für Anfänger
                      </h2>
                    </a>
                    <p>Deine Website findet niemand? Wir zeigen dir den Weg</p>
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
                </Card>
                <Card className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Digitalisierung</Badge>
                      <p className="inline text-small font-semibold">
                        7 Minuten Lesezeit
                      </p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h2 className="text-h5 font-bold">
                        KI verändert die Arbeitswelt
                      </h2>
                    </a>
                    <p>Was du über künstliche Intelligenz wissen musst</p>
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
                </Card>
                <Card className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Karriere</Badge>
                      <p className="inline text-small font-semibold">
                        5 Minuten Lesezeit
                      </p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h2 className="text-h5 font-bold">
                        Bewerbung schreiben, die wirkt
                      </h2>
                    </a>
                    <p>Tipps für eine Bewerbung, die Aufmerksamkeit erregt</p>
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
                </Card>
                <Card className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">KI-Tools</Badge>
                      <p className="inline text-small font-semibold">
                        9 Minuten Lesezeit
                      </p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h2 className="text-h5 font-bold">
                        ChatGPT für deine tägliche Arbeit
                      </h2>
                    </a>
                    <p>Praktische Anwendungen, die dir Zeit sparen</p>
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
                </Card>
              </div>
            </TabsContent>
            <TabsContent
              value="category-two"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2">
                <Card className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Marketing</Badge>
                      <p className="inline text-small font-semibold">
                        6 Minuten Lesezeit
                      </p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h2 className="text-h5 font-bold">
                        SEO-Grundlagen für Anfänger
                      </h2>
                    </a>
                    <p>Deine Website findet niemand? Wir zeigen dir den Weg</p>
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
                </Card>
                <Card className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Digitalisierung</Badge>
                      <p className="inline text-small font-semibold">
                        7 Minuten Lesezeit
                      </p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h2 className="text-h5 font-bold">
                        KI verändert die Arbeitswelt
                      </h2>
                    </a>
                    <p>Was du über künstliche Intelligenz wissen musst</p>
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
                </Card>
                <Card className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Karriere</Badge>
                      <p className="inline text-small font-semibold">
                        5 Minuten Lesezeit
                      </p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h2 className="text-h5 font-bold">
                        Bewerbung schreiben, die wirkt
                      </h2>
                    </a>
                    <p>Tipps für eine Bewerbung, die Aufmerksamkeit erregt</p>
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
                </Card>
                <Card className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">KI-Tools</Badge>
                      <p className="inline text-small font-semibold">
                        9 Minuten Lesezeit
                      </p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h2 className="text-h5 font-bold">
                        ChatGPT für deine tägliche Arbeit
                      </h2>
                    </a>
                    <p>Praktische Anwendungen, die dir Zeit sparen</p>
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
                </Card>
              </div>
            </TabsContent>
            <TabsContent
              value="category-three"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2">
                <Card className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Marketing</Badge>
                      <p className="inline text-small font-semibold">
                        6 Minuten Lesezeit
                      </p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h2 className="text-h5 font-bold">
                        SEO-Grundlagen für Anfänger
                      </h2>
                    </a>
                    <p>Deine Website findet niemand? Wir zeigen dir den Weg</p>
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
                </Card>
                <Card className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Digitalisierung</Badge>
                      <p className="inline text-small font-semibold">
                        7 Minuten Lesezeit
                      </p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h2 className="text-h5 font-bold">
                        KI verändert die Arbeitswelt
                      </h2>
                    </a>
                    <p>Was du über künstliche Intelligenz wissen musst</p>
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
                </Card>
                <Card className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Karriere</Badge>
                      <p className="inline text-small font-semibold">
                        5 Minuten Lesezeit
                      </p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h2 className="text-h5 font-bold">
                        Bewerbung schreiben, die wirkt
                      </h2>
                    </a>
                    <p>Tipps für eine Bewerbung, die Aufmerksamkeit erregt</p>
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
                </Card>
                <Card className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">KI-Tools</Badge>
                      <p className="inline text-small font-semibold">
                        9 Minuten Lesezeit
                      </p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h2 className="text-h5 font-bold">
                        ChatGPT für deine tägliche Arbeit
                      </h2>
                    </a>
                    <p>Praktische Anwendungen, die dir Zeit sparen</p>
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
                </Card>
              </div>
            </TabsContent>
            <TabsContent
              value="category-four"
              className="data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-2">
                <Card className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Marketing</Badge>
                      <p className="inline text-small font-semibold">
                        6 Minuten Lesezeit
                      </p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h2 className="text-h5 font-bold">
                        SEO-Grundlagen für Anfänger
                      </h2>
                    </a>
                    <p>Deine Website findet niemand? Wir zeigen dir den Weg</p>
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
                </Card>
                <Card className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Digitalisierung</Badge>
                      <p className="inline text-small font-semibold">
                        7 Minuten Lesezeit
                      </p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h2 className="text-h5 font-bold">
                        KI verändert die Arbeitswelt
                      </h2>
                    </a>
                    <p>Was du über künstliche Intelligenz wissen musst</p>
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
                </Card>
                <Card className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">Karriere</Badge>
                      <p className="inline text-small font-semibold">
                        5 Minuten Lesezeit
                      </p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h2 className="text-h5 font-bold">
                        Bewerbung schreiben, die wirkt
                      </h2>
                    </a>
                    <p>Tipps für eine Bewerbung, die Aufmerksamkeit erregt</p>
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
                </Card>
                <Card className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="mb-3 flex w-full items-center justify-start md:mb-4">
                      <Badge className="mr-4">KI-Tools</Badge>
                      <p className="inline text-small font-semibold">
                        9 Minuten Lesezeit
                      </p>
                    </div>
                    <a className="mb-2 block" href="#">
                      <h2 className="text-h5 font-bold">
                        ChatGPT für deine tägliche Arbeit
                      </h2>
                    </a>
                    <p>Praktische Anwendungen, die dir Zeit sparen</p>
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
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
