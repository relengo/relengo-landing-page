"use client";

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function CookieSettings() {
  const t = useTranslations('CookieSettings');
  const params = useParams();
  
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });



  useEffect(() => {
    const saved = localStorage.getItem('cookiePreferences');
    if (saved) {
      setPreferences(JSON.parse(saved));
    }
  }, []);

  const handleToggle = (key: string) => {
    if (key === 'necessary') return;
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const handleSave = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    alert(t('savedMessage'));
  };

  const cookieTypes = [
    {
      key: 'necessary',
      title: t('necessary'),
      description: t('necessaryDesc'),
      required: true,
    },
    {
      key: 'analytics',
      title: t('analytics'),
      description: t('analyticsDesc'),
      required: false,
    },
    {
      key: 'marketing',
      title: t('marketing'),
      description: t('marketingDesc'),
      required: false,
    },
    {
      key: 'functional',
      title: t('functional'),
      description: t('functionalDesc'),
      required: false,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
      <p className="text-base text-gray-600 mb-8">
        {t('subtitle')}
      </p>

      <div className="space-y-6">
        {cookieTypes.map((cookie) => (
          <div
            key={cookie.key}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">{cookie.title}</h3>
                <p className="text-sm text-gray-600">{cookie.description}</p>
              </div>
              <div className="ml-4">
                <button
                  onClick={() => handleToggle(cookie.key)}
                  disabled={cookie.required}
                  className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                    preferences[cookie.key as keyof typeof preferences]
                      ? 'bg-[#F4C347]'
                      : 'bg-gray-300'
                  } ${cookie.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                      preferences[cookie.key as keyof typeof preferences]
                        ? 'translate-x-7'
                        : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex gap-4">
        <button
          onClick={handleSave}
          className="px-8 py-3 bg-[#F4C347] text-white text-base rounded-full font-semibold hover:bg-[#333] transition-colors"
        >
          {t('saveButton')}
        </button>
        <button
          onClick={() => window.history.back()}
          className="px-8 py-3 bg-white text-[#1A1A1A] text-base border-2 border-[#1A1A1A] rounded-full font-semibold hover:bg-gray-50 transition-colors"
        >
          {t('cancelButton')}
        </button>
      </div>
    </div>
  );
}
