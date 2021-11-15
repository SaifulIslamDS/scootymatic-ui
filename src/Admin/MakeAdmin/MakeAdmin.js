import React, { useState } from 'react';
import { Alert } from '@mui/material';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [adminSuccess , setAdminSuccess ] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleMakeAdmin = e => {
        const user = {email}; 
        fetch('https://scootymatic.herokuapp.com/users/admin', {
            method : 'PUT',
            headers : {'content-type' : 'application/json'},
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                // console.log(data);
                setAdminSuccess(true);
                // setEmail('')
            }
        })
        e.preventDefault();
    }

    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleMakeAdmin}>
                <input 
                    type="email" 
                    onBlur={handleOnBlur}
                    placeholder="Write email address"
                />
                <input type="submit" value="Make Admin" />
            </form>

            { adminSuccess && <Alert severity="success">Made admin Successfully</Alert>}


        </div>
    );
};

export default MakeAdmin;