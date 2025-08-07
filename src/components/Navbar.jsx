"use client"

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Effects
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="flex justify-between items-center px-4 py-2 shadow sticky top-0 z-50 font-sans"
            style={{ background: "var(--navbar-bg)", color: "var(--navbar-text)" }}>

            {/* Website Name */}
            <div className="flex items-center justify-center flex-grow text-lg font-bold">
                Gary Vincent's Portfolio
            </div>

            {/* Dropdown */}
            <div className="relative" ref={dropdownRef}>
                <button 
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="h-10 w-10 rounded-full overflow-hidden flex items-center justify-center border border-gray-400"
                    aria-label="Open dropdown menu"
                >
                    <img src="/assets/menu.png" alt="Menu" />
                </button>
                <AnimatePresence>
                    {dropdownOpen && (
                        <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 rounded shadow-md z-50 p-2 border"
                        style={{
                            background: "var(--dropdown-bg)",
                            color: "var(--foreground)",
                        }}
                        >
                        <div className="flex flex-col gap-2 p-2">
                            <div className="font-semibold text-lg mb-2">
                                Links:
                            </div>
                            {/* Navigation Links */}
                            <a
                                href="https://www.linkedin.com/in/gary-vincent-ab1542290/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-[var(--foreground)] transition-colors cursor-pointer"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/gtvincent2000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-[var(--foreground)] transition-colors cursor-pointer"
                            >
                                GitHub
                            </a>
                        </div>
                        </motion.div>
                    )}
                    </AnimatePresence>
            </div>

        </nav>
    );
}
