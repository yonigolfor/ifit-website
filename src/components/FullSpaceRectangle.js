import React from 'react';
import './FullSpaceRectangle.css';

const FullSpaceRectangle = ({ children }) => {
  return (
    <div className="full-space-rectangle">
      {children}
    </div>
  );
};

export default FullSpaceRectangle;