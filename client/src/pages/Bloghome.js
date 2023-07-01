import React from 'react'
import Navbar from "../components/NavBar"
import Home from "./Home"
import Create from "./Create"
import {Routes,Route} from "react-router-dom"
function Bloghome() {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
        </Routes>
    </div>
  )
}

export default Bloghome