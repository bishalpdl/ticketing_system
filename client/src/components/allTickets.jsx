import React, {useState, useEffect} from "react";
import axios from 'axios';

function getDescription(desc){
    if(desc === null){return ''}
    if(desc.length<50){ return desc}
    return desc.slice(0,100) + '...'
}


const AllTickets = ({headers}) => {
    
    const [tickets, setTickets] = useState([]);
    const [page, setPage] = useState(1);
    const [err, setErr] = useState('');

    useEffect(()=>{
        const getTickets = async() =>{
            try{
                const tickets = await axios.get(`http://localhost:8080/api/tickets/all?limit=5&page=${page}`, 
                    {headers}
                )
                console.log(tickets)
                setTickets(tickets?.data)
            }catch(error){
                console.log(error)
                setErr('Error Occured.')
            }
        }
        getTickets();
    
    },[])

    useEffect(()=>{
        const getTickets = async() =>{
            try{
                const tickets = await axios.get(`http://localhost:8080/api/tickets/all?limit=5&page=${page}`, 
                    {headers}
                )
                console.log(tickets)
                setTickets(tickets?.data)
            }catch(error){
                console.log(error)
                setErr('Error Occured.')
            }
        }
        getTickets();
    
    }, [page])
    


    if(tickets.length == 0){ 
        return (
            <div className="m-5">
                <span>No Tickets is found for this Page Number.</span>
                <button className="btn btn-primary" onClick={()=>{setPage(1)}}>
                    Go Back
                </button> 
            </div>
        )
    }

    console.log(tickets)
    return(
        <>
            {tickets.map((ticket)=>{
                return(
                        <div className="card m-3" style={{maxWidth: "100%"}} key={ticket.id}>
                        <div className="row g-0">

                            <div className="col-md-2 m-5">
                                <img src={ ticket.imageURL || "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/null/external-ticket-grocery-flatart-icons-outline-flatarticons.png"}
                                    style= {{width:'100%', height:'100px'}}
                                />
                            </div>
    


                            <div className="col-md-8">
                            <div className="card-body">
                                <h6 className="card-title">Ticket Id:{ticket.title}</h6>
                                <h6 className="card-text"><small className="text-muted">Ticket Price: Rs {ticket?.price}</small></h6>
                                <h6 className="card-text"><small className="text-muted">Valid Till: {ticket.valid_till}</small></h6>
                                <p className="card-text">{getDescription(ticket.description)} </p>
                                <p className="card-text">Agency: {ticket.agency} </p>
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

export default AllTickets;