import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: "Home", icon: "🏰", id: "home" },
    { label: "About", icon: "📖", id: "about" },
    { label: "Education", icon: "🎓", id: "education" },
    { label: "Projects", icon: "⚔️", id: "projects" },
    { label: "Skills", icon: "📜", id: "skills" },
    { label: "Contact", icon: "🔮", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => document.getElementById(item.id));
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Close mobile menu first
      setIsOpen(false);
      
      // Wait for menu animation to complete
      setTimeout(() => {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 300); // Adjust timing based on your animation duration
    }
  };

  const NavItem = ({ id, icon, label, isMobile = false }) => (
    <div className={`w-full ${!isMobile ? 'w-auto' : ''}`}>
      <motion.button
        onClick={() => handleNavClick(id)}
        className={`
          relative flex items-center space-x-2 px-4 py-2 rounded-xl
          transition-all duration-300 backdrop-blur-sm
          ${activeSection === id 
            ? "text-purple-100 bg-white/10 shadow-[inset_0_0_20px_rgba(139,92,246,0.15)]" 
            : "text-gray-300 hover:text-purple-200 hover:bg-white/5"
          }
          ${isMobile ? "w-full" : ""}
        `}
        onMouseEnter={() => setHovered(label)}
        onMouseLeave={() => setHovered(null)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.span
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-lg opacity-80"
        >
          {icon}
        </motion.span>

        <span className="font-medievalsharp text-sm tracking-wide">
          {label}
        </span>

        {activeSection === id && (
          <motion.div
            className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"
            layoutId="activeIndicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.button>
    </div>
  );

  const HamburgerButton = () => (
    <motion.button
      onClick={() => setIsOpen(!isOpen)}
      className="lg:hidden relative p-1.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-5 h-5 flex flex-col justify-around">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-full h-0.5 bg-purple-200 rounded-full"
            animate={isOpen ? {
              rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
              y: i === 1 ? 0 : i === 0 ? 6 : -6,
              opacity: i === 1 ? 0 : 1
            } : {
              rotate: 0,
              y: 0,
              opacity: 1
            }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
    </motion.button>
  );

  return (
    <motion.nav 
      className={`
        fixed top-0 left-0 w-full backdrop-blur-md z-[1000]
        ${scrolled 
          ? "bg-black/40 border-b border-white/10" 
          : "bg-transparent"
        }
      `}
      animate={{
        height: scrolled ? "3.5rem" : "4rem",
        paddingTop: scrolled ? "0.5rem" : "0.75rem",
        paddingBottom: scrolled ? "0.5rem" : "0.75rem"
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            animate={{
              textShadow: [
                "0 0 20px rgba(139,92,246,0.5)",
                "0 0 35px rgba(139,92,246,0.2)",
                "0 0 20px rgba(139,92,246,0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-purple-200 text-xl font-medievalsharp font-bold tracking-wider">
              🧙‍♂️ GunDalf's Lair
            </span>
          </motion.div>

          <HamburgerButton />

          <div className="hidden lg:flex justify-center gap-2 items-center">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavItem {...item} />
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2"
            >
              <motion.div 
                className="flex flex-col gap-1 bg-black/40 backdrop-blur-md rounded-xl p-2 border border-white/10"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
              >
                {navItems.map((item) => (
                  <NavItem
                    key={item.label}
                    {...item}
                    isMobile={true}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;