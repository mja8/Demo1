// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-dark-navy text-white p-4 text-center">
      <div className="container mx-auto flex justify-between">
        <div className="font-bold">Airforce School Darbhanga</div>
        <ul className="flex space-x-4">
          {['Home', 'About Us', 'Faculties', 'Academics', 'Facilities', 'Locate Us', 'Login'].map((item) => (
            <li key={item}>
              <a href="#" className="hover:underline">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
