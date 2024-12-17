import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/frontend_assets/assets'

const LoginPopup = ({ setShowLogin }) => {

    const [currState, setCurrState] = useState("Login")

    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Cancel" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? <></> :
                        <input type="text" placeholder="Your Name" id="your-name" required />}
                    <input type="email" placeholder="Your Email" id="your-email" required />
                    <input type="password" placeholder="Password" id="password" required />
                </div>
                <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the Terms of use & Privacy Policy.</p>
                </div>
                {currState === "Login"
                    ? <p>Create a New Account? <span title='Sign Up' onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
                    : <p>Already have an Account? <span title='Login' onClick={() => setCurrState("Login")}>Login Here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup