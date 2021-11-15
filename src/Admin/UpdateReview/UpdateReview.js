import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './UpdateReview.css';


const UpdateReview = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {id} = useParams();
    const [review, setReview] = useState({});
    const {user} = useAuth();

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
            
            <form onSubmit={handleSubmit(handleUpdateReview)} id="update-review-form">
                <input 
                    defaultValue={user?.displayName}
                    type="text"
                    {...register("name", { required: true })} 
                    onChange={handleNameChange} 
                    placeholder="Name of reviewer"
                />
                <input 
                    defaultValue={user?.email}
                    type="email"
                    {...register("email", { required: true })} 
                    onChange={handleEmailChange} 
                    placeholder="email"
                />
                <input 
                    defaultValue={review?.designation}
                    type="text"
                    {...register("designation", { required: true })} 
                    onChange={handleDesignationChange} 
                    placeholder="Designation"
                />
                <textarea 
                    defaultValue={review?.review}
                    {...register("review", { required: true })} 
                    onChange={handleReviewChange} 
                    placeholder="Designation"
                />                
                <input type="submit" value="Update Review" />
            </form>
        </section>
    );
};

export default UpdateReview;
