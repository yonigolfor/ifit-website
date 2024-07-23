import React from 'react';
import './Gallery.css';
import mockupBarChart from '../images/mockups/mockup exercise barchart.png'
import mockupMainFeed from '../images/mockups/mockup mainfeed.png'
import mockupStopWatch from '../images/mockups/mockup stopwatch2.png'
import ImageWithLoading from './ImageWithLoading';


function Gallery() {
  return (
    <section className="gallery">
      <div className='image-container-container'>
        <div className="image-container">
          <ImageWithLoading src={mockupMainFeed} alt="App preview 1" />
          <ImageWithLoading src={mockupBarChart} alt="App preview 2" />
          <ImageWithLoading src={mockupStopWatch} alt="App preview 3" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
