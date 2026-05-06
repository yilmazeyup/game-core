"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  name: string;
  text: string;
  rating: number;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Marcus Rivera",
    text: "Game Core has become my go-to spot for collectible card games. Their selection of rare booster packs is unmatched, and the staff actually knows what they're talking about.",
    rating: 5,
    date: "April 12, 2026",
  },
  {
    name: "Sarah Chen",
    text: "Picked up a refurbished N64 here and it works like it's brand new. The retro section is a dream for any nostalgic gamer. Fair prices too!",
    rating: 5,
    date: "March 28, 2026",
  },
  {
    name: "Jamal Thompson",
    text: "Ordered a custom controller online and it arrived faster than expected. The build quality is incredible and the customer support team was super helpful when I had questions.",
    rating: 4,
    date: "March 15, 2026",
  },
  {
    name: "Emily Kowalski",
    text: "Love the weekly tournaments they host! It's a great community and the store always has the latest releases on day one. Definitely recommend checking them out.",
    rating: 5,
    date: "February 20, 2026",
  },
  {
    name: "David Park",
    text: "The gaming accessories selection is solid. Found a mechanical keyboard and headset combo deal that saved me over $50. Will be coming back for sure.",
    rating: 4,
    date: "February 5, 2026",
  },
  {
    name: "Olivia Martinez",
    text: "As a parent shopping for my kids, I appreciate how knowledgeable the staff is. They helped me pick age-appropriate games and even gift-wrapped everything for free.",
    rating: 5,
    date: "January 18, 2026",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-600"
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
          What Our Customers Say
        </h2>

        <div className="relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8 sm:p-10 min-h-[250px] flex flex-col justify-center">
          <StarRating rating={t.rating} />

          <blockquote className="text-gray-300 text-lg leading-relaxed mt-4 mb-6">
            &ldquo;{t.text}&rdquo;
          </blockquote>

          <div>
            <p className="text-white font-semibold">{t.name}</p>
            <p className="text-gray-500 text-sm">{t.date}</p>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center text-gray-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center text-gray-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                  i === current ? "bg-purple-400" : "bg-gray-700"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
