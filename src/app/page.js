"use client";

import React from "react";

export default function Page() {
  return(
    <main className="font-sans">
      <section 
        id="introduction"
        className="flex flex-col items-center justify-center h-screen"
        style={{ color: "var(--section-text)" }}
      >
        <h1 className="text-4xl font-bold">
          Hero Section
        </h1>
      </section>

      <section 
        id="projects" 
        className="flex flex-col items-center justify-center h-screen"
        style={{ color: "var(--section-text)" }}
      >
        <h2 className="text-3xl font-semibold">
          Projects
        </h2>
      </section>

        <section
        id="timeline"
        className="flex flex-col items-center justify-center h-screen"
        style={{ color: "var(--section-text)" }}
      >
        <h2 className="text-3xl font-semibold">
          Timeline
        </h2>
      </section>

      <section
        id="contact"
        className="flex flex-col items-center justify-center h-screen"
        style={{ color: "var(--section-text)" }}
        >
        <h2 className="text-3xl font-semibold">
          Contact
        </h2>
      </section>
    </main>
  )
}
