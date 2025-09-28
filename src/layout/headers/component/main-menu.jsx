import React, { useState, useEffect } from 'react'; 
import menu_data from '../menu-data';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const MainMenu = () => {
    const { sessionInfo, user } = useSelector((state) => state.authLogin);
    const token = sessionInfo ? sessionInfo.token : null;
    const [isMounted, setIsMounted] = useState(false); 

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
             <ul className="mainmenu">
                {menu_data.map((menu, i) => (
                  
                    menu.title === 'Dashboard' ? null : (
                        <li key={i}>
                            <Link href={menu.link}>
                                {menu.title}
                            </Link>
                        </li>
                    )
                ))}
            </ul>
        );
    }
    
    return (
        <ul className="mainmenu">
            {menu_data.map((menu, i) => (
                <li key={i}> 
                    {menu.title === 'Dashboard' && !(user && token) ? null : (
                        <Link href={menu.link}>
                            {menu.title}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default MainMenu;