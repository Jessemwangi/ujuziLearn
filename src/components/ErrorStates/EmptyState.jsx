// components/ErrorStates/EmptyState.jsx
import React from 'react';

const EmptyState = ({ 
  message = "No data available.", 
  showAction = false,
  actionText = "Browse Courses",
  onAction = null 
}) => {
  return (
    <div style={{ textAlign: "center", padding: "80px 0" }}>
      <h2>No Data Available</h2>
      <p>{message}</p>
      {showAction && (
        <button 
          onClick={onAction}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          {actionText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;