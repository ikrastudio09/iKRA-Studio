"use client";

import React, { useState } from "react";

const ProcessFlow = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      name: "Discover",
      number: "01",
      description: "Understanding your goals, users, and project requirements",
    },
    {
      name: "Design",
      number: "02",
      description:
        "Designing intuitive, user-focused interfaces and experiences",
    },
    {
      name: "Develop",
      number: "03",
      description: "Building fast, scalable, and reliable digital solutions",
    },
    {
      name: "Test",
      number: "04",
      description: "Testing for performance, usability, and quality assurance",
    },
    {
      name: "Launch",
      number: "05",
      description: "Deploying your product for real-world success",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden flex items-center justify-center px-6 md:px-12 py-4">
      {/* Subtle grid pattern */}
      <div className="relative w-full overflow-hidden px-6 md:px-12 pt-6 pb-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>

        {/* Elegant gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl w-full">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-block">
              <h2 className="text-4xl md:text-6xl font-light text-white mb-4">
                Strategy to <span className="font-semibold italic">Launch</span>
              </h2>

              <div className="h-px w-32 bg-linear-to-r from-transparent via-slate-600 to-transparent mx-auto"></div>
            </div>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-20 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-700 to-transparent hidden lg:block"></div>

            <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
              {steps.map((step, idx) => (
                <div
                  key={step.name}
                  className="relative group"
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Number circle */}
                    <div className="relative mb-8">
                      <div
                        className={`w-20 h-20 rounded-full border transition-all duration-500 flex items-center justify-center ${
                          hoveredStep === idx
                            ? "border-white bg-white shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                            : "border-slate-700 bg-slate-900/50"
                        }`}
                      >
                        <span
                          className={`text-2xl font-light tracking-tight transition-colors duration-500 ${
                            hoveredStep === idx
                              ? "text-slate-900"
                              : "text-slate-300"
                          }`}
                        >
                          {step.number}
                        </span>
                      </div>

                      {/* Subtle pulse effect on hover */}
                      {hoveredStep === idx && (
                        <div className="absolute inset-0 rounded-full border border-white/20 animate-ping"></div>
                      )}
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-xl md:text-3xl font-light mb-4 transition-all duration-500 ${
                        hoveredStep === idx
                          ? "text-white scale-105"
                          : "text-slate-400"
                      }`}
                    >
                      {step.name}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-sm leading-relaxed transition-all duration-500 max-w-50 ${
                        hoveredStep === idx
                          ? "text-slate-300 opacity-100"
                          : "text-slate-500 opacity-70"
                      }`}
                    >
                      {step.description}
                    </p>

                    {/* Decorative line underneath on hover */}
                    <div
                      className={`mt-6 h-px bg-linear-to-r from-transparent via-white to-transparent transition-all duration-500 ${
                        hoveredStep === idx
                          ? "w-16 opacity-100"
                          : "w-0 opacity-0"
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom decorative element */}
          <div className="mt-6 md:mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              {steps.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-px transition-all duration-500 ${
                    hoveredStep === idx ? "w-16 bg-white" : "w-8 bg-slate-700"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;
