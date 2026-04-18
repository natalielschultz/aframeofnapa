export type ImageCategory =
  | "aerial"
  | "exterior"
  | "deck"
  | "greatRoom"
  | "livingRoom"
  | "conversationPit"
  | "kitchen"
  | "dining"
  | "bedroom"
  | "bathroom"
  | "wellness"
  | "garden"
  | "twilight";

export interface ImageEntry {
  src: string;
  alt: string;
  category: ImageCategory;
}

const IMAGES = {
  // ── Aerial ──────────────────────────────────────────────
  "aerial-redwoods-overview": {
    src: "/images/aerial-redwoods-overview.jpg",
    alt: "Aerial view of the A-frame nestled among towering redwoods on the mountainside",
    category: "aerial",
  },
  "aerial-aframe-deck-closeup": {
    src: "/images/aerial-aframe-deck-closeup.jpg",
    alt: "Close aerial view of the A-frame roofline and furnished front deck",
    category: "aerial",
  },
  "aerial-property-front": {
    src: "/images/aerial-property-front.jpg",
    alt: "Aerial view of the full property from the front with redwood canopy",
    category: "aerial",
  },
  "aerial-deck-lounge-above": {
    src: "/images/aerial-deck-lounge-above.jpg",
    alt: "Bird's-eye view of the deck lounge area with striped rugs among the redwoods",
    category: "aerial",
  },
  "aerial-aframe-facade": {
    src: "/images/aerial-aframe-facade.jpg",
    alt: "Aerial view of the iconic A-frame facade with floor-to-ceiling windows and deck",
    category: "aerial",
  },
  "aerial-aframe-side-angle": {
    src: "/images/aerial-aframe-side-angle.jpg",
    alt: "Aerial side angle of the A-frame showing the metal roof and glass wall",
    category: "aerial",
  },
  "aerial-zen-garden": {
    src: "/images/aerial-zen-garden.jpg",
    alt: "Aerial view looking down at the zen garden patio with brick pavers and dining area",
    category: "aerial",
  },
  "aerial-property-full": {
    src: "/images/aerial-property-full.jpg",
    alt: "Full aerial view of the property showing A-frame, hot tub, sauna, and redwood forest",
    category: "aerial",
  },

  // ── Exterior ────────────────────────────────────────────
  "exterior-front-driveway": {
    src: "/images/exterior-front-driveway.jpg",
    alt: "A-frame rental viewed from the driveway, framed by lush greenery and redwoods",
    category: "exterior",
  },
  "entry-staircase-ivy": {
    src: "/images/entry-staircase-ivy.jpg",
    alt: "Dark wood entry staircase flanked by ivy-covered stone wall",
    category: "exterior",
  },
  "rear-exterior-hot-tub": {
    src: "/images/rear-exterior-hot-tub.jpg",
    alt: "Rear view of the A-frame with hot tub, fire pit seating, and brick patio",
    category: "exterior",
  },
  "rear-brick-pathway": {
    src: "/images/rear-brick-pathway.jpg",
    alt: "Brick pathway winding through the rear garden toward the A-frame",
    category: "exterior",
  },
  "rear-exterior-pathway": {
    src: "/images/rear-exterior-pathway.jpg",
    alt: "Rear exterior with brick pathway, landscaped gardens, and hot tub beside the A-frame",
    category: "exterior",
  },

  // ── Deck ────────────────────────────────────────────────
  "deck-lounge-redwoods-day": {
    src: "/images/deck-lounge-redwoods-day.jpg",
    alt: "Front deck lounge with wicker sofa and fire pit table surrounded by redwood trees",
    category: "deck",
  },
  "deck-seating-firepit-day": {
    src: "/images/deck-seating-firepit-day.jpg",
    alt: "Deck seating area with two wicker sofas and fire pit among the redwoods",
    category: "deck",
  },
  "deck-lounge-closeup-day": {
    src: "/images/deck-lounge-closeup-day.jpg",
    alt: "Close-up of deck lounge seating with wicker chairs and fire pit in dappled sunlight",
    category: "deck",
  },
  "deck-dining-picnic-table": {
    src: "/images/deck-dining-picnic-table.jpg",
    alt: "Rustic wood picnic table on the deck with lounge seating and towering redwoods beyond",
    category: "deck",
  },
  "deck-table-candelabra-detail": {
    src: "/images/deck-table-candelabra-detail.jpg",
    alt: "Close-up of the deck dining table with modern candelabra centerpiece and redwood backdrop",
    category: "deck",
  },
  "deck-dining-aframe-facade": {
    src: "/images/deck-dining-aframe-facade.jpg",
    alt: "Deck dining and lounge area with the A-frame glass facade and forest canopy behind",
    category: "deck",
  },
  "deck-aframe-side-view": {
    src: "/images/deck-aframe-side-view.jpg",
    alt: "Side view of the A-frame from the deck, showing the metal siding and dining table",
    category: "deck",
  },
  "deck-lounge-forest-view": {
    src: "/images/deck-lounge-forest-view.jpg",
    alt: "Deck lounge area looking out toward the redwood forest with string lights above",
    category: "deck",
  },
  "deck-full-aframe-front": {
    src: "/images/deck-full-aframe-front.jpg",
    alt: "Full view of the front deck with lounge seating, picnic table, and A-frame facade",
    category: "deck",
  },
  "balcony-rattan-chairs": {
    src: "/images/balcony-rattan-chairs.jpg",
    alt: "Small side balcony with two rattan chairs overlooking the forest canopy",
    category: "deck",
  },

  // ── Great Room ──────────────────────────────────────────
  "great-room-conversation-pit-wide": {
    src: "/images/great-room-conversation-pit-wide.jpg",
    alt: "Wide view of the double-height great room with sunken conversation pit, stone fireplace, and bamboo chandelier",
    category: "greatRoom",
  },
  "great-room-sofa-fireplace": {
    src: "/images/great-room-sofa-fireplace.jpg",
    alt: "Great room from the sofa side showing green velvet sectional, conversation pit, and stone fireplace",
    category: "greatRoom",
  },
  "great-room-conversation-pit-windows": {
    src: "/images/great-room-conversation-pit-windows.jpg",
    alt: "Great room with conversation pit and soaring A-frame windows framing the redwoods outside",
    category: "greatRoom",
  },
  "loft-overhead-chandelier": {
    src: "/images/loft-overhead-chandelier.jpg",
    alt: "Overhead loft view looking down at the green sofa and bamboo chandelier with deck visible through windows",
    category: "greatRoom",
  },
  "staircase-stone-column": {
    src: "/images/staircase-stone-column.jpg",
    alt: "Natural stone column beside the staircase leading to the loft, with conversation pit below",
    category: "greatRoom",
  },

  // ── Living Room ─────────────────────────────────────────
  "living-room-green-sofa-closeup": {
    src: "/images/living-room-green-sofa-closeup.jpg",
    alt: "Green velvet sectional sofa with cedar-paneled A-frame walls, gallery art, and conversation pit beyond",
    category: "livingRoom",
  },
  "living-room-green-sofa-wide": {
    src: "/images/living-room-green-sofa-wide.jpg",
    alt: "Wide view of the green sofa area with live-edge coffee table under the angled cedar ceiling",
    category: "livingRoom",
  },
  "living-room-sofa-redwood-view": {
    src: "/images/living-room-sofa-redwood-view.jpg",
    alt: "Green sofa nook beside floor-to-ceiling windows with redwood trees visible through the glass",
    category: "livingRoom",
  },

  // ── Conversation Pit ────────────────────────────────────
  "conversation-pit-fireplace-closeup": {
    src: "/images/conversation-pit-fireplace-closeup.jpg",
    alt: "Close-up of the sunken conversation pit with tan leather banquette, shag rug, and massive stone fireplace with TV",
    category: "conversationPit",
  },
  "conversation-pit-fireplace-angle": {
    src: "/images/conversation-pit-fireplace-angle.jpg",
    alt: "Angled view of the conversation pit showing the curved banquette, brass coffee table, and river-rock fireplace surround",
    category: "conversationPit",
  },

  // ── Kitchen ─────────────────────────────────────────────
  "kitchen-dining-overview": {
    src: "/images/kitchen-dining-overview.jpg",
    alt: "Open kitchen and dining area with round walnut table, green velvet stools, ruffled chandelier, and white tile backsplash",
    category: "kitchen",
  },
  "kitchen-dining-chandelier": {
    src: "/images/kitchen-dining-chandelier.jpg",
    alt: "Kitchen viewed from the dining table with ruffled chandelier, geometric pendants, and stone fireplace column",
    category: "kitchen",
  },
  "kitchen-island-pendants": {
    src: "/images/kitchen-island-pendants.jpg",
    alt: "White marble kitchen island with geometric brass pendant lights and hexagonal tile backsplash",
    category: "kitchen",
  },
  "kitchen-range-wide": {
    src: "/images/kitchen-range-wide.jpg",
    alt: "Wide view of the kitchen showing Viking range, floating wood shelves, and marble countertops",
    category: "kitchen",
  },
  "kitchen-backsplash-shelves": {
    src: "/images/kitchen-backsplash-shelves.jpg",
    alt: "Kitchen detail with elongated hexagonal tile backsplash, brass-edge floating shelves, and geometric pendants",
    category: "kitchen",
  },
  "kitchen-range-window": {
    src: "/images/kitchen-range-window.jpg",
    alt: "Kitchen corner with Viking range, garden-view window, brass faucet, and tile backsplash",
    category: "kitchen",
  },
  "kitchen-viking-range-closeup": {
    src: "/images/kitchen-viking-range-closeup.jpg",
    alt: "Close-up of the Viking six-burner range with copper pepper mill and KitchenAid mixer on the counter",
    category: "kitchen",
  },
  "kitchen-fridge-range-detail": {
    src: "/images/kitchen-fridge-range-detail.jpg",
    alt: "White panel refrigerator with copper handles beside the Viking range and floating shelves",
    category: "kitchen",
  },

  // ── Dining ──────────────────────────────────────────────
  "dining-nook-aframe-windows": {
    src: "/images/dining-nook-aframe-windows.jpg",
    alt: "Dining nook with round walnut table, ruffled chandelier, and A-frame windows framing the treetops",
    category: "dining",
  },
  "dining-chandelier-detail": {
    src: "/images/dining-chandelier-detail.jpg",
    alt: "Ruffled pendant chandelier detail over the round dining table with stone column and green sofa visible beyond",
    category: "dining",
  },

  // ── Bedrooms ────────────────────────────────────────────
  "loft-bedroom-aframe-ceiling": {
    src: "/images/loft-bedroom-aframe-ceiling.jpg",
    alt: "Loft bedroom with platform bed, mid-century desk, and dramatic A-frame cedar ceiling with forest-view window",
    category: "bedroom",
  },
  "primary-bedroom-shelving": {
    src: "/images/primary-bedroom-shelving.jpg",
    alt: "Primary bedroom with walnut platform bed, white built-in shelving, abstract art, and vaulted A-frame ceiling",
    category: "bedroom",
  },
  "loft-seating-nook": {
    src: "/images/loft-seating-nook.jpg",
    alt: "Cozy loft seating nook with two Eames chairs, floor mirror, and cedar-paneled A-frame walls",
    category: "bedroom",
  },
  "primary-bedroom-desk-peak": {
    src: "/images/primary-bedroom-desk-peak.jpg",
    alt: "Primary bedroom with mid-century desk at the A-frame peak window, dark abstract art above the bed",
    category: "bedroom",
  },
  "primary-bedroom-triangular-window": {
    src: "/images/primary-bedroom-triangular-window.jpg",
    alt: "View from the primary bed toward the triangular A-frame peak window framing a towering redwood trunk",
    category: "bedroom",
  },
  "guest-bedroom-loft-ladder": {
    src: "/images/guest-bedroom-loft-ladder.jpg",
    alt: "Guest bedroom with platform bed, cedar ceiling, and black ladder leading to the sleeping loft above",
    category: "bedroom",
  },
  "guest-bedroom-bunk-loft": {
    src: "/images/guest-bedroom-bunk-loft.jpg",
    alt: "Guest bedroom showing the bunk loft with black metal ladder, closets, and vaulted cedar ceiling",
    category: "bedroom",
  },
  "third-bedroom-cozy": {
    src: "/images/third-bedroom-cozy.jpg",
    alt: "Cozy third bedroom with wooden bed frame, mirrored nightstands, and angled A-frame walls",
    category: "bedroom",
  },
  "sleeping-loft-curtained": {
    src: "/images/sleeping-loft-curtained.jpg",
    alt: "Curtained sleeping loft tucked into the A-frame peak with skylight and black ladder access",
    category: "bedroom",
  },
  "bedroom-reading-nook": {
    src: "/images/bedroom-reading-nook.jpg",
    alt: "Intimate reading nook with grey armchair, hanging mirror, and warm cedar-paneled walls",
    category: "bedroom",
  },
  "primary-suite-marble-wall": {
    src: "/images/primary-suite-marble-wall.jpg",
    alt: "Primary suite with gold bed frame, pink marble accent wall, geometric brass light fixture, and mirrored closets",
    category: "bedroom",
  },
  "primary-suite-garden-door": {
    src: "/images/primary-suite-garden-door.jpg",
    alt: "Primary suite with French doors opening to the garden, pink marble wall, and golden evening light",
    category: "bedroom",
  },

  // ── Bathrooms ───────────────────────────────────────────
  "bathroom-glass-shower": {
    src: "/images/bathroom-glass-shower.jpg",
    alt: "Modern bathroom with frameless glass shower, grey tile, oak vanity, and gold-framed round mirror",
    category: "bathroom",
  },
  "bathroom-shower-detail": {
    src: "/images/bathroom-shower-detail.jpg",
    alt: "Walk-in shower detail with rainfall showerhead, grey porcelain tile, and frosted garden-view window",
    category: "bathroom",
  },
  "bathroom-floral-wallpaper": {
    src: "/images/bathroom-floral-wallpaper.jpg",
    alt: "Dramatic bathroom with large-scale floral wallpaper, floating oak vanity, gold mirror, and dark tile walk-in shower",
    category: "bathroom",
  },

  // ── Wellness & Garden ───────────────────────────────────
  "zen-garden-hot-tub-overview": {
    src: "/images/zen-garden-hot-tub-overview.jpg",
    alt: "Zen garden overview with brick patio, hot tub, fire pit lounge chairs, and A-frame visible beyond",
    category: "wellness",
  },
  "hot-tub-sauna-garden": {
    src: "/images/hot-tub-sauna-garden.jpg",
    alt: "Hot tub surrounded by garden chairs with the infrared sauna and ivy-covered fence in the background",
    category: "wellness",
  },
  "garden-firepit-seating-detail": {
    src: "/images/garden-firepit-seating-detail.jpg",
    alt: "Garden fire pit seating detail with teak chairs, striped pillows, and lattice fence with plantings",
    category: "wellness",
  },
  "hot-tub-aframe-rear": {
    src: "/images/hot-tub-aframe-rear.jpg",
    alt: "Hot tub and lounge chairs beside the A-frame rear entrance with warm light glowing from the bedroom",
    category: "wellness",
  },
  "outdoor-shower": {
    src: "/images/outdoor-shower.jpg",
    alt: "Open-air outdoor shower with rainfall head, teak bench, grey tile, and garden view",
    category: "wellness",
  },
  "infrared-sauna": {
    src: "/images/infrared-sauna.jpg",
    alt: "Cedar infrared sauna structure tucked into the garden with brick pathway and lush plantings",
    category: "wellness",
  },
  "garden-mosaic-table-bbq": {
    src: "/images/garden-mosaic-table-bbq.jpg",
    alt: "Mosaic-topped round dining table with teak chairs and stainless steel BBQ grill in the garden",
    category: "garden",
  },
  "garden-overview-sauna": {
    src: "/images/garden-overview-sauna.jpg",
    alt: "Garden overview showing mosaic dining table, sauna, and A-frame roofline among the trees",
    category: "garden",
  },
  "meditation-spot-redwoods": {
    src: "/images/meditation-spot-redwoods.jpg",
    alt: "Meditation spot under an ancient redwood with wooden stepping stones and meditation cushions",
    category: "garden",
  },
  "meditation-spot-cushions": {
    src: "/images/meditation-spot-cushions.jpg",
    alt: "Close-up of the meditation area with embroidered cushions on a bamboo mat beneath a fallen redwood log",
    category: "garden",
  },

  // ── Twilight ────────────────────────────────────────────
  "twilight-great-room-wide": {
    src: "/images/twilight-great-room-wide.jpg",
    alt: "Great room at twilight with warm interior glow, A-frame windows reflecting the dusky sky and redwoods",
    category: "twilight",
  },
  "twilight-great-room-chandelier": {
    src: "/images/twilight-great-room-chandelier.jpg",
    alt: "Great room at dusk with illuminated bamboo chandelier, green sofa, and pink-purple sky through the windows",
    category: "twilight",
  },
  "twilight-conversation-pit": {
    src: "/images/twilight-conversation-pit.jpg",
    alt: "Conversation pit at twilight with the leather banquette glowing warmly and deck visible through the glass wall",
    category: "twilight",
  },
  "twilight-green-sofa-corner": {
    src: "/images/twilight-green-sofa-corner.jpg",
    alt: "Green sofa corner at sunset with warm lamp light and dusky sky visible through the A-frame windows",
    category: "twilight",
  },
  "twilight-great-room-full": {
    src: "/images/twilight-great-room-full.jpg",
    alt: "Full great room at dusk showing the chandelier, conversation pit, and gallery wall bathed in warm light",
    category: "twilight",
  },
  "twilight-dining-chandelier": {
    src: "/images/twilight-dining-chandelier.jpg",
    alt: "Dining area at twilight with the ruffled chandelier glowing and sunset colors through the A-frame windows",
    category: "twilight",
  },
  "twilight-loft-view-stringlights": {
    src: "/images/twilight-loft-view-stringlights.jpg",
    alt: "View from the loft at dusk looking down through the A-frame peak with string lights visible on the deck below",
    category: "twilight",
  },
  "twilight-deck-aframe-glowing": {
    src: "/images/twilight-deck-aframe-glowing.jpg",
    alt: "Front deck at twilight with string lights, lounge seating, and the glowing A-frame facade revealing the interior",
    category: "twilight",
  },
  "twilight-deck-lounge-sunset": {
    src: "/images/twilight-deck-lounge-sunset.jpg",
    alt: "Deck lounge at sunset with string lights draped among the redwoods and pink sky beyond",
    category: "twilight",
  },
  "twilight-deck-firepit-sunset": {
    src: "/images/twilight-deck-firepit-sunset.jpg",
    alt: "Deck fire pit area at sunset with wicker seating and golden sky peeking through the redwood canopy",
    category: "twilight",
  },
  "twilight-aframe-facade-front": {
    src: "/images/twilight-aframe-facade-front.jpg",
    alt: "Iconic front view of the glowing A-frame at twilight with the full glass wall illuminated and string lights strung between trees",
    category: "twilight",
  },
  "twilight-deck-aframe-wide": {
    src: "/images/twilight-deck-aframe-wide.jpg",
    alt: "Wide angle of the deck and A-frame at dusk with lounge furniture, string lights, and warm interior glow",
    category: "twilight",
  },
  "twilight-deck-dining-stringlights": {
    src: "/images/twilight-deck-dining-stringlights.jpg",
    alt: "Deck dining table at sunset with string lights above and a candelabra centerpiece, redwoods silhouetted against the sky",
    category: "twilight",
  },
  "twilight-deck-table-sunset": {
    src: "/images/twilight-deck-table-sunset.jpg",
    alt: "Deck picnic table at sunset with candelabra, string lights overhead, and golden sunset through the trees",
    category: "twilight",
  },
  "twilight-aerial-aframe-glowing": {
    src: "/images/twilight-aerial-aframe-glowing.jpg",
    alt: "Elevated twilight view of the A-frame glowing among the redwoods with landscape lighting illuminating the garden below",
    category: "twilight",
  },
  "twilight-zen-garden-hot-tub": {
    src: "/images/twilight-zen-garden-hot-tub.jpg",
    alt: "Zen garden at dusk with fire pit seating, hot tub, and landscape lighting along the brick patio",
    category: "twilight",
  },
  "twilight-firepit-sauna-garden": {
    src: "/images/twilight-firepit-sauna-garden.jpg",
    alt: "Garden fire pit lounge at twilight with the infrared sauna glowing red and lush plantings illuminated by path lights",
    category: "twilight",
  },
  "twilight-hot-tub-illuminated": {
    src: "/images/twilight-hot-tub-illuminated.jpg",
    alt: "Hot tub glowing blue at twilight with the sauna lit red in the background and fire pit seating nearby",
    category: "twilight",
  },
  "twilight-hot-tub-aframe-rear": {
    src: "/images/twilight-hot-tub-aframe-rear.jpg",
    alt: "Illuminated hot tub at dusk beside the A-frame rear entrance with warm light spilling from the bedroom",
    category: "twilight",
  },
  "twilight-rear-garden-overview": {
    src: "/images/twilight-rear-garden-overview.jpg",
    alt: "Full rear garden at dusk with mosaic dining table, hot tub, sauna, and the A-frame silhouetted against the sky",
    category: "twilight",
  },
  "twilight-rear-aframe-closeup": {
    src: "/images/twilight-rear-aframe-closeup.jpg",
    alt: "Close rear view of the A-frame at twilight with hot tub, fire pit chairs, and warm bedroom light",
    category: "twilight",
  },
  "twilight-rear-exterior-wide": {
    src: "/images/twilight-rear-exterior-wide.jpg",
    alt: "Wide rear exterior at dusk with brick pathway, hot tub, landscaping, and the dark A-frame shape against the sky",
    category: "twilight",
  },
  "twilight-garden-dining-table": {
    src: "/images/twilight-garden-dining-table.jpg",
    alt: "Garden mosaic dining table at twilight with teak chairs, lattice fencing, and landscape lighting",
    category: "twilight",
  },
  "twilight-balcony-rattan-sunset": {
    src: "/images/twilight-balcony-rattan-sunset.jpg",
    alt: "Side balcony rattan chairs at sunset with forest silhouettes and pink-purple sky",
    category: "twilight",
  },
  "twilight-balcony-dining-interior": {
    src: "/images/twilight-balcony-dining-interior.jpg",
    alt: "Balcony at twilight looking into the glowing dining area with ruffled chandelier and green velvet stools",
    category: "twilight",
  },
} as const satisfies Record<string, ImageEntry>;

export type ImageKey = keyof typeof IMAGES;

export function getImage(key: ImageKey): ImageEntry {
  return IMAGES[key];
}

export function getImages(keys: ImageKey[]): ImageEntry[] {
  return keys.map((key) => IMAGES[key]);
}

export function getAllImages(): ImageEntry[] {
  return Object.values(IMAGES);
}

export function getImagesByCategory(category: ImageCategory): ImageEntry[] {
  return Object.values(IMAGES).filter((img) => img.category === category);
}
