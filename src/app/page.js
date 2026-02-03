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
    date: "June - August 2025",
    title: "Eitan‑GO — AI Vocab Notebook",
    tags: ["Full-stack", "Next.js", "Tailwind", "OpenAI", "Supabase"],
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
    date: "August 2025",
    title: "Portfolio Launch",
    tags: ["Next.js 15", "Animations", "Particles"],
    body:
      "Built a portfolio with an interactive hero, scroll‑reveals, particles background, responsive project cards, and a contact section. Optimized for mobile performance.",
    isFuture: false
  },
  {
    date: "Fall 2025",
    title: "UT Dallas — (Computer Science)",
    tags: ["Discrete Math", "Web Dev", "UNIX/Linux", "C", "Japanese"],
    body:
      "Expanded skills in full-stack web development while advancing toward a Japanese minor. Focused on UNIX systems, algorithm analysis, and software engineering principles. Updated Eitan-Go, adding kana study via charts and customizable quizzes.",
    isFuture: false
  },
  {
    date: "Spring 2026",
    title: "UT Dallas — (Computer Science)",
    tags: ["Data Structures", "Algorithm Analysis", "Japanese", "Web Dev", "Java"],
    body:
      "Declared Asian Studies (Japanese) minor. Continuing to build a strong foundation in computer science with advanced coursework in data structures and algorithm analysis, while furthering Japanese language skills.",
    isFuture: false
  },
  {
    date: "Summer 2027(Goal)",
    title: "Software Engineering Internship",
    tags: ["Full‑stack", "AI Integration"],
    body:
      "Seeking a role that combines full-stack development with AI-driven features, in a collaborative, globally-minded team environment. Building skills to contribute to software projects with international reach and diverse work cultures.",
    isFuture: true
  },
  {
    date: "May 2028",
    title: "Complete B.S. in Computer Science (UTD)",
    tags: ["Full‑stack", "AI Integration", "Bachelor's Degree"],
    body:
      "Graduating with strong foundations in software engineering, UI/UX design, AI integration, and cross-cultural communication.",
    isFuture: true
  },
  {
    date: "Long-Term Goal",
    title: "Software Engineering in Japan",
    tags: ["Full‑stack", "AI Integration", "Bachelor's Degree"],
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
        className="scroll-mt-30 py-10 md:py-14 pt-[20px] md:pt-[40px] flex flex-col items-center justify-center"
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
        className="scroll-mt-30 py-10 md:py-14"
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
            🧑🏻‍💻 {"I’m a Computer Science student with a passion for software development, focused on building innovative solutions and continually expanding my skills with emerging technologies."}
          </motion.p>

          <motion.p variants={itemSlide} className="mt-4 text-lg">
            📖 {`I’m pursuing a Bachelor’s degree in Computer Science at the University of Texas at Dallas (expected graduation Spring 2028) with a Japanese minor.
                  My expertise includes web development frameworks like React and Node.js, along with strong foundations in JavaScript, Python, and C++.`}
          </motion.p>

          <motion.p variants={itemSlide} className="mt-4 text-lg">
            🛠️ {`I enjoy designing intuitive user interfaces and building robust back-end systems.
                  My goal is to deliver high-quality software that leverages AI to create interactive, efficient, and globally-minded user experiences.`}
          </motion.p>
          <motion.p variants={itemSlide} className="mt-4 text-lg">
            <ResumeButton size="md" className="mt-4" />
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        id="skills"
        variants={container}              
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.35, margin: "-6% 0px" }}
        className="scroll-mt-30 py-10 md:py-14"
        style={{ color: "var(--section-text)" }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.h2 variants={itemSlide} className="text-3xl md:text-4xl font-bold">
            Skills
          </motion.h2>

          <motion.div
            role="list"
            aria-label="Skill tags"
            className="mt-4 flex flex-wrap justify-center gap-3"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05, delayChildren: 0.1 }
              }
            }}
          >
            {[
              "JavaScript (ES6+)",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Framer Motion",
              "Responsive Design",
              "Python",
              "C++",
              "Supabase",
              "OAuth",
              "OpenAI API",
              "Git/GitHub",
              "Vercel",
              "Leadership",
              "Teamwork",
              "Communication"
            ].map((skill) => (
              <motion.span
                key={skill}
                role="listitem"
                className="px-4 py-2 rounded-full bg-white/10 border border-white/20
                          backdrop-blur text-white text-sm shadow-sm
                          transform-gpu origin-center"
                variants={{
                  hidden: { opacity: 0, y: 8, scale: 0.96 },
                  visible: {
                    opacity: 1, y: 0, scale: 1,
                    transition: { type: "spring", stiffness: 260, damping: 24 }
                  }
                }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.98 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        suppressHydrationWarning={true}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once:false, amount:0.3, margin:"-6% 0px" }}
        className="scroll-mt-30 flex flex-col min-h-[50svh] md:min-h-[40vh] py-12 md:py-20"
        style={{ color: "var(--section-text)" }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <motion.h2 variants={itemSlide} className="text-2xl md:text-3xl font-semibold text-center pb-4">
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
        className="scroll-mt-30 flex flex-col min-h-[50svh] md:min-h-[40vh] py-12 md:py-20"
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
        className="scroll-mt-30 flex flex-col min-h-[50svh] md:min-h-[40vh] py-12 md:py-20 overflow-x-clip"
        style={{ color: "var(--section-text)" }}
      >
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
          <Contact />
        </div>
      </motion.section>
    </main>
  )
}
