import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const social_share = [
    { link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook' },
    { link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter' },
    { link: 'https://www.linkedin.com/company/ujuzi-fin', target: '_blank', icon: 'icon-linkedin2' },
    { link: 'https://www.instagram.com/', target: '_blank', icon: 'icon-instagram' }
]

const HeaderTopRight = () => {
    const {token, user} = useSelector((state) => state.authLogin)
    return (
        <ul className="header-info">
                                       <li>{ token && user ? `Hi ${user.studentName}!`: 'Welcome!'} </li> 
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