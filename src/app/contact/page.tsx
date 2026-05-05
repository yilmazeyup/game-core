"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Send } from "lucide-react";

const locations = [
  {
    city: "Palmdale",
    address: "Palmdale, CA",
  },
];

export default function ContactPage() {
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
              Contact
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            Reach out to us for questions, suggestions, or orders.
          </motion.p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-4 p-5 rounded-xl bg-gray-900/50 border border-gray-800"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Email</h3>
                  <a
                    href="mailto:info@ankaenterprises.com"
                    className="text-gray-400 text-sm mt-0.5 hover:text-purple-300 transition-colors"
                  >
                    info@ankaenterprises.com
                  </a>
                </div>
              </motion.div>

              {/* Locations */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-5 rounded-xl bg-gray-900/50 border border-gray-800"
              >
                <h3 className="text-white font-semibold text-sm mb-4">Our Location</h3>
                <div className="space-y-4">
                  {locations.map((loc) => (
                    <div key={loc.city} className="flex gap-3">
                      <MapPin className="w-4 h-4 mt-0.5 text-purple-400 shrink-0" />
                      <div>
                        <p className="text-white text-sm font-medium">{loc.city}</p>
                        <p className="text-gray-400 text-sm">{loc.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-5 rounded-xl bg-gray-900/50 border border-gray-800"
              >
                <h3 className="text-white font-semibold text-sm mb-3">Social Media</h3>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/GameCoreus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 hover:bg-purple-500/20 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Your message has been sent! We'll get back to you shortly.");
                }}
                className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 space-y-5"
              >
                <h2 className="text-xl font-bold text-white mb-2">Send Us a Message</h2>
                <p className="text-gray-400 text-sm mb-6">
                  Fill out the form to reach us. We&apos;ll get back to you as soon as possible.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-300 mb-1.5">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Your email address"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1.5">Subject</label>
                  <select className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-200 focus:outline-none focus:border-purple-500 transition-colors">
                    <option>General Inquiry</option>
                    <option>Product Information</option>
                    <option>Order Tracking</option>
                    <option>Returns / Exchanges</option>
                    <option>Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all shadow-lg shadow-purple-500/25"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
