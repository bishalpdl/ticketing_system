import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';


const headers = {
    'Content-Type': 'application/json',
    'Authorization': ''
}
const data = {};

const EditProfile = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('iAm') !=='user' || localStorage.getItem('token') === null ){
            return navigate('/login', {state :{message:'You must be logged in to perform this action.'}, replace:true})
        }

        headers.Authorization = `bearer ${localStorage.getItem('token')}`

        const getUser = async() => {
            try{
                console.log(headers)
                const user = await axios.get('http://localhost:8080/api/users/me',
                    {headers: headers}
                )
                console.log(user);
                setName(user.data.name)
            }catch(error){
                console.log(error)
            }
        }
        getUser();

    },[])

    const handleSubmitName = async(e) => {
        e.preventDefault()
        console.log(name)
        try{
            const editedUser = await axios.put(`http://localhost:8080/api/users/me/edit`, 
                {name:name},
                {headers: headers}
            )
            console.log(editedUser)
            navigate('/user/me')
        }catch(err){
            console.log(err)
        }
    }
    const handleSubmitPassword = async(e) => {
        e.preventDefault()
        console.log(password)
        if(password.trim().length > 0){
            try{
                const editedUser = await axios.put(`http://localhost:8080/api/users/me/edit`, 
                    {password: password},
                    {headers: headers}
                )
                console.log(editedUser)
                localStorage.clear();
                navigate('/login', {state :{message:'Password is Changed. Log in with new Password'}, replace:true})
            }catch(err){
                console.log(err)
        }}
    }

    return(
        <>
            <Header />
            <form onSubmit={handleSubmitName}>
                <div className=" m-4 b">
                    <label htmlFor="Inputname1" className="form-label">Full Name</label>
                    <input type="text" className="col-auto mx-2 " 
                            id="Inputname1" aria-describedby="emailHelp" 
                            placeholder={name}
                            onChange={(e)=>setName(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">{'Save'}</button>
                </div>
            </form>

            <form onSubmit={handleSubmitPassword}>
                <div className=" m-4 b">
                    <label htmlFor="Inputname1" className="form-label">Password</label>
                    <input type="password" className="col-auto mx-2 " 
                            id="Inputname1" aria-describedby="emailHelp" 
                            onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">{'Save'}</button>
                </div>
            </form>


        </>
    )
}

export default EditProfile;