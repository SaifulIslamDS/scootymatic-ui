import React, { useEffect, useState } from 'react';
import './Reviews.css';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const url = `https://scootymatic.herokuapp.com/reviews`;
        fetch(url)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);

    return (
        <section id="home-reviews">
            <h4 className="section-title">Clients say about Scootymatic</h4>
            <div className="container">
                <div className="row">
                {
                    reviews.slice(0,3).map(review => <div className="col-md-4 single-review"
                        key = {review._id} 
                        review = {review}
                        >                        
                            <p className="review-text"> <q>{review.review}</q> </p>
                            <h5>{review.name}</h5>
                            <h6>{review.designation}</h6>

                        </div>
                    )
                }
                </div>
            </div>
        </section>
    );
};

export default Reviews;