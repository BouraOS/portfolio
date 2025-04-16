import { motion } from 'framer-motion';
import { Project } from '../../types';
import { ProjectCard } from '../../components/ui/ProjectCard';
import taskManager from '../../assets/images/featured-projects/task-manager.jpg';
const featuredProjects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    category: 'eCommerce',
    description: 'A modern e-commerce platform built with Next.js and Stripe',
    image: taskManager,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
  },
  {
    id: '2',
    title: 'Task Management App',
    category: 'Web Apps',
    description: 'Collaborative task management application with real-time updates',
    image: taskManager,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
  },
  {
    id: '3',
    title: 'Task Management App',
    category: 'Web Apps',
    description: 'Collaborative task management application with real-time updates',
    image: taskManager,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
  },
  {
    id: '4',
    title: 'Task Management App',
    category: 'Web Apps',
    description: 'Collaborative task management application with real-time updates',
    image: taskManager,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
  },
  {
    id: '5',
    title: 'Task Management App',
    category: 'Web Apps',
    description: 'Collaborative task management application with real-time updates',
    image: taskManager,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
  },
  {
    id: '6',
    title: 'Task Management App',
    category: 'Web Apps',
    description: 'Collaborative task management application with real-time updates',
    image: taskManager,
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
  },
];

export function FeaturedProjects() {
  return (
    <section className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}>
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
