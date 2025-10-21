"use client";

import { Eye } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { projects } from "./data";
import { ProjectModal } from "./ProjectModal";

type Project = (typeof projects)[0];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-gradient-to-b from-[#0a0a0f] to-[#13131a] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00ffc6] to-transparent opacity-50" />

      <div className="absolute top-20 right-10 w-72 h-72 bg-[#00d9ff] rounded-full mix-blend-multiply filter blur-[100px] opacity-20" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#b24bf3] rounded-full mix-blend-multiply filter blur-[100px] opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#00d9ff] to-[#b24bf3] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00d9ff] to-[#b24bf3] mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of projects demonstrating my skills in building modern,
            responsive web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-xl overflow-hidden group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13131a] via-transparent opacity-60" />
              </div>

              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl mb-3 text-white group-hover:text-[#00d9ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-[#00d9ff]/10 text-[#00d9ff] border-[#00d9ff]/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#00d9ff] text-[#00d9ff] hover:bg-[#00d9ff] hover:text-black hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transition-all duration-300 w-fit"
                    onClick={() => openModal(project)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
