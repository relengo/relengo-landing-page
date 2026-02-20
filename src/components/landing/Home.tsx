"use client";
import React from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import Categories from "@/components/landing/Categories";
import AppPreview from "@/components/landing/AppPreview";
import Benefits from "@/components/landing/Benefits";
import Testimonials from "@/components/landing/Testimonials";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import CookieConsent from '@/components/CookieConsent';


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Categories />
      <AppPreview />
      <Benefits />
      {/* <Testimonials /> */}
      <FinalCTA />
      <CookieConsent />
      <Footer />
    </>
  );
}
