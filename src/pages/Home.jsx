import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import WelcomeSection from "../components/WelcomeSection";
import NoticeBoard from "../components/NoticeBoard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-[#EDEDE9] min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Slider Section */}
      <div className="relative z-0">
        <Slider />
      </div>

      {/* Welcome Section */}
      <div className="mt-8">
        <WelcomeSection />
      </div>

      {/* Notice Board Section */}
      <div className="mt-8">
        <NoticeBoard />
      </div>

      {/* Footer */}
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
