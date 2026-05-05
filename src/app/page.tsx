"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Gamepad2, Package, Star, TrendingUp, ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";

const categories = [
  {
    title: "Collectible Games",
    description: "Rare and valuable collectible cards, board games and TCG products.",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    href: "/products",
  },
  {
    title: "Gaming Consoles",
    description: "PlayStation, Xbox, Nintendo and retro consoles.",
    icon: Gamepad2,
    color: "from-cyan-500 to-blue-500",
    href: "/products",
  },
  {
    title: "Video Games",
    description: "The newest and most popular games, pre-order deals.",
    icon: Package,
    color: "from-green-500 to-emerald-500",
    href: "/products",
  },
];

const featuredProducts = [
  {
    name: "PlayStation 5 Pro",
    category: "Console",
    price: "$499",
    badge: "New",
    image: "/products/ps5-console.jpg",
  },
  {
    name: "Pokemon TCG Elite Box",
    category: "Collectible",
    price: "$49.99",
    badge: "Popular",
    image: "/products/trading-cards.jpg",
  },
  {
    name: "Nintendo Switch OLED",
    category: "Console",
    price: "$349",
    badge: "In Stock",
    image: "/products/switch-oled.png",
  },
  {
    name: "Magic: The Gathering Booster",
    category: "Collectible",
    price: "$29.99",
    badge: "Limited",
    image: "/products/cards-table.jpg",
  },
];

const stats = [
  { label: "Happy Customers", value: "5,000+", icon: Star },
  { label: "Products", value: "2,500+", icon: Package },
  { label: "Since", value: "2024", icon: TrendingUp },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-gray-950 to-cyan-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Welcome to the World of Gaming
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                The Heart of
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Gaming Beats Here
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
            >
              From collectible cards to the newest consoles, retro games to
              limited edition products — the entire gaming world under one roof.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all shadow-lg shadow-purple-500/25"
              >
                Explore Products
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-gray-700 text-gray-300 font-semibold hover:bg-white/5 hover:border-gray-600 transition-all"
              >
                About Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Categories
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Pick the right category for whatever you&apos;re looking for
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={cat.href}
                  className="block group p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                  >
                    <cat.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-14"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Featured Products
              </h2>
              <p className="text-gray-400">Our most popular picks</p>
            </div>
            <Link
              href="/products"
              className="hidden sm:inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 font-medium transition-colors"
            >
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden hover:border-purple-500/30 transition-all duration-300"
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
                  <span className="text-xs text-purple-400 font-medium">
                    {product.category}
                  </span>
                  <h3 className="text-white font-semibold mt-1 mb-2 group-hover:text-purple-300 transition-colors">
                    {product.name}
                  </h3>
                  <div className="text-lg font-bold text-cyan-400">
                    {product.price}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="sm:hidden text-center mt-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 font-medium"
            >
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border border-purple-500/20 p-10 sm:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Visit Our Store
              </h2>
              <p className="text-gray-300 max-w-xl mx-auto mb-8">
                Explore thousands of products in person at our physical store.
                Our expert team will help you find the perfect product.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
              >
                Get in Touch
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
