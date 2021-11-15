import React from 'react';
import ExploreProducts from '../ExploreProducts/ExploreProducts';
import ExploreReviews from '../ExploreReviews/ExploreReviews';
import './Explore.css';

const Explore = () => {
    return (
        <section id="explore-page">
            <ExploreProducts></ExploreProducts>
            <ExploreReviews></ExploreReviews>
        </section>
    );
};

export default Explore;