"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/ContactMe";
import { Footer } from "@/components/Footer";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import DownloadCV from "@/components/CVDownload";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white dark">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00d9ff] to-[#b24bf3] origin-left z-50"
        style={{ scaleX }}
      />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00d9ff] to-[#b24bf3] hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all duration-300 text-black"
        >
          <ChevronUp className="w-6 h-6" />
        </Button>
      </motion.div>
      <DownloadCV/>
    </div>
  );
}