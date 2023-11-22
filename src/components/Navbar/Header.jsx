import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div>
        <div className="nav">
            <div className="logo">Car-Seller</div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li className="nav-contact">Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Header