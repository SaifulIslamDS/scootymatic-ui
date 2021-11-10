import React, { useEffect, useState } from 'react';
import './HomeProducts.css';
import HomeProduct from '../HomeProduct/HomeProduct';

const HomeProducts = () => {
    const [scooters, setScooters] = useState([])

    useEffect(()=> {
        const url = `http://localhost:7000/scooters`;
        fetch(url)
        .then(res => res.json())
        .then(data => setScooters(data))
    });


    return (
        <section id="products">
            <div className="container">
                <h2>Products</h2>
                <div className="row">
                {
                    scooters.slice(0,6).map(scooter => <HomeProduct
                        key = {scooter._id}
                        scooter = {scooter}
                    ></HomeProduct> )
                }
                </div>
            </div>
        </section>
    );
};

export default HomeProducts;