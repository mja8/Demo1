// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import WelcomeSection from '../components/WelcomeSection';
import NoticeBoard from '../components/NoticeBoard';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-[#EDEDE9]">
      <Navbar />
      <Slider />
      <WelcomeSection />
      <NoticeBoard />
      <Footer />
    </div>
  );
};

export default Home;
