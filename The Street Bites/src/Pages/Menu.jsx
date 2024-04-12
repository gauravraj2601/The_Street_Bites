import React, { useEffect, useState } from 'react'
import DishCard from '../Components/DishCard'
import Card from '../Components/Card'
import axios from "axios"
import { useParams } from 'react-router-dom'
import "./Menu.css"
import Loading from '../Components/Loading'

const Menu = () => {
  const [data, setData]= useState([])
  const [filterCategory, setFilterCategory]= useState("")
  const {id}= useParams()
  const [loading, setLoading] = useState(true);
 
  

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
    setLoading(true)
    axios
    .get(`https://street-bites-api.onrender.com/menu`,{
      params: { category:filterCategory},
    })
    .then((res)=>{
      setData(res.data)
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error)
      setLoading(false)
    })
  }
 

  useEffect(()=>{
    fetchData()
  },[filterCategory])
  console.log(data)
  console.log(filterCategory)
  return (
    <div className='container'>
              <div style={{textAlign:"center",fontWeight:"650", fontFamily:"algerian",fontSize:"27px",marginTop:"10px"}}>Our Menu</div>
        <Card />
        {loading? <Loading />:(<div id='menu_container' style={{width:"90%",margin:"auto", marginLeft:"7%", }}>
          {data?.map((el)=>(
            <DishCard key={el.id} {...el} />

          ))}
      </div>
          
        )}
    </div>
  )
}

export default Menu