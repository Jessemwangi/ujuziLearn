import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import menu_data from '../../../layout/headers/menu-data';

const OffCanvas = ({ isOpen, setIsOpen }) => {
  const { sessionInfo, user } = useSelector((state) => state.authLogin);
  const token = sessionInfo ? sessionInfo.token : null;
  const [navTitle, setNavTitle] = useState('');
  const [isClient, setIsClient] = useState(false);

  // Ensure we only render auth-dependent content on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle('');
    } else {
      setNavTitle(menu);
    }
  };

  const shouldShowDashboard = (menu) => {
    if (!isClient) {
      // During SSR, don't show Dashboard to avoid hydration mismatch
      return menu.title !== 'Dashboard';
    }
    // On client side, show Dashboard only if user is logged in
    return menu.title !== 'Dashboard' || (user && token);
  };

  return (
    <>
      <div className={`popup-mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="inner">
          <div className="header-top">
            <div className="logo">
              <Link href="/">
                <img
                  className="logo-light"
                  src="/assets/images/logo/logo-dark.png"
                  alt="logo"
                />
                <img
                  className="logo-dark"
                  src="/assets/images/logo/logo-white.png"
                  alt="logo"
                />
              </Link>
            </div>

            <div className="close-menu" onClick={() => setIsOpen(false)}>
              <button className="close-button">
                <i className="icon-73"></i>
              </button>
            </div>
          </div>

          <div className="mm-menu">
            <ul>
              {menu_data.map((menu, i) => (
                <li
                  key={i}
                  className={
                    !menu.submenus
                      ? ''
                      : navTitle === menu?.title
                      ? 'has-droupdown active'
                      : 'has-droupdown'
                  }
                >
                  {menu.submenus && (
                    <button onClick={() => openMobileMenu(menu.title)}>
                      {menu.title}{' '}
                    </button>
                  )}

                  {!menu.mobile_pages_menu && (
                    <ul
                      className={
                        navTitle === menu?.title ? 'sub-menu active' : 'sub-menu'
                      }
                    >
                      {menu?.submenus?.map((sub, i) => (
                        <li key={i}>
                          <Link href={`${sub.link}`}>{sub.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {menu.mobile_pages_menu && (
                    <ul
                      className={
                        navTitle === menu?.title ? 'sub-menu active' : 'sub-menu'
                      }
                    >
                      {menu?.mobile_pages_menu?.map((sub, i) => (
                        <li key={i}>
                          <Link href={`${sub.link}`}>{sub.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {!menu.submenus && shouldShowDashboard(menu) && (
                    <Link href={menu.link}>{menu.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* overlay start */}
      <div
        onClick={() => setIsOpen(false)}
        className={`body-overlay ${isOpen ? 'apply' : ''}`}
      ></div>
      {/* overlay end */}
    </>
  );
};

export default OffCanvas;