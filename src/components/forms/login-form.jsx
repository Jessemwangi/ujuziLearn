import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { loginSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/features/authActions';
import { useRouter } from 'next/router';
import { BASE_URL } from '../../queries/endpoints';


const LoginForm = () => {
    const dispatch = useDispatch()
    const {loginError, sessionInfo, user} = useSelector((state) => state.authLogin)
    const [showPass,setShowPass] = useState(false);
    const url = BASE_URL;
    const router = useRouter();

    const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
        initialValues: { email: '', password: '',rememberMe: false },
        validationSchema: loginSchema,
        onSubmit: (values, { resetForm }) => {
            const object ={
                studentName:values.email, 
                studentPassword:values.password,
            rememberMe: values.rememberMe,}
             dispatch(login(`${url}/student/login`,object));
            resetForm()
        }
    })
useEffect(() => {
  if (sessionInfo && user && !loginError) {
    router.push('/course-details/lesson');
  }
}, [user, sessionInfo, loginError]);

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
                    <input type="checkbox" 
                     id="remember-me" 
                        name="rememberMe" 
                        checked={values.rememberMe} 
                        onChange={handleChange} 
                        onBlur={handleBlur} />
                    <label htmlFor="remember-me">Remember Me</label>
                </div>
                <a href="#" onClick={()=> handleResetPass(values.email)} 
                className="password-reset">Lost your password?</a>
            </div>

            <div className="form-group">
                <button type="submit" className="edu-btn btn-medium">Sign in <i className="icon-4"></i></button>
            </div>
            <p>{loginError?.message}</p>
        </form>
    )
}

export default LoginForm;