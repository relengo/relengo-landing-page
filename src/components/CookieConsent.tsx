'use client';

import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const t = useTranslations('CookieConsent');
  const locale = useLocale(); // Add this

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = (type = 'all') => {
    const consentData = {
      necessary: true,
      analytics: type === 'all',
      marketing: type === 'all',
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setShowBanner(false);
    
    if (consentData.analytics) {
      // Initialize tracking here
    }
  };

  const handleDecline = () => {
    const consentData = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-1/2 md:-translate-x-1/2 md:w-[calc(100%-4rem)] md:max-w-4xl bg-white border-2 border-[#FFD700] shadow-2xl z-50 animate-slideUp rounded-2xl">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#FFD700] flex items-center justify-center flex-shrink-0">
            <Cookie className="w-5 h-5 text-black" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t('title')}
            </h3>
            
            <p className="text-sm text-gray-600 mb-4">
              {t('description')}
            </p>

            {showDetails && (
              <div className="mb-4 space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <input 
                    type="checkbox" 
                    checked 
                    disabled 
                    className="mt-1 accent-[#FFD700]" 
                  />
                  <div>
                    <p className="font-medium text-gray-900">{t('necessary')}</p>
                    <p className="text-gray-600">{t('necessaryDescription')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <input 
                    type="checkbox" 
                    defaultChecked 
                    className="mt-1 accent-[#FFD700]" 
                  />
                  <div>
                    <p className="font-medium text-gray-900">{t('analytics')}</p>
                    <p className="text-gray-600">{t('analyticsDescription')}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleAccept('all')}
                className="w-full px-6 py-3 bg-[#FFD700] hover:bg-[#FFC700] text-black font-semibold rounded-full transition-all shadow-md hover:shadow-lg"
              >
                {t('acceptAll')}
              </button>
              
              <button
                onClick={handleDecline}
                className="w-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-full transition-all"
              >
                {t('onlyNecessary')}
              </button>

              <div className="flex items-center justify-between mt-2">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
                >
                  {showDetails ? t('showLess') : t('settings')}
                </button>

                <a 
                  href={`/${locale}/datenschutz`}
                  className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
                >
                  {t('privacy')}
                </a>
              </div>
            </div>
          </div>

          <button
            onClick={handleDecline}
            className="text-gray-400 hover:text-gray-600 transition flex-shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}