import React, { useEffect, useState } from 'react'
import DishCard from '../Components/DishCard'
import Card from '../Components/card'
import axios from "axios"
import { useParams } from 'react-router-dom'

const Menu = () => {
  const [data, setData]= useState([])
  const [filterCategory, setFilterCategory]= useState("")
  const {id}= useParams()
  // if(id==="1"){
  //   setFilterCategory("")
  // }
  // else if (id==="2"){
  //   setFilterCategory("Pizzas")
  // }
  const fetchData=()=>{
    axios
    .get(`https://street-bites-api.onrender.com/menu`,{
      params: { category:"Pizzas"},
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
        <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)",width:"90%",margin:"auto"}}>
            {data?.map((el)=>(
              <DishCard key={el.id} {...el} />

            ))}
        </div>
    </div>
  )
}

export default Menu