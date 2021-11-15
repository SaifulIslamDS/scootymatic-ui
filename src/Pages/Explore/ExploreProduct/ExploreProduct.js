import React from 'react';
import { useHistory } from 'react-router';


const ExploreProduct = (props) => {
    const {_id,name, img, price, description } = props.scooter;
    const history = useHistory();
    const handleOrderNow = () => {
        history.push(`/order/${_id}`);
    }


    return (
        <div className="col-md-6 product-col">
            <h2>{name}</h2>
            <img className="product-image img-fluid" src={img} alt="" />
            <h4>Price: $ {Math.ceil(price*1.15)}</h4>
            <p>{description}</p>
            <button onClick={handleOrderNow} className="btn btn-order">Order now</button>
        </div>
    );
};

export default ExploreProduct;