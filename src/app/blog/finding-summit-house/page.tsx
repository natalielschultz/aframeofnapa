import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animation/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import { getBreadcrumbSchema, getArticleSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Finding Summit House — A Designer's Story | Summit House Napa",
  description:
    "The designer's story behind Summit House — how a lifelong Napa native found three 1969 A-frames at the summit of Mount Veeder and chose to recognize them rather than reinvent them.",
  alternates: { canonical: "/blog/finding-summit-house" },
  openGraph: {
    title: "Finding Summit House — A Designer's Story",
    description:
      "How a lifelong Napa native found three 1969 A-frames at the summit of Mount Veeder and chose to recognize them rather than reinvent them.",
    images: [{ url: "/images/great-room-conversation-pit-windows.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finding Summit House — A Designer's Story",
    description:
      "How a lifelong Napa native found three 1969 A-frames at the summit of Mount Veeder and chose to recognize them rather than reinvent them.",
    images: ["/images/great-room-conversation-pit-windows.jpg"],
  },
};

export default function FindingSummitHousePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema("Finding Summit House", "/blog/finding-summit-house")
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getArticleSchema({
              title: "Finding Summit House — A Designer's Story",
              description:
                "The designer's story behind Summit House — how a lifelong Napa native found three 1969 A-frames at the summit of Mount Veeder and chose to recognize them rather than reinvent them.",
              url: "/blog/finding-summit-house",
              datePublished: "2026-04-13",
              image: "/images/great-room-conversation-pit-windows.jpg",
            })
          ),
        }}
      />
      <Hero
        image="/images/great-room-conversation-pit-windows.jpg"
        title="Finding Summit House"
        subtitle="A designer's story."
        alt="The great room at Summit House — sunken conversation pit, river-rock fireplace, and floor-to-ceiling windows looking out into ancient redwoods"
      />

      {/* Intro */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <div className="space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                I was born and raised in Napa Valley, and I&rsquo;d spent my life
                thinking I knew every corner of it. In 2018, I drove up a mountain
                road I&rsquo;d somehow never taken before, and near the summit, I
                found a place I didn&rsquo;t know existed.
              </p>
              <p>
                It sat tucked inside an ancient redwood grove on{" "}
                <Link
                  href="/mount-veeder-napa-area-guide"
                  className="text-brass underline-offset-4 hover:underline"
                >
                  Mount Veeder
                </Link>{" "}
                — one of Napa&rsquo;s most storied mountain AVAs — three A-frames
                joined together and planted there in 1969. Most people who had
                walked through before me, I think, saw a teardown. I didn&rsquo;t.
                I saw craftsmanship you can&rsquo;t replicate anymore. Wood chosen
                for character, not price. Beams set by hands that knew what they
                were doing. Sharp triangular peaks softened by unexpected curves —
                a rounded stairway, gently bent walls, a sunken circular
                conversation pit, and at the heart of the home, a fireplace built
                from ancient river rock pulled straight from the land around it.
                Geometry that still held a point of view.
              </p>
              <p>
                For more than fifty years, this place had stood among redwoods
                that had been standing a thousand years longer. It had survived
                because it was built right the first time — and you can&rsquo;t
                buy bones like those.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* A Space That Chose Me Back */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="A Space That Chose Me Back" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                Something happened the first time I walked through it that I
                wasn&rsquo;t expecting. I felt a piece of myself I hadn&rsquo;t
                realized was missing quietly return. It happened the first time,
                and it happened every time after.
              </p>
              <p>
                How had I lived my whole life in this valley and never known this
                place existed? I still can&rsquo;t answer that. But once I found
                it, I couldn&rsquo;t stop coming back. I&rsquo;d drive up, walk
                through the empty rooms, and leave with the shape of the house
                still in my head. Days would pass and I&rsquo;d find a reason to
                return. I&rsquo;d stand on the deck under the redwoods and feel a
                quiet sense that the place was asking something of me — and I
                already knew what it was.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Recognition, Not Reinvention */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Recognition, Not Reinvention" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>Eventually I stopped resisting.</p>
              <p>
                By then I had renovated a handful of homes — my own, projects in
                partnership, work for clients who trusted my eye. Enough to know I
                had a gift for this: for seeing what a space wants to become, for
                listening to the energy of a space before deciding what to do with
                it. But this wasn&rsquo;t another project. It was a calling. A
                space that chose me back.
              </p>
              <p>
                What became clear pretty quickly was that the house didn&rsquo;t
                need to be transformed. It needed to be recognized. The love was
                already there — in the pitch of three roofs, the weight of the
                beams, the river rock built into the hearth, the curve of the
                conversation pit, the redwoods standing watch, the way the
                mountain held it all. More than a few people told me to tear the
                fireplace out, or at least paint over the stone. I refused. You
                don&rsquo;t cover over something the land itself gave you. Nothing
                needed to be reinvented. It just needed someone to see it, honor
                it, and give it the life it had been waiting for.
              </p>
              <p className="font-semibold text-ink">
                That has been my work ever since.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What You Feel When You Walk In */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="What You Feel When You Walk In" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                Every decision — every material, every surface, every quiet
                consideration of how morning light hits the cedar at six a.m. —
                has been an answer to what the house was already asking for. I
                didn&rsquo;t design Summit House onto this mountain. I listened,
                and built what was already there.
              </p>
              <p>
                That&rsquo;s what you feel when you walk in. The warmth isn&rsquo;t
                decorative. The quiet isn&rsquo;t staged. And maybe — if you stay
                long enough, under the redwoods, above the valley I thought I knew
                — you&rsquo;ll feel a piece of yourself come back, too.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Closing italic note */}
      <section className="bg-parchment py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-12 text-center">
          <FadeIn>
            <p className="font-sans italic text-base md:text-lg text-text-muted leading-relaxed">
              Summit House is a private residence at the summit of Mount Veeder,
              Napa Valley. Monthly residencies begin at 31 nights.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Read more from the journal */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Read More from the Journal" />
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn delay={0.1}>
              <Link
                href="/blog/the-rare-kind-of-privacy-in-napa"
                className="group block border border-charcoal/10 p-8 h-full hover:border-brass transition-colors"
              >
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brass mb-3">
                  On Seclusion &amp; Access
                </p>
                <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink mb-3 group-hover:text-brass transition-colors">
                  The Rare Kind of Privacy
                </h3>
                <p className="font-sans text-sm text-text-muted leading-relaxed">
                  Most people think about privacy in Napa as something you buy.
                  It&rsquo;s also something you can simply live inside of for a
                  little while.
                </p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.15}>
              <Link
                href="/mount-veeder-napa-area-guide"
                className="group block border border-charcoal/10 p-8 h-full hover:border-brass transition-colors"
              >
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brass mb-3">
                  Wineries, Trails, Towns
                </p>
                <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink mb-3 group-hover:text-brass transition-colors">
                  Mount Veeder Area Guide
                </h3>
                <p className="font-sans text-sm text-text-muted leading-relaxed">
                  A complete guide to Mount Veeder and the surrounding Napa
                  Valley area — wineries, hiking, dining, and more.
                </p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link
                href="/blog/napa-valley-locals-guide"
                className="group block border border-charcoal/10 p-8 h-full hover:border-brass transition-colors"
              >
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brass mb-3">
                  Where to Eat, Drink &amp; Shop
                </p>
                <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink mb-3 group-hover:text-brass transition-colors">
                  Napa Valley Locals Guide
                </h3>
                <p className="font-sans text-sm text-text-muted leading-relaxed">
                  A born-and-raised native&rsquo;s list of restaurants, markets,
                  wineries, and the cocktail moves locals actually use.
                </p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.25}>
              <Link
                href="/blog/best-hikes-napa-valley"
                className="group block border border-charcoal/10 p-8 h-full hover:border-brass transition-colors"
              >
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brass mb-3">
                  A Native&rsquo;s Insider Guide
                </p>
                <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink mb-3 group-hover:text-brass transition-colors">
                  Best Hikes in Napa Valley
                </h3>
                <p className="font-sans text-sm text-text-muted leading-relaxed">
                  The trails, historic spots, and wild places locals actually
                  walk — from Petrified Forest to Mount St. Helena.
                </p>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Come feel what the house has been waiting for"
        buttonLabel="Inquire About Residency"
        buttonHref="/availability#inquiry"
      />
    </>
  );
}
