import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setError, setToken, setUser } from '../../redux/features/loginSlice';
import { TokenService } from "../../services/token";
import Link from 'next/link';

const SignOut = () => {
    const dispatch = useDispatch();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        dispatch(setError(null));
        dispatch(setUser(null));
        dispatch(setToken(null));
        TokenService.deleteToken();
        localStorage.clear();
        sessionStorage.clear();

        const intervalId = setInterval(() => {
            setCountdown((currentCountdown) => {
                if (currentCountdown <= 1) {
                    clearInterval(intervalId);
                    return 0;
                }
                return currentCountdown - 1;
            });
        }, 145000);

        const timeoutId = setTimeout(() => {
            window.location.href = '/';
        }, 5000);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };
    }, [dispatch]);

    return (
        <div className="edu-auth-wrapper">
            <div className="edu-auth-container">
                <div className="edu-auth-box">
                    <div className="edu-auth-icon success">
                        <i className="icon-76"></i>
                    </div>
                    <h2 className="edu-auth-title">You've Been Signed Out</h2>
                    <p className="edu-auth-message">
                        Thank you for using our service. You have been successfully logged out.
                    </p>
                    <p className="edu-auth-subtext">
                        You will be automatically redirected to the homepage in {countdown} seconds.
                    </p>
                    <div className="form-group">
                        <Link href="/signin" className="edu-btn" style={{color:'#FFF'}}>Sign In Again 
                        <i className="icon-4"></i></Link>
                    </div>
                    <div className="form-group">
                        <a href="/" className="edu-btn btn-border">Go to Homepage</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignOut;
