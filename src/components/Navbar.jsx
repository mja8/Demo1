import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-dark-navy text-white p-4 text-center">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <div className="font-bold text-lg">Airforce School Darbhanga</div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/" },
            { name: "Faculties", path: "/" },
            { name: "Academics", path: "/" },
            { name: "Facilities", path: "/" },
            { name: "Locate Us", path: "/" },
            { name: "Login", path: "/auth" }, // Updated for Login/Signup
          ].map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="hover:underline hover:text-gray-300 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
