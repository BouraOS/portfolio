import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RightUpArrow from '../../assets/icons/RightUpArrowSvg';
export default function Hero() {
  return (
    <section className="h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-square">
          <img
            src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=80"
            alt="Profile"
            className="rounded-full object-cover h-24 w-24 md:h-32 md:w-32 border-[6px] border-white grayscale"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute -right-32 -top-4 bg-white px-4 py-2 rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] before:content-[''] before:absolute before:border-[12px] before:border-white before:w-0 before:h-0 before:-bottom-2 before:-left-3 before:rotate-45 before:border-b-transparent before:border-l-transparent ">
            <p className="text-sm whitespace-nowrap text-black">Hi, I'm Oussama 👋</p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center">
          <p className="text-4xl text-dark-color font-semibold leading-relaxed">
            Full Stack Developer
          </p>
          <p className="text-4xl text-dark-color font-semibold leading-relaxed">
            crafting beautiful and functional
          </p>
          <p className="text-4xl text-dark-color font-semibold leading-relaxed mb-8">
            web experiences
          </p>
          <div className="space-x-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-3xl hover:bg-primary/90 transition-colors">
              Get in touch
              <RightUpArrow width={15} height={15} />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-secondary text-primary-foreground rounded-3xl hover:bg-secondary/90 transition-colors">
              View Projects
              <RightUpArrow width={15} height={15} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
