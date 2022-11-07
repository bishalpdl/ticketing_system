import useFetch from "../hooks/useFetch"

function getDescription(desc){
    if(desc === null){return ''}
    if(desc.length<50){ return desc}
    return desc.slice(0,50) + '...'
}

function HomeTickets(){

    let {data, loading, error, reFetch} = useFetch(`http://localhost:8080/api/tickets/homepage`)

    if(loading) {return <div>Loading...</div>}
    if( data.length == 0 ) {return <h1 className="m-4">No Tickets Found.</h1>}

    return(
        <div>
            {console.log(data)}
            
            <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-lg-4 g-4 mx-2">
            {data.length>0 && data.map((d)=> {
                return(
                    <div className="col" key={d.id}>
                        <div className="card img-responsive">
                        <img src={d.imageURL || "https://via.placeholder.com/600/92c952"} 
                            className="d-block card-img-top p-2"  alt="..." 
                            style={{minHeight:"300px", maxHeight:'300px',  width:'auto'}}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{d.title}</h5>
                            <p className="card-text">{ getDescription(d.description) }</p>
                            <p className="card-text">Rs {d.price}</p>
                            
                            <a href={`/tickets/info/${d.uuid}`} className="btn btn-info mx-1">More Info</a>
                            <a href={`/ticket/booking/${d.uuid}`} className="btn btn-warning mx-1">Buy Now</a>

                        </div>
                        </div>
                    </div>

                )
            })}

            </div>
        </div>
    )
}

export default HomeTickets;