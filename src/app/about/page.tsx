import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animation/FadeIn";
import Image from "next/image";
import CTABanner from "@/components/sections/CTABanner";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Our Story — Philosophy & Hosting | Summit House Napa",
  description:
    "The story behind Summit House Napa — a 1969 A-frame sanctuary on Mount Veeder. Why we host, why booking direct matters, and what makes a month on the mountain different.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Our Story — Philosophy & Hosting | Summit House Napa",
    description:
      "The story behind Summit House Napa — a 1969 A-frame sanctuary on Mount Veeder. Why we host and why booking direct matters.",
    images: [{ url: "/images/twilight-great-room-chandelier.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story — Philosophy & Hosting | Summit House Napa",
    description:
      "The story behind Summit House Napa — a 1969 A-frame sanctuary on Mount Veeder.",
    images: ["/images/twilight-great-room-chandelier.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema("Our Story", "/about")) }}
      />
      <Hero
        image="/images/twilight-great-room-chandelier.jpg"
        title="The Story"
        subtitle="How a 1969 A-frame became a mountaintop sanctuary."
        alt="Summit House great room chandelier glowing warmly beneath the A-frame roofline at dusk"
      />

      {/* The Place */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <FadeIn className="lg:col-span-4">
              <SectionHeading
                title="The Place"
                align="left"
              />
              <div className="mt-8 relative aspect-[3/4] overflow-hidden">
                <Image src="/images/exterior-front-driveway.jpg" alt="Summit House exterior nestled among ancient redwoods" fill className="object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="lg:col-span-8 flex items-center">
              <div className="space-y-6 font-sans text-base md:text-lg text-text leading-relaxed">
                <p>
                  Summit House sits at the very summit of Mount Veeder, tucked
                  among ancient redwoods at the end of a winding mountain road.
                  A 1969 A-frame with cathedral ceilings, massive windows facing
                  the forest, and two acres of wild, private land. The air is
                  different up here — cooler, cleaner, impossibly quiet. Not
                  just a house, but a feeling: the sense that the rest of the
                  world has been gently set aside.
                </p>
                <p>
                  Every detail has been considered — from the sunken conversation
                  pit and its stone fireplace to the outdoor wellness suite with
                  hot tub, infrared sauna, and open-air shower. The kitchen is
                  fully equipped for real cooking. The Starlink connection is fast
                  enough for any remote workflow. The property is designed for
                  guests who want to live here, not just visit.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Book Direct */}
      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <FadeIn className="lg:col-span-5">
              <SectionHeading
                title="Why Book Direct"
                subtitle="A different kind of experience."
                align="left"
                light
              />
            </FadeIn>
            <FadeIn delay={0.2} className="lg:col-span-7 flex items-center">
              <div className="space-y-6 font-sans text-base md:text-lg text-parchment/80 leading-relaxed">
                <p>
                  Booking through a platform means dealing with an algorithm.
                  Booking directly means working with a dedicated host who knows
                  this property and this mountain inside and out. Every inquiry
                  is answered personally. Recommendations are tailored to your
                  interests — whether that means the best tasting rooms for
                  natural wine, the quietest trail for a morning run, or the
                  restaurant where the chef will come to your table. Your host is
                  available before, during, and after your stay — not because
                  it&rsquo;s a policy, but because making your time on the mountain
                  extraordinary is the whole point.
                </p>
                <p>
                  Direct booking also means no platform fees, no corporate
                  middleman, and no generic communication. It means flexibility
                  when plans change, honest answers to every question, and the
                  peace of mind that comes from working directly with someone who
                  knows and loves this property deeply.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Have questions? We'd love to hear from you."
        buttonLabel="Get in Touch"
        buttonHref="/availability"
      />
    </>
  );
}
