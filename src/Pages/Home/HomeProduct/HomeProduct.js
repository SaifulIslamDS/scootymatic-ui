import React from 'react';
import './HomeProduct.css';

const HomeProduct = (props) => {
    const {name, img, price, description } = props.scooter;

    return (
        <div className="col-md-6">
            <h3>{name}</h3>
            <div><img className="product-image img-fluid" src={img} alt="" /></div>
            <h4>{price}</h4>
            <p>{description}</p>
            <button className="btn btn-info">Order now</button>
        </div>
    );
};

export default HomeProduct;