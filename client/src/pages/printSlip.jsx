import React, {useRef} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useReactToPrint } from 'react-to-print';
import QRCode from 'react-qr-code';

import useFetch from './../hooks/useFetch';
import userEvent from "@testing-library/user-event";

function getStatus(status){
    if(status === 'buy'){
        return 'Bought'
    }else if(status='reserve'){
        return 'Reserved'
    }else{
        return status.charAt(0).toUpperCase() + status.slice(1);
    }    
}


const PrintSlip = () => {
        const componentRef = useRef();
        const params = useParams();
        const navigate = useNavigate();
        let {data, loading, error, reFetch} = useFetch(`http://localhost:8080/api/bookings/print/${params.bookingId}`)
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        onafterprint: ()=> alert('Printed.')
    });
    
    const handleBack = () => {
        if(localStorage.getItem('iAm') === 'user'){
            navigate('/ticket/mybooked')
        }else{
            navigate('/')
        }
    }

    console.log(data)

    if(!data || data.length == 0 ){ return <div>Not found</div>}
    return(
        <div className='m-2'>
            <h2>Header</h2>

            <button className="btn btn-warning mx-5" onClick={handleBack}>Go Back</button>
            <button className="btn btn-primary mx-auto" onClick={handlePrint}>Print this out</button>
            
            <div ref={componentRef} className='p-2' style={{width:'100%', height:'window.innerHeight'}} >
                <div className="m-3 border">
                    <h1 className="text-center my-3 mx-2 border py-2">Ticket Reservation Slip</h1>

                    <div className="mx-5">
                        <QRCode 
                            size = {150}
                            // when admin or gate uses this the state changed to checkedIn
                            //value = {`http://localhost:8080/api/bookings/checkIn/${data.bookedTicket.uuid}`}
                            value = {data.bookedTicket.uuid}
                        />
                    </div>
                   


                    <div className="card mx-2 border-0" >
                        <div className="card-body">
                            <h3 className="card-title mb-4">Ticket Info</h3>
                            <h4 className="card-subtitle mb-2 text">For: {data.bookedTicket.Ticket.title}</h4>
                            <h5 className="card-subtitle mb-2 text-primary">State: {getStatus(data.bookedTicket.status)}</h5>
                            <h6 className="card-subtitle mb-2 text">Price: {data.bookedTicket.Ticket.price}</h6>
                            <h6 className="card-subtitle mb-2 text">Agency: {data.bookedTicket.Ticket.agency}</h6>
                            <h6 className="card-subtitle mb-2 text">Booked For: {data.bookedTicket.date}</h6>
                            <h6 className="card-subtitle mb-2 text">Booking Id: {data.bookedTicket.uuid}</h6>
                            
                            { data.bookedTicket.seatingNo &&  <h6 className="card-subtitle mb-2 text">Booking Id: {data.bookedTicket.uuid}</h6>}
                        </div>
                    </div>


                    <div className="card mx-2 border-0" >
                        <div className="card-body">
                            <h5 className="card-title mb-4">User Info</h5>
                            <h6 className="card-subtitle text">Name: {data.bookedTicket.User.name}</h6>
                            <p className="card-text">Email: {data.bookedTicket.User.email}</p>
                        </div>
                    </div>

                </div>
            </div>
        
        </ div>
    )
}

export default PrintSlip;
