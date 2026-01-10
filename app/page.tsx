"use client";

import { useState } from "react";
import AboutUs from "@/component/AboutUs";
import HeroSec from "@/component/HeroSec";
import ServiceSection from "@/component/ServiceSection";
import Process from "@/component/Process";
import PortfolioSubSection from "../component/PortFolio";
import Testimonials from "@/component/TestimonialsSection";
import Pricing from "@/component/PricePlans";
import ContactUs from "@/component/ContactUs";
import FAQ from "@/component/FAQ";
import WhyChooseUs from "@/component/WhyChooseUs";

export default function Home() {
  return (
    <main id="home" className="w-full dark">
      <HeroSec />
      <section id="aboutus" className="scroll-mt-8">
        <AboutUs />
      </section>

      <section id="portfolio" className="scroll-mt-8">
        <PortfolioSubSection />
      </section>

      <section id="services" className="scroll-mt-8">
        <ServiceSection />
      </section>

      <section id="process" className="scroll-mt-8">
        <Process />
      </section>

      <section id="plans" className="scroll-mt-8">
        <Pricing />
      </section>
      <WhyChooseUs />

      <section id="testimonials" className="scroll-mt-8">
        <Testimonials />
      </section>

      <section id="contactus" className="scroll-mt-8">
        <ContactUs />
      </section>
      
      <section id="faqs" className="scroll-mt-8">
        <FAQ />
      </section>
    </main>
  );
}
