"use client";
import React from "react";
import { Search } from "lucide-react";

export default function AppPreviewDE() {
  return (
    <section className="py-24 px-6 bg-[#FDF8ED]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-[#F68B28] tracking-wide uppercase">
            Die App
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-4 mb-6">
            Warm, einfach und intuitiv
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ein klares Interface für mühelose Navigation und Übersichtlichkeit.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Phone Mockup Image */}
          <div className="relative">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692723a092e75b6d98e7c6e5/755531a16_image.png"
              alt="Relengo App Vorschau"
              className="w-[320px] h-auto drop-shadow-2xl"
            />
          </div>

          {/* Features List */}
          <div className="max-w-md space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="text-sky-400 mb-2 font-bold">
                Verdiene Geld mit deinen Sachen in Minuten
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Mach ein Foto von dem, was du zu Hause herumliegen hast, lade es
                auf Relengo hoch und fange an, mehr Geld zu verdienen!
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="text-orange-400 mb-4 text-base font-bold">
                Miete, was du brauchst, mit nur wenigen Klicks
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Stelle eine Mietanfrage mit zwei Klicks und erhalte innerhalb
                von 24 Stunden eine Antwort vom Verleiher.
              </p>
              <div className="flex gap-3 flex-wrap">
                {[
                  "Werkzeuge",
                  "Kameras",
                  "Musik",
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
              <h4 className="font-bold text-[#F68B28] mb-2">Sicher & Privat</h4>
              <p className="text-gray-600 text-sm">
                Deine Abholadresse ist nur für Mieter sichtbar, nachdem du eine
                Vermietung akzeptiert hast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
