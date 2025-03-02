// import { Link } from "react-router-dom";
// import { useState } from "react";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="bg-slate-50 flex z-10 sticky top-0 flex-col md:flex-row justify-between items-center p-3 shadow-sm font-extrabold shadow-gray-500">
//       <div>
//         <h2 className="text-3xl">Be Human</h2>
//       </div>
//       <div className="md:hidden">
//         <button onClick={toggleMenu} className="p-2 text-gray-700">
//           {isOpen ? "Close" : "Menu"}
//         </button>
//       </div>
//       <nav
//         className={`flex-col md:flex-row gap-5 items-center mt-3 md:mt-0 ${
//           isOpen ? "flex" : "hidden"
//         } md:flex`}
//       >
//         <Link to="/" className="hover:text-blue-500 transition duration-200">
//           Home
//         </Link>
//         <Link
//           to="/signin"
//           className="hover:text-blue-500 transition duration-200"
//         >
//           Signin
//         </Link>
//         <Link
//           to="/signup"
//           className="hover:text-blue-500 transition duration-200"
//         >
//           Signup
//         </Link>
//         <Link
//           to="/products"
//           className="hover:text-blue-500 transition duration-200"
//         >
//           Products
//         </Link>
//       </nav>
//     </div>
//   );
// }
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-slate-50 flex z-10 sticky top-0 flex-col md:flex-row justify-between items-center p-3 shadow-sm font-extrabold shadow-gray-500">
      <div>
        <h2 className="text-3xl">Be Human</h2>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="p-2 text-gray-700">
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>
      <nav
        className={`flex-col md:flex-row gap-5 items-center mt-3 md:mt-0 ${
          isOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <Link to="/" className="hover:text-blue-500 transition duration-200">
          Home
        </Link>
        <Link
          to="/signin"
          className="hover:text-blue-500 transition duration-200"
        >
          Signin
        </Link>
        <Link
          to="/signup"
          className="hover:text-blue-500 transition duration-200"
        >
          Signup
        </Link>
        <Link
          to="/products"
          className="hover:text-blue-500 transition duration-200"
        >
          Products
        </Link>
      </nav>
    </div>
  );
}
