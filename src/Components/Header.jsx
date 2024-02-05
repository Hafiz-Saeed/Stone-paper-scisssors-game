import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {



  return (
    <>
    <div>

       <div className="header">
        <div className="logo" >
      <Link to={'/'} style={{textDecoration:"none",color:"whitesmoke"}} >Fistful of Fate</Link>
        </div>

        <div className="menu">
            <div className="menu-item">About</div>
            <div className="menu-item">Journal</div>
            <div className="menu-item">Contact</div>
        </div>
        </div> 

        </div>
    </>
  )
}

export default Header