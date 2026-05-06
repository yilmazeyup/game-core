"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

type EventCategory = "Tournament" | "Social" | "Launch" | "Workshop";

interface StoreEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  category: EventCategory;
  spotsRemaining: number;
  totalSpots: number;
  weeksOut: number; // 0 = this week, 1-4 = this month, 5+ = later
}

const events: StoreEvent[] = [
  {
    id: 1,
    title: "Pokemon TCG Tournament",
    date: "May 10, 2026",
    time: "2:00 PM - 6:00 PM",
    description:
      "Compete in our weekly Pokemon TCG tournament! Standard format, Swiss rounds. Entry includes 3 booster packs. Top 4 win exclusive promo cards and store credit.",
    category: "Tournament",
    spotsRemaining: 12,
    totalSpots: 32,
    weeksOut: 0,
  },
  {
    id: 2,
    title: "Magic: The Gathering Friday Night",
    date: "May 9, 2026",
    time: "6:00 PM - 10:00 PM",
    description:
      "Friday Night Magic is back! Draft format this week. $15 entry fee includes 3 draft packs. Prizes for top finishers. All skill levels welcome.",
    category: "Tournament",
    spotsRemaining: 6,
    totalSpots: 24,
    weeksOut: 0,
  },
  {
    id: 3,
    title: "Board Game Night",
    date: "May 8, 2026",
    time: "5:00 PM - 9:00 PM",
    description:
      "Join us for a casual evening of board games! We'll have Catan, Ticket to Ride, Wingspan, and more set up. Free to attend. Snacks and drinks available for purchase.",
    category: "Social",
    spotsRemaining: 20,
    totalSpots: 30,
    weeksOut: 0,
  },
  {
    id: 4,
    title: "Console Launch Party: New Titles Drop",
    date: "May 16, 2026",
    time: "9:00 PM - 12:00 AM",
    description:
      "Celebrate the biggest game releases of the month! Be among the first to pick up your pre-orders. Free pizza, giveaways, and demo stations all night.",
    category: "Launch",
    spotsRemaining: 35,
    totalSpots: 50,
    weeksOut: 2,
  },
  {
    id: 5,
    title: "Retro Gaming Night",
    date: "May 22, 2026",
    time: "6:00 PM - 10:00 PM",
    description:
      "Travel back in time with classic consoles! NES, SNES, N64, Sega Genesis, and more will be set up for free play. Retro game trivia with prizes throughout the night.",
    category: "Social",
    spotsRemaining: 18,
    totalSpots: 25,
    weeksOut: 3,
  },
  {
    id: 6,
    title: "TCG Deck Building Workshop",
    date: "May 17, 2026",
    time: "1:00 PM - 3:00 PM",
    description:
      "New to trading card games? Join our beginner-friendly workshop and learn deck building fundamentals for Pokemon and Magic: The Gathering. Free starter deck included.",
    category: "Workshop",
    spotsRemaining: 8,
    totalSpots: 16,
    weeksOut: 2,
  },
  {
    id: 7,
    title: "Super Smash Bros. Ultimate Tournament",
    date: "May 31, 2026",
    time: "3:00 PM - 8:00 PM",
    description:
      "Prove you're the best Smash player in Palmdale! Double elimination bracket, best of 3 sets. $10 entry fee. $200 prize pool plus exclusive Game Core merch for winners.",
    category: "Tournament",
    spotsRemaining: 24,
    totalSpots: 64,
    weeksOut: 4,
  },
  {
    id: 8,
    title: "Miniature Painting Workshop",
    date: "June 7, 2026",
    time: "11:00 AM - 2:00 PM",
    description:
      "Learn the art of miniature painting! All materials provided. Our expert painter will walk you through techniques from basecoating to highlighting. Take your finished mini home.",
    category: "Workshop",
    spotsRemaining: 4,
    totalSpots: 12,
    weeksOut: 5,
  },
];

const filters = ["This Week", "This Month", "All"];

const categoryColors: Record<EventCategory, string> = {
  Tournament: "bg-red-500/20 text-red-400",
  Social: "bg-cyan-500/20 text-cyan-400",
  Launch: "bg-purple-500/20 text-purple-400",
  Workshop: "bg-green-500/20 text-green-400",
};

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredEvents = events.filter((e) => {
    if (activeFilter === "This Week") return e.weeksOut === 0;
    if (activeFilter === "This Month") return e.weeksOut <= 4;
    return true;
  });

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
              Events
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            Tournaments, game nights, workshops, and launch parties. There's
            always something happening at Game Core.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === f
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {filteredEvents.map((event, i) => {
                const spotsPercent =
                  (event.spotsRemaining / event.totalSpots) * 100;
                const spotsColor =
                  spotsPercent <= 25
                    ? "text-red-400"
                    : spotsPercent <= 50
                    ? "text-yellow-400"
                    : "text-green-400";

                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-2xl bg-gray-900/50 border border-gray-800 overflow-hidden hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <h3 className="text-lg font-semibold text-white">
                          {event.title}
                        </h3>
                        <span
                          className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-medium ${categoryColors[event.category]}`}
                        >
                          {event.category}
                        </span>
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed mb-5">
                        {event.description}
                      </p>

                      <div className="space-y-2.5 text-sm">
                        <div className="flex items-center gap-2.5 text-gray-300">
                          <Calendar className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-gray-300">
                          <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-gray-300">
                          <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                          <span>Game Core, Palmdale, CA</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Users className="w-4 h-4 text-purple-400 shrink-0" />
                          <span className={spotsColor}>
                            {event.spotsRemaining} of {event.totalSpots} spots
                            remaining
                          </span>
                        </div>
                      </div>

                      {/* Spots bar */}
                      <div className="mt-4 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-purple-500 rounded-full transition-all"
                          style={{
                            width: `${100 - spotsPercent}%`,
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filteredEvents.length === 0 && (
            <div className="text-center py-20">
              <Calendar className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500">
                No events found for this time period.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
