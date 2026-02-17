"use client";
import React, { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("HeroSection");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !phone || !name) return;

    setLoading(true);
    // await base44.entities.WaitlistSignup.create({ email, phone, name, interest: "both" });
    toast.success(t("toastSuccess"));
    setEmail("");
    setPhone("");
    setName("");
    setLoading(false);
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#FFC843] rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-[#54B9D1] rounded-full opacity-20 blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#F5A4B8] rounded-full opacity-20 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Side - Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-8 border border-gray-100">
            <Sparkles className="w-4 h-4 text-[#F68B28]" />
            <span className="text-sm font-medium text-[#1A1A1A]">
              {t('badgeText')}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] tracking-tight leading-[1.1] mb-6">
            {t('mainHeadlinePart1')}
            <br />
            <span className="relative">
              {t('mainHeadlinePart2')}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 300 12"
                fill="none"
              >
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
          <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
            {t('subheadlinePart1')}
            <span className="text-[#1A1A1A] font-medium">
              {" "}
              {t('subheadlinePart2')}
            </span>
          </p>

          {/* Waitlist Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0 mb-6"
          >
            <input
              type="text"
              placeholder={t('formPlaceholderName')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="h-12 px-5 text-base border-2 border-gray-200 focus:border-[#1A1A1A] rounded-full bg-white outline-none transition-colors"
            />

            {/* <div className="flex flex-col sm:flex-row gap-3"> */}
              <input
                type="email"
                placeholder={t('formPlaceholderEmail')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 px-5 text-base border-2 border-gray-200 focus:border-[#1A1A1A] rounded-full bg-white outline-none transition-colors"
              />

              {/* <input
                type="tel"
                placeholder={t('formPlaceholderPhone')}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="h-12 px-5 text-base border-2 border-gray-200 focus:border-[#1A1A1A] rounded-full bg-white outline-none transition-colors"
              /> */}
            {/* </div> */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 bg-[#F68B28] hover:bg-[#e07a1f] text-white rounded-full text-lg font-semibold transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? t('buttonJoining') : t('buttonJoinWaitlist')}
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <p className="text-sm text-gray-500 mb-6">
            {t('waitlistCountText')}
          </p>

          {/* App Store Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on App Store"
              className="h-10 opacity-50 cursor-not-allowed"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-10 opacity-50 cursor-not-allowed"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {t.raw('categoryPills').map((cat: string, i: number) => {
              const colors = ["#FFC843", "#54B9D1", "#F68B28", "#F5A4B8"];
              return (
                <span
                  key={cat}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-transform hover:scale-105 cursor-default"
                  style={{
                    backgroundColor: `${colors[i]}20`,
                    color: "#1A1A1A",
                  }}
                >
                  {cat}
                </span>
              );
            })}
          </div>
        </div>

        {/* Right Side - Phone Mockup Image */}
        <div className="flex-shrink-0 hidden lg:block">
          <div className="relative">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692723a092e75b6d98e7c6e5/755531a16_image.png"
              alt="Relengo App Preview"
              className="w-[340px] h-auto drop-shadow-2xl"
            />

            {/* Decorative elements around phone */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#FFC843] rounded-full opacity-30 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#54B9D1] rounded-full opacity-30 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
