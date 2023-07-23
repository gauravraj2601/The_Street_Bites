import React from 'react'
import { FaPizzaSlice } from 'react-icons/fa';
import "./Loading.css"

const Loading = () => {
    const numberOfSlices = 6;

  return (
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop:'20px' }}>
      <div style={{ display: 'flex', animation: 'rotate 2s linear infinite' }}>
        {Array.from({ length: numberOfSlices }).map((_, index) => (
          <FaPizzaSlice key={index} style={{ fontSize: '36px', margin: '5px' }} />
        ))}
      </div>
    </div>
  )
}

export default Loading