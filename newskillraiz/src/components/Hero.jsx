import React, { useState } from "react";
import imagepath from "../images/hero-img.png"; 


const Hero = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [showPricing, setShowPricing] = useState(false);

  const pricingDetails = [
    "DEVOPS: ₹20,000",
    "CLOUD : ₹20,000",
    "DATA SCIENCE: ₹20,000",
    "DATA ENGINEERING: ₹20,000",
  ];

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-3 lg:px-20 py-2 shadow-md fixed top-0 left-0 w-full bg-transparent z-50">
        <div className="text-3xl font-bold text-teal-600">
          SKILLRAIZ
          <div className="text-sm font-normal text-white-400 mt-1">
            Online Education & Learning
          </div>
        </div>

        {/* Desktop Navbar Links */}
        <ul className="hidden md:flex space-x-6 text-gray-900 font-medium">
          <li className="hover:text-teal-600 cursor-pointer">
            <a href="#home" className="transition duration-300">Home</a>
          </li>
          <li className="hover:text-teal-600 cursor-pointer">
            <a href="#courses" className="transition duration-300">All Courses</a>
          </li>
          <li className="hover:text-teal-600 cursor-pointer">
            <a href="#about" className="transition duration-300">About</a>
          </li>
          <li className="hover:text-teal-600 cursor-pointer">
            <a href="#team" className="transition duration-300">Team</a>
          </li>
          <li
            className="hover:text-teal-600 cursor-pointer"
            onClick={() => setShowPricing(true)} // Show pricing details
          >
            Pricing
          </li>
          <li className="hover:text-teal-600 cursor-pointer">
            <a href="#contact" className="transition duration-300">Contact Us</a>
          </li>
        </ul>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-teal-500">
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-20 left-0 right-0 z-40">
          <ul className="space-y-4 text-gray-900 font-medium p-4">
            <li className="hover:text-teal-600 cursor-pointer">
              <a href="#home" className="transition duration-300">Home</a>
            </li>
            <li className="hover:text-teal-600 cursor-pointer">
              <a href="#courses" className="transition duration-300">All Courses</a>
            </li>
            <li className="hover:text-teal-600 cursor-pointer">
              <a href="#about" className="transition duration-300">About</a>
            </li>
            <li className="hover:text-teal-600 cursor-pointer">
              <a href="#team" className="transition duration-300">Team</a>
            </li>
            <li
              className="hover:text-teal-600 cursor-pointer"
              onClick={() => {
                setShowPricing(true);
                setMenuOpen(false); // Close mobile menu
              }}
            >
              Pricing
            </li>
            <li className="hover:text-teal-600 cursor-pointer">
              <a href="#contact" className="transition duration-300">Contact Us</a>
            </li>
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col lg:flex-row items-center px-4 lg:px-20 py-10 lg:py-12 bg-gradient-to-r from-teal-50 to-teal-100 mt-0"
      >
        {/* Left Content */}
        <div className="text-center py-10 lg:text-left max-w-2xl">
          <h3 className="text-2xl lg:text-3xl font-semibold text-teal-600 mb-2 font-sans">
            WELCOME TO SKILLRAIZ
          </h3>
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4 leading-snug font-sans">
            Empowering Careers Through Expert Training and Real-World Skills.
          </h1>
          <p className="text-gray-700 mb-6 font-light text-lg leading-relaxed">
            SkillRaiz Institute is a premier destination for professional and technical education, designed to empower
            individuals and organizations with in-demand skills for the modern workforce. Our mission is to bridge the gap
            between theoretical knowledge and practical application, ensuring learners are equipped to excel in their careers
            and contribute meaningfully to their industries.Technology courses designed to equip you with the latest programming skills, data science knowledge, and expertise in AI and Machine Learning. Our hands-on training in software development
             and advanced tech courses ensures you're prepared for success in the fast-evolving tech industry.
          </p>
          <div className="flex space-x-4 justify-center lg:justify-start">
            <button className="bg-teal-500 px-6 py-3 rounded-lg text-white font-medium hover:bg-teal-600 transition-all duration-300 shadow-md hover:shadow-lg">
              Get Started Now
            </button>
            <button className="bg-white px-6 py-3 rounded-lg text-teal-500 font-medium border border-teal-500 hover:bg-teal-100 transition-all duration-300 shadow-md hover:shadow-lg">
              Take a Demo
            </button>
          </div>
        </div>

        {/* Right Image with Animation */}
        <div className="mt-10 xl:mt-0 xl:ml-16 py-11 justify-center animate-up-down">
          <img
            src={imagepath} // Replace with your image path
            alt="Hero"
            className="w-[370px] h-[300px] xl:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] rounded-xl py-10"
          />
        </div>
      </section>

        {/* Pricing Modal */}
      {showPricing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-lg w-full mx-4">
            {/* Close Button */}
            <button
              className="text-gray-500 hover:text-red-600 absolute top-4 right-4"
              onClick={() => setShowPricing(false)}
            >
              ✕
            </button>

            {/* Pricing Content */}
            <h2 className="text-2xl font-bold text-teal-600 mb-4 text-center">
              Pricing Details
            </h2>
            <ul className="space-y-2 text-gray-800 text-left">
              {pricingDetails.map((detail, index) => (
                <li
                  key={index}
                  className="bg-gray-100 p-3 rounded-lg shadow-sm"
                >
                  {detail}
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                className="bg-teal-500 text-white px-6 py-2 rounded-lg shadow hover:bg-teal-600 transition"
                onClick={() => alert("Let's Start!")}
              >
                Let's Start
              </button>
              <button
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg shadow hover:bg-gray-300 transition"
                onClick={() => setShowPricing(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add custom animation using Tailwind CSS */}
      <style jsx>{`
        @keyframes up-down {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px); /* Move up */
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-up-down {
          animation: up-down 3s ease-in-out infinite; /* Adjust speed and timing */
        }
      `}</style>
    </div>
  );
};

export default Hero;
