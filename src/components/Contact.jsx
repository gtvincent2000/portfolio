"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import toast from "react-hot-toast";

const item = {
  hidden: { y: 16, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRef = useRef(null);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      honey: formData.get("company"), // honeypot
      captchaToken,
    };

    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Failed to send");

      toast.success("Thanks! I’ll get back to you ASAP.");
      form.reset();
      setCaptchaToken("");
      captchaRef.current?.resetCaptcha();
    } catch (err) {
      console.error(err);
      toast.error("Couldn’t send message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-14 md:py-20" style={{ color: "var(--section-text)" }}>
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: false }}
          className="text-3xl font-semibold text-center md:text-left"
        >
          Contact
        </motion.h2>
        <motion.p
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: false }}
          className="mt-4 text-center"
        >
          Have questions or want to get in touch? Fill out the form below to reach out!
        </motion.p>

        {/* CTA buttons row */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: false }}
          className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
        >
          {/* Phone button */}
          <a
            href="tel:+17577108439"
            className="inline-flex items-center justify-center gap-2 rounded-lg
                       bg-white/10 hover:bg-white/20 border border-white/20
                       backdrop-blur px-4 py-2 font-medium text-white"
            aria-label="Call or text Gary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90" aria-hidden="true">
              <path fill="currentColor" d="M6.6,10.8c1.4,2.7,3.5,4.8,6.2,6.2l2.1-2.1c0.3-0.3,0.8-0.4,1.2-0.3c1.3,0.4,2.7,0.6,4.2,0.6 c0.7,0,1.2,0.5,1.2,1.2v3.8c0,0.7-0.5,1.2-1.2,1.2C10.7,21.6,2.4,13.3,2.4,3.6C2.4,2.9,2.9,2.4,3.6,2.4h3.8 c0.7,0,1.2,0.5,1.2,1.2c0,1.5,0.2,2.9,0.6,4.2c0.1,0.4,0,0.9-0.3,1.2L6.6,10.8z"/>
            </svg>
            Call / Text
          </a>

          {/* Direct email link (optional quick action) */}
          <a
            href="mailto:gtvincent2000@gmail.com?subject=Inquiry%20from%20Portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-lg
                       bg-white/10 hover:bg-white/20 border border-white/20
                       backdrop-blur px-4 py-2 font-medium text-white"
            aria-label="Email Gary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90" aria-hidden="true">
              <path fill="currentColor" d="M12 13.5L2 6.75V18h20V6.75L12 13.5zm0-2.25L2 4h20l-10 7.25z"/>
            </svg>
            Email
          </a>
        </motion.div>

        {/* Email form card */}
        <motion.form
          onSubmit={onSubmit}
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: false }}
          className="mt-8 rounded-lg bg-white/5 backdrop-blur border border-white/10 p-6 md:p-8"
        >
          {/* Honeypot (keep visible to bots but visually hidden) */}
          <label className="sr-only" htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            tabIndex={-1}
            className="absolute left-[-10000px] top-auto w-px h-px overflow-hidden"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                name="name"
                required
                className="w-full rounded-md border border-white/15 bg-black/20 px-3 py-2 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/30"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-md border border-white/15 bg-black/20 px-3 py-2 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/30"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full rounded-md border border-white/15 bg-black/20 px-3 py-2 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/30"
              placeholder="Hi Gary, I think you'd be a great candidate for..."
            />
          </div>

          <div className="mt-4">
            <HCaptcha
              sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY || process.env.HCAPTCHA_SITEKEY}
              onVerify={setCaptchaToken}
              ref={captchaRef}
              theme="dark"
            />
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              disabled={loading || !captchaToken}
              className="inline-flex items-center gap-2 rounded-lg
                         bg-white/10 hover:bg-white/20 border border-white/20
                         backdrop-blur px-5 py-2 font-medium text-white
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
