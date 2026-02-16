"use client";
import React from "react";
import NavbarDE from "@/components/landing-de/NavbarDE";
import HeroSectionDE from "@/components/landing-de/HeroSectionDE";
import HowItWorksDE from "@/components/landing-de/HowItWorksDE";
import CategoriesDE from "@/components/landing-de/CategoriesDE";
import AppPreviewDE from "@/components/landing-de/AppPreviewDE";
import BenefitsDE from "@/components/landing-de/BenefitsDE";
import TestimonialsDE from "@/components/landing-de/TestimonialsDE";
import FinalCTADE from "@/components/landing-de/FinalCTADE";
import FooterDE from "@/components/landing-de/FooterDE";

export default function HomeDE() {
  return (
    <>
      <NavbarDE />
      <HeroSectionDE /> 
      <HowItWorksDE />
      <CategoriesDE />
      <AppPreviewDE />
      <BenefitsDE />
      <TestimonialsDE />
      <FinalCTADE />
      <FooterDE />
    </>
  );
}
