"use client";

import { useState, useEffect } from "react";
import { projects } from "./data";
import { AnimatePresence, motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

type Project = (typeof projects)[0];

export function ProjectModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="glass rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden border-2 border-[#00d9ff]/30 shadow-[0_0_50px_rgba(0,217,255,0.3)]">
              <div className="flex items-center justify-between p-6 border-b border-[#00d9ff]/20">
                <div>
                  <h3 className="text-2xl text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
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
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={onClose}
                  className="text-gray-400 hover:text-white hover:bg-[#00d9ff]/10 transition-all duration-300 rounded-full"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <div className="relative">
                <div className="aspect-video bg-[#0a0a0f] flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full"
                    >
                      <Image
                        src={project.gallery[currentImageIndex]}
                        alt={`${project.title} - Image ${
                          currentImageIndex + 1
                        }`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 80vw"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {project.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass border border-[#00d9ff]/30 flex items-center justify-center text-[#00d9ff] hover:bg-[#00d9ff]/20 hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] transition-all duration-300"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass border border-[#00d9ff]/30 flex items-center justify-center text-[#00d9ff] hover:bg-[#00d9ff]/20 hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] transition-all duration-300"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full glass border border-[#00d9ff]/30 text-[#00d9ff] text-sm">
                  {currentImageIndex + 1} / {project.gallery.length}
                </div>
              </div>

              <div className="p-6 border-t border-[#00d9ff]/20">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-center gap-2">
                  {project.gallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "w-8 bg-[#00d9ff] shadow-[0_0_10px_rgba(0,217,255,0.6)]"
                          : "bg-gray-600 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
