import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Order.css';

const Order = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth();
    const {id} = useParams();
    const [scooter, setScooter] = useState([]);
    
    // load products 
    useEffect(() => {
        const url = `http://localhost:7000/scooters/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setScooter(data))
    }, []);

    const onConfirm = (data) => {
        const url = `http://localhost:7000/orders`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if (result.insertedId) {
                alert('Ordered a scooter successfully!');
            }
        });
    }

    return (
        <section id="order">
            <h2>Order {scooter.name}</h2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <img className="img-fluid" src={scooter.img} alt="" />
                        <h4>Price: € {scooter.price}</h4>
                        <p>Resort details: {scooter.description}</p>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <form id="order-form" onSubmit={handleSubmit(onConfirm)}>
                            
                            <input defaultValue={user?.displayName} {...register("displayName", { required: true })} />

                            <input value={user?.email} {...register("email", { required: true })} />

                            <input value={scooter?.name} {...register("name", { required: true })} />

                            <input value={scooter?.img} {...register("img", { required: true })} />

                            <input {...register("city", { required: true })} placeholder="Your city" />

                            <input {...register("phone", { required: true }) } placeholder="Your contact number"  />
                         
                            
                            <input type="submit"  value="Click to confirm"/>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;