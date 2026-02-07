/**
 * Utility function to handle offline course file downloads
 * Shows appropriate messages for missing or empty files
 */

export const downloadOfflineFile = (fileData, courseName) => {
  // Check if file exists
  if (!fileData || !fileData.url) {
    return {
      success: false,
      message: "📚 Offline Download Not Available",
      description: "This course does not have an offline learning package available yet. Please check back later or contact the instructor."
    };
  }

  // Check if file URL is valid
  if (typeof fileData.url !== 'string' || fileData.url.trim() === '') {
    return {
      success: false,
      message: "⚠️ Download File Not Ready",
      description: "The offline course file is not yet available for download. Please contact support if this persists."
    };
  }

  try {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = fileData.url;
    
    // Use filename from response or create one from course name
    const fileName = fileData.name || `${courseName?.replace(/\s+/g, '_')}_offline_course_${new Date().getTime()}`;
    link.setAttribute('download', fileName);
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    return {
      success: true,
      message: "✅ Download Started",
      description: `Downloading ${fileName}...`
    };
  } catch (error) {
    console.error('Download error:', error);
    return {
      success: false,
      message: "❌ Download Failed",
      description: "An error occurred while trying to download the file. Please try again later."
    };
  }
};

/**
 * Show a toast or alert with download status
 * You can integrate with your toast library (if available)
 */
export const showDownloadMessage = (result) => {
  // If you have a toast library like react-toastify, use it:
  // toast.info(result.message);
  
  // Otherwise, use browser alert
  const fullMessage = `${result.message}\n\n${result.description}`;
  alert(fullMessage);
};

/**
 * Check if file is available
 */
export const isOfflineFileAvailable = (fileData) => {
  return fileData && fileData.url && typeof fileData.url === 'string' && fileData.url.trim() !== '';
};
