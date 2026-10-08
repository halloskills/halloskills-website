import Link from "next/link";
import { NavV2 } from "@/components/sections/startseite-v2/nav-v2";
import { Eyebrow, btnPrimary } from "@/components/sections/startseite-v2/hs-ui";
import { FooterV2 } from "@/components/sections/startseite-v2/footer-v2";

export default function NotFound() {
  return (
    <div className="hs-v2 bg-white">
      <NavV2 />

      <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center md:px-10">
        <Eyebrow ton="blau">Fehler 404</Eyebrow>
        <h1 className="mt-6 text-[clamp(2rem,5vw,3.25rem)] leading-[1.15]">
          Diese Seite existiert nicht.
        </h1>
        <p className="mt-6 max-w-[480px] leading-[1.7] text-hs-body">
          Die gesuchte Seite wurde möglicherweise verschoben oder gelöscht.
          Geh zurück zur Startseite und finde, was du suchst.
        </p>
        <Link href="/" className={`${btnPrimary} mt-10`}>
          Zurück zur Startseite
        </Link>
      </section>

      <FooterV2 />
    </div>
  );
}
