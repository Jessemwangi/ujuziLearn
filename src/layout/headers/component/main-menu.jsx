import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import menu_data from '../menu-data';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const MainMenu = () => {
    const { token, user } = useSelector((state) => state.authLogin);
    const [isMounted, setIsMounted] = useState(false); // Add a mounted state

    // Set mounted to true only on the client-side
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Return a consistent UI for the server and initial client render
    if (!isMounted) {
        return (
             <ul className="mainmenu">
                {menu_data.map((menu, i) => (
                    // Render all menu items without the auth check initially
                    // This avoids the dashboard link from being conditionally rendered
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
    
    // Once mounted, render the full UI with the auth check
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