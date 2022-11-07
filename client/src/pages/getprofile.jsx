import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './../components/header';

const headers = {
    'Content-Type': 'application/json',
    'Authorization': ''
}

const Profile = () => {
    
    const [user, setUser ] = useState([]);
    
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
                {headers: headers})
                console.log(user);
                setUser(user.data)

            }catch(error){
                console.log(error)
            }
        }
        getUser();

    },[])
    
    if(user.length === 0){return <div>User not Found</div>}
    return(
        <>
            <Header />
            <div className='m-5'>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Username: {user.name}</h5>
                        <p className="card-text">Email: {user.email}</p>
                        <p className="card-text">Created At: {user.createdAt.split('T')[0]}</p>
                        <a className="btn btn-warning" onClick={(e)=>{
                            navigate('/user/me/edit')
                        }}>Profile Edit</a>
                        
                        <a className="btn btn-danger mx-2" onClick={(e)=>{
                            localStorage.clear();
                            navigate('/')
                        }

                        }>Logout</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile;