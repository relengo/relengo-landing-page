"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLanguageSwitcher } from "@/hooks/useLanguageSwitcher";


export default function Navbar() {
  const t = useTranslations("Navbar");
  const { currentLocale, switchLanguage } = useLanguageSwitcher();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const otherLocale = currentLocale === 'de' ? 'en' : 'de';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
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

  const handleLanguageSwitch = () => {
    switchLanguage(otherLocale);
    setMobileOpen(false);
  };


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${currentLocale}`} className="flex items-center">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692723a092e75b6d98e7c6e5/4228a2497_relengo_logo_logo_1.png"
            alt="Relengo"
            className="h-14 w-auto"
          />
        </Link>


        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            className="text-gray-600 hover:text-[#1A1A1A] transition-colors"
          >
            {t('howItWorks')}
          </a>
          <a
            href="#categories"
            className="text-gray-600 hover:text-[#1A1A1A] transition-colors"
          >
            {t('categories')}
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:text-[#1A1A1A] transition-colors"
          >
            {t('about')}
          </a>
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


        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>


      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b shadow-lg">
          <div className="flex flex-col p-6 gap-4">
            <a
              href="#how-it-works"
              className="text-lg text-gray-600 hover:text-[#1A1A1A] py-2"
              onClick={() => setMobileOpen(false)}
            >
              {t('howItWorks')}
            </a>
            <a
              href="#categories"
              className="text-lg text-gray-600 hover:text-[#1A1A1A] py-2"
              onClick={() => setMobileOpen(false)}
            >
              {t('categories')}
            </a>
            <a
              href="#about"
              className="text-lg text-gray-600 hover:text-[#1A1A1A] py-2"
              onClick={() => setMobileOpen(false)}
            >
              {t('about')}
            </a>
            <button
              onClick={handleLanguageSwitch}
              className="text-lg text-gray-600 hover:text-[#1A1A1A] py-2 text-left"
            >
              {currentLocale === 'de' ? '🇬🇧 English' : '🇩🇪 Deutsch'}
            </button>
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
