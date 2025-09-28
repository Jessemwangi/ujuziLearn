import React from 'react';
import Link from 'next/link';
import { Wrapper, Header, Footer } from '../../layout';
import SEO from '../seo';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../contexts/mouse-move-context';

const EmptyState = ({
  message = "It looks a little lonely in here... Nothing to display just yet!", // Updated default message
  showAction = false,
  actionText = "Browse Courses",
  onAction = null,
  headDisplay = true,
  title = "Nothing Here" // Updated default title for consistency
}) => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI();
  const emoji = "👻"; // Creative emoji: Ghost for "nothing here"

  return (
    <Wrapper>
      <SEO pageTitle={title} />
      <Header no_top_bar={headDisplay} />
      <BreadcrumbThree title={title} subtitle={title} />

      <section className="section-gap-equal error-page-area">
        <div className="container">
          <div className="edu-error">
            <div className="thumbnail" style={{ fontSize: '6rem', textAlign: 'center', marginBottom: '2rem' }}>
              {emoji} {/* Using the ghost emoji */}
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
              <h2 className="title">No Data Available</h2>
              <h4 className="subtitle">{message}</h4>
              
              {showAction && (
                <div className="button-group" style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', marginTop: '2rem' }}>
                  {onAction ? (
                    <button onClick={onAction} className="edu-btn">
                      {actionText}
                    </button>
                  ) : (
                    <Link href="/courses" className="edu-btn btn-border">
                      {actionText}
                    </Link>
                  )}
                   <Link href="/Home" className="edu-btn btn-border">
                      {'Back To Home '}
                    </Link>
                </div>
              )}
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

export default EmptyState;