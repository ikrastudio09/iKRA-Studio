"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    title: "Website Development",
    img: "/Images/Services1/Web.jpeg",
    dark: false,
    tall: true,
    desc: "We build fast, responsive, and SEO-friendly websites using modern web development practices, clean code, and scalable architectures to support long-term business growth.",
  },
  {
    title: "UI / UX Design",
    img: "/Images/Services1/UI1.jpeg",
    dark: true,
    tall: false,
    desc: "Designing intuitive UI/UX experiences focused on usability, accessibility, and user engagement.",
  },
  {
    title: "Logo Design",
    img: "/Images/Services1/logo1.jpeg",
    dark: false,
    tall: true,
    desc: "We create professional logo designs that reflect your brand identity, communicate trust, and remain consistent across digital and print platforms.",
  },
  {
    title: "Graphic Design",
    img: "/Images/Services1/Graphic1.jpeg",
    dark: true,
    tall: false,
    desc: "Visually compelling graphic design for digital and print media that enhances brand recognition and communication.",
  },
  {
    title: "Security and Reliability",
    img: "/Images/Services1/SR.jpeg",
    dark: false,
    tall: true,
    desc: "We ensure website security and reliability through best practices, secure configurations, and performance monitoring to protect data and maintain uptime.",
  },
  {
    title: "Custom Design Support",
    img: "/Images/Services1/CDS.jpeg",
    dark: false,
    tall: true,
    desc: "Flexible custom design support that adapts to evolving business needs and changing creative requirements.",
  },
  {
    title: "Performance Optimization",
    img: "/Images/Services1/PO.jpeg",
    dark: true,
    tall: false,
    desc: "We optimize website speed, Core Web Vitals, and SEO performance to improve search rankings, load times, and user experience.",
  },
  {
    title: "Maintenance & Support",
    img: "/Images/Services1/Maintainance1.jpeg",
    dark: true,
    tall: false,
    desc: "We offer ongoing website maintenance and technical support to keep your site secure, updated, and running smoothly.",
  },
];

export default function ServicesMasonry() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <section className="bg-stone-50 pt-10 pb-14 font-sans tracking-normal antialiased">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl font-semibold text-center text-black tracking-tight">
          Our Services
        </h1>

        <p className="mt-3 mb-8 mx-auto max-w-2xl text-center text-sm sm:text-base text-gray-600 leading-relaxed">
          We offer innovative solutions in design and development, focused on
          performance, usability, and long-term scalability.
        </p>

        {/* Responsive grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:auto-rows-[200px] auto-rows-[180px] gap-2">
          {services.map((s, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              className={`
                  group relative rounded-xl overflow-hidden
                  ${s.tall ? "row-span-2 lg:row-span-2" : "row-span-1"}
                  ${
                    s.dark
                      ? "bg-neutral-900 text-white"
                      : "bg-stone-200 text-black border border-black"
                  }
                    ${i === 5 ? "order-6 lg:order-0" : ""}
                    ${i === 6 ? "order-8 lg:order-0" : ""}  
                `}
            >
              {/* ICON */}
              <div
                className={`
    absolute inset-0 z-0 flex items-center justify-center
    transition-opacity duration-300
    md:group-hover:opacity-20
    ${activeIndex === i ? "opacity-0" : ""}
  `}
              >
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* TITLE */}
              <div
                className={`absolute bottom-4 w-full text-center text-xl z-10 transition-opacity duration-300 group-hover:opacity-20
      ${activeIndex === i ? "opacity-0" : "opacity-100"}
                  `}
              >
                {s.title}
              </div>

              {/* HOVER OVERLAY */}
              <div
                className={`
    absolute inset-0 z-15
    ${s.dark ? "bg-black/85 text-white" : "bg-white text-black"}
    px-5 py-6 flex items-center justify-center text-center
    overflow-y-auto

    transition-all duration-300 ease-out

    md:translate-y-full md:group-hover:translate-y-0
    md:opacity-100

    ${activeIndex === i ? "opacity-100 translate-y-0" : "opacity-0"}
  `}
              >
                <p className="text-sm lg:text-base leading-relaxed max-w-[90%]">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
