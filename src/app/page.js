"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

// Animation variants
const container = { hidden:{opacity:1}, visible:{ opacity:1, transition:{ staggerChildren:0.15, delayChildren:0.05 } } };
const itemSlide = { hidden:{ y:20, opacity:0 }, visible:{ y:0, opacity:1, transition:{ duration:0.45 } } };
const itemScale = { hidden:{ scale:0.9, opacity:0 }, visible:{ scale:1, opacity:1, transition:{ duration:0.55 } } };

function ResumeButton({ size = "md", className = "" }) {
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-2.5 text-lg",
  };

  return (
    <motion.a
      href="/assets/Gary_Vincent_Resume.pdf"
      target="_blank"          
      rel="noopener"
      download                 
      whileHover={{ y: -1, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`${sizes[size]} inline-flex items-center gap-2 rounded-lg
                  bg-white/10 hover:bg-white/20 border border-white/20
                  backdrop-blur text-white font-medium shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-white/40 ${className}`}
      aria-label="Download résumé (PDF)"
    >
      {/* tiny icon */}
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" className="opacity-90">
        <path fill="currentColor" d="M12 3v10.17l3.59-3.58L17 11l-5 5-5-5 1.41-1.41L11 13.17V3h1zM5 19h14v2H5z"/>
      </svg>
      Download Résumé
    </motion.a>
  );
}

// Timeline items
const timelineItems = [
  {
    date: "2019 → 2023",
    title: "US Marine Corps",
    tags: ["Leadership", "Teamwork", "Communication"],
    body:
      "Developed strong leadership and teamwork skills while serving in the US Marine Corps Infantry. Focused on discipline and effective communication.",
    media: (
      <img
        src="/assets/usmc_pic.jpg"
        alt="US Marine Corps"
        className="w-full max-w-md rounded-lg shadow"
      />
    ),
    isFuture: false
  },
  {
    date: "Fall 2023 → Spring 2025",
    title: "Austin Community College",
    tags: ["Data Structures", "C++", "Python", "GPA: 3.61"],
    body:
      "Gained a solid foundation in computer science principles such as algorithms and data structures.",
    isFuture: false
  },
  {
    date: "Summer 2025",
    title: "Eitan‑GO — AI Vocab Notebook",
    tags: ["Next.js", "Tailwind", "OpenAI", "Supabase"],
    body:
      "Self-taught React and Next js. Built a full‑stack app with AI‑generated sentences, translations, and quiz study flows. Deployed on Vercel; added auth and dark mode.",
    media: (
      <video
        src="/assets/eitan-go-how-to.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full max-w-md rounded-lg shadow"
      />
    ),
    isFuture: false
  },
  {
    date: "Summer 2025",
    title: "Portfolio v1.0 Launch",
    tags: ["Next.js 15", "Animations", "Particles"],
    body:
      "Interactive hero, scroll‑reveals, particles background, responsive project cards. Optimized for mobile performance.",
    isFuture: false
  },
  {
    date: "Fall 2025",
    title: "UT Dallas — Junior Year (CS)",
    tags: ["Data Structures", "Web Dev", "C++", "JS"],
    body:
      "Will focus on modern front‑end patterns (App Router, Framer Motion) and back‑end fundamentals. Building portfolio polish & internship prep.",
    isFuture: true
  },
  {
    date: "2026 (Goal)",
    title: "Software Engineering Internship",
    tags: ["Full‑stack", "AI Integration"],
    body:
      "Seeking a role that combines full-stack development with AI-driven features, in a collaborative, globally-minded team environment. Building skills to contribute to software projects with international reach and diverse work cultures.",
    isFuture: true
  },
  {
    date: "2027",
    title: "Complete B.S. in Computer Science (UTD)",
    tags: ["Full‑stack", "AI Integration", "Bachelor's Degree"],
    body:
      "Graduating with strong foundations in software engineering, AI integration, and cross-cultural communication. Preparing for a Master's degree to deepen expertise in advanced software systems and AI.",
    isFuture: true
  },
  {
    date: "2027 → 2029",
    title: "Master’s Degree in Computer Science",
    tags: ["Full‑stack", "AI Integration", "Master's Degree"],
    body:
      "Specializing in AI and scalable systems, with a focus on applications for international markets. Building a portfolio of projects that integrate multilingual and cross-cultural user experiences.",
    isFuture: true
  },
  {
    date: "Long-Term Goal",
    title: "Software Engineering in Japan",
    tags: ["Full‑stack", "AI Integration", "Master's Degree"],
    body:
      "Pursuing opportunities with globally-minded companies in Japan, ideally American or European-headquartered, to contribute to innovative projects while fostering healthy, balanced workplace culture.",
    isFuture: true
  },

];

export default function Page({ id, center=false, children }) {
  return(
    <main className="font-sans">
      <motion.section
        id="home"
        suppressHydrationWarning={true}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once:false, amount:0.6 }}
        className="py-10 md:py-14 pt-[20px] md:pt-[40px] flex flex-col items-center justify-center"
        style={{ color: "var(--section-text)" }}
      >
        <motion.img
          variants={itemScale}
          src="/assets/profile_pic.jpg"
          alt="Gary Vincent"
          className="w-[250px] h-[250px] rounded-full border-4 object-cover"
          style={{ borderColor: "var(--image-border)" }}
        />

        <motion.h1 variants={itemSlide} className="mt-6 text-4xl font-bold">
          Gary Vincent
        </motion.h1>

        <motion.h2 variants={itemSlide} className="mt-2 text-2xl font-semibold opacity-90">
          {`Full‑Stack Developer`}
        </motion.h2>
      </motion.section>


      <motion.section
        id="introduction"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once:false, amount:0.35, margin:"-6% 0px" }}
        className="py-10 md:py-14"
        style={{ color: "var(--section-text)" }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.h1 variants={itemSlide} className="text-3xl md:text-4xl font-bold">
            Introduction
          </motion.h1>

          <motion.p variants={itemSlide} className="mt-3 text-sm md:text-base text-gray-400 italic">
            Overview
          </motion.p>

          <motion.p variants={itemSlide} className="mt-4 text-base md:text-lg">
            🧑🏻‍💻 {"I'm a Computer Science student with a passion for software development. I enjoy creating innovative solutions and learning new technologies."}
          </motion.p>

          <motion.p variants={itemSlide} className="mt-4 text-lg">
            📖 {`I am a Junior at the University of Texas at Dallas, pursuing a Bachelor's degree in Computer Science.
            I specialize in web development frameworks like React and Node.js,
            and I have a strong foundation in programming languages such as JavaScript, Python, and C++.`}
          </motion.p>

          <motion.p variants={itemSlide} className="mt-4 text-lg">
            🛠️ {"I enjoy building user-friendly interfaces and robust back-end systems. "}
            {"My goal is to deliver high-quality software solutions that implement AI to make the user's experience more interactive and efficient."}
          </motion.p>
          <motion.p variants={itemSlide} className="mt-4 text-lg">
            <ResumeButton size="md" className="mt-4" />
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        suppressHydrationWarning={true}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once:false, amount:0.3, margin:"-6% 0px" }}
        className="flex flex-col min-h-[50svh] md:min-h-[40vh] py-12 md:py-20"
        style={{ color: "var(--section-text)" }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <motion.h2 variants={itemSlide} className="text-2xl md:text-3xl font-semibold text-center">
            Projects
          </motion.h2>
          <motion.div
            variants={itemSlide}
            className="rounded-lg bg-white/5 backdrop-blur border border-white/10 p-5"
          >
            {/* Title */}
            <motion.h3 className="text-2xl font-semibold italic text-center">
              Eitan-GO
            </motion.h3>

            {/* Responsive content area */}
            <div className="mt-6 grid gap-6 md:gap-8 md:grid-cols-2 md:items-center">
              {/* Video (left on desktop, full width on mobile) */}
              <motion.video
                src="/assets/eitan-go-how-to.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-lg shadow-lg"
              />

              {/* Description (right on desktop) */}
              <motion.div className="text-center md:text-left text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Eitan-GO is a Japanese Vocabulary notebook for English speakers learning Japanese.
                </p>
                <p className="mt-3">
                  The app uses AI to generate sentences, translate words and sentences, and provide quizzes to help users learn vocabulary effectively.
                </p>

                {/* bullets / tech stack / links */}
                <ul className="mt-4 list-disc list-inside text-sm opacity-90">
                  <li>Next.js 14 · React · Tailwind · Supabase</li>
                  <li>Google OAuth</li>
                  <li>AI sentence generation & translations</li>
                  <li>Vocab notebook + quizzes</li>
                </ul>

                <Link
                  href="https://eitan-go.vercel.app/"
                  target="_blank"
                  className="mt-4 inline-block italic underline hover:text-link-hover transition-colors"
                >
                  Project Link
                </Link>

                <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="rounded-full px-3 py-1 text-xs border border-white/20">#NextJS</span>
                  <span className="rounded-full px-3 py-1 text-xs border border-white/20">#OpenAI</span>
                  <span className="rounded-full px-3 py-1 text-xs border border-white/20">#Tailwind</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
 
      <motion.section
        id="timeline"
        suppressHydrationWarning={true}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once:false, amount:0.0, margin:"-6% 0px" }}
        className="flex flex-col min-h-[50svh] md:min-h-[40vh] py-12 md:py-20"
        style={{ color: "var(--section-text)" }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <motion.h2 variants={itemSlide} className="text-2xl md:text-3xl font-semibold text-center">
            <Timeline items={timelineItems} />
          </motion.h2>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        suppressHydrationWarning={true}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once:false, amount:0.3, margin:"-6% 0px" }}
        className="flex flex-col min-h-[50svh] md:min-h-[40vh] py-12 md:py-20 overflow-x-clip"
        style={{ color: "var(--section-text)" }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <Contact />
        </div>
      </motion.section>
    </main>
  )
}
