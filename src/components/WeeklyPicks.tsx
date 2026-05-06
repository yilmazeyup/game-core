"use client";

import Image from "next/image";

interface StaffPick {
  gameName: string;
  staffName: string;
  quote: string;
  image: string;
}

const picks: StaffPick[] = [
  {
    gameName: "Elden Ring: Nightreign",
    staffName: "Alex",
    quote:
      "The co-op survival twist on the Elden Ring formula is brilliant. Every session feels fresh and the boss fights are absolutely epic.",
    image: "/products/elden-ring.jpg",
  },
  {
    gameName: "Balatro",
    staffName: "Jordan",
    quote:
      "I can't stop playing this poker roguelike. It's the perfect blend of strategy and luck — five more minutes turns into five more hours.",
    image: "/products/trading-cards.jpg",
  },
  {
    gameName: "Nintendo Switch 2",
    staffName: "Sam",
    quote:
      "The hardware leap is impressive and backward compatibility is a huge win. If you've been waiting to upgrade, now is the time.",
    image: "/products/switch-oled.png",
  },
];

export default function WeeklyPicks() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center">
          This Week&apos;s Staff Picks
        </h2>
        <p className="text-gray-400 text-center mb-10">
          Hand-picked recommendations from our team
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {picks.map((pick) => (
            <div
              key={pick.gameName}
              className="flex flex-col sm:flex-row md:flex-col bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-colors"
            >
              <div className="relative w-full sm:w-48 md:w-full h-48 sm:h-auto md:h-48 shrink-0">
                <Image
                  src={pick.image}
                  alt={pick.gameName}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-5 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-white mb-1">
                  {pick.gameName}
                </h3>
                <p className="text-purple-400 text-sm font-medium mb-3">
                  Picked by {pick.staffName}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  &ldquo;{pick.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
