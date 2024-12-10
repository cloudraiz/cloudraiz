import React, { useState } from 'react';
import { FaCloud, FaCode, FaDatabase, FaChartLine } from 'react-icons/fa';
import videopath from "../images/courses.mp4";

const CourseCard = ({ title, icon, content, openModal }) => (
  <div
    className="bg-gradient-to-b from-white to-teal-100 py-9 px-8 shadow-md-white hover:shadow-2xl rounded-xl flex flex-col items-center transition-transform transform hover:-translate-y-2 cursor-pointer"
    onClick={openModal}
  >
    {/* Icon */}
    <div className="text-7xl text-teal-500 mb-4">{icon}</div>
    {/* Title */}
    <h4 className="text-xl font-bold text-gray-800 mb-2">{title}</h4>
    {/* Content */}
    <p className="text-gray-800 text-center leading-relaxed">{content}</p>
    {/* Button */}
    <button className="bg-white px-7 py-1 rounded-lg text-teal-500 font-medium border border-teal-700 hover:bg-teal-400 transition">
      Enroll Now!
    </button>
  </div>
);

const OnlineCourses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);

  const courses = [
    {
      title: 'DEVOPS',
      icon: <FaCode />,
      content:
        'Learn how to implement continuous integration and deployment, automate infrastructure, and manage containerized applications.',
      detailedContent: [
        'DevOps focuses on collaboration between development and operations teams.',
        'Key Tools and Topics:',
        '• CI/CD pipelines with Jenkins or GitLab CI.',
        '• Infrastructure as Code (IaC) using Terraform.',
        '• Containerization with Docker and orchestration with Kubernetes.',
        '• Monitoring tools like Prometheus and Grafana.',
      ],
    },
    {
      title: 'CLOUD',
      icon: <FaCloud />,
      content:
        'Understand cloud architecture and services, scalability, security practices, and deployment strategies across major providers.',
      detailedContent: [
        'Cloud computing provides on-demand IT resources over the internet.',
        'Key Topics:',
        '• Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).',
        '• Popular providers: AWS, Azure, Google Cloud.',
        '• Cloud security best practices and compliance.',
        '• Cost optimization techniques.',
      ],
    },
    {
      title: 'DATA SCIENCE',
      icon: <FaChartLine />,
      content:
        'Master data analysis, visualization techniques, and machine learning algorithms to derive insights from complex data sets.',
      detailedContent: [
        'Data Science involves analyzing large data sets to extract meaningful insights.',
        'Core Topics:',
        '• Statistical analysis and data visualization using Python and R.',
        '• Machine learning algorithms like regression, clustering, and neural networks.',
        '• Tools: Jupyter Notebook, TensorFlow, and Scikit-learn.',
        '• Data wrangling and preprocessing techniques.',
      ],
    },
    {
      title: 'DATA ENGINEERING',
      icon: <FaDatabase />,
      content:
        'Develop data pipelines,and work with big data technologies, and ensure efficient the data processing and storage.',
      detailedContent: [
        'Data Engineering focuses on building systems to store and process data efficiently.',
        'Important Concepts:',
        '• Building ETL pipelines to transform data.',
        '• Working with big data tools like Hadoop and Apache Spark.',
        '• Managing databases using SQL and NoSQL systems.',
        '• Real-time data processing with Apache Kafka.',
      ],
    },
  ];

  const openModal = (course) => {
    setCurrentCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentCourse(null);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-98 object-cover -z-9"
        src={videopath}
        autoPlay
        loop
        muted
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 -z-10"></div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center">
        <div className="text-white mb-12">
          <h1 className="text-4xl font-bold">Explore Our Courses</h1>
          <p className="text-2xl mt-4">Elevate your career with expertly designed learning paths.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl px-6">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              icon={course.icon}
              content={course.content}
              openModal={() => openModal(course)}
            />
          ))}
        </div>
      </div>

      {/* Modal for Course Details */}
      {isModalOpen && currentCourse && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl max-w-2xl w-full">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-teal-700">{currentCourse.title}</h3>
              <button
                onClick={closeModal}
                className="text-xl font-semibold text-gray-600 hover:text-gray-900"
              >
                X
              </button>
            </div>
            <div className="mt-4 space-y-2">
              {currentCourse.detailedContent.map((content, index) => (
                <p key={index} className="text-gray-800 text-lg leading-relaxed">
                  {content}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnlineCourses;
