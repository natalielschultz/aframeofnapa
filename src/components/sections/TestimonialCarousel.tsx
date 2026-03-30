"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Review {
  quote: string;
  author: string;
  title?: string;
}

interface TestimonialCarouselProps {
  reviews: Review[];
  interval?: number;
}

const ridgelineEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const slideVariants = {
  enter: { opacity: 0, y: 20 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: ridgelineEase },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.5, ease: ridgelineEase },
  },
};

export default function TestimonialCarousel({
  reviews,
  interval = 6000,
}: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval]);

  const review = reviews[current];

  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 md:px-12 text-center">
        <div className="relative min-h-[240px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex flex-col items-center justify-center gap-8"
            >
              <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-parchment italic leading-relaxed">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <div className="flex flex-col items-center gap-1">
                <span className="font-sans text-sm uppercase tracking-[0.2em] text-brass">
                  {review.author}
                </span>
                {review.title && (
                  <span className="font-sans text-xs text-text-muted">
                    {review.title}
                  </span>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-3 mt-10">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to review ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-colors duration-400 cursor-pointer ${
                index === current ? "bg-brass" : "bg-parchment/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
