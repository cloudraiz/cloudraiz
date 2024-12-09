import React from "react";

const Location = () => {
  return (
    <section className="p-8 bg-gradient-to-r from-teal-50 to-teal-100">
      <h2 className="text-4xl font-bold text-teal-800 mb-4">Our Location</h2>
      <div className="relative overflow-hidden w-full h-80 rounded-lg shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.331781115912!2d78.3936979!3d17.4519479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb910047ac5349%3A0x4b3ab834f0c5d856!2sDigileaf%20Technologies%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1693230310845!5m2!1sen!2sin"
          className="w-full h-full border-none"
          allowFullScreen
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
