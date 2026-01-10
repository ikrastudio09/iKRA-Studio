"use client";

import logo from "@/public/Images/Logos/iKRA_BG_Removed.png";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { usePortfolio } from "@/app/context/PortfolioContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setActiveTab } = usePortfolio();
  const serviceLinks = [
    { label: "Web Development", action: "portfolio", tab: "web" },
    { label: "UI / UX Design", action: "services" },
    { label: "Branding", action: "services" },
    { label: "Logo Designing", action: "portfolio", tab: "Logo" },
    { label: "Graphic Designing", action: "portfolio", tab: "graphic" },
  ] as const;

  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = async (id: string): Promise<void> => {
    setMenuOpen(false);
    setDropdownOpen(false);

    if (pathname !== "/") {
      await router.push("/", { scroll: false });
    }

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

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-20 w-full bg-black
      transition-all duration-300 ease-in-out px-4
      ${scrolled ? "py-2" : "py-4"}`}
    >
      <div
        className={`flex w-full items-center justify-between px-4 lg:px-16
        transition-all duration-300 ease-in-out`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="iKRA Logo"
            width={scrolled ? 128 : 175}
            height={scrolled ? 128 : 175}
            className="transition-all duration-300 ease-in-out"
            priority
          />
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden rounded p-2 text-white hover:bg-neutral-800 text-4xl"
        >
          ☰
        </button>

        {/* Menu */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute left-0 top-full w-full bg-black p-4
          md:static md:flex md:w-auto md:items-center md:gap-8 md:p-0
          transition-all duration-300 ease-in-out ${
            scrolled ? "text-l" : "text-xl"
          }`}
        >
          <li>
            <button
              type="button"
              onClick={() => handleScroll("home")}
              className="block py-2 text-white cursor-pointer"
            >
              Home
            </button>
          </li>

          <li>
            <button
              type="button"
              onClick={() => handleScroll("aboutus")}
              className="block py-2 text-white cursor-pointer"
            >
              About us
            </button>
          </li>

          {/* Dropdown */}
          <li className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1 py-2 text-white hover:text-gray-300 transition-colors cursor-pointer"
            >
              Portfolio <span className="text-sm">▾</span>
            </button>

            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 w-44 rounded-md border border-neutral-700 bg-neutral-900 shadow-lg">
                {serviceLinks.map((item) => (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => {
                        if (item.action === "portfolio" && item.tab) {
                          setActiveTab(item.tab);
                          handleScroll("portfolio");
                        }

                        if (item.action === "services") {
                          handleScroll("services");
                        }

                        setDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-neutral-800 transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <button
              type="button"
              onClick={() => handleScroll("services")}
              className="block py-2 text-white cursor-pointer"
            >
              Services
            </button>
          </li>

          <li>
            <button
              type="button"
              onClick={() => handleScroll("contactus")}
              className="block py-2 text-white cursor-pointer"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
