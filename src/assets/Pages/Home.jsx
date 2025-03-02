import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      {/* Navigation Bar */}

      {/* Hero Section */}
      <div className="flex-grow flex items-center justify-center bg-gradient-to-tr from-gray-800 to-blue-500 p-10">
        <div className="text-white font-extrabold text-5xl text-center">
          Happy Shopping!
          <br /> Discover The Best Price, <br />
          Only Made For You.
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <button className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-full hover:bg-yellow-100 transition duration-300 shadow-lg">
          Shop Now
        </button>
      </div>

      {/* Featured Products Section */}
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-white text-3xl font-bold mb-4">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {/* Product Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
              alt="Product 1"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold mt-2">
              Mens Casual Premium Slim Fit T-Shirts
            </h3>
            <p className="text-gray-700 mt-2">
              Slim-fitting style, contrast raglan long sleeve, three-button
              henley placket, light weight & soft fabric for breathable and
              comfortable wearing. This is a great product that you will love!
            </p>
            <p className="text-xl font-semibold mt-2">$19.99</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-400 transition duration-300">
              Add to Cart
            </button>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
              alt="Product 2"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold mt-2">Mens Cotton Jacket</h3>
            <p className="text-gray-700 mt-2">
              Great outerwear jackets for Spring/Autumn/Winter, suitable for
              many occasions. Good gift choice for you or your family member.
            </p>
            <p className="text-xl font-semibold mt-2">$29.99</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-400 transition duration-300">
              Add to Cart
            </button>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
              alt="Product 3"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold mt-2">
              DANVOUY Womens T Shirt Casual Cotton Short
            </h3>
            <p className="text-gray-700 mt-2">
              95% Cotton, 5% Spandex, Casual, Short Sleeve, Letter Print,
              V-Neck, Fashion Tees. You won't regret buying this product!
            </p>
            <p className="text-xl font-semibold mt-2">$39.99</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-400 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-800 p-4">
        <div className="container mx-auto text-center text-gray-300">
          <p>&copy; 2025 Be Human. All rights reserved.</p>
          <p>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>{" "}
            |
            <a href="#" className="hover:text-white">
              {" "}
              Terms of Service
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
