import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ChatBot = () => {
  return (
    <div className='text-white fixed right-5 bottom-20'>
      <a 
        href='https://wa.me/+923276568598' 
        target='_blank' 
        rel='noopener noreferrer' 
        className='bg-green-500 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 hover:bg-green-600'
      >
        <FaWhatsapp size={30} />
    
      </a>
    </div>
  );
};

export default ChatBot;
