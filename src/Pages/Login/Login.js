import React, { useState } from 'react';
import './Login.css';
import { useHistory, useLocation } from 'react-router';
import useAuths from '../../Hooks/useAuths';
import loginImage from '../../Images/login-banner.png';


const Login = () => {
    const {
        user, 
        handleGoogleLogin, 
        handleRegistration, 
        isLogIn, 
        handleNameChange, 
        handleEmailChange, 
        handlePasswordChange,
        toggleLogin,
        error,
        handleResetPassword,
        handleSignOut 
    } = useAuths() ;

    const [loginData, setLoginData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(field, value);
    }
    const handleFormSubmit = e =>{
        alert("hello");
        e.preventDefault();
    }

    // handle redirect 
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from;
    const googleLoginBtn = () => {
        handleGoogleLogin()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <section id="authentication">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                            <img className="img-fluid" src={loginImage} alt="" />
                    </div>
                    <div className="col-md-6 form-col">
                        {/* registration and login form  */}

                        <h2>Please Login</h2>
                        
                        <form id="login-form" onSubmit={handleFormSubmit}>
                            <input 
                                type="email" 
                                name="email" 
                                onBlur={handleOnChange}
                                placeholder="Your email" 
                            />
                            <input 
                                type="password" 
                                name="password" 
                                onBlur={handleOnChange}
                                placeholder="Your password" 
                            />

                            <input type="submit" value="Login" />
                        </form>
                        <h6>Already registered?</h6>
                        <h6>or</h6>
                        <hr />
                        {/* Google login button  */}
                        { 
                            (user?.email) ? ( 
                            <button onClick={handleSignOut}>Logout</button>) : (
                            <>
                                <button onClick={googleLoginBtn} >Signin with Google</button>
                                <h2 className="username">{user?.displayName}</h2>
                                <h3 className="useremail">{user?.email}</h3>
                            </>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;