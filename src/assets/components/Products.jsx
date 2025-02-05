import { Link } from "react-router-dom";
import { SingleProduct } from "../Pages";

const Products = ({ product }) => {
  const { image, title, description, price, rating, id } = product;

  return (
    <Link to={`/singleproduct/${id}`}>
      <div className=" bg-purple-100 w-[300px] h-auto shadow-lg rounded-xl p-4">
        <div className="flex w-[250px] flex-col items-center">
          <img className="h-[150px]" src={image} alt="Product image" />
        </div>
        <div className="p-5">
          <h2 className="text-1xl font-bold">{title}</h2>
          {/* <p className="text-normal">{description}</p> */}
          <p className="text-normal">$ {price} </p>
          {/* <p className="text-normal">rate </p> */}
        </div>
      </div>
    </Link>
  );
};
export default Products;
