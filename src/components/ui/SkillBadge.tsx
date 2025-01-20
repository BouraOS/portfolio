import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: {
    category: string;
    name: string;
    icon: React.FC<{
      width?: number;
      height?: number;
      fill?: string;
    }>;
    proficiency: number;
  };
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="p-4 rounded-lg bg-card"
    >
      <div className="flex items-center gap-3 mb-2">
        <Icon width={30} height={30} />
        <h3 className="font-medium">{skill.name}</h3>
      </div>
      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${skill.proficiency}%` }}
        />
      </div>
    </motion.div>
  );
}
