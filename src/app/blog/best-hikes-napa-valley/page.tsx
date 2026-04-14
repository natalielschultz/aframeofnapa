import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animation/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import { getBreadcrumbSchema, getArticleSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Best Hikes in Napa Valley — A Born-and-Raised Native's Guide | Summit House",
  description:
    "The best hikes in Napa Valley, from a born-and-raised native. Petrified Forest, Mount St. Helena, Archer Taylor Preserve, and the trails locals actually walk.",
  alternates: { canonical: "/blog/best-hikes-napa-valley" },
  openGraph: {
    title: "Best Hikes in Napa Valley — A Born-and-Raised Native's Guide",
    description:
      "The trails, historic spots, and wild places locals actually walk — from Petrified Forest to Mount St. Helena.",
    images: [{ url: "/images/meditation-spot-cushions.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Hikes in Napa Valley — A Born-and-Raised Native's Guide",
    description:
      "The trails, historic spots, and wild places locals actually walk — from Petrified Forest to Mount St. Helena.",
    images: ["/images/meditation-spot-cushions.jpg"],
  },
};

export default function BestHikesNapaValleyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema("Best Hikes in Napa Valley", "/blog/best-hikes-napa-valley")
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getArticleSchema({
              title: "Best Hikes in Napa Valley — A Born-and-Raised Native's Guide",
              description:
                "The best hikes in Napa Valley, from a born-and-raised native. Petrified Forest, Mount St. Helena, Archer Taylor Preserve, and the trails locals actually walk.",
              url: "/blog/best-hikes-napa-valley",
              datePublished: "2026-04-14",
              image: "/images/meditation-spot-cushions.jpg",
            })
          ),
        }}
      />
      <Hero
        image="/images/meditation-spot-cushions.jpg"
        title="Best Hikes in Napa Valley — A Born-and-Raised Native's Guide"
        subtitle="The trails, historic spots, and wild places locals actually walk."
        alt="A trail through ancient redwoods on Mount Veeder, Napa Valley"
      />

      {/* Intro */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <div className="space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                There&rsquo;s the Napa you eat and drink in. There&rsquo;s also
                the Napa you walk into — wilder, older, less photographed, less
                crowded. As a born-and-raised Napa native, this is the side of
                the valley I default to when I want to actually be in it, not
                just consume it.
              </p>
              <p>
                These are the trails and historic spots locals walk. Most
                don&rsquo;t show up in tourist guides, partly because the people
                who know them prefer them quiet. Every one is within a
                thirty-minute drive of{" "}
                <Link
                  href="/mount-veeder-napa-area-guide"
                  className="text-brass underline-offset-4 hover:underline"
                >
                  Mount Veeder
                </Link>
                .
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Hike Most Visitors Never Find */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="The Hike Most Visitors Never Find" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-4">
              <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink">
                Archer Taylor Preserve
              </h3>
              <p className="font-sans text-xs uppercase tracking-wider text-brass">
                Western Napa
              </p>
              <p className="font-sans text-base md:text-lg text-text leading-relaxed">
                The local pick most visitors will never hear about. 320 acres of
                oak woodlands and seasonal creeks managed by the Land Trust of
                Napa County, on the western side of the valley. Quiet, less
                trafficked than the state parks, reservation-required, which
                keeps it that way. If you want a hike where you might not see
                another person, this is it.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Historic Spots */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Historic Spots Worth Walking Into" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-10">
              <div className="space-y-4">
                <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink">
                  The Petrified Forest
                </h3>
                <p className="font-sans text-xs uppercase tracking-wider text-brass">
                  Calistoga area, ~30 minutes
                </p>
                <p className="font-sans text-base md:text-lg text-text leading-relaxed">
                  A privately-owned six-acre forest of ancient redwood trunks
                  turned to stone in a Mount St. Helena eruption 3.4 million
                  years ago. Easy, flat walking paths. Self-guided or docent-led
                  tours. Worth the visit because there&rsquo;s nothing else like
                  it in Northern California — and almost no one talks about it.
                </p>
              </div>
              <div className="bg-brass h-px w-20" aria-hidden="true" />
              <div className="space-y-4">
                <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink">
                  The Old Bale Mill
                </h3>
                <p className="font-sans text-xs uppercase tracking-wider text-brass">
                  Between St. Helena and Calistoga
                </p>
                <p className="font-sans text-base md:text-lg text-text leading-relaxed">
                  Officially the Bale Grist Mill State Historic Park — an 1846
                  water-powered mill that still grinds grain on living-history
                  days. Easy to walk, connects via trail to Bothe-Napa Valley
                  State Park if you want to make a longer day of it. The kind of
                  place you&rsquo;d never know to stop unless someone told you.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Local Trails */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Local Trails for Everyday Walks" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-10">
              <div className="space-y-4">
                <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink">
                  Westwood Hills Park
                </h3>
                <p className="font-sans text-xs uppercase tracking-wider text-brass">
                  Napa
                </p>
                <p className="font-sans text-base md:text-lg text-text leading-relaxed">
                  A favorite for shorter hikes — multiple loop trails, vineyard
                  views, no entry fee. Twenty minutes from the summit. Great for
                  a slow morning walk before the day gets going.
                </p>
              </div>
              <div className="bg-brass h-px w-20" aria-hidden="true" />
              <div className="space-y-4">
                <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink">
                  Alston Park
                </h3>
                <p className="font-sans text-xs uppercase tracking-wider text-brass">
                  Napa
                </p>
                <p className="font-sans text-base md:text-lg text-text leading-relaxed">
                  157 dog-friendly acres on the western edge of Napa with
                  sweeping vineyard views. Locals walk it every morning. If
                  you&rsquo;re staying long enough to want a trail you can
                  return to, this is the one to memorize.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Big One */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="The Big One" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-4">
              <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink">
                Robert Louis Stevenson State Park
              </h3>
              <p className="font-sans text-xs uppercase tracking-wider text-brass">
                Mount St. Helena
              </p>
              <p className="font-sans text-base md:text-lg text-text leading-relaxed">
                The place you go when you want to disappear for a day. The Mount
                St. Helena summit trail is ten miles round-trip with serious
                elevation — but on a clear day from the top, you can see the
                Sierra Nevada. It&rsquo;s one of the great hikes in Northern
                California, and most visitors never make it.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Note for Longer Stays */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="A Note for Longer Stays" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                A weekend in Napa gives you wineries. A month gives you trails.
                The places above only become familiar if you stay long enough to
                walk them more than once. That&rsquo;s when they start to mean
                something — when you know which loop is right for the morning
                you woke up restless, and which one is right for the afternoon
                when you need to think.
              </p>
              <p>
                If you&rsquo;re staying at Summit House for an extended
                residency, the property itself opens up to a private waterfall
                trail through ancient redwoods. The valley below is full of
                places like the ones above. The combination is what makes a
                Mount Veeder stay different.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Read More from the Journal */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Read More from the Journal" />
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn delay={0.1}>
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
                href="/blog/finding-summit-house"
                className="group block border border-charcoal/10 p-8 h-full hover:border-brass transition-colors"
              >
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brass mb-3">
                  A Designer&rsquo;s Story
                </p>
                <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink mb-3 group-hover:text-brass transition-colors">
                  Finding Summit House
                </h3>
                <p className="font-sans text-sm text-text-muted leading-relaxed">
                  How a lifelong Napa native found three 1969 A-frames at the
                  summit of Mount Veeder and chose to recognize them rather than
                  reinvent them.
                </p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.25}>
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
          </div>
        </div>
      </section>

      <CTABanner
        headline="Walk the mountain for a month"
        buttonLabel="Inquire About Residency"
        buttonHref="/availability#inquiry"
      />
    </>
  );
}
