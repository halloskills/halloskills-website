import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs & Karriere | HalloSkills",
  description:
    "Werde Teil von HalloSkills. Wir suchen Menschen, die Arbeitssuchende auf ihrem Weg in neue Karrieren begleiten wollen.",
  openGraph: {
    title: "Jobs & Karriere | HalloSkills",
    description:
      "Arbeite bei HalloSkills und mach einen Unterschied im Leben von Arbeitssuchenden.",
    images: [{ url: "/images/bilder/hero.png", width: 1200, height: 630 }],
  },
};

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
