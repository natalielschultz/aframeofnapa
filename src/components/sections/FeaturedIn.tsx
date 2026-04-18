import { FEATURED_IN } from "@/lib/featured-in";
import FadeIn from "@/components/animation/FadeIn";

/**
 * Logo strip of editorial features. Renders null until the first feature
 * lands in src/lib/featured-in.ts — empty state is intentional, not a bug.
 * The marketing plan (Tier 4) is to ship pitch templates and earn entries.
 */
export default function FeaturedIn() {
  if (FEATURED_IN.length === 0) return null;

  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <FadeIn>
          <p className="text-center font-sans text-xs uppercase tracking-[0.2em] text-text-muted">
            Featured In
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {FEATURED_IN.map((feature) => (
              <li key={feature.url}>
                <a
                  href={feature.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-lg md:text-xl text-ink/80 transition-colors hover:text-ink"
                  aria-label={`Read about Summit House Napa in ${feature.outlet}`}
                >
                  {feature.outlet}
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
