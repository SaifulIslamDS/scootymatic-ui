import React from 'react';
import './Login.css';
import { useHistory, useLocation } from 'react-router';
import useAuths from '../../Hooks/useAuths';


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

                            <h2>Hello</h2>

                    </div>
                    <div className="col-md-6 ">
                        {/* registration and login form  */}

                        <h2>Login</h2>
                        
                        <form id="login-form" onSubmit={handleFormSubmit}>
                            <input type="email" placeholder="Your email" />
                            <input type="password" placeholder="Your password" />
                            <input type="submit" value="Login" />
                        </form>

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