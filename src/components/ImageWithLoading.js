import CircularProgress from '@mui/material/CircularProgress';
import React, { useState } from 'react';
import FullSpaceRectangle from './FullSpaceRectangle';
 


const ImageWithLoading = ({ src, alt }) => {
    const [loading, setLoading] = useState(true);
  
    return (
      <div className="image-container rotate-z">
        { loading && 
            <FullSpaceRectangle>
                <CircularProgress />
            </FullSpaceRectangle> 
            }
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