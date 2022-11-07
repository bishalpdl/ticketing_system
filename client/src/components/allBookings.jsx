import React, {useState, useEffect} from "react";
import axios from 'axios';

// const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbmVAZ21haWwuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWQiOjEsImlhdCI6MTY2NzQ1ODk1NH0.TWZuU4pS28nUuLkCdES9VSzrFetbFZVAc3Chr4M9Ix8'
// }


const AllBookings = ({headers}) => {
    
    const [bookings, setBookings] = useState([]);
    const [page, setPage] = useState(1);
    const [err, setErr] = useState('');

    useEffect(()=>{
        const getBookings = async() =>{
            try{
                const bookings = await axios.get(`http://localhost:8080/api/bookings/all?limit=8&page=${page}`, 
                    {headers}
                )
                console.log(bookings)
                setBookings(bookings?.data)
            }catch(error){
                console.log(error)
                setErr('Error Occured.')
            }
        }
        getBookings();
    
    },[])
    
    useEffect(()=>{
        const getBookings = async() =>{
            try{
                const bookings = await axios.get(`http://localhost:8080/api/bookings/all?limit=8&page=${page}`, 
                    {headers}
                )
                console.log(bookings)
                setBookings(bookings?.data)
            }catch(error){
                console.log(error)
                setErr('Error Occured.')
            }
        }
        getBookings();
    
    },[page])


    if(bookings.length == 0){ 
        return (
            <div className="m-5">
                <span>No Booking is found for this Page Number.</span>
                <button className="btn btn-primary" onClick={()=>{setPage(1)}}>
                    Go Back
                </button> 
            </div>
        )
    }

    console.log(bookings)
    return(
        <>
            {bookings.map((booking)=>{
                return(
                        <div className="card m-3" style={{maxWidth: "100%"}} key={booking.id}>
                        <div className="row g-0">

                            <div className="col-md-1 m-5">
                                <img src="https://img.icons8.com/external-becris-lineal-color-becris/64/null/external-booking-hotel-service-becris-lineal-color-becris.png"
                                    style={{height:'50px'}}
                                />
                            </div>
    


                            <div className="col-md-8">
                            <div className="card-body">
                                <h6 className="card-title">Ticket Id:{booking.id}</h6>
                                <h6 className="card-text"><small className="text-muted">Ticket Title: {booking?.Ticket.title}</small></h6>
                                <h6 className="card-text"><small className="text-muted">Ticket For: {booking?.date}</small></h6>
                                <p className="card-text">Status: {booking.status} </p>
                                <p className="card-text">Booked By: {booking.User?.name} </p>
                            </div>
                            </div>
                        </div>
                    </div> 
                )
            })}

            <nav aria-label="...">
            <ul className="pagination pagination-lg mx-5">
                <li className= {page==1 ? 'page-item active': 'page-item' }>
                    <a className="page-link" onClick={()=> setPage(1)}>1</a>
                </li>
                <li className= {page==2 ? 'page-item active': 'page-item' }>
                    <a className="page-link" onClick={()=> setPage(2)}>2</a>
                </li>
                <li className= {page==3 ? 'page-item active': 'page-item' }>
                    <a className="page-link" onClick={()=> setPage(3)}>3</a>
                </li>
                <li className= {page==4 ? 'page-item active': 'page-item' }>
                    <a className="page-link" onClick={()=> setPage(4)}>4</a>
                </li>
                <li className= {page==5 ? 'page-item active': 'page-item' }>
                    <a className="page-link" onClick={()=> setPage(5)}>5</a>
                </li>
                <li className= {page==6 ? 'page-item active': 'page-item' }>
                    <a className="page-link" onClick={()=> setPage(6)}>6</a>
                </li>
                <li className= {page==7 ? 'page-item active': 'page-item' }>
                    <a className="page-link" onClick={()=> setPage(7)}>7</a>
                </li>
                <li className= {page==8 ? 'page-item active': 'page-item' }>
                    <a className="page-link" onClick={()=> setPage(8)}>8</a>
                </li>
            </ul>
            </nav>

       </>
    )

}

export default AllBookings;