"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, Search } from "lucide-react";
import Image from "next/image";

const allProducts = [
  // Consoles
  { id: 1, name: "PlayStation 5 Pro", category: "Console", price: "$499", badge: "New", image: "/products/ps5.png" },
  { id: 2, name: "Xbox Series X", category: "Console", price: "$499", badge: "In Stock", image: "/products/xbox-series-x.png" },
  { id: 3, name: "Nintendo Switch OLED", category: "Console", price: "$349", badge: "Popular", image: "/products/switch-oled.png" },
  { id: 4, name: "Steam Deck OLED", category: "Console", price: "$549", badge: "New", image: "/products/steam-deck.png" },
  { id: 5, name: "Retro Mini NES", category: "Console", price: "$59.99", badge: "Retro", image: "/products/nes-classic.jpg" },
  { id: 6, name: "PlayStation 4 Slim", category: "Console", price: "$249", badge: "In Stock", image: "/products/ps4-slim.jpg" },

  // Collectibles
  { id: 7, name: "Pokemon TCG Elite Trainer Box", category: "Collectible", price: "$49.99", badge: "Popular", image: "/products/pokemon-tcg.jpg" },
  { id: 8, name: "Magic: The Gathering Draft Booster", category: "Collectible", price: "$29.99", badge: "Limited", image: "/products/mtg-cards.jpg" },
  { id: 9, name: "Yu-Gi-Oh! Starter Deck", category: "Collectible", price: "$19.99", badge: "In Stock", image: "/products/pokemon-cardback.jpg" },
  { id: 10, name: "Digimon Card Game Booster", category: "Collectible", price: "$14.99", badge: "New", image: "/products/mtg-gameplay.jpg" },
  { id: 11, name: "One Piece TCG Starter Deck", category: "Collectible", price: "$24.99", badge: "Popular", image: "/products/pokemon-tcg.jpg" },
  { id: 12, name: "Lorcana Booster Pack", category: "Collectible", price: "$9.99", badge: "Limited", image: "/products/mtg-cards.jpg" },

  // Games
  { id: 13, name: "GTA VI", category: "Game", price: "$69.99", badge: "Pre-Order", image: "/products/gta-vi.png" },
  { id: 14, name: "Elden Ring DLC", category: "Game", price: "$39.99", badge: "New", image: "/products/elden-ring.jpg" },
  { id: 15, name: "Zelda: Echoes of Wisdom", category: "Game", price: "$59.99", badge: "In Stock", image: "/products/zelda-echoes.jpg" },
  { id: 16, name: "Final Fantasy VII Rebirth", category: "Game", price: "$69.99", badge: "Popular", image: "/products/ff7-rebirth.png" },
  { id: 17, name: "Spider-Man 2", category: "Game", price: "$49.99", badge: "In Stock", image: "/products/spiderman-2.jpeg" },
  { id: 18, name: "Hogwarts Legacy", category: "Game", price: "$39.99", badge: "Sale", image: "/products/hogwarts-legacy.png" },

  // Accessories
  { id: 19, name: "DualSense Edge Controller", category: "Accessory", price: "$199", badge: "Pro", image: "/products/dualsense-edge.jpg" },
  { id: 20, name: "Xbox Elite Controller 2", category: "Accessory", price: "$179", badge: "Pro", image: "/products/xbox-series-x.png" },
  { id: 21, name: "Gaming Headset Pro", category: "Accessory", price: "$89.99", badge: "In Stock", image: "/products/dualsense-edge.jpg" },
  { id: 22, name: "Pro Fight Stick", category: "Accessory", price: "$109", badge: "Limited", image: "/products/dualsense-edge.jpg" },
  { id: 23, name: "Gaming Stand Deluxe", category: "Accessory", price: "$39.99", badge: "In Stock", image: "/products/ps4-slim.jpg" },
  { id: 24, name: "Protective Case Set", category: "Accessory", price: "$12.99", badge: "In Stock", image: "/products/switch-oled.png" },
];

const categoryFilters = ["All", "Console", "Collectible", "Game", "Accessory"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = allProducts.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Products
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            Discover our wide range of consoles, collectible cards, games and accessories.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categoryFilters.map((cat) => (
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
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="group rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden hover:border-purple-500/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-[4/3] relative bg-gray-800">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <span className="absolute top-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                      {product.badge}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-purple-400 font-medium uppercase tracking-wide">
                      {product.category}
                    </span>
                    <h3 className="text-white font-semibold mt-1 mb-2 group-hover:text-purple-300 transition-colors">
                      {product.name}
                    </h3>
                    <div className="text-lg font-bold text-cyan-400">{product.price}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <Gamepad2 className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
