import FadeUp from "@/components/ui/FadeUp";
import Link from "next/link";

const posts = [
  {
    slug: "bildungsgutschein-2025-wer-hat-anspruch",
    kategorie: "Bildungsgutschein",
    title: "Bildungsgutschein 2025: Wer hat Anspruch und wie bekomme ich ihn?",
    excerpt: "Alles was du über den Bildungsgutschein wissen musst – von Voraussetzungen bis zur Antragstellung. Der komplette Guide.",
    datum: "15. Jan 2025",
    lesezeit: "5 Min.",
  },
  {
    slug: "projektmanagement-zertifikate-vergleich",
    kategorie: "Karriere",
    title: "Projektmanagement-Zertifikate: Welches lohnt sich wirklich?",
    excerpt: "PMP, Scrum, PRINCE2 – wir erklären die Unterschiede und welches Zertifikat Arbeitgeber heute tatsächlich verlangen.",
    datum: "08. Jan 2025",
    lesezeit: "7 Min.",
  },
  {
    slug: "ki-tools-2025-fuer-den-job",
    kategorie: "KI & Digitalisierung",
    title: "KI im Job: 5 Tools, die du 2025 kennen solltest",
    excerpt: "Nicht reden über KI, sondern sie nutzen. Diese Tools machen dich im Berufsalltag sofort produktiver.",
    datum: "03. Jan 2025",
    lesezeit: "4 Min.",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-3"
                style={{ fontFamily: "Georgia, serif", color: "#111827" }}
              >
                Wissen für deinen Karriereschritt
              </h2>
              <p className="text-gray-600">
                Tipps zu Weiterbildung, Bildungsgutschein und dem digitalen Arbeitsmarkt.
              </p>
            </div>
            <Link
              href="/blog"
              className="mt-4 sm:mt-0 text-sm font-semibold hover:underline flex-shrink-0"
              style={{ color: "#004B76" }}
            >
              Alle Beiträge lesen →
            </Link>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <FadeUp key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <article className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow h-full">
                  <div className="h-44 bg-gradient-to-br from-[#F5F7F9] to-[#99CDD1]/20" />
                  <div className="p-6">
                    <span
                      className="text-xs font-semibold uppercase tracking-wider mb-3 block"
                      style={{ color: "#004B76" }}
                    >
                      {post.kategorie}
                    </span>
                    <h3
                      className="text-lg font-bold mb-2 group-hover:text-[#004B76] transition-colors"
                      style={{ fontFamily: "Georgia, serif", color: "#111827" }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span>{post.datum}</span>
                      <span>·</span>
                      <span>{post.lesezeit} Lesezeit</span>
                    </div>
                  </div>
                </article>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
