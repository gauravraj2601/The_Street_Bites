import React, { useState, useEffect } from "react";
import "./Home.css";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import Card from "../Components/Card";
import home2 from "../Images/home2.png";
import { FaPhone } from "react-icons/fa";
import bg1 from "../Images/bg_1.png"
import bg2 from "../Images/bg_2.png"
const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const images = [
    bg1,
    bg2,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="container">
      
      <div
        className="sliding_div"
        style={{
          
          width: "100%",
          height: "450px",
          margin: "auto",
          // border: "1px solid red",
          display: "flex",
          // position: 'relative',\
        }}
      >
        <div
          style={{
            width: "45%",
            height: "350px",
            // border: "2px solid green",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap:"40px",
            opacity: currentImageIndex % 2 === 0 ? 1 : 0,
          }}
        >
          {/* image */}
          <div style={{display:'flex', alignItems:"center"}}>
            <img
              src={images[currentImageIndex]}
              alt="slide"
              style={{
                width: "450px",
                // height: "400px",
                objectFit: "cover",
              }}
            />
          </div>
          <div style={{ color: "white", height:"200px",width:"220px"  }}>
            <h1
              style={{
                fontFamily: "Nothing You Could Do, cursive",
                color: "#fac564",
                margin:"0 0 15px 0"
              }}
            >
              Delicious
            </h1>
            <h1>BURGERS</h1>
            <p style={{margin:"15px 0 25px 0", opacity:"1"}}>Tasty Amazing Burgers</p>
            <Button
              btnText={"View Menu"}
              buttonClick={() => navigate("/menucard")}
            />
          </div>
        </div>

        <div
          style={{
            width: "40%",
            height: "350px",
            // border: "2px solid green",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: currentImageIndex % 2 === 0 ? 0 : 1,
          }}
        >
          <div id="crunchy" style={{ height:"200px",width:"220px",marginTop: "20px", color: "white",  }}>
            <h1 style={{ color: "#fac564", margin:"0 0 15px 0" }}>Crunchy</h1>
            <h1>PIZZA'S</h1>
            <p style={{ margin:"15px 0 25px 0",opacity:"1"}}>Tasty Amazing Pizza's</p>
            <Button
              btnText={"View Menu"}
              buttonClick={() => navigate("/menucard")}
            />
          </div>
          {/* image */}
          <div style={{display:'flex', alignItems:"center"}}>
            <img
              src={images[currentImageIndex]}
              alt="slide"
              style={{
                width: "490px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          fontWeight: "650",
          fontFamily: "algerian",
          fontSize: "37px",
          marginTop: "10px",
        }}
      >
        Our Menu
      </div>
      <div>
        <Card />
      </div>
      <div
        style={{ marginTop: "20px", boxShadow: "white 0px 20px 30px -10px" }}
      >
        <img src={home2} alt="" />
      </div>
      <div style={{ marginTop: "50px", textAlign: "center" }}>
        <h1 style={{ fontSize: "30px" }}>Contact Us for Home Delivery</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "15px",
            justifyContent: "center",
            fontSize: "30px",
          }}
        >
          <FaPhone size={24} color="white" opacity=".9" />
          <span style={{ marginLeft: "10px" }}>+1 (123) 456-7890</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
