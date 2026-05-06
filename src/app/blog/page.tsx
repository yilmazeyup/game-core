"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, User, BookOpen } from "lucide-react";
import Image from "next/image";

const categories = ["All", "News", "Review", "Guide"];

const posts = [
  {
    id: 1,
    title: "PS5 Pro: Everything We Know So Far",
    excerpt:
      "Sony's next-gen upgrade promises 8K support, enhanced ray tracing, and a larger SSD. Here's a breakdown of the confirmed specs, pricing, and launch window.",
    date: "April 28, 2026",
    author: "Jason Mitchell",
    category: "News" as const,
    readTime: "5 min read",
    image: "/images/konsol-vitrini.jpeg",
  },
  {
    id: 2,
    title: "Top 10 Must-Have Nintendo Switch Games in 2026",
    excerpt:
      "From indie gems to blockbuster exclusives, these are the Switch titles every gamer needs in their collection this year.",
    date: "April 22, 2026",
    author: "Sarah Chen",
    category: "Guide" as const,
    readTime: "7 min read",
    image: "/images/oyun-raflari.jpeg",
  },
  {
    id: 3,
    title: "Pokemon TCG Pocket: Prismatic Evolutions Review",
    excerpt:
      "The latest Pokemon TCG expansion brings stunning prismatic art and powerful new mechanics. We break down the best pulls and deck strategies.",
    date: "April 15, 2026",
    author: "Marcus Rivera",
    category: "Review" as const,
    readTime: "6 min read",
    image: "/images/kart-sergi.jpeg",
  },
  {
    id: 4,
    title: "How to Start a Retro Game Collection on a Budget",
    excerpt:
      "Building a retro collection doesn't have to break the bank. Learn smart buying strategies, where to find deals, and which consoles hold their value.",
    date: "April 10, 2026",
    author: "Emily Park",
    category: "Guide" as const,
    readTime: "8 min read",
    image: "/images/retro-konsol.jpeg",
  },
  {
    id: 5,
    title: "Game Core Announces Summer Tournament Series",
    excerpt:
      "Get ready for our biggest competitive season yet. Weekly tournaments spanning Pokemon, Magic: The Gathering, and Super Smash Bros. with over $5,000 in prizes.",
    date: "April 5, 2026",
    author: "Jason Mitchell",
    category: "News" as const,
    readTime: "4 min read",
    image: "/images/magaza-musteriler.jpeg",
  },
  {
    id: 6,
    title: "Xbox Series X vs PS5: Which Console Wins in 2026?",
    excerpt:
      "With both consoles now in their stride, we compare game libraries, performance, online services, and value to help you decide.",
    date: "March 28, 2026",
    author: "Marcus Rivera",
    category: "Review" as const,
    readTime: "10 min read",
    image: "/images/magaza-urunler-1.jpeg",
  },
  {
    id: 7,
    title: "Magic: The Gathering - Building Your First Commander Deck",
    excerpt:
      "Commander is the most popular MTG format for a reason. This beginner-friendly guide walks you through building a fun and competitive deck from scratch.",
    date: "March 20, 2026",
    author: "Sarah Chen",
    category: "Guide" as const,
    readTime: "9 min read",
    image: "/images/magaza-urunler-2.jpeg",
  },
  {
    id: 8,
    title: "New Store Expansion: Game Core Doubles Its Floor Space",
    excerpt:
      "We're thrilled to announce our Palmdale location is expanding with a dedicated TCG arena, retro gaming lounge, and a new product wing opening this summer.",
    date: "March 14, 2026",
    author: "Jason Mitchell",
    category: "News" as const,
    readTime: "3 min read",
    image: "/images/magaza-genel-1.jpeg",
  },
];

const categoryColors: Record<string, string> = {
  News: "bg-cyan-500/20 text-cyan-400",
  Review: "bg-purple-500/20 text-purple-400",
  Guide: "bg-green-500/20 text-green-400",
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = posts.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Blog
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            News, reviews, and guides from the Game Core team. Stay up to date
            with the latest in gaming culture.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredPosts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group rounded-2xl bg-gray-900/50 border border-gray-800 overflow-hidden hover:border-purple-500/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-[4/3] relative bg-gray-800">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <span
                      className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium ${categoryColors[post.category]}`}
                    >
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-800">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <BookOpen className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
