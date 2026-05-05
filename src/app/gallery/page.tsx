"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

const galleryItems = [
  { id: 1, title: "Store Entrance", src: "/images/magaza-giris-1.png", aspect: "aspect-square" },
  { id: 2, title: "Store Overview", src: "/images/magaza-genel-1.jpeg", aspect: "aspect-[4/3]" },
  { id: 3, title: "Product Displays", src: "/images/magaza-urunler-1.jpeg", aspect: "aspect-[4/3]" },
  { id: 4, title: "Collection Showcases", src: "/images/magaza-genel-2.jpeg", aspect: "aspect-[4/3]" },
  { id: 5, title: "Store Interior", src: "/images/magaza-genel-3.jpeg", aspect: "aspect-[4/3]" },
  { id: 6, title: "Accessories Section", src: "/images/magaza-urunler-2.jpeg", aspect: "aspect-[4/3]" },
  { id: 7, title: "Keychains & Figures", src: "/images/magaza-urunler-3.jpeg", aspect: "aspect-[4/3]" },
  { id: 8, title: "Store Setup", src: "/images/magaza-kurulum.jpeg", aspect: "aspect-[4/3]" },
  { id: 9, title: "Checkout Area", src: "/images/magaza-kasa.jpeg", aspect: "aspect-[4/3]" },
  { id: 10, title: "Game Shelves", src: "/images/oyun-raflari.jpeg", aspect: "aspect-square" },
  { id: 11, title: "Console Display", src: "/images/konsol-vitrini.jpeg", aspect: "aspect-square" },
  { id: 12, title: "Retro Consoles", src: "/images/retro-konsol.jpeg", aspect: "aspect-square" },
  { id: 13, title: "Storefront", src: "/images/magaza-giris-2.png", aspect: "aspect-square" },
  { id: 14, title: "Poster & Art Wall", src: "/images/poster-duvar.jpeg", aspect: "aspect-[4/3]" },
  { id: 15, title: "Card Exhibition", src: "/images/kart-sergi.jpeg", aspect: "aspect-[4/3]" },
  { id: 16, title: "Customers Shopping", src: "/images/magaza-alisveris.jpeg", aspect: "aspect-square" },
  { id: 17, title: "Our Customers", src: "/images/magaza-musteriler.jpeg", aspect: "aspect-square" },
];

export default function GalleryPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedItem = galleryItems.find((g) => g.id === selectedId);

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
              Gallery
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            Snapshots from our store
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid - Masonry-like */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelectedId(item.id)}
                className="break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group relative"
              >
                <div className={`${item.aspect} relative`}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-4">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <h3 className="text-white font-semibold text-lg drop-shadow-lg">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white z-10"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  priority
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-white">{selectedItem.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
