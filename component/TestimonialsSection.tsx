import { InfiniteMovingCards } from "./ui/Testimonials";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "From understanding our brand vision to delivering refined logo and letterhead designs, the entire experience with iKRA Studio was smooth and well-executed. The designs for Blissfulnest Studio felt elegant, professional, and thoughtfully crafted. Attention to detail and clear communication made the process effortless.",
      name: "Sonia Pathania",
      title: "Owner, Blissfulnest Design Studio",
    },
    {
      quote:
        "For Rajput Royals, the team handled everything from website development to logo design and social media creatives with great clarity. The website is user-friendly and visually strong, and the branding aligns perfectly with our identity. Their responsiveness and creative approach made collaboration easy and effective.",
      name: "Mr. Pankaj Rajput",
      title: "Owner, Rajput Royals",
    },
    {
      quote:
        "Multiple logo concepts were shared and every requested change was handled patiently and professionally. The final logo for Lord Balaji Associates reflects our brand accurately, and the entire process was flexible and well-managed. Truly appreciate the dedication shown throughout the project.",
      name: "Abhay Ghatge",
      title: "Owner, Lord Balaji Associates",
    },
    {
      quote:
        "The logo designed for Omkar Education Academy captured our educational vision beautifully. It is playful, meaningful, and well-suited for an academic environment. Feedback was welcomed at every stage, and the final outcome matched our expectations perfectly.",
      name: "Manju Bajaj",
      title: "Owner, Omkar Education Academy",
    },
    {
      quote:
        "Our business requirements were clearly understood, and the logo created for Majlekar Cold Storage reflects reliability and industry relevance. The workflow was smooth, structured, and handled with professionalism from start to finish.",
      name: "Pranav Majlekar",
      title: "Majlekar Cold Storage",
    },
    {
      quote:
        "A complete full-stack e-commerce website was developed for Oil Culture with strong focus on usability, performance, and clean design. Product management, order flow, and overall visuals were handled thoughtfully, and the added graphic design work brought strong brand consistency across the platform.",
      name: "Madhuri Maheshwari",
      title: "Owner, Oil Culture",
    },
    {
      quote:
        "iKRA Studio did a truly commendable job on our website. We wanted something clean, simple, and clutter free, and they understood our vision perfectly. They paid attention to every small detail, worked with great precision, and translated our ideas into a smooth, elegant website. The entire experience was easy, professional, and very satisfying. Highly recommended",
      name: "Veera Solanki",
      title: "Casuals By Archana Solanki",
    },
    {
      quote:
        "Along with a well-crafted logo, a complete auction software was developed to suit our business requirements. The auction system runs smoothly, is easy to operate, and handles the bidding process efficiently. The combination of clear branding and reliable auction software made the overall solution practical and effective.",
      name: "Mr. Mahesh Baldawa",
      title: "Owner, MB Events",
    },
  ];

  return (
    <section className="relative w-full py-4 bg-white">
      {/* Header */}
      <div className="mx-auto mb-2 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center leading-tight">
          What Our Clients Say About Working With Us
        </h2>

        <p className="mt-4 mb-2 text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
          Real feedback from businesses and founders who trusted us with design,
          development, and digital delivery.
        </p>
      </div>

      {/* Cards */}
      <div className="relative mx-auto w-full">
        {/* Soft fade edges for marquee */}
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-black/10 to-transparent z-10" /> */}
        {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-black/10 to-transparent z-10" /> */}

        <InfiniteMovingCards items={testimonials} />
      </div>
    </section>
  );
}
