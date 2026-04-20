"use client";
import React, { useState } from "react";
import { ArrowRight, CheckCircle, Mail, Building2 } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const CATEGORY_KEYS = [
  "do-it-yourself",
  "event-setup",
  "sports",
  "entertainment",
  "music-production",
  "outdoor-activities",
  "photography",
  "construction-work",
  "travel",
  "other",
];

export default function ForBusiness() {
  const t = useTranslations("ForBusiness");
  const locale = useLocale();
  const categoryLabels: string[] = t.raw("categories");
  const categoryMap = Object.fromEntries(CATEGORY_KEYS.map((key, i) => [key, categoryLabels[i]]));

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const toggleCategory = (key: string) => {
    setSelectedCategories((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!consent) {
      setError(t("form.consentRequired"));
      return;
    }
    setLoading(true);
    try {
      const { getDb } = await import("@/lib/firebase");
      const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");
      const db = getDb();

      await addDoc(collection(db, "businessInquiries"), {
        name,
        email,
        ...(company ? { company } : {}),
        ...(phone ? { phone } : {}),
        ...(selectedCategories.length > 0 ? { categories: selectedCategories } : {}),
        message: message.trim(),
        source: "landing-page",
        consentGiven: consent,
        createdAt: serverTimestamp(),
      });

      setSubmitted(true);
    } catch (err) {
      console.error("business inquiry error:", err);
      setError(t("form.genericError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#FAF7F2] pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC843] rounded-full opacity-10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F57B10] rounded-full opacity-10 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block bg-[#FFC843] text-[#1A1A1A] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            {t("badge")}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
            {t("headline")}
          </h1>
          <p className="text-[#66615D] text-lg max-w-2xl mx-auto leading-relaxed">
            {t("subheadline")}
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">{t("form.title")}</h2>

              {submitted ? (
                <div className="bg-[#FAF7F2] rounded-3xl p-12 text-center">
                  <CheckCircle className="w-14 h-14 text-[#F57B10] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">{t("success.title")}</h3>
                  <p className="text-[#66615D]">{t("success.message")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder={t("form.namePlaceholder")}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-[#FAF7F2] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none focus:border-[#F57B10] focus:bg-white transition"
                    />
                    <input
                      type="text"
                      placeholder={t("form.companyPlaceholder")}
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                      className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-[#FAF7F2] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none focus:border-[#F57B10] focus:bg-white transition"
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder={t("form.emailPlaceholder")}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-[#FAF7F2] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none focus:border-[#F57B10] focus:bg-white transition"
                    />
                    <input
                      type="tel"
                      placeholder={t("form.phonePlaceholder")}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-[#FAF7F2] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none focus:border-[#F57B10] focus:bg-white transition"
                    />
                  </div>

                  {/* Categories */}
                  <div>
                    <p className="text-sm font-semibold text-[#1A1A1A] mb-3">{t("form.categoriesLabel")}</p>
                    <div className="flex flex-wrap gap-2">
                      {CATEGORY_KEYS.map((key) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => toggleCategory(key)}
                          className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                            selectedCategories.includes(key)
                              ? "bg-[#F57B10] border-[#F57B10] text-white"
                              : "bg-white border-gray-200 text-[#66615D] hover:border-[#F57B10] hover:text-[#F57B10]"
                          }`}
                        >
                          {categoryMap[key]}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <textarea
                    placeholder={t("form.messagePlaceholder")}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    required
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-[#FAF7F2] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none focus:border-[#F57B10] focus:bg-white transition resize-none"
                  />

                  {/* Consent */}
                  <label className="flex items-start gap-3 text-sm text-[#66615D] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 w-4 h-4 accent-[#F57B10] flex-shrink-0"
                    />
                    <span>
                      {t("form.consentText")}{" "}
                      <Link href={`/${locale}/datenschutz`} className="underline hover:text-[#F57B10]">
                        {t("form.privacyLink")}
                      </Link>
                      .
                    </span>
                  </label>

                  {error && (
                    <p className="text-red-600 bg-red-50 px-4 py-2 rounded-xl text-sm">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-14 bg-[#F57B10] hover:bg-[#E46C02] text-white rounded-full text-base font-semibold transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? t("form.submittingButton") : t("form.submitButton")}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact info sidebar */}
            <div className="space-y-6">
              <div className="bg-[#FAF7F2] rounded-3xl p-8">
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-6">{t("contact.title")}</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#FFC843] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#1A1A1A]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#B5AEA9] uppercase tracking-wide font-medium mb-1">
                        {t("contact.emailLabel")}
                      </p>
                      <a
                        href="mailto:support@relengo.app"
                        className="text-[#1A1A1A] font-semibold hover:text-[#F57B10] transition-colors"
                      >
                        {t("contact.email")}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#FFC843] rounded-full flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 text-[#1A1A1A]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#B5AEA9] uppercase tracking-wide font-medium mb-1">
                        {t("contact.responseTimeLabel")}
                      </p>
                      <p className="text-[#66615D] text-sm leading-relaxed">
                        {t("contact.responseTime")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] rounded-3xl p-8 text-white">
                <p className="text-sm text-white/60 uppercase tracking-widest font-medium mb-2">
                  {t("contact.comingSoonLabel")}
                </p>
                <p className="text-lg font-semibold leading-snug">
                  {t("contact.comingSoonText")}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
