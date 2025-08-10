"use client";

import React from "react";
import { motion } from "framer-motion";


const container = { hidden:{opacity:1}, visible:{ opacity:1, transition:{ staggerChildren:0.15, delayChildren:0.05 } } };
const itemSlide = { hidden:{ y:20, opacity:0 }, visible:{ y:0, opacity:1, transition:{ duration:0.45 } } };
const itemScale = { hidden:{ scale:0.9, opacity:0 }, visible:{ scale:1, opacity:1, transition:{ duration:0.55 } } };

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
            className="rounded-lg mt-10 p-6 sm:p-8 max-w-5xl mx-auto border"
            style={{
              backgroundColor: "var(--project-card-bg)",
              borderColor: "var(--project-card-border)",
              borderWidth: "1px",
            }}
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

                {/* Optional: bullets / tech stack / links */}
                <ul className="mt-4 list-disc list-inside text-sm opacity-90">
                  <li>Next.js 14 · React · Tailwind · Supabase</li>
                  <li>AI sentence generation & translations</li>
                  <li>Vocab notebook + quizzes</li>
                </ul>

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
        viewport={{ once:false, amount:0.3, margin:"-6% 0px" }}
        className="flex flex-col min-h-[50svh] md:min-h-[40vh] py-12 md:py-20"
        style={{ color: "var(--section-text)" }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <motion.h2 variants={itemSlide} className="text-2xl md:text-3xl font-semibold text-center">
            Timeline
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
        className="flex flex-col min-h-[50svh] md:min-h-[40vh] py-12 md:py-20"
        style={{ color: "var(--section-text)" }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <motion.h2 variants={itemSlide} className="text-2xl md:text-3xl font-semibold text-center">
            Contact
          </motion.h2>
        </div>
      </motion.section>
    </main>
  )
}
