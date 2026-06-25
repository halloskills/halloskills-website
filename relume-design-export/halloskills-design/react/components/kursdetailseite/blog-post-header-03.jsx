"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import { FacebookLogo, Link, LinkedinLogo, XLogo } from "relume-icons";

export function BlogPostHeader3() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="grid gap-x-20 gap-y-12 md:grid-cols-[.75fr_1fr]">
          <div className="mx-auto flex size-full max-w-lg flex-col items-start justify-start">
            <Breadcrumb className="mb-6 flex w-full items-center md:mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Kurse</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Bildungsgutschein</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="mb-8 text-h2 font-bold md:mb-10 lg:mb-12">
              Projektmanagement für Anfänger und Profis
            </h1>
            <div className="flex size-full flex-col items-start justify-start">
              <div className="mb-6 flex items-center md:mb-8">
                <div>
                  <h6 className="font-semibold">
                    <span className="font-normal">Von</span> HalloSkills Team
                  </h6>
                  <div className="mt-1 flex">
                    <p className="text-small">15 Jan 2024</p>
                    <span className="mx-2">•</span>
                    <p className="text-small">6 Wochen Kurs</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-regular font-semibold">Teilen</p>
                <div className="mt-3 grid grid-flow-col grid-cols-[max-content] items-start gap-2 md:mt-4">
                  <a
                    href="#"
                    className="rounded-[1.25rem] bg-scheme-foreground p-1"
                  >
                    <Link className="size-6 text-scheme-text" />
                  </a>
                  <a
                    href="#"
                    className="rounded-[1.25rem] bg-scheme-foreground p-1"
                  >
                    <LinkedinLogo className="size-6 text-scheme-text" />
                  </a>
                  <a
                    href="#"
                    className="rounded-[1.25rem] bg-scheme-foreground p-1"
                  >
                    <XLogo className="size-6 p-0.5 text-scheme-text" />
                  </a>
                  <a
                    href="#"
                    className="rounded-[1.25rem] bg-scheme-foreground p-1"
                  >
                    <FacebookLogo className="size-6 text-scheme-text" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full overflow-hidden">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="aspect-[3/2] size-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
