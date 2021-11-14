import React, { useState } from 'react';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddReview from '../AddReview/AddReview';
import useAuth from '../../Hooks/useAuth';
import './Dashborad.css';

const Dashboard = () => {
    const {logout } = useAuth();
    const [ control, setControl ] = useState("MyOrders");

    return (
        <section id="dashboard">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3" id="dashboard-nav">
                        <ul>
                            <li onClick={() => setControl("MyOrders")}> My Orders</li>
                            <li onClick={() => setControl("AddProduct")}>Add Product</li>
                            <li onClick={() => setControl("ManageProducts")}>Manage Products</li>
                            <li onClick={() => setControl("AddReview")}>Add Review</li>
                            <li onClick={() => setControl("Payment")}> Payment </li>
                            <li onClick={logout} >Logout</li>
                        </ul>
                    </div>
                    <div className="col-md-9 dashboard-content">
                        {control === "MyOrders" && <MyOrders />}
                        {control === "AddProduct" && <AddProduct />}
                        {control === "ManageProducts" && <ManageProducts />}
                        {control === "AddReview" && <AddReview />}
                        {control === "Payment" && <Payment />}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;