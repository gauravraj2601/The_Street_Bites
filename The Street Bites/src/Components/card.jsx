import React from 'react'
import {Link} from "react-router-dom"

const Card = () => {
    const menuCard=[
        {
            img:"https://media.istockphoto.com/id/1268025993/photo/curry-powders-and-seeds.jpg?s=612x612&w=0&k=20&c=vtiWGevY3ONjKMB6aJf2-czFwNIIwxk51Pm3l43BOCM=",
            name:"New"

        },
        {
            img:  "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            name:"Pizzas"
        },
        {
            img:   "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            name:"Burgers"
        },
        {
            img:   "https://media.istockphoto.com/id/1398788293/photo/white-sauce-penne-pasta-directly-above-photo.webp?b=1&s=170667a&w=0&k=20&c=6FpP08HfJFPrEikpqkWV11rT_P7oUl047H2Tpq-UMfo=",
            name:"Pastas"
        },
        {
            img:  
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bm9uJTIwdmVnfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            name:"Non-Veg"
        },
        {
            img:   "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            name:"Dessert"
        },
        {
            img:   "https://images.unsplash.com/photo-1481671703460-040cb8a2d909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRyaW5rc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            name:"Drinks"
        },
        {
            img: 
            "https://media.istockphoto.com/id/665380564/photo/brunch-choice-crowd-dining-food-options-eating-concept.webp?b=1&s=170667a&w=0&k=20&c=Gvoyvqbf-ayHzplDzDYwRyUXih0ttfymg_DQDd8TUTk=",
            name:"All"
           
        }
    ]
  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)",width:"90%", margin:"auto",gap:"20px",marginTop:"15px" }}>
        {menuCard.map((el,index)=>{
            return(
               <Link to={`/menu/${index+1}`} style={{textDecoration:"none",fontFamily:"Graphik, sans-serif",color:"#e45c12", fontSize:"28px",fontWeight:"bold",display:"flex",}}>
                
                <div style={{width:"270px", height:"270px",
                         backgroundImage: `url(${el.img})`,
                         backgroundSize: "cover",
                         backgroundRepeat: "repeat",
                         borderRadius:"15px",
                         display:"flex",
                         justifyContent:"center",
                         alignItems:'flex-end',
                         fontFamily:"serif"
                        }} key={index} >{el.name}</div>
                </Link>
            )
        })}
    </div>
  )
}

export default Card