import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth();

    const handleAddProduct = (data) => {
        const url = `https://scootymatic.herokuapp.com/scooters`;
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
                alert('Successfully added a product (sccoter).')
            }
        })
    }


    return (
        <div id="add-product">
            <h3>Add a product</h3>
            <form onSubmit={handleSubmit(handleAddProduct)} id="add-product-form">

            <input type="text" {...register("name",{ required: true })} placeholder="Name of Product (Scooter)"/>

            <input type="url" {...register("img", { required: true })} placeholder="Image URL"  className="img-url"/>

            <input type="number" {...register("price", { required: true })}  placeholder="Price"/>

            <textarea {...register("description")}  placeholder="Description" />

            {errors.exampleRequired && <span>This field is required</span>}

                
            <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;