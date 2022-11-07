import React, {useState} from "react";
import HomeTickets from "../components/HomeTicket.jsx";
import Header from './../components/header';

const Home = () => {
    return(
        <>
            < Header />
            <HomeTickets />
        </>
    )

}

export default Home;