import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-dark-navy text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <div className="font-bold text-lg">Airforce School Darbhanga</div>

        {/* Hamburger Icon for Small Screens */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={toggleSidebar}
        >
          <span className="text-2xl">&#9776;</span> {/* Hamburger Icon */}
        </button>

        {/* Navigation Links (Hidden on Small Screens) */}
        <ul className="hidden md:flex space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Faculties", path: "/faculties" }, // Updated Path
            { name: "Academics", path: "/academics" },
            { name: "Facilities", path: "/facilities" },
            { name: "Locate Us", path: "/locate-us" },
            { name: "Login", path: "/auth" },
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

      {/* Sidebar for Small Screens */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-dark-navy bg-opacity-95 z-50 flex flex-col">
          {/* Close Button */}
          <button
            className="text-3xl text-white absolute top-4 right-4 focus:outline-none"
            onClick={toggleSidebar}
          >
            &times; {/* Cross Icon */}
          </button>

          {/* Sidebar Navigation Links */}
          <ul className="flex flex-col items-center justify-center space-y-6 h-full">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Faculties", path: "/faculties" }, // Updated Path
              { name: "Academics", path: "/academics" },
              { name: "Facilities", path: "/facilities" },
              { name: "Locate Us", path: "/locate-us" },
              { name: "Login", path: "/auth" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-lg hover:underline hover:text-gray-300 transition-colors"
                  onClick={toggleSidebar} // Close Sidebar on Link Click
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
