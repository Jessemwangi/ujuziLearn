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
              {menu.title}
            </Link>
          )}
                </li>
            ))}
          
        </ul>
    )
}

export default MainMenu;