'use client';
import React, { useState } from 'react';
import { Search, Handshake, Star } from 'lucide-react';
import { useTranslations } from "next-intl";

export default function HowItWorks() {
  const t = useTranslations("HowItWorks");

  // Default should be lending
  const [mode, setMode] = useState<'lending' | 'renting'>('lending'); // [web:86]

  const baseSteps = [
    { icon: Search, color: "#FFC843", number: "01" },
    { icon: Handshake, color: "#F68B28", number: "02" },
    { icon: Star, color: "#54B9D1", number: "03" }
  ];

  // Pick which steps to show based on toggle
  const translatedSteps =
    mode === 'lending' ? t.raw('stepsLending') : t.raw('stepsRenting'); // [web:86]

  const steps = baseSteps.map((baseStep, index) => ({
    ...baseStep,
    title: translatedSteps[index].title,
    description: translatedSteps[index].description
  }));

  return (
    <section className="py-24 px-6 bg-white" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-[#F68B28] tracking-wide uppercase">
            {t('subtitle')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-4 mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('description')}
          </p>

          {/* Toggle */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-full bg-gray-100 p-1"> {/* [web:75] */}
              <button
                type="button"
                onClick={() => setMode('lending')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  mode === 'lending' ? 'bg-white text-[#1A1A1A] shadow' : 'text-gray-600'
                }`}
              >
                {t('toggleLending')}
              </button>
              <button
                type="button"
                onClick={() => setMode('renting')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  mode === 'renting' ? 'bg-white text-[#1A1A1A] shadow' : 'text-gray-600'
                }`}
              >
                {t('toggleRenting')}
              </button>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group flex h-full">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-[2px] bg-gray-100" />
              )}

             <div className="relative bg-[#FDF8ED] rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 w-full h-full flex flex-col justify-between">
                {/* Number */}
                <span
                  className="bg-transparent text-6xl font-bold absolute -top-6 -right-4"
                  style={{ color: step.color }}
                >
                  {step.number}
                </span>

                {/* Content Wrapper */}
                  <div className="flex flex-col h-full">
                    {/* Header: Icon + Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${step.color}30` }}
                      >
                        <step.icon className="w-7 h-7" style={{ color: step.color }} />
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A]">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {step.description}
                    </p>
                  </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
