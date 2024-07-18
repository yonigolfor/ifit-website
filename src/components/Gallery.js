// src/components/Gallery.js
import React from 'react';
import './Gallery.css';
import appImage1 from '../images/appImage1.png';
// import appImage2 from '../images/appImage2.png';
// import appImage3 from '../images/appImage3.png';

function Gallery() {
  return (
    <section className="gallery">
      <h2>App Previews</h2>
      <div className="image-container">
        <img src={appImage1} alt="App preview 1" />
        <img src={appImage1} alt="App preview 2" />
        <img src={appImage1} alt="App preview 3" />
      </div>
    </section>
  );
}

export default Gallery;
