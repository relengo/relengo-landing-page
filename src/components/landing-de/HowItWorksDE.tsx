"use client";
import React from "react";
import { Search, Handshake, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Durchstöbern & Finden",
    description:
      "Entdecke Artikel in deiner Nähe. Filtere nach Kategorie, Preis und Verfügbarkeit.",
    color: "#FFC843",
    number: "01",
  },
  {
    icon: Handshake,
    title: "Verbinden & Vereinbaren",
    description:
      "Kontaktiere den Besitzer direkt. Vereinbart Details und Übergabe.",
    color: "#54B9D1",
    number: "02",
  },
  {
    icon: Star,
    title: "Nutzen & Bewerten",
    description:
      "Genieße dein Erlebnis und teile deine Bewertung mit der Community.",
    color: "#F68B28",
    number: "03",
  },
];

export default function HowItWorksDE() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-[#F68B28] tracking-wide uppercase">
            So funktioniert's
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-4 mb-6">
            So einfach geht's
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            In drei einfachen Schritten leihen oder verleihen – ohne
            Komplikationen.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gray-200" />
              )}

              <div className="bg-[#FDF8ED] rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                {/* Step number */}
                <span
                  className="text-6xl font-bold opacity-10 absolute top-4 right-6"
                  style={{ color: step.color }}
                >
                  {step.number}
                </span>

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${step.color}20` }}
                >
                  <step.icon
                    className="w-8 h-8"
                    style={{ color: step.color }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
