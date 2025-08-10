"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function StarsBackground({ className = "", options = {} }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  return (
    // wrapper is fixed via `className` from layout; just don’t block clicks
    <div className={`pointer-events-none ${className}`}>
      <div className="w-full h-full">
        {ready && (
          <Particles
            id="tsparticles"
            options={{
              fullScreen: { enable: true, zIndex: 0 }, 
              background: { color: "transparent" },
              fpsLimit: 60,
              particles: {
                number: { value: 220, density: { enable: true, area: 800 } },
                color: { value: "#ffffff" },
                size: { value: { min: 1.4, max: 2.2 } },
                opacity: { value: 0.7 },
                move: { enable: true, speed: 0.2 },
                shape: { type: "circle" },
              },
              // put interactivity at the ROOT, not inside `particles`
              interactivity: {
                events: {
                  onHover: { enable: true, mode: ["bubble", "attract"] },
                  onClick: { enable: true, mode: "repulse" },
                },
                modes: {
                  bubble: { distance: 200, size: 5, duration: 2, opacity: 0.8 },
                  attract: { distance: 180, duration: 0.2 },
                  repulse: { distance: 180, duration: 0.4 }
                }
              },
              ...options,
            }}
          />
        )}
      </div>
    </div>
  );
}
