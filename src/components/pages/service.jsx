import React from "react";
import Layout from "../../layout/Layout";
import { motion } from "framer-motion";
import { 
  AiOutlineCode, 
  AiOutlineSketch, 
  AiOutlineSearch, 
  AiOutlineLineChart, 
  AiOutlineMobile, 
  AiOutlineCloud, 
  AiOutlineShoppingCart, 
  AiOutlineTool, 
  AiOutlineAppstore 
} from "react-icons/ai";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We create dynamic, high-performance websites tailored to your brand’s needs, ensuring responsiveness and scalability.",
    icon: <AiOutlineCode size={40} />,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Our expert designers craft intuitive and engaging user interfaces for enhanced digital experiences.",
    icon: <AiOutlineSketch size={40} />,
  },
  {
    id: 3,
    title: "SEO Optimization",
    description:
      "Boost your search rankings and drive organic traffic with our data-driven SEO strategies.",
    icon: <AiOutlineSearch size={40} />,
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "We elevate your brand’s presence through targeted social media, PPC campaigns, and growth strategies.",
    icon: <AiOutlineLineChart size={40} />,
  },
  {
    id: 5,
    title: "Mobile App Development",
    description:
      "Cross-platform, high-performance mobile apps that deliver seamless user experiences.",
    icon: <AiOutlineMobile size={40} />,
  },
  {
    id: 6,
    title: "Cloud Solutions",
    description:
      "Secure, scalable, and efficient cloud services to power your business operations.",
    icon: <AiOutlineCloud size={40} />,
  },
  {
    id: 7,
    title: "E-commerce Solutions",
    description:
      "Powerful and user-friendly e-commerce platforms designed to maximize sales and conversions.",
    icon: <AiOutlineShoppingCart size={40} />,
  },
  {
    id: 8,
    title: "Maintenance & Support",
    description:
      "Reliable, 24/7 maintenance and support to keep your systems running at peak performance.",
    icon: <AiOutlineTool size={40} />,
  },
  {
    id: 9,
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to meet your unique business requirements and workflows.",
    icon: <AiOutlineAppstore size={40} />,
  },
];



const Service = () => {
  return (
    <Layout>
      <div className="py-24 min-h-screen bg-[#120c16]">
        <div className="container mx-auto px-6 text-center">
          {/* Title */}
          <motion.h1
            className="text-5xl font-bold text-white mb-12 mt-16"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Elevate Your Business with Our Expert Services
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From web development to digital marketing, we offer a complete suite of solutions to help your brand thrive in the digital world.
          </motion.p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="bg-gray-800/60 backdrop-blur-lg text-white rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-800/80"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: service.id * 0.1 }}
              >
                <div className="text-6xl mb-6">{service.icon}</div>
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <p className="text-gray-300 text-center">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Service;
