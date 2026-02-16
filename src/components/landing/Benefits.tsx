'use client';
import React from "react";
import { Leaf, Wallet, Users, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Save Money",
    description:
      "Why buy something you'll use twice? Rent it for a fraction of the cost.",
    stat: "Save up to 90%",
    color: "#FFC843",
  },
  {
    icon: Leaf,
    title: "Live Sustainably",
    description:
      "Reduce waste and environmental impact by sharing resources in your community.",
    stat: "Less waste",
    color: "#54B9D1",
  },
  {
    icon: Users,
    title: "Build Community",
    description:
      "Connect with neighbors, share skills, and strengthen local bonds.",
    stat: "Real connections",
    color: "#F5A4B8",
  },
  {
    icon: ShieldCheck,
    title: "Stay Protected",
    description:
      "Every rental is backed by our protection policy for peace of mind.",
    stat: "100% secure",
    color: "#F68B28",
  },
];

export default function Benefits() {
  return (
    <section className="bg-[#F8DEE4] px-6 py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC843] rounded-full opacity-5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#54B9D1] rounded-full opacity-5 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[#FFFFF] text-3xl font-semibold uppercase tracking-wide">
            WHY RELENGO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            A better way to access
          </h2>
          <p className="text-gray-600 mx-auto text-xl max-w-2xl">
            Relengo isn't just an app—it's a movement toward smarter, more
            connected living.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-[#FCF8EC] p-8 rounded-3xl FCF8EC] group relative backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${benefit.color}20` }}
              >
                <benefit.icon
                  className="w-7 h-7"
                  style={{ color: benefit.color }}
                />
              </div>

              {/* Content */}
              <h3 className="text-slate-800 mb-3 text-xl font-bold">
                {benefit.title}
              </h3>
              <p className="text-gray-800 mb-6 leading-relaxed">
                {benefit.description}
              </p>

              {/* Stat */}
              <div
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: `${benefit.color}20`,
                  color: benefit.color,
                }}
              >
                {benefit.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
