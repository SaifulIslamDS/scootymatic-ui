import React from 'react';
import './Banner.css';
import bannerImage from '../../../Images/banner-image.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section id="banner" style={{ backgroundImage:`url(${bannerImage})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="banner-title">Let's get lost with <br />
                            <span>HONDA SH350I</span>
                        </h1>
                        <Link to="/explore"><button className="btn btn-outline-light">
                            Explore More
                        </button></Link>
                    </div>
                </div>
            </div>            
        </section>
    );
};

export default Banner;