import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const url = `http://localhost:7000/reviews`;
        fetch(url)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);

    return (
        <section id="home-reviews">
            <h4>Reviews</h4>
            <div className="container">
                <div className="row">
                {
                    reviews.map(review => <div className="col-md-4"
                        key = {review._id} 
                        review = {review}
                        >                        
                            <h4>{review.name}</h4>
                            <h5>{review.designation}</h5>
                            <p>{review.review}</p>

                        </div>
                    )
                }
                </div>
            </div>
        </section>
    );
};

export default Reviews;