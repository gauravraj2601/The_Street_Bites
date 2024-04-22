import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from "axios";
import BACKEND_API from "../API/api";
import Loading from './Loading';
import DishCardSlider from './DishCardSlider';

const DishSlider = () => {
    const [loading, setLoading]= useState(true);
    const [data, setData] = useState([]);

    const fetchData = () => {
        // setLoading(true);
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
      console.log(data)
     
  return (
    <>
        {loading ? (
        <Loading />
      ) : (
        <DIV
          style={{ width: "100%", margin: "auto" }}
        >
          {data && data.slice(0,15)?.map((el) => (
                <DishCardSlider  key={el.id} {...el} />
          ))}
        </DIV>
      )}
       
    </>
  );
}

export default DishSlider;

const DIV = styled.div`
    width: 100%;
    height: "1000px";
    position: relative;
    top: 10px;
    overflow-x: auto; 
    /* border: 3px solid orange; */
    white-space: nowrap;
    margin: 15px 0 10px 0;
    padding-bottom: 10px;

    &::-webkit-scrollbar {
    display: none; // Hide the scrollbar
  }
    .scroll {
        display: inline-block; // Ensures elements stay inline
        margin-right: 5px; // Add margin to create space between scroll divs
    }


`;
