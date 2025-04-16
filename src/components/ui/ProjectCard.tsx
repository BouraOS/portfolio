import { motion } from 'framer-motion';
import { Project } from '../../types';
import RightUpArrow from '../../assets/icons/RightUpArrowSvg';
import IconGithub from '../../assets/icons/GithubSvg';
interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl border border-border shadow-md bg-card hover:bg-blue-200/20">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => (
            <span key={tech} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm hover:text-primary transition-colors">
            Live Demo
            <RightUpArrow width={10} height={10} fill="#000" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
            Source Code
            <IconGithub width={15} height={15} fill="#000" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
