import { ProjectGrid } from "./ProjectGrid";
import { ProjectFilters } from "./ProjectFilters";

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <ProjectFilters />
      <ProjectGrid />
    </div>
  );
}
