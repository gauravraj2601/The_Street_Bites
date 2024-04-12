import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import "./Navbar.css";
import axios from "axios";
import { IconButton, Tooltip } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import flag from "../Images/flag.png";
import styled from "styled-components";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";



const NAV = styled.div`
    #hamBug{
      display: none;
   }


  @media (max-width: 768px) {
    .link {
      display: none;
    }
    #hamBug{
      display: block;
    }
  }
`;
const Navbar = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [showHam, setShowHam]= useState(false)

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
    <NAV>
      <div
        className="navbar"
        style={{
          display: "flex",
          width:"100%",
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
          id="section"
          style={{
            width: "45%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginRight: "10%",
          }}
        >
          <NavLink className="link" activeStyle={{ color: "yellow" }} to="/">
            Home
          </NavLink>

          <NavLink
            className="link"
            activeStyle={{ color: "red" }}
            to="/menucard"
          >
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
            <Tooltip
              label={`Total Items: ${
                cartItems.length > 1 ? cartItems.length - 1 : 0
              }`}
              placement="top"
            >
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
              {cartItems.length > 1 ? cartItems.length - 1 : 0}
            </div>
          </div>
          <button
            id="sign"
            style={{
              width: "80px",
              height: "35px",
              backgroundColor: "#ab6d1b",
              color: "white",
              borderRadius: "15px",
              fontWeight: "700",
            }}
            onClick={() => navigate("/signin")}
          >
            SignUp
          </button>
            {showHam?(
              <RxCross2 size={"35px"} color={"white"} onClick={() => setShowHam(!showHam)}  />
            ):(
              <RxHamburgerMenu id="hamBug"  size={"35px"} color={"white"}
                      onClick={() => setShowHam(!showHam)} 
              />
            )}

        </div>
      </div>
      {showHam && (
        <div
        style={{
          position:"absolute",
          right:"28px",
          width: "20%",
          display: "flex",
          flexDirection:"column",
          gap:"10px",
          alignItems: "center",
          justifyContent: "space-around",
          marginRight: "15%",
          color:"white",
          backgroundColor: "rgba(255, 255, 255, 0.5)", // Adjust the last value (alpha) for transparency
          zIndex:"1"
        }}
      >
        <NavLink  activeStyle={{ color: "yellow" }} to="/" 
        onClick={()=>setShowHam(false)}>
          Home
        </NavLink>

        <NavLink
          
          activeStyle={{ color: "red" }}
          to="/menucard"
          onClick={()=>setShowHam(false)}
        >
          Menu
        </NavLink>

        <NavLink  activeStyle={{ color: "red" }} to="/about"
        onClick={()=>setShowHam(false)}>
          About Us
        </NavLink>

        <NavLink
          
          activeStyle={{ color: "#ffd12e" }}
          to="/contact"
          onClick={()=>setShowHam(false)}
        >
          Contact Us
        </NavLink>       
      </div>
      )}
    </NAV>
  );
};
// alignItems: 'center', justifyContent: 'space-around'
export default Navbar;
