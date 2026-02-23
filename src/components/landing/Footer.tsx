"use client";

import React from "react";
import { Instagram, Mail } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLanguageSwitcher } from "@/hooks/useLanguageSwitcher";

const TikTok = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const XLogo = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Footer() {
  const t = useTranslations("Footer");
  const { currentLocale, switchLanguage, getLocaleSwitchHref } = useLanguageSwitcher();
  
  const otherLocale = currentLocale === 'de' ? 'en' : 'de';
  const switchLocaleHref = getLocaleSwitchHref(otherLocale);

  return (
    <footer className="py-6 px-3 lg:px-6 bg-[#FDF8ED]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692723a092e75b6d98e7c6e5/4228a2497_relengo_logo_logo_1.png"
              alt="Relengo"
              className="h-12 w-auto mb-2 mx-auto md:mx-0"
            />
            <p className="text-gray-600 text-sm">{t('tagline')}</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              {
                icon: Instagram,
                href: "https://www.instagram.com/relengo.app?igsh=Y3pmeDRvMHdnM3F4&utm_source=qr",
                label: "Instagram",
              },
              {
                icon: XLogo,
                href: "https://x.com/Relengoapp",
                label: "Twitter",
              },
              {
                icon: TikTok,
                href: "https://www.tiktok.com/@relengo",
                label: "TikTok",
              },
              { icon: Mail, href: "mailto:hello@relengo.app", label: t('socialLinkEmailLabel') },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                onClick={(e) => {
                  if (social.href.startsWith("http")) {
                    e.preventDefault();
                    window.open(social.href, "_blank", "noopener,noreferrer");
                  }
                }}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={social.label}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <social.icon className="w-5 h-5 text-[#1A1A1A]" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p className="text-xs md:text-sm">{t('copyright')}</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs md:text-sm">
            <Link
              href={`/${currentLocale}/${t('imprintHref')}`}
              className="hover:text-[#1A1A1A] transition-colors whitespace-nowrap"
            >
              {t('imprint')}
            </Link>
            <Link
              href={`/${currentLocale}/${t('privacyPolicyHref')}`}
              className="hover:text-[#1A1A1A] transition-colors whitespace-nowrap"
            >
              {t('privacyPolicy')}
            </Link>
            <Link
              href={`/${currentLocale}/${t('termsOfServiceHref')}`}
              className="hover:text-[#1A1A1A] transition-colors whitespace-nowrap"
            >
              {t('termsOfService')}
            </Link>
            <Link 
              href={`/${currentLocale}/${t('contactHref')}`}
              className="hover:text-[#1A1A1A] transition-colors whitespace-nowrap"
            >
              {t('contact')}
            </Link>
            <Link 
              href={`/${currentLocale}/cookie-settings`}
              className="hover:text-[#1A1A1A] transition-colors whitespace-nowrap"
            >
              {t('cookieSettings')}
            </Link>
            <button
              onClick={() => switchLanguage(otherLocale)}
              className="hover:text-[#1A1A1A] transition-colors whitespace-nowrap cursor-pointer underline"
            >
              {currentLocale === 'de' ? '🇬🇧 English' : '🇩🇪 Deutsch'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
