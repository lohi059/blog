import React from 'react'
import '../stylesheets/navbar.css'
import {Link} from "react-router-dom"
import Profile from './Profile'

const NavBar = () => {
  return (
    <div className='topbar'>
        <div className='topright'>
           <h2>Blog</h2>
        </div>
        <div className='topleft'>
            <ul className='toplist'>
                <li className='toplistitem'><Link to = "/home" style={{textDecoration:"none",color:'black'}}>Home</Link></li> 
                <li className='toplistitem'>About</li>
            </ul>  
            <Profile/>
        </div>
        
    </div>
  )
}

export default NavBar