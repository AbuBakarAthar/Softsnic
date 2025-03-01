import React, { useState, useEffect } from 'react';
import Layout from '../../layout/Layout';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Project Management Tool',
    description: 'A comprehensive project management tool to streamline your workflows and boost productivity.',
    image: '/images/products/project-management.jpg',
    features: ['Task Management', 'Team Collaboration', 'Time Tracking', 'Reporting'],
  },
  {
    id: 2,
    name: 'E-commerce Platform',
    description: 'A robust e-commerce platform to help you sell products and services online with ease.',
    image: '/images/products/ecommerce-platform.jpg',
    features: ['Product Management', 'Payment Gateway Integration', 'Order Tracking', 'Analytics'],
  },
  {
    id: 3,
    name: 'CRM Software',
    description: 'A powerful CRM software to manage your customer relationships and grow your business.',
    image: '/images/products/crm-software.jpg',
    features: ['Contact Management', 'Sales Pipeline', 'Email Marketing', 'Customer Support'],
  },
  {
    id: 4,
    name: 'AI Chatbot',
    description: 'An AI-powered chatbot to automate customer support and improve user engagement.',
    image: '/images/products/ai-chatbot.jpg',
    features: ['24/7 Support', 'Natural Language Processing', 'Multi-channel Integration', 'Analytics'],
  },
  {
    id: 5,
    name: 'Cloud Storage Solution',
    description: 'A secure and scalable cloud storage solution for your business data and files.',
    image: '/images/products/cloud-storage.jpg',
    features: ['File Sharing', 'Data Backup', 'Access Control', 'Collaboration Tools'],
  },
  {
    id: 6,
    name: 'Marketing Automation Tool',
    description: 'An all-in-one marketing automation tool to streamline your campaigns and increase ROI.',
    image: '/images/products/marketing-automation.jpg',
    features: ['Email Marketing', 'Social Media Management', 'Lead Generation', 'Analytics'],
  },
];

const Product = () => {
  const [randomProduct, setRandomProduct] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * products.length);
    setRandomProduct(products[randomIndex]);
  }, []);

  return (
    <Layout>
      <div className="py-16 bg-[#110C16]">
        <div className="container mx-auto px-6">
          <motion.h1
            className="text-4xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Products
          </motion.h1>

          {randomProduct && (
            <motion.div
              className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={randomProduct.image}
                alt={randomProduct.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{randomProduct.name}</h2>
                <p className="mb-4">{randomProduct.description}</p>
                <ul className="list-disc list-inside">
                  {randomProduct.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: product.id * 0.1 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                  <p className="mb-4">{product.description}</p>
                  <ul className="list-disc list-inside">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
