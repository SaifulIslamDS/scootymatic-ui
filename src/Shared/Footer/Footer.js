import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Useful links</h5>
                        <ul className="footer-list">
                            <li><Link to="/">About us</Link></li>
                            <li><Link to="/">Our Community</Link></li>
                            <li><Link to="/">Local events</Link></li>
                            <li><Link to="/">Privacy Policy</Link></li>
                            <li><Link to="/">Service plus</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Our store</h5>
                        <ul className="footer-list">
                            <li><Link to="/">Scooter and Parts</Link></li>
                            <li><Link to="/">Clothing</Link></li>
                            <li><Link to="/">Scooter for rent</Link></li>
                            <li><Link to="/">Booking form</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Site Map</h5>
                        <ul className="footer-list">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/explore">Explore</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/">Contacts</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;