import { motion } from "framer-motion";
// import { Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  {
    platform: "GitHub",
    url: "https://github.com",
    // icon: Github,
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com",
    // icon: Linkedin,
  },
  {
    platform: "Twitter",
    url: "https://twitter.com",
    // icon: Twitter,
  },
];

export function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold">Connect with me</h2>
      <div className="space-y-4">
        {socialLinks.map(({ platform, url }) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/90 transition-colors"
          >
            {/* <Icon className="h-6 w-6" /> */}
            <span>{platform}</span>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
