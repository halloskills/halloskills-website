import FadeUp from "@/components/ui/FadeUp";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#D4AF37" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-5"
            style={{ fontFamily: "Georgia, serif", color: "#111827" }}
          >
            Bereit für deinen nächsten Karriereschritt?
          </h2>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: "#111827", opacity: 0.8 }}>
            Wir hören dir zu, verstehen deine Situation und finden gemeinsam die Weiterbildung,
            die wirklich zu dir passt. Kostenlos. Unverbindlich. Persönlich.
          </p>
          <Link
            href="/beratung-buchen"
            className="inline-flex items-center px-10 py-4 rounded-md text-base font-semibold text-white transition-all hover:opacity-90 active:scale-95 shadow-lg"
            style={{ backgroundColor: "#004B76" }}
          >
            Jetzt kostenlose Beratung buchen
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
