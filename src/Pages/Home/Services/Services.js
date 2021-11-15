import React from 'react';
import './Services.css';
import scooty from '../../../Images/scooty.png';

const Services = () => {
    return (
        <section id="home-services">
            <h3 className="section-title">Services we provide</h3>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <img src={scooty} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6 col-sm-12 features">
                        <h2>Scooty service & repair</h2>
                        <div className="row">
                            <div className="col-6">
                                <h3>01. Tune-ups & builds</h3>
                                <p>We have all the necessary parts to create a bike that fits you perfectly</p>
                            </div>
                            <div className="col-6">
                                <h3>02. Personal bike fit</h3>
                                <p>Adjusment of height, pedals, handlebar for the most comfortable ride</p>
                            </div>
                            <div className="col-6">
                                <h3>03. Adjust & install</h3>
                                <p>Need a bike repair? We offer a range of spare parts and quality service</p>
                            </div>
                            <div className="col-6">
                                <h3>04. Free delivery</h3>
                                <p>Choose a bike at our shop and get free delivery to any location in the city</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;