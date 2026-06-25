"use client"

import React from "react";
import { BlogPostHeader3 } from "@/components/kursdetailseite/blog-post-header-03";
import { Header64 } from "@/components/kursdetailseite/header-64";
import { Layout13 } from "@/components/kursdetailseite/layout-13";
import { Layout395 } from "@/components/kursdetailseite/layout-395";
import { Layout513 } from "@/components/kursdetailseite/layout-513";
import { Layout423 } from "@/components/kursdetailseite/layout-423";
import { Testimonial14 } from "@/components/kursdetailseite/testimonial-14";
import { Faq4 } from "@/components/kursdetailseite/faq-04";
import { Cta1 } from "@/components/kursdetailseite/cta-01";


export default function Page() {
  return (
    <div>
      <BlogPostHeader3 />
      <Header64 />
      <Layout13 />
      <Layout395 />
      <Layout513 />
      <Layout423 />
      <Testimonial14 />
      <Faq4 />
      <Cta1 />
    </div>
  );
}
