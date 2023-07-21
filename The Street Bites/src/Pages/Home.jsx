import React, { useState, useEffect } from 'react';
import "./Home.css"
import Button from '../Components/Button';
import { useNavigate } from 'react-router-dom';
import Card from '../Components/card';


const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigate= useNavigate()
    const images = [
      'http://www.thestreetbites.com/images/bg_1.png',
      'http://www.thestreetbites.com/images/bg_2.png',
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
        return () => clearInterval(interval);
    }, [images]);


  return (
    <>
   <div
      className='sliding_div'
      style={{
        width: '100%', 
        height: '650px',
        margin: 'auto',
        border: '1px solid red',
        display:"flex"
        // position: 'relative',\
      }}
    >
      Home
      <div style={{width:"40%",height:"350px",border:"2px solid green",margin:"auto",display:"flex",alignItems:"center",justifyContent:"center", opacity: currentImageIndex % 2 === 0 ? 1 : 0,  }}>
        <div>

      <img
        src={images[currentImageIndex]}
        alt="slide"
        style={{
            //   position: 'absolute',
            // top: "120px",
            // left: "20%",
            width: '450px', // Adjust the width of the image as needed
            height: '400px',
            objectFit: 'cover',
            
        }}
      />
        </div>
        <div style={{color:"white"}}>
            <h1 style={{fontFamily:"Nothing You Could Do, cursive", color:"#fac564"}}>Delicious</h1>
        <h1>BURGERS</h1>
        <p style={{}}>Tasty Amazing Burgers</p>
        <Button btnText={"View Menu"}  buttonClick={()=>navigate("/menu")}/>

        </div>
      </div>
      
      <div style={{width:"40",height:"350px",display:"flex", border:"2px solid green",margin:"auto",alignItems:"center",justifyContent:"center", opacity: currentImageIndex % 2 === 0 ? 0 : 1,}}>

        <div id="crunchy" style={{marginTop:"20px", color:"white"}}>
            <h1 style={{color:"#fac564"}}>Crunchy</h1>
        <h1>PIZZA'S</h1>
        <p>Tasty Amazing Pizza's</p>
        <Button btnText={"View Menu"} buttonClick={()=>navigate("/menu")} />
        </div>
    <div>
      <img
        src={images[(currentImageIndex )]}
        alt="slide"
        style={{
        //   position: 'absolute',
        //   top: "120px",
        //   right: "20%",
          
          width: '490px', // Adjust the width of the image as needed
          height: '400px', 
          objectFit: 'cover',
        //   opacity: currentImageIndex % 2 === 0 ? 0 : 1,
        }}
      />
   </div>
      </div>
    </div>
        <div style={{textAlign:"center",fontWeight:"650", fontFamily:"algerian",fontSize:"27px",marginTop:"10px"}}>Our Menu</div>
    <div>
        <Card />
    </div>
    </>
  )
}

export default Home