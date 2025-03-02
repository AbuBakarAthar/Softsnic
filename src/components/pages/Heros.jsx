import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#120c16] p-4 sm:p-6 md:p-8 lg:p-10 text-white">
      {/* Foreground Content */}
      <div className="relative z-10 p-6 bg-opacity-50 bg-[#1a101e] rounded-lg shadow-lg text-center max-w-2xl w-full">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-[#f4379d]"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          Welcome to Softsinc
        </motion.h1>
        <motion.h2
          className="text-2xl sm:text-3xl font-semibold mt-4 text-[#d1a5c7]"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeIn" }}
        >
          AI Solutions
        </motion.h2>
        <motion.p
          className="mt-4 text-base sm:text-lg leading-6 text-gray-300"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeIn" }}
        >
          At Softsinc, we transform innovative ideas into reality. Specializing in AI,
          we deliver top-tier IT solutions from conception to deployment.
        </motion.p>
        
        {/* Buttons */}
        <div className="flex flex-wrap justify-center items-center mt-8 space-x-4">
          <motion.button
            className="px-6 py-2 rounded-lg bg-[#f4379d] text-white font-semibold uppercase shadow-lg hover:bg-[#d12f86] transition"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Learn More
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg bg-[#2b1938] text-white font-semibold uppercase shadow-lg hover:bg-[#1e1228] transition"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Contact Us
          </motion.button>
        </div>
      </div>
    </div>
  );
}
