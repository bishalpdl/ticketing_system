import {useState, useEffect} from "react";
import { useParams, redirect, useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import axios from "axios";
import Header from './../components/header';

const headers = {
    'Content-Type': 'application/json',
    'Authorization': ''
}

function getDescription(desc){
    if(desc === null){return ''}
    if(desc.length<50){ return desc}
    return desc.slice(0,100) + '...'
}

function getStatus(status){
    if(status === 'buy'){
        return 'Bought'
    }else if(status='reserve'){
        return 'Reserved'
    }else{
        return status.charAt(0).toUpperCase() + status.slice(1);
    }    
}


const Booked = () => {
    const [data, setData] = useState([]);
    const [message, setMessage] = useState();
    const navigate = useNavigate();
    
    useEffect(()=>{
        
        if(localStorage.getItem('iAm') !=='user' || localStorage.getItem('token') === null ){
            return navigate('/login', {state :{message:'You must be logged in to perform this action.'}, replace:true})
        }


        const getBookings = async () => {

            try{
                headers.Authorization = `bearer ${localStorage.getItem('token')}`
                const bookings = await axios.get('http://localhost:8080/api/bookings/mybooked',
                    {headers: headers}
                );
                console.log(bookings);
                setData(bookings.data);
            }catch(error){
                console.log(error)
                setMessage(error.response.data.error);
            }
        }
        getBookings();

    }, [])


    if(!data || data.length ===0 ){ return <><Header /><div>No Booking Found.</div></>}
    return(
        <>
        <Header />

        <h2 className="text-secondary m-5">My Booked </h2>
        <div className="p-3">
        {data.map((data)=>{
            
            return(

            <div className="card mt-2" style={{width: '80%',  margin:'auto'}} key={data.id}>
                <div className="row no-gutters">
                    <div className="col-sm-4">
                        <img className="card-img" src={data.Ticket.imageURL} alt="Suresh Dasari Card" 
                            style={{height:"100%" , width:"55%"}}
                        />
                    </div>
                    <div className="col-sm-8">
                        <div className="card-body">
                            <h5 className="card-title">{data.Ticket.title}</h5>
                            <p className="card-text">{getDescription(data.Ticket.description)}</p>
                            
                            <div>

                            <span className="card-text fst-italic">Rs {data.Ticket.price}</span>
                            <span className="card-text fw-bold"> &nbsp; State: {getStatus(data.status)}</span>
                            </div>
                            
                            <a href={`/tickets/info/${data.Ticket.uuid}`} className="btn btn-primary">More Info</a>
                            <a href={`/ticket/print/${data.uuid}`} className="btn btn-warning ms-2">Print Slip</a>
                        </div>
                    </div>
                </div>
            </div>
            )
        })}

        </div>
        </>
    )
}



export default Booked;