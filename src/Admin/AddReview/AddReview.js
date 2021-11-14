import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import './AddReview.css';


const AddReview = () => {
    const { register, handleSubmit, formState: { errors } } = useForm() ;
    const {user} = useAuth();

    const handleAddReview = (data) => {
        const url = `https://scootymatic.herokuapp.com/reviews`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Successfully added a review.')
            }
        })
    }
    return (
        <div id="add-review">
            <h2>Add your review</h2>
            <form onSubmit={handleSubmit(handleAddReview)} id="add-review-form">

                <input value={user?.displayName} type="text" {...register("name",{ required: true })} placeholder="Your name"/>

                <input value={user?.email} type="text" {...register("email",{ required: true })} placeholder="Your name"/>

                <input type="text" {...register("designation",{ required: true })} placeholder="Your designation"/>
                
                <textarea {...register("review")}  placeholder="Write your review" />

                {errors.exampleRequired && <span>This field is required</span>}

                
                <input type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;