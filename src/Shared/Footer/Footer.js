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
                            <li><Link>About us</Link></li>
                            <li><Link>Our Community</Link></li>
                            <li><Link>Local events</Link></li>
                            <li><Link>Privacy Policy</Link></li>
                            <li><Link>Service plus</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Our store</h5>
                        <ul className="footer-list">
                            <li><Link>Scooter and Parts</Link></li>
                            <li><Link>Clothing</Link></li>
                            <li><Link>Scooter for rent</Link></li>
                            <li><Link>Booking form</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Site Map</h5>
                        <ul className="footer-list">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/explore">Explore</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link>Contacts</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;