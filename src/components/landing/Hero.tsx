"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Hero() {
  const t = useTranslations("Hero");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [appLaunchConsent, setAppLaunchConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate required consent
    if (!appLaunchConsent) {
      setError(t("form.consentRequired"));
      return;
    }

    // Submit to your backend
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          appLaunchConsent,
          marketingConsent,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        // Success - show confirmation
        alert(t("form.success"));
        setEmail("");
        setName("");
        setAppLaunchConsent(false);
        setMarketingConsent(false);
      } else {
        setError(t("form.error"));
      }
    } catch (err) {
      setError(t("form.error"));
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#FDF8ED] to-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {t("headline")}
        </h1>
        <p className="text-xl text-gray-600 mb-8">{t("subheadline")}</p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          {/* Name Input */}
          <input
            type="text"
            placeholder={t("form.namePlaceholder")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 mb-3"
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder={t("form.emailPlaceholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 mb-4"
          />

          {/* Error Message */}
          {error && (
            <p className="text-red-600 text-sm mb-3">{error}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#FFD700] hover:bg-[#FFC700] text-black font-semibold py-3 rounded-full transition-all shadow-md hover:shadow-lg"
          >
            {t("form.submitButton")}
          </button>

          <p className="text-xs text-gray-500 mt-3">
            {t("form.requiredNote")}
          </p>
        </form>
      </div>
    </section>
  );
}
