import React from 'react'
import './footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img className='app-logo' src={assets.app_logo} alt="App Logo" />
                    <p>Choose from a dicerse menu featuring a delectable array of dishes crafted with the finest finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="facebook_icon" />
                        <img src={assets.twitter_icon} alt="twitter_icon" />
                        <img src={assets.linkedin_icon} alt="linkedin_icon" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                        <h2>GET IN TOUCH</h2>
                        <ul>
                            <li>+94 74 074 9695</li>
                            <li>spicecaravan@gmail.com</li>
                        </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 &copy; spicecaravan.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer