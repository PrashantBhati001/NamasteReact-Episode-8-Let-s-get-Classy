import { LOGO_URL } from "../config/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header=()=>{

    const [accessbtn,setaccessbtn]=useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="Image not found" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login-btn"  onClick={()=>{
                        accessbtn=="Login" ?setaccessbtn("Logout"):setaccessbtn("Login")
                    }}>{accessbtn}</button>
                </ul>
            </div>

        </div>
    )

}

export default Header




