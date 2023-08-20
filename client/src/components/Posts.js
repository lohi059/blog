import React from 'react'
import "../stylesheets/post.css"
import Post from './Post'

function Posts({posts}) {
  return (
    <div className='posts'>
      {
        posts.map((val,key)=>{
          return(
             <Post key={key} post={val} />
          )
        })
      }
    </div>
  )
}

export default Posts