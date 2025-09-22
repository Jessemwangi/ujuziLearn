import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setError, setToken, setUser } from '../../redux/features/loginSlice';
import { TokenService } from "../../services/token";

const SignOut = () => {
    const dispatch = useDispatch();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        dispatch(setError(null));
        dispatch(setUser(null));
        dispatch(setToken(null));
        TokenService.deleteToken();
        window.localStorage.clear();
        // Clear session storage
        sessionStorage.clear();



        const intervalId = setInterval(() => {
            setCountdown((currentCountdown) => {
                if (currentCountdown <= 1) {
                    clearInterval(intervalId);
                    return 0;
                }
                return currentCountdown - 1;
            });
        }, 1000);

        const timeoutId = setTimeout(() => {
            window.location.href = '/';
        }, 5000);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };
    }, [dispatch]);

    return (
        <div style={{ backgroundColor: '#f3f4f6', color: '#1f2937', fontFamily: 'sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <div style={{ backgroundColor: '#fff', width: '100%', maxWidth: '28rem', padding: '2rem', borderRadius: '0.75rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', textAlign: 'center' }}>
                <div style={{ margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', width: '5rem', borderRadius: '9999px', backgroundColor: '#d1fae5', marginBottom: '1.5rem' }}>
                    <svg style={{ height: '3rem', width: '3rem', color: '#10b981' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h1 style={{ fontSize: '1.875rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.75rem' }}>
                    You've Been Signed Out
                </h1>
                <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
                    Thank you for using our service. You have been successfully logged out.
                </p>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '2rem' }}>
                    You will be automatically redirected to the homepage in {countdown} seconds.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}>
                    <a href="/signin" style={{ width: '100%', backgroundColor: '#4f46e5', color: '#fff', fontWeight: '600', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', transitionProperty: 'all', transitionDuration: '300ms', outline: 'none', boxShadow: '0 0 0 2px transparent, 0 0 0 4px transparent, 0 0 #000', cursor: 'pointer', textDecoration: 'none' }}>
                        Sign In Again
                    </a>
                    <a href="/" style={{ width: '100%', backgroundColor: '#e5e7eb', color: '#1f2937', fontWeight: '600', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', transitionProperty: 'all', transitionDuration: '300ms', cursor: 'pointer', textDecoration: 'none' }}>
                        Go to Homepage
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SignOut;