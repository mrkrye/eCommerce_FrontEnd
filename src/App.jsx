import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Categories from "./components/Categories";
import SingleCategory from "./components/SingleCategory";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Layout from "./components/Layout"

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            {/* {public routes} */}
            <Route path="/" elements={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:id" element={<SingleCategory />} />
            <Route path="/cart" element={<Cart />} />

            {/* {Protected Paths} */}


            {/* {Catch all} */}
            {/* <Route path="*" element={<Missing />} /> */}
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
