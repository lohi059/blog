import React from 'react'
import '../stylesheets/post.css'
import {Link} from 'react-router-dom'

function Post({post}) {
  return (
    <div className='post' >
      {post.photo &&
      <img
      className='postimg'
      src = {post.photo}
      alt =""
      />
      }
      
      <div className='postinfo'>
         <div className="postcats">
          {post.categories.map((val,key)=>{
            return(
              <span key = {key} className="postcat">{val.name}</span>
            )
          })}
         </div>
         <hr/>
         <Link to= {`/post/${post._id}`} className='link'>
         <span className="posttitle">{post.title}</span>
         </Link>
         <hr/>
         <span className="postdate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className='postdesc'>
        {post.desc}
      </p>
    </div>
  )
}

export default Post