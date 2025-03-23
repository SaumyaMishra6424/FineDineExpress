
import {LOGO_URL} from "../utils/constant";
import React, { useState } from "react"; 
import {Link} from "react-router"; 
const Header = () => {
    const [reactBtn, setReactBtn] = useState("Login");
    
    return(
     <div className="header">
     <div className="logo-container">
     <img className="logo" src={LOGO_URL} />
     </div>
     <div className="nav-items">
     <ul>
     <li><Link to="/home">
        Home</Link></li>
     <li>
        <Link to="/about">About Us</Link></li>
     <li>
        <Link to="/contact">Contact Us </Link>
        </li>
     <li>
        <Link to ="/cart"> Cart </Link>
        </li>
     <button
    className="Login"
    onClick={() => {
    reactBtn === "Login"
    ? setReactBtn("Logout")
    : setReactBtn("Login");
    }}
    >
    {reactBtn}
    </button>
     </ul>

     </div>
     </div>
    )
    }
    export default Header;