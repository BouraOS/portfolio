import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import IconSun from "../../assets/icons/SunSvg";
import IconMoon from "../../assets/icons/MoonSvg";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        // <Sun className="h-5 w-5 text-yellow-500" />
        <IconSun width={20} height={20} />
      ) : (
        // <Moon className="h-5 w-5 text-gray-700" />
        <IconMoon width={20} height={20} />
      )}
    </motion.button>
  );
}
