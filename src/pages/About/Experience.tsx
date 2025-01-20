import { motion } from "framer-motion";
import IconExperience from "../../assets/icons/ExperienceSvg";

const experiences = [
  {
    company: "Tech Corp",
    position: "Senior Full Stack Developer",
    period: "2020 - Present",
    description:
      "Led development of enterprise web applications using React and Node.js.",
  },
  {
    company: "StartUp Inc",
    position: "Frontend Developer",
    period: "2018 - 2020",
    description:
      "Developed responsive web applications and implemented modern UI/UX designs.",
  },
];

export function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="col-span-4 md:col-span-2"
    >
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center">
                <IconExperience width={24} height={24} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">{exp.position}</h3>
              <p className="text-primary">{exp.company}</p>
              <p className="text-sm text-muted-foreground">{exp.period}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
