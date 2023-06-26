import React from 'react'
import '../stylesheets/navbar.css'
import Profile from './Profile'

const NavBar = () => {
  return (
    <div className='topbar'>
        <div className='topright'>
           <h2>Blog</h2>
        </div>
        <div className='topleft'>
            <ul className='toplist'>
                <li className='toplistitem'>Home</li>
                <li className='toplistitem'>About</li>
            </ul>  
            <Profile/>
        </div>
        
    </div>
  )
}

export default NavBar