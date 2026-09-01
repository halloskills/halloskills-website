import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, calcReadingTime, findePost } from "@/lib/blog-data";
import { NavV2 } from "@/components/sections/startseite-v2/nav-v2";
import { FooterV2 } from "@/components/sections/startseite-v2/footer-v2";
import { CtaV2 } from "@/components/sections/startseite-v2/cta-v2";

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = findePost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | HalloSkills Ratgeber`,
    description: post.excerpt,
    openGraph: { images: [post.image] },
  };
}

export default async function BlogPostSeite({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = findePost(slug);
  if (!post) notFound();

  const readingTime = calcReadingTime(post.content);
  const related = POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category,
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
    <div className="hs-v2 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavV2 />

      <section className="px-6 pb-8 pt-10 md:px-10 lg:pt-14">
        <div className="mx-auto max-w-[760px]">
          <nav aria-label="Breadcrumb" className="mb-8 text-[0.8rem] text-hs-muted">
            <Link href="/" className="hover:text-hs-navy">
              Start
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-hs-navy">
              Ratgeber
            </Link>
            <span className="mx-2">/</span>
            <span className="text-hs-navy">{post.category}</span>
          </nav>

          <span className="inline-flex rounded-full bg-hs-lightblue px-3 py-1 text-[0.7rem] font-[600] text-hs-blue">
            {post.category}
          </span>

          <h1 className="mt-5 text-[clamp(1.9rem,4.2vw,2.75rem)] leading-[1.15] text-balance">
            {post.title}
          </h1>

          <p className="mt-5 text-[0.85rem] text-hs-muted">
            {new Date(post.date).toLocaleDateString("de-DE", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}{" "}
            · {readingTime} Lesezeit
          </p>
        </div>
      </section>

      <section className="px-6 pb-6 md:px-10">
        <div className="mx-auto max-w-[900px] overflow-hidden rounded-hs-image shadow-hs-soft">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={630}
            sizes="(max-width: 900px) 90vw, 900px"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </section>

      <section className="px-6 py-10 md:px-10">
        <div
          className="hs-article mx-auto max-w-[760px]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>

      {related.length > 0 && (
        <section className="px-6 py-16 md:px-10">
          <div className="mx-auto max-w-[900px]">
            <h2 className="text-[1.3rem] font-[600] text-hs-navy">Das könnte dich auch interessieren</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group overflow-hidden rounded-hs-card border border-hs-line bg-white shadow-hs-soft transition-shadow duration-300 hover:shadow-hs-float"
                >
                  <Image
                    src={r.image}
                    alt={r.title}
                    width={400}
                    height={250}
                    sizes="300px"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="p-4">
                    <h3 className="text-[0.9375rem] font-[600] leading-snug text-balance">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaV2 />
      <FooterV2 />
    </div>
  );
}
