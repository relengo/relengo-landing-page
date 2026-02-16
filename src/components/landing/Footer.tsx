"use client";

import React from "react";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-[#FDF8ED]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692723a092e75b6d98e7c6e5/4228a2497_relengo_logo_logo_1.png"
              alt="Relengo"
              className="h-16 w-auto mb-2 mx-auto md:mx-0"
            />
            <p className="text-gray-600">Access more. Own less. Live better.</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              {
                icon: Instagram,
                href: "https://www.instagram.com/relengo.app?igsh=Y3pmeDRvMHdnM3F4&utm_source=qr",
                label: "Instagram",
              },
              {
                icon: Twitter,
                href: "https://www.instagram.com/relengo.app?igsh=Y3pmeDRvMHdnM3F4&utm_source=qr",
                label: "Twitter",
              },
              {
                icon: Linkedin,
                href: "https://www.instagram.com/relengo.app?igsh=Y3pmeDRvMHdnM3F4&utm_source=qr",
                label: "LinkedIn",
              },
              { icon: Mail, href: "mailto:hello@relengo.app", label: "Email" },
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
        <div className="h-px bg-gray-200 my-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Relengo. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-[#1A1A1A] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#1A1A1A] transition-colors"
            >
              Terms of Service
            </Link>
            <a href="#" className="hover:text-[#1A1A1A] transition-colors">
              Contact
            </a>
            <Link href="/de" className="hover:text-[#1A1A1A] transition-colors">
              🇩🇪 Deutsch
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
