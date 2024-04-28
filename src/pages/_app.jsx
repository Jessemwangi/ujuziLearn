import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import sal from 'sal.js';
import { ThemeProvider } from 'next-themes';
if (typeof window !== 'undefined') {
  require( 'bootstrap/dist/js/bootstrap' );
}
import '../styles/index.scss';
import { store } from '../redux/store';
import Theme from '../components/common/theme';
import { MouseMoveProvider } from '../contexts/mouse-move-context';
import SEO from '../components/seo';
import { TokenService } from '../services/token';

function MyApp( { Component, pageProps } ) {
    const router = useRouter();
    useEffect( () => {
        sal( { threshold: 0.1, once: true } );
    }, [router.asPath] );
    TokenService.setToken('02854ed88aa1c62ceefe59b585e507566339d50a0ddb9931759422eada98c62a9d53abd9868a51aa5f46e19c2901d731a8da9a9b86a2b1bf4520e42d9fdbf8ff57f1c17e2edc037ef0b9484f851c9444384a4017ab46cc8dbcb089de02f37ad9834a3ceb350b98a542de65a0e2fe617d86dd1949e34e24b1a49a713640663b3a')
    useEffect( () => {
        sal();
    }, [] );
    return (
        <React.Fragment>
            <SEO font="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Spartan:wght@400;500;600;700;800&display=swap" />
            <Provider store={ store }>
                <ThemeProvider defaultTheme="light">
                    <MouseMoveProvider>
                        <Component { ...pageProps } />
                    </MouseMoveProvider>
                    <Theme />
                </ThemeProvider>
            </Provider>
        </React.Fragment>
    )
}

export default MyApp;
