import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CTABanner from "@/components/sections/CTABanner";
import Image from "next/image";
import { getBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Gallery — Summit House Napa",
  description:
    "Browse all photos of Summit House Napa — a fully restored 1969 A-frame cabin on Mount Veeder with panoramic views, sunken conversation pit, hot tub, and two acres of private redwood forest.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery — Summit House Napa",
    description:
      "Browse all photos of Summit House Napa — a restored 1969 A-frame cabin on Mount Veeder, Napa Valley.",
    images: [{ url: "/images/living-room-full-chandelier.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery — Summit House Napa",
    description:
      "Browse all photos of Summit House Napa — a restored 1969 A-frame cabin on Mount Veeder, Napa Valley.",
    images: ["/images/living-room-full-chandelier.jpg"],
  },
};

const allImages = [
  // Exterior & Property
  { label: "Summit House front exterior", image: "/images/summit-house-exterior-front.jpg" },
  { label: "Summit House exterior on a foggy morning", image: "/images/summit-house-exterior-foggy.jpg" },
  { label: "Aerial overview of the property", image: "/images/property-overview-aerial.jpg" },
  { label: "A-frame peak viewed from below", image: "/images/exterior-peak-lookingup.jpg" },
  { label: "Exterior windows looking up at the A-frame", image: "/images/exterior-windows-lookingup.jpg" },
  // Great Room & Living Area
  { label: "Great room with floor-to-ceiling window wall", image: "/images/great-room-window-wall.jpg" },
  { label: "Great room wide overhead view", image: "/images/great-room-overhead-wide.jpg" },
  { label: "Great room overhead vertical view", image: "/images/great-room-overhead-vertical.jpg" },
  { label: "Great room chandelier at an angle", image: "/images/great-room-chandelier-angle.jpg" },
  { label: "Full living room with statement chandelier", image: "/images/living-room-full-chandelier.jpg" },
  { label: "Full view of the living room", image: "/images/living-room-full-view.jpg" },
  { label: "Vaulted ceilings in the living room", image: "/images/living-room-vaulted.jpg" },
  { label: "Living room aerial view at evening", image: "/images/living-room-aerial-evening.jpg" },
  { label: "Living room with chandelier, wide angle", image: "/images/living-room-chandelier-wide.jpg" },
  { label: "Living room with warm evening glow", image: "/images/living-room-wide-glow.jpg" },
  // Sunken Lounge & Conversation Pit
  { label: "Colorful sunken lounge with fireplace glow", image: "/images/sunken-lounge-colorful.jpg" },
  { label: "Sunken lounge with fireplace lit", image: "/images/sunken-lounge-fireplace.jpg" },
  { label: "Sunken lounge from overhead in daylight", image: "/images/sunken-lounge-overhead-day.jpg" },
  { label: "Sunken lounge area with entertainment setup", image: "/images/sunken-lounge-closeup-tv.jpg" },
  { label: "Sunken conversation pit with stone fireplace", image: "/images/conversation-pit-closeup.jpg" },
  { label: "Wide view of the sunken living area", image: "/images/living-room-sunken-wide.jpg" },
  { label: "Sunken living area from an angle", image: "/images/living-room-sunken-angle.jpg" },
  // Seating & Details
  { label: "Sofa area framed by redwood trees through the windows", image: "/images/sofa-window-trees.jpg" },
  { label: "Sofa against the window wall", image: "/images/sofa-window-wall.jpg" },
  { label: "Full view of the sofa seating area", image: "/images/sofa-area-full.jpg" },
  { label: "Wide view of the sofa area", image: "/images/sofa-area-wide.jpg" },
  { label: "Sofa area with chandelier and vaulted ceiling", image: "/images/sofa-chandelier-vaulted.jpg" },
  { label: "Swing chair in the living area", image: "/images/sofa-swing-chair-1.jpg" },
  { label: "Swing chair, alternate angle", image: "/images/sofa-swing-chair-2.jpg" },
  { label: "Sunlit hanging chair in the great room", image: "/images/hanging-chair-sunlit.jpg" },
  { label: "Hanging chair and chandelier detail", image: "/images/hanging-chair-chandelier-detail.jpg" },
  { label: "Hanging chair bathed in red glow", image: "/images/hanging-chair-red-glow.jpg" },
  { label: "Antler candelabra glowing at night", image: "/images/antler-candelabra-night.jpg" },
  { label: "A-frame peak interior view", image: "/images/summit-house-peak-interior.jpg" },
  // Outdoor & Deck
  { label: "Sunset view from the fire pit deck", image: "/images/deck-sunset-firepit.jpg" },
  { label: "Zen garden dining table nestled among the trees", image: "/images/deck-dining-table-trees.jpg" },
  { label: "Deck dining area illuminated at night", image: "/images/deck-dining-night.jpg" },
  { label: "Outdoor dining setup in the daytime", image: "/images/deck-dining-closeup-day.jpg" },
  { label: "Deck table with daytime decor", image: "/images/deck-table-decor-daytime.jpg" },
  { label: "Rattan chairs on the deck", image: "/images/deck-rattan-chairs.jpg" },
  { label: "Deck seating with treeline view", image: "/images/deck-seating-treeline.jpg" },
  { label: "Brick pathway through the zen garden", image: "/images/garden-pathway-brick.jpg" },
  { label: "Hot tub under the stars at night", image: "/images/hot-tub-night.jpg" },
  // Views & Light
  { label: "Sunrise view from the loft", image: "/images/sunrise-from-loft.jpg" },
  { label: "Sunrise light streaming through the window", image: "/images/sunrise-through-window.jpg" },
  { label: "Sunset silhouette through the window", image: "/images/sunset-silhouette-window.jpg" },
];

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema("Gallery", "/gallery")) }}
      />
      <Hero
        image="/images/great-room-window-wall.jpg"
        title="Gallery"
        subtitle="Every angle of Summit House — from the soaring great room to the redwood-wrapped outdoor spaces."
      />

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="columns-2 md:columns-3 gap-4">
            {allImages.map((item) => (
              <div key={item.image} className="mb-4 break-inside-avoid">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.label}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to make it yours?"
        buttonLabel="Check Availability"
        buttonHref="/availability"
        variant="brass"
      />
    </>
  );
}
