// Footer.jsx

import { motion } from "framer-motion";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="relative py-12 bg-[#0a0014]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-lg animate-pulse" />
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="text-4xl">⚡</div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 mb-12">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-medievalsharp text-purple-400 mb-3">
                Navigation
              </h4>
              <ul className="space-y-2">
                <FooterLink href="#about">About</FooterLink>
                <FooterLink href="#projects">Projects</FooterLink>
                <FooterLink href="#contact">Contact</FooterLink>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-lg font-medievalsharp text-purple-400 mb-3">
                Connect
              </h4>
              <ul className="space-y-2">
                <FooterLink href="https://github.com/GunDalf101">GitHub</FooterLink>
                <FooterLink href="https://www.linkedin.com/in/mouad-bennani-a4302a208/">LinkedIn</FooterLink>
                <FooterLink href="https://x.com/GunDalf382641">Twitter</FooterLink>
              </ul>
            </div>

            <div className="text-center md:text-left col-span-2 md:col-span-1">
              <h4 className="text-lg font-medievalsharp text-purple-400 mb-3">
                Contact
              </h4>
              <ul className="space-y-2">
                <li className="text-purple-300/70">mouadbennani6@gmail.com</li>
                <li className="text-purple-300/70">+(212) 626-018322</li>
              </ul>
            </div>
          </div>

          <div className="text-center border-t border-purple-800/30 pt-6">
            <p className="text-purple-300/60 text-sm">
              © {new Date().getFullYear()} The Wizard's Portfolio • All rights reserved ✨
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }) => (
  <li>
    <motion.a
      href={href}
      className="text-purple-300/70 hover:text-purple-300 transition-colors duration-300 inline-block"
      whileHover={{ x: 3 }}
    >
      {children}
    </motion.a>
  </li>
);

export default Footer;