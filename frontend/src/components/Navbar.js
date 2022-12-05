import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"
import { Link } from 'react-router-dom'

export default function Navigbar() {
  return (
    <>
      <div className='Navbar'>
        <div className="logo">
        <Link to="/home" style={{color: "white", textDecoration: 'none'}}>CompanyLOGO</Link>
        </div>
        <div className="search">
          <input type="text" placeholder='Search'/>
          <button><i class="bi bi-search"></i></button>
        </div>
        <div className='InnerNav'>
          <ul>
            <Link to="/home" style={{textDecoration: "none"}}><li><i class="bi bi-bookmark-heart"></i></li></Link>
            {/* <Link to="/home" style={{textDecoration: "none"}}><li><i class="bi bi-house"></i></li></Link> */}
            <Link to="/cart" style={{textDecoration: "none"}}><li><i class="bi bi-cart"></i></li></Link>
            <Link to="/wallet" style={{textDecoration: "none"}}><li><i class="bi bi-wallet"></i></li></Link>
            <li><i class="bi bi-gear"></i></li>
          </ul>
        </div>
      </div>
    </>
  )
}
