import React from 'react';
import Link from 'next/link';
import { Wrapper, Header, Footer } from '../../layout';
import SEO from '../seo';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../contexts/mouse-move-context';
import SessionExpiredModal from '../SessionExpiredModal';

const ErrorHandler = ({
  error,
  onRetry,
  onHome,
  onRefetch,
  showRetry = false,
  showHome = false,
  showRefetch = false,
  customMessage,
  children,
  headDisplay = true,
}) => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI();
  
  if (!error) return children || null;

  // --- Session Expired (Still uses separate modal) ---
  const isSessionExpired =
    error?.status === 401 &&
    (error?.message?.toLowerCase().includes('token') ||
    error?.message?.toLowerCase().includes('authenticate') ||
    error?.message?.toLowerCase().includes('expired'));

  if (isSessionExpired) {
    return <SessionExpiredModal />;
  }

  // --- General Error Handling (Including Restricted Access) ---
  const getErrorConfig = () => {
    
    const isRestrictedAccess =
      error?.status === 403 ||
      error?.message?.toLowerCase().includes('forbidden') ||
      error?.message?.toLowerCase().includes('access denied') ||
      error?.message?.toLowerCase().includes('not authorized');
      
    // 1. ACCESS RESTRICTED (403) - REFRESH AND RETRY ARE EXPLICITLY FALSE
    if (isRestrictedAccess) {
      return {
        title: "Access Restricted",
        message: (
          <>
            You do not have the required permission to view this resource.
            <br />
            Please **view the list of courses you can access** or **contact your guardian to subscribe** for this course.
          </>
        ),
        emoji: "🚨",
        // Hiding generic buttons:
        showHome: false, 
        showRefetch: false, // <-- This is what was being ignored
        showRetry: false,   // <-- This is what was being ignored
        // Custom Action:
        showAction: true,
        actionText: "Courses You Can Access",
        actionLink: "/course-details/lesson",
      };
    }
    
    // 2. NETWORK ERROR
    if (error?.message?.includes('Network') || error?.message?.includes('network')) {
      return {
        title: "Connection Error",
        message: "Unable to connect to the server. Please check your internet connection.",
        emoji: "📡",
        showRetry: true,
      };
    }

    // 3. NOT FOUND (404)
    if (error?.status === 404) {
      return {
        title: "Page Not Found",
        message: "The requested resource was not found. Please check the URL.",
        emoji: "🔍",
        showHome: true,
      };
    }

    // 4. SERVER ERROR (5xx)
    if (error?.status >= 500) {
      return {
        title: "Server Error",
        message: "Something went wrong on our end. Please try again later.",
        emoji: "💥",
        showRetry: true,
      };
    }

    // 5. DEFAULT/GENERIC ERROR
    return {
      title: "Something Went Wrong",
      message: customMessage || error?.message || "An unexpected error occurred. Please try refreshing.",
      emoji: "😕",
      showRefetch: true,
      showHome: true,
    };
  };

  // Get configuration, including the optional action flags
  const config = getErrorConfig();
  const title = config.title;
  const message = config.message;
  const emoji = config.emoji;
  
  // 💥 FIX APPLIED HERE: Ensure config's explicit 'false' value overrides props.
  const shouldShowRetry = config.showRetry !== undefined ? config.showRetry : showRetry;
  const shouldShowRefetch = config.showRefetch !== undefined ? config.showRefetch : showRefetch;
  const shouldShowHome = config.showHome !== undefined ? config.showHome : showHome;
  // Custom actions don't use props, so no change needed here.
  const shouldShowAction = config.showAction;
  const actionText = config.actionText;
  const actionLink = config.actionLink;


  return (
    <Wrapper>
      <SEO pageTitle={title} />
      <Header no_top_bar={headDisplay} />
      <BreadcrumbThree title={title} subtitle={title} />

      <section className="section-gap-equal error-page-area">
        <div className="container">
          <div className="edu-error">
            <div className="thumbnail" style={{ fontSize: '6rem', textAlign: 'center', marginBottom: '2rem' }}>
              {emoji}
              <ul className="shape-group">
                <motion.li className="shape-1 scene" animate={{ x: mouseReverse(30).x, y: mouseReverse(30).y }}>
                  <img src="/assets/images/about/shape-25.png" alt="Shape" />
                </motion.li>
                <motion.li className="shape-2 scene" animate={{ x: mouseDirection(30).x, y: mouseDirection(30).y }}>
                  <img src="/assets/images/about/shape-15.png" alt="Shape" />
                </motion.li>
              </ul>
            </div>

            <div className="content">
              <h2 className="title">{title}</h2>
              <h4 className="subtitle">{message}</h4>
              <div className="button-group" style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                
                {/* Custom Action Button */}
                {shouldShowAction && actionLink && (
                  <Link href={actionLink} className="edu-btn">
                    {actionText}
                  </Link>
                )}

                {/* Other Actions - now respects the config's explicit 'false' setting */}
                {shouldShowRetry && onRetry && (
                  <button onClick={onRetry} className="edu-btn">
                    <i className="icon-refresh"></i>Try Again
                  </button>
                )}
                {shouldShowRefetch && onRefetch && (
                  <button onClick={onRefetch} className="edu-btn">
                    <i className="icon-refresh"></i>Refresh
                  </button>
                )}
                {shouldShowHome && (
                  <Link href="/" className="edu-btn btn-border">
                    <i className="icon-west"></i>Back to Homepage
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <ul className="shape-group">
          <li className="shape-1">
            <img src="/assets/images/others/map-shape-2.png" alt="Shape" />
          </li>
        </ul>
      </section>

      <Footer style_2={'footer-dark bg-image footer-style-2'} />
    </Wrapper>
  );
};

export default ErrorHandler;