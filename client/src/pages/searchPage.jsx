import React, {useState, useEffect} from "react";
import HomeTickets from "../components/HomeTicket.jsx";
import Header from './../components/header';
import { useSearchParams, useNavigate } from "react-router-dom";
import useFetch from './../hooks/useFetch';
import axios from 'axios';

function getDescription(desc){
    if(desc === null){return ''}
    if(desc.length<50){ return desc}
    return desc.slice(0,50) + '...'
}

const SearchPage = () => {

    let [searchParams, setSearchParams] = useSearchParams();
    
    let [queryStr, setQueryStr] = useState();
    let [showHelp, setShowHelp] = useState('d-none');

    const [data, setData] = useState([])
    const [err, setErr] = useState('');

    const navigate = useNavigate();

    useEffect(()=>{
        console.log('Searching')
        console.log(searchParams)
        
        try{                                    
            const getResult = async() => {
                const allresult = await axios.get(`http://localhost:8080/api/tickets/search`, {
                    params: {qn: 'in'}
                })
                console.log(allresult);
                setData(allresult.data)
            }
            getResult();
        }catch(e){
            console.log(e);
            setErr(e.message)
        }

    }, [])



    const handleSearch = (e) => {
        e.preventDefault();
        try{                                    
            const getResult = async() => {
                const allresult = await axios.get(`http://localhost:8080/api/tickets/search?qn=${queryStr}`, )
                console.log(allresult);
                setData(allresult.data)
            }
            getResult();
        }catch(e){
            console.log(e);
            setErr(e.message)
        }
    }


    if(data.length<1){  return(
        <div>
            <button className="btn btn-primary m-3 text-center" value="Go to HomePage"
                onClick={()=>{
                        navigate('/')
                }} 
                >Go to Home Page</button>
                <form onSubmit={handleSearch}>
                    <div className=" m-4 b">
                        <label htmlFor="Inputname1" className="form-label">Search:</label>
                        <input type="text" className="col-auto mx-2 " 
                                id="Inputname1" aria-describedby="emailHelp" 
                                
                                onChange={(e)=>setQueryStr(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary">{'Save'}</button>
                    </div>
                </form>

                <div className="card m-3" >

                <div className="bg-warning p-3" data-bs-toggle="collapse" data-bs-target="#kt_docs_card_collapsible" 
                    onClick={()=>{
                        if(showHelp==='d-block') return setShowHelp('d-none')
                        if(showHelp==='d-none') return setShowHelp('d-block')
                    }}
                >
                    <h3 className="card-title">Show Search Help 🔽 </h3>
                </div>

                <div className={showHelp}>

                <div className="hidden" id="kt_docs_card_collapsible">
                <div className="card-body">
                        <h5 className="text-secondary">- Double quoted query gives exact title match. i.e. "Title Name" </h5 >
                        <h5 className="text-secondary">- Single Quote query result finding in the ticket Description.</h5 >
                        <h5 className="text-secondary">- Without quote Search gives SQL like in both title and description</h5 >
                        <h6 class="card-text mt-2">{'>'} All the Search Query is Trimmed.</h6>
                        <h6 class="card-text">{'>'} All the Searches are case insensitive.</h6>
                        <h6 class="card-text">{'>'} Result are all valid tickets. Expired tickets are not Shown.</h6>
                    </div>

                </div>
                </div>
            </div>

                <h3 className="text-mute m-3">No Results Found for: {queryStr}</h3>

        </div>
    )}
    
    
    return(
        <>
            <button className="btn btn-primary m-3 text-center" value="Go to HomePage"
               onClick={()=>{
                    navigate('/')
               }} 
            >Go to Home Page</button>
            <form onSubmit={handleSearch}>
                <div className=" m-4 b">
                    <label htmlFor="Inputname1" className="form-label">Search:</label>
                    <input type="text" className="col-auto mx-2 " 
                            id="Inputname1" aria-describedby="emailHelp" 
                            
                            onChange={(e)=>setQueryStr(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">{'Save'}</button>
                </div>
            </form>

            <div className="card m-3" >

                <div className="bg-warning p-3" data-bs-toggle="collapse" data-bs-target="#kt_docs_card_collapsible" 
                    onClick={()=>{
                        if(showHelp==='d-block') return setShowHelp('d-none')
                        if(showHelp==='d-none') return setShowHelp('d-block')
                    }}
                >
                    <h3 className="card-title">Show Search Help 🔽 </h3>
                </div>

                <div className={showHelp}>

                <div className="hidden" id="kt_docs_card_collapsible">
                <div className="card-body">
                        <h5 className="text-secondary">- Double quoted query gives exact title match. i.e. "Title Name" </h5 >
                        <h5 className="text-secondary">- Single Quote query result finding in the ticket Description.</h5 >
                        <h5 className="text-secondary">- Without quote Search gives SQL like in both title and description</h5 >
                        <h6 class="card-text mt-2">{'>'} All the Search Query is Trimmed.</h6>
                        <h6 class="card-text">{'>'} All the Searches are case insensitive.</h6>
                        <h6 class="card-text">{'>'} Result are all valid tickets. Expired tickets are not Shown.</h6>
                    </div>

                </div>
                </div>
            </div>

            <h3 className="text-mute m-3">Results</h3>

            <div className="row row-cols-1 row-cols-md-3 lg-4 m-2">
             {data.map((d)=>{
                return(
                <div className="col mb-4" key={d.id}>
                    <div className="card h-100">
                    <div className="view overlay">
                        <img className="card-img" src={d.imageURL}
                            alt="Card image cap" 
                            style={{minHeight:'200px', maxHeight:'200px'}}
                            />
                        <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                        </a>
                    </div>

                    <div className="card-body my-2">                    
                        <h4 className="card-title">{d.title}</h4>      
                        <p className="card-text">{getDescription(d.description)}</p>
                        
                        <button type="button" className="btn btn-light-blue btn-md" 
                            onClick={()=>{
                                navigate(`/tickets/info/${d.uuid}`)
                            }}
                        >More Info</button>

                    </div>

                    </div>
                    
                </div>    
                
                )
            })}      
        </div>


            
        </>
    )

}

export default SearchPage;