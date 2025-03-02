import { Link } from "react-router-dom";

const Products = ({ product }) => {
  const { image, title, description, price, rating, id } = product;

  return (
    <Link to={`/singleproduct/${id}`} className="flex justify-center">
      <div className="bg-purple-100 w-full max-w-xs h-auto shadow-lg rounded-xl p-4 transition-transform transform hover:scale-105">
        <div className="flex justify-center">
          <img
            className="h-48 w-full object-cover rounded-md"
            src={image}
            alt={title}
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold truncate md:text-xl">{title}</h2>
          <p className="text-gray-700 text-sm mt-1 md:text-base">
            {description}
          </p>
          <p className="text-xl font-semibold mt-2">$ {price.toFixed(2)}</p>
          <p className="text-sm text-gray-500 mt-1">
            Rating: {rating.rate} ({rating.count} reviews)
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Products;
