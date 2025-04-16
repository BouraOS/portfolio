import { motion } from 'framer-motion';
import Hero from './Hero';
import Footer from './Footer';
import Services from './Services';
import { FeaturedProjects } from './FeaturedProjects';
import { SkillsOverview } from './SkillsOverview';

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Hero />
      <div className="space-y-20">
        <FeaturedProjects />
        <SkillsOverview />
        <Services />
        <Footer />
      </div>
    </motion.div>
  );
}
