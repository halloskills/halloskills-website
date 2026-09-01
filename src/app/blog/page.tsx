import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { POSTS, calcReadingTime } from "@/lib/blog-data";
import { NavV2 } from "@/components/sections/startseite-v2/nav-v2";
import { Eyebrow } from "@/components/sections/startseite-v2/hs-ui";
import { FooterV2 } from "@/components/sections/startseite-v2/footer-v2";

export const metadata: Metadata = {
  title: "Ratgeber | HalloSkills",
  description:
    "Praktische Tipps zu Bildungsgutschein, Bewerbung und Weiterbildung — vom HalloSkills-Team.",
};

export default function BlogUebersicht() {
  return (
    <div className="hs-v2 bg-white">
      <NavV2 />

      <section className="px-6 pb-10 pt-14 md:px-10 lg:pt-20">
        <div className="mx-auto max-w-[760px] text-center">
          <Eyebrow>Ratgeber</Eyebrow>
          <h1 className="mt-6 text-[clamp(2.2rem,5vw,3.25rem)] leading-[1.1] text-balance">
            Wissen für deinen nächsten Schritt.
          </h1>
          <p className="mt-5 text-[1.0625rem] leading-[1.65] text-hs-body">
            Praktische Tipps zu Bildungsgutschein, Bewerbung und Weiterbildung.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1200px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-hs-card border border-hs-line bg-white shadow-hs-soft transition-shadow duration-300 hover:shadow-hs-float"
            >
              <div className="overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={640}
                  height={400}
                  sizes="(max-width: 640px) 90vw, 380px"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="inline-flex w-fit rounded-full bg-hs-lightblue px-3 py-1 text-[0.7rem] font-[600] text-hs-blue">
                  {post.category}
                </span>
                <h2 className="mt-4 text-[1.0625rem] font-[600] leading-snug text-balance">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-[0.85rem] leading-[1.6] text-hs-muted">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-[0.75rem] font-[600] text-hs-pink">
                  {calcReadingTime(post.content)} Lesezeit
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FooterV2 />
    </div>
  );
}
