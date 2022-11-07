import React, {useState, useEffect} from "react";
import axios from 'axios';

// const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbmVAZ21haWwuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWQiOjEsImlhdCI6MTY2NzQ1ODk1NH0.TWZuU4pS28nUuLkCdES9VSzrFetbFZVAc3Chr4M9Ix8'
// }


const AllUsers = ({headers}) => {
    
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [err, setErr] = useState('');

    useEffect(()=>{
        const getUsers = async() =>{
            try{
                const users = await axios.get(`http://localhost:8080/api/users/all?limit=10&page=${page}`, 
                    {headers}
                )
                console.log(users)
                setUsers(users?.data)
            }catch(error){
                console.log(error)
                setErr('Error Occured.')
            }
        }
        getUsers();
    
    },[])

    useEffect(()=>{
        const getUsers = async() =>{
            try{
                const users = await axios.get(`http://localhost:8080/api/users/all?limit=10&page=${page}`, 
                    {headers}
                )
                setUsers(users?.data)
            }catch(error){
                console.log(error)
                setErr('Error Occured.')
            }
        }
        getUsers();
    }, [page])

    if(users.length == 0){ 
        return (
            <div className="m-5">
                <span>No User is found for this Page Number.</span>
                <button className="btn btn-primary" onClick={()=>{setPage(1)}}>
                    Go Back
                </button> 
            </div>
        )
    }

    console.log(users)
    return(
        <>
            {users.map((user)=>{
                return(
                                        <div className="card m-3" style={{maxWidth: "600px"}} key={user.id}>
                        <div className="row g-0">
                            <div className="col-md-2">
                            <img src="https://img.icons8.com/color/96/null/circled-user-male-skin-type-7--v1.png"
                                style={{height: '100px'}}
                            />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text">Email: {user.email} </p>
                                <p className="card-text"><small className="text-muted">Created At: {user.createdAt.split('T')[0]} {user.createdAt.split('T')[1].split('.')[0]}</small></p>
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
            </ul>
            </nav>

       </>
    )

}

export default AllUsers;