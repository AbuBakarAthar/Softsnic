import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useState } from "react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaCode, FaDatabase, FaNodeJs, FaServer 
} from "react-icons/fa";
import { SiVite, SiCplusplus, SiMongodb, SiExpress } from "react-icons/si";
import { AiFillAndroid } from "react-icons/ai";

// Icons Data
const icons = [
  { icon: FaHtml5, label: "HTML" },
  { icon: FaCss3Alt, label: "CSS" },
  { icon: FaJs, label: "JavaScript" },
  { icon: FaReact, label: "React" },
  { icon: FaCode, label: "C#" },
  { icon: FaPython, label: "Python" },
  { icon: AiFillAndroid, label: "Android" },
  { icon: SiVite, label: "Vite" },
  { icon: SiCplusplus, label: "C++" },
  { icon: FaDatabase, label: "Database" },
  { icon: FaNodeJs, label: "Node.js" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiExpress, label: "Express.js" },
  { icon: FaServer, label: "Server" },
];

const loopIcons = [...icons, ...icons]; // For infinite loop effect

// ✅ Carousel Component
const Carousel = () => {
  return (
    <div className="min-h-screen #110C16 relative overflow-hidden flex flex-col items-center justify-center">
      <motion.h1
        className="text-5xl font-bold text-white text-center pt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        🛠️ Our Tech Stack
      </motion.h1>

      {/* Infinite Carousel */}
      <div className="w-full overflow-hidden py-14">
        <motion.div
          className="flex space-x-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {loopIcons.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-white text-xl">
              <item.icon className="text-6xl" />
              <p>{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// ✅ Stats Section Component
const StatsSection = () => {
  const [startCounting, setStartCounting] = useState(false);

  return (
    <motion.div 
      className="#110C16 text-white p-10 rounded-lg flex flex-col md:flex-row justify-between items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      onViewportEnter={() => setStartCounting(true)}
    >
      {/* Left Section */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">Snapshot of Success</h2>
        <p className="text-lg text-gray-300">
          With years of global experience and a track record of successful projects, our stats are a testament to our excellence in the tech industry.
        </p>
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center md:w-1/2">
        {[
          { end: 60, label: "Projects Completed" },
          { end: 40, label: " Team Members" },
          { end: 15000, label: "Hours in Development" },
          { end: 90, label: "Happy Clients" },
          { end: 97, label: "Customer Satisfaction", suffix: "%" },
          { end: 3, label: " Locations" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-4 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 * index }}
          >
            {startCounting && (
              <CountUp
                end={stat.end}
                duration={20}
                suffix={stat.suffix || "+"}
                className="text-4xl font-bold text-white"
              />
            )}
            <p className="text-lg mt-2 text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};


// ✅ Combined Home Component
const Home = () => {
  return (
    <div>
      <Carousel />
      <StatsSection />
    </div>
  );
};

export default Home;
