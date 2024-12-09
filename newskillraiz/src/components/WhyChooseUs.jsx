import React, { useState } from "react";
import videopath from "../images/w.mp4";

const WhyChooseUs = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative w-full h-full">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videopath}
        autoPlay
        loop
        muted
      />

      {/* Overlay for dimming or color adjustment */}
      <div className="absolute inset-0 bg-teal-400 bg-opacity-10"></div>

      {/* Content Section */}
      <div className="relative py-12 px-6 rounded-lg shadow-lg max-w-8xl mx-auto z-7">
      <div className="relative bg-gradient-to-r from-teal-50/70 to-teal-100/70 p-8 rounded-lg shadow-md">

          <div className="grid grid-cols-1 gap-8 items-center">
            {/* Why Choose Us Content */}
            <div className="text-center">
              <h2 className="text-4xl text-teal-700 font-bold mb-4">
                Why Choose SkillRaiz?
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                SkillRaiz is dedicated to empowering individuals with comprehensive
                training programs. Our solutions are built on a foundation of
                innovation, reliability, and agility, ensuring your business
                remains competitive and future-ready. We use a mix of modern
                learning methods and technologies, such as interactive content,
                gamification, and AI-driven learning paths, to make the learning
                experience more engaging and effective. Whether it’s streamlining
                your software development life cycle or leveraging cutting-edge
                AI, we are your trusted technology partner.
              </p>
              <p className="text-3xl font-semibold mb-3 text-gray-800">
                With SkillRaiz, you'll gain:
              </p>
              <ul className="list-disc-center pl-8 text-gray-700 text-lg space-y-2 text-center">
                <li>Expert guidance from industry professionals.</li>
                <li>Practical experience through real-world projects.</li>
                <li>Access to a network of peers and mentors.</li>
                <li>Flexible learning options tailored to your schedule.</li>
              </ul>
              <button
                onClick={() => setShowForm(true)}
                className="mt-4 px-6 py-2 bg-white px-6 py-2 rounded-lg text-teal-900 font-semibold border border-teal-500 hover:bg-teal-100 transition-all  rounded hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-300 text-sm"
              >
                Let’s Start
              </button>
            </div>
          </div>

          {/* Contact Form */}
          {showForm && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              onClick={() => setShowForm(false)}
            >
              <form
                onClick={(e) => e.stopPropagation()}
                className="space-y-4 border border-gray-300 w-full max-w-2xl p-8 rounded-lg bg-white shadow-lg"
              >
                <h3 className="text-2xl font-bold text-teal-700 mb-4 text-center">
                  Contact Us
                </h3>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-1 text-sm"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 bg-gray-100 text-gray-700 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-gray-700 font-medium mb-1 text-sm"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    className="w-full px-3 py-2 bg-gray-100 text-gray-700 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-500"
                    placeholder="Enter your mobile number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-1 text-sm"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 bg-gray-100 text-gray-700 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="course"
                    className="block text-gray-700 font-medium mb-1 text-sm"
                  >
                    Which Course?
                  </label>
                  <select
                    id="course"
                    className="w-full px-3 py-2 bg-gray-100 text-gray-700 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="devops">DevOps</option>
                    <option value="cloud">Cloud</option>
                    <option value="data-science">Data Science</option>
                    <option value="data-engineering">Data Engineering</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="location"
                    className="block text-gray-700 font-medium mb-1 text-sm"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="w-full px-3 py-2 bg-gray-100 text-gray-700 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-500"
                    placeholder="Enter your location"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300 text-sm"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 text-sm"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
