'use client';
import React, { useState } from "react";
// No imports needed for native HTML
import { ArrowRight, Smartphone, CheckCircle } from "lucide-react";
//import { base44 } from "@/api/base44Client";
import { toast } from "sonner";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("both");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !phone) return;

    setLoading(true);
    //await base44.entities.WaitlistSignup.create({
    // email,
    // name,
    //phone,
    //interest,
    //});
    toast.success("Welcome to the movement! We'll be in touch.");
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-[#FDF8ED] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#FFC843] rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-[#54B9D1] rounded-full opacity-10 blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-[#67B8D5] rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="bg-[#C7E7EE] absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10">
            {/* Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-[#FFC843] to-[#F68B28] rounded-2xl flex items-center justify-center mx-auto mb-8 rotate-12 transition-transform hover:rotate-0">
              <Smartphone className="w-10 h-10 text-white -rotate-12" />
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Be first in line
            </h2>
            <p className="text-slate-800 mb-10 mx-auto text-xl max-w-xl">
              Join the waitlist for early access. Get the app before everyone
              else and start sharing in your community.
            </p>

            {submitted ? (
              <div className="flex items-center justify-center gap-3 text-[#54B9D1]">
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg font-medium">
                  You're on the list! Check your inbox.
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 max-w-md mx-auto"
              >
                <input
                  type="text"
                  placeholder="Your name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-14 px-6 text-lg border-0 rounded-full bg-white/10 text-white placeholder:text-gray-500 focus:bg-white/20"
                />

                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-14 px-6 text-lg border-0 rounded-full bg-white/10 text-white placeholder:text-gray-500 focus:bg-white/20"
                />

                <input
                  type="tel"
                  placeholder="Your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="h-14 px-6 text-lg border-0 rounded-full bg-white/10 text-white placeholder:text-gray-500 focus:bg-white/20"
                />

                {/* Interest buttons */}
                <div className="flex gap-3 justify-center py-2">
                  {[
                    { value: "renter", label: "I want to rent" },
                    { value: "lender", label: "I want to lend" },
                    { value: "both", label: "Both!" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setInterest(option.value)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        interest === option.value
                          ? "bg-[#FFC843] text-[#1A1A1A]"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 bg-[#FDD35B] hover:bg-[#FFC843] text-[#1E1E1E] rounded-full text-lg font-semibold transition-all hover:scale-105"
                >
                  {loading ? "Joining..." : "Join the Waitlist"}
                  <ArrowRight className="ml-2 w-5 h-5 inline" />
                </button>
              </form>
            )}

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-10 text-white/80 text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white" />
                Free to join
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white" />
                No spam ever
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white" />
                Early access perks
              </span>
            </div>

            {/* App Store Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on App Store"
                className="opacity-65 h-12 cursor-not-allowed"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="opacity-65 h-12 cursor-not-allowed"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
