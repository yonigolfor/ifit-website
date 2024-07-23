import React from 'react';
import './Gallery.css';

import mockupBarChart from '../images/mockups/light/mockup-exercise-barchart.webp'
import mockupMainFeed from '../images/mockups/light/mockup-mainfeed.webp'
import mockupStopWatch from '../images/mockups/light/mockup-stopwatch2.webp'
import ImageWithLoading from './ImageWithLoading';


function Gallery() {
  return (
    <section className="gallery">
      <div className='image-container-container'>
        <div className="image-container">
        {/* <img
  srcset="https://storage.googleapis.com/mystrapi-bucket/yoni/mockup-stopwatch2.919c6c4eab58965f3a7c-400w.avif 400w, https://storage.googleapis.com/mystrapi-bucket/yoni/mockup-stopwatch2.919c6c4eab58965f3a7c-600w.avif 600w, https://storage.googleapis.com/mystrapi-bucket/yoni/mockup-stopwatch2.919c6c4eab58965f3a7c-800w.avif 800w, https://storage.googleapis.com/mystrapi-bucket/yoni/mockup-stopwatch2.919c6c4eab58965f3a7c-1000w.avif 1000w, https://storage.googleapis.com/mystrapi-bucket/yoni/mockup-stopwatch2.919c6c4eab58965f3a7c-1200w.avif 1200w, https://storage.googleapis.com/mystrapi-bucket/yoni/mockup-stopwatch2.919c6c4eab58965f3a7c-1600w.avif 1600w"
  sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, (min-width: 1201px) 1600px"
  src="https://storage.googleapis.com/mystrapi-bucket/yoni/mockup-stopwatch2.919c6c4eab58965f3a7c.webp"
  alt="App preview 3"
/> */}
          <ImageWithLoading src={mockupMainFeed} alt="App preview 1" />
          <ImageWithLoading src={mockupBarChart} alt="App preview 2" />
          <ImageWithLoading src={mockupStopWatch} alt="App preview 3" /> 
        </div>
      </div>
    </section>
  );
}

export default Gallery;
