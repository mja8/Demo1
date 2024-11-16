// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-navy text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Map */}
        <div className="map-container">
          <h2 className="text-lg font-semibold mb-4">Our Location</h2>
          <iframe
            title="School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8434918040125!2d90.41251831429762!3d23.81033198456727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b858d9e3cddd%3A0x5e4c3fbdba3202f5!2sSchool%20Location!5e0!3m2!1sen!2sbd!4v1697902492155!5m2!1sen!2sbd"
            width="100%"
            height="350"
            allowFullScreen
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </div>

        {/* Right Section - Information */}
        <div className="info-container">
          <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
          <div className="mb-4">
            <p className="text-md font-medium">Address:</p>
            <p>AFS Darbhanga, Station Road, Darbhanga, Bihar, India</p>
          </div>
          <div className="mb-4">
            <p className="text-md font-medium">Phone:</p>
            <p>123-456-7890</p>
          </div>
          <div className="mb-4">
            <p className="text-md font-medium">Email:</p>
            <p>
              <a href="mailto:info@afsdarbhanga.com" className="text-blue-400 hover:underline">
                info@afsdarbhanga.com
              </a>
            </p>
          </div>
          <div className="mb-4">
            <p className="text-md font-medium">Social Media:</p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-400 hover:underline">
                Facebook
              </a>
              <a href="#" className="text-blue-400 hover:underline">
                Twitter
              </a>
              <a href="#" className="text-blue-400 hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <p className="text-md font-medium">Office Hours:</p>
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p>Saturday: 10:00 AM - 3:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} AFS Darbhanga. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


