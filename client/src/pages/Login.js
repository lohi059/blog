import React from 'react'
import '../stylesheets/login.css'
import {Link} from "react-router-dom"

function Login() {  

  return (
       <div className='loginpage'>
        <form className='loginform'>
            <h2 className='headertitle'>Login</h2>
            <div className='row'>
            <label>Email</label>
            <input
                placeholder="Enter  email"
                className={"inputBox"} />
            </div>
            <div className='row'>
            <label>Password</label>
            <input
                placeholder="Enter  password"
                className={"inputBox"} />
            </div>
            <button  className='loginbtn' >Login</button>
            <div className='alternative'>
                <p>Don't have an account <span><Link to="/signup" className='link'>Sign Up</Link></span></p>
            </div>
        </form>
       </div> 
  )
}

export default Login