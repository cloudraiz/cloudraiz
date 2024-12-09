import React from "react";
import videopath from "../images/in.mp4";

const instructors = [
  {
    name: "K. Raghavender",
    role: "Course Instructor",
    image: "/instructor3.jpg",
    description: "Raghavendra has over 15 years of experience in the tech industry, specializing in DevOps practices, cloud architecture, and continuous integration. He has worked with leading tech companies, implementing scalable and efficient solutions.",
    expertise: "Raghavendra teaches all courses, from DevOps and cloud computing to data engineering and data science. He brings a unique blend of theoretical knowledge and hands-on experience to the classroom.",
  },
  // Add more instructors as needed
];

const OurInstructors = () => {
  return (
    <section className="relative bg-green-50 p-8 w-full">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
      >
        <source src={videopath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-teal-700 text-center">Our Instructors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 w-full">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between p-4  rounded-lg shadow-lg  hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="w-40 h-40 overflow-hidden rounded-full border-4 border-teal-500 flex-shrink-0">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content Section */}
              <div className="ml-6 flex flex-col items-start text-gray-900 w-full">
                <h3 className="text-3xl font-semibold text-teal-600">{instructor.name}</h3>
                <p className="text-xl text-gray-900 text-xl">{instructor.role}</p>
                <p className="mt-4 text-gray-900 text-xl">{instructor.description}</p>
                <p className="mt-4 text-gray-900 italic text-xl">
                  "Teaches all courses, ensuring a comprehensive understanding of each subject and practical insights."
                </p>
                <p className="mt-4 text-gray-900 text-xl">
                  {instructor.expertise}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurInstructors;
