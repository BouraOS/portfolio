import { motion } from "framer-motion";
import IconEducation from "../../assets/icons/EducationSvg";

const education = [
  {
    school: "University of Technology",
    degree: "Bachelor of Science in Computer Science",
    period: "2014 - 2018",
    description: "Focused on software engineering and web development.",
  },
];

export function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="col-span-4 md:col-span-2"
    >
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center">
                <IconEducation width={24} height={24} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-primary">{edu.school}</p>
              <p className="text-sm text-muted-foreground">{edu.period}</p>
              <p className="mt-2">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
