import React, { useEffect, useState } from 'react';
import './ExploreReviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const url = `https://scootymatic.herokuapp.com/reviews`;
        fetch(url)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);

    return (
        <section id="explore-reviews">
            <h4 className="section-title">Clients say about Scootymatic</h4>
            <div className="container">
                <div className="row">
                {
                    reviews.map(review => <div className="col-md-4"

                        key = {review._id} 
                        review = {review}
                        >                        
                            <p>{review.review}</p>
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