import React, {useState} from "react";
import HomeTickets from "../components/HomeTicket.jsx";
import Header from './../components/header';

const AdminInfo = ({headers}) => {

    console.log(headers)
    return(
        <>
            <div className=" card text-center">

                <div className="card-body">
                <img src="https://img.icons8.com/dotty/80/null/moderator-male.png" 
                    style={{height: '100px'}}
                />

                    <h5 className="card-title">Admin</h5>
                    <p className="text-muted">Status: 🟢 Logged In</p>
                    <button href="#" className="btn btn-primary">Hey Welcome Back</button>
                </div>
            </div>
            
        </>
    )

}

export default AdminInfo;