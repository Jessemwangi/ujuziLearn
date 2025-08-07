import Link from 'next/link';
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { useSelector } from 'react-redux';

const social_share = [
    { link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook' },
    { link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter' },
    { link: 'https://www.linkedin.com/company/ujuzi-fin', target: '_blank', icon: 'icon-linkedin2' },
    { link: 'https://www.instagram.com/', target: '_blank', icon: 'icon-instagram' }
];

const HeaderTopRight = () => {
    const { token, user } = useSelector((state) => state.authLogin);
    const [hasMounted, setHasMounted] = useState(false); // Add a state to track mounting

    useEffect(() => {
        setHasMounted(true); // Set to true after the component mounts
    }, []);

    // If the component has not mounted yet, return null or a placeholder.
    // This ensures the server and initial client render match.
    if (!hasMounted) {
        return (
             <ul className="header-info">
                <li>Welcome!</li>
                <li><Link href="/sign-in"><a>Login</a></Link></li>
                 {/* You can keep the non-auth-dependent parts if you want */}
                <li><a href="tel:+358469045739"><i className="icon-phone"></i>Call: +358 46 9045739</a></li>
                <li><a href="mailto:info@ujuzi.io" rel="noreferrer" target="_blank"><i className="icon-envelope"></i>Email: info@ujuzi.io</a></li>
             </ul>
        )
    }

    return (
        <ul className="header-info">
            {/* This content will now only render on the client after mounting */}
            <li>{token && user ? `Hi ${user.studentName}!` : 'Welcome!'}</li>
            <li>{token && user ? <Link href="/sign-out"><a>LogOut</a></Link> : <Link href="/sign-in"><a>Login</a></Link>}</li>
            <li><a href="tel:+358469045739"><i className="icon-phone"></i>Call: +358 46 9045739</a></li>
            <li><a href="mailto:info@ujuzi.io" rel="noreferrer" target="_blank"><i className="icon-envelope"></i>Email: info@ujuzi.io</a></li>
            <li className="social-icon">
                {social_share.map((social, i) => (
                    <a key={i} href={social.link} target={social.target ? social.target : ''} className={`${social.color}`}>
                        <i className={social.icon}></i>
                    </a>
                ))}
            </li>
        </ul>
    )
}

export default HeaderTopRight;