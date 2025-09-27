// components/ErrorStates/StateHandler.jsx
import React from 'react';
import ErrorHandler from './ErrorHandler';
import EmptyState from './EmptyState';
import LoadingState from './LoadingState';

const StateHandler = ({
  // State props
  isLoading = false,
  isError = false,
  error = null,
  data = null,
  isEmpty = false,
  
  // Custom messages
  loadingMessage,
  emptyMessage,
  
  // Error handler props
  onRetry,
  onRefetch,
  showRetry = false,
  showHome = false,
  showRefetch = false,
  customErrorMessage,
  headDisplay = true,
  
  // Empty state props
  showEmptyAction = false,
  emptyActionText,
  onEmptyAction,
  
  // Children to render when everything is fine
  children
}) => {
  // Loading state
  if (isLoading) {
    return <LoadingState message={loadingMessage} />;
  }

  // Error state
  if (isError) {
    return (
      <ErrorHandler
        error={error}
        onRetry={onRetry}
        onRefetch={onRefetch}
        showRetry={showRetry}
        showHome={showHome}
        showRefetch={showRefetch}
        customMessage={customErrorMessage}
        headDisplay={headDisplay}
      />
    );
  }

  // Empty state (no data available)
  if (isEmpty || (data && (Array.isArray(data) ? data.length === 0 : !data))) {
    return (
      <EmptyState
        message={emptyMessage}
        showAction={showEmptyAction}
        actionText={emptyActionText}
        onAction={onEmptyAction}
      />
    );
  }

  // Success state - render children
  return children;
};

export default StateHandler;