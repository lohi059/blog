import React from 'react'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import "../stylesheets/singlepost.css"

function SinglePost() {
  return (
    <div className='singlepost'>
       <div className="singlepostwrapper">
          <img 
            src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCxsRsAEpt-5wwEItyVY_CdBAgoxBjqvSE8Q&usqp=CAU"
            alt= "singlepostimg"
            className='singlepostimg' />
          <div className='singleposttitle'>
           <span>bot bro</span> 
          <div className="singlepostedit">
             <div className="singleposticon"><EditNoteOutlinedIcon/></div> 
             <div className="singleposticon"><DeleteOutlinedIcon/></div> 
          </div>
          </div>
          <div className="singlepostinfo">
            <span className="singlepostauthor">
                Author:<b>Lohith</b>
            </span>
            <span className='singlepostdate'>1 hour ago</span>
          </div>
          <p className='singlepostdesc'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et sem 
            sodales, scelerisque purus ac, viverra metus. Ut accumsan nunc a est 
            faucibus luctus. Ut vel tincidunt mauris.
          </p>
       </div>
    </div>
  )
}

export default SinglePost