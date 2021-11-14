import React from 'react';
import ExploreProducts from '../ExploreProducts/ExploreProducts';
import ExploreReviews from '../ExploreReviews/ExploreReviews';
import './Explore.css';

const Explore = () => {
    return (
        <div>
            <h2>Explore more</h2>
            <ExploreProducts></ExploreProducts>
            <ExploreReviews></ExploreReviews>
        </div>
    );
};

export default Explore;