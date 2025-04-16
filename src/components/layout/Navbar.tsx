import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '../ui/ThemeToggle';
import { navItems } from '../../config/navigation';
import { cn } from '../../lib/utils';
import logo from '../../assets/images/bouraosLogo.png';
export function Navbar() {
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          <img src={logo} alt="logo" className="h-40 " />
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary',
                location?.pathname === item?.path ? 'text-primary' : 'text-dark',
              )}>
              {/* <item.icon className="h-4 w-4" /> */}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}
