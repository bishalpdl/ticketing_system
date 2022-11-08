import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return(
        <div className="container bcontent mt-5">
        <hr />
        <div className="card" style={{width: "100%"}}>
            <div className="row no-gutters">
                <div className="col-sm-12">
                </div>
                <div className="col-sm-12">
                    <div className="card-body">
                        <h5 className="card-title">Are you Admin?</h5>
                        <a href="#" className="btn btn-primary"
                            onClick={()=>{navigate('/admin/dashboard')}}
                        >Go to Admin Dashboard</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;