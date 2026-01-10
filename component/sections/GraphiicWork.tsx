import { FocusCards } from "@/component/ui/FocusCards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "High",
      src: "/Images/Graphics/1.jpeg",
    },
    {
      title: "Blue Lock Poster",
      src: "/Images/Graphics/2.jpeg",
    },
    {
      title: "Ocean Wallpaper",
      src: "/Images/Graphics/3.jpeg",
    },
    {
      title: "Headphones Poster",
      src: "/Images/Graphics/4.jpeg",
    },
    {
      title: "Energy Drink Poster",
      src: "/Images/Graphics/5.jpeg",
    },
    {
      title: "Car Poster",
      src: "/Images/Graphics/6.jpeg",
    },
  ];

  return <main className="py-8"><FocusCards cards={cards} /></main>;
}
