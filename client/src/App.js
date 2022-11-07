import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/home.jsx';
import Info from './pages/info.jsx';
import Booking from './pages/booking.jsx';
import Login from './pages/login';
import Register from './pages/register';
import Booked from './pages/booked';
import PrintSlip from './pages/printSlip';
import Header from './components/header';
import Profile from './pages/getprofile.jsx';
import EditProfile from './pages/editprofile';
import SearchPage from './pages/searchPage.jsx';
import AdminDashboard from './pages/adminDashboard';
import AdminLogin from './pages/adminLogin';

import AdminInfo from './components/adminInfo.jsx';
import AllUsers from './components/allUsers.jsx';
import AllBookings from './components/allBookings';
import AllTickets from './components/allTickets';

import { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch.js';
import CreateTicket from './pages/createTicket';
import App1 from './pages/test.jsx';

function App() {
  //const {data, loading, error, reFetch} = useFetch(`http://localhost:8080/testing2`)
  
  return( 
    <BrowserRouter>

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tickets/info/:ticketUuid" element={ <Info/> }/> 
          <Route path="/ticket/booking/:ticketUuid" element={ <Booking/> }/> 
          <Route path="/login" element={ <Login/> }/> 
          <Route path="/register" element={ <Register/> }/> 
          <Route path="/ticket/mybooked" element={ <Booked/> }/> 
          <Route path="/user/me" element={ <Profile/> }/> 
          <Route path="/user/me/edit" element={ <EditProfile/> }/> 
          <Route path="/tickets/search" element={ <SearchPage /> }/> 
        
          <Route path="/ticket/print/:bookingId" element={ <PrintSlip/> }/> 
          
          <Route path="/create-ticket" element={ <CreateTicket/> }/> 

          <Route path='/admin/login' element= { <AdminLogin /> } />
          <Route path='/admin/dashboard' element= { <AdminDashboard /> } />
          
          <Route path='/test' element= { <App1  /> } />


      </Routes>
    </BrowserRouter>
  
  )
}


export default App;
