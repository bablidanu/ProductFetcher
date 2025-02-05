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
          toast.error("error!! pls try later", {
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
    <div className="">
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <div className="pt-10 pb-[150px]">
          <div className="mx-[9vw] flex gap-10">
            <div>
              <img
                className="max-w-xs"
                src={product.image}
                alt="product image"
              ></img>
            </div>
            <div className="flex flex-col gap-8 ml-12">
              <h2 className="mt-10 text-5xl font-semibold text-white">
                {product.title}
              </h2>
              <h2 className=" text-xl font-normal  text-white ">
                {product.description}
              </h2>
              <p className="text-normal font-normal text-white ">
                $ {product.price}
              </p>
              <button className="bg-yellow-300 p-4 hover:bg-white rounded-full">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default SingleProduct;
