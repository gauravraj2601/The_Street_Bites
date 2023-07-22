import React, { useEffect, useState } from 'react'
import DishCard from '../Components/DishCard'
import Card from '../Components/card'
import axios from "axios"
import { useParams } from 'react-router-dom'
import "./Menu.css"

const Menu = () => {
  const [data, setData]= useState([])
  const [filterCategory, setFilterCategory]= useState("")
  const {id}= useParams()
 
  

  useEffect(() => {
    if (id === "1") {
      setFilterCategory(null);
    } else if (id === "2") {
      setFilterCategory("Pizzas");
    }
    else if (id === "3") {
      setFilterCategory("Burgers");
    }
    else if (id === "4") {
      setFilterCategory("Pastas");
    }
    else if (id === "5") {
      setFilterCategory("Fried Chicken");
    }
    else if (id === "6") {
      setFilterCategory("Desserts");
    }
    else if (id === "7") {
      setFilterCategory("Drinks");
    }
    else if (id === "8") {
      setFilterCategory(null);
    }
    else{
      setFilterCategory(null)
    }
  }, [id]);



  const fetchData=()=>{
    axios
    .get(`https://street-bites-api.onrender.com/menu`,{
      params: { category:filterCategory},
    })
    .then((res)=>setData(res.data))
    .catch((error)=>console.log(error))
  }
 

  useEffect(()=>{
    fetchData()
  },[filterCategory])
  console.log(data)
  console.log(filterCategory)
  return (
    <div>
        <Card />
        <div className='menu_container' style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)",width:"90%",margin:"auto", marginLeft:"7%"}}>
            {data?.map((el)=>(
              <DishCard key={el.id} {...el} />

            ))}
        </div>
    </div>
  )
}

export default Menu