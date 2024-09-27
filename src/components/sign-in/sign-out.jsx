import React from 'react';
import { useDispatch } from 'react-redux';
import { setError, setToken, setUser } from '../../redux/features/loginSlice';
import { TokenService } from "../../services/token";

const SignOut = () => {
    const dispatch = useDispatch()
    dispatch(setError(null))
    dispatch(setUser(null));
    dispatch(setToken(null));
    TokenService.deleteToken()
    return (
        <div>
            
        </div>
    );
};

export default SignOut;