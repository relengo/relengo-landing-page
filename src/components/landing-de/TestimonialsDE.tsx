"use client";
import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Outdoor-Enthusiastin",
    quote:
      "Ich habe ein Zelt für einen Wochenendtrip geliehen. So einfach und günstig – ich bin begeistert!",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    color: "#FFC843",
  },
  {
    name: "Thomas K.",
    role: "Hobbyfotograf",
    quote:
      "Endlich kann ich teure Objektive testen, bevor ich kaufe. Das ist ein Game-Changer!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    color: "#54B9D1",
  },
  {
    name: "Lisa W.",
    role: "Heimwerkerin",
    quote:
      "Statt teure Werkzeuge zu kaufen, leihe ich sie jetzt einfach. Spart Geld und Platz!",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    color: "#F68B28",
  },
];

export default function TestimonialsDE() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-[#F68B28] tracking-wide uppercase">
            Erfahrungen
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-4 mb-6">
            Was unsere Nutzer sagen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Echte Geschichten von Menschen, die Relengo lieben.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-[#FDF8ED] rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Quote */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#FFC843] text-[#FFC843]"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-[#1A1A1A]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              {/* Accent line */}
              <div
                className="w-16 h-1 rounded-full mt-6"
                style={{ backgroundColor: testimonial.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
