/* eslint-disable @next/next/no-img-element */
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { socialLinks } from "./data";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d9ff] rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#b24bf3] rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00d9ff] to-[#b24bf3] blur-xl opacity-60 animate-pulse" />
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#00d9ff] shadow-[0_0_30px_rgba(0,217,255,0.5)]">
              <img
                src="assets/profile.png"
                alt="Aldrich Zebua - Software Developer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl mb-4 bg-gradient-to-r from-[#00d9ff] via-white to-[#b24bf3] bg-clip-text text-transparent">
              Aldrich Zebua
            </h1>
            <p className="text-xl md:text-2xl text-[#00d9ff] mb-4">
              Software Developer
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              I design and develop applications that solve real-world problems,
              ensuring every solution is optimized for both functionality and
              user experience.
            </p>
          </motion.div>

          <div className="flex items-center justify-center gap-6 mb-8">
            {socialLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
                aria-label={item.label}
              >
                <div
                  className="absolute inset-0 blur-md opacity-40 group-hover:opacity-80 transition-all duration-300"
                  style={{ backgroundColor: item.color }}
                />

                <div
                  className="relative transition-transform duration-300 group-hover:scale-110"
                  style={{ color: item.color }}
                >
                  <item.icon size={24} />
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#00d9ff] to-[#0099cc] hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all duration-300 text-black group"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#b24bf3] text-[#b24bf3] hover:bg-[#b24bf3] hover:text-[#c274f3] hover:shadow-[0_0_30px_rgba(178,75,243,0.5)] transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="w-8 h-8 text-[#00d9ff]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
