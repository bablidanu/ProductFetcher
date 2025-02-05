import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-slate-50 m-4 flex justify-between items-center p-3 shadow-sm font-extrabold  shadow-gray-500 ">
      <div>
        <h2 className="text-3xl">Be...</h2>
      </div>
      <nav className="flex gap-5 items-center">
        <Link to="/">Home</Link>
        <Link to="/signin">Singin</Link>
        <Link to="signup">Singup</Link>
        <Link to="/products">Products</Link>
      </nav>
    </div>
  );
}
