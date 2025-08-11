import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/landing/HeroSection";
import Experience from "../components/landing/Experience.jsx";
import Features from "../components/landing/Features.jsx";
import Testimonials from "../components/landing/Testimonials";
import Footer from "../components/landing/Footer";
import FloatingElements from "../components/landing/FloatingIcons.jsx";
import HowItWorks from "../components/landing/HowItWorks.jsx";
import MarqueeComponent from "../components/landing/Marquee.jsx";

export default function Landing() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for user preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-b  from-[var(--color-bg-secondary)] to-[var(--color-bg)] text-text transition-colors duration-300`}
    >
      <FloatingElements />
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Hero />
      <MarqueeComponent />

      <main className="relative overflow-hidden">
        <HowItWorks />
        <Experience />
        <Features />
        <Testimonials />
      </main>
      <Footer darkMode={darkMode} toggleTheme={toggleTheme} />
    </div>
  );
}
