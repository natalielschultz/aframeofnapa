// Press features and editorial mentions of Summit House Napa.
// Add an entry here when a feature publishes — it auto-appears in the
// FeaturedIn component on the homepage and in the press kit page.
//
// When the first entry lands, also:
//  1. Add the URL to SAME_AS in src/lib/structured-data.ts
//  2. Reconsider the Person schema decision per the master GEO plan

export type FeaturedIn = {
  outlet: string;
  url: string;
  date: string; // ISO YYYY-MM-DD
  quote?: string; // optional pull quote
  logoSrc?: string; // optional /images/press/<file> for logo strip
};

export const FEATURED_IN: FeaturedIn[] = [
  // Empty until first feature lands. The FeaturedIn component renders null when empty.
];
