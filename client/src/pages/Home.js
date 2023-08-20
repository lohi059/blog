import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Posts from '../components/Posts'
import "../stylesheets/home.css"
import axios from 'axios'
import { useLocation } from 'react-router-dom'

function Home() {
  const [posts,setPosts] = useState([]);
  const location = useLocation();
  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("/posts");
      setPosts(res.data)
    }
    fetchPosts();
  },[])
  return (
    <div>
        <Header/>
        <div className='home'>
          <Posts  posts={posts}/>
          <Sidebar />
        </div>
    </div>
  )
}

export default Home