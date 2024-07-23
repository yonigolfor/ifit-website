import CircularProgress from '@mui/material/CircularProgress';
import React, { useState } from 'react';
 


const ImageWithLoading = ({ src, alt }) => {
    const [loading, setLoading] = useState(true);
  
    return (
      <div className="image-container rotate-z">
        { loading && <CircularProgress /> }
        <img
          src={src}
          alt={alt}
          style={loading ? { display: 'none' } : {}}
          onLoad={() => {
            setLoading(false)
        }}
        /> 
      </div>
    );
  };

  export default ImageWithLoading