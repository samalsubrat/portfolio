import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X, Github, ExternalLink } from "lucide-react";
import { Project } from "@/types/project";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    } else {
      const timer = setTimeout(() => {
        setIsMounted(false);
      }, 300); // Match this with the exit animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isMounted && !isOpen) return null;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-black-200 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e: { stopPropagation: () => any; }) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              >
                <X className="size-6" />
              </button>
              
              <div className="relative h-[300px] md:h-[400px] w-full">
                <Image
                  src={project.image.url}
                  alt={project.image.alt}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
              <p className="text-neutral-400 mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-4 mb-6">
                {project.technologies?.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-3 py-1 bg-neutral-800 rounded-full text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.link && (
                  <Button variant="secondary" asChild>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="size-5" />
                      Visit Website
                    </a>
                  </Button>
                )}
                {project.GLink && (
                  <Button variant="secondary" asChild>
                    <a
                      href={project.GLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="size-5" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal; 