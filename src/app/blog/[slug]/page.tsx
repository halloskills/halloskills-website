import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, calcReadingTime } from "@/lib/blog-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | HalloSkills Blog`,
    description: post.excerpt,
    openGraph: { images: [post.image] },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const readingTime = calcReadingTime(post.content);

  const related = POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  ).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: { "@type": "Organization", name: "HalloSkills" },
    publisher: { "@type": "Organization", name: "HalloSkills", url: "https://halloskills.de" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="py-14" style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-[760px] px-8">
          <nav className="mb-8 flex items-center gap-2 text-[0.78rem]" style={{ color: "#9ca3af" }}>
            <Link href="/" className="transition-colors hover:text-[#111827]">Startseite</Link>
            <span>/</span>
            <Link href="/blog" className="transition-colors hover:text-[#111827]">Blog</Link>
            <span>/</span>
            <span style={{ color: "#111827" }}>{post.category}</span>
          </nav>

          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span
              className="rounded-full px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.1em]"
              style={{ background: "#004B76", color: "#fff" }}
            >
              {post.category}
            </span>
            <span style={{ fontSize: "0.8rem", color: "#9ca3af" }}>{readingTime} Lesezeit</span>
            <span style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
              {new Date(post.date).toLocaleDateString("de-DE", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <h1
            className="mb-5"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 400,
              color: "#0f2744",
              lineHeight: 1.2,
            }}
          >
            {post.title}
          </h1>
          <p className="leading-[1.7]" style={{ fontSize: "1.05rem", color: "#475467" }}>
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Hero image */}
      <section style={{ background: "#f5f7f9" }}>
        <div className="mx-auto max-w-[900px] px-8 py-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-2xl object-cover"
            style={{ aspectRatio: "16/7", maxHeight: 460 }}
          />
        </div>
      </section>

      {/* Article body */}
      <section className="py-14" style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-[760px] px-8">
          <div
            className="prose-article"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "#004B76" }}>
        <div className="mx-auto max-w-[700px] px-8 text-center">
          <span
            className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
            style={{ color: "#D4AF37" }}
          >
            Kostenlose Beratung
          </span>
          <h2
            className="mb-5"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 400,
              color: "#ffffff",
            }}
          >
            Bereit für deinen Karriereschritt?
          </h2>
          <p className="mb-8 leading-[1.7]" style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem" }}>
            Wir beraten dich kostenlos und unverbindlich – und zeigen dir, ob du den
            Bildungsgutschein für deine Weiterbildung nutzen kannst.
          </p>
          <Link
            href="/beratung-buchen"
            className="inline-block border-[1.5px] border-white px-8 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-[#111827]"
          >
            Jetzt kostenlos beraten lassen
          </Link>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-20" style={{ background: "#f5f7f9" }}>
          <div className="mx-auto max-w-[1200px] px-6 md:px-12">
            <span
              className="mb-5 block text-[0.75rem] font-bold uppercase tracking-[0.12em]"
              style={{ color: "#D4AF37" }}
            >
              Weiterlesen
            </span>
            <h2
              className="mb-10"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "1.8rem",
                fontWeight: 400,
                color: "#0f2744",
              }}
            >
              Weitere Artikel
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((p) => (
                <article
                  key={p.slug}
                  className="group overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <Link href={`/blog/${p.slug}`}>
                    <img
                      src={p.image}
                      alt={p.title}
                      className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </Link>
                  <div className="p-6">
                    <p
                      className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.1em]"
                      style={{ color: "#004B76" }}
                    >
                      {p.category}
                    </p>
                    <Link href={`/blog/${p.slug}`}>
                      <h3
                        className="mb-4"
                        style={{
                          fontFamily: "Georgia, 'Times New Roman', serif",
                          fontSize: "1rem",
                          fontWeight: 400,
                          color: "#0f2744",
                          lineHeight: 1.4,
                        }}
                      >
                        {p.title}
                      </h3>
                    </Link>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="border-b pb-0.5 text-[0.75rem] font-bold uppercase tracking-[0.1em]"
                      style={{ borderColor: "#111827", color: "#111827", width: "fit-content", display: "inline-block" }}
                    >
                      Lesen →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
