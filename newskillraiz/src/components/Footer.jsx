import React from "react";
import { FaInstagram, FaYoutube, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-4 bg-teal-900 text-white-400 text-center">
      <div className="mb-4 flex justify-center space-x-4">
        <a
          href="https://www.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-500 transition duration-300"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-600 transition duration-300"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-red-600 transition duration-300"
        >
          <FaYoutube size={24} />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-600 transition duration-300"
        >
          <FaLinkedinIn size={24} />
        </a>
      </div>
      <p className="text-gray-400 mt-2">© 2024 SkillRaiz. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
