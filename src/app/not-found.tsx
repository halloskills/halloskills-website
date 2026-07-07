import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center"
      style={{ background: "#f5f7f9" }}
    >
      <span
        className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
        style={{ color: "#D4AF37" }}
      >
        Fehler 404
      </span>
      <h1
        className="mb-6"
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 400,
          color: "#0f2744",
          lineHeight: 1.2,
        }}
      >
        Diese Seite existiert nicht.
      </h1>
      <p
        className="mb-10"
        style={{ color: "#475467", fontSize: "1rem", lineHeight: 1.7, maxWidth: 480 }}
      >
        Die gesuchte Seite wurde möglicherweise verschoben oder gelöscht.
        Geh zurück zur Startseite und finde, was du suchst.
      </p>
      <Link
        href="/"
        className="inline-block border-[1.5px] border-[#004B76] px-8 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-[#004B76] hover:text-white"
        style={{ color: "#004B76" }}
      >
        Zurück zur Startseite
      </Link>
    </section>
  );
}
