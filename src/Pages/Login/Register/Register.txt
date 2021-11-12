import React, { useState } from 'react';
import '../Login/Login.css';
// import { useHistory, useLocation } from 'react-router';
import useAuths from '../../../Hooks/useAuths';
import loginImage from '../../../Images/login-banner.png';
import { Link } from 'react-router-dom';


const Register = () => {
    const [loginData, setLoginData] = useState({});

    const {user, isLoading, authError, handleUserRegistration} = useAuths() ;
    
    
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(field, value, loginData);
    }
    const handleFormSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        };
        handleUserRegistration(loginData?.email, loginData?.password);
        e.preventDefault();
    };

    // handle redirect 
    /* const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from;
    const googleLoginBtn = () => {
        handleGoogleLogin()
            .then(result => {
                history.push(redirect_uri);
            })
    } */
    return (
        <section id="register-component" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                            <img className="img-fluid" src={loginImage} alt="" />
                    </div>
                    <div className="col-md-6 form-col">
                        {/* registration and login form  */}

                        <h2>Please Register</h2>
                        
                        { !isLoading && <form id="login-form" onSubmit={handleFormSubmit}>
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
                                placeholder="Type your password please!" 
                            />
                            <input 
                                type="password" 
                                name="password2" 
                                onBlur={handleOnChange}
                                placeholder="Your password one more time!" 
                            />

                            <input type="submit" value="Register" />
                        </form>
                        }
                        {/* Spinner  */}
                        {
                            isLoading && <div 
                                className="spinner-border text-success" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        }
                        {
                            authError && <h5>{authError}</h5>
                        }

                        <h6>
                            <Link to="/login">Existing user? Please login.</Link>
                        </h6>

                        <h6>or</h6>
                        
                        <hr />
                        {/* Google login button  */}
                        {/* { 
                            (user?.email) ? ( 
                            <button>Logout</button>) : (
                            <>
                                <button>Signin with Google</button>
                                <h2 className="username">{user?.displayName}</h2>
                                <h3 className="useremail">{user?.email}</h3>
                            </>
                            )
                        } */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;