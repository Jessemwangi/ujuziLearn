import React from 'react';
import Link from 'next/link';

const EmptyState = ({
  message = "No data available.",
  showAction = false,
  actionText = "Browse Courses",
  onAction = null
}) => {
  return (
    <div className="edu-auth-wrapper">
      <div className="edu-auth-container">
        <div className="edu-auth-box">
          <div className="edu-auth-icon warning" style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>
            📭
          </div>
          <h2 className="edu-auth-title">No Data Available</h2>
          <p className="edu-auth-message">{message}</p>

          {showAction && (
            <div className="form-group" style={{ marginTop: '2rem' }}>
              {onAction ? (
                <button onClick={onAction} className="edu-btn btn-medium">
                  {actionText} <i className="icon-4"></i>
                </button>
              ) : (
                <Link href="/courses" className="edu-btn btn-medium">
                  {actionText} <i className="icon-4"></i>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
