"use client";

import { createContext, useContext, useState } from "react";

export type PortfolioTab = "web" | "Logo" | "graphic";

interface PortfolioContextType {
  activeTab: PortfolioTab;
  setActiveTab: (tab: PortfolioTab) => void;
}

const PortfolioContext = createContext<PortfolioContextType | null>(null);

export function PortfolioProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState<PortfolioTab>("web");

  return (
    <PortfolioContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) {
    throw new Error("usePortfolio must be used within PortfolioProvider");
  }
  return ctx;
}
