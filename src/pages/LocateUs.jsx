import React from "react";

const LocateUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-800">Locate Us</h1>
        <p className="text-lg text-gray-600 mt-2">
          Visit us at our campus. Here's our location on the map:
        </p>
      </header>

      {/* Map Section */}
      <section className="flex justify-center items-center">
        <div className="w-full h-96 sm:w-4/5 sm:h-[500px] lg:w-3/4 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126917.5416398838!2d85.86188916854058!3d25.991972537925085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5f6b8a7cb5fd%3A0x1e6ee0b68f2b3f8d!2sAirforce%20School%20Darbhanga!5e0!3m2!1sen!2sin!4v1694090485701!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Address Section */}
      <section className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Address</h2>
        <p className="text-gray-700">
          Airforce School, Darbhanga<br />
          Near Airforce Station<br />
          Darbhanga, Bihar, India<br />
          Pin Code: 846005
        </p>
      </section>
    </div>
  );
};

export default LocateUs;
