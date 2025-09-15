import React, { useEffect, useCallback } from 'react';

const VideoModal = ({ isVideoOpen, setIsVideoOpen, videoId = "9Y7ma241N8k" }) => {
  // Close modal on Escape key
  const handleEscapeKey = useCallback((event) => {
    if (event.key === 'Escape') {
      setIsVideoOpen(false);
    }
  }, [setIsVideoOpen]);

  // Close modal when clicking outside
  const handleOverlayClick = useCallback((event) => {
    if (event.target === event.currentTarget) {
      setIsVideoOpen(false);
    }
  }, [setIsVideoOpen]);

  // Close button handler
  const handleCloseClick = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsVideoOpen(false);
  }, [setIsVideoOpen]);

  // Add/remove event listeners
  useEffect(() => {
    if (isVideoOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isVideoOpen, handleEscapeKey]);

  if (!isVideoOpen) return null;

  return (
    <div style={styles.overlay} onClick={handleOverlayClick}>
      <div style={styles.modal}>
        <button 
          style={styles.closeButton} 
          onClick={handleCloseClick}
          aria-label="Close video"
          type="button"
        >
          ×
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={styles.iframe}
        />
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '20px',
  },
  modal: {
    position: 'relative',
    width: '90%',
    maxWidth: '900px',
    aspectRatio: '16/9',
    backgroundColor: '#000',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    width: '40px',
    height: '40px',
    fontSize: '24px',
    fontWeight: 'bold',
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    zIndex: 1001,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.2s ease',
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
};

export default VideoModal;