import React from 'react';
import { FaChalkboardTeacher, FaCertificate, FaUserGraduate } from 'react-icons/fa';
import imagepath from "../images/benitsimg.png";

const OnlineLearningBenefits = () => {
  return (
    <div className="flex flex-col bg-gray-100 md:flex-row items-center justify-center py-8">
    {/* Image Section */}
    <div className="flex-1 flex   w-100 justify-center">
      <img
        src={imagepath} // Correct attribute for the image source
        alt="Benefits of online learning" // Meaningful alt text for accessibility
        className="w-full max-w-md rounded-lg shadow-xl" // Optional styling
      />
    </div>
  
      {/* Text Section */}
      <div className="flex-1 max-w-4xl px-6">
        <h2 className="text-teal-500 text-lg font-semibold mb-2">LEARN ANYTHING</h2>
        <h1 className="text-3xl font-bold mb-6">Benefits About Online Learning Expertise</h1>
        <div className="space-y-6">
          {/* Online Courses Benefit */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center">
              <FaChalkboardTeacher className="text-white" size={27} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Online Courses</h3>
              <p className="text-gray-900 ">
                One key benefit of online courses is flexibility. Learners can access course materials anytime and from anywhere, allowing them to balance their education with work, family, and other commitments.
              </p>
            </div>
          </div>

          {/* Earn A Certificate Benefit */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center">
              <FaCertificate className="text-white" size={27} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Earn A Certificate</h3>
              <p className="text-gray-900 bg-gray-100">
                One major benefit of earning a certificate is enhanced career opportunities. A certificate demonstrates to employers that you have acquired specific skills and knowledge, making you a more attractive candidate for job promotions.
              </p>
            </div>
          </div>

          {/* Learn with Experts Benefit */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center">
              <FaUserGraduate className="text-white" size={27} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Learn with Experts</h3>
              <p className="text-gray-900 bg-gray-100">
                A key benefit of learning with experts is access to industry insights and advanced knowledge. Experts bring real-world experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineLearningBenefits;
