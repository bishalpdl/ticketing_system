import React, {useState, useEffect} from "react";

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbmVAZ21haWwuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWQiOjEsImlhdCI6MTY2NzQ1ODk1NH0.TWZuU4pS28nUuLkCdES9VSzrFetbFZVAc3Chr4M9Ix8'
// }


const Stats = ({headers}) => {
    const [allData, setAllData] = useState([])
    const [totalUsers, setTotalUsers] = useState('');
    const [totalTickets, setTotalTickets] = useState();
    const [totalBookings, setTotalBookings] = useState();
    const [totalReserved, setTotalReserved] = useState();
    const [totalBought, setTotalBought] = useState();
    
    const [err, setErr] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const getStats = async() =>{
            try{
                const allStats = await axios.get(`http://localhost:8080/api/admin/stats`, 
                    {headers}
                )
                console.log(allStats)
                
                setAllData(allStats)
                setTotalUsers(allStats.data.totalUsers)
                setTotalTickets(allStats.data.totalTickets)
                setTotalBookings(allStats.data.bookedTotal)
                
                setTotalReserved(allStats.data.statusCategoryTotal.reserve)
                setTotalBought(allStats.data.statusCategoryTotal.buy)

            }catch(error){
                console.log(error)
                setErr('Error Occured.')
            }
        }
        getStats();
    
    },[])
    


    if(allData.length == 0){ 
        return (
            <div className="m-5">
                <span>No Statistics Found.</span>
                <button className="btn btn-primary" onClick={()=>{navigate('/admin/dashboard')}}>
                    Okay.
                </button> 
            </div>
        )
    }

    return(
        <>
            <div className="container-fluid">
  <section>
    <div className="row">
      <div className="col-12 mt-3 mb-1">
        <h5 className="text-uppercase">Site Statistics:</h5>
        <p>Some Statistics.</p>
      </div>
    </div>

    <div className="row">

      <div className="col-xl-6 col-sm-4 col-12 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between px-md-1">
              <div className="align-self-center">
                <i className="fas fa-solid fa-ticket text-info fa-3x"></i>
              </div>
              <div className="text-end">
                <h3>{totalTickets}</h3>
                <p className="mb-0">Total Tickets</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-6 col-sm-4 col-12 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between px-md-1">
              <div className="align-self-center">
              <i className="far fa-user text-success fa-3x"></i>
              </div>
              <div className="text-end">
                <h3>{totalUsers}</h3>
                <p className="mb-0">Total Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="col-xl-6 col-sm-4 col-12 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between px-md-1">
              <div className="align-self-center">
              <i className="fas fa-book-open text-info fa-3x"></i>
              </div>
              <div className="text-end">
                <h3>{totalBookings}</h3>
                <p className="mb-0">Total Bookings</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-6 col-sm-4 col-12 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between px-md-1">
              <div>
                <h3 className="text-warning">{totalReserved}</h3>
                <p className="mb-0">Tickets Reserved</p>
              </div>
              <div className="align-self-center">
              <i className="far fa-life-ring text-info fa-3x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-6 col-sm-4 col-12 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between px-md-1">
              <div>
                <h3 className="text-warning">{totalBought}</h3>
                <p className="mb-0">Total Bought</p>
              </div>
              <div className="align-self-center">
                <i className="fas fa-duotone fa-credit-card fa-3x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </section>
</div>

       </>
    )

}

export default Stats;