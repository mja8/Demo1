import React from 'react';

const Facilities = () => {
  return (
    <div className="bg-beige min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto py-8 text-center">
        <h2 className="text-2xl font-bold text-violet-700 mb-4">Facilities</h2>
        <p className="text-violet-700 mb-4">
          At Airforce School Darbhanga, we offer a wide range of facilities to ensure our students have the best learning experience.
        </p>
        <ul className="list-none text-violet-700 space-y-2">
          <li>State-of-the-art classrooms with modern teaching aids</li>
          <li>Fully equipped science and computer labs</li>
          <li>Extensive library with a vast collection of books and journals</li>
          <li>Sports facilities including playgrounds and indoor games</li>
          <li>Auditorium for cultural activities and events</li>
          <li>Cafeteria serving nutritious meals</li>
          <li>Transportation facilities for students and staff</li>
          <li>Medical room with a qualified nurse</li>
        </ul>
      </div>
    </div>
  );
};

export default Facilities;
