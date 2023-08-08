import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className='header'> 
            <h2>Test Your Skill!</h2>
         {(sessionStorage.getItem("name"))  ?   <h3>{sessionStorage.getItem("name")}</h3> : "" }
   
    </div>
  )
}

export default Header