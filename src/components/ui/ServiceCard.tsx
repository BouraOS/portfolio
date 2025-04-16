import { motion } from 'framer-motion';
import { Service } from '../../types';
interface ServiceCardProps {
  service: Service;
  key: number;
}

export function ServiceCard({ service, key }: ServiceCardProps) {
  return (
    <motion.article
      key={key}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl border border-border shadow-md bg-card hover:bg-blue-200/20">
      <div className="p-6">
        <p className="text-center text-4xl">{service.Icon}</p>

        <h2 className="font-semibold text-xl text-center mt-2">{service.Title}</h2>

        <p className="mt-2 text-center">{service.Description}</p>
      </div>
    </motion.article>
  );
}
