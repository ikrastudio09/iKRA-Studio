"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/component/ui/animated-modal";
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  cover: string; // card image
  images: string[]; // modal images
  description: string;
  stack: string[];
  link?: string;
};

const projects: Project[] = [
  {
    id: "CBAS",
    title: "Casuals By Archana Solanki",
    subtitle: "Fashion E-Commerce Website",
    cover: "/Images/CBAS/1.jpeg",
    images: [
      "/Images/CBAS/8.jpeg",
      "/Images/CBAS/10.jpeg",
      "/Images/CBAS/11.jpeg",
      "/Images/CBAS/12.jpeg",
      "/Images/CBAS/14.jpeg",
      "/Images/CBAS/15.jpeg",
    ],
    description:
      "Casuals By Archana Solanki is a modern fashion e-commerce website built with a robust CMS-powered backend that allows easy management of products, categories, pricing, and content. The platform features a responsive product catalog, detailed product pages with high-quality visuals, secure checkout and payment integration, and smooth navigation across devices. Designed with a strong focus on UI/UX, performance, and SEO, the website supports inclusive sizing and pan-India shipping while reflecting the brand’s commitment to comfortable, contemporary fashion.",
    stack: [
      "React.js",
      "NodeJs",
      "ExpressJS",
      "JavaScript",
      "Tailwind CSS",
      "Cloudinary",
      "RazorPay",
      "ShipRocket",
    ],
    link: "https://casualsbyarchanasolanki.in",
  },
  {
    id: "OIL_CULTURE",
    title: "Oil Culture",
    subtitle: "E-Commerce website for Pure Refined Oil Brand",
    cover: "/Images/Oil Culture/1.png",
    images: [
      "/Images/Oil Culture/1.png",
      "/Images/Oil Culture/2.jpeg",
      "/Images/Oil Culture/5.jpeg",
      "/Images/Oil Culture/4.jpeg",
      "/Images/Oil Culture/3.jpeg",
    ],
    description:
      "Oil Culture is a modern, responsive e-commerce website designed to highlight premium oil products through clean aesthetics, intuitive navigation, and performance-driven design. The platform delivers a smooth shopping experience with well-organized product listings, detailed product information, and secure checkout flows, while effectively communicating the brand’s commitment to quality, purity, and a refined oil culture across all devices.",
    stack: [
      "React JS",
      "MongoDB",
      "Node JS",
      "Express",
      "Cloudinary",
      "JWT Autentitcation",
    ],
    link: "https://oil-culture-nine.vercel.app/",
  },
  {
    id: "auction",
    title: "Mahesh Baldawa Auction PLatform",
    subtitle: "Real-time auction management system",
    cover: "/Images/Solapur Auction/2.jpeg",
    images: [
      "/Images/Solapur Auction/2.jpeg",
      "/Images/Solapur Auction/3.jpeg",
      "/Images/Solapur Auction/4.jpeg",
      "/Images/Solapur Auction/5.jpeg",
      "/Images/Solapur Auction/6.jpeg",
    ],
    description:
      "A real-time auction software developed for MB Events, designed to manage end-to-end player auctions with category-based sequencing and intelligent re-auction logic. The platform maintains complete player data, dynamically calculates points, maximum bids, and team allocations, and randomly presents players category-wise for live auctions. With powerful admin controls and real-time visibility, each team can track its built squad, current players, maximum bid and remaining points, ensuring a transparent, fast, and well-organized auction experience.",
    stack: ["React", "Node.js", "Express"],
  },
  {
    id: "Rajput Royals",
    title: "Rajput Royals",
    subtitle: "Wedding venue promotional website",
    cover: "/Images/Rajput Royals/1.png",
    images: [
      "/Images/Rajput Royals/1.png",
      "/Images/Rajput Royals/2.jpeg",
      "/Images/Rajput Royals/3.jpeg",
      "/Images/Rajput Royals/7.jpeg",
      "/Images/Rajput Royals/8.jpeg",
    ],
    description:
      "Rajput Royals is a modern marriage hall publicity website designed to enhance visibility and enquiries, featuring sections such as Home, Services, Amenities, Gallery, FAQ, and Contact. The platform includes a MailJS-powered contact form that enables direct email enquiries, along with clear content structure and visual presentation to help visitors explore facilities and connect easily for bookings.",
    stack: ["HTML", "Vanilla CSS", "Javascript", "MailJS"],
    link: "https://www.rajputroyals.in",
  },
];

export default function WebWork() {
  return (
    <section className="mx-auto max-w-6xl px-6 mt-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <Modal key={project.id}>
            {/* Trigger Card */}
            <ModalTrigger className="group relative h-60 overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
              {/* Image */}
              <Image
                src={project.cover}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Bottom gradient anchor */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/90 via-black/50 to-transparent z-10" />

              {/* Text — HARD pinned to bottom */}
              <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center text-center px-4 pb-4">
                <h3 className="text-lg font-semibold text-white leading-tight">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-white/70">{project.subtitle}</p>
              </div>
            </ModalTrigger>

            {/* Modal Content */}
            <ModalBody>
              <ModalContent>
                <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                  {project.title}
                </h4>
                <div className="flex justify-center items-center">
                  {project.images.map((src, index) => (
                    <motion.div
                      key={"images" + index}
                      style={{
                        rotate: Math.random() * 20 - 10,
                      }}
                      whileHover={{
                        scale: 2,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      whileTap={{
                        scale: 2,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                    >
                      <Image
                        src={src}
                        alt={`${project.title} ${index + 1}`}
                        width={150}
                        height={150}
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>

                <p className="mt-8 text-sm w-full text-neutral-400 text-center">
                  {project.description}
                </p>

                {/* Tech stack pills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </ModalContent>

              {project.link && (
                <ModalFooter className="gap-4">
                  <Link
                    href={project.link}
                    className="bg-black text-center text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28"
                  >
                    Visit Link
                  </Link>
                </ModalFooter>
              )}
            </ModalBody>
          </Modal>
        ))}
      </div>
    </section>
  );
}
