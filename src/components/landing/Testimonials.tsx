"use client";
import React from "react";
import { Star, Quote } from "lucide-react";
import { useTranslations } from "next-intl";

const baseTestimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    color: "#FFC843",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    color: "#54B9D1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    color: "#F5A4B8",
  },
];

export default function Testimonials() {
  const t = useTranslations("Testimonials");
  const translatedTestimonials = t.raw('list');

  const testimonials = baseTestimonials.map((baseTestimonial, index) => ({
    ...baseTestimonial,
    name: translatedTestimonials[index].name,
    role: translatedTestimonials[index].role,
    quote: translatedTestimonials[index].quote,
  }));

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-[#F5A4B8] tracking-wide uppercase">
            {t('subtitle')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-4 mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="relative group">
              <div className="bg-[#FDF8ED] rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                {/* Quote Icon */}
                <Quote
                  className="w-10 h-10 mb-6 opacity-30"
                  style={{ color: testimonial.color }}
                />

                {/* Quote */}
                <p className="text-lg text-[#1A1A1A] leading-relaxed mb-8">
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
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-white"
                  />
                  <div>
                    <h4 className="font-bold text-[#1A1A1A]" >
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              {/* Accent line */}
              <div
                className="absolute top-0 left-8 right-8 h-1 rounded-full transition-all duration-300 group-hover:left-0 group-hover:right-0"
                style={{ backgroundColor: testimonial.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
