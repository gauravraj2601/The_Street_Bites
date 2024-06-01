import React, { useEffect, useState } from "react";
import DishCard from "../Components/DishCard";
import Card from "../Components/Card";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import "./Menu.css";
import Loading from "../Components/Loading";
import BACKEND_API from "../API/api";

const Menu = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams]= useSearchParams();
  const category= searchParams.get("category")

 
  const fetchData = () => {
    setLoading(true);
    const categoryParam = (category === "New" || category === "All") ? null : (category === "Non-Veg")? "Fried Chicken": category;

    axios
      .get(`${BACKEND_API}/menu`, {
        params: { category: categoryParam },
      })
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
  }, [category]);
 
  return (
    <div className="container">
      <div
        style={{
          textAlign: "center",
          fontWeight: "650",
          fontFamily: "algerian",
          fontSize: "27px",
          marginTop: "10px",
        }}
      >
        Our Menu
      </div>
      <Card />
      {loading ? (
        <Loading />
      ) : (
        <div
          id="menu_container"
          style={{ width: "90%", margin: "auto", marginLeft: "7%" }}
        >
          {data && data?.map((el, index) => (
            <DishCard key={index+1} {...el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
