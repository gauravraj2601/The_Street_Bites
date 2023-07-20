import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Home"
import Menu from "../Pages/Menu"
import Contact from "../Pages/Contact"
import Login from "../Pages/Login"

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path='/login' element={<Login />} />
    <Route path="/menu/:id" element={<Menu />}/>
    <Route path="/contact" element={<Contact />}/>
    </Routes>
  )
}

export default AllRoutes