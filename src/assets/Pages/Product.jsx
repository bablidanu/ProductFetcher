import React, { useEffect, useReducer } from "react";
import axios from "axios";
import Products from "../components/Products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const reducer = (state, action) => {
  const { type, payload } = action;
  if (type === "success")
    return { ...state, products: payload, loading: false };
  else if (type === "error") return { ...state, loading: false, error: true };
};
const initialState = {
  products: [],
  loading: true,
  error: false,
};

const Product = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        dispatch({ type: "success", payload: data });
        toast.success("Products Fetched", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } catch (error) {
        dispatch({ type: "error" });
        toast.error("error!!!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
    fetchProducts();
  }, []);

  const { products, loading, error } = state;
  if (error) {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }
  return (
    <div className="flex justify-center flex-wrap gap-8">
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {products.map((product, index) => (
        <Products key={index} product={product} />
      ))}
      <ToastContainer />
    </div>
  );
};

export default Product;
