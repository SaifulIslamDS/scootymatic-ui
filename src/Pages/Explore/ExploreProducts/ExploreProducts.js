import React, { useEffect, useState } from 'react';
import ExploreProduct from '../ExploreProduct/ExploreProduct';
import './ExploreProducts.css';

const ExploreProducts = () => {
    const [scooters, setScooters] = useState([]);

    useEffect(()=> {
        const url = `http://localhost:7000/scooters`;
        fetch(url)
        .then(res => res.json())
        .then(data => setScooters(data))
    });


    return (
        <section id="explore">
            <h2>Explore products</h2>
            <div className="container">
                <div className="row">
                {
                    scooters.map(scooter => <ExploreProduct
                        key = {scooter._id}
                        scooter = {scooter}
                    ></ExploreProduct> )
                }
                </div>
            </div>
        </section>
    );
};

export default ExploreProducts;