// src/components/Slider.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';


const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [image1, image2, image3, image4];

  return (
    <div className="w-full h-64 bg-gray-300">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="h-96">
            <img src={image} alt={`Slide ${index}`} className="h-full w-full object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
