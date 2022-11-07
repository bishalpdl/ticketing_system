import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [link1, setLink1] = useState();
    const [link2, setLink2] = useState();

    const [text1, setText1] = useState();
    const [text2, setText2] = useState();

    const [qn, setQn] = useState('');

    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('token') && localStorage.iAm == 'user'){
            setLink1('/ticket/mybooked');
            setText1('🎫 My Bookings')
            setLink2('/user/me'); // to be changed to profile page
            setText2('👤 Profile')
        }else{
            setLink1('/register');
            setText1('Register')
            setLink2('/login'); 
            setText2('Login')            
        }

    },[])
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(qn)
        if(qn.trim().length>0){
            localStorage.setItem('query', qn.trim())
            navigate(`/tickets/search?qn=${qn.trim()}`)
        }

    }

    return(
        <nav className="navbar navbar-expand navbar-light bg-light mb-3">
        <div className="container">
            <a className="navbar-brand me-2" href="/">
            <img
                src="https://img.icons8.com/ios/100/null/combi-ticket.png"
                height="50"
                alt="MDB Logo"
                loading="lazy"
                style={{marginTop: '-1px'}}
            />
            <span className="fw-bold ps-2">Ticket</span>
            </a>

            <form className="d-flex mx-5" onSubmit={handleSubmit} >
            <input  type="text" className="form-control me-2" onChange={(e)=>{setQn(e.target.value)}}  />

                <button className="btn btn-outline-success" type="submit" >Search</button>
            </form>


            <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                </li>
            </ul>

            <div className="d-flex align-items-center">
                <a href={link1} type="button" className="text .text-primary text-decoration-none fw-bold px-3 me-2">
                    {text1}
                </a>
                <a href= {link2} type="button" className="btn btn-primary me-2">
                    {text2}
                </a>
            </div>
            </div>
        </div>
    </nav>
    )
}

export default Header;