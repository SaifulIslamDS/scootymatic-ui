import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateProduct = () => {
    const {id} = useParams();
    const [scooter, setScooter] = useState({});
    // load scooters
    useEffect(() => {
        const url = `https://scootymatic.herokuapp.com/scooters/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setScooter(data))
    }, []);


    // Update different fields 

    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedScooter = {
            name: updatedName, 
            image: scooter.img,  
            price: scooter.price,  
            description : scooter.description,  
        };
        setScooter(updatedScooter);
    }
    const handleImageChange = e => {
        const updatedImage = e.target.value;
        const updatedScooter = {
            name: scooter.name, 
            image: updatedImage,   
            price: scooter.price,  
            description : scooter.description,  
        };
        setScooter(updatedScooter);
    }
    const handlePriceChange = e => {
        const updatedPrice = e.target.value;
        const updatedScooter = {
            name: scooter.name, 
            image: scooter.img,  
            price: updatedPrice,  
            description : scooter.description,  
        };
        setScooter(updatedScooter);
    }
    const handleDescriptionChange = e => {
        const updatedDescription = e.target.value;
        const updatedScooter = {
            name: scooter.name, 
            image: scooter.img,   
            price: scooter.price,  
            description : updatedDescription,  
        };
        setScooter(updatedScooter);
    }


    
    // Update form 
    const handleUpdateScooter = e => {
        const url = `https://scootymatic.herokuapp.com/scooters/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(scooter)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                alert('Updated successfully');
                setScooter({});
            }
            // console.log(data);
        });

        e.preventDefault();
    }
   


    return (
        <section id="update-scooter">
            <h2>Update <span className="scooter-name">{scooter.name}</span></h2>
            
            {/* Update form  */}
            
            <form onSubmit={handleUpdateScooter} id="update-scooter-form">
                <input type="text" value={scooter.name || ''} onChange={handleNameChange} placeholder="Name of scooter"/>

                <input type="url" value={scooter.img || ''} onChange={handleImageChange} placeholder="Image URL"  className="img-url" rows="1"/>

                <input type="number" value={scooter.price||''} onChange={handlePriceChange} placeholder="Price"/>

                <textarea value={scooter.description || ''} onChange={handleDescriptionChange} placeholder="Description" />
                
                <input type="submit" value="Update Product" />
            </form>



        </section>
    );
};

export default UpdateProduct;
