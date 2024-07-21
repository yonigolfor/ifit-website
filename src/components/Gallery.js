// src/components/Gallery.js
import React from 'react';
import './Gallery.css';
// import appImage1 from '../images/appImage1.png';

import mockup1 from '../images/mockups/double onboarding mockup.png'
import mockup2 from '../images/mockups/onBoarding mockup.png'
import mockup3 from '../images/mockups/workout mockup.png'


function Gallery() {
  return (
    <section className="gallery">
      <div className='image-container-container'>
        <div className="image-container">
          <img src={mockup2} alt="App preview 1" />
          <img src={mockup1} alt="App preview 1" />
          <img src={mockup3} alt="App preview 1" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
