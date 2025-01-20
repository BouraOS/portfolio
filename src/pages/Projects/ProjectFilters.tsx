import React from "react";
import { motion } from "framer-motion";
import IconDashboard from "../../assets/icons/DashboardSvg";
import IconMobile from "../../assets/icons/mobileSvg";
import IconWebsite from "../../assets/icons/WebSvg";
import IconEcommerce from "../../assets/icons/EcommerceSvg";
import IconViewAll from "../../assets/icons/ViewAll";

export function ProjectFilters() {
  const [selectedCategory, setSelectedCategory] = React.useState(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap gap-4 mb-8"
    >
      <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
        {CATEGORIES.map(({ id, name, icon: Icon }) => (
          <button
            key={id}
            className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${
              selectedCategory === id
                ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900"
                : "opacity-65 transition-opacity hover:opacity-90"
            }`}
            aria-pressed={selectedCategory === id}
            onClick={() => setSelectedCategory(id)}
          >
            <Icon
              width={16}
              height={16}
              fill={selectedCategory === id ? "#2F70AF" : "currentColor"}
            />
            <span>{name}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}

const CATEGORIES = [
  {
    id: 1,
    name: "View All",
    icon: IconViewAll,
  },
  {
    id: 2,
    name: "Web Apps",
    icon: IconWebsite,
  },
  {
    id: 3,
    name: "eCommerce",
    icon: IconEcommerce,
  },
  {
    id: 4,
    name: "Mobile Apps",
    icon: IconMobile,
  },
  {
    id: 5,
    name: "Dashboards",
    icon: IconDashboard,
  },
];
