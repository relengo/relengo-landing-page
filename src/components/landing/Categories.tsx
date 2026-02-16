'use client';
import React from "react";

const categories = [
  {
    iconUrl:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692723a092e75b6d98e7c6e5/a6e09b367_DIY.png",
    name: "Do It Yourself",
    items: "Paint supplies, renovation tools, craft materials",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    color: "#FFC843",
  },
  {
    iconUrl:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692723a092e75b6d98e7c6e5/bf4bd2094_Events.png",
    name: "Event Setup",
    items: "Party equipment, decorations, lighting",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=80",
    color: "#F5A4B8",
  },
  {
    iconUrl:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692723a092e75b6d98e7c6e5/836bdfc1e_Sport.png",
    name: "Sports",
    items: "Bikes, surfboards, ski gear, golf clubs",
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&q=80",
    color: "#FFC843",
  },
  {
    iconUrl:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692723a092e75b6d98e7c6e5/e6aba9970_FunPlay.png",
    name: "Entertainment",
    items: "Gaming consoles, board games, toys",
    image:
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=400&q=80",
    color: "#54B9D1",
  },
  {
    iconUrl:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692723a092e75b6d98e7c6e5/02c76580e_Music.png",
    name: "Music Production",
    items: "Instruments, speakers, audio equipment",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80",
    color: "#F68B28",
  },
  {
    iconUrl:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692723a092e75b6d98e7c6e5/1e9adec36_Outdoor.png",
    name: "Outdoor Activities",
    items: "Tents, kayaks, camping gear, hiking equipment",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=80",
    color: "#F5A4B8",
  },
  {
    iconUrl:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692723a092e75b6d98e7c6e5/6a9e9fa08_Cameras.png",
    name: "Photography",
    items: "Cameras, lenses, drones, lighting kits",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80",
    color: "#54B9D1",
  },
  {
    iconUrl:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692723a092e75b6d98e7c6e5/0d0dbd520_Tools.png",
    name: "Construction Work",
    items: "Power tools, gardening, home improvement",
    image:
      "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400&q=80",
    color: "#FFC843",
  },
  {
    iconUrl:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692723a092e75b6d98e7c6e5/494025146_Travel.png",
    name: "Travel",
    items: "Luggage, travel accessories, maps",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80",
    color: "#F68B28",
  },
];

export default function Categories() {
  return (
    <section className="py-24 px-6 bg-[#FDF8ED]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-[#54B9D1] tracking-wide uppercase">
            Categories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-4 mb-6">
            Everything you need,
            <br />
            nothing you don't
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From weekend adventures to home projects—find it locally.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-sm bg-white/90">
                  <img
                    src={category.iconUrl}
                    alt={category.name}
                    className="rounded-[15px] w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">{category.items}</p>
              </div>

              {/* Hover indicator */}
              <div
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: category.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
