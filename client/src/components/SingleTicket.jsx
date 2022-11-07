import React, {useState} from "react";
import { useParams, useHref } from 'react-router-dom';

import useFetch from './../hooks/useFetch.js';


const SingleTicket = () => {
    let {ticketUuid} = useParams();
    let {data, loading, error, reFetch} = useFetch(`http://localhost:8080/api/tickets/${ticketUuid}`)
    
    console.log(data)
    
    if(error){ return <div>Error</div>}
    if(loading) {return <div>Loading...</div>}
    if( data.length === 0 ) {return <h1 className="m-4">No Tickets Found.</h1>}

    return(
        <>
            <div className="card text-center m-5">
                <div className="card-header">
                    Ticket Info
                </div>
                <div className="card-body">
                <img src={data.imageURL ||"https://via.placeholder.com/800/92c952" } className="img" alt="..."  style={{height:'500px'}} />

                    <h5 className="card-title">{data.title}</h5>
                    <h6 className="card-text">Price: {data.price}</h6>
                    <p className="card-text">{data.description}</p>
                    <a href= {`/ticket/booking/${data.uuid}`} className="btn btn-primary">Buy Now</a>
                </div>
                <div className="card-footer text-muted">
                    Valid till: {data.valid_till}
                </div>
            </div>

        </>
    )

}


export default SingleTicket;