import React, { useState } from 'react';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import ReviewAdmin from '../ReviewAdmin/ReviewAdmin';
// import useAuth from '../../Hooks/useAuth';
import './Dashborad.css';

const Dashboard = () => {
    // const { user, logout } = useAuth();
    const [ control, setControl ] = useState("myOrders");

    return (
        <section id="dashboard">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3" id="dashboard-nav">
                        <ul>
                            <li onClick={() => setControl("myOrders")}> My Orders</li>
                            <li onClick={() => setControl("ReviewAdmin")}>Reviews</li>
                            <li onClick={() => setControl("Payment")}> Payment </li>
                        </ul>
                    </div>
                    <div className="col-md-9 dashboard-content">
                        {control === "myOrders" && <MyOrders />}
                        {control === "ReviewAdmin" && <ReviewAdmin />}
                        {control === "Payment" && <Payment />}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;