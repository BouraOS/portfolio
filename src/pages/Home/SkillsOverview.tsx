import { motion } from 'framer-motion';
import { SkillBadge } from '../../components/ui/SkillBadge';
import IconLanguageJavascript from '../../assets/icons/JavascriptSvg';
import IconLanguageTypescript from '../../assets/icons/TypeScriptSvg';
import IconLanguageJava from '../../assets/icons/JavaSvg';
import IconReactjs from '../../assets/icons/ReactJsSvg';
import IconSpringBoot from '../../assets/icons/SpringBootSvg';
import IconGit from '../../assets/icons/GitSvg';
import IconAngular from '../../assets/icons/AngularSvg';
import IconNextJs from '../../assets/icons/NextJsSvg';
import IconTailwindcss from '../../assets/icons/TailwindSvg';

const skills = [
  {
    category: 'frontend',
    name: 'JavaScript',
    icon: IconLanguageJavascript,
    proficiency: 90,
  },
  {
    category: 'frontend',
    name: 'TypeScript',
    icon: IconLanguageTypescript,
    proficiency: 80,
  },
  {
    category: 'frontend',
    name: 'ReactJs / React Native',
    icon: IconReactjs,
    proficiency: 90,
  },
  {
    category: 'frontend',
    name: 'NextJs',
    icon: IconNextJs,
    proficiency: 80,
  },
  {
    category: 'frontend',
    name: 'Angular',
    icon: IconAngular,
    proficiency: 90,
  },
  {
    category: 'frontend',
    name: 'Tailwindcss',
    icon: IconTailwindcss,
    proficiency: 90,
  },
  {
    category: 'backend',
    name: 'Java',
    icon: IconLanguageJava,
    proficiency: 80,
  },
  {
    category: 'backend',
    name: 'Spring Boot',
    icon: IconSpringBoot,
    proficiency: 85,
  },
  {
    category: 'tools',
    name: 'Git / Github /Gitlab',
    icon: IconGit,
    proficiency: 90,
  },
];

export function SkillsOverview() {
  return (
    <section className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}>
        <h2 className="text-3xl font-bold mb-8">Skills Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map(skill => (
            <SkillBadge key={skill.name} skill={skill} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
