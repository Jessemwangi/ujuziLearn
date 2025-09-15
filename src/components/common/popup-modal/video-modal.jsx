import React from 'react';
import ReactPlayer from 'react-player';

const VideoModal = ({ isVideoOpen, setIsVideoOpen, videoId = "9Y7ma241N8k" }) => {
  if (!isVideoOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeButton} onClick={() => setIsVideoOpen(false)}>×</button>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          playing
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex',
    justifyContent: 'center', alignItems: 'center', zIndex: 1000
  },
  modal: {
    position: 'relative', width: '80%', maxWidth: '800px', aspectRatio: '16/9'
  },
  closeButton: {
    position: 'absolute', top: 10, right: 10, fontSize: '1.5rem',
    background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer'
  }
};

export default VideoModal;
