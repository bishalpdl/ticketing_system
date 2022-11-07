import React, {useState, useEffect} from "react";
import { useParams, redirect, useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import axios from "axios";

import useFetch from './../hooks/useFetch.js';
import Header from "../components/header.jsx";
import App2 from "./SeatPicker.jsx";

const headers = {
    'Content-Type': 'application/json',
    'Authorization': ''
}


const Booking = () => {
    let {ticketUuid} = useParams();
    let navigate = useNavigate();
    let {data, loading, error, reFetch} = useFetch(`http://localhost:8080/api/tickets/${ticketUuid}`)
    
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');

    const [getPreset, setGetPreset] = useState('');
    const [bookedSeats, setBookedSeats] = useState([]);
    const [selected, setSelected] = useState();

    const [rows, setRows] = useState([])

    const [err, setErr] = useState('')
    const [capacity, setCapacity] = useState()

    
    useEffect(()=>{
        if(localStorage.getItem('iAm') !=='user' || localStorage.getItem('token') === null ){
            return navigate('/login', {state :{message:'You must be logged in to perform this action.', ticketUuid}, replace:true})
        }

        headers.Authorization = `bearer ${localStorage.getItem('token')}`

    }, [])


    useEffect(()=>{
        if(date){
            const capacityFinder = async()=>{
                const noOfBookings = await axios.post(`http://localhost:8080/api/bookings/capacity/${data.id}`, 
                    {date}
                )
                const bookedSeats = await axios.post(`http://localhost:8080/api/bookings/seats/${data.id}`, 
                    {date}
                )
                const booked = noOfBookings.data.alreadyBookedNo;
                const availability = data.capacity_per_day - booked
                
                console.log('here here', bookedSeats)
                
                setCapacity(availability);
                setGetPreset(data.preset);
                setBookedSeats(bookedSeats.data.seats)
                
            } 
            capacityFinder();
        }
    },[date]);

    //console.log(data)

    

    
    if(error){ return <div>Error</div>}
    if(loading) {return <div>Loading...</div>}
    if( data.length === 0 ) {return <h1 className="m-4">No Tickets Found.</h1>}

    console.log(data)

    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log({date, status});

        if(!date){
            setErr('Please Select a date.')
        }else if(!status){
            setErr('Please Select the buy of reservation.')
        }else if(getPreset && !selected ){
            setErr('Please Select a Seat.')
        }else if(getPreset && selected == 1000 ){
            setErr('Please Select a Seat.')
        }
        else{
            setErr('');

            if(bookedSeats.includes(selected)){
                setErr('Please Hit Refresh button')
            }

            try{
                const bookings = await axios.post(`http://localhost:8080/api/bookings/${data.id}`, 
                    {date, status,  getPreset, selected},
                    {headers: headers,}
                    )
                console.log("bookings", bookings)
                navigate(`/ticket/print/${bookings.data.uuid}`)
                
            }catch(error){
                console.log("Error Encouontered", error);
                setErr(error.response.data.error)
            }
        }            
    }

    return(
        <>


            <Header />
            
            {/* <div>{ticketUuid}</div>
            <div>{data.title}</div>
            <div>{data.valid_till}</div>
 */}
            
            
            <div className="card mx-3 p-4 border my-2" style={{width: "500px"}}>
            <div className="row no-gutters">
                <div className="col-sm-5">
                    <img className="card-img" src={data.imageURL} alt="Ticket Image" />
                </div>

                <div className="col-sm-7">
                    <div className="card-body">
                        <h5 className="card-title">Title: {data.title}</h5>
                        <p className="card-text">{data.description}</p>
                        <p className="card-text">Valid till: {data.valid_till}</p>
                    </div>
                </div>
            </div>    
            </div>
            





            <form className="mx-3 p-4 border" onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Revervation Date</label>
                    <input type="date" className="form-control" 
                        id="date" aria-describedby="date"
                        value={date} onChange={(e)=>setDate(e.target.value)}
                        />
                </div>


                <select className="form-select" aria-label="Default select example" 
                    value={status} onChange={(e)=> setStatus(e.target.value)}>
                    <option value="">Select the Status of your Purchase.</option>
                    <option value="buy">Buy</option>
                    <option value="reserve">Reserve</option>
                </select>

                    <div className="mt-2">
                        {capacity && <div className="btn btn-success ">No of Seats Available: {capacity} </div>}
                        {capacity===0 && <div className="btn btn-danger ">Seats for this date is not Available.</div> }
                    </div>

                    <div>
                        {getPreset && 
                            <div>
                                <App2 
                                    setSelected={setSelected} 
                                    preset={getPreset} 
                                    bookedSeats={bookedSeats} 
                                    isReserved = ''
                                    rows={rows}
                                    />
                            </div>
                        }

                    </div>

                    
                <button type="submit" className= "btn btn-primary mt-4"  >Submit</button>


                <p>{err}</p>

            </form>
            
        </>
    )

}

export default Booking;