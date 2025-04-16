import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import IconDownload from '../../assets/icons/DownloadSvg';
export function Bio() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="prose dark:prose-invert max-w-none">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 lg:col-span-1 rounded-xl flex items-center justify-center">
          <img
            src="https://bentos-react.vercel.app/assets/profile-CzN_0cZS.png"
            alt="Profile"
            className="object-cover rounded-xl"
            width={'300px'}
            height={'400px'}
          />
        </div>
        <div className="col-span-3 lg:col-span-2 rounded-xl px-10 pt-3 ">
          <h2 className="text-2xl font-bold mb-4">Biography</h2>
          <p className="text-lg text-muted-foreground">
            I am a passionate frontend developer specializing in creating intuitive and responsive
            web and mobile applications. With expertise in React.js, Angular, and React Native, I
            focus on delivering high-quality solutions tailored to user needs.
          </p>
          <p className="text-lg text-muted-foreground mt-3">
            As a freelancer, I thrive on building innovative projects and constantly improving my
            skills to stay ahead in the ever-evolving tech world.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 ">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Get in touch
              {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
            </Link>
            <button
              onClick={() => {
                window.open(
                  'https://drive.google.com/file/d/1a_tNWmcC2lBD7yAmSTmMPp7fTotn05bZ/view?usp=sharing',
                  '_blank',
                );
              }}
              className="inline-flex items-center px-6 py-3 bg-secondary text-primary-foreground rounded-lg hover:bg-secondary/90 transition-colors gap-1">
              Download CV
              <IconDownload width={16} height={16} />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
