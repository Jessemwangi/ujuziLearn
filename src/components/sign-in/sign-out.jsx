import React from 'react';
import { useDispatch } from 'react-redux';
import { setError, setToken, setUser } from '../../redux/features/loginSlice';

const SignOut = () => {
    const dispatch = useDispatch()
    dispatch(setError(null))
    dispatch(setUser(null));
    dispatch(setToken(null));
    return (
        <div>
            
        </div>
    );
};

export default SignOut;