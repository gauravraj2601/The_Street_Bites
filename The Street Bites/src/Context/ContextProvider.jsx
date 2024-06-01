import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"
import BACKEND_API from '../API/api';


export const AppContext= createContext();


const ContextProvider = ({children}) => {
    const [dark, setDark]= useState(false);
    const [data, setData]= useState([])
    const [loading, setLoading] = useState(false);

    const fetchData = () => {
        setLoading(true);
        axios
          .get(`${BACKEND_API}/menu`)
          .then((res) => {
            setData(res.data.menuList);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      };
      useEffect(() => {
        fetchData();
      }, []);
      console.log(`${data.length > 0?"got data":"no data"}`)
      // console.log(data)
      
  return (
    <AppContext.Provider  value={{loading, data, dark}}>
        {children}
    </AppContext.Provider>
  )
}

export default ContextProvider