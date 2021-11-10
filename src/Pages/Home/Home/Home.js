import React from 'react';
import './Home.css';
import Header from '../../../Shared/Header/Header';
import Footer from '../../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import HomeProducts from '../HomeProducts/HomeProducts';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <Services></Services>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;