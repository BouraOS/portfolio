import { motion } from "framer-motion";
import { Project } from "../../types";
import { ProjectCard } from "../../components/ui/ProjectCard";

const featuredProjects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    category: "eCommerce",
    description: "A modern e-commerce platform built with Next.js and Stripe",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
  },
  {
    id: "2",
    title: "Task Management App",
    category: "Web Apps",
    description:
      "Collaborative task management application with real-time updates",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    technologies: ["React", "Firebase", "Material-UI", "Redux"],
  },
];

export function FeaturedProjects() {
  return (
    <section className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
