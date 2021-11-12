import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const {user, logout} = useAuth();
    
    return (
        <header id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 logo">
                        <Link to="/"><h2>Logo</h2></Link>
                    </div>
                    <div className="col-md-8 menubar">
                        <Link to="/">Home</Link>
                        <Link to="/explore">Explore</Link>
                        <Link to="/dashboard">Dashboard</Link>
                        { 
                            (user?.email) ? (
                            <>
                                <span className="text-white">{user?.email}</span>
                                <Link to="/login"
                                onClick={logout}>
                                    Logout
                                </Link>
                            </>
                            ) : (<Link to="/login">Login</Link>)
                        }
                    </div>
                </div>
            </div>
        </header>
    );    
}

export default Header;