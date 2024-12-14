import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

    const [menu, setMenu] = useState("Home")


  return (
    <div className="Navbar">
        <img src="/assests/app_logo.png" alt="App Logo" className='logo'/>
        <ul className="navbarMenu">
            <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</li>
            <li onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</li>
            <li onClick={() => setMenu("Orders")} className={menu === "Orders" ? "active" : ""}>Orders</li>
            <li onClick={() => setMenu("Contact")} className={menu === "Contact" ? "active" : ""}>Contact</li>
        </ul>
        <div className="navbarRight">
            <img src="/assests/frontend_assets/search_icon.png" alt="Search" />
            <div className="navbar-search-icon">
                <img src="/assests/frontend_assets/basket_icon.png" alt="Basket" />
                <div className="dot"></div>
            </div>
            <button>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar