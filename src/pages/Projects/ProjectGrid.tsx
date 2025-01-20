import { motion } from "framer-motion";
import { Project } from "../../types";
import { ProjectCard } from "../../components/ui/ProjectCard";

const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with Next.js and Stripe",
    category: "eCommerce",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
  },
  // Add more projects...
];

export function ProjectGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  );
}
