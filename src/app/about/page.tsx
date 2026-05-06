"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Users, Rocket } from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: Rocket,
    title: "Innovation",
    description: "We bring a fresh perspective to the gaming retail industry, setting new standards every day.",
  },
  {
    icon: Shield,
    title: "Trust",
    description: "We earn our customers' trust with 100% original and warranted products.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We take pride in building a passionate community of gaming enthusiasts.",
  },
];

const milestones = [
  { year: "2024", title: "Founded", description: "Game Core launched in Palmdale, CA with a revolutionary approach to gaming retail." },
  { year: "2024", title: "Rapid Growth", description: "Quickly outpaced competitors with our unmatched product selection and customer experience." },
  { year: "2024", title: "Industry Leader", description: "Became the go-to destination for gamers across the Antelope Valley and beyond." },
];


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                About Us
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              Founded in 2024, Game Core brought a brand-new vision to gaming retail.
              With an innovative approach and unmatched product selection, we quickly
              became the leading game store in California, leaving competitors behind.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Game Core was born in 2024 with a simple but powerful idea: gaming retail
                  needed a revolution. While other stores were stuck in the past, we launched
                  with a fresh approach — curating the best products, creating an unbeatable
                  in-store experience, and building a real community around gaming culture.
                </p>
                <p>
                  From collectible cards to retro consoles, the latest video games to exclusive
                  accessories, we offer a massive product portfolio that no competitor can match.
                  Every product we carry is 100% original and warranted, and customer satisfaction
                  is always our top priority.
                </p>
                <p>
                  Since launching in Palmdale, CA, we&apos;ve built a loyal customer base of thousands, and established ourselves as the
                  go-to destination for gaming enthusiasts. This is just the beginning.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/magaza-giris-1.png"
                  alt="Game Core Store"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-400">The values that define who we are</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 text-center hover:border-purple-500/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-5">
                  <val.icon className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{val.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-14"
          >
            Our Journey
          </motion.h2>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-purple-500/20 -translate-x-1/2" />
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block flex-1" />
                <div className="relative z-10 w-8 h-8 rounded-full bg-purple-600 border-4 border-gray-950 shrink-0 md:mx-auto" />
                <div className="flex-1 bg-gray-900/50 border border-gray-800 rounded-xl p-5">
                  <span className="text-purple-400 font-bold text-lg">{m.year}</span>
                  <h3 className="text-white font-semibold mt-1">{m.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
