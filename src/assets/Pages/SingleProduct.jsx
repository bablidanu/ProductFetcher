import React, { useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Products from "../components/Products";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(
    (state, action) => {
      if (action.type === "success") {
        return { loading: false, product: action.payload };
      } else {
        return state;
      }
    },
    {
      product: {},
      loading: true,
    }
  );

  useEffect(() => {
    if (!Number(id)) {
      navigate("/products");
    } else {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
          dispatch({ type: "success", payload: response.data });
        })
        .catch((err) => {
          toast.error("Error! Please try later", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          setTimeout(() => {
            navigate("/products");
          }, 1000);
        });
    }
  }, []);

  const { loading, product } = state;
  return (
    <div className="p-4">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="pt-10 pb-24 flex flex-wrap items-center justify-center">
          <div className="max-w-xs w-full md:w-1/2 lg:w-1/3 p-2">
            <img
              className="w-full object-cover rounded-md"
              src={product.image}
              alt="Product Image"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 p-2 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="mt-4 text-3xl font-semibold text-white">
              {product.title}
            </h2>
            <h2 className="text-xl font-normal text-white mt-2">
              {product.description}
            </h2>
            <p className="text-xl font-semibold text-white mt-2">
              $ {product.price}
            </p>
            <button className="bg-yellow-300 p-4 mt-4 hover:bg-white rounded-full">
              Add to cart
            </button>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default SingleProduct;
