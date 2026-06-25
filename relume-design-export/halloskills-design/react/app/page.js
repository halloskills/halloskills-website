"use client"

import React from "react";
import { Header145 } from "@/components/startseite/header-145";
import { Layout395 } from "@/components/startseite/layout-395";
import { Layout29 } from "@/components/startseite/layout-29";
import { Layout485 } from "@/components/startseite/layout-485";
import { Testimonial14 } from "@/components/startseite/testimonial-14";
import { Blog40 } from "@/components/startseite/blog-40";
import { Cta1 } from "@/components/startseite/cta-01";
import { Faq4 } from "@/components/startseite/faq-04";
import { Logo3 } from "@/components/startseite/logo-03";


export default function Page() {
  return (
    <div>
      <Header145 />
      <Layout395 />
      <Layout29 />
      <Layout485 />
      <Testimonial14 />
      <Blog40 />
      <Cta1 />
      <Faq4 />
      <Logo3 />
    </div>
  );
}
