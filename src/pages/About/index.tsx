import { Bio } from "./Bio";
import { Experience } from "./Experience";
import { Education } from "./Education";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="space-y-16">
        <Bio />
        <div className="grid grid-cols-4 gap-4">
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  );
}
