import { motion } from 'framer-motion';
import { ServiceCard } from '../../components/ui/ServiceCard';
import { Service } from '../../types';

const services: Service[] = [
  {
    Icon: '🖥️',
    Title: 'Frontend Development',
    Description:
      'Creating responsive and user-friendly interfaces with React.js, ensuring cross-browser compatibility and performance optimization.',
  },
  {
    Icon: '⚛️',
    Title: 'React Ecosystem',
    Description:
      'Building dynamic single-page applications with React.js and server-side rendered sites with Next.js, utilizing TypeScript for type safety and improved developer experience.',
  },
  {
    Icon: '📱',
    Title: 'Mobile Development',
    Description:
      'Developing cross-platform mobile applications with React Native that deliver native-like experiences on iOS and Android from a single JavaScript codebase.',
  },
  {
    Icon: '🅰️',
    Title: 'Angular Applications',
    Description:
      'Creating structured, enterprise-grade frontend applications with Angular, leveraging TypeScript for robust application architecture and maintainable code.',
  },
  {
    Icon: '☕',
    Title: 'Java Backend Solutions',
    Description:
      'Implementing secure, scalable server-side applications with Spring Boot that handle complex business logic and data processing with enterprise-level reliability.',
  },
  {
    Icon: '🔄 ',
    Title: 'Version Control & Collaboration',
    Description:
      'Managing code efficiently with Git while facilitating team collaboration through GitHub and GitLab, implementing effective branching strategies and code review processes.',
  },
  {
    Icon: '🌐',
    Title: 'Full-Stack Integration',
    Description:
      'Seamlessly connecting JavaScript frontends with Java backends through RESTful APIs, creating cohesive applications with efficient data flow and state management.',
  },
  {
    Icon: '📊',
    Title: 'Performance Optimization',
    Description:
      'Enhancing application speed and efficiency through code optimization, lazy loading, and modern JavaScript practices for exceptional user experiences.',
  },
];

export default function Services() {
  return (
    <section className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}>
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
