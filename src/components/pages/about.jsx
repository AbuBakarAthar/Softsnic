import React from "react";
import Layout from "../../layout/Layout";
import { motion } from "framer-motion";
import HeroSection from "./Heros";
import AboutSection from "./about/AboutSection";
import CardGrid from "./about/CardGrid";

const About = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <div className="max-w-4xl mx-auto p-6 text-center">
        {/* Heading with Animation */}
        <motion.h1 
          className="text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Softsinc
        </motion.h1>

        {/* Description */}
        <motion.p 
          className="text-lg text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Softsinc is a dynamic and innovative software house dedicated to crafting 
          high-quality solutions. Our team of passionate professionals leverages cutting-edge 
          technology to deliver impactful digital experiences.
        </motion.p>
        <CardGrid />
        
        
      </div>
    </Layout>
  );
};

export default About;