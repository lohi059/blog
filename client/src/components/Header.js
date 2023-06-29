import React from 'react'
import '../stylesheets/header.css'
function Header() {
  return (
    <div className="header">
      <img
         className='headerImg'
         src="https://img.freepik.com/free-vector/tiny-content-writers-creating-web-articles-flat-illustration_74855-15537.jpg?w=996&t=st=1687592823~exp=1687593423~hmac=ff64a4007d8484890c0f0f64196f91dd01e560f4ac6be3b58328f344b576d237"
         alt='welcome home'
      />
        <button className='headerTitle'>
          Create Blog
        </button>   
    </div>
  )
}

export default Header