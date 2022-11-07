import React, {useState, useEffect} from "react";
import axios from "axios";
import {useLocation, useNavigate} from 'react-router-dom';
import EmailPasswordForm from "./../components/EmailPasswordForm.jsx";
import Header from "../components/header.jsx";
import './../components/emailpassword.css'


const Register = () => {
    const [name, setName] = useState();
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
            const login = await axios.post(`http://localhost:8080/api/users/register`, 
                {name, email, password},
            )
            console.log(login.data.token);

            localStorage.setItem('iAm', 'user')
            localStorage.setItem('token', login.data.token)

            return navigate('/')
            

        }catch(error){
            if(error.response.data.errors[0].message){
                setErr(error.response.data.errors[0].message)
            }else{
                setErr('Error Occured')
            }
            console.log("Error", error)
        }    
    }

    return(
        <>

        <Header />

        <div className="text-center"
            style={{display:'flex', justifyContent:'center'}}
        >

        <div className="wrapper m-5 " 
            style={{}}>

        <form onSubmit={handleSubmit}>
            <div className="m-4 b">
                <div className="mb-3">
                <label htmlFor="InputName1" className="form-label">Full Name</label>
                <input type="text" className="form-control" 
                        id="InputName1" aria-describedby="nameHelp" 
                        onChange={(e)=>setName(e.target.value)}
                        />
                </div>

                <div className="mb-3">
                <label htmlFor="InputEmail1" className="form-label">Email address</label>
                <input type="text" className="form-control" 
                        id="InputEmail1" aria-describedby="emailHelp" 
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                </div>
                

                <div className="mb-3">
                <label htmlFor="InputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" 
                        id="InputPassword1"
                        onChange={(e)=>setPassword(e.target.value)} 
                        />
                </div>

                {err && <p>*{err}</p>}

                <button type="submit" className="btn btn-primary">Sign up</button>
            </div>
        </form>
    </div>
    </div>
        </>

    )
}


export default Register;