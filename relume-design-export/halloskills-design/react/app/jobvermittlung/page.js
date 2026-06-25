"use client"

import React from "react";
import { Header64 } from "@/components/jobvermittlung/header-64";
import { Layout19 } from "@/components/jobvermittlung/layout-19";
import { Layout149 } from "@/components/jobvermittlung/layout-149";
import { Layout213 } from "@/components/jobvermittlung/layout-213";
import { Testimonial14 } from "@/components/jobvermittlung/testimonial-14";
import { Faq4 } from "@/components/jobvermittlung/faq-04";
import { Cta1 } from "@/components/jobvermittlung/cta-01";


export default function Page() {
  return (
    <div>
      <Header64 />
      <Layout19 />
      <Layout149 />
      <Layout213 />
      <Testimonial14 />
      <Faq4 />
      <Cta1 />
    </div>
  );
}
