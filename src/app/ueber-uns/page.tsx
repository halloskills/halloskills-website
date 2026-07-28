import type { Metadata } from "next";
import { UeberUnsHeader } from "@/components/sections/ueber-uns/uu-header";
import { UeberUnsMission } from "@/components/sections/ueber-uns/uu-mission";
import { UeberUnsTimeline } from "@/components/sections/ueber-uns/uu-timeline";
import { UeberUnsTeam } from "@/components/sections/ueber-uns/uu-team";
import { UeberUnsTestimonial } from "@/components/sections/ueber-uns/uu-testimonial";
import { UeberUnsCta } from "@/components/sections/ueber-uns/uu-cta";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
  title: "Über uns – Wer wir sind & warum wir das machen | HalloSkills",
  description:
    "HalloSkills macht Weiterbildung für Arbeitssuchende zugänglich. Praxisnah und persönlich. Lerne unser Team kennen.",
};

export default function UeberUnsPage() {
  return (
    <>
      <UeberUnsHeader />
      <UeberUnsMission />
      <UeberUnsTimeline />
      <UeberUnsTeam />
      <UeberUnsTestimonial />
      <UeberUnsCta />
    </>
  );
}
