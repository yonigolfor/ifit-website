// src/components/Gallery.js
import React from 'react';
import './Gallery.css';
import appImage1 from '../images/appImage1.png';


function Gallery() {
  return (
    <section className="gallery">
      <div className="image-container">
        <img src={appImage1} alt="App preview 1" />
      </div>
    </section>
  );
}

export default Gallery;
