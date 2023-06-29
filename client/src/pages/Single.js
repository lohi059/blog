import React from 'react'
import Sidebar from '../components/Sidebar'
import SinglePost from '../components/SinglePost'
import "../stylesheets/single.css"


function Single() {
  return (
    <div className='single'>
         <SinglePost />
         <Sidebar/>
    </div>
  )
}

export default Single