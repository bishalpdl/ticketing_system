import React, {useState, useEffect} from "react";
import './dashboard.css';
import { useNavigate } from 'react-router-dom';

import AdminInfo from './../components/adminInfo';
import AllUsers from './../components/allUsers';
import AllBookings from './../components/allBookings';
import AllTickets from './../components/allTickets';
import Stats from "../components/stats";



const headers = {
    'Content-Type': 'application/json',
    'Authorization': ''
}



const AdminDashboard = () => {
    const [menu, setMenu] = useState('info')

    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('iAm') !=='admin' || localStorage.getItem('token') === null ){
            return navigate('/admin/login', {state :{message:'You must be logged in with Admin Info to view Admin Dashboard.'}, replace:true})
        }
        headers.Authorization = `bearer ${localStorage.getItem('token')}`
    },[])

    const getTabStyle = (menuVal) =>{
        if(menu == menuVal ){
            return 'list-group-item list-group-item-action py-2 ripple active'
        }else{
            return 'list-group-item list-group-item-action py-2 ripple'
        }
    }

    const getComponent=()=>{
        if(menu == 'info'){
            return <AdminInfo headers={headers} />
        }else if(menu == 'users'){
            return <AllUsers headers={headers} />
        }else if(menu == 'bookings'){
            return <AllBookings headers={headers} />
        }else if(menu == 'tickets'){
            return <AllTickets headers={headers} />
        }else if(menu == 'analytics'){
            return <Stats headers={headers} />
        }
    }
    const AdminLogOut =()=> {
        localStorage.clear();
        navigate('/admin/login')
    }
    


    return(
        <>
            
        <header>
            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                <div className="position-sticky">
                <div className="list-group list-group-flush mx-3 mt-4">
                    <p
                        href="#"
                        className="list-group-item list-group-item-action py-2 ripple"
                        aria-current="true"
                    >
                        <i className="fas fa-tachometer-alt fa-fw me-3 mb-3"></i><span className="fw-bold">Main dashboard</span>
                    </p>
                    
                    <a menu = 'info' href="#" className={getTabStyle('info')}
                        onClick= {(e)=>{setMenu('info')}}
                    >
                        <i className="fas fa-chart-area fa-fw me-3"></i><span>Admin info</span>
                    </a>
                    
                    <a menu = 'users' href="#" className={getTabStyle('users')}
                        onClick= {()=>{setMenu('users')}}
                    >
                        <img className="me-3" src="https://img.icons8.com/glyph-neue/64/null/conference-call.png" style={{height:'20px'}}/><span>Users</span>
                    </a>

                    <a menu='tickets' href="#" className={getTabStyle('tickets')}
                        onClick= {()=>setMenu('tickets')}
                        >
                        <img className="me-3" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/null/external-ticket-grocery-flatart-icons-outline-flatarticons.png"  style={{height:'20px'}}/><span>Tickets</span>
                    </a>

                    <a menu = 'bookings' href="#" className={getTabStyle('bookings')}
                        onClick= {()=>setMenu('bookings')}
                    >
                        <img className="me-3" src="https://img.icons8.com/external-becris-lineal-color-becris/64/null/external-booking-hotel-service-becris-lineal-color-becris.png" style={{height:'20px'}}/><span>Bookings</span>
                    </a>


                    <a menu='fifth' href="/create-ticket" className={getTabStyle('fifth')}
                        onClick= {()=>setMenu('fifth')}
                        >
                        <i className="fas fa-chart-bar fa-fw me-3"></i><span>Create Ticket <span className='fw-bold'>&#8599;</span></span>
                    </a>

                    <a menu='analytics' href="#" className={getTabStyle('analytics')}
                        onClick= {()=>setMenu('analytics')}
                        >
                        <i className="fas fa-globe fa-fw me-3"></i><span>Analytics</span>
                        </a>
                    <a menu='seventh' href="#" className={getTabStyle('seventh')}
                        onClick= {()=>AdminLogOut()}
                        >
                        <img className='me-3' src="https://img.icons8.com/external-anggara-glyph-anggara-putra/32/null/external-logout-user-interface-anggara-glyph-anggara-putra.png" style={{height:'20px'}}/>
                        <span>Logout</span>
                    </a>
                    
                </div>
                </div>
            </nav>
        </header>



    <main style={{marginTop: "58px"}}>
        <div className="container pt-4">
            <div>
                {getComponent()}

            </div>

        </div>
    </main>


        </>
    )

}


export default AdminDashboard;