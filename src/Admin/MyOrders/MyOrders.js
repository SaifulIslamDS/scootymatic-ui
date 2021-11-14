import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();

    // load orders 
    useEffect(() => {
        const url = `https://scootymatic.herokuapp.com/orders`;
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, []);

    // handle delete order 
    const handleDeleteOrder = id => {        
        const confirmation = window.confirm("Are you sure you want to cancel the order?"); 
        if ( confirmation ) { 
            const url = `https://scootymatic.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Your order cancelled! Hope you will change your mind soon.')
                    const remainingOrders = orders.filter(order => order._id !== id); 
                    setOrders(remainingOrders);
                }
            });
        }

    }


    return (
        <table style={{"width": "100%"}} id="order-table"> 
            <tr>
                <th>Customer Name</th>
                <th>Customer Email</th>
                <th>Product Name</th>
                <th>Address</th>
                <th>Contact Number</th>
                <th>Cancel</th>
            </tr>

            {
                orders.map(order => 
                <tr>
                    <td>{user?.displayName}</td>
                    <td>{user?.email}</td>
                    <td>{order.name}</td>
                    <td>{order?.city}</td>
                    <td>{order?.phone}</td>
                    
                    <td><button onClick={()=> handleDeleteOrder(order._id)}>Cancel</button></td>
                    
                    
                </tr>
                )
            }

        </table>
    );
};

export default MyOrders;