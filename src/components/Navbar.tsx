import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  House,
  User,
  Briefcase,
  FolderOpen,
  EnvelopeSimple,
  CaretRight,
} from '@phosphor-icons/react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show navbar after a delay for a smooth entry
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/#hero', icon: House },
    { name: 'About', path: '/#about', icon: User },
    { name: 'Experience', path: '/#experience', icon: Briefcase },
    { name: 'Projects', path: '/#projects', icon: FolderOpen },
    { name: 'Contact', path: '/#contact', icon: EnvelopeSimple },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1,
        duration: 0.5,
        staggerChildren: 0.1,
        when: 'beforeChildren',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  const mobileContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <motion.nav
        className="fixed right-5 top-1/2 transform -translate-y-1/2 z-50 hidden md:block"
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <div className="bg-indigo-950/40 backdrop-blur-lg rounded-full py-4 px-2 shadow-lg border border-indigo-800/20 flex flex-col items-center space-y-5">
          {navLinks.map(link => {
            const isActive = `#${activeSection}` === link.path.substring(1);
            const Icon = link.icon;

            return (
              <motion.div key={link.name} variants={itemVariants}>
                <Link href={link.path} className="group relative">
                  <div
                    className={`relative flex items-center justify-center rounded-full p-2 transition-all duration-300 hover:bg-indigo-900/50 ${
                      isActive
                        ? 'bg-indigo-800/50 text-indigo-200'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Icon
                      size={22}
                      weight={isActive ? 'fill' : 'regular'}
                      className="relative z-10"
                    />

                    {isActive && (
                      <span className="absolute inset-0 bg-indigo-600/30 rounded-full animate-pulse" />
                    )}
                  </div>

                  <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="bg-indigo-950/90 backdrop-blur-lg text-xs font-medium py-1.5 px-3 rounded-lg text-indigo-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                      {link.name}
                      <CaretRight size={12} className="ml-1 text-indigo-400" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.nav>

      <motion.div
        className="fixed bottom-4 left-0 right-0 flex justify-center z-50 md:hidden"
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={mobileContainerVariants}
      >
        <div className="bg-indigo-950/70 backdrop-blur-lg rounded-full py-3 px-6 shadow-lg border border-indigo-800/20 flex items-center space-x-8">
          {navLinks.map(link => {
            const isActive = `#${activeSection}` === link.path.substring(1);
            const Icon = link.icon;

            return (
              <Link key={link.name} href={link.path}>
                <div
                  className={`flex flex-col items-center transition-all duration-300 ${
                    isActive ? 'text-indigo-200 transform scale-110' : 'text-gray-400'
                  }`}
                >
                  <Icon size={24} weight={isActive ? 'fill' : 'regular'} />
                </div>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
