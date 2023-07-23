import React, { useEffect, useState } from "react";
import CartBox from "../Components/CartBox";
import "./CartItem.css";
import Loading from "../Components/Loading";
import axios from "axios";

const CartItem = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [grandTotal, setGrandTotal] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const fetchCartItems = () => {
    setLoading(true);
    axios
      .get("https://street-bites-api.onrender.com/cart")
      .then((response) => {
        setCartItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  useEffect(() => {
    const filterData = cartItems?.filter((el) => el.id !== 1);
    setFiltered(filterData || []); // Initialize with an empty array if filterData is null or undefined
  }, [cartItems]);

  useEffect(() => {
    // Calculate the grand total when cartItems change
    const total = cartItems.reduce((acc, el) => acc + el.totalOrderValue, 0);
    setGrandTotal(total);
  }, [cartItems]); // Dependency array with cartItems

  const handleDelete = (id) => {
    // Send delete request to the API
    axios
      .delete(`https://street-bites-api.onrender.com/cart/${id}`)
      .then((response) => {
        // Filter out the deleted item from the cartItems state
        setCartItems((prevCartItems) =>
          prevCartItems.filter((item) => item.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  return (
    <div className="container">
      <div
        style={{
          width: "80%",
          boxShadow: "white 0px 20px 30px -10px",
          borderRadius: "15px",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        <h1 style={{ fontSize: "20px", fontWeight: "700", color: "#ffd12e" }}>
          Cart
        </h1>
        {loading ? (
          <Loading />
        ) : (
          filtered?.map((el) => {
            return <CartBox key={el.id} item={el} onDelete={() => handleDelete(el.id)} />;
          })
        )}
      </div>
      <div style={{ height: "40px", display: "flex", marginTop: "30px" }}>
        <div
          style={{
            width: "80%",
            display: "flex",
            color: "#ffd12e",
            fontWeight: "700",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          Order Total:
        </div>
        <div
          style={{
            width: "20%",
            display: "flex",
            fontWeight: "700",
            paddingLeft: "10px",
            alignItems: "center",
          }}
        >
          {grandTotal}
        </div>
      </div>
    </div>
  );
};

export default CartItem;