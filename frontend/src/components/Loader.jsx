import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-wrapper">
        <div className="loader-ring"></div>
        <div className="loader"></div>
      </div>
      <div className="loader-text">YÜKLENİYOR...</div>
    </div>
  );
};

export default Loader;