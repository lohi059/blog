import React, { useEffect, useState } from 'react'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import "../stylesheets/singlepost.css"
import { useLocation } from "react-router"
import axios from 'axios'

function SinglePost() {
  const location = useLocation()
  const id = location.pathname.split("/")[2];
  const [post,setPost] = useState({});
  useEffect(()=>{
    const getPost = async()=>{
      const res = await axios.get("/posts/"+id);
      setPost(res.data);
    };
    getPost()
  }
  ,[id] )
  return (
    <div className='singlepost'>
       <div className="singlepostwrapper">
        { post.photo && 
        <img 
        src ={post.photo}
        alt= "singlepostimg"
        className='singlepostimg' />
        }
          
          <div className='singleposttitle'>
           <span>{post.title}</span> 
          <div className="singlepostedit">
             <div className="singleposticon"><EditNoteOutlinedIcon/></div> 
             <div className="singleposticon"><DeleteOutlinedIcon/></div> 
          </div>
          </div>
          <div className="singlepostinfo">
            <span className="singlepostauthor">
                Author:<b>{post.username}</b>
            </span>
            <span className='singlepostdate'>{new Date(post.createdAt).toDateString()}</span>
          </div>
          <div className="postcats">
          {post.categories && post.categories.map((val,key)=>{
            return(
              <span key = {key} className="postcat">{val.name}</span>
            )
          })}
         </div>
          <p className='singlepostdesc'>
            {post.desc}
          </p>
       </div>
    </div>
  )
}

export default SinglePost