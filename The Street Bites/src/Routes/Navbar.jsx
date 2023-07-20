import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Images/logo.png';
import "./Navbar.css"
// import ""

const Navbar = () => {
  

    return (
        <div className="navbar" style={{ display: 'flex', backgroundColor: "#121618", justifyContent: 'space-between' }}>
          <div style={{ marginLeft: "10%",display:"flex" }}>
            <NavLink to={"/"}><img src={logo} alt="Logo" /></NavLink>
            <img style={{width:"100px", height:"77px",margin:"10px 0 0 -13px"}} src="http://www.thestreetbites.com/images/india-india-flag.gif" alt="imgError" />
          </div>
          <div style={{ width: "35%", display: "flex", alignItems: 'center', justifyContent: 'space-around',marginRight:"15%" }}>

            <NavLink className="link" activeStyle={{ color: 'yellow' }} to="/">Home</NavLink>

            <NavLink className="link" activeStyle={{color:"red"}} to="/menucard">Menu</NavLink>

            <NavLink className="link" activeStyle={{color:"red"}} to="/about">About Us</NavLink>

            <NavLink className="link" activeStyle={{ color: 'yellow' }} to="/contact">Contact Us</NavLink>
          </div>
        </div>
      );
};
// alignItems: 'center', justifyContent: 'space-around'
export default Navbar;



