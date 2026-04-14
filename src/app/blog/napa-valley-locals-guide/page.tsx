import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animation/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import { getBreadcrumbSchema, getArticleSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Napa Valley Locals Guide — A Born-and-Raised Native's Picks | Summit House",
  description:
    "A born-and-raised Napa Valley native's guide to where locals actually eat, drink, and shop. Restaurants, markets, wineries, and the moves you won't find in the in-flight magazine.",
  alternates: { canonical: "/blog/napa-valley-locals-guide" },
  openGraph: {
    title: "Napa Valley Locals Guide — A Born-and-Raised Native's Picks",
    description:
      "Where locals actually eat, drink, and shop in Napa Valley — from someone who grew up here.",
    images: [{ url: "/images/twilight-deck-table-sunset.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Napa Valley Locals Guide — A Born-and-Raised Native's Picks",
    description:
      "Where locals actually eat, drink, and shop in Napa Valley — from someone who grew up here.",
    images: ["/images/twilight-deck-table-sunset.jpg"],
  },
};

export default function NapaValleyLocalsGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema("Napa Valley Locals Guide", "/blog/napa-valley-locals-guide")
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getArticleSchema({
              title: "Napa Valley Locals Guide — A Born-and-Raised Native's Picks",
              description:
                "A born-and-raised Napa Valley native's guide to where locals actually eat, drink, and shop.",
              url: "/blog/napa-valley-locals-guide",
              datePublished: "2026-04-14",
              image: "/images/twilight-deck-table-sunset.jpg",
            })
          ),
        }}
      />
      <Hero
        image="/images/twilight-deck-table-sunset.jpg"
        title="Napa Valley Locals Guide — A Born-and-Raised Native's Picks"
        subtitle="Where to eat, drink, and shop, from someone who actually lives here."
        alt="A locals' table in Napa Valley — wine, sunlight, and the unhurried pace of an extended stay"
      />

      {/* Intro */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <div className="space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                I&rsquo;m a born-and-raised Napa native — almost forty years in
                this valley. That&rsquo;s long enough to watch it transform: the
                vineyards expand, the tasting rooms multiply, the restaurants come
                and go. It&rsquo;s also long enough to know which places have
                stayed worth showing up for, and which were always more about the
                marketing than the food.
              </p>
              <p>
                This isn&rsquo;t a guide written by someone who came up for a long
                weekend. It&rsquo;s the list I&rsquo;d hand a friend who was
                moving here for the first month — or the residents who stay at
                Summit House and ask, two days in: <em>&ldquo;Where do you
                actually go?&rdquo;</em>
              </p>
              <p>
                Every place below is within fifteen to thirty minutes of{" "}
                <Link
                  href="/mount-veeder-napa-area-guide"
                  className="text-brass underline-offset-4 hover:underline"
                >
                  Mount Veeder
                </Link>
                . Most aren&rsquo;t on the standard lists. All are places I keep
                going back to.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Best Breakfast */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="The Best Breakfast in Napa Valley" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-4">
              <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink">
                Boon Fly Café
              </h3>
              <p className="font-sans text-xs uppercase tracking-wider text-brass">
                15 minutes from the summit
              </p>
              <p className="font-sans text-base md:text-lg text-text leading-relaxed">
                Famous for their donuts — small, warm, dusted with cinnamon
                sugar, and worth the drive on their own. The rest of the menu is
                just as serious. The kind of breakfast spot locals drive past a
                dozen tourist-favored places to reach. Go on a weekday if you can
                — weekends require patience.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Markets */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="The Markets Worth Knowing About" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-10">
              <div className="space-y-4">
                <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink">
                  Browns Valley Market
                </h3>
                <p className="font-sans text-xs uppercase tracking-wider text-brass">
                  15 minutes
                </p>
                <p className="font-sans text-base md:text-lg text-text leading-relaxed">
                  Quietly the best sandwich shop in the entire valley — and
                  locals have known this for years. The deli case is exceptional,
                  the butcher is the best in Napa, and the produce section makes
                  you build meals around what&rsquo;s in season. If you&rsquo;re
                  staying any length of time, this becomes your weekly stop.
                  Bring a list, or you&rsquo;ll leave with twice what you came
                  for.
                </p>
              </div>
              <div className="bg-brass h-px w-20" aria-hidden="true" />
              <div className="space-y-4">
                <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink">
                  Oakville Grocery
                </h3>
                <p className="font-sans text-xs uppercase tracking-wider text-brass">
                  15 minutes
                </p>
                <p className="font-sans text-base md:text-lg text-text leading-relaxed">
                  Older, more storied, and a totally different feel from Browns
                  Valley. The trick is going in the late afternoon — an hour or
                  so before close. The crowds have thinned, the light is golden,
                  and you can grab dinner-from-the-deli with a bottle of wine and
                  catch the sunset on the way home. Avoid the noon rush.
                  It&rsquo;s a different place at 5 p.m.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Restaurants */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Restaurants for the Long Stay" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-10">
              <div className="space-y-4">
                <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink">
                  R+D Kitchen
                </h3>
                <p className="font-sans text-xs uppercase tracking-wider text-brass">
                  Yountville
                </p>
                <p className="font-sans text-base md:text-lg text-text leading-relaxed">
                  Hillstone Group&rsquo;s Yountville restaurant — same family as
                  Rutherford Grill. The pizza is excellent, the sandwiches are
                  excellent, the wine list is sensible. The place I go when I
                  don&rsquo;t want to think about it but want to eat well. If
                  you&rsquo;re staying long enough to hit a favorite twice, this
                  is one of them.
                </p>
              </div>
              <div className="bg-brass h-px w-20" aria-hidden="true" />
              <div className="space-y-4">
                <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink">
                  Rutherford Grill
                </h3>
                <p className="font-sans text-base md:text-lg text-text leading-relaxed">
                  A locals&rsquo; favorite since forever. Same parent company as
                  R+D Kitchen, no-reservation policy that keeps the pace honest.
                  The spinach dip, the prime rib, a bar scene that fills up
                  early, and famously generous corkage. This is where you bring
                  out-of-town family who want <em>real Napa</em> and won&rsquo;t
                  let you down.
                </p>
              </div>
              <div className="bg-brass h-px w-20" aria-hidden="true" />
              <div className="space-y-4">
                <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink">
                  Bistro Jeanty
                </h3>
                <p className="font-sans text-xs uppercase tracking-wider text-brass">
                  Yountville
                </p>
                <p className="font-sans text-base md:text-lg text-text leading-relaxed">
                  A French country bistro in a town that doesn&rsquo;t lack for
                  restaurants — and still one of my absolute favorites of all
                  time. Tomato soup in puff pastry, perfectly executed boudin
                  noir, an unfussy patio. It feels the way a Napa restaurant
                  should feel: confident, warm, no theater. Reserve.
                </p>
              </div>
              <div className="bg-brass h-px w-20" aria-hidden="true" />
              <div className="space-y-4">
                <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink">
                  Scala&rsquo;s Bistro
                </h3>
                <p className="font-sans text-xs uppercase tracking-wider text-brass">
                  Downtown Napa
                </p>
                <p className="font-sans text-base md:text-lg text-text leading-relaxed">
                  The Napa branch of the iconic San Francisco original — and, if
                  you ask me, the new best restaurant in the entire valley.
                  Italian, generous, the kind of room you settle into for a real
                  meal. After you&rsquo;ve done the predictable Yountville
                  circuit, this is where to go next.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Wineries */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="The Wineries Worth the Appointment" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-10">
              <div className="space-y-4">
                <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink">
                  Hess Collection
                </h3>
                <p className="font-sans text-xs uppercase tracking-wider text-brass">
                  Mount Veeder
                </p>
                <p className="font-sans text-base md:text-lg text-text leading-relaxed">
                  On every standard &ldquo;wineries of Napa&rdquo; list — worth a
                  mention here for a different reason. Their contemporary art
                  collection is genuinely museum-quality, integrated into the
                  tasting space in a way that makes you stay longer than you
                  would otherwise. Show up for the wine, leave thinking about the
                  art.
                </p>
              </div>
              <div className="bg-brass h-px w-20" aria-hidden="true" />
              <div className="space-y-4">
                <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink">
                  Progeny Winery
                </h3>
                <p className="font-sans text-xs uppercase tracking-wider text-brass">
                  Mount Veeder
                </p>
                <p className="font-sans text-base md:text-lg text-text leading-relaxed">
                  Lesser-known and harder to visit, which is part of the appeal.
                  A small, thoughtful Mount Veeder operation producing Cabernet
                  that punches well above its visibility. If you&rsquo;re staying
                  long enough on the mountain to make appointments, this is one
                  to make.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Cocktail Move */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="The Insider Cocktail Move" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <h3 className="font-serif font-light uppercase tracking-[2px] text-xl text-ink">
                Auberge du Soleil — the bar
              </h3>
              <p>
                Auberge is on every &ldquo;best of Napa&rdquo; destination list.
                What most lists don&rsquo;t tell you: you don&rsquo;t need a
                reservation for the bar area. Same kitchen, same view, infinitely
                more relaxed.
              </p>
              <p>
                The move:{" "}
                <strong className="font-semibold text-ink">go early.</strong> Bar
                seats are limited, and they fill fast. Show up around four
                o&rsquo;clock on a weekday, claim a stool, order a cocktail and a
                bite, and watch the afternoon light move across the valley.
                It&rsquo;s the move locals make when we want Auberge without the
                production.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Note for Longer Stays */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="A Note for Longer Stays" />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-12 space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
              <p>
                The list above is a starting point. The real gift of staying in
                Napa long enough — a month, a season — is that you start to build
                your own version of it. The market person who knows your name.
                The bartender who pours your usual. The trail you take when you
                want to clear your head. None of that fits in a guide.
              </p>
              <p>
                If you&rsquo;re settling in for an extended stay at Summit House,
                ask. I have favorites for every category, every season, and every
                mood that don&rsquo;t make the public lists.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Read More from the Journal */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="Read More from the Journal" />
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn delay={0.1}>
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
        headline="Settle in for a month on the mountain"
        buttonLabel="Inquire About Residency"
        buttonHref="/availability#inquiry"
      />
    </>
  );
}
