import React from "react";
import imagepath from "../images/hero-img.png"; // Replace with your image path


const Hero = () => {
  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-3 lg:px-20 py-1 shadow-md fixed top-0 left-0 w-full bg-transparent z-50">
        <div className="text-3xl font-bold text-teal-600">
          SKILLRAIZ
          <div className="text-sm font-normal text-white-400 mt-1">
            Online Education & Learning
          </div>
        </div>
        <ul className="hidden md:flex space-x-6 text-gray-900 font-medium">
  <li className="hover:text-teal-600 cursor-pointer">
    <a href="./Hero.jsx" className="transition duration-300">Home</a>
  </li>
  <li className="hover:text-teal-600 cursor-pointer">
    <a href="./OnlineCourses.jsx" className="transition duration-300">All Courses</a>
  </li>
  <li className="hover:text-teal-600 cursor-pointer">
    <a href="./WhyChooseUs.jsx" className="transition duration-300">About</a>
  </li>
  <li className="hover:text-teal-600 cursor-pointer">
    <a href="/team" className="transition duration-300">Team</a>
  </li>
  <li className="hover:text-teal-600 cursor-pointer">
    <a href="/pricing" className="transition duration-300">Pricing</a>
  </li>
  <li className="hover:text-teal-600 cursor-pointer">
    <a href="./Footer.jsx" className="transition duration-300">Contact Us</a>
  </li>
</ul>

        <button className="bg-white px-6 py-2 rounded-lg text-teal-500 font-medium border border-teal-500 hover:bg-teal-100 transition-all">
          Get a Demo
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center px-4 lg:px-20 py-13 bg-gradient-to-r from-teal-50 to-teal-100 mt-18">
        {/* Left Content */}
        <div className="text-center py-10 lg:text-left max-w-2xl">
          <h3 className="text-2xl font-semibold text-teal-600 mb-2 font-sans">
            WELCOME TO SKILLRAIZ
          </h3>
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4 leading-snug font-sans">
            Empowering Careers Through Expert Training and Real-World Skills.
          </h1>
          <p className="text-gray-700 mb-6 font-light text-lg leading-relaxed">
            SkillRaiz Institute is a premier destination for professional and technical education, designed to empower
            individuals and organizations with in-demand skills for the modern workforce. Our mission is to bridge the gap
            between theoretical knowledge and practical application, ensuring learners are equipped to excel in their careers
            and contribute meaningfully to their industries.
          </p>
          <div className="flex space-x-4 justify-center lg:justify-start">
            <button className="bg-teal-500 px-6 py-3 rounded-lg text-white font-medium hover:bg-teal-600 transition-all duration-300 shadow-md hover:shadow-lg">
              Get Started Now
            </button>
            <button className="bg-white px-6 py-3 rounded-lg text-teal-500 font-medium border border-teal-500 hover:bg-teal-100 transition-all duration-300 shadow-md hover:shadow-lg">
              View Course
            </button>
          </div>
        </div>

        {/* Right Image with Animation */}
        <div className="mt-10 xl:mt-0 xl:ml-16  py-11 justify-center animate-up-down">
          <img
            src={imagepath} // Replace with your image path
            alt="Hero"
            className="w-[370px] h-[300px] xl:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] rounded-xl py-10  linear-gradient(to bottom, #e6fcf5, #38b2ac) "
          />
        </div>
      </section>

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
