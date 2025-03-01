import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';

const HeroPara = () => {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="absolute w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20 top-1/4 left-1/4"></div>
        <div className="absolute w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 bottom-1/4 right-1/4"></div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />

        {/* Hero Text with Animation */}
        <motion.div
          className="text-center mt-10 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Leading the way in AI and <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Innovation
            </span>
          </p>
        </motion.div>

        {/* Call-to-Action Button */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started
          </button>
        </motion.div>

        {/* Additional Section: Features */}
        <div className="mt-20 py-12 bg-gray-800 bg-opacity-50">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Why Choose Us?
            </motion.h2>
          <div className="flex flex-wrap justify-center gap-8 mt-10 px-4">
            {[
              {
                icon: "🚀",
                title: "Cutting-Edge Technology",
                description: "We leverage the latest advancements in AI to deliver innovative and scalable solutions that drive success.",
              },
              {
                icon: "💡",
                title: "Expert Team",
                description: "Our dedicated team of industry experts brings years of experience and innovation to every project.",
              },
              {
                icon: "🌍",
                title: "Global Reach",
                description: "Serving clients across the globe with top-tier solutions, ensuring seamless integration and continuous support.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
              >
                <div className="text-5xl text-center animate-pulse">{feature.icon}</div>
                <h3 className="text-2xl font-extrabold text-white mt-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mt-3 text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPara;