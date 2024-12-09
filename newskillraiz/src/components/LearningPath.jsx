import React from "react";
import { FaRocket, FaBook, FaClipboardCheck, FaGraduationCap, FaArrowRight } from "react-icons/fa";

const LearningPath = () => {
  const steps = [
    { icon: <FaRocket />, title: "Start Journey" },
    { icon: <FaBook />, title: "Get Trained" },
    { icon: <FaClipboardCheck />, title: "Submit Assignment" },
    { icon: <FaGraduationCap />, title: "Get Certified" },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-teal-100">
      {/* Learning Path Section */}
      <section className="flex flex-col items-center px-6 lg:px-20 py-20">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-teal-600 mb-3">Learning Path</h1>
        <p className="text-center  text-lg text-gray-800 max-w-2xl mb-12">
          Follow the step-by-step journey to transform your skills and achieve your goals with SkillRaiz. 
          Each step brings you closer to success.
        </p>

        {/* Steps and Arrows */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Circle for each step */}
              <div
                className="w-48 h-48 flex flex-col items-center justify-center border-4 border-teal-600 rounded-full hover:bg-teal-400 transition-all"
              >
                {/* Icon in Black */}
                <div className="text-5xl text-black mb-2">{step.icon}</div>
                {/* Title */}
                <p className="text-center text-gray-800 text-sm font-semibold">{step.title}</p>
              </div>
              {/* Arrow between steps (skip adding an arrow after the last step) */}
              {index < steps.length - 1 && (
                <div className="flex items-center text-teal-600 text-3xl">
                  <FaArrowRight />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LearningPath;
