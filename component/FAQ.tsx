"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do you use templates for websites?",
    a: "No. Every project at iKRA Studio is built from scratch. We don’t rely on pre-made templates, ensuring each design is tailored to the brand, audience, and purpose.",
  },
  {
    q: "Will my website be mobile-friendly and SEO-ready?",
    a: "Absolutely. All websites we build are fully responsive and optimized for desktops, tablets, and mobile devices. We follow SEO best practices such as clean code structure, optimized loading speed, and proper heading hierarchy to ensure search-engine readiness from day one.",
  },
  {
    q: "Who do you work with, and how do we get started?",
    a: "We work with startups, small businesses, creators, and modern brands across various industries, both in India and globally. Our process is fully remote-friendly and collaborative. To get started, reach out via our contact form or email with your project details. We usually respond within 24–48 hours and guide you through the next steps.",
  },
  {
    q: "How do you price your projects?",
    a: "Pricing is project-based, depending on scope, features, and complexity. We provide transparent quotes after discussing requirements—no hidden costs.",
  },
  {
    q: "Can you work with clients remotely?",
    a: "Yes. iKRA Studio works with clients across India and globally through a structured, remote-friendly workflow and clear communication.",
  },

  {
    q: "Will I own the website and design files?",
    a: "Yes. After project completion, full ownership of the website and design assets is transferred to you.",
  },
  {
    q: "Do you handle both design and development, and which technologies do you use?",
    a: "Yes. We manage both design and development in-house, ensuring consistency between visuals and code. Our tech stack depends on the project but commonly includes JavaScript, React, and modern web frameworks, resulting in clean, scalable, and future-ready solutions.",
  },
  {
    q: "How long does a project take, and how do you price your work?",
    a: `Timelines depend on project scope. Small websites typically take 2–3 weeks, while medium websites or redesigns usually take around 3–5 weeks. Pricing is project-based and depends on features and complexity. We provide transparent quotes after discussing your requirements, with no hidden costs.`,
  },
];
export default function FAQGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-stone-50 pt-8 pb-16">

      <div className="mx-auto lg:max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
            Everything you need to know before working with iKRA Studio.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <button
                key={i}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className={`
                  group relative rounded-2xl border bg-white p-6 text-left
                  transition-all duration-300
                  ${
                    isOpen
                      ? "border-slate-300 shadow-lg"
                      : "border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-md"
                  }
                `}
              >
                {/* Question */}
                <div className="flex items-start justify-between gap-4 ">
                  <h3 className="text-base font-medium text-slate-900">
                    {item.q}
                  </h3>

                  <ChevronDown
                    className={`
                      mt-1 h-5 w-5 shrink-0 text-slate-500
                      transition-transform duration-300
                      ${isOpen ? "rotate-180 text-slate-700" : ""}
                    `}
                  />
                </div>

                {/* Answer */}
                <div
                  className={`
                    grid transition-all duration-300 ease-out
                    ${
                      isOpen
                        ? "mt-4 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-slate-600">
                      {item.a}
                    </p>
                  </div>
                </div>

                {/* Accent */}
                <span
                  className={`
                    absolute inset-x-6 bottom-0 h-px
                    bg-linear-to-r from-transparent via-slate-300 to-transparent
                    transition-opacity duration-300
                    ${isOpen ? "opacity-100" : "opacity-0"}
                  `}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
