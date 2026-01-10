"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePortfolio } from "@/app/context/PortfolioContext";
import WebWork from "@/component/sections/WebWork";
import LogoWork from "./sections/LogoWork";
import { FocusCardsDemo } from "./sections/GraphiicWork";

type TabKey = "web" | "Logo" | "graphic";

const tabs: { key: TabKey; label: string }[] = [
  { key: "web", label: "Web Projects" },
  { key: "Logo", label: "Logo Design" },
  { key: "graphic", label: "Graphic Works" },
];

export default function PortfolioSubSection() {
  const { activeTab, setActiveTab } = usePortfolio();

  return (
    <section className="relative w-full pt-1 pb-8">
      {/* Heading */}
      <div className="mt-10 mb-6 text-center">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
          Website Design & Development Work
        </h2>

        <p className="mt-3 mx-auto max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          Real projects crafted for performance, usability, and growth.
        </p>

        <div className="mt-4 mx-auto h-0.5 w-14 rounded-full bg-linear-to-r from-[#C7B9FF] to-transparent" />
      </div>

      {/* Tabs */}
      <div className="mx-auto mb-1 flex w-fit gap-3 rounded-full border border-white/10 bg-black/40 p-1 backdrop-blur">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative rounded-full px-5 py-2 text-sm transition-all
                ${isActive ? "text-white" : "text-white/60 hover:text-white"}
              `}
            >
              {isActive && (
                <motion.span
                  layoutId="portfolio-tab-indicator"
                  className="absolute inset-0 rounded-full bg-linear-to-r from-indigo-500/30 to-purple-500/30"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative mx-auto min-h-100 max-w-7xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full"
          >
            {activeTab === "web" && <WebWork />}
            {activeTab === "Logo" && <LogoWork />}
            {activeTab === "graphic" && <FocusCardsDemo />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
