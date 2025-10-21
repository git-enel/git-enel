import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { experiences } from "./data";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-28 md:py-44 bg-[#0a0a0f] relative overflow-hidden md:mb-15"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#b24bf3] to-transparent opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-28"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#00d9ff] to-[#b24bf3] bg-clip-text text-transparent font-semibold">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d9ff] to-[#b24bf3] mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute left-8 md:left-1/2 top-[-10%] bottom-[-10%] w-[3px] bg-gradient-to-b from-[#00d9ff] via-[#b24bf3] to-[#00d9ff] opacity-50 rounded-full translate-y-2" />{" "}
            {experiences.map((exp, index) => {
              const Icon = exp.type === "work" ? Briefcase : GraduationCap;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative mb-10 md:mb-48 ${
                    isEven
                      ? "md:pr-[60%] md:text-right"
                      : "md:pl-[60%] md:ml-auto"
                  }`}
                >
                  <div className="flex items-start gap-8 md:gap-0">
                    <div
                      className="flex-1 md:absolute md:w-[45%]"
                      style={{
                        [isEven ? "right" : "left"]: "calc(50% + 4rem)",
                      }}
                    >
                      <div className="glass rounded-2xl p-10 hover:shadow-[0_0_55px_rgba(0,217,255,0.25)] transition-all duration-300">
                        <div
                          className="inline-flex items-center gap-4 px-4 py-1 rounded-full text-sm mb-6 font-medium"
                          style={{
                            backgroundColor:
                              exp.type === "work"
                                ? "rgba(0,217,255,0.1)"
                                : "rgba(178,75,243,0.1)",
                            color: exp.type === "work" ? "#00d9ff" : "#b24bf3",
                            border: `1px solid ${
                              exp.type === "work"
                                ? "rgba(0,217,255,0.3)"
                                : "rgba(178,75,243,0.3)"
                            }`,
                          }}
                        >
                          <Icon
                            className="w-5 h-5"
                            style={{
                              color:
                                exp.type === "work" ? "#00d9ff" : "#b24bf3",
                            }}
                          />
                          {exp.year}
                        </div>

                        <h3 className="text-2xl mb-3 text-white font-semibold">
                          {exp.title}
                        </h3>
                        <p className="text-[#00d9ff] mb-5 font-medium">
                          {exp.company}
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
