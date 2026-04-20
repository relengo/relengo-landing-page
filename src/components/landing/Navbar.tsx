"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLanguageSwitcher } from "@/hooks/useLanguageSwitcher";


export default function Navbar() {
  const t = useTranslations("Navbar");
  const { currentLocale, switchLanguage } = useLanguageSwitcher();
  const [mobileOpen, setMobileOpen] = useState(false);

  const otherLocale = currentLocale === 'de' ? 'en' : 'de';

  useEffect(() => {
    const handleScroll = () => {
      // Clear hash from URL if user scrolled away from the section
      if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const rect = targetElement.getBoundingClientRect();
          const isInView = rect.top <= 100 && rect.bottom >= 0;
          
          // If scrolled away from the section, remove hash
          if (!isInView) {
            window.history.replaceState(null, '', window.location.pathname);
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };



  const isLaunched = process.env.NEXT_PUBLIC_LAUNCHED === 'true';

  return (
    <nav
      className={`fixed ${isLaunched ? 'top-0' : 'top-12'} left-0 right-0 z-50 bg-white shadow-sm`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${currentLocale}`} className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Relengo"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
        </Link>


        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href={`/${currentLocale}#how-it-works`}
            className="text-gray-600 hover:text-[#1A1A1A] transition-colors"
          >
            {t('howItWorks')}
          </Link>
          <Link
            href={`/${currentLocale}#categories`}
            className="text-gray-600 hover:text-[#1A1A1A] transition-colors"
          >
            {t('categories')}
          </Link>
          <Link
            href={`/${currentLocale}#about`}
            className="text-gray-600 hover:text-[#1A1A1A] transition-colors"
          >
            {t('about')}
          </Link>
          <button
            onClick={() => switchLanguage(otherLocale)}
            className="text-gray-600 hover:text-[#1A1A1A] transition-colors font-medium"
          >
            {currentLocale === 'de' ? '🇬🇧 English' : '🇩🇪 Deutsch'}
          </button>
          <button
            onClick={scrollToWaitlist}
            className="bg-[#F68B28] hover:bg-[#e07a1f] text-white rounded-full px-6 py-2.5 font-medium transition-colors"
          >
            {t('joinWaitlist')}
          </button>
        </div>

      {/* Mobile — Language + Menu */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => switchLanguage(otherLocale)}
            className="text-base font-medium text-gray-600 hover:text-[#1A1A1A] transition-colors"
          >
            {currentLocale === 'de' ? '🇬🇧 EN' : '🇩🇪 DE'}
          </button>
          <button
            className="p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b shadow-lg">
          <div className="flex flex-col p-6 gap-4">
            <Link
              href={`/${currentLocale}#how-it-works`}
              className="text-lg text-gray-600 hover:text-[#1A1A1A] py-2"
              onClick={() => setMobileOpen(false)}
            >
              {t('howItWorks')}
            </Link>
            <Link
              href={`/${currentLocale}#categories`}
              className="text-lg text-gray-600 hover:text-[#1A1A1A] py-2"
              onClick={() => setMobileOpen(false)}
            >
              {t('categories')}
            </Link>
            <Link
              href={`/${currentLocale}#about`}
              className="text-lg text-gray-600 hover:text-[#1A1A1A] py-2"
              onClick={() => setMobileOpen(false)}
            >
              {t('about')}
            </Link>
            <button
              onClick={scrollToWaitlist}
              className="bg-[#F68B28] hover:bg-[#e07a1f] text-white rounded-full py-3 font-medium transition-colors"
            >
              {t('joinWaitlist')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
