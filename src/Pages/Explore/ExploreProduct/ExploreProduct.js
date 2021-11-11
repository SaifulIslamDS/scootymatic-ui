import React from 'react';

const ExploreProduct = (props) => {
    const {name, img, price, description } = props.scooter;


    return (
        <div className="col-md-6">
            <h2>{name}</h2>
            <img className="product-image img-fluid" src={img} alt="" />
            <h4>Price: $ {Math.ceil(price*1.15)}</h4>
            <p>{description}</p>
            <button className="btn btn-info">Order now</button>
        </div>
    );
};

export default ExploreProduct;