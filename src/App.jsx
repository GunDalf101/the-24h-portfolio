// App.jsx
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/HeroSect/Herosect';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Project/Projects';
import SkillTree from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './Footer/Footer';
import WizardTrainingGrounds from './components/Education/Education';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const App = () => {
  return (
    <Router>
      <ParallaxProvider>
        <div className="relative bg-gray-900 text-white">
          <Analytics />
          <SpeedInsights/>
          <Navbar />
          <main className="relative">
            <section id="home">
              <Hero />
            </section>
            <section id="about">
              <AboutMe />
            </section>
            <section id="education">
              <WizardTrainingGrounds />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="skills">
              <SkillTree />
            </section>
            <section id="contact">
              <Contact />
            </section>
            <Footer />
          </main>
        </div>
      </ParallaxProvider>
    </Router>
  );
};

export default App;