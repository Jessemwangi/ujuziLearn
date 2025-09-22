import SEO from '../components/seo';
import { Wrapper } from '../layout';
import SignInMain from '../components/sign-in';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function SignIn() {
     const {loginError, token, user} = useSelector((state) => state.authLogin)
    useEffect(() => {
        if (token && user) {
            window.location.href = '/'; 
        }
    }, [token, user]);

    return (
        <Wrapper>
            <SEO pageTitle={'Sign In'} />
            <SignInMain />
        </Wrapper>
    )
}
