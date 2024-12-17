import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets.js'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("Home")

  return (
    <div className="Navbar">
        <img className='menu_icon' src={assets.menu_icon} width='40rem' alt="Menu Icon" />
        <img src={assets.app_logo} alt="App Logo" className='logo'/>
        <ul className="navbarMenu mobileMe">
            <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
            <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
            <a href='#review' onClick={() => setMenu("Review")} className={menu === "Review" ? "active" : ""}>Review</a>
            <a href='#footer' onClick={() => setMenu("Contact")} className={menu === "Contact" ? "active" : ""}>Contact</a>
        </ul>
        <div className="navbarRight">
            <img src={assets.search_icon} alt="Search" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="Basket" />
                <div className="dot"></div>
            </div>
            <button onClick={() => setShowLogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar