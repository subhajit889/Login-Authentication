import React from 'react'
import "./stylesheets/navbar.css"

const Navbar = () => {
  return (
    <div className="container">
        <nav className="nav">
          <div className="nav-logo">UI Official</div>
          <ul className="nav-list">
            <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
  )
}

export default Navbar