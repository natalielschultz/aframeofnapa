"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/animation/FadeIn";

interface GalleryItem {
  label: string;
  image: string;
}

const INITIAL_COUNT = 8;

export default function PropertyGallery({ items }: { items: GalleryItem[] }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? items : items.slice(0, INITIAL_COUNT);

  return (
    <>
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {visible.map((item, i) => (
          <FadeIn key={item.image} delay={i < INITIAL_COUNT ? i * 0.05 : 0}>
            <div
              className={`relative overflow-hidden ${
                i === 0 || i === 5
                  ? "aspect-[4/3] md:col-span-2 md:row-span-2 md:aspect-square"
                  : "aspect-square"
              }`}
            >
              <Image src={item.image} alt={item.label} fill className="object-cover" />
            </div>
          </FadeIn>
        ))}
      </div>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        {!showAll && items.length > INITIAL_COUNT && (
          <button
            onClick={() => setShowAll(true)}
            className="font-serif bg-transparent border border-brass px-8 py-3 text-xs uppercase tracking-[2.5px] text-ink transition-colors duration-200 hover:bg-brass/10"
          >
            Load More Photos
          </button>
        )}
        <Link
          href="/gallery"
          className="font-serif bg-brass px-8 py-3 text-xs uppercase tracking-[2.5px] text-ink transition-colors duration-200 hover:bg-brass-light"
        >
          View All Photos
        </Link>
      </div>
    </>
  );
}
