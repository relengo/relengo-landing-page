'use client';
import React from "react";
import { Leaf, Wallet, Users, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";


const baseBenefits = [
  {
    icon: Wallet,
    color: "#FFC843",
  },
  {
    icon: Leaf,
    color: "#54B9D1",
  },
  {
    icon: Users,
    color: "#F5A4B8",
  },
  {
    icon: ShieldCheck, // Using ShieldCheck as default, assuming it's the desired icon
    color: "#F68B28",
  },
];


export default function Benefits() {
  const t = useTranslations("Benefits");
  const translatedBenefits = t.raw('list');


  const benefits = baseBenefits.map((baseBenefit, index) => ({
    ...baseBenefit,
    title: translatedBenefits[index].title,
    description: translatedBenefits[index].description,
    stat: translatedBenefits[index].stat,
  }));


  return (
    <section className="bg-[#F8DEE4] px-3 lg:px-6 py-12 relative overflow-hidden" id='about'>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC843] rounded-full opacity-5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#54B9D1] rounded-full opacity-5 blur-3xl" />


      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[#FFFFF] text-3xl font-semibold uppercase tracking-wide">
            {t('subtitle')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            {t('title')}
          </h2>
          <p className="text-gray-600 mx-auto text-xl max-w-2xl">
            {t('description')}
          </p>
        </div>


        {/* Benefits Grid */}
        <div className="grid grid-cols-2 gap-3 lg:flex lg:overflow-x-auto lg:gap-6 lg:snap-x lg:snap-mandatory" >
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-[#FCF8EC] p-4 lg:p-8 rounded-3xl FCF8EC] group relative backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/70 hover:border-white/100 lg:flex-shrink-0 lg:w-64 lg:snap-center flex flex-col"
            >
            {/* Content */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${benefit.color}20` }}
                >
                  <benefit.icon
                    className="w-7 h-7"
                    style={{ color: benefit.color }}
                  />
                </div>

                <h3 className="text-slate-800 text-base lg:text-xl font-bold">
                  {benefit.title}
                </h3>
              </div>

              <div className="flex-grow">
                <p className="text-gray-800 mb-6 leading-relaxed text-sm lg:text-base">
                  {benefit.description}
                </p>
              </div>

            {/* Stat */}
              <div>
                <div
                  className="inline-block px-2 py-1 rounded-full text-xs lg:text-sm font-semibold"
                  style={{
                    backgroundColor: `${benefit.color}20`,
                    color: benefit.color,
                  }}
                >
                  {benefit.stat}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
