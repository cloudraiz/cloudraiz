import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import onlineImage from "../images/h.png";
import offlineImage from "../images/c.jpg";

const sessions = [
  {
    type: "Online",
    description: "Learn anytime, anywhere with flexible online classes. Flexible Learning Anytime, Anywhere: Access course materials and lectures from any device, allowing you to learn at your own pace and from any location.",
    image: onlineImage,
  },
  {
    type: "Offline",
    description: "Engage with hands-on, in-person learning experiences. On-Campus Learning: Participate in real-time discussions and practical exercises with fellow students and instructors, providing a more interactive and immersive learning experience.",
    image: offlineImage,
  },
];


const Sessions = () => {
  return (
    <section className="bg-gradient-to-r from-teal-50 to-green-100 py-12 pb-10">
      {/* Section Title */}
      <div className="text-center mb-8 pt-16">
  <h2 className="text-3xl  py-8 sm:text-4xl font-semibold text-teal-700 mb-2">
    Explore Our Sessions
  </h2>
  
  
</div>


      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {sessions.map((session, index) => (
         <div
         key={index}
         className="relative bg-gradient-to-b from-white to-teal-100 border border-gray-400 shadow-xl rounded-xl w-96 sm:w-80 md:w-96 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
       >
       
            {/* Image with Playback Button */}
            <div className="relative">
              <img
                src={session.image}
                alt={`${session.type} Session`}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-t-lg text-white">
                <FaPlayCircle size={49} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
                {session.type} Sessions
              </h3>
              <p className="text-gray-900 text-center leading-relaxed mb-6">
                {session.description}
              </p>
              <button className="block mx-auto bg-teal-600 text-white text-sm py-2 px-6 rounded-full font-medium shadow hover:bg-teal-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sessions;
