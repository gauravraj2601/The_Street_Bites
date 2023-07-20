import React from 'react'
import "./Footer.css"
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';


const Footer = () => {
  return (
    <div style={{width:"100%", height:"350px", backgroundColor:"#101315",display:"flex",gap:"20px",paddingTop:"30px",marginTop:"5px"}}>
        <div style={{width:"30%", marginLeft:"20%"}}><h4>ABOUT US</h4>
            <p>‘The Street Bites’s is additionally home of the amazing Burgers,Sandwich,Pizzas, Pasta, Fried & Grilled Chicken,Wrappers,Biryani and Milkshakes.</p>
            <div style={{display:"flex", marginTop:"25px",gap:"7px"}}>
            <FaFacebook size={32} color="#4e6a94"  />       
             <FaInstagram size={32} color="#C13584" />
            </div>
        
        </div>
        <div style={{width:"50%"}}><h4>HAVE A QUESTIONS?</h4>

      <div style={{ display: 'flex', alignItems: 'center',marginTop:"30px" }}>
        <FaMapMarkerAlt size={24} color="white" opacity=".9" />
        <span style={{ marginLeft: '10px' }}>1234 Elm Street, City, Country</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center',marginTop:"25px"}}>
        <FaPhone size={24} color="white" opacity=".9" />
        <span style={{ marginLeft: '10px' }}>+1 (123) 456-7890</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center',marginTop:"25px"}}>
        <FaEnvelope size={24}color="white" opacity=".9"/>
        <span style={{ marginLeft: '10px' }}>contact@example.com</span>
      </div>
    </div>



   </div>
  )
}

export default Footer