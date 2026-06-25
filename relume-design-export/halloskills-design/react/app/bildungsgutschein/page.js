"use client"

import React from "react";
import { Header64 } from "@/components/bildungsgutschein/header-64";
import { Layout140 } from "@/components/bildungsgutschein/layout-140";
import { Layout396 } from "@/components/bildungsgutschein/layout-396";
import { Layout239 } from "@/components/bildungsgutschein/layout-239";
import { Faq4 } from "@/components/bildungsgutschein/faq-04";
import { Cta1 } from "@/components/bildungsgutschein/cta-01";
import { Logo6 } from "@/components/bildungsgutschein/logo-06";


export default function Page() {
  return (
    <div>
      <Header64 />
      <Layout140 />
      <Layout396 />
      <Layout239 />
      <Faq4 />
      <Cta1 />
      <Logo6 />
    </div>
  );
}
