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
console.log("Error Handler Error: ", error);
  if (!error) return children || null;

  const isSessionExpired =
    error?.status === 401 ||
    error?.message?.toLowerCase().includes('token') ||
    error?.message?.toLowerCase().includes('authenticate') ||
    error?.message?.toLowerCase().includes('expired');

  if (isSessionExpired) {
    return <SessionExpiredModal />;
  }

  const isRestrictedAccess =
    error?.status === 403 ||
    error?.message?.toLowerCase().includes('forbidden') ||
    error?.message?.toLowerCase().includes('access denied') ||
    error?.message?.toLowerCase().includes('not authorized');

  if (isRestrictedAccess) {
    return (
      <div className="edu-auth-wrapper">
        <div className="edu-auth-container">
          <div className="edu-auth-box">
            <div className="edu-auth-icon warning" style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>
              🚫
            </div>
            <h2 className="edu-auth-title">Access Restricted</h2>
            <p className="edu-auth-message">
              You are authenticated but do not have permission to access this resource.
            </p>
            {showHome && (
              <div className="form-group" style={{ marginTop: '2rem' }}>
                <button onClick={() => window.location.href = '/'} className="edu-btn btn-border">
                  Back to Homepage
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Determine error type
  const getErrorConfig = () => {
    if (error?.status === 401 || error?.message?.includes('token') || error?.message?.includes('authenticate')) {
      return {
        title: "Session Expired",
        message: "Your session has expired. Please refresh to continue.",
        emoji: "🔒"
      };
    }

    if (error?.message?.includes('Network') || error?.message?.includes('network')) {
      return {
        title: "Connection Error",
        message: "Unable to connect to the server. Please check your internet connection.",
        emoji: "📡"
      };
    }

    if (error?.status === 404) {
      return {
        title: "Not Found",
        message: "The requested resource was not found.",
        emoji: "🔍"
      };
    }

    if (error?.status >= 500) {
      return {
        title: "Server Error",
        message: "Something went wrong on our end. Please try again later.",
        emoji: "💥"
      };
    }

    return {
      title: "Something Went Wrong",
      message: customMessage || error?.message || "An unexpected error occurred.",
      emoji: "😕"
    };
  };

  const { title, message, emoji } = getErrorConfig();

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
                {showRetry && onRetry && (
                  <button onClick={onRetry} className="edu-btn">
                    <i className="icon-refresh"></i>Try Again
                  </button>
                )}
                {showRefetch && onRefetch && (
                  <button onClick={onRefetch} className="edu-btn">
                    <i className="icon-refresh"></i>Refresh
                  </button>
                )}
                {showHome && (
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
