"use client";
import React, { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import Link from "next/link";


export default function HeroSection() {
  const t = useTranslations("HeroSection");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [interest, setInterest] = useState<"renter" | "lender" | "both">("lender"); // default lending
  const [appLaunchConsent, setAppLaunchConsent] = useState(true);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email || !name) return;
    
    // Validate required consent
    if (!appLaunchConsent) {
      setError(t('form.consentRequired'));
      return;
    }

    setLoading(true);
    
    // TODO: Update when base44 is ready
    // await base44.entities.WaitlistSignup.create({ 
    //   email, 
    //   phone, 
    //   name, 
    //   interest,
    //   appLaunchConsent,
    //   marketingConsent,
    //   timestamp: new Date().toISOString(),
    // });
    
    toast.success(t("toastSuccess"));
    setEmail("");
    setPhone("");
    setName("");
    setAppLaunchConsent(false);
    setMarketingConsent(false);
    setLoading(false);
  };


  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-8 relative overflow-hidden">
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
              {t("badgeText")}
            </span>
          </div>


          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] tracking-tight leading-[1.1] mb-6">
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
          <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
            {t("subheadlinePart1")}
            <span className="text-[#1A1A1A] font-medium"> {t("subheadlinePart2")}</span>
          </p>


          {/* Waitlist Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0 mb-6">
            <input
              type="text"
              placeholder={t("formPlaceholderName")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="h-12 px-5 text-base border-2 border-gray-200 focus:border-[#1A1A1A] rounded-full bg-white outline-none transition-colors"
            />


            <input
              type="email"
              placeholder={t("formPlaceholderEmail")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 px-5 text-base border-2 border-gray-200 focus:border-[#1A1A1A] rounded-full bg-white outline-none transition-colors"
            />
            
            {/* Interest buttons */}
            <div className="flex gap-2 w-full py-1">
              {[
                { value: "renter", label: t("interestButtonRent") },
                { value: "lender", label: t("interestButtonLend") },
                { value: "both", label: t("interestButtonBoth") }
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setInterest(option.value as any)}
                  className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    interest === option.value
                      ? "bg-[#FFC843] text-[#1A1A1A]"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>


            {/* Consent Checkboxes */}
            <div className="text-left space-y-3 bg-gray-50 p-4 rounded-2xl border-2 border-gray-100">
              <label className="flex items-start gap-3 text-[11px] text-gray-700">
                <input
                  type="checkbox"
                  checked={appLaunchConsent}
                  onChange={(e) => setAppLaunchConsent(e.target.checked)}
                  required
                  className="mt-1 w-4 h-4 accent-[#FFC843] flex-shrink-0"
                />
                <span>
                  {t('form.appLaunchConsent')}{" "}
                  <Link href="/datenschutz" className="text-[#F68B28] hover:underline">
                    {t('form.privacyLink')}
                  </Link>
                  <span className="text-[#F68B28] ml-1">*</span>
                </span>
              </label>

              <label className="flex items-start gap-3 text-[11px] text-gray-700">
                <input
                  type="checkbox"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-[#FFC843] flex-shrink-0"
                />
                <span>{t('form.marketingConsent')}</span>
              </label>
            </div>


            {/* Error Message */}
            {error && (
              <p className="text-red-600 bg-red-50 px-4 py-2 rounded-full text-sm text-center border-2 border-red-200">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading || !appLaunchConsent}
              className="w-full h-14 bg-[#F68B28] hover:bg-[#e07a1f] text-white rounded-full text-lg font-semibold transition-all hover:scale-[1.02] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? t("buttonJoining") : t("buttonJoinWaitlist")}
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-xs text-gray-500 text-center">
              {t('form.requiredNote')}
            </p>
          </form>


          <p className="text-sm text-gray-500 mb-6">{t("waitlistCountText")}</p>


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
        </div>


        {/* Right Side - Phone Mockup Image */}
        <div className="flex-shrink-0 hidden lg:block">
          <div className="relative">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692723a092e75b6d98e7c6e5/755531a16_image.png"
              alt="Relengo App Preview"
              className="w-[340px] h-auto drop-shadow-2xl"
            />
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#FFC843] rounded-full opacity-30 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#54B9D1] rounded-full opacity-30 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
