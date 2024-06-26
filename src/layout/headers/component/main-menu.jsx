import React from 'react';
import menu_data from '../menu-data';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const MainMenu = () => {
    const {token, user} = useSelector((state) => state.authLogin)
    return (
        <ul className="mainmenu">
            {menu_data.map((menu, i) => (
                <li key={i} > 
                
                {menu.title === 'Dashboard' && !(user && token) ? null : (
            <Link href={menu.link}>
              <a>{menu.title}</a>
            </Link>
          )}

                  
                    {/* {!menu.mega_menu && 
                        <ul className="submenu">
                            {menu?.submenus?.map((nav, i) => (
                                <li key={i}>
                                    <Link href={`${nav.link}`}>
                                        <a>
                                            {nav.title}
                                            {nav?.hot && <span className="badge-1">hot</span>}
                                            {nav?.new && <span className="badge">new</span>}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    } */}
                    {/* {menu.mega_menu && 
                        <ul className="mega-menu">
                            {menu.submenus.map((nav, i) => (
                                <li key={i}>
                                    <h6 className="menu-title">{nav.title}</h6>
                                    <ul className="submenu mega-sub-menu-01">
                                        {nav.mega_submenu.map((m, i) => (
                                            <li key={i}>
                                                <Link href={`${m.link}`}>
                                                    <a>{m.title}</a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    } */}
                </li>
            ))}
          
        </ul>
    )
}

export default MainMenu;