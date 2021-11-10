import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    return (
        <header id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1>Logo</h1>
                    </div>
                    <div className="col-md-8">
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