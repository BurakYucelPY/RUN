import React from 'react';
import './Loader.css';

const Loader = ({ text = "YÜKLENİYOR..." }) => {
  return (
    <div className="loader-container">
      <div className="loader-wrapper">
        <div className="loader-ring"></div>
        <div className="loader"></div>
      </div>
      <div className="loader-text">{text}</div>
    </div>
  );
};

export default Loader;