import React, {useState} from "react";
import HomeTickets from "../components/HomeTicket.jsx";
import Header from './../components/header';
import Footer from './../components/footer';

const Home = () => {
    return(
        <>
            < Header />
            <HomeTickets />
            <Footer />
        </>
    )

}

export default Home;