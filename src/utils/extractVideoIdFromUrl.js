export const extractVideoCode = (videoUrl ) => {
        // Example URL: https://www.youtube.com/watch?v=9Y7ma241N8k
        const match = videoUrl?.match(/[?&]v=([^&]+)/);
        return match && match[1];
    };