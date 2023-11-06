import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { loginSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/features/authActions';
import { useRouter } from 'next/router';


const LoginForm = () => {
    const dispatch = useDispatch()
    const {lognError, token, user} = useSelector((state) => state.authLogin)
    console.log('lognError : ', lognError, 'token :', token, 'user : ', user)
    const [showPass,setShowPass] = useState(false);
    const url = process.env.REACT_APP_SERVER_URL || 'http://localhost:1337/api';
    const router = useRouter();

    const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: loginSchema,
        onSubmit: (values, { resetForm }) => {
            const object ={studentName:values.email, studentPassword:values.password}
             dispatch(login(`${url}/student/login`,object));
            resetForm()
        }
    })
    useEffect(() => {
        if (user !== null && token !== null) {
          router.push('/'); 
        }
      }, [user, token]);

    const handleResetPass = (email) => {
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="current-log-email">Username or email*</label>
                <input 
                    value={values.email} 
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    type="text" 
                    name="email"
                    placeholder="Email or username" 
                />
                {touched.email && <ErrorMsg error={errors.email} />}
            </div>
            
            <div className="form-group">
                <label htmlFor="current-log-password">Password*</label>
                <input 
                    value={values.password} 
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    type={showPass?"text":"password"} 
                    name="password"
                    placeholder="Password" 
                />
                <span onClick={()=> setShowPass(!showPass)} className="password-show">
                    <i className="icon-76"></i>
                </span>
            </div>
            {touched.password && <ErrorMsg error={errors.password} />}

            <div className="form-group chekbox-area">
                <div className="edu-form-check">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember Me</label>
                </div>
                <a href="#" onClick={()=> handleResetPass(values.email)} 
                className="password-reset">Lost your password?</a>
            </div>

            <div className="form-group">
                <button type="submit" className="edu-btn btn-medium">Sign in <i className="icon-4"></i></button>
            </div>
            <p>{lognError?.message}</p>
        </form>
    )
}

export default LoginForm;