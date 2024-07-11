import React, { useState, useEffect } from 'react';
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import image3 from '../../assets/images/image3.png';
import image4 from '../../assets/images/image2.png';
import image5 from '../../assets/images/image1.png';
import ourwork from '../../assets/images/ourwork.png';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slider-container">
      <button className="nav-button" onClick={goToPrevious}>Previous</button>
      
      <div className="slider-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`slide-image ${
              index === currentIndex ? 'active' : index === (currentIndex - 1 + images.length) % images.length || index === (currentIndex + 1) % images.length ? 'adjacent' : ''
            }`}
          />
        ))}
      </div>
      <button className="nav-button" onClick={goToNext}>Next</button>
    </div>
  );
};

const LatestWorks = () => {
  const images = [  image1, image2,  image3,  image4,  image5,
  ];

  return (
    <div>
      <div className='latest'>
        <h2>ENJOY OUR <span>LATEST</span> </h2>
        <h2> PROJECTS</h2>
      
      <div>
        <img src={ourwork} alt="" />
      </div>
      </div>
      <div>
        <ImageSlider images={images} />
      </div>
    </div>
        
           
  );
};

export default LatestWorks;
