// components/ErrorStates/LoadingState.jsx
import React from 'react';
import SkeletonLoader from '../../ui/SkeletonLoader';
import { LessonSkeletonLoader, CourseCardSkeletonLoader, BlogSkeletonLoader } from '../../ui/SkeletonLoaderVariations';

const LoadingState = ({ 
  message = "Loading...", 
  showSkeleton = true, 
  skeletonCount = 1,
  skeletonType = "default" // "default", "lesson", "course", "blog"
}) => {
  const getSkeletonComponent = () => {
    switch (skeletonType) {
      case "lesson":
        return LessonSkeletonLoader;
      case "course":
        return CourseCardSkeletonLoader;
      case "blog":
        return BlogSkeletonLoader;
      default:
        return SkeletonLoader;
    }
  };

  const SkeletonComponent = getSkeletonComponent();

  return (
    <div style={{ textAlign: "center", padding: "20px 0" }}>
      {showSkeleton ? (
        <div>
          {Array.from({ length: skeletonCount }).map((_, index) => (
            <div key={index} style={{ marginBottom: skeletonCount > 1 ? '30px' : '0' }}>
              <SkeletonComponent />
            </div>
          ))}
        </div>
      ) : (
        <>
          <div style={{ marginBottom: '20px' }}>
            <SkeletonLoader />
          </div>
          <p style={{ marginTop: '20px' }}>{message}</p>
        </>
      )}
    </div>
  );
};

export default LoadingState;