'use client';
import React from 'react';
import { Search, Handshake, Star } from 'lucide-react';
import { useTranslations } from "next-intl";

export default function HowItWorks() {
  const t = useTranslations("HowItWorks");

  const baseSteps = [ // Base structure for steps, non-translatable parts
    {
      icon: Search,
      color: "#FFC843",
      number: "01"
    },
    {
      icon: Handshake,
      color: "#F68B28",
      number: "02"
    },
    {
      icon: Star,
      color: "#54B9D1",
      number: "03"
    }
  ];

  const translatedSteps = t.raw('steps'); // Get translated titles and descriptions

  const steps = baseSteps.map((baseStep, index) => ({
    ...baseStep,
    title: translatedSteps[index].title,
    description: translatedSteps[index].description
  }));

  return (
    <section className="py-24 px-6 bg-white" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-sm font-semibold text-[#F68B28] tracking-wide uppercase">{t('subtitle')}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-4 mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) =>
          <div
            key={step.number}
            className="relative group">

              {/* Connector Line */}
              {index < steps.length - 1 &&
            <div className="hidden md:block absolute top-16 left-[60%] w-full h-[2px] bg-gray-100" />
            }
              
              <div className="relative bg-[#FDF8ED] rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                {/* Number */}
                <span className="bg-transparent text-7xl font-bold absolute -top-4 -right-4"

              style={{ color: step.color }}>

                  {step.number}
                </span>
                
                {/* Icon */}
                <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${step.color}30` }}>

                  <step.icon className="w-8 h-8" style={{ color: step.color }} />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}