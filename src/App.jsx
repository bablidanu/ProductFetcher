import Header from "./assets/components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Signin,
  Signup,
  Product,
  SingleProduct,
} from "./assets/Pages/index";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/singleproduct/:id" element={<SingleProduct />}></Route>
        <Route path="*" element={<p>Error 404!!!</p>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
