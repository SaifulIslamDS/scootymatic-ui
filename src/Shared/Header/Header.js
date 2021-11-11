import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
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
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                </div>
            </div>
        </header>
    );    
}

export default Header;