"use client";

import { useState, type FormEvent } from "react";
import { Mail, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 sm:p-10">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Mail className="w-6 h-6 text-purple-400" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Stay in the Loop
          </h2>
          <p className="text-gray-400 mb-6">
            Get the latest deals and gaming news delivered straight to your
            inbox.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-green-400 py-3">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">
                Thanks for subscribing! Check your inbox soon.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-colors shrink-0 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
