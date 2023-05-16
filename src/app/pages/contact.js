// import React from 'react';
import { FaInstagram, FaDiscord, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-32">Contact Us</h1>

      <div className="flex items-center space-x-4">
        <a
          href="https://instagram.com/qbits_nmit"
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl text-blue-500 hover:text-blue-700"
        >
          <FaInstagram />
        </a>
        <a
          href="https://discord.com/invite/pJB5zKGPZt"
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl text-purple-500 hover:text-purple-700"
        >
          <FaDiscord />
        </a>
        <a
          href="https://www.linkedin.com/company/qbitsnmit/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl text-blue-800 hover:text-blue-900"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:help@thetechfair.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl text-red-500 hover:text-red-700"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default Contact;
