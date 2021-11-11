import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuths from '../../Hooks/useAuths';


const Login = () => {
    const {handleGoogleLogin, user, handleSignOut } = useAuths() ;
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
                    <div className="col-md-6">
            
                        { 
                            (user?.email) ? ( 
                            <button onClick={handleSignOut}>Logout</button>) : (
                            <button onClick={googleLoginBtn} >Signin with Google</button>)
                        }

                        <h2 className="username">{user?.displayName}</h2>
                        <h3 className="useremail">{user?.email}</h3>

                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>


        </section>
    );
};

export default Login;