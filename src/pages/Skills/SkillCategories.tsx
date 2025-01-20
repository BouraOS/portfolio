import React from "react";
import { motion } from "framer-motion";
// import { Code2, Server, Wrench } from 'lucide-react';

const categories = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools" },
];

export function SkillCategories() {
  const [activeCategory, setActiveCategory] = React.useState("frontend");

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap gap-4 mb-8"
    >
      {categories.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => setActiveCategory(id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeCategory === id
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
          }`}
        >
          {/* <Icon className="h-4 w-4" /> */}
          {label}
        </button>
      ))}
    </motion.div>
  );
}
