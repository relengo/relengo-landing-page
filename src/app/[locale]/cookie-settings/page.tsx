"use client";

import CookieSettings from '@/components/CookieSettings';
import Navbar from '@/components/landing/Navbar';

export default function CookieSettingsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FDF8ED] pt-32 px-4 pb-16">
        <CookieSettings />
      </div>
    </>
  );
}
