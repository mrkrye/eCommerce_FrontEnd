import { Route, Routes } from "react-router";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Categories from "./components/Categories";
import SingleCategory from "./components/SingleCategory";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"*"} element={<Home />}></Route>
          <Route path={"/products"} element={<Products />}></Route>
          <Route path={"/products/:id"} element={<SingleProduct />}></Route>
          <Route path={"/categories"} element={<Categories />}></Route>
          <Route path={"/categories/:id"} element={<SingleCategory />}></Route>
          <Route path={"/login"} element={<Login />}></Route>
          <Route path={"/register"} element={<Register />}></Route>
          <Route path={"/cart"} element={<Cart />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
