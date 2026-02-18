"use client";
import React from "react";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AppPreview() {
  const t = useTranslations("AppPreview");
  const features = t.raw('features');

  return (
    <section className=" pb-20 px-6 bg-[#FDF8ED]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-[#F68B28] tracking-wide uppercase">
            {t('subtitle')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-4 mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Phone Mockup Image */}
          <div className="relative">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692723a092e75b6d98e7c6e5/755531a16_image.png"
              alt={t('phoneAlt')}
              className="w-[320px] h-auto drop-shadow-2xl"
            />
          </div>

          {/* Features List */}
          <div className="max-w-md space-y-8">
            {features.map((feature: any, index: number) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="text-orange-400 mb-4 text-base font-bold">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {feature.description}
                </p>
                {feature.categories && (
                  <div className="flex gap-3 flex-wrap">
                    {feature.categories.map((cat: string, catIndex: number) => {
                      const icons = ["🔧", "📷", "🎸", "⛺", "⚽", "🎉"];
                      return (
                        <div key={cat} className="flex flex-col items-center">
                          {/* You might want to use the actual icons based on the category */}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
