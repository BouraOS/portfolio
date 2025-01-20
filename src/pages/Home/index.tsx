import Hero from "./Hero";
import { FeaturedProjects } from "./FeaturedProjects";
import { SkillsOverview } from "./SkillsOverview";
import Footer from "./Footer";
import Services from "./Services";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <FeaturedProjects />
      <SkillsOverview />
      <Services />
      <Footer />
    </div>
  );
}
