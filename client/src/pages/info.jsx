import React, {useState} from "react";
import HomeTickets from "../components/HomeTicket.jsx";
import SingleTicket from './../components/SingleTicket';
import Header from './../components/header';

const Info = () => {
    return(
        <>
            <Header />
            <SingleTicket />
        </>
    )
}

export default Info;