import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageReviews = () => {
    const [reviews, setReviews] = useState([]);

    
    useEffect(() => {
        fetch("https://scootymatic.herokuapp.com/reviews")
        .then(res => res.json())
        .then(data => setReviews(data));
    }, []);

    const handleDeleteReview = id => {
        const confirmation = window.confirm("Are you sure you want to delete this review?");
        if (confirmation) {            
            const url = `https://scootymatic.herokuapp.com/reviews/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('review was successfully deleted')
                    const remainingreviews = reviews.filter(review => review._id !== id); 
                    setReviews(remainingreviews);
                }
            });
        }
    };

    const handleUpdateReview = id => {
        const confirmation = window.confirm("Are you sure you want to update this review?")
        if (confirmation) { 
            //
        }
    }

    return (
        <div>
            <h2>Manage reviews</h2>

            
            <table style={{"width": "100%"}} id="resort-table"> 
                            {/* Resort table headings  */}
                            <tr>
                                <th>Name</th> 
                                <th>Email</th>
                                <th>Designation</th>
                                <th>Review</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>

                            {/* Resort table data  */}

                            {
                                reviews.map(review => 
                                <tr key={review._id}>

                                    <td>{review.name}</td>
                                    <td>{review.email}</td>
                                    
                                    <td>{review.designation}</td>
                                    
                                    <td>{review.review}</td>
                                    
                                    <td>
                                        <Link to={`/review/update/${review._id}`}><button onClick={handleUpdateReview} >Update</button></Link>
                                    </td>
                                    
                                    <td>
                                        <button onClick={() => handleDeleteReview(review._id)} >Delete</button>
                                    </td>

                                </tr>
                                )
                            }
                        </table>




        </div>
    );
};

export default ManageReviews;