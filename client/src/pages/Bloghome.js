import React from 'react'
import Navbar from "../components/NavBar"
import Home from "./Home"
import Create from "./Create"
import SinglePost from "../components/SinglePost"
import Settings from "./Settings"
import {Routes,Route} from "react-router-dom"
function Bloghome() {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/post/:postId" element = {<SinglePost/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/editprofile" element={<Settings/>}/>
        </Routes>
    </div>
  )
}

export default Bloghome