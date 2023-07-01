import React from 'react'
import '../stylesheets/login.css'
import {Link} from "react-router-dom"

function SignUp() {
  return (
    <div className='loginpage'>
    <form className='signupform'>
        <h2 className='headertitle'>SignUp</h2>
        <div className='row'>
        <label>UserName</label>
        <input
            placeholder="Enter Name"/>
        </div>
        <div className='row'>
        <label>Email</label>
        <input
            placeholder="Enter  email"/>
        </div>
        <div className='row'>
        <label>Password</label>
        <input
            placeholder="Enter  password" />
        </div>
        <div className='row'>
        <label>Confirm Password</label>
        <input
            placeholder="Re-Enter  Password" />
        </div>
        <button  className='loginbtn' >Sign Up</button>
        <div className='alternative'>
            <p>Already have an Account <span><Link to="/login" style={{textDecoration:"none",color:'blue'}}>Login</Link></span></p>
        </div>
        </form>
        </div>
  )
}

export default SignUp