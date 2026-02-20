"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect } from "react";

export function useLanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchLanguage = (newLocale: string) => {
    // Get current scroll position and hash
    const scrollY = window.scrollY;
    const hash = window.location.hash;
    
    // Store in sessionStorage to restore after reload
    sessionStorage.setItem('scrollPosition', scrollY.toString());
    if (hash) {
      sessionStorage.setItem('scrollHash', hash);
    }
    
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');
    
    // Navigate with full page reload
    window.location.href = `/${newLocale}${pathWithoutLocale}${hash}`;
  };

  // Restore scroll position on mount
  useEffect(() => {
    const savedScroll = sessionStorage.getItem('scrollPosition');
    const savedHash = sessionStorage.getItem('scrollHash');
    
    if (savedScroll) {
      setTimeout(() => {
        if (savedHash) {
          const element = document.querySelector(savedHash);
          if (element) {
            element.scrollIntoView({ behavior: 'instant' });
          } else {
            window.scrollTo(0, parseInt(savedScroll));
          }
        } else {
          window.scrollTo(0, parseInt(savedScroll));
        }
        
        // Clear storage
        sessionStorage.removeItem('scrollPosition');
        sessionStorage.removeItem('scrollHash');
      }, 100);
    }
  }, []);

  const getLocaleSwitchHref = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');
    return `/${newLocale}${pathWithoutLocale}`;
  };

  return {
    currentLocale,
    switchLanguage,
    getLocaleSwitchHref,
  };
}
