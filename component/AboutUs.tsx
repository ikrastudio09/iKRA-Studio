  "use client";

  import { motion } from "framer-motion";
  import WireGlobe from "@/component/ui/WireGlobe";

  export default function AboutUs() {
    return (
      <section className="relative w-full overflow-hidden bg-stone-50 py-8">
        {/* subtle background texture */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-size-[60px_60px]" />

        {/* soft radial glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-radial from-slate-200/40 to-transparent blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="grid grid-cols-1 items-center gap-20 md:grid-cols-2"
          >
            {/* LEFT */}
            <div className="space-y-4">
              <h2 className="bg-linear-to-br from-slate-900 to-slate-600 bg-clip-text text-transparent text-4xl md:text-6xl font-semibold tracking-tight leading-tight py-1 antialiased">
                Designing systems,
                <br />
                not just screens
              </h2>

              {/* animated divider */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 120 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="h-0.5 rounded-full bg-slate-300"
              />
              <p className="max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                At{" "}
                <span className="font-semibold text-slate-800">iKRA Studio</span>,
                we focus on
                <span className="font-semibold">
                  {" "}
                  designing and building digital experiences
                </span>{" "}
                that feel clear, functional, and intentional. We work at the
                intersection of{" "}
                <span className="underline underline-offset-4 decoration-slate-300">
                  design and code
                </span>{" "}
                to create websites and visual identities that are both visually
                refined and technically sound.
              </p>

              <p className="max-w-xl text-base leading-relaxed text-slate-500 md:text-lg">
                Our services include{" "}
                <span className="font-medium text-slate-700">
                  website design, web development, UI/UX design, branding, and
                  graphic design
                </span>
                , with a strong emphasis on usability, performance, and
                consistency. Every project is built from the ground up, shaped
                around the brand’s goals, its audience, and how users interact
                with digital products.
              </p>

              <p className="max-w-xl text-base leading-relaxed text-slate-500 md:text-lg">
                iKRA Studio works with{" "}
                <span className="font-medium text-slate-700">
                  startups, creators, and modern businesses
                </span>{" "}
                who value originality, quality, and thoughtful execution. We
                believe good digital work doesn’t need to be loud to stand out —
                it simply needs to be{" "}
                <span className="underline underline-offset-4 decoration-slate-300 font-medium">
                  well crafted
                </span>
                .
              </p>
            </div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex w-full items-center justify-center"
            >
              {/* glass container */}
              <div className="hidden md:block relative rounded-3xl">
                <WireGlobe />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }
