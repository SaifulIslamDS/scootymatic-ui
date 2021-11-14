import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const UpdateReview = () => {
    const {id} = useParams();
    const [review, setReview] = useState({});
    // load reviews
    useEffect(() => {
        const url = `https://scootymatic.herokuapp.com/reviews/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setReview(data))
    }, []);


    // Update different fields 

    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedReview = {
            name: updatedName, 
            email: review.email,  
            designation: review.designation,  
            review : review.review,  
        };
        setReview(updatedReview);
    }
    const handleEmailChange = e => {
        const updatedemail = e.target.value;
        const updatedReview = {
            name: review.name, 
            email: updatedemail,   
            designation: review.designation,  
            review : review.review,  
        };
        setReview(updatedReview);
    }
    const handleDesignationChange = e => {
        const updatedDesignation = e.target.value;
        const updatedReview = {
            name: review.name, 
            email: review.email,  
            designation: updatedDesignation,  
            review : review.review,  
        };
        setReview(updatedReview);
    }
    const handleReviewChange = e => {
        const updatedreview = e.target.value;
        const updatedReview = {
            name: review.name, 
            email: review.email,   
            designation: review.designation,  
            review : updatedreview,  
        };
        setReview(updatedReview);
    }


    
    // Update form 
    const handleUpdateReview = e => {
        const url = `https://scootymatic.herokuapp.com/reviews/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                alert('Updated successfully');
                // setReview({});
            }
            // console.log(data);
        });

        e.preventDefault();
    }
   


    return (
        <section id="update-review">
            <h2>Update <span className="review-name">{review.name}</span></h2>
            <p>id: {id}</p>

            {/* Update form  */}
            
            <form onSubmit={handleUpdateReview} id="update-review-form">
                <input type="text" value={review.name} onChange={handleNameChange} placeholder="Name of reviewer"/>

                <input type="email" value={review.email || ''} onChange={handleEmailChange} placeholder="email"/>

                <input value={review.designation||''} onChange={handleDesignationChange} placeholder="designation"/>

                <textarea value={review.review || ''} onChange={handleReviewChange} placeholder="review" />
                
                <input type="submit" value="Update Review" />
            </form>
        </section>
    );
};

export default UpdateReview;
