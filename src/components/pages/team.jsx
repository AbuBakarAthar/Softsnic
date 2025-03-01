import React from 'react';
import Layout from '../../layout/Layout';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    id: 1,
    name: 'Abu Bakar',
    position: 'CEO',
    image: '/images/team/abu-bakar.jpg',
    bio: 'As the CEO of Saafqeon, Abu Bakar leads with vision, strategy, and a passion for innovation.',
  },
  {
    id: 2,
    name: 'Saad Abbas',
    position: 'CTO',
    image: '/images/team/saad-abbas.jpg',
    bio: 'Saad is the driving force behind our technology, ensuring cutting-edge solutions for our clients.',
  },
  {
    id: 3,
    name: 'Qasim Ali',
    position: 'Lead Developer',
    image: '/images/team/qasim-ali.jpg',
    bio: 'Qasim heads our development team, crafting scalable and high-performance software solutions.',
  },
  {
    id: 4,
    name: 'Ali Raza',
    position: 'Marketing Manager',
    image: '/images/team/ali-raza.jpg',
    bio: 'Ali Raza specializes in data-driven marketing strategies to enhance brand visibility and engagement.',
  },
  {
    id: 5,
    name: 'Muhammad Fahid',
    position: 'Product Manager',
    image: '/images/team/muhammad-fahid.jpg',
    bio: 'Muhammad Fahid ensures our products meet market demands and exceed client expectations.',
  },
];

const Team = () => {
  return (
    <Layout>
      <div className="py-16 min-h-screen" style={{ backgroundColor: '#110C16' }}>
        <div className="container mx-auto px-6 text-center">
          {/* Title */}
          <motion.h1
            className="text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Meet Our Leadership Team
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our team of industry experts is committed to innovation, excellence, and driving business success.
          </motion.p>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="bg-gray-900 text-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: member.id * 0.1 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold">{member.name}</h2>
                  <p className="text-red-400 font-medium">{member.position}</p>
                  <p className="mt-4 text-gray-300">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
