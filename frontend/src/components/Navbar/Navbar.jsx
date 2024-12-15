import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets.js'

const Navbar = () => {

    const [menu, setMenu] = useState("Home")

  return (
    <div className="Navbar">
        <img className='menu_icon' src={assets.menu_icon} width='40rem' alt="Menu Icon" />
        <img src={assets.app_logo} alt="App Logo" className='logo'/>
        <ul className="navbarMenu mobileMe">
            <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</li>
            <li onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</li>
            <li onClick={() => setMenu("Orders")} className={menu === "Orders" ? "active" : ""}>Orders</li>
            <li onClick={() => setMenu("Contact")} className={menu === "Contact" ? "active" : ""}>Contact</li>
        </ul>
        <div className="navbarRight">
            <img src={assets.search_icon} alt="Search" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="Basket" />
                <div className="dot"></div>
            </div>
            <button>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar