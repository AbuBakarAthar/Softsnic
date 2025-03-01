import React, { useState, useEffect } from 'react';
import Layout from '../../layout/Layout';
import { motion } from 'framer-motion';

const blogs = [
  {
    id: 1,
    title: 'Mastering Web Development in 2024',
    description: 'Explore the latest web development trends, frameworks, and best practices.',
    image: '/images/blogs/web-development.jpg',
    date: 'January 15, 2024',
    author: 'Saad Abbas',
  },
  {
    id: 2,
    title: 'The Importance of UI/UX in Software',
    description: 'How effective UI/UX design can transform the user experience.',
    image: '/images/blogs/ui-ux.jpg',
    date: 'February 10, 2024',
    author: 'Qasim Ali',
  },
  {
    id: 3,
    title: 'SEO Strategies for 2024',
    description: 'Boost your website ranking with proven SEO strategies.',
    image: '/images/blogs/seo-strategies.jpg',
    date: 'March 5, 2024',
    author: 'Ali Raza',
  },
  {
    id: 4,
    title: 'The Evolution of Mobile App Development',
    description: 'Discover the technologies shaping the future of mobile apps.',
    image: '/images/blogs/mobile-development.jpg',
    date: 'April 20, 2024',
    author: 'Muhammad Fahid',
  },
  {
    id: 5,
    title: 'Cloud Computing: A Business Revolution',
    description: 'How businesses are leveraging cloud solutions for growth.',
    image: '/images/blogs/cloud-computing.jpg',
    date: 'May 12, 2024',
    author: 'Abu Bakar',
  },
];

const Blogs = () => {
  const [randomBlog, setRandomBlog] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * blogs.length);
    setRandomBlog(blogs[randomIndex]);
  }, []);

  return (
    <Layout>
      <div className="py-16 min-h-screen" style={{ backgroundColor: '#110C16' }}>
        <div className="container mx-auto px-6">
          {/* Title */}
          <motion.h1
            className="text-5xl font-bold text-center text-white mb-8"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Latest Insights & Blogs
          </motion.h1>

          {/* Random Featured Blog */}
          {randomBlog && (
            <motion.div
              className="bg-gray-900 text-white rounded-2xl shadow-lg overflow-hidden mb-12 transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={randomBlog.image}
                alt={randomBlog.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{randomBlog.title}</h2>
                <p className="text-gray-300 mb-4">{randomBlog.description}</p>
                <div className="text-sm text-gray-400">
                  <span>{randomBlog.date}</span> | <span>By {randomBlog.author}</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <motion.div
                key={blog.id}
                className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: blog.id * 0.1 }}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-300 mb-4">{blog.description}</p>
                  <div className="text-sm text-gray-400">
                    <span>{blog.date}</span> | <span>By {blog.author}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
