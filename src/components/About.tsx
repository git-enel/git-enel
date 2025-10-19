"use client";

import { motion } from "motion/react";
import { skills } from "./data";

export function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-[#0a0a0f] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00d9ff] to-transparent opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#00d9ff] to-[#b24bf3] bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00d9ff] to-[#b24bf3] mx-auto mb-8" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8 md:p-10 mb-12"
          >
            <p className="text-gray-300 leading-relaxed mb-6 text-justify">
              I’m a software developer with 1+ years of experience in building
              web and mobile applications. Passionate about creating effective
              and innovative technology solutions.
            </p>
            <p className="text-gray-300 leading-relaxed text-justify">
              I believe good code is not only about working correctly, but also
              being readable, maintainable, and scalable over time. With
              experience across various industries, I continuously learn and
              adapt to the latest technologies to deliver the best solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl mb-8 text-center text-white">Tech Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 0 30px ${skill.color}40`,
                    }}
                    className="glass rounded-xl p-6 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300"
                    style={{ borderColor: `${skill.color}30` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: skill.color }} />
                    <span className="text-white text-center">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
