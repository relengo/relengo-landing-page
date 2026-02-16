'use client';
import React from "react";
import { Leaf, Wallet, Users, Shield } from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Geld sparen",
    description:
      "Warum kaufen, wenn du leihen kannst? Spare hunderte Euro für Dinge, die du nur gelegentlich brauchst.",
    stat: "Spare bis zu 90%",
    color: "#FFC843",
  },
  {
    icon: Leaf,
    title: "Nachhaltiger leben",
    description:
      "Reduziere Konsum und Abfall, indem du teilst. Jede Ausleihe bedeutet ein Produkt weniger, das produziert werden muss.",
    stat: "Umweltfreundlich",
    color: "#54B9D1",
  },
  {
    icon: Users,
    title: "Community aufbauen",
    description:
      "Lerne Menschen in deiner Nachbarschaft kennen. Teilen schafft Vertrauen und Verbindungen.",
    stat: "Lokale Verbindungen",
    color: "#F68B28",
  },
  {
    icon: Shield,
    title: "Sicher & Versichert",
    description:
      "Alle Transaktionen sind geschützt. Leih mit Vertrauen und voller Absicherung.",
    stat: "100% geschützt",
    color: "#F5A4B8",
  },
];

export default function BenefitsDE() {
  return (
    <section className="py-24 px-6 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFC843] rounded-full opacity-5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#54B9D1] rounded-full opacity-5 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-[#FFC843] tracking-wide uppercase">
            Vorteile
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Warum Relengo?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Mehr als nur Leihen – ein neuer Weg zu konsumieren.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${benefit.color}20` }}
              >
                <benefit.icon
                  className="w-7 h-7"
                  style={{ color: benefit.color }}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {benefit.description}
              </p>

              {/* Stat */}
              <span
                className="text-sm font-semibold"
                style={{ color: benefit.color }}
              >
                {benefit.stat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
