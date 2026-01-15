"use client";

import Image from "next/image";

export default function HeroSec() {

  const handleScroll = async (id: string): Promise<void> => {

    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (!el) return;

      const yOffset = -60; // navbar height offset
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* FULL BACKGROUND IMAGE */}
      <Image
        src="/Images/General/Hero_BG.jpg"
        alt="Web development and design studio hero background"
        fill
        priority
        className="object-cover"
      />

      {/* DARK OVERLAY (very light, do NOT kill image) */}
      <div className="absolute inset-0 bg-black/10" />

      {/* CONTENT OVER IMAGE */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl px-8 md:px-16 lg:px-24 w-full">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white">
            Crafting Stunning
            <br />
            <span className="text-[#C7B9FF]">Websites</span>
            <br />
            With Purpose
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-[#E0E0E6]">
            High-performance design and development crafted to turn visitors <br /> into customers.
          </p>

          <div className="mt-8 flex gap-4">
            {/* Primary button */}
            <button
            type="button"
            onClick={() => handleScroll("contactus")}
            className="rounded-md bg-[#1A1A2E] px-7 py-3 text-sm font-medium text-[#EDEAF3] border border-white/10 hover:bg-[#22224A] transition">
              Get Started
            </button>

            {/* Secondary button */}
            <button 
            type="button"
            onClick={() => handleScroll("portfolio")}
            className="rounded-md bg-[#1A1A2E] px-7 py-3 text-sm font-medium text-[#EDEAF3] border border-white/10 hover:bg-[#22224A] transition">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
