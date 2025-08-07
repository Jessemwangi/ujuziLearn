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
import ReactQueryConfig from '../services/react-query';

function MyApp( { Component, pageProps } ) {
    const router = useRouter();
    useEffect( () => {
        sal( { threshold: 0.1, once: true } );
    }, [router.asPath] );
    // if (!TokenService.hasToken()){
    //     TokenService.setToken(process.env.NEXT_PUBLIC_BACKEND_TEST_TOKEN)
    // }
    useEffect( () => {
        sal();
    }, [] );
    return (
        <React.Fragment>
            <SEO font="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Spartan:wght@400;500;600;700;800&display=swap" />
            <Provider store={ store }>
                <ThemeProvider defaultTheme="light">
                    <MouseMoveProvider>
                    <ReactQueryConfig pageProps={pageProps}>
                        <Component { ...pageProps } />
                        </ReactQueryConfig>
                    </MouseMoveProvider>
                    <Theme />
                </ThemeProvider>
            </Provider>
        </React.Fragment>
    )
}

export default MyApp;
