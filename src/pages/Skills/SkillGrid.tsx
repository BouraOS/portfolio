import { motion } from "framer-motion";
// import {
//   Code2,
//   Server,
//   Wrench,
//   Database,
//   Globe,
//   Layout,
//   Terminal,
//   Cloud,
//   Shield,
// } from "lucide-react";
import { SkillBadge } from "../../components/ui/SkillBadge";

const skills = [
  // Frontend
  {
    category: "frontend",
    name: "React",
    // icon: Code2,
    proficiency: 90,
  },
  {
    category: "frontend",
    name: "TypeScript",
    // icon: Code2,
    proficiency: 85,
  },
  {
    category: "frontend",
    name: "Next.js",
    // icon: Globe,
    proficiency: 82,
  },
  {
    category: "frontend",
    name: "Tailwind CSS",
    // icon: Layout,
    proficiency: 88,
  },

  // Backend
  {
    category: "backend",
    name: "Node.js",
    // icon: Server,
    proficiency: 85,
  },
  {
    category: "backend",
    name: "PostgreSQL",
    // icon: Database,
    proficiency: 80,
  },
  {
    category: "backend",
    name: "GraphQL",
    // icon: Terminal,
    proficiency: 75,
  },
  {
    category: "backend",
    name: "AWS",
    // icon: Cloud,
    proficiency: 78,
  },

  // Tools
  {
    category: "tools",
    name: "Git",
    // icon: Wrench,
    proficiency: 88,
  },
  {
    category: "tools",
    name: "Docker",
    // icon: Shield,
    proficiency: 82,
  },
  {
    category: "tools",
    name: "Jest",
    // icon: Terminal,
    proficiency: 85,
  },
  {
    category: "tools",
    name: "CI/CD",
    // icon: Wrench,
    proficiency: 80,
  },
];

export function SkillGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      {skills.map((skill) => (
        <SkillBadge key={skill.name} skill={skill} />
      ))}
    </motion.div>
  );
}
