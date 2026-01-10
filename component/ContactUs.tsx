"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Globe } from "./Globe";

export default function ContactUs() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      // 1️⃣ Send mail to iKRA Studio (admin)
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // 2️⃣ Send acknowledgement to user
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_ACK_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert("Message sent successfully");
      formRef.current.reset();
    } catch (error) {
      alert("Failed to send message");
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-black pt-12 pb-16">
      {/* background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[64px_64px]" />

      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ===================== */}
        {/* SECTION HEADING */}
        {/* ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          {/* glow behind heading */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-96 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />

          <h2 className="relative text-4xl md:text-6xl font-semibold tracking-tight">
            <span className="bg-linear-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-white/60 max-w-xl mx-auto">
            Let’s build something impactful together. Share your idea and we’ll
            take it from there.
          </p>
        </motion.div>

        {/* ===================== */}
        {/* GLOBE + FORM */}
        {/* ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-24"
        >
          {/* LEFT — GLOBE */}
          <div className="flex justify-center">
            <Globe />
          </div>

          {/* RIGHT — GLASS FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:translate-y-6"
          >
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="
                relative w-full max-w-md
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-8
                shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_60px_140px_-40px_rgba(0,0,0,0.9)]
                overflow-hidden
              "
            >
              {/* glass edge glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-blue-500/15 via-transparent to-cyan-400/15 opacity-60" />

              {/* grain overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "repeating-radial-gradient(circle at 0 0, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 2px)",
                }}
              />

              <div className="relative z-10 grid gap-6">
                {[
                  {
                    label: "Full Name",
                    type: "text",
                    name: "from_name",
                    placeholder: "John Doe",
                  },
                  {
                    label: "Email Address",
                    type: "email",
                    name: "from_email",
                    placeholder: "john@example.com",
                  },
                  {
                    label: "Contact Number",
                    type: "tel",
                    name: "phone",
                    placeholder: "No country code",
                  },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="mb-2 block text-sm font-medium text-white/70">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      name={f.name}
                      placeholder={f.placeholder}
                      className="
                        w-full rounded-xl
                        border border-white/10
                        bg-white/5
                        px-4 py-3
                        text-white
                        placeholder:text-white/40
                        outline-none
                        backdrop-blur-md
                        transition
                        focus:border-cyan-400/40
                        focus:bg-white/10
                        focus:shadow-[0_0_0_1px_rgba(34,211,238,0.3)]
                      "
                    />
                  </div>
                ))}

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your idea..."
                    className="
                      w-full resize-none rounded-xl
                      border border-white/10
                      bg-white/5
                      px-4 py-3
                      text-white
                      placeholder:text-white/40
                      outline-none
                      backdrop-blur-md
                      transition
                      focus:border-cyan-400/40
                      focus:bg-white/10
                      focus:shadow-[0_0_0_1px_rgba(34,211,238,0.3)]
                    "
                    name="message"
                  />
                </div>

                <button
                  type="submit"
                  className="
                    mt-4 w-full
                    rounded-xl
                    bg-linear-to-r from-blue-500 to-cyan-400
                    px-6 py-3
                    text-sm font-medium text-black
                    transition
                    hover:scale-[1.03]
                    hover:shadow-[0_0_50px_rgba(56,189,248,0.7)]
                    active:scale-[0.98]
                  "
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
