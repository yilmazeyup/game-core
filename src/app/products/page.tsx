"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gamepad2,
  Search,
  LayoutGrid,
  List,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react";
import Image from "next/image";
import { allProducts } from "@/data/products";

const categoryFilters = ["All", "Console", "Collectible", "Game", "Accessory"];

const platformFilters = ["All", "PlayStation", "Xbox", "Nintendo", "PC"];

const platformKeywords: Record<string, string[]> = {
  PlayStation: [
    "playstation",
    "ps5",
    "ps4",
    "ps3",
    "ps2",
    "dualsense",
    "pulse",
    "psvr",
    "playstation vr",
    "playstation portal",
    "playstation classic",
    "playstation stars",
  ],
  Xbox: [
    "xbox",
    "halo",
    "forza",
    "gears",
    "starfield",
    "fable",
    "avowed",
    "xbox elite",
    "xbox wireless",
    "xbox expansion",
    "xbox design lab",
    "xbox stand",
  ],
  Nintendo: [
    "nintendo",
    "switch",
    "zelda",
    "mario",
    "pokemon",
    "splatoon",
    "kirby",
    "metroid",
    "pikmin",
    "luigi",
    "bayonetta",
    "xenoblade",
    "fire emblem",
    "animal crossing",
    "smash bros",
    "amiibo",
    "nes classic",
    "snes classic",
  ],
  PC: [
    "steam deck",
    "rog ally",
    "legion go",
    "msi claw",
    "razer",
    "corsair",
    "steelseries",
    "hyperx",
    "logitech g",
    "keyboard",
    "mouse",
    "gaming desk",
    "gaming chair",
    "elgato",
    "blue yeti",
    "nanoleaf",
    "govee",
    "webcam",
  ],
};

const sortOptions = [
  { value: "default", label: "Default" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A-Z" },
  { value: "name-desc", label: "Name: Z-A" },
];

const ITEMS_PER_PAGE = 24;

function parsePrice(price: string): number {
  return parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
}

function getPriceRange() {
  const prices = allProducts.map((p) => parsePrice(p.price));
  return { min: Math.floor(Math.min(...prices)), max: Math.ceil(Math.max(...prices)) };
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activePlatform, setActivePlatform] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const priceRange = useMemo(() => getPriceRange(), []);
  const [minPrice, setMinPrice] = useState(priceRange.min);
  const [maxPrice, setMaxPrice] = useState(priceRange.max);

  const matchesPlatform = useCallback(
    (name: string, platform: string): boolean => {
      if (platform === "All") return true;
      const keywords = platformKeywords[platform] || [];
      const lower = name.toLowerCase();
      return keywords.some((kw) => lower.includes(kw));
    },
    [],
  );

  const filteredAndSorted = useMemo(() => {
    let result = allProducts.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPlatformFilter = matchesPlatform(p.name, activePlatform);
      const price = parsePrice(p.price);
      const matchesPrice = price >= minPrice && price <= maxPrice;
      return matchesCategory && matchesSearch && matchesPlatformFilter && matchesPrice;
    });

    if (sortBy === "price-asc") {
      result = [...result].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else if (sortBy === "name-asc") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      result = [...result].sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [activeCategory, activePlatform, searchQuery, sortBy, minPrice, maxPrice, matchesPlatform]);

  const totalPages = Math.max(1, Math.ceil(filteredAndSorted.length / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredAndSorted.length);
  const paginatedProducts = filteredAndSorted.slice(startIndex, endIndex);

  const resetPage = () => setCurrentPage(1);

  const getPageNumbers = (): (number | "...")[] => {
    const pages: (number | "...")[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (safePage > 3) pages.push("...");
      const start = Math.max(2, safePage - 1);
      const end = Math.min(totalPages - 1, safePage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (safePage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Row 1: Category filters + Search */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categoryFilters.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    resetPage();
                  }}
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
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  resetPage();
                }}
                className="w-full sm:w-64 pl-10 pr-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
          </div>

          {/* Row 2: Platform filters */}
          <div className="flex flex-wrap gap-2">
            <span className="flex items-center text-sm text-gray-500 mr-1">
              <Gamepad2 className="w-4 h-4 mr-1" />
              Platform:
            </span>
            {platformFilters.map((platform) => (
              <button
                key={platform}
                onClick={() => {
                  setActivePlatform(platform);
                  resetPage();
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activePlatform === platform
                    ? "bg-cyan-600 text-white"
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {platform}
              </button>
            ))}
          </div>

          {/* Row 3: Price range + Sort + View toggle */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Price range */}
            <div className="flex items-center gap-3 flex-wrap">
              <SlidersHorizontal className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-500">Price:</span>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={priceRange.min}
                  max={maxPrice}
                  value={minPrice}
                  onChange={(e) => {
                    setMinPrice(Number(e.target.value));
                    resetPage();
                  }}
                  className="w-20 px-2 py-1.5 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-200 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <span className="text-gray-500 text-sm">-</span>
                <input
                  type="number"
                  min={minPrice}
                  max={priceRange.max}
                  value={maxPrice}
                  onChange={(e) => {
                    setMaxPrice(Number(e.target.value));
                    resetPage();
                  }}
                  className="w-20 px-2 py-1.5 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-200 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <input
                type="range"
                min={priceRange.min}
                max={priceRange.max}
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(Number(e.target.value));
                  resetPage();
                }}
                className="w-32 accent-purple-500 cursor-pointer"
              />
              <span className="text-xs text-gray-500">
                ${minPrice} - ${maxPrice}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  resetPage();
                }}
                className="px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-200 focus:outline-none focus:border-purple-500 transition-colors cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>

              {/* View toggle */}
              <div className="flex bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 transition-colors ${
                    viewMode === "grid"
                      ? "bg-purple-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  aria-label="Grid view"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 transition-colors ${
                    viewMode === "list"
                      ? "bg-purple-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <div className="mb-4 text-sm text-gray-500">
            Showing {filteredAndSorted.length > 0 ? startIndex + 1 : 0}-{endIndex} of{" "}
            {filteredAndSorted.length} products
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + activePlatform + searchQuery + sortBy + safePage + viewMode}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "flex flex-col gap-4"
              }
            >
              {paginatedProducts.map((product, i) =>
                viewMode === "grid" ? (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    whileHover={{
                      scale: 1.03,
                      rotateY: 2,
                      rotateX: -2,
                      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.15)",
                    }}
                    className="group rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden hover:border-purple-500/30 transition-all duration-300 cursor-pointer"
                    style={{ perspective: 800 }}
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
                ) : (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                    whileHover={{
                      scale: 1.01,
                      boxShadow: "0 10px 30px rgba(139, 92, 246, 0.12)",
                    }}
                    className="group flex rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden hover:border-purple-500/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-40 sm:w-56 h-32 sm:h-40 relative bg-gray-800 flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="224px"
                      />
                      <span className="absolute top-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                        {product.badge}
                      </span>
                    </div>
                    <div className="p-4 sm:p-5 flex flex-col justify-center flex-1 min-w-0">
                      <span className="text-xs text-purple-400 font-medium uppercase tracking-wide">
                        {product.category}
                      </span>
                      <h3 className="text-white font-semibold mt-1 mb-1 group-hover:text-purple-300 transition-colors truncate">
                        {product.name}
                      </h3>
                      <p className="text-gray-500 text-sm mb-2 hidden sm:block">
                        {product.category === "Console"
                          ? "Gaming console ready to play"
                          : product.category === "Game"
                            ? "Video game title"
                            : product.category === "Collectible"
                              ? "Collectible trading card product"
                              : "Gaming accessory and peripheral"}
                      </p>
                      <div className="text-lg font-bold text-cyan-400">{product.price}</div>
                    </div>
                  </motion.div>
                ),
              )}
            </motion.div>
          </AnimatePresence>

          {filteredAndSorted.length === 0 && (
            <div className="text-center py-20">
              <Gamepad2 className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500">No products found matching your criteria.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={safePage <= 1}
                className="flex items-center gap-1 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-300 hover:bg-gray-800 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              <div className="flex items-center gap-1">
                {getPageNumbers().map((page, idx) =>
                  page === "..." ? (
                    <span key={`ellipsis-${idx}`} className="px-2 py-2 text-gray-500 text-sm">
                      ...
                    </span>
                  ) : (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page as number)}
                      className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                        safePage === page
                          ? "bg-purple-600 text-white"
                          : "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}
              </div>

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={safePage >= totalPages}
                className="flex items-center gap-1 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-300 hover:bg-gray-800 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
