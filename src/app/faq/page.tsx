"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const faqSections: FAQSection[] = [
  {
    title: "Shopping",
    items: [
      {
        question: "What is your return policy?",
        answer:
          "We offer a 30-day return policy on all unopened products in their original packaging. Opened items can be exchanged within 14 days if they are defective. Please bring your receipt or order confirmation for all returns and exchanges.",
      },
      {
        question: "Do you offer price matching?",
        answer:
          "Yes! We price match against major retailers including Amazon, Best Buy, and GameStop. Simply show us the current listing at checkout, and we'll match the price. The item must be identical, in stock at the competitor, and sold directly by the retailer (not third-party sellers).",
      },
      {
        question: "Can I pre-order upcoming games and consoles?",
        answer:
          "Absolutely. We accept pre-orders on all major upcoming releases. A $5 deposit is required to secure your pre-order, which is applied to your final purchase. Pre-order customers get priority pickup on launch day and occasionally receive exclusive bonuses.",
      },
      {
        question: "Do you buy or accept trade-ins?",
        answer:
          "Yes, we accept trade-ins on consoles, games, and accessories. Trade-in values depend on the item's condition, demand, and current market prices. Bring your items to the store for a free evaluation. You can choose store credit (which gives you 20% more value) or cash.",
      },
    ],
  },
  {
    title: "Products",
    items: [
      {
        question: "Are all your products original and warranted?",
        answer:
          "100%. Every product we sell is authentic and comes with the manufacturer's warranty. We never sell refurbished items as new. For pre-owned products, we clearly label them and provide our own 90-day store warranty.",
      },
      {
        question: "Do you sell trading cards like Pokemon and Magic: The Gathering?",
        answer:
          "Yes, we carry a huge selection of TCG products including sealed booster boxes, packs, elite trainer boxes, and singles for Pokemon, Magic: The Gathering, Yu-Gi-Oh!, and more. We also have card sleeves, deck boxes, playmats, and other accessories.",
      },
      {
        question: "Do you offer console repair services?",
        answer:
          "We offer repair services for most major consoles including PlayStation, Xbox, and Nintendo Switch. Common repairs include disc drive replacements, HDMI port fixes, controller stick drift repair, and general cleaning. Turnaround time is typically 3-5 business days.",
      },
      {
        question: "Do you carry retro gaming products?",
        answer:
          "We have a dedicated retro gaming section with classic consoles (NES, SNES, N64, Sega Genesis, PS1/PS2, and more), retro game cartridges, and vintage accessories. Availability changes frequently, so visit us or call ahead to check specific items.",
      },
    ],
  },
  {
    title: "Store & Events",
    items: [
      {
        question: "What are your store hours?",
        answer:
          "We're open Monday through Saturday from 10:00 AM to 9:00 PM, and Sunday from 11:00 AM to 7:00 PM. Hours may be extended for special events and game launches. Follow us on social media for the latest updates.",
      },
      {
        question: "Do you host TCG tournaments?",
        answer:
          "Yes! We host weekly Pokemon TCG tournaments every Saturday and Magic: The Gathering events every Friday night. Entry fees vary by event, and prizes include booster packs, store credit, and exclusive promo cards. Check our Events page for the full schedule.",
      },
      {
        question: "Can I rent your event space for a private gaming party?",
        answer:
          "Yes, our event area is available for private bookings on select evenings. We can accommodate birthday parties, team-building events, and gaming meetups for up to 30 people. Packages include console setups, seating, and optional catering. Contact us for pricing and availability.",
      },
      {
        question: "Do you have a loyalty or rewards program?",
        answer:
          "Yes! Our Game Core Rewards program is free to join. You earn 1 point for every dollar spent, and 100 points gets you a $5 reward. Members also get early access to sales, exclusive event invitations, and a 10% birthday discount. Sign up at the register or on our website.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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
              FAQ
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            Got questions? We have answers. Find everything you need to know
            about shopping, products, and events at Game Core.
          </motion.p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqSections.map((section, sIdx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sIdx * 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>

              <div className="space-y-3">
                {section.items.map((item, iIdx) => {
                  const key = `${sIdx}-${iIdx}`;
                  const isOpen = !!openItems[key];

                  return (
                    <div
                      key={key}
                      className="rounded-2xl bg-gray-900/50 border border-gray-800 overflow-hidden hover:border-purple-500/30 transition-all"
                    >
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full flex items-center justify-between gap-4 p-5 text-left"
                      >
                        <span className="text-white font-medium">{item.question}</span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="shrink-0"
                        >
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
