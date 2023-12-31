import React, { useState, useEffect } from "react";
import {  NavLink, useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import "./Navbar.css";
import axios from "axios";
import { IconButton, Tooltip } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import flag from "../Images/flag.png"


const Navbar = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  
  const fetchCartItems = () => {
   
    axios
      .get("https://street-bites-api.onrender.com/cart")
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
     
      });
  };

  useEffect(() => {
    fetchCartItems();
  }, [cartItems]);
 

  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        backgroundColor: "#121618",
        justifyContent: "space-between",
      }}
    >
      <div style={{ marginLeft: "10%", display: "flex" }}>
        <NavLink to={"/"}>
          <img src={logo} alt="Logo" />
        </NavLink>
        <img
          style={{ width: "100px", height: "77px", margin: "10px 0 0 -13px" }}
          src={flag}
          alt="imgError"
        />
      </div>
      <div
        style={{
          width: "40%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginRight: "15%",
        }}
      >
        <NavLink className="link" activeStyle={{ color: "yellow" }} to="/">
          Home
        </NavLink>

        <NavLink className="link" activeStyle={{ color: "red" }} to="/menucard">
          Menu
        </NavLink>

        <NavLink className="link" activeStyle={{ color: "red" }} to="/about">
          About Us
        </NavLink>

        <NavLink
          className="link"
          activeStyle={{ color: "#ffd12e" }}
          to="/contact"
        >
          Contact Us
        </NavLink>
        <div style={{ position: "relative" }}>
        <Tooltip label={`Total Items: ${cartItems.length>1? cartItems.length-1:0}`} placement="top">
          <IconButton
            aria-label="Cart"
            icon={<AiOutlineShoppingCart />}
            onClick={() => navigate("/cart")}
            colorScheme="yellow" // Customize the color as needed
            variant="outline" // You can use "solid" for a filled icon
          />
        </Tooltip>
        <div
          style={{
            position: "absolute",
            top: "-10px",
            right: "-10px",
            backgroundColor: "#ab6d1b",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
          }}
        >
          {cartItems.length>1? cartItems.length-1:0}
        </div>
      </div>
      <button id="sign" style={{width:"80px", height:"35px",backgroundColor:"#ab6d1b", color:"white",borderRadius:"15px", fontWeight:"700"}}  onClick={()=>navigate("/signin")} >SignUp</button>
      </div>
    </div>
  );
};
// alignItems: 'center', justifyContent: 'space-around'
export default Navbar;
