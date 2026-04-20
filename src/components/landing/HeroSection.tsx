"use client";
import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("HeroSection");

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#FCF8EC] flex items-center overflow-hidden">

      {/* Decorative background blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#FDD35B]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#F1A8B9]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-2 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left / Center on mobile — Text Content */}
        <div className="flex flex-col items-center text-center md:items-center md:text-center gap-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm font-medium text-gray-600 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#F57B10]" />
            {t("badgeText")}
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#1A1A1A] tracking-tight leading-[1.1] mb-6">
            {t("mainHeadlinePart1")}
            <br />
            <span className="relative">
              {t("mainHeadlinePart2")}
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                <path
                  d="M2 10C50 2 100 2 150 6C200 10 250 10 298 4"
                  stroke="#FFC843"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="text-[#F68B28]">.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            {t("subheadlinePart1")}{" "}
            <strong>{t("subheadlinePart2")}</strong>
          </p>

          {/* CTA Button + social proof */}
          <div className="flex flex-col items-center md:items-center gap-4 w-full">
            <button
              onClick={scrollToWaitlist}
              className="bg-[#F57B10] hover:bg-[#E46C02] text-white rounded-full px-14 py-3.5 font-semibold text-base transition-colors inline-flex items-center gap-2 shadow-md"
            >
              {t("buttonJoinWaitlist")}
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-sm text-gray-400">{t("waitlistCountText")}</p>
          </div>

          {/* Trust pills — mobile only */}
          <div className="flex flex-row justify-center gap-2 w-full md:hidden mt-2">
            <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2 shadow-sm text-xs font-medium text-[#1E1E1E]">
              🔒 Insured rentals
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2 shadow-sm text-xs font-medium text-[#1E1E1E]">
              ✅ Verified users
            </div>
          </div>
          {/* App Store Badges */}
          <div className="flex items-center gap-2">
            <Image
              src="/app_store.svg"
              alt="Download on App Store"
              width={200}
              height={60}
              className="opacity-50 cursor-not-allowed"
            />
            <Image
              src="/playstore.svg"
              alt="Get it on Google Play"
              width={170}
              height={50}
              className="opacity-50 cursor-not-allowed"
            />
          </div>

        </div>
       

        {/* Right Side — Phone Mockup, desktop only */}
        <div className="hidden md:flex justify-center items-center">
          <Image
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692723a092e75b6d98e7c6e5/755531a16_image.png"
            alt="Relengo App"
            width={320}
            height={650}
            className="w-auto max-h-[650px] object-contain drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}
