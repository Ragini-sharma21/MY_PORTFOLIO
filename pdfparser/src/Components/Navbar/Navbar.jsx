import "./Navbar.css";
import React from 'react'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">PDF Parser</div>
            <span>toggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Reviews</li>
                    <li>ContactUs</li>
                    <li>Tutorials</li>

        
                </ul>
            </div>
            <button className="button n-button">
                Login/SignUp
            </button>
        </div>
      
    </div>
  )
}

export default Navbar
