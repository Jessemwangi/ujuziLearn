import React from 'react';

const SkeletonLoader = () => {
    return (
       <div className="skeleton-wrapper">
      <div className="skeleton skeleton-image"></div>
      <div className="skeleton skeleton-title"></div>
      <div className="skeleton skeleton-text" style={{ width: '90%' }}></div>
      <div className="skeleton skeleton-text" style={{ width: '80%' }}></div>
      <div className="skeleton skeleton-text" style={{ width: '85%' }}></div>
    </div>
    );
};

export default SkeletonLoader;