import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ChatBot = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 2000); // Reset after animation completes
    }, 5000); // Triggers every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="fixed right-5 bottom-20">
      <a
        href="https://wa.me/+923473706598"
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-green-500 p-4 rounded-full shadow-lg flex items-center justify-center 
                    hover:bg-green-600 transition duration-300 ease-in-out 
                    ${animate ? 'animate-pulse scale-110 shadow-green-400' : ''}`}
      >
        <FaWhatsapp size={35} className={`${animate ? 'animate-bounce' : ''}`} />
      </a>
    </div>
  );
};

export default ChatBot;
