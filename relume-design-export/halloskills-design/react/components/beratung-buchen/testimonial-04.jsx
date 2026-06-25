"use client";

import React from "react";
import { StarFull } from "relume-icons";

export function Testimonial4() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mx-auto w-full max-w-lg text-center">
          <div className="mb-6 flex items-center justify-center gap-1 md:mb-8">
            <StarFull className="size-6 text-scheme-text" />
            <StarFull className="size-6 text-scheme-text" />
            <StarFull className="size-6 text-scheme-text" />
            <StarFull className="size-6 text-scheme-text" />
            <StarFull className="size-6 text-scheme-text" />
          </div>
          <h5 className="text-h5 font-bold">
            "Die Beratung hat mir alles erklärt – vom Gutschein bis zum ersten
            Kurstag. Einfach und unkompliziert."
          </h5>
          <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 text-center md:mt-8 md:w-auto md:flex-row md:gap-5 md:text-left">
            <div className="size-14 min-h-14 min-w-14 overflow-hidden rounded-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Testimonial avatar 1"
                className="size-full object-cover"
              />
            </div>
            <div className="mb-4 md:mb-0">
              <p>Sarah Müller</p>
              <p>Teilnehmerin, Projektmanagement</p>
            </div>
            <div className="hidden w-px self-stretch bg-scheme-border md:block" />
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                alt="Webflow logo 1"
                className="max-h-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
