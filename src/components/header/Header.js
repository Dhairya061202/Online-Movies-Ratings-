import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
        <div className="header">
            <Link to="/"><img className="logo" src="../images/logoo.png" /></Link>
            <Link to="/movies/popular" className='nav-heading'>Popular</Link>
            <Link to="/movies/top_rated" className='nav-heading'>Top Rated</Link>
            <Link to="/movies/upcoming" className='nav-heading'>Upcoming</Link>
            
        </div>
    </>
  )
}
