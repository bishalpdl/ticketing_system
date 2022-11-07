import React, {useState, useEffect} from "react";
import axios from "axios";
import {useLocation, useNavigate} from 'react-router-dom';
import EmailPasswordForm from "./../components/EmailPasswordForm.jsx";
import Header from "../components/header.jsx";


const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [err, setErr] = useState();

    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)

    const handleSubmit= async(e) => {
        e.preventDefault();
        console.log(email, password);

        try{
            const login = await axios.post(`http://localhost:8080/api/users/login`, 
                {email, password},
            )
            console.log(login.data.token);

            localStorage.setItem('iAm', 'user')
            localStorage.setItem('token', login.data.token)

            const ticketUuid = location.state?.ticketUuid;
            if(location.state?.ticketUuid){
               return navigate(`/tickets/info/${ticketUuid}`, {state :{message:'You must be logged in to perform this action.', ticketUuid}, replace:true})
            }
            return navigate('/', {replace: true})


        }catch(error){
            console.log('Error', error)
            setErr(error.response?.data.error)
            // console.log("Error", error)
        }    
    }

    return(
        <div>
        
        <Header />
        {/* { locationMessage(location) } */}

        <EmailPasswordForm 
            setEmail = {setEmail} 
            setPassword ={setPassword}
            err = {err}
            handleSubmit = {handleSubmit} 
            buttonName = {'Log in'}
            message= {locationMessage(location)}
            who={"User"}
            />

        </div>
    )
}

const locationMessage = (location) => {
    if(location.state){
        return location.state.message;
    }
    return ''
}


export default Login;