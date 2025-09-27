import React from 'react';
import Link from 'next/link';
import { Wrapper, Header, Footer } from '../../layout';
import SEO from '../seo';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../contexts/mouse-move-context';

const ErrorHandler = ({
  error,
  onRetry,
  onHome,
  onRefetch,
  showRetry = false,
  showHome = false,
  showRefetch = false,
  customMessage,
  children
}) => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI();

  if (!error) return children || null;

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
      <Header no_top_bar={true} />
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
