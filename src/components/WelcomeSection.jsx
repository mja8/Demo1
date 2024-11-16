import React from "react";

const WelcomeSection = () => {
  return (
    <div className="p-6 md:p-10 lg:p-16 bg-gradient-to-r from-blue-100 via-white to-blue-100 text-center shadow-lg rounded-lg relative z-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-blue-800">
        Welcome to Airforce School Darbhanga
      </h1>
      <p className="text-base md:text-lg lg:text-xl mb-4 text-gray-700">
        At Airforce School Darbhanga, we are committed to fostering a holistic and dynamic
        learning environment. Our aim is to empower students with a strong academic
        foundation, life skills, and values.
      </p>
      <p className="text-base md:text-lg lg:text-xl mb-4 text-gray-700">
        Our state-of-the-art infrastructure and dedicated faculty ensure every student
        reaches their full potential. We focus on academic excellence, extracurricular
        engagement, and moral development to create future-ready individuals.
      </p>
      <p className="text-base md:text-lg lg:text-xl text-gray-700">
        Join us on this journey of excellence and growth. Let’s shape a brighter future together!
      </p>
    </div>
  );
};

export default WelcomeSection;
