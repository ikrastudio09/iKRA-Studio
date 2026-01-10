"use client";
import React, { useState } from "react";

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reasons = [
    {
      title: "Lightning Fast",
      description:
        "Experience blazing speeds that outpace the competition with our optimized infrastructure",
      number: "01",
    },
    {
      title: "Rock Solid",
      description:
        "Built on enterprise-grade infrastructure you can trust for mission-critical operations",
      number: "02",
    },
    {
      title: "Always Growing",
      description:
        "Continuous innovation keeps you ahead of the curve with cutting-edge features",
      number: "03",
    },
    {
      title: "24/7 Support",
      description:
        "We're here whenever you need us, day or night, with expert assistance",
      number: "04",
    },
  ];

  return (
    <section className="relative py-8 px-6 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
            Why Choose Us
          </h2>
          <div className="mt-4 h-px w-20 bg-indigo-500/70 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT LIST */}
          <div className="space-y-3">
            {reasons.map((reason, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className="cursor-pointer"
              >
                <div
                  className={`
                    relative p-5 transition-all duration-300
                    border-l-2
                    ${
                      activeIndex === index
                        ? "border-indigo-500 bg-indigo-500/10 translate-x-2 text-white"
                        : "border-white/10 text-white/80 hover:border-indigo-400/40 hover:translate-x-1"
                    }
                  `}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`
                        text-2xl transition-all duration-300
                        ${activeIndex === index ? "opacity-100" : "opacity-40"}
                      `}
                    ></div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-mono text-indigo-400">
                          {reason.number}
                        </span>
                        <h3 className="text-lg font-medium tracking-tight">
                          {reason.title}
                        </h3>
                      </div>

                      <p
                        className={`
                          text-sm transition-all duration-300
                          ${
                            activeIndex === index
                              ? "text-white/60 opacity-100"
                              : "opacity-0 max-h-0 overflow-hidden"
                          }
                        `}
                      >
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE — SAME ROTATION LOGIC */}
          <div className="flex justify-center">
            <div className="relative w-78 h-78 mb-12">
              {/* Base rings */}
              {/* <div className="absolute inset-0 rounded-full border border-white/20" />
              <div className="absolute inset-8 rounded-full border border-white/10" /> */}

              <div className="absolute inset-0 rounded-full border border-indigo-500/30" />
              <div className="absolute inset-8 rounded-full border border-white/10" />

              {/* Center content */}
              <div className="absolute inset-10 rounded-full bg-neutral-900 flex flex-col items-center justify-center text-center px-6">
                <div className="text-xl font-mono text-white/40 mb-1">
                  {reasons[activeIndex]?.number}
                </div>

                <h3 className="text-lg font-semibold text-white mb-3 leading-tight">
                  {reasons[activeIndex]?.title}
                </h3>

                <p className="text-sm text-white/70 leading-relaxed max-w-52.5">
                  {reasons[activeIndex]?.description}
                </p>
              </div>

              {/* ROTATING BORDER — LOGIC UNCHANGED */}
              <div
                className="absolute inset-0 rounded-full border-t-2 border-indigo-500 transition-transform duration-700 ease-out"
                style={{
                  transform: `rotate(${activeIndex * 90}deg)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
