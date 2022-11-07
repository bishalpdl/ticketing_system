import { useState } from 'react';
import './emailpassword.css'

const EmailPasswordForm = ({setEmail,
                            setPassword,
                            handleSubmit, 
                            err, 
                            buttonName,
                            message,
                            who}) => {

    return(
        <>
        {/* <form onSubmit={handleSubmit}>
            <div className="m-4 b">

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

                <button type="submit" className="btn btn-primary">{buttonName || 'Submit'}</button>
            
            
            </div>
        </form> */}

        <div className="wrapper">
        
            <div className="logo">
                <img src="https://img.icons8.com/color/96/null/circled-user-male-skin-type-7--v1.png"/>
            </div>
            <div className="text-center mt-4 name">
                {who} Login
            </div>

            <div className="text mt-4 text-danger">
                {message}
            </div>

            <form  form onSubmit={handleSubmit} className="p-3 mt-3">
                
                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input type="text" name="email" id="email" placeholder="Email Address" 
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>

                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-key"></span>
                    <input type="password" name="password" id="pwd" placeholder="Password" 
                        onChange={(e)=>setPassword(e.target.value)} 
                    />
                </div>


                <button className="btn mt-3" type='submit' value='submit'>{who} Login</button>
            </form>

        <div className="text-center fs-6">
            {err && <span className='text-danger'>*{err}</span>}
        </div>

        </div>

        </>

    )


}

export default EmailPasswordForm;