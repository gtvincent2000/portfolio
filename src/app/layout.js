import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "../styles/animations.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import StarsBackground from "../components/StarsBackground"; // ← direct import

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Gary Vincent",
  description: "Gary Vincent's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-900 text-gray-100">
        {/* Background */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#171727] via-[#111827] to-black" />

        {/* Stars */}
        <StarsBackground className="fixed inset-0 z-0" />

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          {children}
        </div>

        {/* Notifications */}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
