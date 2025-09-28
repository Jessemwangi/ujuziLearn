// ui/SkeletonLoaderVariations.jsx
import React from 'react';

// For lesson lists
export const LessonSkeletonLoader = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton skeleton-image" style={{ height: '200px' }}></div>
      <div className="skeleton skeleton-title" style={{ width: '70%', marginTop: '15px' }}></div>
      <div className="skeleton skeleton-text" style={{ width: '90%' }}></div>
      <div className="skeleton skeleton-text" style={{ width: '80%' }}></div>
      <div className="skeleton skeleton-button" style={{ width: '120px', height: '40px', marginTop: '15px' }}></div>
    </div>
  );
};

// For course cards
export const CourseCardSkeletonLoader = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton skeleton-image" style={{ height: '150px' }}></div>
      <div className="skeleton skeleton-title" style={{ width: '80%', marginTop: '10px' }}></div>
      <div className="skeleton skeleton-text" style={{ width: '60%' }}></div>
      <div className="skeleton skeleton-price" style={{ width: '100px', height: '30px', marginTop: '10px' }}></div>
    </div>
  );
};

// For blog posts
export const BlogSkeletonLoader = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton skeleton-image" style={{ height: '250px' }}></div>
      <div className="skeleton skeleton-title" style={{ width: '90%', marginTop: '20px' }}></div>
      <div className="skeleton skeleton-text" style={{ width: '95%' }}></div>
      <div className="skeleton skeleton-text" style={{ width: '85%' }}></div>
      <div className="skeleton skeleton-text" style={{ width: '90%' }}></div>
      <div className="skeleton skeleton-text" style={{ width: '75%' }}></div>
    </div>
  );
};