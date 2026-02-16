"use client";
import React from "react";
import { Search } from "lucide-react";

export default function AppPreview() {
  return (
    <section className="py-24 px-6 bg-[#FDF8ED]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-[#F68B28] tracking-wide uppercase">
            The App
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-4 mb-6">
            Warm, simple, and easy to use
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A clean interface that supports effortless navigation and clarity.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Phone Mockup Image */}
          <div className="relative">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692723a092e75b6d98e7c6e5/755531a16_image.png"
              alt="Relengo App Preview"
              className="w-[320px] h-auto drop-shadow-2xl"
            />
          </div>

          {/* Features List */}
          <div className="max-w-md space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="text-[#1A1A1A] font-bold mb-2">
                Make Money off of your Items in minutes
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Take a picture of what you have lying around the house, upload
                to Relengo, and start generating more money !
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="text-orange-400 mb-4 text-base font-bold">
                Rent what you need with a few clicks
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Request a rental with two clicks, and get a response within 24
                hours from the lender.
              </p>
              <div className="flex gap-3 flex-wrap">
                {[
                  "Tools",
                  "Cameras",
                  "Music",
                  "Outdoor",
                  "Sport",
                  "Events",
                ].map((cat, i) => {
                  const icons = ["🔧", "📷", "🎸", "⛺", "⚽", "🎉"];
                  return (
                    <div key={cat} className="flex flex-col items-center"></div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-[#F68B28] mb-2">Safe & Private</h4>
              <p className="text-gray-600 text-sm">
                Your pick-up address is only visible to renters after you have
                accepted a rental.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
