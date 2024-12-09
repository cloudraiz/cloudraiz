import React from "react";

const companies = [
  { id: 1, name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { id: 2, name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { id: 3, name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
  { id: 4, name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { id: 5, name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { id: 6, name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" },
  { id: 7, name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Tesla_logo.png" },
  { id: 8, name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Adobe_Corporate_Logo.png" },
  { id: 9, name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_with_text.svg" },
  { id: 10, name: "Twitter", logo: "https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg" },
  { id: 11, name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Salesforce_logo.svg" },
  { id: 12, name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
];

const OurWorks = () => {
  return (
    <div className="relative py-12 bg-gradient-to-br from-teal-300 via-green-200 to-blue-300">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        {/* Gradient Blobs */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-blue-400 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-teal-300 rounded-full filter blur-3xl opacity-30"></div>
        {/* Subtle Diagonal Pattern */}
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
      </div>

      {/* Headline */}
      <h2 className="text-4xl font-semibold text-teal-800 text-center z-10 relative">
        Our Alumni Work At
      </h2>
      <p className="text-center text-gray-900 mt-2 mb-8 z-10 relative">
        Discover the global companies where our graduates make an impact.
      </p>

      {/* Scrolling Logos */}
      <div className="overflow-hidden relative z-10">
        <div className="flex space-x-8 px-8 py-6 animate-scroll">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex-none w-32 h-24 flex items-center justify-center  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-16 object-contain"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/150?text=Logo+Not+Available'; // Fallback image
                  e.target.alt = 'Logo not found';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation CSS */}
      <style>
        {`
          @keyframes scroll-left {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-scroll {
            animation: scroll-left 25s linear infinite;
          }

          .bg-pattern {
            background-image: url('https://www.transparenttextures.com/patterns/diagonal-stripes.png');
            background-size: 50px 50px;
          }
        `}
      </style>
    </div>
  );
};

export default OurWorks;
