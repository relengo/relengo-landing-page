'use client';
import React, { useState } from "react";
// No imports needed for native HTML
import { ArrowRight, Smartphone, CheckCircle } from "lucide-react";
//import { base44 } from "@/api/base44Client";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export default function FinalCTA() {
  const t = useTranslations("FinalCTA");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("both");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !phone) return;

    setLoading(true);
    //await base44.entities.WaitlistSignup.create({
    // email,
    // name,
    //phone,
    //interest,
    //});
    toast.success(t('toastSuccess'));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section className="py-14 px-6 bg-gradient-to-b from-white to-[#FDF8ED] relative overflow-hidden" id="waitlist" >
      {/* Decorative elements */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#FFC843] rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-[#54B9D1] rounded-full opacity-10 blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-[#67B8D5] rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="bg-[#C7E7EE] absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-20">
            {/* Logo */}
              <a href="/" className="flex items-center justify-center">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692723a092e75b6d98e7c6e5/4228a2497_relengo_logo_logo_1.png"
                  alt="Relengo"
                  className="h-13 w-20"
                />
              </a>

            {/* Headline */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 mt-4">
              {t('headline')}
            </h2>
            <p className="text-slate-800 mb-10 mx-auto text-base max-w-xl">
              {t('description')}
            </p>

            {submitted ? (
              <div className="flex items-center justify-center gap-3 text-[#54B9D1]">
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg font-medium">
                  {t('submittedMessage')}
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 max-w-md mx-auto"
              >
                <input
                  type="text"
                  placeholder={t('formPlaceholderName')}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-14 px-6 text-lg border-0 rounded-full bg-white/50 text-slate-800 placeholder:text-gray-500 focus:bg-white/20"

                />

                <input
                  type="email"
                  placeholder={t('formPlaceholderEmail')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-14 px-6 text-lg border-0 rounded-full bg-white/50 text-slate-800 placeholder:text-gray-500 focus:bg-white/20"

                />

                {/* <input
                  type="tel"
                  placeholder={t('formPlaceholderPhone')}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="h-14 px-6 text-lg border-0 rounded-full bg-white/50 text-white placeholder:text-gray-500 focus:bg-white/20"
                /> */}

                {/* Interest buttons */}
                <div className="flex gap-3 justify-center py-2">
                  {[
                    { value: "renter", label: t('interestButtonRent') },
                    { value: "lender", label: t('interestButtonLend') },
                    { value: "both", label: t('interestButtonBoth') },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setInterest(option.value)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        interest === option.value
                          ? "bg-[#FFC843] text-[#1A1A1A]"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 bg-[#FDD35B] hover:bg-[#FFC843] text-[#1E1E1E] rounded-full text-lg font-semibold transition-all hover:scale-105"
                >
                  {loading ? t('joiningButton') : t('joinWaitlistButton')}
                  <ArrowRight className="ml-2 w-5 h-5 inline" />
                </button>
              </form>
            )}

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-10 text-white/80 text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white" />
                {t('trustSignalFree')}
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white" />
                {t('trustSignalNoSpam')}
              </span>
              {/* <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-white" />
                {t('trustSignalEarlyAccess')}
              </span> */}
            </div>

            {/* App Store Badges */}
            <div className="flex justify-center gap-4 mt-8">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt={t('appStoreAlt')}
                className="opacity-65 h-12 cursor-not-allowed"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt={t('googlePlayAlt')}
                className="opacity-65 h-12 cursor-not-allowed"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
