import React from 'react'
import './Content.css'
import { Link } from 'react-router-dom'




function Content() {



  return (
    <>
      <div className="box">
        <div className="content">
          <h1 className="content-inner-bold" >
            <div className='head'>Rock-Paper-Scissors</div>
          </h1>
          <p>Welcome to the Stone-Paper-Scissors Game! This interactive web application allows you to play the classic game of Stone, Paper, Scissors against the computer. Challenge your strategic thinking and quick decision-making skills as you attempt to outwit your digital opponent.</p>
          <Link to={'/home'}> <button className='btn btn-info' style={{ fontSize: '20px' }}>Lets Play &#8594;</button> </Link>

        </div>


      </div>
    </>
  )
}

export default Content