import React from "react";

const Academics = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-800">Academics</h1>
        <p className="text-lg text-gray-600 mt-2">
          Explore our robust curriculum designed for holistic development.
        </p>
      </header>

      {/* Curriculum Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Curriculum</h2>
        <p className="text-gray-700 leading-relaxed">
          At Airforce School Darbhanga, our curriculum is tailored to meet the needs of
          students from diverse backgrounds, focusing on both academic excellence and
          co-curricular activities. We follow a comprehensive syllabus aligned with the
          latest CBSE standards to ensure a well-rounded education.
        </p>
      </section>

      {/* Subjects Offered Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Subjects Offered</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Mathematics</li>
          <li>Science (Physics, Chemistry, Biology)</li>
          <li>Social Studies (History, Geography, Civics, Economics)</li>
          <li>English Language and Literature</li>
          <li>Hindi</li>
          <li>Computer Science</li>
          <li>Physical Education</li>
          <li>Arts and Music</li>
        </ul>
      </section>

      {/* Key Highlights Section */}
      <section>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Key Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Highlight 1 */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-bold text-blue-800">Innovative Teaching</h3>
            <p className="text-gray-600 mt-2">
              Our faculty employs cutting-edge teaching methods, fostering creativity
              and critical thinking.
            </p>
          </div>
          {/* Highlight 2 */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-bold text-blue-800">State-of-the-Art Labs</h3>
            <p className="text-gray-600 mt-2">
              We provide modern labs for Science, Mathematics, and Computer Science.
            </p>
          </div>
          {/* Highlight 3 */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-bold text-blue-800">Holistic Development</h3>
            <p className="text-gray-600 mt-2">
              We emphasize physical, emotional, and social development alongside academics.
            </p>
          </div>
          {/* Highlight 4 */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-bold text-blue-800">Student Clubs</h3>
            <p className="text-gray-600 mt-2">
              Students can participate in various clubs like Robotics, Debate, and Drama.
            </p>
          </div>
          {/* Highlight 5 */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-bold text-blue-800">Extracurricular Activities</h3>
            <p className="text-gray-600 mt-2">
              Our school offers sports, music, and art programs to nurture talent.
            </p>
          </div>
          {/* Highlight 6 */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-bold text-blue-800">Supportive Environment</h3>
            <p className="text-gray-600 mt-2">
              A safe and inclusive environment where every student feels valued.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
