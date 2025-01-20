import { SkillGrid } from "./SkillGrid";
import { SkillCategories } from "./SkillCategories";

export default function Skills() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Skills</h1>
      <SkillCategories />
      <SkillGrid />
    </div>
  );
}
