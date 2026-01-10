"use client";

import Image from "next/image";
import { HoverEffect } from "@/component/ui/LogoCards";

export default function LogoWork() {
  const items = [
    { title: "BlissFullNest Studio", image: "/Images/Logos/BLISSFULNEST DESIGN STUDIO .png" },
    { title: "Omkar Education Academy", image: "/Images/Logos/OMKAR_BEST_TILL_NOW.jpeg" },
    { title: "Devil Scout", image: "/Images/Logos/DS.png" },
    { title: "MB Auction and Events", image: "/Images/Logos/Mb_Auction.png" },
    { title: "Majalekar Cold Storage", image: "/Images/Logos/Majalekar.jpg" },
    { title: "Lord Balaji Associates", image: "/Images/Logos/ASSOCIATES.png" },
    { title: "Rajput Royals", image: "/Images/Logos/RR.jpg" },
    { title: "Workspace", image: "/Images/Logos/WS.jpg" },
  ];

  return (
    <section className="w-full px-4">
      <HoverEffect
        items={items.map((item) => ({
          title: item.title,
          description: (
            <div className="relative h-full w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
          ),
        }))}
      />
    </section>
  );
}
