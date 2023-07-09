import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="nav-section">
        <nav>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about/1">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/todo">To Do</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header