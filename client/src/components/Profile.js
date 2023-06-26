import React from 'react'
import { profileData } from '../data/profiledata'
import "../stylesheets/profile.css"
import { useState } from 'react'

function Profile() {
    const [open , setOpen] = useState(false);

  return (
    <div className='profile'>
        <div className='profileimg' onClick={()=>{setOpen(!open)}}>
        <img src='logo192.png' alt='logo'/>
        </div>
        <div id={open?"down":"up"} className='profilemenu'>
            <h3>bot</h3>
            {profileData.map((val,key)=>{
                return(
                    <li key={key}
                        id = {val.title==='Logout'?"danger":"normal"}
                        className='profilelist'
                        onClick={()=>{window.location.pathname = val.link}}
                    > <div className='dropicon'>{val.icon}</div> <div className='droptitle'>{val.title}</div></li>
                )
            })}
        </div>
    </div>
  )
}

export default Profile