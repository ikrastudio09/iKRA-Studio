"use client";

import React from "react";
import Image from "next/image";
import logo from "../public/Images/Logos/iKRA_BG_Removed.png";
import { FaWhatsapp } from "react-icons/fa";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { usePortfolio } from "@/app/context/PortfolioContext";


const Footer = () => {
  const { setActiveTab } = usePortfolio();
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = async (id: string): Promise<void> => {
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
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-12">
        {/* Main Footer Content */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 pb-10 border-b border-gray-800"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 pb-8 border-b border-gray-800">

          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="text-black inline-block py-4 mb-6">
              <Image src={logo} alt="iKRA Studios" height={125} width={125} />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creating exceptional digital experiences through innovative web design and development, where creativity meets performance and functionality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  type="button"
                  onClick={() => handleScroll("process")}
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-300"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleScroll("portfolio")}
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-300"
                >
                  Our Portfolio
                </button> 
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleScroll("testimonials")}
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-300"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleScroll("faqs")}
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-300"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("web")
                    handleScroll("portfolio")
                  }}
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-300"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button
                type="button"
                  onClick={() => {
                    setActiveTab("Logo")
                    handleScroll("portfolio")}}
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-300"
                >
                  Logo Design
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("graphic")
                    handleScroll("portfolio")}}
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-300"
                >
                  Graphic Designing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleScroll("services")}
                  className="text-gray-400 text-sm hover:text-white transition-colors duration-300"
                >
                  UI/UX Design
                </button>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Connect</h3>

            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              {/* WhatsApp */}
              <a
                href="https://api.whatsapp.com/send/?phone=918983985787&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-[24px] block translate-y-px" />
              </a>

              {/* Website */}
              <a
                href="https://ikrastudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                aria-label="Website"
              >
                <Globe size={20} />
              </a>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Follow us for style inspiration and latest updates
            </p>

            {/* Contact Info */}
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:hello@ikrastudio.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  ikrastudio09@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918983985787"
                  className="hover:text-white transition-colors duration-300"
                >
                  +91 89839 85787
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} iKRA Studio. All Rights Reserved
          </p>
          <div className="flex gap-8">
            <Link
              href="/TermsAndConditions"
              className="text-gray-500 text-sm hover:text-white transition-colors duration-300"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/PrivacyPolicy"
              className="text-gray-500 text-sm hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
