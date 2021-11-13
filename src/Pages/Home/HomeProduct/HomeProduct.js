import React from 'react';
import './HomeProduct.css';
import { useHistory } from 'react-router';

const HomeProduct = (props) => {
    const {_id, name, img, price, description } = props.scooter;
    const history = useHistory();

    const handleOrderNow = () => {
        history.push(`/order/${_id}`);
    }

    return (
        <div className="col-md-6">
            <h3>{name}</h3>
            <img className="product-image img-fluid" src={img} alt="" />
            <h4> € {price} </h4>
            <p>{description}</p>
            <button onClick={handleOrderNow} className="btn btn-info">Order now</button>
        </div>
    );
};

export default HomeProduct;